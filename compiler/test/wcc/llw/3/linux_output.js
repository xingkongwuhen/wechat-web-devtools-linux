/*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'renderingMode']],[1,'canvas']])
Z([3,'barrage-area'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,';']])
Z([3,'weui-canvas'])
Z([3,'width: 100%; height: 100%;'])
Z([3,'2d'])
Z(z[1])
Z([a,[3,'opacity: '],[[7],[3,'alpha']],[3,'; font: '],[[7],[3,'font']],[3,'; padding: '],[[7],[3,'padding']],[3,'; z-index: '],z[2][2],z[2][3]])
Z([3,'tunnelId'])
Z([3,'tunnel'])
Z([[7],[3,'tunnels']])
Z(z[8])
Z([3,'barrage-tunnel'])
Z([a,[3,'height: '],[[6],[[7],[3,'tunnel']],[3,'height']],[3,'px; border-top-width: '],[[2,'?:'],[[7],[3,'tunnelShow']],[1,1],[1,0]],[3,'px']])
Z([3,'tunnel-tips'])
Z([[2,'!'],[[7],[3,'tunnelShow']]])
Z([a,[3,'轨道'],[[7],[3,'tunnelId']]])
Z([3,'bulletId'])
Z([3,'bullet'])
Z([[6],[[7],[3,'tunnel']],[3,'bullets']])
Z(z[17])
Z([3,'onAnimationend'])
Z([3,'onTapBullet'])
Z([a,[3,'bullet-item '],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'bullet']],[3,'duration']],[1,0]],[1,'bullet-move'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'bullet']],[3,'paused']],[1,'paused'],[1,'']]])
Z([[7],[3,'bulletId']])
Z([[7],[3,'tunnelId']])
Z([a,[3,'color: '],[[2,'?:'],[[6],[[7],[3,'bullet']],[3,'paused']],[1,'#fff'],[[6],[[7],[3,'bullet']],[3,'color']]],[3,'; height: '],z[13][2],[3,'px; line-height: '],z[13][2],[3,'px; animation-duration: '],[[6],[[7],[3,'bullet']],[3,'duration']],[3,'s; animation-play-state: '],[[2,'?:'],[[6],[[7],[3,'bullet']],[3,'paused']],[1,'paused'],[1,'running']]])
Z([[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']])
Z([3,'bullet-item_img'])
Z([3,'aspectFit'])
Z([[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']],[3,'src']])
Z([a,[3,'width: '],[[2,'||'],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']],[3,'width']],[[7],[3,'fontSize']]],[3,'px; height: '],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']],[3,'height']],[3,'px; margin-right: '],[[2,'||'],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']],[3,'gap']],[1,4]],[3,'px;']])
Z([3,'bullet-item_text'])
Z([3,'opacity: 1;'])
Z([a,[[6],[[7],[3,'bullet']],[3,'content']]])
Z([[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']])
Z(z[28])
Z(z[29])
Z([[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']],[3,'src']])
Z([a,z[31][1],[[2,'||'],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']],[3,'width']],[[7],[3,'fontSize']]],z[31][3],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']],[3,'height']],[3,'px; margin-left: '],[[2,'||'],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']],[3,'gap']],[1,4]],z[31][7]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wx-recycle-item'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_beginToScroll'])
Z([3,'wrap'])
Z([3,'content'])
Z([a,[3,'height:'],[[2,'?:'],[[7],[3,'useInPage']],[[2,'+'],[[2,'+'],[[7],[3,'totalHeight']],[[2,'?:'],[[7],[3,'hasBeforeSlotHeight']],[[7],[3,'beforeSlotHeight']],[1,0]]],[[2,'?:'],[[7],[3,'hasAfterSlotHeight']],[[7],[3,'afterSlotHeight']],[1,0]]],[[7],[3,'height']]],[3,'px;width:'],[[7],[3,'width']],[3,'px;transform:translateZ(0);-webkit-transform:translateZ(0);']])
Z([3,'_scrollViewDidScroll'])
Z([3,'_scrollToLower'])
Z([3,'_scrollToUpper'])
Z(z[2])
Z([[7],[3,'enableBackToTop']])
Z([[7],[3,'lowerThreshold']])
Z([[7],[3,'innerScrollIntoView']])
Z([[7],[3,'innerScrollTop']])
Z([[7],[3,'scrollWithAnimation']])
Z([1,false])
Z([[2,'?:'],[[7],[3,'useInPage']],[1,false],[[7],[3,'scrollY']]])
Z([3,'height:100%;position: relative;'])
Z([[7],[3,'throttle']])
Z([[7],[3,'upperThreshold']])
Z([3,'position: absolute;z-index:1;width:100%;left: 0;top: 0;opacity: 0;visibility: hidden;'])
Z([3,'itemsize'])
Z([3,'slot-before'])
Z([a,z[3][1],[[2,'?:'],[[7],[3,'hasBeforeSlotHeight']],[[2,'+'],[[7],[3,'beforeSlotHeight']],[1,'px']],[1,'auto']]])
Z([3,'before'])
Z([a,[3,'position:relative;width:100%;z-index:10;background: url(\x22'],[[7],[3,'placeholderImageStr']],[3,'\x22) repeat;height:'],[[7],[3,'totalHeight']],[3,'px;']])
Z([a,[3,'position: absolute;left:0;width:100%;top:'],[[7],[3,'innerBeforeHeight']],z[23][5]])
Z([3,'slot-after'])
Z([a,z[3][1],[[2,'?:'],[[7],[3,'hasAfterSlotHeight']],[[2,'+'],[[7],[3,'afterSlotHeight']],[1,'px']],[1,'auto']]])
Z([3,'after'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'use2dCanvas']])
Z([3,'weui-canvas'])
Z([a,[3,'width: '],[[7],[3,'width']],[3,'px; height: '],[[7],[3,'height']],[3,'px;']])
Z([3,'2d'])
Z(z[1])
Z([a,z[2][1],z[2][2],z[2][3],z[2][4],z[2][5]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'tabBar']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'btn-area'])
Z([3,'setTabBarBadge'])
Z([a,[3,'\n        '],[[2,'?:'],[[2,'!'],[[7],[3,'hasSetTabBarBadge']]],[1,'设置tab徽标'],[1,'移除tab徽标']],[3,'\n      ']])
Z([3,'showTabBarRedDot'])
Z([a,z[7][1],[[2,'?:'],[[2,'!'],[[7],[3,'hasShownTabBarRedDot']]],[1,'显示红点'],[1,'移除红点']],z[7][3]])
Z([3,'customStyle'])
Z([a,z[7][1],[[2,'?:'],[[2,'!'],[[7],[3,'hasCustomedStyle']]],[1,'自定义Tab样式'],[1,'移除自定义样式']],z[7][3]])
Z([3,'customItem'])
Z([a,z[7][1],[[2,'?:'],[[2,'!'],[[7],[3,'hasCustomedItem']]],[1,'自定义Tab信息'],[1,'移除自定义信息']],z[7][3]])
Z([3,'hideTabBar'])
Z([a,z[7][1],[[2,'?:'],[[2,'!'],[[7],[3,'hasHiddenTabBar']]],[1,'隐藏TabBar'],[1,'显示TabBar']],z[7][3]])
Z(z[5])
Z([3,'navigateBack'])
Z([3,'primary'])
Z([3,'返回上一级'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isSetTabBarPage']])
Z([3,'leaveSetTabBarPage'])
Z([3,'index page'])
Z([[7],[3,'theme']])
Z([3,'index-hd'])
Z([3,'index-logo'])
Z([3,'resources/kind/logo.png'])
Z([3,'index-desc'])
Z([3,'以下将演示小程序接口能力，具体属性参数详见 '])
Z([3,'weui-agree__link'])
Z([3,'/page/component/pages/doc-web-view/doc-web-view'])
Z([3,'小程序开发文档'])
Z([3,'。'])
Z([3,'index-bd'])
Z([3,'kind-list'])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'kind-list-item'])
Z([3,'kindToggle'])
Z([a,[3,'kind-list-item-hd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-hd-show'],[1,'']]])
Z(z[16])
Z([3,'kind-list-text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[2,'==='],[[7],[3,'theme']],[1,'dark']])
Z([3,'kind-list-img'])
Z([a,[3,'resources/kind/'],z[16],[3,'_dark.png']])
Z(z[24])
Z([a,z[25][1],z[16],[3,'.png']])
Z([a,[3,'kind-list-item-bd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-bd-show'],[1,'']]])
Z([a,[3,'navigator-box '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'navigator-box-show'],[1,'']]])
Z([3,'page'])
Z([[6],[[7],[3,'item']],[3,'pages']])
Z([3,'*item'])
Z([[2,'!=='],[[6],[[7],[3,'page']],[3,'url']],[1,'@set-tab-bar']])
Z([3,'navigator'])
Z([a,[3,'../../packageAPI/pages/'],z[16],[3,'/'],[[6],[[7],[3,'page']],[3,'url']]])
Z([3,'navigator-text'])
Z([a,[[6],[[7],[3,'page']],[3,'zh']]])
Z([3,'navigator-arrow'])
Z([3,'enterSetTabBarPage'])
Z(z[34])
Z(z[36])
Z([a,z[37][1]])
Z(z[38])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'theme']])
Z([3,'index'])
Z([3,'index-hd'])
Z([3,'index-logo'])
Z([3,'resources/kind/logo.png'])
Z([3,'index-desc'])
Z([3,'以下将演示小程序云开发能力，具体属性参数详见 '])
Z([3,'weui-agree__link'])
Z([3,'../../packageAPI/pages/doc-web-view/doc-web-view'])
Z([3,'小程序开发文档'])
Z([3,'。'])
Z([3,'index-bd'])
Z([3,'kind-list'])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'kind-list-item'])
Z([3,'kindToggle'])
Z([a,[3,'kind-list-item-hd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-hd-show'],[1,'']]])
Z(z[15])
Z([3,'kind-list-text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[2,'==='],[[7],[3,'theme']],[1,'dark']])
Z([3,'kind-list-img'])
Z([a,[3,'resources/kind/'],z[15],[3,'_dark.png']])
Z(z[23])
Z([a,z[24][1],z[15],[3,'.png']])
Z([a,[3,'kind-list-item-bd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-bd-show'],[1,'']]])
Z([a,[3,'navigator-box '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'navigator-box-show'],[1,'']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'pages']])
Z([3,'*item'])
Z([3,'navigator'])
Z([a,[3,'../../packageCloud/pages/'],z[15],[3,'/'],[[6],[[7],[3,'page']],[3,'url']]])
Z([3,'navigator-text'])
Z([a,[[6],[[7],[3,'page']],[3,'zh']]])
Z([3,'navigator-arrow'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'foot'])
Z([3,'page-foot'])
Z([3,'none'])
Z([3,'switchTab'])
Z([3,'/page/component/index'])
Z([3,'icon-foot'])
Z([3,'/image/icon_foot.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'head'])
Z([3,'page-head'])
Z([3,'page-head-title'])
Z([a,[[7],[3,'title']]])
Z([3,'page-head-line'])
Z([[7],[3,'desc']])
Z([3,'page-head-desc'])
Z([a,[[7],[3,'desc']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'theme']])
Z([3,'index'])
Z([3,'index-hd'])
Z([3,'index-logo'])
Z([3,'resources/kind/logo.png'])
Z([3,'index-desc'])
Z([3,'以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见 '])
Z([3,'weui-agree__link'])
Z([3,'pages/doc-web-view/doc-web-view'])
Z([3,'小程序开发文档'])
Z([3,'。'])
Z([3,'index-bd'])
Z([3,'kind-list'])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'kind-list-item'])
Z([3,'kindToggle'])
Z([a,[3,'kind-list-item-hd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-hd-show'],[1,'']]])
Z(z[15])
Z([3,'kind-list-text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[2,'==='],[[7],[3,'theme']],[1,'dark']])
Z([3,'kind-list-img'])
Z([a,[3,'resources/kind/'],z[15],[3,'_dark.png']])
Z(z[23])
Z([a,z[24][1],z[15],[3,'.png']])
Z([a,[3,'kind-list-item-bd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-bd-show'],[1,'']]])
Z([a,[3,'navigator-box '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'navigator-box-show'],[1,'']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'pages']])
Z([3,'*item'])
Z([[6],[[7],[3,'page']],[3,'appid']])
Z(z[32])
Z([3,'navigator'])
Z([3,''])
Z([3,'navigate'])
Z(z[35])
Z([3,'miniProgram'])
Z([3,'release'])
Z([3,'navigator-text'])
Z([a,[[6],[[7],[3,'page']],[3,'name']]])
Z([3,'navigator-arrow'])
Z(z[34])
Z([a,[3,'/packageComponent/pages/'],z[15],[3,'/'],[[7],[3,'page']],[3,'/'],[[7],[3,'page']]])
Z(z[40])
Z([a,[[7],[3,'page']]])
Z(z[42])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'theme']])
Z([3,'index-hd'])
Z([3,'index-logo'])
Z([3,'./images/logo_extended.png'])
Z([3,'index-desc'])
Z([3,'以下是对小程序内置组件能力的补充，包括 WeUI 组件库和一些常见的功能组件，具体属性参数详见 '])
Z([3,'weui-agree__link'])
Z([3,'/page/component/pages/doc-web-view/doc-web-view'])
Z([3,'小程序开发文档'])
Z([3,'。'])
Z([3,'page__bd page-weui page__bd_spacing'])
Z([3,'kind-list'])
Z([[7],[3,'list']])
Z([3,'id'])
Z([3,'kind-list__item'])
Z([3,'kindToggle'])
Z([a,[3,'weui-flex kind-list__item-hd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list__item-hd_show'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'weui-flex__item'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'kind-list__img'])
Z([a,[3,'images/icon_nav_'],z[18],[3,'.png']])
Z([a,[3,'kind-list__item-bd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list__item-bd_show'],[1,'']]])
Z([a,[3,'weui-cells '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'weui-cells_show'],[1,'']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'pages']])
Z([3,'*this'])
Z([[6],[[7],[3,'page']],[3,'url']])
Z([3,'weui-cell weui-cell_access'])
Z([a,[3,'../../packageExtend/pages/'],z[28]])
Z([3,'weui-cell__bd'])
Z([a,[[6],[[7],[3,'page']],[3,'zh']]])
Z([3,'weui-cell__ft weui-cell__ft_in-access'])
Z(z[29])
Z([a,z[30][1],[[6],[[7],[3,'item']],[3,'father']],[3,'/'],[[7],[3,'page']],[3,'/'],[[7],[3,'page']]])
Z(z[31])
Z([a,[[7],[3,'page']]])
Z(z[33])
Z([3,'page__ft'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./miniprogram_npm/miniprogram-barrage/index.wxml','./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml','./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml','./miniprogram_npm/wxml-to-canvas/index.wxml','./page/API/components/set-tab-bar/set-tab-bar.wxml','../../../common/head.wxml','../../../common/foot.wxml','./page/API/index.wxml','./page/cloud/index.wxml','./page/common/foot.wxml','./page/common/head.wxml','./page/component/index.wxml','./page/extend/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:1:1")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:1:1")
var xC=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:canvas:2:4")
var oD=_mz(z,'canvas',['id',3,'style',1,'type',2],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
}
else{oB.wxVkey=2
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:5:2")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:5:2")
var fE=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var cF=_v()
_(fE,cF)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:block:6:4")
var hG=function(cI,oH,oJ,gg){
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:block:6:4")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:7:6")
var aL=_mz(z,'view',['class',12,'style',1],[],cI,oH,gg)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:8:8")
var tM=_mz(z,'view',['class',14,'hidden',1],[],cI,oH,gg)
var eN=_oz(z,16,cI,oH,gg)
_(tM,eN)
cs.pop()
_(aL,tM)
var bO=_v()
_(aL,bO)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:block:9:8")
var oP=function(oR,xQ,fS,gg){
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:block:9:8")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:10:10")
var hU=_mz(z,'view',['bindanimationend',21,'bindtap',1,'class',2,'data-bulletid',3,'data-tunnelid',4,'style',5],[],oR,xQ,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,27,oR,xQ,gg)){oV.wxVkey=1
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:image:18:12")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:image:18:12")
var oX=_mz(z,'image',['class',28,'mode',1,'src',2,'style',3],[],oR,xQ,gg)
cs.pop()
_(oV,oX)
cs.pop()
}
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:25:12")
var lY=_mz(z,'view',['class',32,'style',1],[],oR,xQ,gg)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:text:26:14")
var aZ=_n('text')
var t1=_oz(z,34,oR,xQ,gg)
_(aZ,t1)
cs.pop()
_(lY,aZ)
cs.pop()
_(hU,lY)
var cW=_v()
_(hU,cW)
if(_oz(z,35,oR,xQ,gg)){cW.wxVkey=1
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:image:28:12")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:image:28:12")
var e2=_mz(z,'image',['class',36,'mode',1,'src',2,'style',3],[],oR,xQ,gg)
cs.pop()
_(cW,e2)
cs.pop()
}
oV.wxXCkey=1
cW.wxXCkey=1
cs.pop()
_(fS,hU)
cs.pop()
return fS
}
bO.wxXCkey=2
_2z(z,19,oP,cI,oH,gg,bO,'bullet','bulletId','bulletId')
cs.pop()
cs.pop()
_(oJ,aL)
cs.pop()
return oJ
}
cF.wxXCkey=2
_2z(z,10,hG,e,s,gg,cF,'tunnel','tunnelId','tunnelId')
cs.pop()
cs.pop()
_(oB,fE)
cs.pop()
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml:view:2:2")
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml:slot:3:4")
var x5=_n('slot')
cs.pop()
_(o4,x5)
cs.pop()
_(r,o4)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:2:2")
var f7=_mz(z,'view',['bindtouchstart',0,'class',1,'id',1,'style',2],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:scroll-view:3:4")
var c8=_mz(z,'scroll-view',['scrollAnchoring',-1,'bindscroll',4,'bindscrolltolower',1,'bindscrolltoupper',2,'class',3,'enableBackToTop',4,'lowerThreshold',5,'scrollIntoView',6,'scrollTop',7,'scrollWithAnimation',8,'scrollX',9,'scrollY',10,'style',11,'throttle',12,'upperThreshold',13],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:4:6")
var h9=_n('view')
_rz(z,h9,'style',18,e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:slot:5:8")
var o0=_n('slot')
_rz(z,o0,'name',19,e,s,gg)
cs.pop()
_(h9,o0)
cs.pop()
_(c8,h9)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:7:6")
var cAB=_mz(z,'view',['class',20,'style',1],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:slot:8:8")
var oBB=_n('slot')
_rz(z,oBB,'name',22,e,s,gg)
cs.pop()
_(cAB,oBB)
cs.pop()
_(c8,cAB)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:10:6")
var lCB=_n('view')
_rz(z,lCB,'style',23,e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:12:8")
var aDB=_n('view')
_rz(z,aDB,'style',24,e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:slot:13:10")
var tEB=_n('slot')
cs.pop()
_(aDB,tEB)
cs.pop()
_(lCB,aDB)
cs.pop()
_(c8,lCB)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:17:6")
var eFB=_mz(z,'view',['class',25,'style',1],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:slot:18:8")
var bGB=_n('slot')
_rz(z,bGB,'name',27,e,s,gg)
cs.pop()
_(eFB,bGB)
cs.pop()
_(c8,eFB)
cs.pop()
_(f7,c8)
cs.pop()
_(r,f7)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var xIB=_v()
_(r,xIB)
if(_oz(z,0,e,s,gg)){xIB.wxVkey=1
cs.push("./miniprogram_npm/wxml-to-canvas/index.wxml:canvas:1:1")
cs.push("./miniprogram_npm/wxml-to-canvas/index.wxml:canvas:1:1")
var oJB=_mz(z,'canvas',['id',1,'style',1,'type',2],[],e,s,gg)
cs.pop()
_(xIB,oJB)
cs.pop()
}
else{xIB.wxVkey=2
cs.push("./miniprogram_npm/wxml-to-canvas/index.wxml:canvas:2:2")
cs.push("./miniprogram_npm/wxml-to-canvas/index.wxml:canvas:2:2")
var fKB=_mz(z,'canvas',['canvasId',4,'style',1],[],e,s,gg)
cs.pop()
_(xIB,fKB)
cs.pop()
}
xIB.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var hMB=e_[x[4]].i
_ai(hMB,x[5],e_,x[4],1,1)
_ai(hMB,x[6],e_,x[4],2,2)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:view:4:2")
var oNB=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var cOB=_v()
_(oNB,cOB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:template:5:4")
var oPB=_oz(z,3,e,s,gg)
var lQB=_gd(x[4],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[4],5,16)
cs.pop()
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:view:7:4")
var tSB=_n('view')
_rz(z,tSB,'class',4,e,s,gg)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:view:8:6")
var eTB=_n('view')
_rz(z,eTB,'class',5,e,s,gg)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:9:8")
var bUB=_n('button')
_rz(z,bUB,'bindtap',6,e,s,gg)
var oVB=_oz(z,7,e,s,gg)
_(bUB,oVB)
cs.pop()
_(eTB,bUB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:12:8")
var xWB=_n('button')
_rz(z,xWB,'bindtap',8,e,s,gg)
var oXB=_oz(z,9,e,s,gg)
_(xWB,oXB)
cs.pop()
_(eTB,xWB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:15:8")
var fYB=_n('button')
_rz(z,fYB,'bindtap',10,e,s,gg)
var cZB=_oz(z,11,e,s,gg)
_(fYB,cZB)
cs.pop()
_(eTB,fYB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:18:8")
var h1B=_n('button')
_rz(z,h1B,'bindtap',12,e,s,gg)
var o2B=_oz(z,13,e,s,gg)
_(h1B,o2B)
cs.pop()
_(eTB,h1B)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:21:8")
var c3B=_n('button')
_rz(z,c3B,'bindtap',14,e,s,gg)
var o4B=_oz(z,15,e,s,gg)
_(c3B,o4B)
cs.pop()
_(eTB,c3B)
cs.pop()
_(tSB,eTB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:view:26:6")
var l5B=_n('view')
_rz(z,l5B,'class',16,e,s,gg)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:27:8")
var a6B=_mz(z,'button',['bindtap',17,'type',1],[],e,s,gg)
var t7B=_oz(z,19,e,s,gg)
_(a6B,t7B)
cs.pop()
_(l5B,a6B)
cs.pop()
_(tSB,l5B)
cs.pop()
_(oNB,tSB)
var e8B=_v()
_(oNB,e8B)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:template:31:4")
var b9B=_oz(z,20,e,s,gg)
var o0B=_gd(x[4],b9B,e_,d_)
if(o0B){
var xAC={}
var cur_globalf=gg.f
e8B.wxXCkey=3
o0B(xAC,xAC,e8B,gg)
gg.f=cur_globalf
}
else _w(b9B,x[4],31,16)
cs.pop()
cs.pop()
_(r,oNB)
hMB.pop()
hMB.pop()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var fCC=_v()
_(r,fCC)
if(_oz(z,0,e,s,gg)){fCC.wxVkey=1
cs.push("./page/API/index.wxml:set-tab-bar:1:1")
cs.push("./page/API/index.wxml:set-tab-bar:1:1")
var cDC=_n('set-tab-bar')
_rz(z,cDC,'bindunmount',1,e,s,gg)
cs.pop()
_(fCC,cDC)
cs.pop()
}
else{fCC.wxVkey=2
cs.push("./page/API/index.wxml:view:2:2")
cs.push("./page/API/index.wxml:view:2:2")
var hEC=_mz(z,'view',['class',2,'data-weui-theme',1],[],e,s,gg)
cs.push("./page/API/index.wxml:view:3:4")
var oFC=_n('view')
_rz(z,oFC,'class',4,e,s,gg)
cs.push("./page/API/index.wxml:image:4:6")
var cGC=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
cs.pop()
_(oFC,cGC)
cs.push("./page/API/index.wxml:view:5:6")
var oHC=_n('view')
_rz(z,oHC,'class',7,e,s,gg)
var lIC=_oz(z,8,e,s,gg)
_(oHC,lIC)
cs.push("./page/API/index.wxml:navigator:5:95")
var aJC=_mz(z,'navigator',['class',9,'url',1],[],e,s,gg)
var tKC=_oz(z,11,e,s,gg)
_(aJC,tKC)
cs.pop()
_(oHC,aJC)
var eLC=_oz(z,12,e,s,gg)
_(oHC,eLC)
cs.pop()
_(oFC,oHC)
cs.pop()
_(hEC,oFC)
cs.push("./page/API/index.wxml:view:7:4")
var bMC=_n('view')
_rz(z,bMC,'class',13,e,s,gg)
cs.push("./page/API/index.wxml:view:8:6")
var oNC=_n('view')
_rz(z,oNC,'class',14,e,s,gg)
var xOC=_v()
_(oNC,xOC)
cs.push("./page/API/index.wxml:block:9:8")
var oPC=function(cRC,fQC,hSC,gg){
cs.push("./page/API/index.wxml:block:9:8")
cs.push("./page/API/index.wxml:view:10:10")
var cUC=_n('view')
_rz(z,cUC,'class',17,cRC,fQC,gg)
cs.push("./page/API/index.wxml:view:11:12")
var oVC=_mz(z,'view',['bindtap',18,'class',1,'id',2],[],cRC,fQC,gg)
cs.push("./page/API/index.wxml:view:12:14")
var aXC=_n('view')
_rz(z,aXC,'class',21,cRC,fQC,gg)
var tYC=_oz(z,22,cRC,fQC,gg)
_(aXC,tYC)
cs.pop()
_(oVC,aXC)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,23,cRC,fQC,gg)){lWC.wxVkey=1
cs.push("./page/API/index.wxml:image:13:14")
cs.push("./page/API/index.wxml:image:13:14")
var eZC=_mz(z,'image',['class',24,'src',1],[],cRC,fQC,gg)
cs.pop()
_(lWC,eZC)
cs.pop()
}
else{lWC.wxVkey=2
cs.push("./page/API/index.wxml:image:14:14")
cs.push("./page/API/index.wxml:image:14:14")
var b1C=_mz(z,'image',['class',26,'src',1],[],cRC,fQC,gg)
cs.pop()
_(lWC,b1C)
cs.pop()
}
lWC.wxXCkey=1
cs.pop()
_(cUC,oVC)
cs.push("./page/API/index.wxml:view:16:12")
var o2C=_n('view')
_rz(z,o2C,'class',28,cRC,fQC,gg)
cs.push("./page/API/index.wxml:view:17:14")
var x3C=_n('view')
_rz(z,x3C,'class',29,cRC,fQC,gg)
var o4C=_v()
_(x3C,o4C)
cs.push("./page/API/index.wxml:block:18:16")
var f5C=function(h7C,c6C,o8C,gg){
cs.push("./page/API/index.wxml:block:18:16")
var o0C=_v()
_(o8C,o0C)
if(_oz(z,33,h7C,c6C,gg)){o0C.wxVkey=1
cs.push("./page/API/index.wxml:navigator:19:18")
cs.push("./page/API/index.wxml:navigator:19:18")
var lAD=_mz(z,'navigator',['class',34,'url',1],[],h7C,c6C,gg)
cs.push("./page/API/index.wxml:view:20:20")
var aBD=_n('view')
_rz(z,aBD,'class',36,h7C,c6C,gg)
var tCD=_oz(z,37,h7C,c6C,gg)
_(aBD,tCD)
cs.pop()
_(lAD,aBD)
cs.push("./page/API/index.wxml:view:21:20")
var eDD=_n('view')
_rz(z,eDD,'class',38,h7C,c6C,gg)
cs.pop()
_(lAD,eDD)
cs.pop()
_(o0C,lAD)
cs.pop()
}
else{o0C.wxVkey=2
cs.push("./page/API/index.wxml:view:23:18")
cs.push("./page/API/index.wxml:view:23:18")
var bED=_mz(z,'view',['bindtap',39,'class',1],[],h7C,c6C,gg)
cs.push("./page/API/index.wxml:view:24:20")
var oFD=_n('view')
_rz(z,oFD,'class',41,h7C,c6C,gg)
var xGD=_oz(z,42,h7C,c6C,gg)
_(oFD,xGD)
cs.pop()
_(bED,oFD)
cs.push("./page/API/index.wxml:view:25:20")
var oHD=_n('view')
_rz(z,oHD,'class',43,h7C,c6C,gg)
cs.pop()
_(bED,oHD)
cs.pop()
_(o0C,bED)
cs.pop()
}
o0C.wxXCkey=1
cs.pop()
return o8C
}
_wp('./page/API/index.wxml:block:18:16: wx:key="*item" does not look like a valid key name.')
o4C.wxXCkey=2
_2z(z,31,f5C,cRC,fQC,gg,o4C,'page','index','*item')
cs.pop()
cs.pop()
_(o2C,x3C)
cs.pop()
_(cUC,o2C)
cs.pop()
_(hSC,cUC)
cs.pop()
return hSC
}
_wp('./page/API/index.wxml:block:9:8: wx:key="{{item.id}}" does not look like a valid key name (did you mean wx:key="id" ?)')
xOC.wxXCkey=2
_2z(z,15,oPC,e,s,gg,xOC,'item','index','{{item.id}}')
cs.pop()
cs.pop()
_(bMC,oNC)
cs.pop()
_(hEC,bMC)
cs.pop()
_(fCC,hEC)
cs.pop()
}
fCC.wxXCkey=1
fCC.wxXCkey=3
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./page/cloud/index.wxml:view:1:1")
var cJD=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
cs.push("./page/cloud/index.wxml:view:2:4")
var hKD=_n('view')
_rz(z,hKD,'class',2,e,s,gg)
cs.push("./page/cloud/index.wxml:view:3:6")
var oLD=_n('view')
_rz(z,oLD,'class',3,e,s,gg)
cs.push("./page/cloud/index.wxml:image:4:8")
var cMD=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(oLD,cMD)
cs.push("./page/cloud/index.wxml:view:5:8")
var oND=_n('view')
_rz(z,oND,'class',6,e,s,gg)
var lOD=_oz(z,7,e,s,gg)
_(oND,lOD)
cs.push("./page/cloud/index.wxml:navigator:5:100")
var aPD=_mz(z,'navigator',['class',8,'url',1],[],e,s,gg)
var tQD=_oz(z,10,e,s,gg)
_(aPD,tQD)
cs.pop()
_(oND,aPD)
var eRD=_oz(z,11,e,s,gg)
_(oND,eRD)
cs.pop()
_(oLD,oND)
cs.pop()
_(hKD,oLD)
cs.push("./page/cloud/index.wxml:view:7:6")
var bSD=_n('view')
_rz(z,bSD,'class',12,e,s,gg)
cs.push("./page/cloud/index.wxml:view:8:8")
var oTD=_n('view')
_rz(z,oTD,'class',13,e,s,gg)
var xUD=_v()
_(oTD,xUD)
cs.push("./page/cloud/index.wxml:block:9:10")
var oVD=function(cXD,fWD,hYD,gg){
cs.push("./page/cloud/index.wxml:block:9:10")
cs.push("./page/cloud/index.wxml:view:10:12")
var c1D=_n('view')
_rz(z,c1D,'class',16,cXD,fWD,gg)
cs.push("./page/cloud/index.wxml:view:11:14")
var o2D=_mz(z,'view',['bindtap',17,'class',1,'id',2],[],cXD,fWD,gg)
cs.push("./page/cloud/index.wxml:view:12:16")
var a4D=_n('view')
_rz(z,a4D,'class',20,cXD,fWD,gg)
var t5D=_oz(z,21,cXD,fWD,gg)
_(a4D,t5D)
cs.pop()
_(o2D,a4D)
var l3D=_v()
_(o2D,l3D)
if(_oz(z,22,cXD,fWD,gg)){l3D.wxVkey=1
cs.push("./page/cloud/index.wxml:image:13:16")
cs.push("./page/cloud/index.wxml:image:13:16")
var e6D=_mz(z,'image',['class',23,'src',1],[],cXD,fWD,gg)
cs.pop()
_(l3D,e6D)
cs.pop()
}
else{l3D.wxVkey=2
cs.push("./page/cloud/index.wxml:image:14:16")
cs.push("./page/cloud/index.wxml:image:14:16")
var b7D=_mz(z,'image',['class',25,'src',1],[],cXD,fWD,gg)
cs.pop()
_(l3D,b7D)
cs.pop()
}
l3D.wxXCkey=1
cs.pop()
_(c1D,o2D)
cs.push("./page/cloud/index.wxml:view:16:14")
var o8D=_n('view')
_rz(z,o8D,'class',27,cXD,fWD,gg)
cs.push("./page/cloud/index.wxml:view:17:16")
var x9D=_n('view')
_rz(z,x9D,'class',28,cXD,fWD,gg)
var o0D=_v()
_(x9D,o0D)
cs.push("./page/cloud/index.wxml:block:18:18")
var fAE=function(hCE,cBE,oDE,gg){
cs.push("./page/cloud/index.wxml:block:18:18")
cs.push("./page/cloud/index.wxml:navigator:19:20")
var oFE=_mz(z,'navigator',['class',32,'url',1],[],hCE,cBE,gg)
cs.push("./page/cloud/index.wxml:view:20:22")
var lGE=_n('view')
_rz(z,lGE,'class',34,hCE,cBE,gg)
var aHE=_oz(z,35,hCE,cBE,gg)
_(lGE,aHE)
cs.pop()
_(oFE,lGE)
cs.push("./page/cloud/index.wxml:view:21:22")
var tIE=_n('view')
_rz(z,tIE,'class',36,hCE,cBE,gg)
cs.pop()
_(oFE,tIE)
cs.pop()
_(oDE,oFE)
cs.pop()
return oDE
}
_wp('./page/cloud/index.wxml:block:18:18: wx:key="*item" does not look like a valid key name.')
o0D.wxXCkey=2
_2z(z,30,fAE,cXD,fWD,gg,o0D,'page','index','*item')
cs.pop()
cs.pop()
_(o8D,x9D)
cs.pop()
_(c1D,o8D)
cs.pop()
_(hYD,c1D)
cs.pop()
return hYD
}
_wp('./page/cloud/index.wxml:block:9:10: wx:key="{{item.id}}" does not look like a valid key name (did you mean wx:key="id" ?)')
xUD.wxXCkey=2
_2z(z,14,oVD,e,s,gg,xUD,'item','index','{{item.id}}')
cs.pop()
cs.pop()
_(bSD,oTD)
cs.pop()
_(hKD,bSD)
cs.pop()
_(cJD,hKD)
cs.pop()
_(r,cJD)
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
d_[x[9]]["foot"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[9]+':foot'
r.wxVkey=b
gg.f=$gdc(f_["./page/common/foot.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
cs.push("./page/common/foot.wxml:navigator:2:4")
var oB=_mz(z,'navigator',['class',1,'hoverClass',1,'openType',2,'url',3],[],e,s,gg)
cs.push("./page/common/foot.wxml:image:3:6")
var xC=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
d_[x[10]]["head"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[10]+':head'
r.wxVkey=b
gg.f=$gdc(f_["./page/common/head.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
cs.push("./page/common/head.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./page/common/head.wxml:view:3:6")
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_oz(z,3,e,s,gg)
_(oD,fE)
cs.pop()
_(oB,oD)
cs.push("./page/common/head.wxml:view:4:6")
var cF=_n('view')
_rz(z,cF,'class',4,e,s,gg)
cs.pop()
_(oB,cF)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./page/common/head.wxml:view:5:6")
cs.push("./page/common/head.wxml:view:5:6")
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
cs.pop()
_(xC,hG)
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[10]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
cs.push("./page/component/index.wxml:view:1:1")
var xME=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
cs.push("./page/component/index.wxml:view:2:4")
var oNE=_n('view')
_rz(z,oNE,'class',2,e,s,gg)
cs.push("./page/component/index.wxml:view:3:6")
var fOE=_n('view')
_rz(z,fOE,'class',3,e,s,gg)
cs.push("./page/component/index.wxml:image:4:8")
var cPE=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(fOE,cPE)
cs.push("./page/component/index.wxml:view:5:8")
var hQE=_n('view')
_rz(z,hQE,'class',6,e,s,gg)
var oRE=_oz(z,7,e,s,gg)
_(hQE,oRE)
cs.push("./page/component/index.wxml:navigator:5:184")
var cSE=_mz(z,'navigator',['class',8,'url',1],[],e,s,gg)
var oTE=_oz(z,10,e,s,gg)
_(cSE,oTE)
cs.pop()
_(hQE,cSE)
var lUE=_oz(z,11,e,s,gg)
_(hQE,lUE)
cs.pop()
_(fOE,hQE)
cs.pop()
_(oNE,fOE)
cs.push("./page/component/index.wxml:view:7:6")
var aVE=_n('view')
_rz(z,aVE,'class',12,e,s,gg)
cs.push("./page/component/index.wxml:view:8:8")
var tWE=_n('view')
_rz(z,tWE,'class',13,e,s,gg)
var eXE=_v()
_(tWE,eXE)
cs.push("./page/component/index.wxml:block:9:10")
var bYE=function(x1E,oZE,o2E,gg){
cs.push("./page/component/index.wxml:block:9:10")
cs.push("./page/component/index.wxml:view:10:12")
var c4E=_n('view')
_rz(z,c4E,'class',16,x1E,oZE,gg)
cs.push("./page/component/index.wxml:view:11:14")
var h5E=_mz(z,'view',['bindtap',17,'class',1,'id',2],[],x1E,oZE,gg)
cs.push("./page/component/index.wxml:view:12:16")
var c7E=_n('view')
_rz(z,c7E,'class',20,x1E,oZE,gg)
var o8E=_oz(z,21,x1E,oZE,gg)
_(c7E,o8E)
cs.pop()
_(h5E,c7E)
var o6E=_v()
_(h5E,o6E)
if(_oz(z,22,x1E,oZE,gg)){o6E.wxVkey=1
cs.push("./page/component/index.wxml:image:13:16")
cs.push("./page/component/index.wxml:image:13:16")
var l9E=_mz(z,'image',['class',23,'src',1],[],x1E,oZE,gg)
cs.pop()
_(o6E,l9E)
cs.pop()
}
else{o6E.wxVkey=2
cs.push("./page/component/index.wxml:image:14:16")
cs.push("./page/component/index.wxml:image:14:16")
var a0E=_mz(z,'image',['class',25,'src',1],[],x1E,oZE,gg)
cs.pop()
_(o6E,a0E)
cs.pop()
}
o6E.wxXCkey=1
cs.pop()
_(c4E,h5E)
cs.push("./page/component/index.wxml:view:16:14")
var tAF=_n('view')
_rz(z,tAF,'class',27,x1E,oZE,gg)
cs.push("./page/component/index.wxml:view:17:16")
var eBF=_n('view')
_rz(z,eBF,'class',28,x1E,oZE,gg)
var bCF=_v()
_(eBF,bCF)
cs.push("./page/component/index.wxml:block:18:18")
var oDF=function(oFF,xEF,fGF,gg){
cs.push("./page/component/index.wxml:block:18:18")
var hIF=_v()
_(fGF,hIF)
if(_oz(z,32,oFF,xEF,gg)){hIF.wxVkey=1
cs.push("./page/component/index.wxml:navigator:19:20")
cs.push("./page/component/index.wxml:navigator:19:20")
var oJF=_mz(z,'navigator',['appId',33,'class',1,'extraData',2,'openType',3,'path',4,'target',5,'version',6],[],oFF,xEF,gg)
cs.push("./page/component/index.wxml:view:20:22")
var cKF=_n('view')
_rz(z,cKF,'class',40,oFF,xEF,gg)
var oLF=_oz(z,41,oFF,xEF,gg)
_(cKF,oLF)
cs.pop()
_(oJF,cKF)
cs.push("./page/component/index.wxml:view:21:22")
var lMF=_n('view')
_rz(z,lMF,'class',42,oFF,xEF,gg)
cs.pop()
_(oJF,lMF)
cs.pop()
_(hIF,oJF)
cs.pop()
}
else{hIF.wxVkey=2
cs.push("./page/component/index.wxml:navigator:23:20")
cs.push("./page/component/index.wxml:navigator:23:20")
var aNF=_mz(z,'navigator',['class',43,'url',1],[],oFF,xEF,gg)
cs.push("./page/component/index.wxml:view:24:22")
var tOF=_n('view')
_rz(z,tOF,'class',45,oFF,xEF,gg)
var ePF=_oz(z,46,oFF,xEF,gg)
_(tOF,ePF)
cs.pop()
_(aNF,tOF)
cs.push("./page/component/index.wxml:view:25:22")
var bQF=_n('view')
_rz(z,bQF,'class',47,oFF,xEF,gg)
cs.pop()
_(aNF,bQF)
cs.pop()
_(hIF,aNF)
cs.pop()
}
hIF.wxXCkey=1
cs.pop()
return fGF
}
_wp('./page/component/index.wxml:block:18:18: wx:key="*item" does not look like a valid key name.')
bCF.wxXCkey=2
_2z(z,30,oDF,x1E,oZE,gg,bCF,'page','index','*item')
cs.pop()
cs.pop()
_(tAF,eBF)
cs.pop()
_(c4E,tAF)
cs.pop()
_(o2E,c4E)
cs.pop()
return o2E
}
_wp('./page/component/index.wxml:block:9:10: wx:key="{{item.id}}" does not look like a valid key name (did you mean wx:key="id" ?)')
eXE.wxXCkey=2
_2z(z,14,bYE,e,s,gg,eXE,'item','index','{{item.id}}')
cs.pop()
cs.pop()
_(aVE,tWE)
cs.pop()
_(oNE,aVE)
cs.pop()
_(xME,oNE)
cs.pop()
_(r,xME)
return r
}
e_[x[11]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
cs.push("./page/extend/index.wxml:view:1:1")
var xSF=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
cs.push("./page/extend/index.wxml:view:6:7")
var oTF=_n('view')
_rz(z,oTF,'class',2,e,s,gg)
cs.push("./page/extend/index.wxml:image:7:6")
var fUF=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
cs.pop()
_(oTF,fUF)
cs.push("./page/extend/index.wxml:view:8:6")
var cVF=_n('view')
_rz(z,cVF,'class',5,e,s,gg)
var hWF=_oz(z,6,e,s,gg)
_(cVF,hWF)
cs.push("./page/extend/index.wxml:navigator:8:161")
var oXF=_mz(z,'navigator',['class',7,'url',1],[],e,s,gg)
var cYF=_oz(z,9,e,s,gg)
_(oXF,cYF)
cs.pop()
_(cVF,oXF)
var oZF=_oz(z,10,e,s,gg)
_(cVF,oZF)
cs.pop()
_(oTF,cVF)
cs.pop()
_(xSF,oTF)
cs.push("./page/extend/index.wxml:view:13:6")
var l1F=_n('view')
_rz(z,l1F,'class',11,e,s,gg)
cs.push("./page/extend/index.wxml:view:14:10")
var a2F=_n('view')
_rz(z,a2F,'class',12,e,s,gg)
var t3F=_v()
_(a2F,t3F)
cs.push("./page/extend/index.wxml:block:15:14")
var e4F=function(o6F,b5F,x7F,gg){
cs.push("./page/extend/index.wxml:block:15:14")
cs.push("./page/extend/index.wxml:view:16:18")
var f9F=_n('view')
_rz(z,f9F,'class',15,o6F,b5F,gg)
cs.push("./page/extend/index.wxml:view:17:22")
var c0F=_mz(z,'view',['bindtap',16,'class',1,'id',2],[],o6F,b5F,gg)
cs.push("./page/extend/index.wxml:view:18:26")
var hAG=_n('view')
_rz(z,hAG,'class',19,o6F,b5F,gg)
var oBG=_oz(z,20,o6F,b5F,gg)
_(hAG,oBG)
cs.pop()
_(c0F,hAG)
cs.push("./page/extend/index.wxml:image:19:26")
var cCG=_mz(z,'image',['class',21,'src',1],[],o6F,b5F,gg)
cs.pop()
_(c0F,cCG)
cs.pop()
_(f9F,c0F)
cs.push("./page/extend/index.wxml:view:21:22")
var oDG=_n('view')
_rz(z,oDG,'class',23,o6F,b5F,gg)
cs.push("./page/extend/index.wxml:view:22:26")
var lEG=_n('view')
_rz(z,lEG,'class',24,o6F,b5F,gg)
var aFG=_v()
_(lEG,aFG)
cs.push("./page/extend/index.wxml:block:23:30")
var tGG=function(bIG,eHG,oJG,gg){
cs.push("./page/extend/index.wxml:block:23:30")
var oLG=_v()
_(oJG,oLG)
if(_oz(z,28,bIG,eHG,gg)){oLG.wxVkey=1
cs.push("./page/extend/index.wxml:navigator:24:34")
cs.push("./page/extend/index.wxml:navigator:24:34")
var fMG=_mz(z,'navigator',['class',29,'url',1],[],bIG,eHG,gg)
cs.push("./page/extend/index.wxml:view:25:38")
var cNG=_n('view')
_rz(z,cNG,'class',31,bIG,eHG,gg)
var hOG=_oz(z,32,bIG,eHG,gg)
_(cNG,hOG)
cs.pop()
_(fMG,cNG)
cs.push("./page/extend/index.wxml:view:26:38")
var oPG=_n('view')
_rz(z,oPG,'class',33,bIG,eHG,gg)
cs.pop()
_(fMG,oPG)
cs.pop()
_(oLG,fMG)
cs.pop()
}
else{oLG.wxVkey=2
cs.push("./page/extend/index.wxml:navigator:28:34")
cs.push("./page/extend/index.wxml:navigator:28:34")
var cQG=_mz(z,'navigator',['class',34,'url',1],[],bIG,eHG,gg)
cs.push("./page/extend/index.wxml:view:29:38")
var oRG=_n('view')
_rz(z,oRG,'class',36,bIG,eHG,gg)
var lSG=_oz(z,37,bIG,eHG,gg)
_(oRG,lSG)
cs.pop()
_(cQG,oRG)
cs.push("./page/extend/index.wxml:view:30:38")
var aTG=_n('view')
_rz(z,aTG,'class',38,bIG,eHG,gg)
cs.pop()
_(cQG,aTG)
cs.pop()
_(oLG,cQG)
cs.pop()
}
oLG.wxXCkey=1
cs.pop()
return oJG
}
aFG.wxXCkey=2
_2z(z,26,tGG,o6F,b5F,gg,aFG,'page','index','*this')
cs.pop()
cs.pop()
_(oDG,lEG)
cs.pop()
_(f9F,oDG)
cs.pop()
_(x7F,f9F)
cs.pop()
return x7F
}
t3F.wxXCkey=2
_2z(z,13,e4F,e,s,gg,t3F,'item','index','id')
cs.pop()
cs.pop()
_(l1F,a2F)
cs.pop()
_(xSF,l1F)
cs.push("./page/extend/index.wxml:view:39:6")
var tUG=_n('view')
_rz(z,tUG,'class',39,e,s,gg)
cs.pop()
_(xSF,tUG)
cs.pop()
_(r,xSF)
return r
}
e_[x[12]]={f:m10,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}

