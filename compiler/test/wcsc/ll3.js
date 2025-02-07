#!/usr/bin/env node

const { spawn, spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { exit } = require("process");

const projectPath = "/mnt/disk1/WeChatProjects/miniprogram-demo/miniprogram/";
const config = [
    "-db",
    "-pc",
    "9",
    "./page/component/index.wxss",
    "./page/API/index.wxss",
    "./page/cloud/index.wxss",
    "./page/extend/index.wxss",
    "./miniprogram_npm/miniprogram-barrage/index.wxss",
    "./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxss",
    "./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxss",
    "./miniprogram_npm/wxml-to-canvas/index.wxss",
    "./page/API/components/set-tab-bar/set-tab-bar.wxss",
    "./app.wxss",
    "./common/lib/weui.wxss",
    "./page/common/common.wxss",
    "./page/common/index.wxss",
    "./page/common/lib/weui.wxss",
];

const test_wine = () => {
    const wine = spawn(
        path.resolve(__dirname, "../../../package.nw/js/vendor/wcsc.exe"),
        config,
        {
            cwd: projectPath,
        }
    );
    const spwanData = [],
        errData = [];
    wine.stdout.on("data", (e) => {
        spwanData.push(e);
    });
    wine.stderr.on("data", (e) => {
        errData.push(e);
    });
    return new Promise((resolve, reject) => {
        wine.on("close", (n) => {
            console.log("wine n: ", n);
            if (0 === n) {
                let result = Buffer.concat(spwanData).toString();
                result = JSON.parse(result);
                // delete result.generateFunctionContent["__COMMON__"];
                result = JSON.stringify(result, null, 4);
                // result = result.generateFunctionContent["__COMMON__"];
                fs.writeFileSync(
                    path.resolve(__dirname, "./3/wine_output.json"),
                    result
                );
                // process.stdout.write(result);
                resolve(result);
            } else {
                process.stderr.write(
                    "wine error:",
                    Buffer.concat(errData).toString()
                );
                // process.stderr.write(Buffer.concat(spwanData).toString());
                reject(n);
            }
        });
    });
};
const test_node = () => {
    const node_exec = spawn(
        path.resolve(__dirname, "../../nodejs/wcsc"),
        config,
        {
            cwd: projectPath,
            env: {
                WX_DEBUG_COMPILER_OUTPUT: path.resolve(__dirname, "./3"),
            },
            // stdio: 'inherit'
        }
    );
    const spwanData = [],
        errData = [];
    node_exec.stdout.on("data", (e) => {
        spwanData.push(e);
        // console.log(e.toString())
    });
    node_exec.stderr.on("data", (e) => {
        errData.push(e);
        // console.log(e.toString())
    });
    return new Promise((resolve, reject) => {
        node_exec.on("close", (n) => {
            console.log("node n: ", n);
            if (0 === n) {
                let result = Buffer.concat(spwanData).toString();
                // require('fs').writeFileSync('/mnt/disk2/wechat-web-devtools-linux/tmp/llw2.json', result)
                // process.stdout.write(result);
                result = JSON.parse(result);
                // delete result.generateFunctionContent["__COMMON__"];
                result = JSON.stringify(result, null, 4);
                // result = result.generateFunctionContent["__COMMON__"];
                fs.writeFileSync(
                    path.resolve(__dirname, "./3/node_output.json"),
                    result
                );
                resolve(result);
            } else {
                process.stderr.write(Buffer.concat(errData).toString());
                // process.stderr.write(Buffer.concat(spwanData).toString());
                reject(n);
            }
        });
    });
};

const test = async () => {
    try {
        const node_result = await test_node();
        const wine_result = await test_wine();
        console.log("结果是否一致：", wine_result.trim() === node_result);
    } catch (err) {
        console.error("错误：", err);
    }
};
test();
