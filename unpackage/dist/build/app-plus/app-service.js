var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
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

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

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
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'/static/20191125160241.png'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'you-scroll data-v-647ba504 vue-ref'])
Z([3,'youScroll'])
Z([3,'pullDown data-v-647ba504'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateY('],[[7],[3,'translateY']]],[1,'px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[2,'?:'],[[7],[3,'isDown']],[1,'0s'],[1,'0.3s']]],[1,';']]])
Z([[6],[[7],[3,'$slots']],[3,'pullDown']])
Z([3,'pullDown'])
Z([3,'_span data-v-647ba504'])
Z([[2,'=='],[[7],[3,'pullDownStatus']],[1,1]])
Z([[2,'=='],[[7],[3,'pullDownStatus']],[1,2]])
Z([[2,'=='],[[7],[3,'pullDownStatus']],[1,3]])
Z([3,'__e'])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[10])
Z([3,'you-scroll-inner data-v-647ba504 vue-ref'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'startFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'endFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchcancel']],[[4],[[5],[[4],[[5],[[5],[1,'endFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'youScrollInner'])
Z([[7],[3,'scrollToTop']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateY('],[[7],[3,'translateY']]],[1,'px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[2,'?:'],[[7],[3,'isDown']],[1,'0s'],[1,'transform 0.3s']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'lists']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'PageCur']],[1,'home']])
Z([3,'__l'])
Z([3,'1'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'service']])
Z(z[1])
Z([3,'2'])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'person']])
Z(z[1])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'/static/20191125160241.png'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-3c79173a'])
Z([3,'moments'])
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z(z[0])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z(z[3])
Z([3,'__e'])
Z(z[9])
Z(z[0])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sendMessage']],[[4],[[5],[[4],[[5],[1,'send_comment']]]]]]]],[[4],[[5],[[5],[1,'^blur']],[[4],[[5],[[4],[[5],[1,'blur']]]]]]]]])
Z([[7],[3,'focus']])
Z([[7],[3,'input_placeholder']])
Z([3,'2'])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'backText']],[1,'content']]])
Z(z[2])
Z([3,'__e'])
Z(z[7])
Z(z[7])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onPullDown']],[[4],[[5],[[4],[[5],[1,'onPullDown']]]]]]]],[[4],[[5],[[5],[1,'^onScroll']],[[4],[[5],[[4],[[5],[1,'onScroll']]]]]]]],[[4],[[5],[[5],[1,'^onLoadMore']],[[4],[[5],[[4],[[5],[1,'onLoadMore']]]]]]]]])
Z([3,'scroll'])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./colorui/components/newscard.wxml','./components/im-chat/chatinput.wxml','./components/you-scroll.wxml','./pages/home/home.wxml','./pages/index/index.wxml','./pages/person/home.wxml','./pages/service/data_recording.wxml','./pages/service/home.wxml','./pages/service/live.wxml','./pages/service/release_new.wxml','./pages/service/show.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_n('slot')
_rz(z,fE,'name',6,e,s,gg)
_(oD,fE)
_(xC,oD)
}
var cF=_n('slot')
_rz(z,cF,'name',7,e,s,gg)
_(oB,cF)
var hG=_n('slot')
_rz(z,hG,'name',8,e,s,gg)
_(oB,hG)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cI=_mz(z,'cu-custom',['bgImage',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(r,cI)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var aL=_mz(z,'view',['class',0,'data-ref',1],[],e,s,gg)
var tM=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,4,e,s,gg)){eN.wxVkey=1
var bO=_n('slot')
_rz(z,bO,'name',5,e,s,gg)
_(eN,bO)
}
else{eN.wxVkey=2
var oP=_n('label')
_rz(z,oP,'class',6,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,7,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_oz(z,8,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(oP,fS)
if(_oz(z,9,e,s,gg)){fS.wxVkey=1
}
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
_(eN,oP)
}
eN.wxXCkey=1
_(aL,tM)
var cT=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',10,'bindtouchcancel',1,'bindtouchend',2,'bindtouchmove',3,'bindtouchstart',4,'class',5,'data-event-opts',6,'data-ref',7,'scrollTop',8,'style',9],[],e,s,gg)
var hU=_n('slot')
_(cT,hU)
_(aL,cT)
_(r,aL)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cW=_mz(z,'newscard',['bind:__l',0,'reciveUserInfo',1,'vueId',1],[],e,s,gg)
_(r,cW)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var lY=_n('view')
var aZ=_v()
_(lY,aZ)
if(_oz(z,0,e,s,gg)){aZ.wxVkey=1
var b3=_mz(z,'home',['bind:__l',1,'vueId',1],[],e,s,gg)
_(aZ,b3)
}
var t1=_v()
_(lY,t1)
if(_oz(z,3,e,s,gg)){t1.wxVkey=1
var o4=_mz(z,'service',['bind:__l',4,'vueId',1],[],e,s,gg)
_(t1,o4)
}
var e2=_v()
_(lY,e2)
if(_oz(z,6,e,s,gg)){e2.wxVkey=1
var x5=_mz(z,'person',['bind:__l',7,'vueId',1],[],e,s,gg)
_(e2,x5)
}
aZ.wxXCkey=1
aZ.wxXCkey=3
t1.wxXCkey=1
t1.wxXCkey=3
e2.wxXCkey=1
e2.wxXCkey=3
_(r,lY)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var c8=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(r,c8)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o0=_mz(z,'cu-custom',['bgImage',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
_(r,o0)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oBB=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var aDB=_mz(z,'cu-custom',['bgColor',2,'bind:__l',1,'class',2,'isBack',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(oBB,aDB)
var tEB=_mz(z,'chat-input',['bind:__l',8,'bind:blur',1,'bind:sendMessage',2,'class',3,'data-event-opts',4,'focus',5,'placeholder',6,'vueId',7],[],e,s,gg)
_(oBB,tEB)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,16,e,s,gg)){lCB.wxVkey=1
}
lCB.wxXCkey=1
_(r,oBB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var bGB=_n('view')
var xIB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(bGB,xIB)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,5,e,s,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
_(r,bGB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var fKB=_n('view')
_rz(z,fKB,'class',0,e,s,gg)
var cLB=_mz(z,'cu-custom',['bgColor',1,'bind:__l',1,'isBack',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(fKB,cLB)
var hMB=_mz(z,'you-scroll',['bind:__l',6,'bind:onLoadMore',1,'bind:onPullDown',2,'bind:onScroll',3,'class',4,'data-event-opts',5,'data-ref',6,'vueId',7,'vueSlots',8],[],e,s,gg)
_(fKB,hMB)
_(r,fKB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/service/data_recording","pages/service/release_new","pages/service/show","pages/service/live"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"ColorUi for UniApp","navigationStyle":"custom","navigationBarTextStyle":"white"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"恒见校园健康-年轻人一站式健康服务平台","compilerVersion":"2.3.7","usingComponents":{"home":"/pages/home/home","service":"/pages/service/home","person":"/pages/person/home","cu-custom":"/colorui/components/cu-custom","newscard":"/colorui/components/newscard"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['colorui/components/newscard.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"},"component":true};
__wxAppCode__['colorui/components/newscard.wxml']=$gwx('./colorui/components/newscard.wxml');

__wxAppCode__['components/im-chat/chatinput.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/im-chat/chatinput.wxml']=$gwx('./components/im-chat/chatinput.wxml');

__wxAppCode__['components/you-scroll.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/you-scroll.wxml']=$gwx('./components/you-scroll.wxml');

__wxAppCode__['pages/home/home.json']={"usingComponents":{"newscard":"/colorui/components/newscard"},"component":true};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"uni-app","usingComponents":{"home":"/pages/home/home","service":"/pages/service/home","person":"/pages/person/home"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/person/home.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/person/home.wxml']=$gwx('./pages/person/home.wxml');

__wxAppCode__['pages/service/data_recording.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/service/data_recording.wxml']=$gwx('./pages/service/data_recording.wxml');

__wxAppCode__['pages/service/home.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"},"component":true};
__wxAppCode__['pages/service/home.wxml']=$gwx('./pages/service/home.wxml');

__wxAppCode__['pages/service/live.json']={"navigationBarTitleText":"我的校园","enablePullDownRefresh":true,"bounce":"none","titleNView":{"type":"transparent","buttons":[{"background":"rgba(255,255,255,0.2)","color":"#696969","type":"none","fontSrc":"/static/fonts/iconfont.ttf","text":""}]},"usingComponents":{"cu-custom":"/colorui/components/cu-custom","chat-input":"/components/im-chat/chatinput"}};
__wxAppCode__['pages/service/live.wxml']=$gwx('./pages/service/live.wxml');

__wxAppCode__['pages/service/release_new.json']={"navigationBarTitleText":"发布新动态","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/service/release_new.wxml']=$gwx('./pages/service/release_new.wxml');

__wxAppCode__['pages/service/show.json']={"navigationBarTitleText":"今日SHOW","usingComponents":{"cu-custom":"/colorui/components/cu-custom","you-scroll":"/components/you-scroll"}};
__wxAppCode__['pages/service/show.wxml']=$gwx('./pages/service/show.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"12af":function(e,t,n){"use strict";var o=n("da27"),r=n.n(o);r.a},"3ef3":function(e,t,n){"use strict";n.r(t);var o=n("f93f");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("12af");var a,u,l=n("2877"),c=Object(l["a"])(o["default"],a,u,!1,null,null,null);t["default"]=c.exports},"50e2":function(e,t,n){"use strict";(function(e){n("f43f"),n("921b");var t=r(n("66fd")),o=r(n("3ef3"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){return n.e("pages/home/home").then(n.bind(null,"e59d"))};t.default.component("home",l);var c=function(){return n.e("pages/service/home").then(n.bind(null,"185d"))};t.default.component("service",c);var f=function(){return n.e("pages/person/home").then(n.bind(null,"1b4e"))};t.default.component("person",f);var i=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"8102"))};t.default.component("cu-custom",i);var d=function(){return n.e("colorui/components/newscard").then(n.bind(null,"c53b"))};t.default.component("newscard",d),t.default.config.productionTip=!1,o.default.mpType="app";var p=new t.default(a({},o.default));e(p).$mount()}).call(this,n("6e42")["createApp"])},c7b4:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("66fd"));function a(e){return e&&e.__esModule?e:{default:e}}var u={onLaunch:function(){e.getSystemInfo({success:function(e){r.default.prototype.StatusBar=e.statusBarHeight,"android"==e.platform?r.default.prototype.CustomBar=e.statusBarHeight+50:r.default.prototype.CustomBar=e.statusBarHeight+45}}),r.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){console.log(o("App Show"," at App.vue:109"))},onHide:function(){console.log(o("App Hide"," at App.vue:112"))}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},da27:function(e,t,n){},f93f:function(e,t,n){"use strict";n.r(t);var o=n("c7b4"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a}},[["50e2","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, c = t[0], i = t[1], s = t[2], l = 0, p = []; l < c.length; l++) {
      o = c[l], a[o] && p.push(a[o][0]), a[o] = 0;
    }

    for (r in i) {
      Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }

    m && m(t);

    while (p.length) {
      p.shift()();
    }

    return u.push.apply(u, s || []), n();
  }

  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
        var c = n[o];
        0 !== a[c] && (r = !1);
      }

      r && (u.splice(t--, 1), e = i(i.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      u = [];

  function c(e) {
    return i.p + "" + e + ".js";
  }

  function i(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }

  i.e = function (e) {
    var t = [],
        n = {
      "pages/home/home": 1,
      "pages/person/home": 1,
      "pages/service/home": 1,
      "components/you-scroll": 1,
      "components/im-chat/chatinput": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "colorui/components/cu-custom": "colorui/components/cu-custom",
        "colorui/components/newscard": "colorui/components/newscard",
        "pages/home/home": "pages/home/home",
        "pages/person/home": "pages/person/home",
        "pages/service/home": "pages/service/home",
        "components/you-scroll": "components/you-scroll",
        "components/im-chat/chatinput": "components/im-chat/chatinput"
      }[e] || e) + ".wxss", a = i.p + r, u = document.getElementsByTagName("link"), c = 0; c < u.length; c++) {
        var s = u[c],
            l = s.getAttribute("data-href") || s.getAttribute("href");
        if ("stylesheet" === s.rel && (l === r || l === a)) return t();
      }

      var p = document.getElementsByTagName("style");

      for (c = 0; c < p.length; c++) {
        s = p[c], l = s.getAttribute("data-href");
        if (l === r || l === a) return t();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function (t) {
        var r = t && t.target && t.target.src || a,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.request = r, delete o[e], m.parentNode.removeChild(m), n(u);
      }, m.href = a;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(m);
    }).then(function () {
      o[e] = 0;
    }));
    var r = a[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var u = new Promise(function (t, n) {
        r = a[e] = [t, n];
      });
      t.push(r[2] = u);
      var s,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.src = c(e), s = function s(t) {
        l.onerror = l.onload = null, clearTimeout(p);
        var n = a[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            u.type = r, u.request = o, n[1](u);
          }

          a[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        s({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = s, document.head.appendChild(l);
    }
    return Promise.all(t);
  }, i.m = e, i.c = r, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      i.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "/", i.oe = function (e) {
    throw console.error(e), e;
  };
  var s = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = s.push.bind(s);
  s.push = t, s = s.slice();

  for (var p = 0; p < s.length; p++) {
    t(s[p]);
  }

  var m = l;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(i.length>1){var a=i.pop();o=i.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=i[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2145:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=[{post_id:"1",uid:1,username:"柏舟号",header_image:"/static/live/test/微信图片_20191125165059.jpg",content:{text:"最懂你的资源工具箱~柏舟号为你定期带来免费干货大咖经验，包括各类教程软件、IT、考研、金融、外语、高中考等领域的资源，你想要的，这里都有！资源全部无需分享，回复关键字即拿~",images:["/static/live/test/DesignCap.jpg","/static/live/test/qrcode.jpg"]},islike:0,like:[{uid:2,username:"广州吴彦祖,"},{uid:3,username:"广西张学友"}],comments:{total:2,comment:[{uid:2,username:"葬爱狂少",content:"太棒了哥！这个公众号帮了我大忙，我等会送把斧头给你"},{uid:3,username:"深圳刘姨",content:"点赞！"}]},timestamp:"5分钟前"},{post_id:2,uid:1,username:"晨晨晨晨陈",header_image:"/static/live/test/20141016202310_YKdVJ.jpeg",content:{text:"香港剪影 - 东方之珠",images:["/static/live/test/1.jpg","/static/live/test/2.jpg","/static/live/test/3.jpg","/static/live/test/4.jpg","/static/live/test/5.jpg","/static/live/test/6.jpg","/static/live/test/7.jpg","/static/live/test/8.jpg","/static/live/test/9.jpg"]},islike:0,like:[{uid:2,username:"zouzou淡然,"},{uid:3,username:"JannyandEt,"},{uid:3,username:"米老虎u,"},{uid:3,username:"黑马的日常,"},{uid:3,username:"Roger,"},{uid:3,username:"时尚魔镜,"},{uid:3,username:"就叫我小A,"},{uid:3,username:"黑白格调e,"},{uid:3,username:"__aR,"},{uid:3,username:"kyle,"},{uid:3,username:"Derek大骏,"},{uid:3,username:"Wyue大人,"}],comments:{total:2,comment:[{uid:2,username:"刘铭昊TER",content:"这是什么滤镜？"}]},timestamp:"1小时前"},{post_id:2,uid:1,username:"Mejo",header_image:"/static/live/test/20181104124841_hypim.jpg",content:{text:"所有的努力终会给你带来不一样的收货",images:["/static/live/test/20191125171052.png"]},islike:0,like:[{uid:2,username:"_LuckyOne_,"},{uid:3,username:"谭心11"}],comments:{total:2,comment:[{uid:2,username:"秦月3",content:"好看!"},{uid:3,username:"Fr99man",content:"求小姐姐的链接"}]},timestamp:"7小时前"}];e.default=r},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function l(t){return"[object Object]"===c.call(t)}function p(t){return"[object RegExp]"===c.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function A(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var S=/-(\w)/g,O=A(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),k=A(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),w=/\B([A-Z])/g,E=A(function(t){return t.replace(w,"-$1").toLowerCase()});function T(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function C(t,e){return t.bind(e)}var x=Function.prototype.bind?C:T;function j(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function I(t,e){for(var n in e)t[n]=e[n];return t}function U(t){for(var e={},n=0;n<t.length;n++)t[n]&&I(e,t[n]);return e}function D(t,e,n){}var N=function(t,e,n){return!1},K=function(t){return t};function R(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(c){return!1}}function V(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function L(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var J=["component","directive","filter"],$=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],P={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:D,parsePlatformTagName:K,mustUseProp:N,async:!0,_lifecycleHooks:$},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function B(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var q=new RegExp("[^"+F.source+".$_\\d]");function M(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,z="__proto__"in{},H="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Z=H&&window.navigator.userAgent.toLowerCase(),G=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(H)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===W&&(W=!H&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},ot=H&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=D,lt=0,pt=function(){this.id=lt++,this.subs=[]};function ft(t){pt.SharedObject.targetStack.push(t),pt.SharedObject.target=t}function ht(){pt.SharedObject.targetStack.pop(),pt.SharedObject.target=pt.SharedObject.targetStack[pt.SharedObject.targetStack.length-1]}pt.prototype.addSub=function(t){this.subs.push(t)},pt.prototype.removeSub=function(t){m(this.subs,t)},pt.prototype.depend=function(){pt.SharedObject.target&&pt.SharedObject.target.addDep(this)},pt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},pt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},pt.SharedObject.target=null,pt.SharedObject.targetStack=[];var dt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function gt(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,bt=Object.create(_t),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach(function(t){var e=_t[t];Q(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var St=Object.getOwnPropertyNames(bt),Ot=!0;function kt(t){Ot=t}var wt=function(t){this.value=t,this.dep=new pt,this.vmCount=0,Q(t,"__ob__",this),Array.isArray(t)?(z?t.push!==t.__proto__.push?Tt(t,bt,St):Et(t,bt):Tt(t,bt,St),this.observeArray(t)):this.walk(t)};function Et(t,e){t.__proto__=e}function Tt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];Q(t,o,e[o])}}function Ct(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof wt?n=t.__ob__:Ot&&!it()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new wt(t)),e&&n&&n.vmCount++,n}function xt(t,e,n,r,i){var o=new pt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!i&&Ct(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return pt.SharedObject.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ut(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!i&&Ct(e),o.notify())}})}}function jt(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(xt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function It(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ut(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ut(e)}wt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)xt(t,e[n])},wt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ct(t[e])};var Dt=P.optionMergeStrategies;function Nt(t,e){if(!e)return t;for(var n,r,i,o=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&l(r)&&l(i)&&Nt(r,i):jt(t,n,i));return t}function Kt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Nt(r,i):i}:e?t?function(){return Nt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Vt(n):n}function Vt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Lt(t,e,n,r){var i=Object.create(t||null);return e?I(i,e):i}Dt.data=function(t,e,n){return n?Kt(t,e,n):e&&"function"!==typeof e?t:Kt(t,e)},$.forEach(function(t){Dt[t]=Rt}),J.forEach(function(t){Dt[t+"s"]=Lt}),Dt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in I(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Dt.props=Dt.methods=Dt.inject=Dt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return I(i,t),e&&I(i,e),i},Dt.provide=Kt;var Jt=function(t,e){return void 0===e?t:e};function $t(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=O(i),a[o]={type:null})}else if(l(n))for(var s in n)i=n[s],o=O(s),a[o]=l(i)?i:{type:i};else 0;t.props=a}}function Pt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?I({from:o},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Bt(t,e,n){if("function"===typeof e&&(e=e.options),$t(e,n),Pt(e,n),Ft(e),!e._base&&(e.extends&&(t=Bt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Bt(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)b(t,o)||s(o);function s(r){var i=Dt[r]||Jt;a[r]=i(t[r],e[r],n,r)}return a}function Qt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=O(n);if(b(i,o))return i[o];var a=k(o);if(b(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function qt(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t],s=Ht(Boolean,i.type);if(s>-1)if(o&&!b(i,"default"))a=!1;else if(""===a||a===E(t)){var u=Ht(String,i.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Mt(r,i,t);var c=Ot;kt(!0),Ct(a),kt(c)}return a}function Mt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Wt(e.type)?r.call(t):r}}function Wt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function zt(t,e){return Wt(t)===Wt(e)}function Ht(t,e){if(!Array.isArray(e))return zt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(zt(e[n],t))return n;return-1}function Yt(t,e,n){ft();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ei){Zt(ei,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Xt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&h(o)&&!o._handled&&(o.catch(function(t){return Yt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ei){Yt(ei,r,i)}return o}function Zt(t,e,n){if(P.errorHandler)try{return P.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&Gt(ei,null,"config.errorHandler")}Gt(t,e,n)}function Gt(t,e,n){if(!H&&!Y||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(D)}}else if(G||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var oe=1,ae=new MutationObserver(re),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Yt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function le(t){pe(t,ce),ce.clear()}function pe(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var fe=A(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Xt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Xt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,i,a,s){var u,c,l,p;for(u in t)c=t[u],l=e[u],p=fe(u),r(c)||(r(l)?(r(c.fns)&&(c=t[u]=he(c,s)),o(p.once)&&(c=t[u]=a(p.name,c,p.capture)),n(p.name,c,p.capture,p.passive,p.params)):c!==l&&(l.fns=c,t[u]=l));for(u in e)r(t[u])&&(p=fe(u),i(p.name,e[u],p.capture))}function ve(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,u=t.props;if(i(s)||i(u))for(var c in o){var l=E(c);ye(a,u,c,l,!0)||ye(a,s,c,l,!1)}return a}}function ye(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[gt(t)]:Array.isArray(t)?be(t):void 0}function _e(t){return i(t)&&i(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=l.length-1,c=l[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),_e(a[0])&&_e(c)&&(l[u]=gt(c.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?_e(c)?l[u]=gt(c.text+a):""!==a&&l.push(gt(a)):_e(a)&&_e(c)?l[u]=gt(c.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=Oe(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(n){xt(t,n,e[n])}),kt(!0))}function Oe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var u=t[o].default;n[o]="function"===typeof u?u.call(e):u}else 0}}return n}}function ke(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===o.tag?u.push.apply(u,o.children||[]):u.push(o)}}for(var c in n)n[c].every(we)&&delete n[c];return n}function we(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ee(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var u in i={},t)t[u]&&"$"!==u[0]&&(i[u]=Te(e,u,t[u]))}else i={};for(var c in e)c in i||(i[c]=Ce(e,c));return t&&Object.isExtensible(t)&&(t._normalized=i),Q(i,"$stable",a),Q(i,"$key",s),Q(i,"$hasNormal",o),i}function Te(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ce(t,e){return function(){return t[e]}}function xe(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length)),l=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function je(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=I(I({},r),n)),i=o(n)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ie(t){return Qt(this.$options,"filters",t,!0)||K}function Ue(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function De(t,e,n,r,i){var o=P.keyCodes[e]||n;return i&&r&&!P.keyCodes[e]?Ue(i,r):o?Ue(o,t):r?E(r)!==e:void 0}function Ne(t,e,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=U(n));var a=function(a){if("class"===a||"style"===a||g(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||P.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=E(a);if(!(u in o)&&!(c in o)&&(o[a]=n[a],i)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ke(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ve(r,"__static__"+t,!1),r)}function Re(t,e,n){return Ve(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ve(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Le(t[r],e+"_"+r,n);else Le(t,e,n)}function Le(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Je(t,e){if(e)if(l(e)){var n=t.on=t.on?I({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function $e(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?$e(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Pe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function Be(t){t._o=Re,t._n=v,t._s=d,t._l=xe,t._t=je,t._q=R,t._i=V,t._m=Ke,t._f=Ie,t._k=De,t._b=Ne,t._v=gt,t._e=yt,t._u=$e,t._g=Je,t._d=Pe,t._p=Fe}function Qe(t,e,r,i,a){var s,u=this,c=a.options;b(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var l=o(c._compiled),p=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Oe(c.inject,i),this.slots=function(){return u.$slots||Ee(t.scopedSlots,u.$slots=ke(r,i)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ee(t.scopedSlots,this.slots())}}),l&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Ee(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var o=rn(s,t,e,n,r,p);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,p)}}function qe(t,e,r,o,a){var s=t.options,u={},c=s.props;if(i(c))for(var l in c)u[l]=qt(l,c,e||n);else i(r.attrs)&&We(u,r.attrs),i(r.props)&&We(u,r.props);var p=new Qe(r,u,a,o,t),f=s.render.call(null,p._c,p);if(f instanceof dt)return Me(f,r,p.parent,s,p);if(Array.isArray(f)){for(var h=me(f)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Me(h[v],r,p.parent,s,p);return d}}function Me(t,e,n,r,i){var o=mt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function We(t,e){for(var n in e)t[O(n)]=e[n]}Be(Qe.prototype);var ze={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;ze.prepatch(n,n)}else{var r=t.componentInstance=Xe(t,On);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Tn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,In(n,"mounted")),t.data.keepAlive&&(e._isMounted?Bn(n):xn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?jn(e,!0):e.$destroy())}},He=Object.keys(ze);function Ye(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=dn(l,c),void 0===t))return hn(l,e,n,a,s);e=e||{},fr(t),i(e.model)&&tn(t.options,e);var p=ve(e,t,s);if(o(t.options.functional))return qe(t,p,e,n,a);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:f,tag:s,children:a},l);return v}}}function Xe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<He.length;n++){var r=He[n],i=e[r],o=ze[r];i===o||i&&i._merged||(e[r]=i?Ge(o,i):o)}}function Ge(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=nn),on(t,e,n,r,i)}function on(t,e,n,r,o){if(i(n)&&i(n.__ob__))return yt();if(i(n)&&i(n.is)&&(e=n.is),!e)return yt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===nn?r=me(r):o===en&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||P.getTagNamespace(e),a=P.isReservedTag(e)?new dt(P.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(u=Qt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Ye(u,n,t,r,e)):a=Ye(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&an(a,s),i(n)&&sn(n),a):yt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];i(u.tag)&&(r(u.ns)||o(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&le(t.style),u(t.class)&&le(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=ke(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var o=r&&r.data;xt(t,"$attrs",o&&o.attrs||n,null,!0),xt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,ln=null;function pn(t){Be(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Ee(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Yt(ei,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=i,t}}function fn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function dn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=ln;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,c=null,l=null;n.$on("hook:destroyed",function(){return m(a,n)});var p=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},f=L(function(n){t.resolved=fn(n,e),s?a.length=0:p(!0)}),d=L(function(e){i(t.errorComp)&&(t.error=!0,p(!0))}),v=t(f,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(f,d):h(v.component)&&(v.component.then(f,d),i(v.error)&&(t.errorComp=fn(v.error,e)),i(v.loading)&&(t.loadingComp=fn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,p(!1))},v.delay||200)),i(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||vn(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function mn(t,e){cn.$on(t,e)}function _n(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function An(t,e,n){cn=t,de(e,n||{},mn,_n,bn,t),cn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?j(n):n;for(var r=j(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Xt(n[o],e,r,e,i)}return e}}var On=null;function kn(t){var e=On;return On=t,function(){On=e}}function wn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function En(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=kn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){In(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),In(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Tn(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||u);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){kt(!1);for(var l=t._props,p=t.$options._propKeys||[],f=0;f<p.length;f++){var h=p[f],d=t.$options.props;l[h]=qt(h,d,e,t)}kt(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,An(t,r,v),c&&(t.$slots=ke(o,i.context),t.$forceUpdate())}function Cn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function xn(t,e){if(e){if(t._directInactive=!1,Cn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)xn(t.$children[n]);In(t,"activated")}}function jn(t,e){if((!e||(t._directInactive=!0,!Cn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);In(t,"deactivated")}}function In(t,e){ft();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Xt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Un=[],Dn=[],Nn={},Kn=!1,Rn=!1,Vn=0;function Ln(){Vn=Un.length=Dn.length=0,Nn={},Kn=Rn=!1}var Jn=Date.now;if(H&&!G){var $n=window.performance;$n&&"function"===typeof $n.now&&Jn()>document.createEvent("Event").timeStamp&&(Jn=function(){return $n.now()})}function Pn(){var t,e;for(Jn(),Rn=!0,Un.sort(function(t,e){return t.id-e.id}),Vn=0;Vn<Un.length;Vn++)t=Un[Vn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=Dn.slice(),r=Un.slice();Ln(),Qn(n),Fn(r),ot&&P.devtools&&ot.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&In(r,"updated")}}function Bn(t){t._inactive=!1,Dn.push(t)}function Qn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,xn(t[e],!0)}function qn(t){var e=t.id;if(null==Nn[e]){if(Nn[e]=!0,Rn){var n=Un.length-1;while(n>Vn&&Un[n].id>t.id)n--;Un.splice(n+1,0,t)}else Un.push(t);Kn||(Kn=!0,ue(Pn))}}var Mn=0,Wn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Mn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=M(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Yt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),ht(),this.cleanupDeps()}return t},Wn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Wn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():qn(this)},Wn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Yt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var zn={enumerable:!0,configurable:!0,get:D,set:D};function Hn(t,e,n){zn.get=function(){return this[e][n]},zn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,zn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Xn(t,e.props),e.methods&&or(t,e.methods),e.data?Zn(t):Ct(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Xn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||kt(!1);var a=function(o){i.push(o);var a=qt(o,e,n,t);xt(r,o,a),o in t||Hn(t,"_props",o)};for(var s in e)a(s);kt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Gn(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||B(o)||Hn(t,"_data",o)}Ct(e,!0)}function Gn(t,e){ft();try{return t.call(e,e)}catch(ei){return Yt(ei,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new Wn(t,a||D,D,tr)),i in t||nr(t,i,o)}}function nr(t,e,n){var r=!it();"function"===typeof n?(zn.get=r?rr(e):ir(n),zn.set=D):(zn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):D,zn.set=n.set||D),Object.defineProperty(t,e,zn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),pt.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function or(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?D:x(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=jt,t.prototype.$delete=It,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Wn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Yt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var cr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Bt(fr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,wn(e),gn(e),un(e),In(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Yn(e),"mp-toutiao"!==e.mpHost&&Ae(e),"mp-toutiao"!==e.mpHost&&In(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fr(t){var e=t.options;if(t.super){var n=fr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=hr(t);i&&I(t.extendOptions,i),e=t.options=Bt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Bt(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Bt(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&_r(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,J.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=I({},a.options),i[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Hn(t.prototype,"_props",n)}function _r(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){J.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ar(t){return t&&(t.Ctor.options.name||t.tag)}function Sr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Or(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=Ar(a.componentOptions);s&&!e(s)&&kr(n,o,r,i)}}}function kr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,m(n,e)}lr(dr),ur(dr),Sn(dr),En(dr),pn(dr);var wr=[String,RegExp,Array],Er={name:"keep-alive",abstract:!0,props:{include:wr,exclude:wr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)kr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Or(t,function(t){return Sr(e,t)})}),this.$watch("exclude",function(e){Or(t,function(t){return!Sr(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=Ar(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Sr(o,r))||a&&r&&Sr(a,r))return e;var s=this,u=s.cache,c=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[l]?(e.componentInstance=u[l].componentInstance,m(c,l),c.push(l)):(u[l]=e,c.push(l),this.max&&c.length>parseInt(this.max)&&kr(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Tr={KeepAlive:Er};function Cr(t){var e={get:function(){return P}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:I,mergeOptions:Bt,defineReactive:xt},t.set=jt,t.delete=It,t.nextTick=ue,t.observable=function(t){return Ct(t),t},t.options=Object.create(null),J.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,I(t.options.components,Tr),vr(t),yr(t),gr(t),br(t)}Cr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:Qe}),dr.version="2.6.10";var xr="[object Array]",jr="[object Object]";function Ir(t,e){var n={};return Ur(t,e),Dr(t,e,"",n),n}function Ur(t,e){if(t!==e){var n=Kr(t),r=Kr(e);if(n==jr&&r==jr){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:Ur(o,e[i])}}else n==xr&&r==xr&&t.length>=e.length&&e.forEach(function(e,n){Ur(t[n],e)})}}function Dr(t,e,n,r){if(t!==e){var i=Kr(t),o=Kr(e);if(i==jr)if(o!=jr||Object.keys(t).length<Object.keys(e).length)Nr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],s=Kr(o),u=Kr(a);if(s!=xr&&s!=jr)o!=e[i]&&Nr(r,(""==n?"":n+".")+i,o);else if(s==xr)u!=xr?Nr(r,(""==n?"":n+".")+i,o):o.length<a.length?Nr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Dr(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==jr)if(u!=jr||Object.keys(o).length<Object.keys(a).length)Nr(r,(""==n?"":n+".")+i,o);else for(var c in o)Dr(o[c],a[c],(""==n?"":n+".")+i+"."+c,r)};for(var s in t)a(s)}else i==xr?o!=xr?Nr(r,n,t):t.length<e.length?Nr(r,n,t):t.forEach(function(t,i){Dr(t,e[i],n+"["+i+"]",r)}):Nr(r,n,t)}}function Nr(t,e,n){t[e]=n}function Kr(t){return Object.prototype.toString.call(t)}function Rr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Vr(t){return Un.find(function(e){return t._watcher===e})}function Lr(t,e){if(!t.__next_tick_pending&&!Vr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Yt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Jr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var $r=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Jr(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Ir(i,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Rr(n)})):Rr(this)}};function Pr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Pr),t.$options.render||(t.$options.render=Pr),"mp-toutiao"!==t.mpHost&&In(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Wn(t,r,D,{before:function(){t._isMounted&&!t._isDestroyed&&In(t,"beforeUpdate")}},!0),n=!1,t}function Br(t,e){return i(t)||i(e)?Qr(t,qr(e)):""}function Qr(t,e){return t?e?t+" "+e:t:e||""}function qr(t){return Array.isArray(t)?Mr(t):u(t)?Wr(t):"string"===typeof t?t:""}function Mr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=qr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Wr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var zr=A(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Hr(t){return Array.isArray(t)?U(t):"string"===typeof t?zr(t):t}var Yr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Xr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:j(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Lr(this,t)},Yr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=Ae,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;ft();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)r=Xt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Xr(e||this,t)},t.prototype.__get_class=function(t,e){return Br(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Hr(t),r=e?I(e,n):n;return Object.keys(r).map(function(t){return E(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(u(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var Gr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Gr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Gr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Gr}dr.prototype.__patch__=$r,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},ti(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=ke,e.createPage=Oe,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){i=!0,o=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return h(t)||f(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function g(t){return"string"===typeof t}function m(t){return"[object Object]"===d.call(t)}function _(t,e){return v.call(t,e)}function b(){}function A(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var S=/-(\w)/g,O=A(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),k=["invoke","success","fail","complete","returnValue"],w={},E={};function T(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?C(n):n}function C(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function x(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function j(t,e){Object.keys(e).forEach(function(n){-1!==k.indexOf(n)&&y(e[n])&&(t[n]=T(t[n],e[n]))})}function I(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==k.indexOf(n)&&y(e[n])&&x(t[n],e[n])})}function U(t,e){"string"===typeof t&&m(e)?j(E[t]||(E[t]={}),e):m(t)&&j(w,t)}function D(t,e){"string"===typeof t?m(e)?I(E[t],e):delete E[t]:m(t)&&I(w,t)}function N(t){return function(e){return t(e)||e}}function K(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(N(i));else{var o=i(e);if(K(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function V(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){R(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function L(t,e){var n=[];Array.isArray(w.returnValue)&&n.push.apply(n,l(w.returnValue));var r=E[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function J(t){var e=Object.create(null);Object.keys(w).forEach(function(t){"returnValue"!==t&&(e[t]=w[t].slice())});var n=E[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function $(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=J(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[V(a,t)].concat(i))})}return e.apply(void 0,[V(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var P={returnValue:function(t){return K(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,B=/^create|Manager$/,Q=/^on/;function q(t){return B.test(t)}function M(t){return F.test(t)}function W(t){return Q.test(t)}function z(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function H(t){return!(q(t)||M(t)||W(t))}function Y(t,e){return H(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return y(n.success)||y(n.fail)||y(n.complete)?L(t,$.apply(void 0,[t,e,n].concat(i))):L(t,z(new Promise(function(r,o){$.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Z=750,G=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,G="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&G?.5:1:t<0?-n:n}var it={promiseInterceptor:P},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:U,removeInterceptor:D}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(ft(t,r,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var o=!0===i?e:{};for(var a in y(n)&&(n=n(e,o)||{}),e)if(_(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,o)),s?g(s)?o[s]=e[a]:m(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=lt(t,e[a],r):i||(o[a]=e[a]);return o}return y(e)&&(e=lt(t,e,r)),e}function ft(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),pt(t,e,n,{},r)}function ht(t,e){if(_(at,t)){var n=at[t];return n?function(e,r){var i=n;y(n)&&(i=n(e)),e=pt(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return M(t)?ft(t,a,i.returnValue,q(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(i),y(r)&&r(i)}}vt.forEach(function(t){dt[t]=yt(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function _t(){return mt(gt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return mt(gt(),"$off",Array.prototype.slice.call(arguments))}function At(){return mt(gt(),"$once",Array.prototype.slice.call(arguments))}function St(){return mt(gt(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({$on:_t,$off:bt,$once:At,$emit:St});function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function wt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;kt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function Et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&wt(e),e}var Tt=Object.freeze({getSubNVueById:Et,requireNativePlugin:kt}),Ct=Page,xt=Component,jt=/:/g,It=A(function(t){return O(t.replace(jt,"-"))});function Ut(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[It(n)].concat(i))}}}function Dt(t,e){var n=e[t];e[t]=n?function(){Ut(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Ut(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Dt("onLoad",t),Ct(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Dt("created",t),xt(t)};var Nt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Kt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Vt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Lt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Jt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function $t(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Pt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return m(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Bt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Qt(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&a.push(e({properties:Mt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){m(t)&&t.props&&a.push(e({properties:Mt(t.props,!0)}))}),a}function qt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Mt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Bt(t)}}):m(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(m(r)){var i=r["default"];y(i)&&(i=i()),r.type=qt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:i,observer:Bt(e)}}else{var o=qt(e,r);n[e]={type:-1!==Ft.indexOf(o)?o:null,observer:Bt(e)}}}),n}function Wt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},_(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function zt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):m(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Ht(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=zt(t,e)}),r}function Yt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Ht(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Yt(t)):"string"===typeof t&&_(s,t)?u.push(s[t]):u.push(t)}),u}var Zt="~",Gt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Wt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Gt;r=s?r.slice(1):r;var u=r.charAt(0)===Zt;r=u?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}o.push(a.apply(i,Xt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Kt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Vt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function pe(t){return re(t,{mocks:ie,initRefs:ce})}var fe=["onUniNViewMessage"];function he(t){var e=pe(t);return Vt(e,fe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Lt(r.default,t),s=o(a,2),u=s[0],c=s[1],l={options:{multipleSlots:!0,addGlobalClass:!0},data:Pt(c,r.default.prototype),behaviors:Qt(c,ae),properties:Mt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};$t(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Jt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){l.methods[t]=function(e){return this.$vm[t](e)}}),n?l:[l,u]}function ye(t){return ve(t,{isPage:se,initRelation:ue})}function ge(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var n=ge(t);return Vt(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return _e(t,{isPage:se,initRelation:ue})}me.push.apply(me,Nt);var Ae=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Se(t){var e=be(t);return Vt(e.methods,Ae),e}function Oe(t){return Component(Se(t))}function ke(t){return Component(ge(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var we={};Object.keys(ot).forEach(function(t){we[t]=ot[t]}),Object.keys(Ot).forEach(function(t){we[t]=Ot[t]}),Object.keys(Tt).forEach(function(t){we[t]=Y(t,Tt[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(at,t))&&(we[t]=Y(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=we,t.UniEmitter=Ot),wx.createApp=de,wx.createPage=Oe,wx.createComponent=ke;var Ee=we,Te=Ee;e.default=Te}).call(this,n("c8ba"))},"71f6":function(t,e){t.exports="data:image/jpeg;base64,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"},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var p=e.version,f="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,y=10,g="__DC_STAT_UUID",m="__DC_UUID_VALUE";function _(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(g)}catch(n){e=m}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(g,e)}catch(n){t.setStorageSync(g,m)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var o in n)r[n[o]]=t[n[o]],i+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},A=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},S=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},k=function(){var e="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},w=function(){return"n"===O()?plus.runtime.version:""},E=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},T=function(e){var n=O(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},C="First__Visit__Time",x="Last__Visit__Time",j=function(){var e=t.getStorageSync(C),n=0;return e?n=e:(n=S(),t.setStorageSync(C,n),t.removeStorageSync(x)),n},I=function(){var e=t.getStorageSync(x),n=0;return n=e||"",t.setStorageSync(x,S()),n},U="__page__residence__time",D=0,N=0,K=function(){return D=S(),"n"===O()&&t.setStorageSync(U,S()),D},R=function(){return N=S(),"n"===O()&&(D=t.getStorageSync(U)),N-D},V="Total__Visit__Count",L=function(){var e=t.getStorageSync(V),n=1;return e&&(n=e,n++),t.setStorageSync(V,n),n},J=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},$=0,P=0,F=function(){var t=(new Date).getTime();return $=t,P=0,t},B=function(){var t=(new Date).getTime();return P=t,t},Q=function(t){var e=0;if(0!==$&&(e=P-$),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},q=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},M=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},z=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},H=n("ddf8").default,Y=n("bf94").default||n("bf94"),X=t.getSystemInfoSync(),Z=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:O(),mpn:k(),ak:Y.appid,usv:p,v:w(),ch:E(),cn:"",pn:"",ct:"",t:S(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return l(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){B();var t=Q("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,B();var n=Q();F();var r=M(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=M(this),e=q();if(this._navigationBarTitle.config=H&&H.pages[e]&&H.pages[e].titleNView&&H.pages[e].titleNView.titleText||H&&H.pages[e]&&H.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);B(),this._lastPageRoute=t;var n=Q("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){B();var t=Q("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=S(),this.statData.sc=T(t.scene),this.statData.fvts=j(),this.statData.lvts=I(),this.statData.tvc=L(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:S(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=S(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",a),!(R()<y)||n){var s=this._reportingRequestData;"n"===O()&&(s=t.getStorageSync("__UNI__STAT__DATA")),K();var u=[],c=[],l=[],f=function(t){var e=s[t];e.forEach(function(e){var n=A(e);0===t?u.push(n):3===t?l.push(n):c.push(n)})};for(var h in s)f(h);u.push.apply(u,c.concat(l));var d={usv:p,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(J(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){z(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),G=function(e){function n(){var e;return u(this,n),e=r(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),l(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),l(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,K(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=G.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},bf94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__9F00F66"};e.default=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ddf8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{navigationBarTitleText:"uni-app"},"pages/service/data_recording":{},"pages/service/release_new":{navigationBarTitleText:"发布新动态"},"pages/service/show":{navigationBarTitleText:"今日SHOW"},"pages/service/live":{navigationBarTitleText:"我的校园",enablePullDownRefresh:!0,bounce:"none",titleNView:{type:"transparent",buttons:[{background:"rgba(255,255,255,0.2)",color:"#696969",type:"none",fontSrc:"/static/fonts/iconfont.ttf",text:""}]}}},globalStyle:{navigationBarBackgroundColor:"#0081ff",navigationBarTitleText:"ColorUi for UniApp",navigationStyle:"custom",navigationBarTextStyle:"white"}};e.default=r},f43f:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';

define('colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/cu-custom"], {
  8102: function _(t, a, n) {
    "use strict";

    n.r(a);
    var u = n("f5aa"),
        e = n("86b4");

    for (var o in e) {
      "default" !== o && function (t) {
        n.d(a, t, function () {
          return e[t];
        });
      }(o);
    }

    var r = n("2877"),
        c = Object(r["a"])(e["default"], u["a"], u["b"], !1, null, null, null);
    a["default"] = c.exports;
  },
  "86b4": function b4(t, a, n) {
    "use strict";

    n.r(a);
    var u = n("b00a"),
        e = n.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        n.d(a, t, function () {
          return u[t];
        });
      }(o);
    }

    a["default"] = e.a;
  },
  b00a: function b00a(t, a, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var n = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                a = this.CustomBar,
                n = this.bgImage,
                u = "height:".concat(a, "px;padding-top:").concat(t, "px;");
            return this.bgImage && (u = "".concat(u, "background-image:url(").concat(n, ");")), u;
          }
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          }
        },
        methods: {
          BackPage: function BackPage() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      a.default = n;
    }).call(this, n("6e42")["default"]);
  },
  f5aa: function f5aa(t, a, n) {
    "use strict";

    var u = function u() {
      var t = this,
          a = t.$createElement;
      t._self._c;
    },
        e = [];

    n.d(a, "a", function () {
      return u;
    }), n.d(a, "b", function () {
      return e;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/cu-custom-create-component', {
  'colorui/components/cu-custom-create-component': function coloruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8102"));
  }
}, [['colorui/components/cu-custom-create-component']]]);
});
require('colorui/components/cu-custom.js');
__wxRoute = 'colorui/components/newscard';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/newscard.js';

define('colorui/components/newscard.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/newscard"], {
  "875e": function e(_e, t, n) {
    "use strict";

    n.r(t);
    var r = n("99e5"),
        u = n.n(r);

    for (var a in r) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(a);
    }

    t["default"] = u.a;
  },
  "99e5": function e5(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = {
      props: ["reciveUserInfo"],
      data: function data() {
        return {
          isCard: !1,
          src: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
        };
      },
      methods: {
        IsCard: function IsCard(e) {
          this.isCard = e.detail.value;
        }
      }
    };
    t.default = r;
  },
  c150: function c150(e, t, n) {
    "use strict";

    var r = function r() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        u = [];

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return u;
    });
  },
  c53b: function c53b(e, t, n) {
    "use strict";

    n.r(t);
    var r = n("c150"),
        u = n("875e");

    for (var a in u) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(a);
    }

    var o = n("2877"),
        c = Object(o["a"])(u["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/newscard-create-component', {
  'colorui/components/newscard-create-component': function coloruiComponentsNewscardCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c53b"));
  }
}, [['colorui/components/newscard-create-component']]]);
});
require('colorui/components/newscard.js');
__wxRoute = 'components/im-chat/chatinput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/im-chat/chatinput.js';

define('components/im-chat/chatinput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/im-chat/chatinput"], {
  3266: function _(t, e, n) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var u = {
        name: "chat-input",
        data: function data() {
          return {
            inputValue: ""
          };
        },
        props: {
          placeholder: {
            type: String,
            required: !0
          },
          focus: {
            type: Boolean,
            required: !0
          }
        },
        methods: {
          blur: function blur() {
            this.$emit("blur");
          },
          startRecognize: function startRecognize() {
            var e = {},
                n = this;
            e.engine = "iFly", n.inputValue = "", plus.speech.startRecognize(e, function (e) {
              console.log(t(e, " at components\\im-chat\\chatinput.vue:44")), n.inputValue += e;
            }, function (e) {
              console.log(t("语音识别失败：" + e.message, " at components\\im-chat\\chatinput.vue:47"));
            });
          },
          sendMessge: function sendMessge() {
            if (this.inputValue) {
              var t = this;
              this.$emit("send-message", {
                type: "text",
                content: t.inputValue
              }), t.inputValue = "";
            } else n.showModal({
              content: "还没有输入内容哦!",
              showCancel: !1
            });
          }
        }
      };
      e.default = u;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  },
  "3db1": function db1(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  7511: function _(t, e, n) {
    "use strict";

    var u = n("fdd4"),
        a = n.n(u);
    a.a;
  },
  c053: function c053(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("3266"),
        a = n.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  e6ea: function e6ea(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("3db1"),
        a = n("c053");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("7511");
    var o = n("2877"),
        c = Object(o["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  fdd4: function fdd4(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/im-chat/chatinput-create-component', {
  'components/im-chat/chatinput-create-component': function componentsImChatChatinputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e6ea"));
  }
}, [['components/im-chat/chatinput-create-component']]]);
});
require('components/im-chat/chatinput.js');
__wxRoute = 'components/you-scroll';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/you-scroll.js';

define('components/you-scroll.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/you-scroll"], {
  "6e69": function e69(t, e, n) {
    "use strict";

    var o = n("eae9"),
        l = n.n(o);
    l.a;
  },
  a680: function a680(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function data() {
          return {
            scrollToTop: 0,
            scrollTop: 0,
            oldTop: 0,
            sPageY: 0,
            mPageY: 0,
            ePageY: 0,
            translateY: 0,
            pullDownStatus: 1,
            isDown: !1
          };
        },
        props: {
          pullDownDistance: {
            type: Number,
            default: 50
          },
          reachBottomDistance: {
            type: Number,
            default: 30
          },
          downPullToRefresh: {
            type: String,
            default: "下拉刷新"
          },
          downReleaseToRefresh: {
            type: String,
            default: "松开刷新"
          },
          downRefreshing: {
            type: String,
            default: "刷新中…"
          }
        },
        methods: {
          startFn: function startFn(t) {
            this.isDown = !0, this.sPageY = t.changedTouches[0].pageY, this.pointY = this.translateY;
          },
          moveFn: function moveFn(e) {
            var n = this,
                o = t.createSelectorQuery().in(this).select(".you-scroll-inner");
            o.fields({
              size: !0,
              scrollOffset: !0
            }, function (t) {
              if (n.scrollTop = t.scrollTop, n.mPageY = e.changedTouches[0].pageY, n.scrollTop <= 0) {
                var o = (n.mPageY - n.sPageY) / 2 + n.pointY;
                n.translateY = o < 0 ? 0 : o, 3 != n.pullDownStatus && (n.translateY < n.pullDownDistance ? n.pullDownStatus = 1 : n.translateY >= n.pullDownDistance && (n.pullDownStatus = 2));
              }
            }).exec();
          },
          endFn: function endFn(t) {
            var e = this;
            this.isDown = !1, this.ePageY = t.changedTouches[0].pageY, setTimeout(function () {
              e.translateY = e.translateY >= e.pullDownDistance ? e.pullDownDistance : 0, 2 == e.pullDownStatus && (e.pullDownStatus = 3, e.$emit("onPullDown", e.endPullDown));
            }, 100);
          },
          endPullDown: function endPullDown(t) {
            var e = this;
            this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function () {
              e.translateY = 0, e.pullDownStatus = 1;
            }, t || 0);
          },
          prevent: function prevent(t) {
            this.translateY > 0 && t.preventDefault();
          },
          scroll: function scroll(t) {
            var e = this;
            this.$emit("onScroll", t), this.oldTop = t.detail.scrollTop, this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function () {
              e.scrolltolower(t);
            }, 20);
          },
          scrolltolower: function scrolltolower(e) {
            var n = this,
                o = t.createSelectorQuery().in(this).select(".you-scroll-inner");
            o.fields({
              size: !0,
              scrollOffset: !0
            }, function (t) {
              t.scrollTop >= e.detail.scrollHeight - t.height - n.reachBottomDistance && n.$emit("onLoadMore", e);
            }).exec();
          },
          isWeixinCient: function isWeixinCient() {
            var t = navigator.userAgent.toLowerCase();
            return "micromessenger" == t.match(/MicroMessenger/i);
          },
          goTop: function goTop(t) {
            this.scrollToTop = this.oldTop, this.$nextTick(function () {
              this.scrollToTop = t || 0;
            });
          }
        },
        mounted: function mounted() {},
        destroyed: function destroyed() {}
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  c64c: function c64c(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement,
          o = (t._self._c, n("71f6"));
      t.$mp.data = Object.assign({}, {
        $root: {
          m0: o
        }
      });
    },
        l = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return l;
    });
  },
  c6bd: function c6bd(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("c64c"),
        l = n("d399");

    for (var s in l) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return l[t];
        });
      }(s);
    }

    n("6e69");
    var i = n("2877"),
        a = Object(i["a"])(l["default"], o["a"], o["b"], !1, null, "647ba504", null);
    e["default"] = a.exports;
  },
  d399: function d399(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("a680"),
        l = n.n(o);

    for (var s in o) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(s);
    }

    e["default"] = l.a;
  },
  eae9: function eae9(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/you-scroll-create-component', {
  'components/you-scroll-create-component': function componentsYouScrollCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c6bd"));
  }
}, [['components/you-scroll-create-component']]]);
});
require('components/you-scroll.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/home"], {
  "28fa": function fa(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("6677"),
        i = n.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    e["default"] = i.a;
  },
  "5d53": function d53(t, e, n) {},
  "63ba": function ba(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  6677: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var a = function a() {
      return n.e("colorui/components/newscard").then(n.bind(null, "c53b"));
    },
        i = {
      name: "basics",
      components: {
        newscard: a
      },
      data: function data() {
        return {
          lists: [{
            type: "动态",
            text: "早安，广药~  #晨跑 #健身行动派",
            author: "sandy-珊迪",
            time: "今天8:21",
            view: "9999+",
            like: 524,
            remark: 311,
            img_url: "/static/index/20191125151827.jpg",
            avatar_url: "/static/index/20150813130914_yVXuL.jpeg"
          }, {
            type: "动态",
            text: "闭上嘴 迈开腿 #GZ  #广州",
            author: "Yangzi",
            time: "昨天20：05",
            view: "9999+",
            like: 214,
            remark: 42,
            img_url: "/static/index/20191125152223.jpg",
            avatar_url: "/static/index/20160607191023_isxzV.jpeg"
          }, {
            type: "剪影",
            text: "walking upon the city",
            author: "_zhanggz",
            time: "昨天16:00",
            view: "9999+",
            like: 2875,
            remark: 455,
            img_url: "/static/index/20191125152227.jpg",
            avatar_url: "/static/index/20170922162149_snyk3.jpeg"
          }]
        };
      }
    };

    e.default = i;
  },
  "8dbd": function dbd(t, e, n) {
    "use strict";

    var a = n("5d53"),
        i = n.n(a);
    i.a;
  },
  e59d: function e59d(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("63ba"),
        i = n("28fa");

    for (var r in i) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(r);
    }

    n("8dbd");
    var u = n("2877"),
        c = Object(u["a"])(i["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/home/home-create-component', {
  'pages/home/home-create-component': function pagesHomeHomeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e59d"));
  }
}, [['pages/home/home-create-component']]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/person/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/person/home.js';

define('pages/person/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/person/home"], {
  "1b4e": function b4e(n, e, t) {
    "use strict";

    t.r(e);
    var a = t("272e"),
        i = t("bfc9");

    for (var r in i) {
      "default" !== r && function (n) {
        t.d(e, n, function () {
          return i[n];
        });
      }(r);
    }

    t("35af"), t("7046");
    var o = t("2877"),
        c = Object(o["a"])(i["default"], a["a"], a["b"], !1, null, "80ced952", null);
    e["default"] = c.exports;
  },
  "221e": function e(n, _e, t) {
    "use strict";

    Object.defineProperty(_e, "__esModule", {
      value: !0
    }), _e.default = void 0;
    var a = {
      data: function data() {
        return {
          title: "Hello",
          bigIdx: 1,
          vips: [{
            bg: "linear-gradient(94deg,rgba(219,207,202,1),rgba(150,147,164,1))",
            shadow: "0px 3px 12px 0px rgba(195,164,110,0.23)",
            title: "普通会员",
            subTitle: "距离下一等级还差20积分"
          }, {
            bg: "linear-gradient(94deg,rgba(147,224,255,1),rgba(199,237,233,1))",
            shadow: "0px 3px 12px 0px rgba(195,164,110,0.23)",
            title: "高级会员",
            subTitle: "距离下一等级还差100积分"
          }, {
            bg: "linear-gradient(94deg,rgba(219,207,202,1),rgba(150,147,164,1))",
            shadow: "0px 3px 12px 0px rgba(195,164,110,0.23)",
            title: "超级会员",
            subTitle: "距离下一等级还差200积分"
          }, {
            bg: "linear-gradient(94deg,rgba(219,207,202,1),rgba(150,147,164,1))",
            shadow: "0px 3px 12px 0px rgba(195,164,110,0.23)",
            title: "钻石会员",
            subTitle: "距离下一等级还差400积分"
          }],
          tasks: [{
            icon: "/static/person/icon_signin.png",
            name: "今日跑步",
            desc: "完成获得7积分奖励"
          }, {
            icon: "/static/person/icon_profile.png",
            name: "健康饮食",
            desc: "完成获得7积分奖励"
          }, {
            icon: "/static/person/icon_friend.png",
            name: "规划生活",
            desc: "完成获得7积分奖励"
          }],
          welfare: [{
            icon: "/static/person/icon_evaluate.png",
            name: "拥有高级会员头衔"
          }, {
            icon: "/static/person/icon_gift.png",
            name: "发布询问贴优先显示"
          }, {
            icon: "/static/person/icon_score.png",
            name: "我的趋势"
          }, {
            icon: "/static/person/icon_other.png",
            name: "专属礼包"
          }]
        };
      },
      onLoad: function onLoad() {},
      methods: {
        swiperChange: function swiperChange(n) {
          this.bigIdx = n.detail.current;
        }
      }
    };
    _e.default = a;
  },
  "272e": function e(n, _e2, t) {
    "use strict";

    var a = function a() {
      var n = this,
          e = n.$createElement;
      n._self._c;
    },
        i = [];

    t.d(_e2, "a", function () {
      return a;
    }), t.d(_e2, "b", function () {
      return i;
    });
  },
  "35af": function af(n, e, t) {
    "use strict";

    var a = t("7770"),
        i = t.n(a);
    i.a;
  },
  5824: function _(n, e, t) {},
  7046: function _(n, e, t) {
    "use strict";

    var a = t("5824"),
        i = t.n(a);
    i.a;
  },
  7770: function _(n, e, t) {},
  bfc9: function bfc9(n, e, t) {
    "use strict";

    t.r(e);
    var a = t("221e"),
        i = t.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        t.d(e, n, function () {
          return a[n];
        });
      }(r);
    }

    e["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/person/home-create-component', {
  'pages/person/home-create-component': function pagesPersonHomeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1b4e"));
  }
}, [['pages/person/home-create-component']]]);
});
require('pages/person/home.js');
__wxRoute = 'pages/service/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/service/home.js';

define('pages/service/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/service/home"], {
  "185d": function d(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("5d04"),
        r = n("2f44");

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    n("b9f9");
    var u = n("2877"),
        s = Object(u["a"])(r["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  "2f44": function f44(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("6268"),
        r = n.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    e["default"] = r.a;
  },
  "5d04": function d04(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return r;
    });
  },
  6085: function _(t, e, n) {},
  6268: function _(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        name: "components",
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar,
            list: [{
              title: "记录身体数据",
              img: "/static/20191125155323.png",
              url: "/pages/service/data_recording"
            }, {
              title: "发布动态",
              img: "/static/20191125155431.png",
              url: "/pages/service/release_new"
            }, {
              title: "Show",
              img: "/static/20191125155703.png",
              url: "/pages/service/show"
            }, {
              title: "我的校园",
              img: "/static/20191125154809.png",
              url: "/pages/service/live"
            }]
          };
        },
        methods: {
          toChild: function toChild(e) {
            t.navigateTo({
              url: e.currentTarget.dataset.url
            });
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  b9f9: function b9f9(t, e, n) {
    "use strict";

    var a = n("6085"),
        r = n.n(a);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/service/home-create-component', {
  'pages/service/home-create-component': function pagesServiceHomeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("185d"));
  }
}, [['pages/service/home-create-component']]]);
});
require('pages/service/home.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{7068:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{PageCur:"home"}},methods:{NavChange:function(e){this.PageCur=e.currentTarget.dataset.cur}}};t.default=u},afbe:function(e,t,n){"use strict";n.r(t);var u=n("7068"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},b890:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},eb40:function(e,t,n){"use strict";n.r(t);var u=n("b890"),a=n("afbe");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var f=n("2877"),o=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},f41e:function(e,t,n){"use strict";(function(e){n("f43f"),n("921b");u(n("66fd"));var t=u(n("eb40"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f41e","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/service/data_recording';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/service/data_recording.js';

define('pages/service/data_recording.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/service/data_recording"],{"0e14":function(e,t,a){"use strict";a.r(t);var i=a("799a"),n=a("abe8");for(var u in n)"default"!==u&&function(e){a.d(t,e,function(){return n[e]})}(u);a("adcb");var c=a("2877"),r=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"799a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},abe8:function(e,t,a){"use strict";a.r(t);var i=a("b7c8"),n=a.n(i);for(var u in i)"default"!==u&&function(e){a.d(t,e,function(){return i[e]})}(u);t["default"]=n.a},adcb:function(e,t,a){"use strict";var i=a("d4d4"),n=a.n(i);n.a},b7c8:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{index:-1,picker:["减脂","增肌","健美","保持身材","丰满"],multiArray:[["无脊柱动物","脊柱动物"],["扁性动物","线形动物","环节动物","软体动物","节肢动物"],["猪肉绦虫","吸血虫"]],objectMultiArray:[[{id:0,name:"无脊柱动物"},{id:1,name:"脊柱动物"}],[{id:0,name:"扁性动物"},{id:1,name:"线形动物"},{id:2,name:"环节动物"},{id:3,name:"软体动物"},{id:3,name:"节肢动物"}],[{id:0,name:"猪肉绦虫"},{id:1,name:"吸血虫"}]],multiIndex:[0,0,0],time:"12:01",date:"2018-12-25",region:["广东省","广州市","海珠区"],switchA:!1,switchB:!0,switchC:!1,switchD:!1,radio:"A",checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}],imgList:[],modalName:null,textareaAValue:"",textareaBValue:""}},methods:{PickerChange:function(e){this.index=e.detail.value},MultiChange:function(e){this.multiIndex=e.detail.value},MultiColumnChange:function(e){var t={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(t.multiIndex[e.detail.column]=e.detail.value,e.detail.column){case 0:switch(t.multiIndex[0]){case 0:t.multiArray[1]=["扁性动物","线形动物","环节动物","软体动物","节肢动物"],t.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:t.multiArray[1]=["鱼","两栖动物","爬行动物"],t.multiArray[2]=["鲫鱼","带鱼"];break}t.multiIndex[1]=0,t.multiIndex[2]=0;break;case 1:switch(t.multiIndex[0]){case 0:switch(t.multiIndex[1]){case 0:t.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:t.multiArray[2]=["蛔虫"];break;case 2:t.multiArray[2]=["蚂蚁","蚂蟥"];break;case 3:t.multiArray[2]=["河蚌","蜗牛","蛞蝓"];break;case 4:t.multiArray[2]=["昆虫","甲壳动物","蛛形动物","多足动物"];break}break;case 1:switch(t.multiIndex[1]){case 0:t.multiArray[2]=["鲫鱼","带鱼"];break;case 1:t.multiArray[2]=["青蛙","娃娃鱼"];break;case 2:t.multiArray[2]=["蜥蜴","龟","壁虎"];break}break}t.multiIndex[2]=0;break}this.multiArray=t.multiArray,this.multiIndex=t.multiIndex},TimeChange:function(e){this.time=e.detail.value},DateChange:function(e){this.date=e.detail.value},RegionChange:function(e){this.region=e.detail.value},SwitchA:function(e){this.switchA=e.detail.value},SwitchB:function(e){this.switchB=e.detail.value},SwitchC:function(e){this.switchC=e.detail.value},SwitchD:function(e){this.switchD=e.detail.value},RadioChange:function(e){this.radio=e.detail.value},CheckboxChange:function(e){for(var t=this.checkbox,a=e.detail.value,i=0,n=t.length;i<n;++i){t[i].checked=!1;for(var u=0,c=a.length;u<c;++u)if(t[i].value==a[u]){t[i].checked=!0;break}}},ChooseImage:function(){var t=this;e.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths}})},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var a=this;e.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(e){e.confirm&&a.imgList.splice(t.currentTarget.dataset.index,1)}})},textareaAInput:function(e){this.textareaAValue=e.detail.value},textareaBInput:function(e){this.textareaBValue=e.detail.value}}};t.default=a}).call(this,a("6e42")["default"])},cd60:function(e,t,a){"use strict";(function(e){a("f43f"),a("921b");i(a("66fd"));var t=i(a("0e14"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d4d4:function(e,t,a){}},[["cd60","common/runtime","common/vendor"]]]);
});
require('pages/service/data_recording.js');
__wxRoute = 'pages/service/release_new';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/service/release_new.js';

define('pages/service/release_new.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/service/release_new"],{"005d":function(e,t,i){},"0c55":function(e,t,i){"use strict";var n=i("005d"),a=i.n(n);a.a},9240:function(e,t,i){"use strict";(function(e){i("f43f"),i("921b");n(i("66fd"));var t=n(i("b6e1"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},b6e1:function(e,t,i){"use strict";i.r(t);var n=i("b94a"),a=i("c31d");for(var u in a)"default"!==u&&function(e){i.d(t,e,function(){return a[e]})}(u);i("0c55");var c=i("2877"),l=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports},b94a:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},c31d:function(e,t,i){"use strict";i.r(t);var n=i("ef92"),a=i.n(n);for(var u in n)"default"!==u&&function(e){i.d(t,e,function(){return n[e]})}(u);t["default"]=a.a},ef92:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{index:-1,multiIndex:[0,0,0],switchA:!1,switchB:!0,switchC:!1,switchD:!1,radio:"A",checkbox:[{value:"A",checked:!0},{value:"B",checked:!0},{value:"C",checked:!1}],imgList:[],modalName:null,textareaAValue:"",textareaBValue:""}},methods:{PickerChange:function(e){this.index=e.detail.value},MultiChange:function(e){this.multiIndex=e.detail.value},MultiColumnChange:function(e){var t={multiArray:this.multiArray,multiIndex:this.multiIndex};t.multiIndex[e.detail.column]=e.detail.value,this.multiArray=t.multiArray,this.multiIndex=t.multiIndex},TimeChange:function(e){this.time=e.detail.value},DateChange:function(e){this.date=e.detail.value},RegionChange:function(e){this.region=e.detail.value},SwitchA:function(e){this.switchA=e.detail.value},SwitchB:function(e){this.switchB=e.detail.value},SwitchC:function(e){this.switchC=e.detail.value},SwitchD:function(e){this.switchD=e.detail.value},RadioChange:function(e){this.radio=e.detail.value},CheckboxChange:function(e){for(var t=this.checkbox,i=e.detail.value,n=0,a=t.length;n<a;++n){t[n].checked=!1;for(var u=0,c=i.length;u<c;++u)if(t[n].value==i[u]){t[n].checked=!0;break}}},ChooseImage:function(){var t=this;e.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths}})},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var i=this;e.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(e){e.confirm&&i.imgList.splice(t.currentTarget.dataset.index,1)}})},textareaAInput:function(e){this.textareaAValue=e.detail.value},textareaBInput:function(e){this.textareaBValue=e.detail.value}}};t.default=i}).call(this,i("6e42")["default"])}},[["9240","common/runtime","common/vendor"]]]);
});
require('pages/service/release_new.js');
__wxRoute = 'pages/service/show';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/service/show.js';

define('pages/service/show.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/service/show"],{"44c5":function(n,t,o){"use strict";o.r(t);var e=o("f802"),u=o.n(e);for(var c in e)"default"!==c&&function(n){o.d(t,n,function(){return e[n]})}(c);t["default"]=u.a},"751b":function(n,t,o){"use strict";var e=o("d67f"),u=o.n(e);u.a},"919a":function(n,t,o){"use strict";(function(n){o("f43f"),o("921b");e(o("66fd"));var t=e(o("fe6c"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("6e42")["createPage"])},b11b:function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return u})},d67f:function(n,t,o){},f802:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){return Promise.all([o.e("common/vendor"),o.e("components/you-scroll")]).then(o.bind(null,"c6bd"))},u={components:{youScroll:e},data:function(){return{list:[1,2,3,4,5,6,7,8,9,10]}},onReady:function(){},methods:{onPullDown:function(n){var t=this;setTimeout(function(){t.list=[1,2,3,4,5,6,7,8,9,10],n()},1e3)},onScroll:function(t){console.log(n(t.detail.scrollTop," at pages\\service\\show.vue:48"))},onLoadMore:function(n){var t=this;setTimeout(function(){for(var n=t.list.length,o=1;o<=10;o++)t.list.push(n+o)},1e3)},scrollTo:function(){this.$refs.scroll.goTop()}}};t.default=u}).call(this,o("0de9")["default"])},fe6c:function(n,t,o){"use strict";o.r(t);var e=o("b11b"),u=o("44c5");for(var c in u)"default"!==c&&function(n){o.d(t,n,function(){return u[n]})}(c);o("751b");var r=o("2877"),l=Object(r["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=l.exports}},[["919a","common/runtime","common/vendor"]]]);
});
require('pages/service/show.js');
__wxRoute = 'pages/service/live';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/service/live.js';

define('pages/service/live.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/service/live"],{"128a":function(t,e,n){"use strict";(function(t){n("f43f"),n("921b");i(n("66fd"));var e=i(n("ab8b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"1f42":function(t,e,n){"use strict";var i=n("9c48"),s=n.n(i);s.a},"2a44":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"9c48":function(t,e,n){},ab8b:function(t,e,n){"use strict";n.r(e);var i=n("2a44"),s=n("f80e");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("1f42");var u=n("2877"),a=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,"3c79173a",null);e["default"]=a.exports},eede:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(n("2145"));function o(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/im-chat/chatinput").then(n.bind(null,"e6ea"))},a={components:{chatInput:u},data:function(){return{posts:s.default,user_id:4,username:"热心网友陈德华",index:"",comment_index:"",input_placeholder:"评论",focus:!1,is_reply:!1,showInput:!1,screenHeight:"",platform:"",windowHeight:"",loadMoreText:"正在获取中~",showLoadMore:!1}},mounted:function(){t.getStorage({key:"posts",success:function(t){console.log(i(t.data," at pages\\service\\live.vue:98")),this.posts=t.data}})},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){e.screenHeight=t.screenHeight,e.platform=t.platform}}),t.startPullDownRefresh()},onShow:function(){var e=this;t.onWindowResize(function(t){"ios"===e.platform?(e.windowHeight=t.size.windowHeight,e.adjust()):e.screenHeight-t.size.windowHeight>60&&e.windowHeight<=t.size.windowHeight&&(e.windowHeight=t.size.windowHeight,e.adjust())})},onHide:function(){t.offWindowResize()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log(i("onReachBottom"," at pages\\service\\live.vue:136")),this.showLoadMore=!0,setTimeout(function(){t.posts.length<20?t.posts=t.posts.concat(t.posts):t.loadMoreText="暂无更多"},1e3)},onPullDownRefresh:function(){console.log(i("onPullDownRefresh"," at pages\\service\\live.vue:148")),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(t){0==t.index&&this.navigateTo("../publish/publish")},computed:{},methods:{test:function(){this.navigateTo("../test/test")},navigateTo:function(e){t.navigateTo({url:e})},like:function(t){0===this.posts[t].islike?(this.posts[t].islike=1,this.posts[t].like.push({uid:this.user_id,username:","+this.username})):(this.posts[t].islike=0,this.posts[t].like.splice(this.posts[t].like.indexOf({uid:this.user_id,username:","+this.username}),1))},comment:function(t){this.showInput=!0,this.focus=!0,this.index=t},adjust:function(){},reply:function(t,e){this.is_reply=!0,this.showInput=!0;var n=this.posts[t].comments.comment[e].username;this.input_placeholder="回复"+n,this.index=t,this.comment_index=e,this.focus=!0},blur:function(){this.init_input()},send_comment:function(t){if(this.is_reply)var e=this.posts[this.index].comments.comment[this.comment_index].username,n="回复"+e+":"+t.content;else n=t.content;this.posts[this.index].comments.total+=1,this.posts[this.index].comments.comment.push({uid:this.user_id,username:this.username,content:n}),this.init_input()},init_input:function(){this.showInput=!1,this.focus=!1,this.input_placeholder="评论",this.is_reply=!1},previewImage:function(e,n){var i=e[n];t.previewImage({current:i,urls:e})},goPublish:function(){t.navigateTo({url:"./publish/publish",success:function(t){},fail:function(){},complete:function(){}})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},f80e:function(t,e,n){"use strict";n.r(e);var i=n("eede"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a}},[["128a","common/runtime","common/vendor"]]]);
});
require('pages/service/live.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

