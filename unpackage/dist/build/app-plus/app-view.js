var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181116_syb_scopedata*/window.__wcc_version__='v0.5vv_20181116_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cu-custom'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'CustomBar']],[1,'px']]],[1,';']])
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'cuIcon-back'])
Z([3,'backText'])
Z([3,'content'])
Z([[2,'+'],[[2,'+'],[1,'top:'],[[2,'+'],[[7],[3,'StatusBar']],[1,'px']]],[1,';']])
Z(z[10])
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
Z([3,'content'])
Z([3,'aspectFill'])
Z([3,'/static/cjkz_1.png'])
Z([3,'width:240rpx;height:60rpx;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'reciveUserInfo']])
Z(z[8])
Z([[4],[[5],[[5],[1,'cu-card case']],[[2,'?:'],[[7],[3,'isCard']],[1,'no-card'],[1,'']]]])
Z([3,'cu-item shadow'])
Z([3,'image'])
Z([3,'imgInit'])
Z([3,'widthFix'])
Z([[6],[[7],[3,'item']],[3,'img_url']])
Z([3,'cu-tag bg-blue'])
Z([a,[[6],[[7],[3,'item']],[3,'type']]])
Z([3,'cu-bar bg-shadeBottom'])
Z([3,'text-cut'])
Z([a,[[6],[[7],[3,'item']],[3,'text']]])
Z([3,'cu-list menu-avatar'])
Z([3,'cu-item'])
Z([3,'cu-avatar round lg'])
Z([[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'item']],[3,'avatar_url']]],[1,')']]],[1,';']])
Z([3,'content flex-sub'])
Z([3,'text-grey'])
Z([a,[[6],[[7],[3,'item']],[3,'author']]])
Z([3,'text-gray text-sm flex justify-between'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'time']]],[1,'']]])
Z([3,'text-gray text-sm'])
Z([3,'cuIcon-attentionfill margin-lr-xs'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'view']]],[1,'']]])
Z([3,'cuIcon-appreciatefill margin-lr-xs'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'like']]],[1,'']]])
Z([3,'cuIcon-messagefill margin-lr-xs'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'remark']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'footer'])
Z([3,'footer-center'])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z([3,'input-text'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'sendMessge']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'blur']],[[4],[[5],[[4],[[5],[[5],[1,'blur']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'inputValue']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([[7],[3,'focus']])
Z([[7],[3,'placeholder']])
Z([3,'text'])
Z([[7],[3,'inputValue']])
Z([3,'footer-right'])
Z(z[2])
Z([3,'send-comment'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'sendMessge']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'msg-type'])
Z([3,'发送'])
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
Z([[4],[[5],[[5],[[5],[1,'_img data-v-647ba504']],[[2,'?:'],[1,true],[1,'down-icon'],[1,'']]],[[2,'?:'],[[2,'=='],[[7],[3,'pullDownStatus']],[1,3]],[1,'animate'],[1,'']]]])
Z([[6],[[7],[3,'$root']],[3,'m0']])
Z([3,'_span data-v-647ba504'])
Z([[2,'=='],[[7],[3,'pullDownStatus']],[1,1]])
Z([3,'data-v-647ba504'])
Z([a,[[7],[3,'downPullToRefresh']]])
Z([[2,'=='],[[7],[3,'pullDownStatus']],[1,2]])
Z(z[10])
Z([a,[[7],[3,'downReleaseToRefresh']]])
Z([[2,'=='],[[7],[3,'pullDownStatus']],[1,3]])
Z(z[10])
Z([a,[[7],[3,'downRefreshing']]])
Z([3,'__e'])
Z(z[18])
Z(z[18])
Z(z[18])
Z(z[18])
Z([3,'you-scroll-inner data-v-647ba504 vue-ref'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'startFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'endFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchcancel']],[[4],[[5],[[4],[[5],[[5],[1,'endFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'youScrollInner'])
Z([[7],[3,'scrollToTop']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateY('],[[7],[3,'translateY']]],[1,'px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[2,'?:'],[[7],[3,'isDown']],[1,'0s'],[1,'transform 0.3s']]],[1,';']]])
Z([3,'you-scroll-content data-v-647ba504'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'newscard'])
Z([3,'__l'])
Z([[7],[3,'lists']])
Z([3,'1'])
Z([3,'cu-tabbar-height'])
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
Z([3,'cu-bar tabbar bg-white shadow foot'])
Z([3,'__e'])
Z([3,'action'])
Z([3,'home'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'NavChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'cuIcon-cu-image'])
Z([[2,'+'],[[2,'+'],[1,'/static/tabbar/basics'],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'PageCur']],[1,'home']],[1,'_cur'],[1,'']]]]],[1,'.png']])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'PageCur']],[1,'home']],[1,'text-green'],[1,'text-gray']]]])
Z([3,'首页'])
Z(z[10])
Z(z[11])
Z([3,'service'])
Z(z[13])
Z(z[14])
Z([[2,'+'],[[2,'+'],[1,'/static/tabbar/component'],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'PageCur']],[1,'service']],[1,'_cur'],[1,'']]]]],[1,'.png']])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'PageCur']],[1,'service']],[1,'text-green'],[1,'text-gray']]]])
Z([3,'服务'])
Z(z[10])
Z(z[11])
Z([3,'person'])
Z(z[13])
Z(z[14])
Z([[2,'+'],[[2,'+'],[1,'/static/tabbar/plugin'],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'PageCur']],[1,'person']],[1,'_cur'],[1,'']]]]],[1,'.png']])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'PageCur']],[1,'person']],[1,'text-green'],[1,'text-gray']]]])
Z([3,'我的'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page_content data-v-80ced952'])
Z([3,'header data-v-80ced952'])
Z([3,'title data-v-80ced952'])
Z([3,'我的个人中心'])
Z([3,'btn data-v-80ced952'])
Z([3,'/static/person/icon_msg.png'])
Z([3,'logo data-v-80ced952'])
Z([3,'/static/person/pullDown.jpg'])
Z([1,false])
Z([3,'__e'])
Z([3,'swiper data-v-80ced952'])
Z([[7],[3,'bigIdx']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,1000])
Z(z[8])
Z([1,3000])
Z([3,'50px'])
Z(z[16])
Z([3,'i'])
Z([3,'vip'])
Z([[7],[3,'vips']])
Z([3,'data-v-80ced952'])
Z([[4],[[5],[[5],[[5],[1,'data-v-80ced952']],[1,'swiper-item']],[[2,'?:'],[[2,'==='],[[7],[3,'bigIdx']],[[7],[3,'i']]],[1,'big'],[1,'small']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background:'],[[6],[[7],[3,'vip']],[3,'bg']]],[1,';']],[[2,'+'],[[2,'+'],[1,'box-shadow:'],[[6],[[7],[3,'vip']],[3,'shadow']]],[1,';']]])
Z([3,'img data-v-80ced952'])
Z([3,'/static/person/icon_vip.png'])
Z(z[2])
Z([a,[[6],[[7],[3,'vip']],[3,'title']]])
Z([3,'sub_title data-v-80ced952'])
Z([a,[[6],[[7],[3,'vip']],[3,'subTitle']]])
Z([3,'title_line data-v-80ced952'])
Z(z[2])
Z([3,'我的任务'])
Z([3,'more data-v-80ced952'])
Z([3,'查看更多'])
Z([3,'slider data-v-80ced952'])
Z([3,'true'])
Z(z[18])
Z([3,'task'])
Z([[7],[3,'tasks']])
Z([3,'s_item data-v-80ced952'])
Z([3,'content data-v-80ced952'])
Z(z[24])
Z([[6],[[7],[3,'task']],[3,'icon']])
Z([3,'name data-v-80ced952'])
Z([a,[[6],[[7],[3,'task']],[3,'name']]])
Z([3,'desc data-v-80ced952'])
Z([a,[[6],[[7],[3,'task']],[3,'desc']]])
Z(z[4])
Z([3,'已完成'])
Z(z[30])
Z(z[2])
Z([3,'当前等级福利'])
Z(z[33])
Z(z[34])
Z([3,'welfare data-v-80ced952'])
Z(z[18])
Z([3,'info'])
Z([[7],[3,'welfare']])
Z([3,'item data-v-80ced952'])
Z([3,'border data-v-80ced952'])
Z(z[24])
Z([[6],[[7],[3,'info']],[3,'icon']])
Z([3,'txt data-v-80ced952'])
Z([a,[[6],[[7],[3,'info']],[3,'name']]])
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
Z([3,'backText'])
Z([3,'返回'])
Z([3,'content'])
Z([3,'记录我的身体数据'])
Z([3,'cu-form-group margin-top'])
Z([3,'title'])
Z([3,'我的身高'])
Z([3,'input'])
Z([3,'点击填写'])
Z([3,'cu-form-group'])
Z(z[10])
Z([3,'体重'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[10])
Z([3,'胸围'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[10])
Z([3,'腰围'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[10])
Z([3,'静息心率'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[10])
Z([3,'最大心率'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[10])
Z([3,'BMI'])
Z(z[12])
Z([3,'cu-btn bg-green shadow'])
Z([3,'计算'])
Z([3,'cu-form-group align-start'])
Z(z[10])
Z([3,'备注'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'textareaBInput']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[7],[3,'modalName']],[1,null]])
Z([3,'-1'])
Z([3,'多行文本输入框'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'/static/20191125160241.png'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
Z([3,'content'])
Z([3,'aspectFill'])
Z([3,'/static/cjkz.png'])
Z([3,'width:240rpx;height:60rpx;'])
Z([3,'cu-card'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[10])
Z([3,'__e'])
Z([3,'cu-item bg-img shadow-blur'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toChild']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'item']],[3,'img']]],[1,')']]],[1,';']])
Z([3,'cardTitle'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'title']]],[1,'']]])
Z([3,'cu-tabbar-height'])
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
Z(z[0])
Z([3,'backText'])
Z([3,'返回'])
Z(z[0])
Z([3,'content'])
Z([3,'广东药科大学社区'])
Z([3,'home-pic data-v-3c79173a'])
Z([3,'home-pic-base data-v-3c79173a'])
Z([3,'top-pic data-v-3c79173a'])
Z([3,'__e'])
Z([3,'header data-v-3c79173a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'test']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/live/test/header06.jpg'])
Z([3,'top-name data-v-3c79173a'])
Z([3,'热心网友陈德华'])
Z([3,'index'])
Z([3,'post'])
Z([[7],[3,'posts']])
Z(z[23])
Z([3,'moments__post data-v-3c79173a'])
Z([[2,'+'],[1,'post-'],[[7],[3,'index']]])
Z([3,'post-left data-v-3c79173a'])
Z([3,'post_header data-v-3c79173a'])
Z([[6],[[7],[3,'post']],[3,'header_image']])
Z([3,'post_right data-v-3c79173a'])
Z([3,'post-username data-v-3c79173a'])
Z([a,[[6],[[7],[3,'post']],[3,'username']]])
Z([3,'paragraph data-v-3c79173a'])
Z([3,'paragraph'])
Z([a,[[6],[[6],[[7],[3,'post']],[3,'content']],[3,'text']]])
Z([3,'thumbnails data-v-3c79173a'])
Z([3,'index_images'])
Z([3,'image'])
Z([[6],[[6],[[7],[3,'post']],[3,'content']],[3,'images']])
Z(z[39])
Z([[4],[[5],[[5],[1,'data-v-3c79173a']],[[2,'?:'],[[2,'==='],[[6],[[6],[[6],[[7],[3,'post']],[3,'content']],[3,'images']],[3,'length']],[1,1]],[1,'my-gallery'],[1,'thumbnail']]]])
Z(z[17])
Z([3,'gallery_img data-v-3c79173a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'previewImage']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index_images']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'posts']],[1,'']],[[7],[3,'index']]],[1,'content.images']]]]]]]]]]]]]]])
Z([[7],[3,'image']])
Z([3,'aspectFill'])
Z(z[47])
Z([3,'toolbar data-v-3c79173a'])
Z([3,'timestamp data-v-3c79173a'])
Z([a,[[6],[[7],[3,'post']],[3,'timestamp']]])
Z(z[17])
Z([3,'like data-v-3c79173a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'like']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z(z[0])
Z([[2,'?:'],[[2,'==='],[[6],[[7],[3,'post']],[3,'islike']],[1,0]],[1,'../../static/live/islike.png'],[1,'../../static/live/like.png']])
Z(z[17])
Z([3,'comment data-v-3c79173a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'comment']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z(z[0])
Z([3,'../../static/live/comment.png'])
Z([3,'post-footer data-v-3c79173a'])
Z([3,'footer_content data-v-3c79173a'])
Z([3,'liked data-v-3c79173a'])
Z([3,'../../static/live/liked.png'])
Z([3,'index_like'])
Z([3,'user'])
Z([[6],[[7],[3,'post']],[3,'like']])
Z(z[67])
Z([3,'nickname data-v-3c79173a'])
Z([a,[[6],[[7],[3,'user']],[3,'username']]])
Z([3,'comment_index'])
Z([3,'comment'])
Z([[6],[[6],[[7],[3,'post']],[3,'comments']],[3,'comment']])
Z(z[73])
Z(z[17])
Z(z[64])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'reply']],[[4],[[5],[[5],[[7],[3,'index']]],[[7],[3,'comment_index']]]]]]]]]]]])
Z([3,'comment-nickname data-v-3c79173a'])
Z([a,[[2,'+'],[[6],[[7],[3,'comment']],[3,'username']],[1,':']]])
Z([3,'comment-content data-v-3c79173a'])
Z([a,[[6],[[7],[3,'comment']],[3,'content']]])
Z([3,'foot data-v-3c79173a'])
Z([[2,'!'],[[7],[3,'showInput']]])
Z(z[3])
Z(z[17])
Z(z[17])
Z(z[0])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sendMessage']],[[4],[[5],[[4],[[5],[1,'send_comment']]]]]]]],[[4],[[5],[[5],[1,'^blur']],[[4],[[5],[[4],[[5],[1,'blur']]]]]]]]])
Z([[7],[3,'focus']])
Z([[7],[3,'input_placeholder']])
Z([3,'2'])
Z([[7],[3,'showLoadMore']])
Z([3,'uni-loadmore data-v-3c79173a'])
Z([a,[[7],[3,'loadMoreText']]])
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
Z([3,'backText'])
Z([3,'返回'])
Z([3,'content'])
Z([3,'发布动态'])
Z([3,'cu-form-group align-start'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'textareaAInput']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[7],[3,'modalName']],[1,null]])
Z([3,'-1'])
Z([3,'多行文本输入框'])
Z([3,'cu-bar bg-white align-start'])
Z([3,'action'])
Z([3,'来张图片！'])
Z(z[16])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'imgList']],[3,'length']]],[1,'/4']]])
Z(z[9])
Z([3,'grid col-4 grid-square flex-sub'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'imgList']])
Z(z[22])
Z(z[10])
Z([3,'bg-img'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'ViewImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'imgList']],[[7],[3,'index']]])
Z([3,'aspectFill'])
Z(z[29])
Z(z[10])
Z([3,'cu-tag bg-red'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'DelImg']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([3,'cuIcon-close'])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,4]])
Z(z[10])
Z([3,'solids'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'ChooseImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'cuIcon-cameraadd'])
Z([3,'cu-form-group margin-top'])
Z([3,'title'])
Z([3,'发布到首页动态，让更多人看到'])
Z(z[10])
Z([[2,'?:'],[[7],[3,'switchA']],[1,true],[1,false]])
Z([[4],[[5],[[2,'?:'],[[7],[3,'switchA']],[1,'checked'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'SwitchA']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'cu-form-group'])
Z(z[43])
Z([3,'今日步数'])
Z([3,'input'])
Z([3,'默认不上传今日步数'])
Z([3,'cu-btn bg-green shadow'])
Z([3,'自动同步'])
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
Z([3,'backText'])
Z([3,'返回'])
Z(z[0])
Z([3,'本月关键词'])
Z([3,'img1'])
Z(z[2])
Z([3,'__e'])
Z(z[12])
Z(z[12])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onPullDown']],[[4],[[5],[[4],[[5],[1,'onPullDown']]]]]]]],[[4],[[5],[[5],[1,'^onScroll']],[[4],[[5],[[4],[[5],[1,'onScroll']]]]]]]],[[4],[[5],[[5],[1,'^onLoadMore']],[[4],[[5],[[4],[[5],[1,'onLoadMore']]]]]]]]])
Z([3,'scroll'])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([3,'padding'])
Z([3,'cu-btn block bg-blue margin-tb-sm lg'])
Z([3,'无效状态'])
Z([3,'cu-btn block line-blue margin-tb-sm lg'])
Z(z[22])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./colorui/components/newscard.wxml','./components/im-chat/chatinput.wxml','./components/you-scroll.wxml','./pages/home/home.wxml','./pages/index/index.wxml','./pages/person/home.wxml','./pages/service/data_recording.wxml','./pages/service/home.wxml','./pages/service/live.wxml','./pages/service/release_new.wxml','./pages/service/show.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
var xC=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oD=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
var cF=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var hG=_n('text')
_rz(z,hG,'class',8,e,s,gg)
_(cF,hG)
var oH=_n('slot')
_rz(z,oH,'name',9,e,s,gg)
_(cF,oH)
_(fE,cF)
}
var cI=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var oJ=_n('slot')
_rz(z,oJ,'name',12,e,s,gg)
_(cI,oJ)
_(oD,cI)
var lK=_n('slot')
_rz(z,lK,'name',13,e,s,gg)
_(oD,lK)
fE.wxXCkey=1
_(xC,oD)
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var tM=_n('view')
var eN=_mz(z,'cu-custom',['bgImage',0,'bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var bO=_n('view')
_rz(z,bO,'slot',4,e,s,gg)
var oP=_mz(z,'image',['mode',5,'src',1,'style',2],[],e,s,gg)
_(bO,oP)
_(eN,bO)
_(tM,eN)
var xQ=_v()
_(tM,xQ)
var oR=function(cT,fS,hU,gg){
var cW=_n('view')
_rz(z,cW,'class',12,cT,fS,gg)
var oX=_n('view')
_rz(z,oX,'class',13,cT,fS,gg)
var lY=_n('view')
_rz(z,lY,'class',14,cT,fS,gg)
var aZ=_mz(z,'image',['id',15,'mode',1,'src',2],[],cT,fS,gg)
_(lY,aZ)
var t1=_n('view')
_rz(z,t1,'class',18,cT,fS,gg)
var e2=_oz(z,19,cT,fS,gg)
_(t1,e2)
_(lY,t1)
var b3=_n('view')
_rz(z,b3,'class',20,cT,fS,gg)
var o4=_n('text')
_rz(z,o4,'class',21,cT,fS,gg)
var x5=_oz(z,22,cT,fS,gg)
_(o4,x5)
_(b3,o4)
_(lY,b3)
_(oX,lY)
var o6=_n('view')
_rz(z,o6,'class',23,cT,fS,gg)
var f7=_n('view')
_rz(z,f7,'class',24,cT,fS,gg)
var c8=_mz(z,'view',['class',25,'style',1],[],cT,fS,gg)
_(f7,c8)
var h9=_n('view')
_rz(z,h9,'class',27,cT,fS,gg)
var o0=_n('view')
_rz(z,o0,'class',28,cT,fS,gg)
var cAB=_oz(z,29,cT,fS,gg)
_(o0,cAB)
_(h9,o0)
var oBB=_n('view')
_rz(z,oBB,'class',30,cT,fS,gg)
var lCB=_oz(z,31,cT,fS,gg)
_(oBB,lCB)
var aDB=_n('view')
_rz(z,aDB,'class',32,cT,fS,gg)
var tEB=_n('text')
_rz(z,tEB,'class',33,cT,fS,gg)
_(aDB,tEB)
var eFB=_oz(z,34,cT,fS,gg)
_(aDB,eFB)
var bGB=_n('text')
_rz(z,bGB,'class',35,cT,fS,gg)
_(aDB,bGB)
var oHB=_oz(z,36,cT,fS,gg)
_(aDB,oHB)
var xIB=_n('text')
_rz(z,xIB,'class',37,cT,fS,gg)
_(aDB,xIB)
var oJB=_oz(z,38,cT,fS,gg)
_(aDB,oJB)
_(oBB,aDB)
_(h9,oBB)
_(f7,h9)
_(o6,f7)
_(oX,o6)
_(cW,oX)
_(hU,cW)
return hU
}
xQ.wxXCkey=2
_2z(z,10,oR,e,s,gg,xQ,'item','index','index')
_(r,tM)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cLB=_n('view')
_rz(z,cLB,'class',0,e,s,gg)
var hMB=_n('view')
_rz(z,hMB,'class',1,e,s,gg)
var oNB=_mz(z,'input',['bindblur',2,'bindconfirm',1,'bindinput',2,'class',3,'data-event-opts',4,'focus',5,'placeholder',6,'type',7,'value',8],[],e,s,gg)
_(hMB,oNB)
_(cLB,hMB)
var cOB=_n('view')
_rz(z,cOB,'class',11,e,s,gg)
var oPB=_mz(z,'view',['bindtap',12,'class',1,'data-event-opts',2,'id',3],[],e,s,gg)
var lQB=_oz(z,16,e,s,gg)
_(oPB,lQB)
_(cOB,oPB)
_(cLB,cOB)
_(r,cLB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var tSB=_mz(z,'view',['class',0,'data-ref',1],[],e,s,gg)
var eTB=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,4,e,s,gg)){bUB.wxVkey=1
var oVB=_n('slot')
_rz(z,oVB,'name',5,e,s,gg)
_(bUB,oVB)
}
else{bUB.wxVkey=2
var xWB=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
_(bUB,xWB)
var oXB=_n('label')
_rz(z,oXB,'class',8,e,s,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,9,e,s,gg)){fYB.wxVkey=1
var o2B=_oz(z,11,e,s,gg)
_(fYB,o2B)
}
var cZB=_v()
_(oXB,cZB)
if(_oz(z,12,e,s,gg)){cZB.wxVkey=1
var c3B=_oz(z,14,e,s,gg)
_(cZB,c3B)
}
var h1B=_v()
_(oXB,h1B)
if(_oz(z,15,e,s,gg)){h1B.wxVkey=1
var o4B=_oz(z,17,e,s,gg)
_(h1B,o4B)
}
fYB.wxXCkey=1
cZB.wxXCkey=1
h1B.wxXCkey=1
_(bUB,oXB)
}
bUB.wxXCkey=1
_(tSB,eTB)
var l5B=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',18,'bindtouchcancel',1,'bindtouchend',2,'bindtouchmove',3,'bindtouchstart',4,'class',5,'data-event-opts',6,'data-ref',7,'scrollTop',8,'style',9],[],e,s,gg)
var a6B=_n('view')
_rz(z,a6B,'class',28,e,s,gg)
var t7B=_n('slot')
_(a6B,t7B)
_(l5B,a6B)
_(tSB,l5B)
_(r,tSB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var b9B=_n('view')
var o0B=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var xAC=_n('view')
_rz(z,xAC,'class',1,e,s,gg)
var oBC=_mz(z,'newscard',['bind:__l',2,'reciveUserInfo',1,'vueId',2],[],e,s,gg)
_(xAC,oBC)
_(o0B,xAC)
var fCC=_n('view')
_rz(z,fCC,'class',5,e,s,gg)
_(o0B,fCC)
_(b9B,o0B)
_(r,b9B)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hEC=_n('view')
var oFC=_v()
_(hEC,oFC)
if(_oz(z,0,e,s,gg)){oFC.wxVkey=1
var lIC=_mz(z,'home',['bind:__l',1,'vueId',1],[],e,s,gg)
_(oFC,lIC)
}
var cGC=_v()
_(hEC,cGC)
if(_oz(z,3,e,s,gg)){cGC.wxVkey=1
var aJC=_mz(z,'service',['bind:__l',4,'vueId',1],[],e,s,gg)
_(cGC,aJC)
}
var oHC=_v()
_(hEC,oHC)
if(_oz(z,6,e,s,gg)){oHC.wxVkey=1
var tKC=_mz(z,'person',['bind:__l',7,'vueId',1],[],e,s,gg)
_(oHC,tKC)
}
var eLC=_n('view')
_rz(z,eLC,'class',9,e,s,gg)
var bMC=_mz(z,'view',['bindtap',10,'class',1,'data-cur',2,'data-event-opts',3],[],e,s,gg)
var oNC=_n('view')
_rz(z,oNC,'class',14,e,s,gg)
var xOC=_n('image')
_rz(z,xOC,'src',15,e,s,gg)
_(oNC,xOC)
_(bMC,oNC)
var oPC=_n('view')
_rz(z,oPC,'class',16,e,s,gg)
var fQC=_oz(z,17,e,s,gg)
_(oPC,fQC)
_(bMC,oPC)
_(eLC,bMC)
var cRC=_mz(z,'view',['bindtap',18,'class',1,'data-cur',2,'data-event-opts',3],[],e,s,gg)
var hSC=_n('view')
_rz(z,hSC,'class',22,e,s,gg)
var oTC=_n('image')
_rz(z,oTC,'src',23,e,s,gg)
_(hSC,oTC)
_(cRC,hSC)
var cUC=_n('view')
_rz(z,cUC,'class',24,e,s,gg)
var oVC=_oz(z,25,e,s,gg)
_(cUC,oVC)
_(cRC,cUC)
_(eLC,cRC)
var lWC=_mz(z,'view',['bindtap',26,'class',1,'data-cur',2,'data-event-opts',3],[],e,s,gg)
var aXC=_n('view')
_rz(z,aXC,'class',30,e,s,gg)
var tYC=_n('image')
_rz(z,tYC,'src',31,e,s,gg)
_(aXC,tYC)
_(lWC,aXC)
var eZC=_n('view')
_rz(z,eZC,'class',32,e,s,gg)
var b1C=_oz(z,33,e,s,gg)
_(eZC,b1C)
_(lWC,eZC)
_(eLC,lWC)
_(hEC,eLC)
oFC.wxXCkey=1
oFC.wxXCkey=3
cGC.wxXCkey=1
cGC.wxXCkey=3
oHC.wxXCkey=1
oHC.wxXCkey=3
_(r,hEC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var x3C=_n('view')
_rz(z,x3C,'class',0,e,s,gg)
var o4C=_n('view')
_rz(z,o4C,'class',1,e,s,gg)
var f5C=_n('text')
_rz(z,f5C,'class',2,e,s,gg)
var c6C=_oz(z,3,e,s,gg)
_(f5C,c6C)
_(o4C,f5C)
var h7C=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
_(o4C,h7C)
_(x3C,o4C)
var o8C=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
_(x3C,o8C)
var c9C=_mz(z,'swiper',['autoplay',8,'bindchange',1,'class',2,'current',3,'data-event-opts',4,'duration',5,'indicatorDots',6,'interval',7,'nextMargin',8,'previousMargin',9],[],e,s,gg)
var o0C=_v()
_(c9C,o0C)
var lAD=function(tCD,aBD,eDD,gg){
var oFD=_n('swiper-item')
_rz(z,oFD,'class',21,tCD,aBD,gg)
var xGD=_mz(z,'view',['class',22,'style',1],[],tCD,aBD,gg)
var oHD=_mz(z,'image',['class',24,'src',1],[],tCD,aBD,gg)
_(xGD,oHD)
var fID=_n('text')
_rz(z,fID,'class',26,tCD,aBD,gg)
var cJD=_oz(z,27,tCD,aBD,gg)
_(fID,cJD)
_(xGD,fID)
var hKD=_n('text')
_rz(z,hKD,'class',28,tCD,aBD,gg)
var oLD=_oz(z,29,tCD,aBD,gg)
_(hKD,oLD)
_(xGD,hKD)
_(oFD,xGD)
_(eDD,oFD)
return eDD
}
o0C.wxXCkey=2
_2z(z,20,lAD,e,s,gg,o0C,'vip','i','')
_(x3C,c9C)
var cMD=_n('view')
_rz(z,cMD,'class',30,e,s,gg)
var oND=_n('text')
_rz(z,oND,'class',31,e,s,gg)
var lOD=_oz(z,32,e,s,gg)
_(oND,lOD)
_(cMD,oND)
var aPD=_n('text')
_rz(z,aPD,'class',33,e,s,gg)
var tQD=_oz(z,34,e,s,gg)
_(aPD,tQD)
_(cMD,aPD)
_(x3C,cMD)
var eRD=_mz(z,'scroll-view',['class',35,'scrollX',1],[],e,s,gg)
var bSD=_v()
_(eRD,bSD)
var oTD=function(oVD,xUD,fWD,gg){
var hYD=_n('view')
_rz(z,hYD,'class',40,oVD,xUD,gg)
var oZD=_n('view')
_rz(z,oZD,'class',41,oVD,xUD,gg)
var c1D=_mz(z,'image',['class',42,'src',1],[],oVD,xUD,gg)
_(oZD,c1D)
var o2D=_n('text')
_rz(z,o2D,'class',44,oVD,xUD,gg)
var l3D=_oz(z,45,oVD,xUD,gg)
_(o2D,l3D)
_(oZD,o2D)
var a4D=_n('text')
_rz(z,a4D,'class',46,oVD,xUD,gg)
var t5D=_oz(z,47,oVD,xUD,gg)
_(a4D,t5D)
_(oZD,a4D)
var e6D=_n('text')
_rz(z,e6D,'class',48,oVD,xUD,gg)
var b7D=_oz(z,49,oVD,xUD,gg)
_(e6D,b7D)
_(oZD,e6D)
_(hYD,oZD)
_(fWD,hYD)
return fWD
}
bSD.wxXCkey=2
_2z(z,39,oTD,e,s,gg,bSD,'task','i','')
_(x3C,eRD)
var o8D=_n('view')
_rz(z,o8D,'class',50,e,s,gg)
var x9D=_n('text')
_rz(z,x9D,'class',51,e,s,gg)
var o0D=_oz(z,52,e,s,gg)
_(x9D,o0D)
_(o8D,x9D)
var fAE=_n('text')
_rz(z,fAE,'class',53,e,s,gg)
var cBE=_oz(z,54,e,s,gg)
_(fAE,cBE)
_(o8D,fAE)
_(x3C,o8D)
var hCE=_n('view')
_rz(z,hCE,'class',55,e,s,gg)
var oDE=_v()
_(hCE,oDE)
var cEE=function(lGE,oFE,aHE,gg){
var eJE=_n('view')
_rz(z,eJE,'class',59,lGE,oFE,gg)
var bKE=_n('view')
_rz(z,bKE,'class',60,lGE,oFE,gg)
var oLE=_mz(z,'image',['class',61,'src',1],[],lGE,oFE,gg)
_(bKE,oLE)
_(eJE,bKE)
var xME=_n('text')
_rz(z,xME,'class',63,lGE,oFE,gg)
var oNE=_oz(z,64,lGE,oFE,gg)
_(xME,oNE)
_(eJE,xME)
_(aHE,eJE)
return aHE
}
oDE.wxXCkey=2
_2z(z,58,cEE,e,s,gg,oDE,'info','i','')
_(x3C,hCE)
_(r,x3C)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cPE=_n('view')
var hQE=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var oRE=_n('view')
_rz(z,oRE,'slot',5,e,s,gg)
var cSE=_oz(z,6,e,s,gg)
_(oRE,cSE)
_(hQE,oRE)
var oTE=_n('view')
_rz(z,oTE,'slot',7,e,s,gg)
var lUE=_oz(z,8,e,s,gg)
_(oTE,lUE)
_(hQE,oTE)
_(cPE,hQE)
var aVE=_n('form')
var tWE=_n('view')
_rz(z,tWE,'class',9,e,s,gg)
var eXE=_n('view')
_rz(z,eXE,'class',10,e,s,gg)
var bYE=_oz(z,11,e,s,gg)
_(eXE,bYE)
_(tWE,eXE)
var oZE=_mz(z,'input',['name',12,'placeholder',1],[],e,s,gg)
_(tWE,oZE)
_(aVE,tWE)
var x1E=_n('view')
_rz(z,x1E,'class',14,e,s,gg)
var o2E=_n('view')
_rz(z,o2E,'class',15,e,s,gg)
var f3E=_oz(z,16,e,s,gg)
_(o2E,f3E)
_(x1E,o2E)
var c4E=_mz(z,'input',['name',17,'placeholder',1],[],e,s,gg)
_(x1E,c4E)
_(aVE,x1E)
var h5E=_n('view')
_rz(z,h5E,'class',19,e,s,gg)
var o6E=_n('view')
_rz(z,o6E,'class',20,e,s,gg)
var c7E=_oz(z,21,e,s,gg)
_(o6E,c7E)
_(h5E,o6E)
var o8E=_mz(z,'input',['name',22,'placeholder',1],[],e,s,gg)
_(h5E,o8E)
_(aVE,h5E)
var l9E=_n('view')
_rz(z,l9E,'class',24,e,s,gg)
var a0E=_n('view')
_rz(z,a0E,'class',25,e,s,gg)
var tAF=_oz(z,26,e,s,gg)
_(a0E,tAF)
_(l9E,a0E)
var eBF=_mz(z,'input',['name',27,'placeholder',1],[],e,s,gg)
_(l9E,eBF)
_(aVE,l9E)
var bCF=_n('view')
_rz(z,bCF,'class',29,e,s,gg)
var oDF=_n('view')
_rz(z,oDF,'class',30,e,s,gg)
var xEF=_oz(z,31,e,s,gg)
_(oDF,xEF)
_(bCF,oDF)
var oFF=_mz(z,'input',['name',32,'placeholder',1],[],e,s,gg)
_(bCF,oFF)
_(aVE,bCF)
var fGF=_n('view')
_rz(z,fGF,'class',34,e,s,gg)
var cHF=_n('view')
_rz(z,cHF,'class',35,e,s,gg)
var hIF=_oz(z,36,e,s,gg)
_(cHF,hIF)
_(fGF,cHF)
var oJF=_mz(z,'input',['name',37,'placeholder',1],[],e,s,gg)
_(fGF,oJF)
_(aVE,fGF)
var cKF=_n('view')
_rz(z,cKF,'class',39,e,s,gg)
var oLF=_n('view')
_rz(z,oLF,'class',40,e,s,gg)
var lMF=_oz(z,41,e,s,gg)
_(oLF,lMF)
_(cKF,oLF)
var aNF=_mz(z,'input',['placeholder',-1,'name',42],[],e,s,gg)
_(cKF,aNF)
var tOF=_n('button')
_rz(z,tOF,'class',43,e,s,gg)
var ePF=_oz(z,44,e,s,gg)
_(tOF,ePF)
_(cKF,tOF)
_(aVE,cKF)
var bQF=_n('view')
_rz(z,bQF,'class',45,e,s,gg)
var oRF=_n('view')
_rz(z,oRF,'class',46,e,s,gg)
var xSF=_oz(z,47,e,s,gg)
_(oRF,xSF)
_(bQF,oRF)
var oTF=_mz(z,'textarea',['bindinput',48,'data-event-opts',1,'disabled',2,'maxlength',3,'placeholder',4],[],e,s,gg)
_(bQF,oTF)
_(aVE,bQF)
_(cPE,aVE)
_(r,cPE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cVF=_n('view')
var hWF=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var oXF=_mz(z,'cu-custom',['bgImage',1,'bind:__l',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var cYF=_n('view')
_rz(z,cYF,'slot',5,e,s,gg)
var oZF=_mz(z,'image',['mode',6,'src',1,'style',2],[],e,s,gg)
_(cYF,oZF)
_(oXF,cYF)
_(hWF,oXF)
var l1F=_n('view')
_rz(z,l1F,'class',9,e,s,gg)
var a2F=_v()
_(l1F,a2F)
var t3F=function(b5F,e4F,o6F,gg){
var o8F=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2,'data-url',3,'style',4],[],b5F,e4F,gg)
var f9F=_n('view')
_rz(z,f9F,'class',19,b5F,e4F,gg)
var c0F=_oz(z,20,b5F,e4F,gg)
_(f9F,c0F)
_(o8F,f9F)
_(o6F,o8F)
return o6F
}
a2F.wxXCkey=2
_2z(z,12,t3F,e,s,gg,a2F,'item','index','index')
_(hWF,l1F)
var hAG=_n('view')
_rz(z,hAG,'class',21,e,s,gg)
_(hWF,hAG)
_(cVF,hWF)
_(r,cVF)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cCG=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var lEG=_mz(z,'cu-custom',['bgColor',2,'bind:__l',1,'class',2,'isBack',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var aFG=_mz(z,'view',['class',8,'slot',1],[],e,s,gg)
var tGG=_oz(z,10,e,s,gg)
_(aFG,tGG)
_(lEG,aFG)
var eHG=_mz(z,'view',['class',11,'slot',1],[],e,s,gg)
var bIG=_oz(z,13,e,s,gg)
_(eHG,bIG)
_(lEG,eHG)
_(cCG,lEG)
var oJG=_n('view')
_rz(z,oJG,'class',14,e,s,gg)
var xKG=_n('view')
_rz(z,xKG,'class',15,e,s,gg)
var oLG=_n('view')
_rz(z,oLG,'class',16,e,s,gg)
var fMG=_mz(z,'image',['bindtap',17,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(oLG,fMG)
_(xKG,oLG)
var cNG=_n('view')
_rz(z,cNG,'class',21,e,s,gg)
var hOG=_oz(z,22,e,s,gg)
_(cNG,hOG)
_(xKG,cNG)
_(oJG,xKG)
_(cCG,oJG)
var oPG=_v()
_(cCG,oPG)
var cQG=function(lSG,oRG,aTG,gg){
var eVG=_mz(z,'view',['class',27,'id',1],[],lSG,oRG,gg)
var bWG=_n('view')
_rz(z,bWG,'class',29,lSG,oRG,gg)
var oXG=_mz(z,'image',['class',30,'src',1],[],lSG,oRG,gg)
_(bWG,oXG)
_(eVG,bWG)
var xYG=_n('view')
_rz(z,xYG,'class',32,lSG,oRG,gg)
var oZG=_n('text')
_rz(z,oZG,'class',33,lSG,oRG,gg)
var f1G=_oz(z,34,lSG,oRG,gg)
_(oZG,f1G)
_(xYG,oZG)
var c2G=_mz(z,'view',['class',35,'id',1],[],lSG,oRG,gg)
var h3G=_oz(z,37,lSG,oRG,gg)
_(c2G,h3G)
_(xYG,c2G)
var o4G=_n('view')
_rz(z,o4G,'class',38,lSG,oRG,gg)
var c5G=_v()
_(o4G,c5G)
var o6G=function(a8G,l7G,t9G,gg){
var bAH=_n('view')
_rz(z,bAH,'class',43,a8G,l7G,gg)
var oBH=_mz(z,'image',['lazyLoad',-1,'bindtap',44,'class',1,'data-event-opts',2,'data-src',3,'mode',4,'src',5],[],a8G,l7G,gg)
_(bAH,oBH)
_(t9G,bAH)
return t9G
}
c5G.wxXCkey=2
_2z(z,41,o6G,lSG,oRG,gg,c5G,'image','index_images','index_images')
_(xYG,o4G)
var xCH=_n('view')
_rz(z,xCH,'class',50,lSG,oRG,gg)
var oDH=_n('view')
_rz(z,oDH,'class',51,lSG,oRG,gg)
var fEH=_oz(z,52,lSG,oRG,gg)
_(oDH,fEH)
_(xCH,oDH)
var cFH=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],lSG,oRG,gg)
var hGH=_mz(z,'image',['class',56,'src',1],[],lSG,oRG,gg)
_(cFH,hGH)
_(xCH,cFH)
var oHH=_mz(z,'view',['bindtap',58,'class',1,'data-event-opts',2],[],lSG,oRG,gg)
var cIH=_mz(z,'image',['class',61,'src',1],[],lSG,oRG,gg)
_(oHH,cIH)
_(xCH,oHH)
_(xYG,xCH)
var oJH=_n('view')
_rz(z,oJH,'class',63,lSG,oRG,gg)
var lKH=_n('view')
_rz(z,lKH,'class',64,lSG,oRG,gg)
var aLH=_mz(z,'image',['class',65,'src',1],[],lSG,oRG,gg)
_(lKH,aLH)
var tMH=_v()
_(lKH,tMH)
var eNH=function(oPH,bOH,xQH,gg){
var fSH=_n('text')
_rz(z,fSH,'class',71,oPH,bOH,gg)
var cTH=_oz(z,72,oPH,bOH,gg)
_(fSH,cTH)
_(xQH,fSH)
return xQH
}
tMH.wxXCkey=2
_2z(z,69,eNH,lSG,oRG,gg,tMH,'user','index_like','index_like')
_(oJH,lKH)
var hUH=_v()
_(oJH,hUH)
var oVH=function(oXH,cWH,lYH,gg){
var t1H=_mz(z,'view',['bindtap',77,'class',1,'data-event-opts',2],[],oXH,cWH,gg)
var e2H=_n('text')
_rz(z,e2H,'class',80,oXH,cWH,gg)
var b3H=_oz(z,81,oXH,cWH,gg)
_(e2H,b3H)
var o4H=_n('text')
_rz(z,o4H,'class',82,oXH,cWH,gg)
var x5H=_oz(z,83,oXH,cWH,gg)
_(o4H,x5H)
_(e2H,o4H)
_(t1H,e2H)
_(lYH,t1H)
return lYH
}
hUH.wxXCkey=2
_2z(z,75,oVH,lSG,oRG,gg,hUH,'comment','comment_index','comment_index')
_(xYG,oJH)
_(eVG,xYG)
_(aTG,eVG)
return aTG
}
oPG.wxXCkey=2
_2z(z,25,cQG,e,s,gg,oPG,'post','index','index')
var o6H=_mz(z,'view',['class',84,'hidden',1],[],e,s,gg)
var f7H=_mz(z,'chat-input',['bind:__l',86,'bind:blur',1,'bind:sendMessage',2,'class',3,'data-event-opts',4,'focus',5,'placeholder',6,'vueId',7],[],e,s,gg)
_(o6H,f7H)
_(cCG,o6H)
var oDG=_v()
_(cCG,oDG)
if(_oz(z,94,e,s,gg)){oDG.wxVkey=1
var c8H=_n('view')
_rz(z,c8H,'class',95,e,s,gg)
var h9H=_oz(z,96,e,s,gg)
_(c8H,h9H)
_(oDG,c8H)
}
oDG.wxXCkey=1
_(r,cCG)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cAI=_n('view')
var oBI=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'isBack',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var lCI=_n('view')
_rz(z,lCI,'slot',5,e,s,gg)
var aDI=_oz(z,6,e,s,gg)
_(lCI,aDI)
_(oBI,lCI)
var tEI=_n('view')
_rz(z,tEI,'slot',7,e,s,gg)
var eFI=_oz(z,8,e,s,gg)
_(tEI,eFI)
_(oBI,tEI)
_(cAI,oBI)
var bGI=_n('form')
var oHI=_n('view')
_rz(z,oHI,'class',9,e,s,gg)
var xII=_mz(z,'textarea',['bindinput',10,'data-event-opts',1,'disabled',2,'maxlength',3,'placeholder',4],[],e,s,gg)
_(oHI,xII)
_(bGI,oHI)
var oJI=_n('view')
_rz(z,oJI,'class',15,e,s,gg)
var fKI=_n('view')
_rz(z,fKI,'class',16,e,s,gg)
var cLI=_oz(z,17,e,s,gg)
_(fKI,cLI)
_(oJI,fKI)
var hMI=_n('view')
_rz(z,hMI,'class',18,e,s,gg)
var oNI=_oz(z,19,e,s,gg)
_(hMI,oNI)
_(oJI,hMI)
_(bGI,oJI)
var cOI=_n('view')
_rz(z,cOI,'class',20,e,s,gg)
var oPI=_n('view')
_rz(z,oPI,'class',21,e,s,gg)
var aRI=_v()
_(oPI,aRI)
var tSI=function(bUI,eTI,oVI,gg){
var oXI=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2,'data-url',3],[],bUI,eTI,gg)
var fYI=_mz(z,'image',['mode',30,'src',1],[],bUI,eTI,gg)
_(oXI,fYI)
var cZI=_mz(z,'view',['catchtap',32,'class',1,'data-event-opts',2,'data-index',3],[],bUI,eTI,gg)
var h1I=_n('text')
_rz(z,h1I,'class',36,bUI,eTI,gg)
_(cZI,h1I)
_(oXI,cZI)
_(oVI,oXI)
return oVI
}
aRI.wxXCkey=2
_2z(z,24,tSI,e,s,gg,aRI,'item','index','index')
var lQI=_v()
_(oPI,lQI)
if(_oz(z,37,e,s,gg)){lQI.wxVkey=1
var o2I=_mz(z,'view',['bindtap',38,'class',1,'data-event-opts',2],[],e,s,gg)
var c3I=_n('text')
_rz(z,c3I,'class',41,e,s,gg)
_(o2I,c3I)
_(lQI,o2I)
}
lQI.wxXCkey=1
_(cOI,oPI)
_(bGI,cOI)
var o4I=_n('view')
_rz(z,o4I,'class',42,e,s,gg)
var l5I=_n('view')
_rz(z,l5I,'class',43,e,s,gg)
var a6I=_oz(z,44,e,s,gg)
_(l5I,a6I)
_(o4I,l5I)
var t7I=_mz(z,'switch',['bindchange',45,'checked',1,'class',2,'data-event-opts',3],[],e,s,gg)
_(o4I,t7I)
_(bGI,o4I)
var e8I=_n('view')
_rz(z,e8I,'class',49,e,s,gg)
var b9I=_n('view')
_rz(z,b9I,'class',50,e,s,gg)
var o0I=_oz(z,51,e,s,gg)
_(b9I,o0I)
_(e8I,b9I)
var xAJ=_mz(z,'input',['name',52,'placeholder',1],[],e,s,gg)
_(e8I,xAJ)
var oBJ=_n('button')
_rz(z,oBJ,'class',54,e,s,gg)
var fCJ=_oz(z,55,e,s,gg)
_(oBJ,fCJ)
_(e8I,oBJ)
_(bGI,e8I)
_(cAI,bGI)
_(r,cAI)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var hEJ=_n('view')
_rz(z,hEJ,'class',0,e,s,gg)
var oFJ=_mz(z,'cu-custom',['bgColor',1,'bind:__l',1,'isBack',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var cGJ=_n('view')
_rz(z,cGJ,'slot',6,e,s,gg)
var oHJ=_oz(z,7,e,s,gg)
_(cGJ,oHJ)
_(oFJ,cGJ)
var lIJ=_n('view')
_rz(z,lIJ,'slot',8,e,s,gg)
var aJJ=_oz(z,9,e,s,gg)
_(lIJ,aJJ)
_(oFJ,lIJ)
_(hEJ,oFJ)
var tKJ=_n('view')
_rz(z,tKJ,'class',10,e,s,gg)
_(hEJ,tKJ)
var eLJ=_mz(z,'you-scroll',['bind:__l',11,'bind:onLoadMore',1,'bind:onPullDown',2,'bind:onScroll',3,'class',4,'data-event-opts',5,'data-ref',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var bMJ=_n('view')
_(eLJ,bMJ)
_(hEJ,eLJ)
var oNJ=_n('view')
_rz(z,oNJ,'class',20,e,s,gg)
var xOJ=_mz(z,'button',['disabled',-1,'type',-1,'class',21],[],e,s,gg)
var oPJ=_oz(z,22,e,s,gg)
_(xOJ,oPJ)
_(oNJ,xOJ)
var fQJ=_mz(z,'button',['disabled',-1,'class',23],[],e,s,gg)
var cRJ=_oz(z,24,e,s,gg)
_(fQJ,cRJ)
_(oNJ,fQJ)
_(hEJ,oNJ)
_(r,hEJ)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
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
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["body { background-color: #f1f1f1; font-size: ",[0,28],"; color: #333333; font-family: Helvetica Neue, Helvetica, sans-serif; }\nwx-view, wx-scroll-view, wx-swiper, wx-button, wx-input, wx-textarea, wx-label, wx-navigator, wx-image { -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"round { border-radius: ",[0,5000],"; }\n.",[1],"radius { border-radius: ",[0,6],"; }\nwx-image { max-width: 100%; display: inline-block; position: relative; z-index: 0; }\nwx-image.",[1],"loading::before { content: \x22\x22; background-color: #f5f5f5; display: block; position: absolute; width: 100%; height: 100%; z-index: -2; }\nwx-image.",[1],"loading::after { content: \x22\\E7F1\x22; font-family: \x22cuIcon\x22; position: absolute; top: 0; left: 0; width: ",[0,32],"; height: ",[0,32],"; line-height: ",[0,32],"; right: 0; bottom: 0; z-index: -1; font-size: ",[0,32],"; margin: auto; color: #ccc; -webkit-animation: cuIcon-spin 2s infinite linear; animation: cuIcon-spin 2s infinite linear; display: block; }\n.",[1],"response { width: 100%; }\nwx-switch, wx-checkbox, wx-radio { position: relative; }\nwx-switch::after, wx-switch::before { font-family: \x22cuIcon\x22; content: \x22\\E645\x22; position: absolute; color: #ffffff !important; top: 0%; left: ",[0,0],"; font-size: ",[0,26],"; line-height: 26px; width: 50%; text-align: center; pointer-events: none; -webkit-transform: scale(0, 0); -ms-transform: scale(0, 0); transform: scale(0, 0); -webkit-transition: all 0.3s ease-in-out 0s; -o-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s; z-index: 9; bottom: 0; height: 26px; margin: auto; }\nwx-switch::before { content: \x22\\E646\x22; right: 0; -webkit-transform: scale(1, 1); -ms-transform: scale(1, 1); transform: scale(1, 1); left: auto; }\nwx-switch[checked]::after, wx-switch.",[1],"checked::after { -webkit-transform: scale(1, 1); -ms-transform: scale(1, 1); transform: scale(1, 1); }\nwx-switch[checked]::before, wx-switch.",[1],"checked::before { -webkit-transform: scale(0, 0); -ms-transform: scale(0, 0); transform: scale(0, 0); }\nwx-radio::before, wx-checkbox::before { font-family: \x22cuIcon\x22; content: \x22\\E645\x22; position: absolute; color: #ffffff !important; top: 50%; margin-top: -8px; right: 5px; font-size: ",[0,32],"; line-height: 16px; pointer-events: none; -webkit-transform: scale(1, 1); -ms-transform: scale(1, 1); transform: scale(1, 1); -webkit-transition: all 0.3s ease-in-out 0s; -o-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s; z-index: 9; }\nwx-radio .",[1],"wx-radio-input, wx-checkbox .",[1],"wx-checkbox-input, wx-radio .",[1],"uni-radio-input, wx-checkbox .",[1],"uni-checkbox-input { margin: 0; width: 24px; height: 24px; }\nwx-checkbox.",[1],"round .",[1],"wx-checkbox-input, wx-checkbox.",[1],"round .",[1],"uni-checkbox-input { border-radius: ",[0,100],"; }\nwx-switch[checked]::before { -webkit-transform: scale(0, 0); -ms-transform: scale(0, 0); transform: scale(0, 0); }\nwx-switch .",[1],"wx-switch-input, wx-switch .",[1],"uni-switch-input { border: none; padding: 0 24px; width: 48px; height: 26px; margin: 0; border-radius: ",[0,100],"; }\nwx-switch .",[1],"wx-switch-input:not([class*\x3d\x22bg-\x22]), wx-switch .",[1],"uni-switch-input:not([class*\x3d\x22bg-\x22]) { background: #8799a3 !important; }\nwx-switch .",[1],"wx-switch-input::after, wx-switch .",[1],"uni-switch-input::after { margin: auto; width: 26px; height: 26px; border-radius: ",[0,100],"; left: ",[0,0],"; top: ",[0,0],"; bottom: ",[0,0],"; position: absolute; -webkit-transform: scale(0.9, 0.9); -ms-transform: scale(0.9, 0.9); transform: scale(0.9, 0.9); -webkit-transition: all 0.1s ease-in-out 0s; -o-transition: all 0.1s ease-in-out 0s; transition: all 0.1s ease-in-out 0s; }\nwx-switch .",[1],"wx-switch-input.",[1],"wx-switch-input-checked::after, wx-switch .",[1],"uni-switch-input.",[1],"uni-switch-input-checked::after { margin: auto; left: 22px; -webkit-box-shadow: none; box-shadow: none; -webkit-transform: scale(0.9, 0.9); -ms-transform: scale(0.9, 0.9); transform: scale(0.9, 0.9); }\nwx-radio-group { display: inline-block; }\nwx-switch.",[1],"radius .",[1],"wx-switch-input::after, wx-switch.",[1],"radius .",[1],"wx-switch-input, wx-switch.",[1],"radius .",[1],"wx-switch-input::before, wx-switch.",[1],"radius .",[1],"uni-switch-input::after, wx-switch.",[1],"radius .",[1],"uni-switch-input, wx-switch.",[1],"radius .",[1],"uni-switch-input::before { border-radius: ",[0,10],"; }\nwx-switch .",[1],"wx-switch-input::before, wx-radio.",[1],"radio::before, wx-checkbox .",[1],"wx-checkbox-input::before, wx-radio .",[1],"wx-radio-input::before, wx-switch .",[1],"uni-switch-input::before, wx-radio.",[1],"radio::before, wx-checkbox .",[1],"uni-checkbox-input::before, wx-radio .",[1],"uni-radio-input::before { display: none; }\nwx-radio.",[1],"radio[checked]::after, wx-radio.",[1],"radio .",[1],"uni-radio-input-checked::after { content: \x22\x22; background-color: transparent; display: block; position: absolute; width: 8px; height: 8px; z-index: 999; top: ",[0,0],"; left: ",[0,0],"; right: 0; bottom: 0; margin: auto; border-radius: ",[0,200],"; border: 7px solid #ffffff !important; }\n.",[1],"switch-sex::after { content: \x22\\E71C\x22; }\n.",[1],"switch-sex::before { content: \x22\\E71A\x22; }\n.",[1],"switch-sex .",[1],"wx-switch-input, .",[1],"switch-sex .",[1],"uni-switch-input { background: #e54d42 !important; border-color: #e54d42 !important; }\n.",[1],"switch-sex[checked] .",[1],"wx-switch-input, .",[1],"switch-sex.",[1],"checked .",[1],"uni-switch-input { background: #0081ff !important; border-color: #0081ff !important; }\nwx-switch.",[1],"red[checked] .",[1],"wx-switch-input.",[1],"wx-switch-input-checked, wx-checkbox.",[1],"red[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"red[checked] .",[1],"wx-radio-input, wx-switch.",[1],"red.",[1],"checked .",[1],"uni-switch-input.",[1],"uni-switch-input-checked, wx-checkbox.",[1],"red.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"red.",[1],"checked .",[1],"uni-radio-input { background-color: #e54d42 !important; border-color: #e54d42 !important; color: #ffffff !important; }\nwx-switch.",[1],"orange[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"orange[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"orange[checked] .",[1],"wx-radio-input, wx-switch.",[1],"orange.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"orange.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"orange.",[1],"checked .",[1],"uni-radio-input { background-color: #f37b1d !important; border-color: #f37b1d !important; color: #ffffff !important; }\nwx-switch.",[1],"yellow[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"yellow[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"yellow[checked] .",[1],"wx-radio-input, wx-switch.",[1],"yellow.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"yellow.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"yellow.",[1],"checked .",[1],"uni-radio-input { background-color: #fbbd08 !important; border-color: #fbbd08 !important; color: #333333 !important; }\nwx-switch.",[1],"olive[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"olive[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"olive[checked] .",[1],"wx-radio-input, wx-switch.",[1],"olive.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"olive.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"olive.",[1],"checked .",[1],"uni-radio-input { background-color: #8dc63f !important; border-color: #8dc63f !important; color: #ffffff !important; }\nwx-switch.",[1],"green[checked] .",[1],"wx-switch-input, wx-switch[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"green[checked] .",[1],"wx-checkbox-input, wx-checkbox[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"green[checked] .",[1],"wx-radio-input, wx-radio[checked] .",[1],"wx-radio-input, wx-switch.",[1],"green.",[1],"checked .",[1],"uni-switch-input, wx-switch.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"green.",[1],"checked .",[1],"uni-checkbox-input, wx-checkbox.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"green.",[1],"checked .",[1],"uni-radio-input, wx-radio.",[1],"checked .",[1],"uni-radio-input { background-color: #39b54a !important; border-color: #39b54a !important; color: #ffffff !important; border-color: #39B54A !important; }\nwx-switch.",[1],"cyan[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"cyan[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"cyan[checked] .",[1],"wx-radio-input, wx-switch.",[1],"cyan.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"cyan.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"cyan.",[1],"checked .",[1],"uni-radio-input { background-color: #1cbbb4 !important; border-color: #1cbbb4 !important; color: #ffffff !important; }\nwx-switch.",[1],"blue[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"blue[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"blue[checked] .",[1],"wx-radio-input, wx-switch.",[1],"blue.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"blue.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"blue.",[1],"checked .",[1],"uni-radio-input { background-color: #0081ff !important; border-color: #0081ff !important; color: #ffffff !important; }\nwx-switch.",[1],"purple[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"purple[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"purple[checked] .",[1],"wx-radio-input, wx-switch.",[1],"purple.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"purple.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"purple.",[1],"checked .",[1],"uni-radio-input { background-color: #6739b6 !important; border-color: #6739b6 !important; color: #ffffff !important; }\nwx-switch.",[1],"mauve[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"mauve[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"mauve[checked] .",[1],"wx-radio-input, wx-switch.",[1],"mauve.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"mauve.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"mauve.",[1],"checked .",[1],"uni-radio-input { background-color: #9c26b0 !important; border-color: #9c26b0 !important; color: #ffffff !important; }\nwx-switch.",[1],"pink[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"pink[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"pink[checked] .",[1],"wx-radio-input, wx-switch.",[1],"pink.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"pink.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"pink.",[1],"checked .",[1],"uni-radio-input { background-color: #e03997 !important; border-color: #e03997 !important; color: #ffffff !important; }\nwx-switch.",[1],"brown[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"brown[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"brown[checked] .",[1],"wx-radio-input, wx-switch.",[1],"brown.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"brown.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"brown.",[1],"checked .",[1],"uni-radio-input { background-color: #a5673f !important; border-color: #a5673f !important; color: #ffffff !important; }\nwx-switch.",[1],"grey[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"grey[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"grey[checked] .",[1],"wx-radio-input, wx-switch.",[1],"grey.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"grey.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"grey.",[1],"checked .",[1],"uni-radio-input { background-color: #8799a3 !important; border-color: #8799a3 !important; color: #ffffff !important; }\nwx-switch.",[1],"gray[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"gray[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"gray[checked] .",[1],"wx-radio-input, wx-switch.",[1],"gray.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"gray.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"gray.",[1],"checked .",[1],"uni-radio-input { background-color: #f0f0f0 !important; border-color: #f0f0f0 !important; color: #333333 !important; }\nwx-switch.",[1],"black[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"black[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"black[checked] .",[1],"wx-radio-input, wx-switch.",[1],"black.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"black.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"black.",[1],"checked .",[1],"uni-radio-input { background-color: #333333 !important; border-color: #333333 !important; color: #ffffff !important; }\nwx-switch.",[1],"white[checked] .",[1],"wx-switch-input, wx-checkbox.",[1],"white[checked] .",[1],"wx-checkbox-input, wx-radio.",[1],"white[checked] .",[1],"wx-radio-input, wx-switch.",[1],"white.",[1],"checked .",[1],"uni-switch-input, wx-checkbox.",[1],"white.",[1],"checked .",[1],"uni-checkbox-input, wx-radio.",[1],"white.",[1],"checked .",[1],"uni-radio-input { background-color: #ffffff !important; border-color: #ffffff !important; color: #333333 !important; }\n.",[1],"solid, .",[1],"solid-top, .",[1],"solid-right, .",[1],"solid-bottom, .",[1],"solid-left, .",[1],"solids, .",[1],"solids-top, .",[1],"solids-right, .",[1],"solids-bottom, .",[1],"solids-left, .",[1],"dashed, .",[1],"dashed-top, .",[1],"dashed-right, .",[1],"dashed-bottom, .",[1],"dashed-left { position: relative; }\n.",[1],"solid::after, .",[1],"solid-top::after, .",[1],"solid-right::after, .",[1],"solid-bottom::after, .",[1],"solid-left::after, .",[1],"solids::after, .",[1],"solids-top::after, .",[1],"solids-right::after, .",[1],"solids-bottom::after, .",[1],"solids-left::after, .",[1],"dashed::after, .",[1],"dashed-top::after, .",[1],"dashed-right::after, .",[1],"dashed-bottom::after, .",[1],"dashed-left::after { content: \x22 \x22; width: 200%; height: 200%; position: absolute; top: 0; left: 0; border-radius: inherit; -webkit-transform: scale(0.5); -ms-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; pointer-events: none; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"solid::after { border: ",[0,1]," solid rgba(0, 0, 0, 0.1); }\n.",[1],"solid-top::after { border-top: ",[0,1]," solid rgba(0, 0, 0, 0.1); }\n.",[1],"solid-right::after { border-right: ",[0,1]," solid rgba(0, 0, 0, 0.1); }\n.",[1],"solid-bottom::after { border-bottom: ",[0,1]," solid rgba(0, 0, 0, 0.1); }\n.",[1],"solid-left::after { border-left: ",[0,1]," solid rgba(0, 0, 0, 0.1); }\n.",[1],"solids::after { border: ",[0,8]," solid #eee; }\n.",[1],"solids-top::after { border-top: ",[0,8]," solid #eee; }\n.",[1],"solids-right::after { border-right: ",[0,8]," solid #eee; }\n.",[1],"solids-bottom::after { border-bottom: ",[0,8]," solid #eee; }\n.",[1],"solids-left::after { border-left: ",[0,8]," solid #eee; }\n.",[1],"dashed::after { border: ",[0,1]," dashed #ddd; }\n.",[1],"dashed-top::after { border-top: ",[0,1]," dashed #ddd; }\n.",[1],"dashed-right::after { border-right: ",[0,1]," dashed #ddd; }\n.",[1],"dashed-bottom::after { border-bottom: ",[0,1]," dashed #ddd; }\n.",[1],"dashed-left::after { border-left: ",[0,1]," dashed #ddd; }\n.",[1],"shadow[class*\x3d\x27white\x27] { --ShadowSize: 0 ",[0,1]," ",[0,6],"; }\n.",[1],"shadow-lg { --ShadowSize: ",[0,0]," ",[0,40]," ",[0,100]," ",[0,0],"; }\n.",[1],"shadow-warp { position: relative; -webkit-box-shadow: 0 0 ",[0,10]," rgba(0, 0, 0, 0.1); box-shadow: 0 0 ",[0,10]," rgba(0, 0, 0, 0.1); }\n.",[1],"shadow-warp:before, .",[1],"shadow-warp:after { position: absolute; content: \x22\x22; top: ",[0,20],"; bottom: ",[0,30],"; left: ",[0,20],"; width: 50%; -webkit-box-shadow: 0 ",[0,30]," ",[0,20]," rgba(0, 0, 0, 0.2); box-shadow: 0 ",[0,30]," ",[0,20]," rgba(0, 0, 0, 0.2); -webkit-transform: rotate(-3deg); -ms-transform: rotate(-3deg); transform: rotate(-3deg); z-index: -1; }\n.",[1],"shadow-warp:after { right: ",[0,20],"; left: auto; -webkit-transform: rotate(3deg); -ms-transform: rotate(3deg); transform: rotate(3deg); }\n.",[1],"shadow-blur { position: relative; }\n.",[1],"shadow-blur::before { content: \x22\x22; display: block; background: inherit; -webkit-filter: blur(",[0,10],"); filter: blur(",[0,10],"); position: absolute; width: 100%; height: 100%; top: ",[0,10],"; left: ",[0,10],"; z-index: -1; opacity: 0.4; -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; border-radius: inherit; -webkit-transform: scale(1, 1); -ms-transform: scale(1, 1); transform: scale(1, 1); }\n.",[1],"cu-btn { position: relative; border: ",[0,0],"; display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; font-size: ",[0,28],"; height: ",[0,64],"; line-height: 1; text-align: center; text-decoration: none; overflow: visible; margin-left: initial; -webkit-transform: translate(",[0,0],", ",[0,0],"); -ms-transform: translate(",[0,0],", ",[0,0],"); transform: translate(",[0,0],", ",[0,0],"); margin-right: initial; }\n.",[1],"cu-btn::after { display: none; }\n.",[1],"cu-btn:not([class*\x3d\x22bg-\x22]) { background-color: #f0f0f0; }\n.",[1],"cu-btn[class*\x3d\x22line\x22] { background-color: transparent; }\n.",[1],"cu-btn[class*\x3d\x22line\x22]::after { content: \x22 \x22; display: block; width: 200%; height: 200%; position: absolute; top: 0; left: 0; border: ",[0,1]," solid currentColor; -webkit-transform: scale(0.5); -ms-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; -webkit-box-sizing: border-box; box-sizing: border-box; border-radius: ",[0,12],"; z-index: 1; pointer-events: none; }\n.",[1],"cu-btn.",[1],"round[class*\x3d\x22line\x22]::after { border-radius: ",[0,1000],"; }\n.",[1],"cu-btn[class*\x3d\x22lines\x22]::after { border: ",[0,6]," solid currentColor; }\n.",[1],"cu-btn[class*\x3d\x22bg-\x22]::after { display: none; }\n.",[1],"cu-btn.",[1],"sm { padding: 0 ",[0,20],"; font-size: ",[0,20],"; height: ",[0,48],"; }\n.",[1],"cu-btn.",[1],"lg { padding: 0 ",[0,40],"; font-size: ",[0,32],"; height: ",[0,80],"; }\n.",[1],"cu-btn.",[1],"cuIcon.",[1],"sm { width: ",[0,48],"; height: ",[0,48],"; }\n.",[1],"cu-btn.",[1],"cuIcon { width: ",[0,64],"; height: ",[0,64],"; border-radius: ",[0,500],"; padding: 0; }\nwx-button.",[1],"cuIcon.",[1],"lg { width: ",[0,80],"; height: ",[0,80],"; }\n.",[1],"cu-btn.",[1],"shadow-blur::before { top: ",[0,4],"; left: ",[0,4],"; -webkit-filter: blur(",[0,6],"); filter: blur(",[0,6],"); opacity: 0.6; }\n.",[1],"cu-btn.",[1],"button-hover { -webkit-transform: translate(",[0,1],", ",[0,1],"); -ms-transform: translate(",[0,1],", ",[0,1],"); transform: translate(",[0,1],", ",[0,1],"); }\n.",[1],"block { display: block; }\n.",[1],"cu-btn.",[1],"block { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"cu-btn[disabled] { opacity: 0.6; color: #ffffff; }\n.",[1],"cu-tag { font-size: ",[0,24],"; vertical-align: middle; position: relative; display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,0]," ",[0,16],"; height: ",[0,48],"; font-family: Helvetica Neue, Helvetica, sans-serif; white-space: nowrap; }\n.",[1],"cu-tag:not([class*\x3d\x22bg\x22]):not([class*\x3d\x22line\x22]) { background-color: #f1f1f1; }\n.",[1],"cu-tag[class*\x3d\x22line-\x22]::after { content: \x22 \x22; width: 200%; height: 200%; position: absolute; top: 0; left: 0; border: ",[0,1]," solid currentColor; -webkit-transform: scale(0.5); -ms-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; -webkit-box-sizing: border-box; box-sizing: border-box; border-radius: inherit; z-index: 1; pointer-events: none; }\n.",[1],"cu-tag.",[1],"radius[class*\x3d\x22line\x22]::after { border-radius: ",[0,12],"; }\n.",[1],"cu-tag.",[1],"round[class*\x3d\x22line\x22]::after { border-radius: ",[0,1000],"; }\n.",[1],"cu-tag[class*\x3d\x22line-\x22]::after { border-radius: 0; }\n.",[1],"cu-tag+.",[1],"cu-tag { margin-left: ",[0,10],"; }\n.",[1],"cu-tag.",[1],"sm { font-size: ",[0,20],"; padding: ",[0,0]," ",[0,12],"; height: ",[0,32],"; }\n.",[1],"cu-capsule { display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; vertical-align: middle; }\n.",[1],"cu-capsule+.",[1],"cu-capsule { margin-left: ",[0,10],"; }\n.",[1],"cu-capsule .",[1],"cu-tag { margin: 0; }\n.",[1],"cu-capsule .",[1],"cu-tag[class*\x3d\x22line-\x22]:last-child::after { border-left: ",[0,0]," solid transparent; }\n.",[1],"cu-capsule .",[1],"cu-tag[class*\x3d\x22line-\x22]:first-child::after { border-right: ",[0,0]," solid transparent; }\n.",[1],"cu-capsule.",[1],"radius .",[1],"cu-tag:first-child { border-top-left-radius: ",[0,6],"; border-bottom-left-radius: ",[0,6],"; }\n.",[1],"cu-capsule.",[1],"radius .",[1],"cu-tag:last-child::after, .",[1],"cu-capsule.",[1],"radius .",[1],"cu-tag[class*\x3d\x22line-\x22] { border-top-right-radius: ",[0,12],"; border-bottom-right-radius: ",[0,12],"; }\n.",[1],"cu-capsule.",[1],"round .",[1],"cu-tag:first-child { border-top-left-radius: ",[0,200],"; border-bottom-left-radius: ",[0,200],"; text-indent: ",[0,4],"; }\n.",[1],"cu-capsule.",[1],"round .",[1],"cu-tag:last-child::after, .",[1],"cu-capsule.",[1],"round .",[1],"cu-tag:last-child { border-top-right-radius: ",[0,200],"; border-bottom-right-radius: ",[0,200],"; text-indent: ",[0,-4],"; }\n.",[1],"cu-tag.",[1],"badge { border-radius: ",[0,200],"; position: absolute; top: ",[0,-10],"; right: ",[0,-10],"; font-size: ",[0,20],"; padding: ",[0,0]," ",[0,10],"; height: ",[0,28],"; color: #ffffff; }\n.",[1],"cu-tag.",[1],"badge:not([class*\x3d\x22bg-\x22]) { background-color: #dd514c; }\n.",[1],"cu-tag:empty:not([class*\x3d\x22cuIcon-\x22]) { padding: ",[0,0],"; width: ",[0,16],"; height: ",[0,16],"; top: ",[0,-4],"; right: ",[0,-4],"; }\n.",[1],"cu-tag[class*\x3d\x22cuIcon-\x22] { width: ",[0,32],"; height: ",[0,32],"; top: ",[0,-4],"; right: ",[0,-4],"; }\n.",[1],"cu-avatar { font-variant: small-caps; margin: 0; padding: 0; display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; text-align: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background-color: #ccc; color: #ffffff; white-space: nowrap; position: relative; width: ",[0,64],"; height: ",[0,64],"; background-size: cover; background-position: center; vertical-align: middle; font-size: 1.5em; }\n.",[1],"cu-avatar.",[1],"sm { width: ",[0,48],"; height: ",[0,48],"; font-size: 1em; }\n.",[1],"cu-avatar.",[1],"lg { width: ",[0,96],"; height: ",[0,96],"; font-size: 2em; }\n.",[1],"cu-avatar.",[1],"xl { width: ",[0,128],"; height: ",[0,128],"; font-size: 2.5em; }\n.",[1],"cu-avatar .",[1],"avatar-text { font-size: 0.4em; }\n.",[1],"cu-avatar-group { direction: rtl; unicode-bidi: bidi-override; padding: 0 ",[0,10]," 0 ",[0,40],"; display: inline-block; }\n.",[1],"cu-avatar-group .",[1],"cu-avatar { margin-left: ",[0,-30],"; border: ",[0,4]," solid #f1f1f1; vertical-align: middle; }\n.",[1],"cu-avatar-group .",[1],"cu-avatar.",[1],"sm { margin-left: ",[0,-20],"; border: ",[0,1]," solid #f1f1f1; }\n.",[1],"cu-progress { overflow: hidden; height: ",[0,28],"; background-color: #ebeef5; display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; }\n.",[1],"cu-progress+wx-view, .",[1],"cu-progress+wx-text { line-height: 1; }\n.",[1],"cu-progress.",[1],"xs { height: ",[0,10],"; }\n.",[1],"cu-progress.",[1],"sm { height: ",[0,20],"; }\n.",[1],"cu-progress wx-view { width: 0; height: 100%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; justify-items: flex-end; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; font-size: ",[0,20],"; color: #ffffff; -webkit-transition: width 0.6s ease; -o-transition: width 0.6s ease; transition: width 0.6s ease; }\n.",[1],"cu-progress wx-text { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: ",[0,20],"; color: #333333; text-indent: ",[0,10],"; }\n.",[1],"cu-progress.",[1],"text-progress { padding-right: ",[0,60],"; }\n.",[1],"cu-progress.",[1],"striped wx-view { background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-size: ",[0,72]," ",[0,72],"; }\n.",[1],"cu-progress.",[1],"active wx-view { -webkit-animation: progress-stripes 2s linear infinite; animation: progress-stripes 2s linear infinite; }\n@-webkit-keyframes progress-stripes { from { background-position: ",[0,72]," 0; }\nto { background-position: 0 0; }\n}@keyframes progress-stripes { from { background-position: ",[0,72]," 0; }\nto { background-position: 0 0; }\n}.",[1],"cu-load { display: block; line-height: 3em; text-align: center; }\n.",[1],"cu-load::before { font-family: \x22cuIcon\x22; display: inline-block; margin-right: ",[0,6],"; }\n.",[1],"cu-load.",[1],"loading::before { content: \x22\\E67A\x22; -webkit-animation: cuIcon-spin 2s infinite linear; animation: cuIcon-spin 2s infinite linear; }\n.",[1],"cu-load.",[1],"loading::after { content: \x22\\52A0\\8F7D\\4E2D...\x22; }\n.",[1],"cu-load.",[1],"over::before { content: \x22\\E64A\x22; }\n.",[1],"cu-load.",[1],"over::after { content: \x22\\6CA1\\6709\\66F4\\591A\\4E86\x22; }\n.",[1],"cu-load.",[1],"erro::before { content: \x22\\E658\x22; }\n.",[1],"cu-load.",[1],"erro::after { content: \x22\\52A0\\8F7D\\5931\\8D25\x22; }\n.",[1],"cu-load.",[1],"load-cuIcon::before { font-size: ",[0,32],"; }\n.",[1],"cu-load.",[1],"load-cuIcon::after { display: none; }\n.",[1],"cu-load.",[1],"load-cuIcon.",[1],"over { display: none; }\n.",[1],"cu-load.",[1],"load-modal { position: fixed; top: 0; right: 0; bottom: ",[0,140],"; left: 0; margin: auto; width: ",[0,260],"; height: ",[0,260],"; background-color: #ffffff; border-radius: ",[0,10],"; -webkit-box-shadow: 0 0 ",[0,0]," ",[0,2000]," rgba(0, 0, 0, 0.5); box-shadow: 0 0 ",[0,0]," ",[0,2000]," rgba(0, 0, 0, 0.5); display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,28],"; z-index: 9999; line-height: 2.4em; }\n.",[1],"cu-load.",[1],"load-modal [class*\x3d\x22cuIcon-\x22] { font-size: ",[0,60],"; }\n.",[1],"cu-load.",[1],"load-modal wx-image { width: ",[0,70],"; height: ",[0,70],"; }\n.",[1],"cu-load.",[1],"load-modal::after { content: \x22\x22; position: absolute; background-color: #ffffff; border-radius: 50%; width: ",[0,200],"; height: ",[0,200],"; font-size: 10px; border-top: ",[0,6]," solid rgba(0, 0, 0, 0.05); border-right: ",[0,6]," solid rgba(0, 0, 0, 0.05); border-bottom: ",[0,6]," solid rgba(0, 0, 0, 0.05); border-left: ",[0,6]," solid #f37b1d; -webkit-animation: cuIcon-spin 1s infinite linear; animation: cuIcon-spin 1s infinite linear; z-index: -1; }\n.",[1],"load-progress { pointer-events: none; top: 0; position: fixed; width: 100%; left: 0; z-index: 2000; }\n.",[1],"load-progress.",[1],"hide { display: none; }\n.",[1],"load-progress .",[1],"load-progress-bar { position: relative; width: 100%; height: ",[0,4],"; overflow: hidden; -webkit-transition: all 200ms ease 0s; -o-transition: all 200ms ease 0s; transition: all 200ms ease 0s; }\n.",[1],"load-progress .",[1],"load-progress-spinner { position: absolute; top: ",[0,10],"; right: ",[0,10],"; z-index: 2000; display: block; }\n.",[1],"load-progress .",[1],"load-progress-spinner::after { content: \x22\x22; display: block; width: ",[0,24],"; height: ",[0,24],"; -webkit-box-sizing: border-box; box-sizing: border-box; border: solid ",[0,4]," transparent; border-top-color: inherit; border-left-color: inherit; border-radius: 50%; -webkit-animation: load-progress-spinner 0.4s linear infinite; animation: load-progress-spinner 0.4s linear infinite; }\n@-webkit-keyframes load-progress-spinner { 0% { -webkit-transform: rotate(0); transform: rotate(0); }\n100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}@keyframes load-progress-spinner { 0% { -webkit-transform: rotate(0); transform: rotate(0); }\n100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}.",[1],"grayscale { -webkit-filter: grayscale(1); filter: grayscale(1); }\n.",[1],"cu-list+.",[1],"cu-list { margin-top: ",[0,30]," }\n.",[1],"cu-list\x3e.",[1],"cu-item { -webkit-transition: all .6s ease-in-out 0s; -o-transition: all .6s ease-in-out 0s; transition: all .6s ease-in-out 0s; -webkit-transform: translateX(",[0,0],"); -ms-transform: translateX(",[0,0],"); transform: translateX(",[0,0],") }\n.",[1],"cu-list\x3e.",[1],"cu-item.",[1],"move-cur { -webkit-transform: translateX(",[0,-260],"); -ms-transform: translateX(",[0,-260],"); transform: translateX(",[0,-260],") }\n.",[1],"cu-list\x3e.",[1],"cu-item .",[1],"move { position: absolute; right: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: ",[0,260],"; height: 100%; -webkit-transform: translateX(100%); -ms-transform: translateX(100%); transform: translateX(100%) }\n.",[1],"cu-list\x3e.",[1],"cu-item .",[1],"move wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"cu-list.",[1],"menu-avatar { overflow: hidden; }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding-right: ",[0,10],"; height: ",[0,140],"; background-color: #ffffff; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item\x3e.",[1],"cu-avatar { position: absolute; left: ",[0,30]," }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item .",[1],"flex .",[1],"text-cut { max-width: ",[0,510]," }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item .",[1],"content { position: absolute; left: ",[0,146],"; width: calc(100% - ",[0,96]," - ",[0,60]," - ",[0,120]," - ",[0,20],"); line-height: 1.6em; }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item .",[1],"content.",[1],"flex-sub { width: calc(100% - ",[0,96]," - ",[0,60]," - ",[0,20],"); }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item .",[1],"content\x3ewx-view:first-child { font-size: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item .",[1],"content .",[1],"cu-tag.",[1],"sm { display: inline-block; margin-left: ",[0,10],"; height: ",[0,28],"; font-size: ",[0,16],"; line-height: ",[0,32]," }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item .",[1],"action { width: ",[0,100],"; text-align: center }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item .",[1],"action wx-view+wx-view { margin-top: ",[0,10]," }\n.",[1],"cu-list.",[1],"menu-avatar.",[1],"comment\x3e.",[1],"cu-item .",[1],"content { position: relative; left: 0; width: auto; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"cu-list.",[1],"menu-avatar.",[1],"comment\x3e.",[1],"cu-item { padding: ",[0,30]," ",[0,30]," ",[0,30]," ",[0,120],"; height: auto }\n.",[1],"cu-list.",[1],"menu-avatar.",[1],"comment .",[1],"cu-avatar { -webkit-align-self: flex-start; -ms-flex-item-align: start; align-self: flex-start }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: 0 ",[0,30],"; min-height: ",[0,100],"; background-color: #ffffff; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item:last-child:after { border: none }\n.",[1],"cu-list.",[1],"menu-avatar\x3e.",[1],"cu-item:after, .",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item:after { position: absolute; top: 0; left: 0; -webkit-box-sizing: border-box; box-sizing: border-box; width: 200%; height: 200%; border-bottom: ",[0,1]," solid #ddd; border-radius: inherit; content: \x22 \x22; -webkit-transform: scale(.5); -ms-transform: scale(.5); transform: scale(.5); -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; pointer-events: none }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item.",[1],"grayscale { background-color: #f5f5f5 }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item.",[1],"cur { background-color: #fcf7e9 }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item.",[1],"arrow { padding-right: ",[0,90]," }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item.",[1],"arrow:before { position: absolute; top: 0; right: ",[0,30],"; bottom: 0; display: block; margin: auto; width: ",[0,30],"; height: ",[0,30],"; color: #8799a3; content: \x22\\E6A3\x22; text-align: center; font-size: ",[0,34],"; font-family: cuIcon; line-height: ",[0,30]," }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item wx-button.",[1],"content { padding: 0; background-color: transparent; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item wx-button.",[1],"content:after { display: none }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item .",[1],"cu-avatar-group .",[1],"cu-avatar { border-color: #ffffff }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item .",[1],"content\x3ewx-view:first-child { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item .",[1],"content\x3ewx-text[class*\x3dcuIcon] { display: inline-block; margin-right: ",[0,10],"; width: 1.6em; text-align: center }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item .",[1],"content\x3ewx-image { display: inline-block; margin-right: ",[0,10],"; width: 1.6em; height: 1.6em; vertical-align: middle }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item .",[1],"content { font-size: ",[0,30],"; line-height: 1.6em; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1 }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item .",[1],"content .",[1],"cu-tag.",[1],"sm { display: inline-block; margin-left: ",[0,10],"; height: ",[0,28],"; font-size: ",[0,16],"; line-height: ",[0,32]," }\n.",[1],"cu-list.",[1],"menu\x3e.",[1],"cu-item .",[1],"action .",[1],"cu-tag:empty { right: ",[0,10]," }\n.",[1],"cu-list.",[1],"menu { display: block; overflow: hidden }\n.",[1],"cu-list.",[1],"menu.",[1],"sm-border\x3e.",[1],"cu-item:after { left: ",[0,30],"; width: calc(200% - ",[0,120],") }\n.",[1],"cu-list.",[1],"grid\x3e.",[1],"cu-item { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,20]," 0 ",[0,30],"; -webkit-transition-duration: 0s; -o-transition-duration: 0s; transition-duration: 0s; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column }\n.",[1],"cu-list.",[1],"grid\x3e.",[1],"cu-item:after { position: absolute; top: 0; left: 0; -webkit-box-sizing: border-box; box-sizing: border-box; width: 200%; height: 200%; border-right: 1px solid rgba(0, 0, 0, .1); border-bottom: 1px solid rgba(0, 0, 0, .1); border-radius: inherit; content: \x22 \x22; -webkit-transform: scale(.5); -ms-transform: scale(.5); transform: scale(.5); -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; pointer-events: none }\n.",[1],"cu-list.",[1],"grid\x3e.",[1],"cu-item wx-text { display: block; margin-top: ",[0,10],"; color: #888; font-size: ",[0,26],"; line-height: ",[0,40]," }\n.",[1],"cu-list.",[1],"grid\x3e.",[1],"cu-item [class*\x3dcuIcon] { position: relative; display: block; margin-top: ",[0,20],"; width: 100%; font-size: ",[0,48]," }\n.",[1],"cu-list.",[1],"grid\x3e.",[1],"cu-item .",[1],"cu-tag { right: auto; left: 50%; margin-left: ",[0,20]," }\n.",[1],"cu-list.",[1],"grid { background-color: #ffffff; text-align: center }\n.",[1],"cu-list.",[1],"grid.",[1],"no-border\x3e.",[1],"cu-item { padding-top: ",[0,10],"; padding-bottom: ",[0,20]," }\n.",[1],"cu-list.",[1],"grid.",[1],"no-border\x3e.",[1],"cu-item:after { border: none }\n.",[1],"cu-list.",[1],"grid.",[1],"no-border { padding: ",[0,20]," ",[0,10]," }\n.",[1],"cu-list.",[1],"grid.",[1],"col-3\x3e.",[1],"cu-item:nth-child(3n):after, .",[1],"cu-list.",[1],"grid.",[1],"col-4\x3e.",[1],"cu-item:nth-child(4n):after, .",[1],"cu-list.",[1],"grid.",[1],"col-5\x3e.",[1],"cu-item:nth-child(5n):after { border-right-width: 0 }\n.",[1],"cu-list.",[1],"card-menu { overflow: hidden; margin-right: ",[0,30],"; margin-left: ",[0,30],"; border-radius: ",[0,20]," }\n.",[1],"cu-bar { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; min-height: ",[0,100],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"cu-bar .",[1],"action { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 100%; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; max-width: 100%; }\n.",[1],"cu-bar .",[1],"action.",[1],"border-title { position: relative; top: ",[0,-10],"; }\n.",[1],"cu-bar .",[1],"action.",[1],"border-title wx-text[class*\x3d\x22bg-\x22]:last-child { position: absolute; bottom: -0.5rem; min-width: 2rem; height: ",[0,6],"; left: 0; }\n.",[1],"cu-bar .",[1],"action.",[1],"sub-title { position: relative; top: -0.2rem; }\n.",[1],"cu-bar .",[1],"action.",[1],"sub-title wx-text { position: relative; z-index: 1; }\n.",[1],"cu-bar .",[1],"action.",[1],"sub-title wx-text[class*\x3d\x22bg-\x22]:last-child { position: absolute; display: inline-block; bottom: -0.2rem; border-radius: ",[0,6],"; width: 100%; height: 0.6rem; left: 0.6rem; opacity: 0.3; z-index: 0; }\n.",[1],"cu-bar .",[1],"action.",[1],"sub-title wx-text[class*\x3d\x22text-\x22]:last-child { position: absolute; display: inline-block; bottom: -0.7rem; left: 0.5rem; opacity: 0.2; z-index: 0; text-align: right; font-weight: 900; font-size: ",[0,36],"; }\n.",[1],"cu-bar.",[1],"justify-center .",[1],"action.",[1],"border-title wx-text:last-child, .",[1],"cu-bar.",[1],"justify-center .",[1],"action.",[1],"sub-title wx-text:last-child { left: 0; right: 0; margin: auto; text-align: center; }\n.",[1],"cu-bar .",[1],"action:first-child { margin-left: ",[0,30],"; font-size: ",[0,30],"; }\n.",[1],"cu-bar .",[1],"action wx-text.",[1],"text-cut { text-align: left; width: 100%; }\n.",[1],"cu-bar .",[1],"cu-avatar:first-child { margin-left: ",[0,20],"; }\n.",[1],"cu-bar .",[1],"action:first-child\x3ewx-text[class*\x3d\x22cuIcon-\x22] { margin-left: -0.3em; margin-right: 0.3em; }\n.",[1],"cu-bar .",[1],"action:last-child { margin-right: ",[0,30],"; }\n.",[1],"cu-bar .",[1],"action\x3ewx-text[class*\x3d\x22cuIcon-\x22], .",[1],"cu-bar .",[1],"action\x3ewx-view[class*\x3d\x22cuIcon-\x22] { font-size: ",[0,36],"; }\n.",[1],"cu-bar .",[1],"action\x3ewx-text[class*\x3d\x22cuIcon-\x22]+wx-text[class*\x3d\x22cuIcon-\x22] { margin-left: 0.5em; }\n.",[1],"cu-bar .",[1],"content { position: absolute; text-align: center; width: calc(100% - ",[0,340],"); left: 0; right: 0; bottom: 0; top: 0; margin: auto; height: ",[0,60],"; font-size: ",[0,32],"; line-height: ",[0,60],"; cursor: none; pointer-events: none; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }\n.",[1],"cu-bar.",[1],"ios .",[1],"content { bottom: 7px; height: 30px; font-size: ",[0,32],"; line-height: 30px; }\n.",[1],"cu-bar.",[1],"btn-group { -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"cu-bar.",[1],"btn-group wx-button { padding: ",[0,20]," ",[0,32],"; }\n.",[1],"cu-bar.",[1],"btn-group wx-button { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; margin: 0 ",[0,20],"; max-width: 50%; }\n.",[1],"cu-bar .",[1],"search-form { background-color: #f5f5f5; line-height: ",[0,64],"; height: ",[0,64],"; font-size: ",[0,24],"; color: #333333; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: 0 ",[0,30],"; }\n.",[1],"cu-bar .",[1],"search-form+.",[1],"action { margin-right: ",[0,30],"; }\n.",[1],"cu-bar .",[1],"search-form wx-input { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; padding-right: ",[0,30],"; height: ",[0,64],"; line-height: ",[0,64],"; font-size: ",[0,26],"; background-color: transparent; }\n.",[1],"cu-bar .",[1],"search-form [class*\x3d\x22cuIcon-\x22] { margin: 0 0.5em 0 0.8em; }\n.",[1],"cu-bar .",[1],"search-form [class*\x3d\x22cuIcon-\x22]::before { top: ",[0,0],"; }\n.",[1],"cu-bar.",[1],"fixed, .",[1],"nav.",[1],"fixed { position: fixed; width: 100%; top: 0; z-index: 1024; -webkit-box-shadow: 0 ",[0,1]," ",[0,6]," rgba(0, 0, 0, 0.1); box-shadow: 0 ",[0,1]," ",[0,6]," rgba(0, 0, 0, 0.1); }\n.",[1],"cu-bar.",[1],"foot { position: fixed; width: 100%; bottom: 0; z-index: 1024; -webkit-box-shadow: 0 ",[0,-1]," ",[0,6]," rgba(0, 0, 0, 0.1); box-shadow: 0 ",[0,-1]," ",[0,6]," rgba(0, 0, 0, 0.1); }\n.",[1],"cu-bar.",[1],"tabbar { padding: 0; height: calc(",[0,100]," + env(safe-area-inset-bottom) / 2); padding-bottom: calc(env(safe-area-inset-bottom) / 2); }\n.",[1],"cu-tabbar-height { min-height: ",[0,100],"; height: calc(",[0,100]," + env(safe-area-inset-bottom) / 2); }\n.",[1],"cu-bar.",[1],"tabbar.",[1],"shadow { -webkit-box-shadow: 0 ",[0,-1]," ",[0,6]," rgba(0, 0, 0, 0.1); box-shadow: 0 ",[0,-1]," ",[0,6]," rgba(0, 0, 0, 0.1); }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"action { font-size: ",[0,22],"; position: relative; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: center; padding: 0; display: block; height: auto; line-height: 1; margin: 0; background-color: inherit; overflow: initial; }\n.",[1],"cu-bar.",[1],"tabbar.",[1],"shop .",[1],"action { width: ",[0,140],"; -webkit-box-flex: initial; -webkit-flex: initial; -ms-flex: initial; flex: initial; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"action.",[1],"add-action { position: relative; z-index: 2; padding-top: ",[0,50],"; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"action.",[1],"add-action [class*\x3d\x22cuIcon-\x22] { position: absolute; width: ",[0,70],"; z-index: 2; height: ",[0,70],"; border-radius: 50%; line-height: ",[0,70],"; font-size: ",[0,50],"; top: ",[0,-35],"; left: 0; right: 0; margin: auto; padding: 0; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"action.",[1],"add-action::after { content: \x22\x22; position: absolute; width: ",[0,100],"; height: ",[0,100],"; top: ",[0,-50],"; left: 0; right: 0; margin: auto; -webkit-box-shadow: 0 ",[0,-3]," ",[0,8]," rgba(0, 0, 0, 0.08); box-shadow: 0 ",[0,-3]," ",[0,8]," rgba(0, 0, 0, 0.08); border-radius: ",[0,50],"; background-color: inherit; z-index: 0; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"action.",[1],"add-action::before { content: \x22\x22; position: absolute; width: ",[0,100],"; height: ",[0,30],"; bottom: ",[0,30],"; left: 0; right: 0; margin: auto; background-color: inherit; z-index: 1; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"btn-group { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,10],"; }\n.",[1],"cu-bar.",[1],"tabbar wx-button.",[1],"action::after { border: 0; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"action [class*\x3d\x22cuIcon-\x22] { width: ",[0,100],"; position: relative; display: block; height: auto; margin: 0 auto ",[0,10],"; text-align: center; font-size: ",[0,40],"; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"action .",[1],"cuIcon-cu-image { margin: 0 auto; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"action .",[1],"cuIcon-cu-image wx-image { width: ",[0,50],"; height: ",[0,50],"; display: inline-block; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"submit { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; text-align: center; position: relative; -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; -webkit-align-self: stretch; -ms-flex-item-align: stretch; align-self: stretch; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"submit:last-child { -webkit-box-flex: 2.6; -webkit-flex: 2.6; -ms-flex: 2.6; flex: 2.6; }\n.",[1],"cu-bar.",[1],"tabbar .",[1],"submit+.",[1],"submit { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; }\n.",[1],"cu-bar.",[1],"tabbar.",[1],"border .",[1],"action::before { content: \x22 \x22; width: 200%; height: 200%; position: absolute; top: 0; left: 0; -webkit-transform: scale(0.5); -ms-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; border-right: ",[0,1]," solid rgba(0, 0, 0, 0.1); z-index: 3; }\n.",[1],"cu-bar.",[1],"tabbar.",[1],"border .",[1],"action:last-child:before { display: none; }\n.",[1],"cu-bar.",[1],"input { padding-right: ",[0,20],"; background-color: #ffffff; }\n.",[1],"cu-bar.",[1],"input wx-input { overflow: initial; line-height: ",[0,64],"; height: ",[0,64],"; min-height: ",[0,64],"; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,30],"; margin: 0 ",[0,20],"; }\n.",[1],"cu-bar.",[1],"input .",[1],"action { margin-left: ",[0,20],"; }\n.",[1],"cu-bar.",[1],"input .",[1],"action [class*\x3d\x22cuIcon-\x22] { font-size: ",[0,48],"; }\n.",[1],"cu-bar.",[1],"input wx-input+.",[1],"action { margin-right: ",[0,20],"; margin-left: ",[0,0],"; }\n.",[1],"cu-bar.",[1],"input .",[1],"action:first-child [class*\x3d\x22cuIcon-\x22] { margin-left: ",[0,0],"; }\n.",[1],"cu-custom { display: block; position: relative; }\n.",[1],"cu-custom .",[1],"cu-bar .",[1],"content { width: calc(100% - ",[0,440],"); }\n.",[1],"cu-custom .",[1],"cu-bar .",[1],"content wx-image { height: ",[0,60],"; width: ",[0,240],"; }\n.",[1],"cu-custom .",[1],"cu-bar { min-height: 0px; -webkit-box-shadow: ",[0,0]," ",[0,0]," ",[0,0],"; box-shadow: ",[0,0]," ",[0,0]," ",[0,0],"; z-index: 9999; }\n.",[1],"cu-custom .",[1],"cu-bar .",[1],"border-custom { position: relative; background: rgba(0, 0, 0, 0.15); border-radius: ",[0,1000],"; height: 30px; }\n.",[1],"cu-custom .",[1],"cu-bar .",[1],"border-custom::after { content: \x22 \x22; width: 200%; height: 200%; position: absolute; top: 0; left: 0; border-radius: inherit; -webkit-transform: scale(0.5); -ms-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; pointer-events: none; -webkit-box-sizing: border-box; box-sizing: border-box; border: ",[0,1]," solid #ffffff; opacity: 0.5; }\n.",[1],"cu-custom .",[1],"cu-bar .",[1],"border-custom::before { content: \x22 \x22; width: ",[0,1],"; height: 110%; position: absolute; top: 22.5%; left: 0; right: 0; margin: auto; -webkit-transform: scale(0.5); -ms-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; pointer-events: none; -webkit-box-sizing: border-box; box-sizing: border-box; opacity: 0.6; background-color: #ffffff; }\n.",[1],"cu-custom .",[1],"cu-bar .",[1],"border-custom wx-text { display: block; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; margin: auto !important; text-align: center; font-size: ",[0,34],"; }\n.",[1],"nav { white-space: nowrap; }\n::-webkit-scrollbar { display: none; }\n.",[1],"nav .",[1],"cu-item { height: ",[0,90],"; display: inline-block; line-height: ",[0,90],"; margin: 0 ",[0,10],"; padding: 0 ",[0,20],"; }\n.",[1],"nav .",[1],"cu-item.",[1],"cur { border-bottom: ",[0,4]," solid; }\n.",[1],"cu-timeline { display: block; background-color: #ffffff; }\n.",[1],"cu-timeline .",[1],"cu-time { width: ",[0,120],"; text-align: center; padding: ",[0,20]," 0; font-size: ",[0,26],"; color: #888; display: block; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item { padding: ",[0,30]," ",[0,30]," ",[0,30]," ",[0,120],"; position: relative; display: block; z-index: 0; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item:not([class*\x3d\x22text-\x22]) { color: #ccc; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item::after { content: \x22\x22; display: block; position: absolute; width: ",[0,1],"; background-color: #ddd; left: ",[0,60],"; height: 100%; top: 0; z-index: 8; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item::before { font-family: \x22cuIcon\x22; display: block; position: absolute; top: ",[0,36],"; z-index: 9; background-color: #ffffff; width: ",[0,50],"; height: ",[0,50],"; text-align: center; border: none; line-height: ",[0,50],"; left: ",[0,36],"; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item:not([class*\x3d\x22cuIcon-\x22])::before { content: \x22\\E763\x22; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item[class*\x3d\x22cuIcon-\x22]::before { background-color: #ffffff; width: ",[0,50],"; height: ",[0,50],"; text-align: center; border: none; line-height: ",[0,50],"; left: ",[0,36],"; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item\x3e.",[1],"content { padding: ",[0,30],"; border-radius: ",[0,6],"; display: block; line-height: 1.6; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item\x3e.",[1],"content:not([class*\x3d\x22bg-\x22]) { background-color: #f1f1f1; color: #333333; }\n.",[1],"cu-timeline\x3e.",[1],"cu-item\x3e.",[1],"content+.",[1],"content { margin-top: ",[0,20],"; }\n.",[1],"cu-chat { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"cu-chat .",[1],"cu-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,30]," ",[0,30]," ",[0,70],"; position: relative; }\n.",[1],"cu-chat .",[1],"cu-item\x3e.",[1],"cu-avatar { width: ",[0,80],"; height: ",[0,80],"; }\n.",[1],"cu-chat .",[1],"cu-item\x3e.",[1],"main { max-width: calc(100% - ",[0,260],"); margin: 0 ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"cu-chat .",[1],"cu-item\x3ewx-image { height: ",[0,320],"; }\n.",[1],"cu-chat .",[1],"cu-item\x3e.",[1],"main .",[1],"content { padding: ",[0,20],"; border-radius: ",[0,6],"; display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; max-width: 100%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,30],"; position: relative; min-height: ",[0,80],"; line-height: ",[0,40],"; text-align: left; }\n.",[1],"cu-chat .",[1],"cu-item\x3e.",[1],"main .",[1],"content:not([class*\x3d\x22bg-\x22]) { background-color: #ffffff; color: #333333; }\n.",[1],"cu-chat .",[1],"cu-item .",[1],"date { position: absolute; font-size: ",[0,24],"; color: #8799a3; width: calc(100% - ",[0,320],"); bottom: ",[0,20],"; left: ",[0,160],"; }\n.",[1],"cu-chat .",[1],"cu-item .",[1],"action { padding: 0 ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"cu-chat .",[1],"cu-item\x3e.",[1],"main .",[1],"content::after { content: \x22\x22; top: ",[0,27],"; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg); position: absolute; z-index: 100; display: inline-block; overflow: hidden; width: ",[0,24],"; height: ",[0,24],"; left: ",[0,-12],"; right: initial; background-color: inherit; }\n.",[1],"cu-chat .",[1],"cu-item.",[1],"self\x3e.",[1],"main .",[1],"content::after { left: auto; right: ",[0,-12],"; }\n.",[1],"cu-chat .",[1],"cu-item\x3e.",[1],"main .",[1],"content::before { content: \x22\x22; top: ",[0,30],"; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg); position: absolute; z-index: -1; display: inline-block; overflow: hidden; width: ",[0,24],"; height: ",[0,24],"; left: ",[0,-12],"; right: initial; background-color: inherit; -webkit-filter: blur(",[0,5],"); filter: blur(",[0,5],"); opacity: 0.3; }\n.",[1],"cu-chat .",[1],"cu-item\x3e.",[1],"main .",[1],"content:not([class*\x3d\x22bg-\x22])::before { background-color: #333333; opacity: 0.1; }\n.",[1],"cu-chat .",[1],"cu-item.",[1],"self\x3e.",[1],"main .",[1],"content::before { left: auto; right: ",[0,-12],"; }\n.",[1],"cu-chat .",[1],"cu-item.",[1],"self { -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; text-align: right; }\n.",[1],"cu-chat .",[1],"cu-info { display: inline-block; margin: ",[0,20]," auto; font-size: ",[0,24],"; padding: ",[0,8]," ",[0,12],"; background-color: rgba(0, 0, 0, 0.2); border-radius: ",[0,6],"; color: #ffffff; max-width: ",[0,400],"; line-height: 1.4; }\n.",[1],"cu-card { display: block; overflow: hidden; }\n.",[1],"cu-card\x3e.",[1],"cu-item { display: block; background-color: #ffffff; overflow: hidden; border-radius: ",[0,10],"; margin: ",[0,30],"; }\n.",[1],"cu-card\x3e.",[1],"cu-item.",[1],"shadow-blur { overflow: initial; }\n.",[1],"cu-card.",[1],"no-card\x3e.",[1],"cu-item { margin: ",[0,0],"; border-radius: ",[0,0],"; }\n.",[1],"cu-card .",[1],"grid.",[1],"grid-square { margin-bottom: ",[0,-20],"; }\n.",[1],"cu-card.",[1],"case .",[1],"image { position: relative; }\n.",[1],"cu-card.",[1],"case .",[1],"image wx-image { width: 100%; }\n.",[1],"cu-card.",[1],"case .",[1],"image .",[1],"cu-tag { position: absolute; right: 0; top: 0; }\n.",[1],"cu-card.",[1],"case .",[1],"image .",[1],"cu-bar { position: absolute; bottom: 0; width: 100%; background-color: transparent; padding: ",[0,0]," ",[0,30],"; }\n.",[1],"cu-card.",[1],"case.",[1],"no-card .",[1],"image { margin: ",[0,30]," ",[0,30]," 0; overflow: hidden; border-radius: ",[0,10],"; }\n.",[1],"cu-card.",[1],"dynamic { display: block; }\n.",[1],"cu-card.",[1],"dynamic\x3e.",[1],"cu-item { display: block; background-color: #ffffff; overflow: hidden; }\n.",[1],"cu-card.",[1],"dynamic\x3e.",[1],"cu-item\x3e.",[1],"text-content { padding: 0 ",[0,30]," 0; max-height: 6.4em; overflow: hidden; font-size: ",[0,30],"; margin-bottom: ",[0,20],"; }\n.",[1],"cu-card.",[1],"dynamic\x3e.",[1],"cu-item .",[1],"square-img { width: 100%; height: ",[0,200],"; border-radius: ",[0,6],"; }\n.",[1],"cu-card.",[1],"dynamic\x3e.",[1],"cu-item .",[1],"only-img { width: 100%; height: ",[0,320],"; border-radius: ",[0,6],"; }\n.",[1],"cu-card.",[1],"article { display: block; }\n.",[1],"cu-card.",[1],"article\x3e.",[1],"cu-item { padding-bottom: ",[0,30],"; }\n.",[1],"cu-card.",[1],"article\x3e.",[1],"cu-item .",[1],"title { font-size: ",[0,30],"; font-weight: 900; color: #333333; line-height: ",[0,100],"; padding: 0 ",[0,30],"; }\n.",[1],"cu-card.",[1],"article\x3e.",[1],"cu-item .",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: 0 ",[0,30],"; }\n.",[1],"cu-card.",[1],"article\x3e.",[1],"cu-item .",[1],"content\x3ewx-image { width: ",[0,240],"; height: 6.4em; margin-right: ",[0,20],"; border-radius: ",[0,6],"; }\n.",[1],"cu-card.",[1],"article\x3e.",[1],"cu-item .",[1],"content .",[1],"desc { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"cu-card.",[1],"article\x3e.",[1],"cu-item .",[1],"content .",[1],"text-content { font-size: ",[0,28],"; color: #888; height: 4.8em; overflow: hidden; }\n.",[1],"cu-form-group { background-color: #ffffff; padding: ",[0,1]," ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; min-height: ",[0,100],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"cu-form-group+.",[1],"cu-form-group { border-top: ",[0,1]," solid #eee; }\n.",[1],"cu-form-group .",[1],"title { text-align: justify; padding-right: ",[0,30],"; font-size: ",[0,30],"; position: relative; height: ",[0,60],"; line-height: ",[0,60],"; }\n.",[1],"cu-form-group wx-input { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,30],"; color: #555; padding-right: ",[0,20],"; }\n.",[1],"cu-form-group\x3ewx-text[class*\x3d\x22cuIcon-\x22] { font-size: ",[0,36],"; padding: 0; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"cu-form-group wx-textarea { margin: ",[0,32]," 0 ",[0,30],"; height: 4.6em; width: 100%; line-height: 1.2em; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,28],"; padding: 0; }\n.",[1],"cu-form-group.",[1],"align-start .",[1],"title { height: 1em; margin-top: ",[0,32],"; line-height: 1em; }\n.",[1],"cu-form-group wx-picker { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; padding-right: ",[0,40],"; overflow: hidden; position: relative; }\n.",[1],"cu-form-group wx-picker .",[1],"picker { line-height: ",[0,100],"; font-size: ",[0,28],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; width: 100%; text-align: right; }\n.",[1],"cu-form-group wx-picker::after { font-family: cuIcon; display: block; content: \x22\\E6A3\x22; position: absolute; font-size: ",[0,34],"; color: #8799a3; line-height: ",[0,100],"; width: ",[0,60],"; text-align: center; top: 0; bottom: 0; right: ",[0,-20],"; margin: auto; }\n.",[1],"cu-form-group wx-textarea[disabled], .",[1],"cu-form-group wx-textarea[disabled] .",[1],"placeholder { color: transparent; }\n.",[1],"cu-modal { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1110; opacity: 0; outline: 0; text-align: center; -ms-transform: scale(1.185); -webkit-transform: scale(1.185); transform: scale(1.185); -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-perspective: ",[0,2000],"; perspective: ",[0,2000],"; background: rgba(0, 0, 0, 0.6); -webkit-transition: all 0.3s ease-in-out 0s; -o-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s; pointer-events: none; }\n.",[1],"cu-modal::before { content: \x22\\200B\x22; display: inline-block; height: 100%; vertical-align: middle; }\n.",[1],"cu-modal.",[1],"show { opacity: 1; -webkit-transition-duration: 0.3s; -o-transition-duration: 0.3s; transition-duration: 0.3s; -ms-transform: scale(1); -webkit-transform: scale(1); transform: scale(1); overflow-x: hidden; overflow-y: auto; pointer-events: auto; }\n.",[1],"cu-dialog { position: relative; display: inline-block; vertical-align: middle; margin-left: auto; margin-right: auto; width: ",[0,680],"; max-width: 100%; background-color: #f8f8f8; border-radius: ",[0,10],"; overflow: hidden; }\n.",[1],"cu-modal.",[1],"bottom-modal::before { vertical-align: bottom; }\n.",[1],"cu-modal.",[1],"bottom-modal .",[1],"cu-dialog { width: 100%; border-radius: 0; }\n.",[1],"cu-modal.",[1],"bottom-modal { margin-bottom: ",[0,-1000],"; }\n.",[1],"cu-modal.",[1],"bottom-modal.",[1],"show { margin-bottom: 0; }\n.",[1],"cu-modal.",[1],"drawer-modal { -webkit-transform: scale(1); -ms-transform: scale(1); transform: scale(1); display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"cu-modal.",[1],"drawer-modal .",[1],"cu-dialog { height: 100%; min-width: ",[0,200],"; border-radius: 0; margin: initial; -webkit-transition-duration: 0.3s; -o-transition-duration: 0.3s; transition-duration: 0.3s; }\n.",[1],"cu-modal.",[1],"drawer-modal.",[1],"justify-start .",[1],"cu-dialog { -webkit-transform: translateX(-100%); -ms-transform: translateX(-100%); transform: translateX(-100%); }\n.",[1],"cu-modal.",[1],"drawer-modal.",[1],"justify-end .",[1],"cu-dialog { -webkit-transform: translateX(100%); -ms-transform: translateX(100%); transform: translateX(100%); }\n.",[1],"cu-modal.",[1],"drawer-modal.",[1],"show .",[1],"cu-dialog { -webkit-transform: translateX(0%); -ms-transform: translateX(0%); transform: translateX(0%); }\n.",[1],"cu-modal .",[1],"cu-dialog\x3e.",[1],"cu-bar:first-child .",[1],"action{ min-width: ",[0,100],"; margin-right: 0; min-height: ",[0,100],"; }\nwx-swiper .",[1],"a-swiper-dot { display: inline-block; width: ",[0,16],"; height: ",[0,16],"; background: rgba(0, 0, 0, .3); border-radius: 50%; vertical-align: middle; }\nwx-swiper[class*\x3d\x22-dot\x22] .",[1],"wx-swiper-dots, wx-swiper[class*\x3d\x22-dot\x22] .",[1],"a-swiper-dots, wx-swiper[class*\x3d\x22-dot\x22] .",[1],"uni-swiper-dots { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-swiper.",[1],"square-dot .",[1],"wx-swiper-dot, wx-swiper.",[1],"square-dot .",[1],"a-swiper-dot, wx-swiper.",[1],"square-dot .",[1],"uni-swiper-dot { background-color: #ffffff; opacity: 0.4; width: ",[0,10],"; height: ",[0,10],"; border-radius: ",[0,20],"; margin: 0 ",[0,8]," !important; }\nwx-swiper.",[1],"square-dot .",[1],"wx-swiper-dot.",[1],"wx-swiper-dot-active, wx-swiper.",[1],"square-dot .",[1],"a-swiper-dot.",[1],"a-swiper-dot-active, wx-swiper.",[1],"square-dot .",[1],"uni-swiper-dot.",[1],"uni-swiper-dot-active { opacity: 1; width: ",[0,30],"; }\nwx-swiper.",[1],"round-dot .",[1],"wx-swiper-dot, wx-swiper.",[1],"round-dot .",[1],"a-swiper-dot, wx-swiper.",[1],"round-dot .",[1],"uni-swiper-dot { width: ",[0,10],"; height: ",[0,10],"; position: relative; margin: ",[0,4]," ",[0,8]," !important; }\nwx-swiper.",[1],"round-dot .",[1],"wx-swiper-dot.",[1],"wx-swiper-dot-active::after, wx-swiper.",[1],"round-dot .",[1],"a-swiper-dot.",[1],"a-swiper-dot-active::after, wx-swiper.",[1],"round-dot .",[1],"uni-swiper-dot.",[1],"uni-swiper-dot-active::after { content: \x22\x22; position: absolute; width: ",[0,10],"; height: ",[0,10],"; top: ",[0,0],"; left: ",[0,0],"; right: 0; bottom: 0; margin: auto; background-color: #ffffff; border-radius: ",[0,20],"; }\nwx-swiper.",[1],"round-dot .",[1],"wx-swiper-dot.",[1],"wx-swiper-dot-active, wx-swiper.",[1],"round-dot .",[1],"a-swiper-dot.",[1],"a-swiper-dot-active, wx-swiper.",[1],"round-dot .",[1],"uni-swiper-dot.",[1],"uni-swiper-dot-active { width: ",[0,18],"; height: ",[0,18],"; }\n.",[1],"screen-swiper { min-height: ",[0,375],"; }\n.",[1],"screen-swiper wx-image, .",[1],"screen-swiper wx-video, .",[1],"swiper-item wx-image, .",[1],"swiper-item wx-video { width: 100%; display: block; height: 100%; margin: 0; pointer-events: none; }\n.",[1],"card-swiper { height: ",[0,420]," !important; }\n.",[1],"card-swiper wx-swiper-item { width: ",[0,610]," !important; left: ",[0,70],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,40]," ",[0,0]," ",[0,70],"; overflow: initial; }\n.",[1],"card-swiper wx-swiper-item .",[1],"swiper-item { width: 100%; display: block; height: 100%; border-radius: ",[0,10],"; -webkit-transform: scale(0.9); -ms-transform: scale(0.9); transform: scale(0.9); -webkit-transition: all 0.2s ease-in 0s; -o-transition: all 0.2s ease-in 0s; transition: all 0.2s ease-in 0s; overflow: hidden; }\n.",[1],"card-swiper wx-swiper-item.",[1],"cur .",[1],"swiper-item { -webkit-transform: none; -ms-transform: none; transform: none; -webkit-transition: all 0.2s ease-in 0s; -o-transition: all 0.2s ease-in 0s; transition: all 0.2s ease-in 0s; }\n.",[1],"tower-swiper { height: ",[0,420],"; position: relative; max-width: ",[0,750],"; overflow: hidden; }\n.",[1],"tower-swiper .",[1],"tower-item { position: absolute; width: ",[0,300],"; height: ",[0,380],"; top: 0; bottom: 0; left: 50%; margin: auto; -webkit-transition: all 0.2s ease-in 0s; -o-transition: all 0.2s ease-in 0s; transition: all 0.2s ease-in 0s; opacity: 1; }\n.",[1],"tower-swiper .",[1],"tower-item.",[1],"none { opacity: 0; }\n.",[1],"tower-swiper .",[1],"tower-item .",[1],"swiper-item { width: 100%; height: 100%; border-radius: ",[0,6],"; overflow: hidden; }\n.",[1],"cu-steps { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\nwx-scroll-view.",[1],"cu-steps { display: block; white-space: nowrap; }\nwx-scroll-view.",[1],"cu-steps .",[1],"cu-item { display: inline-block; }\n.",[1],"cu-steps .",[1],"cu-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: center; position: relative; min-width: ",[0,100],"; }\n.",[1],"cu-steps .",[1],"cu-item:not([class*\x3d\x22text-\x22]) { color: #8799a3; }\n.",[1],"cu-steps .",[1],"cu-item [class*\x3d\x22cuIcon-\x22], .",[1],"cu-steps .",[1],"cu-item .",[1],"num { display: block; font-size: ",[0,40],"; line-height: ",[0,80],"; }\n.",[1],"cu-steps .",[1],"cu-item::before, .",[1],"cu-steps .",[1],"cu-item::after, .",[1],"cu-steps.",[1],"steps-arrow .",[1],"cu-item::before, .",[1],"cu-steps.",[1],"steps-arrow .",[1],"cu-item::after { content: \x22\x22; display: block; position: absolute; height: 0px; width: calc(100% - ",[0,80],"); border-bottom: 1px solid #ccc; left: calc(0px - (100% - ",[0,80],") / 2); top: ",[0,40],"; z-index: 0; }\n.",[1],"cu-steps.",[1],"steps-arrow .",[1],"cu-item::before, .",[1],"cu-steps.",[1],"steps-arrow .",[1],"cu-item::after { content: \x22\\E6A3\x22; font-family: \x27cuIcon\x27; height: ",[0,30],"; border-bottom-width: 0px; line-height: ",[0,30],"; top: 0; bottom: 0; margin: auto; color: #ccc; }\n.",[1],"cu-steps.",[1],"steps-bottom .",[1],"cu-item::before, .",[1],"cu-steps.",[1],"steps-bottom .",[1],"cu-item::after { bottom: ",[0,40],"; top: initial; }\n.",[1],"cu-steps .",[1],"cu-item::after { border-bottom: 1px solid currentColor; width: 0px; -webkit-transition: all 0.3s ease-in-out 0s; -o-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s; }\n.",[1],"cu-steps .",[1],"cu-item[class*\x3d\x22text-\x22]::after { width: calc(100% - ",[0,80],"); color: currentColor; }\n.",[1],"cu-steps .",[1],"cu-item:first-child::before, .",[1],"cu-steps .",[1],"cu-item:first-child::after { display: none; }\n.",[1],"cu-steps .",[1],"cu-item .",[1],"num { width: ",[0,40],"; height: ",[0,40],"; border-radius: 50%; line-height: ",[0,40],"; margin: ",[0,20]," auto; font-size: ",[0,24],"; border: 1px solid currentColor; position: relative; overflow: hidden; }\n.",[1],"cu-steps .",[1],"cu-item[class*\x3d\x22text-\x22] .",[1],"num { background-color: currentColor; }\n.",[1],"cu-steps .",[1],"cu-item .",[1],"num::before, .",[1],"cu-steps .",[1],"cu-item .",[1],"num::after { content: attr(data-index); position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto; -webkit-transition: all 0.3s ease-in-out 0s; -o-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s; -webkit-transform: translateY(",[0,0],"); -ms-transform: translateY(",[0,0],"); transform: translateY(",[0,0],"); }\n.",[1],"cu-steps .",[1],"cu-item[class*\x3d\x22text-\x22] .",[1],"num::before { -webkit-transform: translateY(",[0,-40],"); -ms-transform: translateY(",[0,-40],"); transform: translateY(",[0,-40],"); color: #ffffff; }\n.",[1],"cu-steps .",[1],"cu-item .",[1],"num::after { -webkit-transform: translateY(",[0,40],"); -ms-transform: translateY(",[0,40],"); transform: translateY(",[0,40],"); color: #ffffff; -webkit-transition: all 0.3s ease-in-out 0s; -o-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s; }\n.",[1],"cu-steps .",[1],"cu-item[class*\x3d\x22text-\x22] .",[1],"num::after { content: \x22\\E645\x22; font-family: \x27cuIcon\x27; color: #ffffff; -webkit-transform: translateY(",[0,0],"); -ms-transform: translateY(",[0,0],"); transform: translateY(",[0,0],"); }\n.",[1],"cu-steps .",[1],"cu-item[class*\x3d\x22text-\x22] .",[1],"num.",[1],"err::after { content: \x22\\E646\x22; }\n.",[1],"flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"basis-xs { -webkit-flex-basis: 20%; -ms-flex-preferred-size: 20%; flex-basis: 20%; }\n.",[1],"basis-sm { -webkit-flex-basis: 40%; -ms-flex-preferred-size: 40%; flex-basis: 40%; }\n.",[1],"basis-df { -webkit-flex-basis: 50%; -ms-flex-preferred-size: 50%; flex-basis: 50%; }\n.",[1],"basis-lg { -webkit-flex-basis: 60%; -ms-flex-preferred-size: 60%; flex-basis: 60%; }\n.",[1],"basis-xl { -webkit-flex-basis: 80%; -ms-flex-preferred-size: 80%; flex-basis: 80%; }\n.",[1],"flex-sub { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"flex-twice { -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; }\n.",[1],"flex-treble { -webkit-box-flex: 3; -webkit-flex: 3; -ms-flex: 3; flex: 3; }\n.",[1],"flex-direction { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"flex-wrap { -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"align-start { -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"align-end { -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; }\n.",[1],"align-center { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"align-stretch { -webkit-box-align: stretch; -webkit-align-items: stretch; -ms-flex-align: stretch; align-items: stretch; }\n.",[1],"self-start { -webkit-align-self: flex-start; -ms-flex-item-align: start; align-self: flex-start; }\n.",[1],"self-center { -webkit-align-self: flex-center; -ms-flex-item-align: flex-center; align-self: flex-center; }\n.",[1],"self-end { -webkit-align-self: flex-end; -ms-flex-item-align: end; align-self: flex-end; }\n.",[1],"self-stretch { -webkit-align-self: stretch; -ms-flex-item-align: stretch; align-self: stretch; }\n.",[1],"align-stretch { -webkit-box-align: stretch; -webkit-align-items: stretch; -ms-flex-align: stretch; align-items: stretch; }\n.",[1],"justify-start { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"justify-end { -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"justify-center { -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"justify-between { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"justify-around { -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"grid { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"grid.",[1],"grid-square { overflow: hidden; }\n.",[1],"grid.",[1],"grid-square .",[1],"cu-tag { position: absolute; right: 0; top: 0; border-bottom-left-radius: ",[0,6],"; padding: ",[0,6]," ",[0,12],"; height: auto; background-color: rgba(0, 0, 0, 0.5); }\n.",[1],"grid.",[1],"grid-square\x3ewx-view\x3ewx-text[class*\x3d\x22cuIcon-\x22] { font-size: ",[0,52],"; position: absolute; color: #8799a3; margin: auto; top: 0; bottom: 0; left: 0; right: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"grid.",[1],"grid-square\x3ewx-view { margin-right: ",[0,20],"; margin-bottom: ",[0,20],"; border-radius: ",[0,6],"; position: relative; overflow: hidden; }\n.",[1],"grid.",[1],"grid-square\x3ewx-view.",[1],"bg-img wx-image { width: 100%; height: 100%; position: absolute; }\n.",[1],"grid.",[1],"col-1.",[1],"grid-square\x3ewx-view { padding-bottom: 100%; height: 0; margin-right: 0; }\n.",[1],"grid.",[1],"col-2.",[1],"grid-square\x3ewx-view { padding-bottom: calc((100% - ",[0,20],")/2); height: 0; width: calc((100% - ",[0,20],")/2); }\n.",[1],"grid.",[1],"col-3.",[1],"grid-square\x3ewx-view { padding-bottom: calc((100% - ",[0,40],")/3); height: 0; width: calc((100% - ",[0,40],")/3); }\n.",[1],"grid.",[1],"col-4.",[1],"grid-square\x3ewx-view { padding-bottom: calc((100% - ",[0,60],")/4); height: 0; width: calc((100% - ",[0,60],")/4); }\n.",[1],"grid.",[1],"col-5.",[1],"grid-square\x3ewx-view { padding-bottom: calc((100% - ",[0,80],")/5); height: 0; width: calc((100% - ",[0,80],")/5); }\n.",[1],"grid.",[1],"col-2.",[1],"grid-square\x3ewx-view:nth-child(2n), .",[1],"grid.",[1],"col-3.",[1],"grid-square\x3ewx-view:nth-child(3n), .",[1],"grid.",[1],"col-4.",[1],"grid-square\x3ewx-view:nth-child(4n), .",[1],"grid.",[1],"col-5.",[1],"grid-square\x3ewx-view:nth-child(5n) { margin-right: 0; }\n.",[1],"grid.",[1],"col-1\x3ewx-view { width: 100%; }\n.",[1],"grid.",[1],"col-2\x3ewx-view { width: 50%; }\n.",[1],"grid.",[1],"col-3\x3ewx-view { width: 33.33%; }\n.",[1],"grid.",[1],"col-4\x3ewx-view { width: 25%; }\n.",[1],"grid.",[1],"col-5\x3ewx-view { width: 20%; }\n.",[1],"margin-0 { margin: 0; }\n.",[1],"margin-xs { margin: ",[0,10],"; }\n.",[1],"margin-sm { margin: ",[0,20],"; }\n.",[1],"margin { margin: ",[0,30],"; }\n.",[1],"margin-lg { margin: ",[0,40],"; }\n.",[1],"margin-xl { margin: ",[0,50],"; }\n.",[1],"margin-top-xs { margin-top: ",[0,10],"; }\n.",[1],"margin-top-sm { margin-top: ",[0,20],"; }\n.",[1],"margin-top { margin-top: ",[0,30],"; }\n.",[1],"margin-top-lg { margin-top: ",[0,40],"; }\n.",[1],"margin-top-xl { margin-top: ",[0,50],"; }\n.",[1],"margin-right-xs { margin-right: ",[0,10],"; }\n.",[1],"margin-right-sm { margin-right: ",[0,20],"; }\n.",[1],"margin-right { margin-right: ",[0,30],"; }\n.",[1],"margin-right-lg { margin-right: ",[0,40],"; }\n.",[1],"margin-right-xl { margin-right: ",[0,50],"; }\n.",[1],"margin-bottom-xs { margin-bottom: ",[0,10],"; }\n.",[1],"margin-bottom-sm { margin-bottom: ",[0,20],"; }\n.",[1],"margin-bottom { margin-bottom: ",[0,30],"; }\n.",[1],"margin-bottom-lg { margin-bottom: ",[0,40],"; }\n.",[1],"margin-bottom-xl { margin-bottom: ",[0,50],"; }\n.",[1],"margin-left-xs { margin-left: ",[0,10],"; }\n.",[1],"margin-left-sm { margin-left: ",[0,20],"; }\n.",[1],"margin-left { margin-left: ",[0,30],"; }\n.",[1],"margin-left-lg { margin-left: ",[0,40],"; }\n.",[1],"margin-left-xl { margin-left: ",[0,50],"; }\n.",[1],"margin-lr-xs { margin-left: ",[0,10],"; margin-right: ",[0,10],"; }\n.",[1],"margin-lr-sm { margin-left: ",[0,20],"; margin-right: ",[0,20],"; }\n.",[1],"margin-lr { margin-left: ",[0,30],"; margin-right: ",[0,30],"; }\n.",[1],"margin-lr-lg { margin-left: ",[0,40],"; margin-right: ",[0,40],"; }\n.",[1],"margin-lr-xl { margin-left: ",[0,50],"; margin-right: ",[0,50],"; }\n.",[1],"margin-tb-xs { margin-top: ",[0,10],"; margin-bottom: ",[0,10],"; }\n.",[1],"margin-tb-sm { margin-top: ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"margin-tb { margin-top: ",[0,30],"; margin-bottom: ",[0,30],"; }\n.",[1],"margin-tb-lg { margin-top: ",[0,40],"; margin-bottom: ",[0,40],"; }\n.",[1],"margin-tb-xl { margin-top: ",[0,50],"; margin-bottom: ",[0,50],"; }\n.",[1],"padding-0 { padding: 0; }\n.",[1],"padding-xs { padding: ",[0,10],"; }\n.",[1],"padding-sm { padding: ",[0,20],"; }\n.",[1],"padding { padding: ",[0,30],"; }\n.",[1],"padding-lg { padding: ",[0,40],"; }\n.",[1],"padding-xl { padding: ",[0,50],"; }\n.",[1],"padding-top-xs { padding-top: ",[0,10],"; }\n.",[1],"padding-top-sm { padding-top: ",[0,20],"; }\n.",[1],"padding-top { padding-top: ",[0,30],"; }\n.",[1],"padding-top-lg { padding-top: ",[0,40],"; }\n.",[1],"padding-top-xl { padding-top: ",[0,50],"; }\n.",[1],"padding-right-xs { padding-right: ",[0,10],"; }\n.",[1],"padding-right-sm { padding-right: ",[0,20],"; }\n.",[1],"padding-right { padding-right: ",[0,30],"; }\n.",[1],"padding-right-lg { padding-right: ",[0,40],"; }\n.",[1],"padding-right-xl { padding-right: ",[0,50],"; }\n.",[1],"padding-bottom-xs { padding-bottom: ",[0,10],"; }\n.",[1],"padding-bottom-sm { padding-bottom: ",[0,20],"; }\n.",[1],"padding-bottom { padding-bottom: ",[0,30],"; }\n.",[1],"padding-bottom-lg { padding-bottom: ",[0,40],"; }\n.",[1],"padding-bottom-xl { padding-bottom: ",[0,50],"; }\n.",[1],"padding-left-xs { padding-left: ",[0,10],"; }\n.",[1],"padding-left-sm { padding-left: ",[0,20],"; }\n.",[1],"padding-left { padding-left: ",[0,30],"; }\n.",[1],"padding-left-lg { padding-left: ",[0,40],"; }\n.",[1],"padding-left-xl { padding-left: ",[0,50],"; }\n.",[1],"padding-lr-xs { padding-left: ",[0,10],"; padding-right: ",[0,10],"; }\n.",[1],"padding-lr-sm { padding-left: ",[0,20],"; padding-right: ",[0,20],"; }\n.",[1],"padding-lr { padding-left: ",[0,30],"; padding-right: ",[0,30],"; }\n.",[1],"padding-lr-lg { padding-left: ",[0,40],"; padding-right: ",[0,40],"; }\n.",[1],"padding-lr-xl { padding-left: ",[0,50],"; padding-right: ",[0,50],"; }\n.",[1],"padding-tb-xs { padding-top: ",[0,10],"; padding-bottom: ",[0,10],"; }\n.",[1],"padding-tb-sm { padding-top: ",[0,20],"; padding-bottom: ",[0,20],"; }\n.",[1],"padding-tb { padding-top: ",[0,30],"; padding-bottom: ",[0,30],"; }\n.",[1],"padding-tb-lg { padding-top: ",[0,40],"; padding-bottom: ",[0,40],"; }\n.",[1],"padding-tb-xl { padding-top: ",[0,50],"; padding-bottom: ",[0,50],"; }\n.",[1],"cf::after, .",[1],"cf::before { content: \x22 \x22; display: table; }\n.",[1],"cf::after { clear: both; }\n.",[1],"fl { float: left; }\n.",[1],"fr { float: right; }\n.",[1],"line-red::after, .",[1],"lines-red::after { border-color: #e54d42; }\n.",[1],"line-orange::after, .",[1],"lines-orange::after { border-color: #f37b1d; }\n.",[1],"line-yellow::after, .",[1],"lines-yellow::after { border-color: #fbbd08; }\n.",[1],"line-olive::after, .",[1],"lines-olive::after { border-color: #8dc63f; }\n.",[1],"line-green::after, .",[1],"lines-green::after { border-color: #39b54a; }\n.",[1],"line-cyan::after, .",[1],"lines-cyan::after { border-color: #1cbbb4; }\n.",[1],"line-blue::after, .",[1],"lines-blue::after { border-color: #0081ff; }\n.",[1],"line-purple::after, .",[1],"lines-purple::after { border-color: #6739b6; }\n.",[1],"line-mauve::after, .",[1],"lines-mauve::after { border-color: #9c26b0; }\n.",[1],"line-pink::after, .",[1],"lines-pink::after { border-color: #e03997; }\n.",[1],"line-brown::after, .",[1],"lines-brown::after { border-color: #a5673f; }\n.",[1],"line-grey::after, .",[1],"lines-grey::after { border-color: #8799a3; }\n.",[1],"line-gray::after, .",[1],"lines-gray::after { border-color: #aaaaaa; }\n.",[1],"line-black::after, .",[1],"lines-black::after { border-color: #333333; }\n.",[1],"line-white::after, .",[1],"lines-white::after { border-color: #ffffff; }\n.",[1],"bg-red { background-color: #e54d42; color: #ffffff; }\n.",[1],"bg-orange { background-color: #f37b1d; color: #ffffff; }\n.",[1],"bg-yellow { background-color: #fbbd08; color: #333333; }\n.",[1],"bg-olive { background-color: #8dc63f; color: #ffffff; }\n.",[1],"bg-green { background-color: #39b54a; color: #ffffff; }\n.",[1],"bg-cyan { background-color: #1cbbb4; color: #ffffff; }\n.",[1],"bg-blue { background-color: #0081ff; color: #ffffff; }\n.",[1],"bg-purple { background-color: #6739b6; color: #ffffff; }\n.",[1],"bg-mauve { background-color: #9c26b0; color: #ffffff; }\n.",[1],"bg-pink { background-color: #e03997; color: #ffffff; }\n.",[1],"bg-brown { background-color: #a5673f; color: #ffffff; }\n.",[1],"bg-grey { background-color: #8799a3; color: #ffffff; }\n.",[1],"bg-gray { background-color: #f0f0f0; color: #333333; }\n.",[1],"bg-black { background-color: #333333; color: #ffffff; }\n.",[1],"bg-white { background-color: #ffffff; color: #666666; }\n.",[1],"bg-shadeTop { background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.01))); background-image: -o-linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01)); background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01)); color: #ffffff; }\n.",[1],"bg-shadeBottom { background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.01)), to(rgba(0, 0, 0, 1))); background-image: -o-linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1)); background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1)); color: #ffffff; }\n.",[1],"bg-red.",[1],"light { color: #e54d42; background-color: #fadbd9; }\n.",[1],"bg-orange.",[1],"light { color: #f37b1d; background-color: #fde6d2; }\n.",[1],"bg-yellow.",[1],"light { color: #fbbd08; background-color: #fef2ced2; }\n.",[1],"bg-olive.",[1],"light { color: #8dc63f; background-color: #e8f4d9; }\n.",[1],"bg-green.",[1],"light { color: #39b54a; background-color: #d7f0dbff; }\n.",[1],"bg-cyan.",[1],"light { color: #1cbbb4; background-color: #d2f1f0; }\n.",[1],"bg-blue.",[1],"light { color: #0081ff; background-color: #cce6ff; }\n.",[1],"bg-purple.",[1],"light { color: #6739b6; background-color: #e1d7f0; }\n.",[1],"bg-mauve.",[1],"light { color: #9c26b0; background-color: #ebd4ef; }\n.",[1],"bg-pink.",[1],"light { color: #e03997; background-color: #f9d7ea; }\n.",[1],"bg-brown.",[1],"light { color: #a5673f; background-color: #ede1d9; }\n.",[1],"bg-grey.",[1],"light { color: #8799a3; background-color: #e7ebed; }\n.",[1],"bg-gradual-red { background-image: -o-linear-gradient(45deg, #f43f3b, #ec008c); background-image: linear-gradient(45deg, #f43f3b, #ec008c); color: #ffffff; }\n.",[1],"bg-gradual-orange { background-image: -o-linear-gradient(45deg, #ff9700, #ed1c24); background-image: linear-gradient(45deg, #ff9700, #ed1c24); color: #ffffff; }\n.",[1],"bg-gradual-green { background-image: -o-linear-gradient(45deg, #39b54a, #8dc63f); background-image: linear-gradient(45deg, #39b54a, #8dc63f); color: #ffffff; }\n.",[1],"bg-gradual-purple { background-image: -o-linear-gradient(45deg, #9000ff, #5e00ff); background-image: linear-gradient(45deg, #9000ff, #5e00ff); color: #ffffff; }\n.",[1],"bg-gradual-pink { background-image: -o-linear-gradient(45deg, #ec008c, #6739b6); background-image: linear-gradient(45deg, #ec008c, #6739b6); color: #ffffff; }\n.",[1],"bg-gradual-blue { background-image: -o-linear-gradient(45deg, #86D2DE, #1cbbb4); background-image: linear-gradient(45deg, #86D2DE, #1cbbb4); color: #ffffff; }\n.",[1],"shadow[class*\x3d\x22-red\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(204, 69, 59, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(204, 69, 59, 0.2); }\n.",[1],"shadow[class*\x3d\x22-orange\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(217, 109, 26, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(217, 109, 26, 0.2); }\n.",[1],"shadow[class*\x3d\x22-yellow\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(224, 170, 7, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(224, 170, 7, 0.2); }\n.",[1],"shadow[class*\x3d\x22-olive\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(124, 173, 55, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(124, 173, 55, 0.2); }\n.",[1],"shadow[class*\x3d\x22-green\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(48, 156, 63, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(48, 156, 63, 0.2); }\n.",[1],"shadow[class*\x3d\x22-cyan\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(28, 187, 180, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(28, 187, 180, 0.2); }\n.",[1],"shadow[class*\x3d\x22-blue\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(0, 102, 204, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(0, 102, 204, 0.2); }\n.",[1],"shadow[class*\x3d\x22-purple\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(88, 48, 156, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(88, 48, 156, 0.2); }\n.",[1],"shadow[class*\x3d\x22-mauve\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(133, 33, 150, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(133, 33, 150, 0.2); }\n.",[1],"shadow[class*\x3d\x22-pink\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(199, 50, 134, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(199, 50, 134, 0.2); }\n.",[1],"shadow[class*\x3d\x22-brown\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(140, 88, 53, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(140, 88, 53, 0.2); }\n.",[1],"shadow[class*\x3d\x22-grey\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(114, 130, 138, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(114, 130, 138, 0.2); }\n.",[1],"shadow[class*\x3d\x22-gray\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(114, 130, 138, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(114, 130, 138, 0.2); }\n.",[1],"shadow[class*\x3d\x22-black\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(26, 26, 26, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(26, 26, 26, 0.2); }\n.",[1],"shadow[class*\x3d\x22-white\x22] { -webkit-box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(26, 26, 26, 0.2); box-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(26, 26, 26, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-red\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(204, 69, 59, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-orange\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(217, 109, 26, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-yellow\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(224, 170, 7, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-olive\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(124, 173, 55, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-green\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(48, 156, 63, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-cyan\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(28, 187, 180, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-blue\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(0, 102, 204, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-purple\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(88, 48, 156, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-mauve\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(133, 33, 150, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-pink\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(199, 50, 134, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-brown\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(140, 88, 53, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-grey\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(114, 130, 138, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-gray\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(114, 130, 138, 0.2); }\n.",[1],"text-shadow[class*\x3d\x22-black\x22] { text-shadow: ",[0,6]," ",[0,6]," ",[0,8]," rgba(26, 26, 26, 0.2); }\n.",[1],"bg-img { background-size: cover; background-position: center; background-repeat: no-repeat; }\n.",[1],"bg-mask { background-color: #333333; position: relative; }\n.",[1],"bg-mask::after { content: \x22\x22; border-radius: inherit; width: 100%; height: 100%; display: block; background-color: rgba(0, 0, 0, 0.4); position: absolute; left: 0; right: 0; bottom: 0; top: 0; }\n.",[1],"bg-mask wx-view, .",[1],"bg-mask wx-cover-view { z-index: 5; position: relative; }\n.",[1],"bg-video { position: relative; }\n.",[1],"bg-video wx-video { display: block; height: 100%; width: 100%; -o-object-fit: cover; object-fit: cover; position: absolute; top: 0; z-index: 0; pointer-events: none; }\n.",[1],"text-xs { font-size: ",[0,20],"; }\n.",[1],"text-sm { font-size: ",[0,24],"; }\n.",[1],"text-df { font-size: ",[0,28],"; }\n.",[1],"text-lg { font-size: ",[0,32],"; }\n.",[1],"text-xl { font-size: ",[0,36],"; }\n.",[1],"text-xxl { font-size: ",[0,44],"; }\n.",[1],"text-sl { font-size: ",[0,80],"; }\n.",[1],"text-xsl { font-size: ",[0,120],"; }\n.",[1],"text-Abc { text-transform: Capitalize; }\n.",[1],"text-ABC { text-transform: Uppercase; }\n.",[1],"text-abc { text-transform: Lowercase; }\n.",[1],"text-price::before { content: \x22\\A5\x22; font-size: 80%; margin-right: ",[0,4],"; }\n.",[1],"text-cut { -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }\n.",[1],"text-bold { font-weight: bold; }\n.",[1],"text-center { text-align: center; }\n.",[1],"text-content { line-height: 1.6; }\n.",[1],"text-left { text-align: left; }\n.",[1],"text-right { text-align: right; }\n.",[1],"text-red, .",[1],"line-red, .",[1],"lines-red { color: #e54d42; }\n.",[1],"text-orange, .",[1],"line-orange, .",[1],"lines-orange { color: #f37b1d; }\n.",[1],"text-yellow, .",[1],"line-yellow, .",[1],"lines-yellow { color: #fbbd08; }\n.",[1],"text-olive, .",[1],"line-olive, .",[1],"lines-olive { color: #8dc63f; }\n.",[1],"text-green, .",[1],"line-green, .",[1],"lines-green { color: #39b54a; }\n.",[1],"text-cyan, .",[1],"line-cyan, .",[1],"lines-cyan { color: #1cbbb4; }\n.",[1],"text-blue, .",[1],"line-blue, .",[1],"lines-blue { color: #0081ff; }\n.",[1],"text-purple, .",[1],"line-purple, .",[1],"lines-purple { color: #6739b6; }\n.",[1],"text-mauve, .",[1],"line-mauve, .",[1],"lines-mauve { color: #9c26b0; }\n.",[1],"text-pink, .",[1],"line-pink, .",[1],"lines-pink { color: #e03997; }\n.",[1],"text-brown, .",[1],"line-brown, .",[1],"lines-brown { color: #a5673f; }\n.",[1],"text-grey, .",[1],"line-grey, .",[1],"lines-grey { color: #8799a3; }\n.",[1],"text-gray, .",[1],"line-gray, .",[1],"lines-gray { color: #aaaaaa; }\n.",[1],"text-black, .",[1],"line-black, .",[1],"lines-black { color: #333333; }\n.",[1],"text-white, .",[1],"line-white, .",[1],"lines-white { color: #ffffff; }\n@-webkit-keyframes cuIcon-spin { 0% { -webkit-transform: rotate(0); transform: rotate(0); }\n100% { -webkit-transform: rotate(359deg); transform: rotate(359deg); }\n}@keyframes cuIcon-spin { 0% { -webkit-transform: rotate(0); transform: rotate(0); }\n100% { -webkit-transform: rotate(359deg); transform: rotate(359deg); }\n}.",[1],"cuIconfont-spin { -webkit-animation: cuIcon-spin 2s infinite linear; animation: cuIcon-spin 2s infinite linear; display: inline-block; }\n.",[1],"cuIconfont-pulse { -webkit-animation: cuIcon-spin 1s infinite steps(8); animation: cuIcon-spin 1s infinite steps(8); display: inline-block; }\n[class*\x3d\x22cuIcon-\x22] { font-family: \x22cuIcon\x22; font-size: inherit; font-style: normal; }\n@font-face { font-family: \x22cuIcon\x22; src: url(\x27//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t\x3d1545239985831\x27); src: url(\x27//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t\x3d1545239985831#iefix\x27) format(\x27embedded-opentype\x27),\n		/* IE6-IE8 */\n		url(\x27data:application/x-font-woff;charset\x3dutf-8;base64,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\x27) format(\x27woff\x27),\n		url(\x27//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t\x3d1545239985831\x27) format(\x27truetype\x27),\n		/* chrome, firefox, opera, Safari, Android, iOS 4.2+*/\n		url(\x27//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t\x3d1545239985831#cuIconfont\x27) format(\x27svg\x27); }\n.",[1],"cuIcon-appreciate:before { content: \x22\\E644\x22; }\n.",[1],"cuIcon-check:before { content: \x22\\E645\x22; }\n.",[1],"cuIcon-close:before { content: \x22\\E646\x22; }\n.",[1],"cuIcon-edit:before { content: \x22\\E649\x22; }\n.",[1],"cuIcon-emoji:before { content: \x22\\E64A\x22; }\n.",[1],"cuIcon-favorfill:before { content: \x22\\E64B\x22; }\n.",[1],"cuIcon-favor:before { content: \x22\\E64C\x22; }\n.",[1],"cuIcon-loading:before { content: \x22\\E64F\x22; }\n.",[1],"cuIcon-locationfill:before { content: \x22\\E650\x22; }\n.",[1],"cuIcon-location:before { content: \x22\\E651\x22; }\n.",[1],"cuIcon-phone:before { content: \x22\\E652\x22; }\n.",[1],"cuIcon-roundcheckfill:before { content: \x22\\E656\x22; }\n.",[1],"cuIcon-roundcheck:before { content: \x22\\E657\x22; }\n.",[1],"cuIcon-roundclosefill:before { content: \x22\\E658\x22; }\n.",[1],"cuIcon-roundclose:before { content: \x22\\E659\x22; }\n.",[1],"cuIcon-roundrightfill:before { content: \x22\\E65A\x22; }\n.",[1],"cuIcon-roundright:before { content: \x22\\E65B\x22; }\n.",[1],"cuIcon-search:before { content: \x22\\E65C\x22; }\n.",[1],"cuIcon-taxi:before { content: \x22\\E65D\x22; }\n.",[1],"cuIcon-timefill:before { content: \x22\\E65E\x22; }\n.",[1],"cuIcon-time:before { content: \x22\\E65F\x22; }\n.",[1],"cuIcon-unfold:before { content: \x22\\E661\x22; }\n.",[1],"cuIcon-warnfill:before { content: \x22\\E662\x22; }\n.",[1],"cuIcon-warn:before { content: \x22\\E663\x22; }\n.",[1],"cuIcon-camerafill:before { content: \x22\\E664\x22; }\n.",[1],"cuIcon-camera:before { content: \x22\\E665\x22; }\n.",[1],"cuIcon-commentfill:before { content: \x22\\E666\x22; }\n.",[1],"cuIcon-comment:before { content: \x22\\E667\x22; }\n.",[1],"cuIcon-likefill:before { content: \x22\\E668\x22; }\n.",[1],"cuIcon-like:before { content: \x22\\E669\x22; }\n.",[1],"cuIcon-notificationfill:before { content: \x22\\E66A\x22; }\n.",[1],"cuIcon-notification:before { content: \x22\\E66B\x22; }\n.",[1],"cuIcon-order:before { content: \x22\\E66C\x22; }\n.",[1],"cuIcon-samefill:before { content: \x22\\E66D\x22; }\n.",[1],"cuIcon-same:before { content: \x22\\E66E\x22; }\n.",[1],"cuIcon-deliver:before { content: \x22\\E671\x22; }\n.",[1],"cuIcon-evaluate:before { content: \x22\\E672\x22; }\n.",[1],"cuIcon-pay:before { content: \x22\\E673\x22; }\n.",[1],"cuIcon-send:before { content: \x22\\E675\x22; }\n.",[1],"cuIcon-shop:before { content: \x22\\E676\x22; }\n.",[1],"cuIcon-ticket:before { content: \x22\\E677\x22; }\n.",[1],"cuIcon-back:before { content: \x22\\E679\x22; }\n.",[1],"cuIcon-cascades:before { content: \x22\\E67C\x22; }\n.",[1],"cuIcon-discover:before { content: \x22\\E67E\x22; }\n.",[1],"cuIcon-list:before { content: \x22\\E682\x22; }\n.",[1],"cuIcon-more:before { content: \x22\\E684\x22; }\n.",[1],"cuIcon-scan:before { content: \x22\\E689\x22; }\n.",[1],"cuIcon-settings:before { content: \x22\\E68A\x22; }\n.",[1],"cuIcon-questionfill:before { content: \x22\\E690\x22; }\n.",[1],"cuIcon-question:before { content: \x22\\E691\x22; }\n.",[1],"cuIcon-shopfill:before { content: \x22\\E697\x22; }\n.",[1],"cuIcon-form:before { content: \x22\\E699\x22; }\n.",[1],"cuIcon-pic:before { content: \x22\\E69B\x22; }\n.",[1],"cuIcon-filter:before { content: \x22\\E69C\x22; }\n.",[1],"cuIcon-footprint:before { content: \x22\\E69D\x22; }\n.",[1],"cuIcon-top:before { content: \x22\\E69E\x22; }\n.",[1],"cuIcon-pulldown:before { content: \x22\\E69F\x22; }\n.",[1],"cuIcon-pullup:before { content: \x22\\E6A0\x22; }\n.",[1],"cuIcon-right:before { content: \x22\\E6A3\x22; }\n.",[1],"cuIcon-refresh:before { content: \x22\\E6A4\x22; }\n.",[1],"cuIcon-moreandroid:before { content: \x22\\E6A5\x22; }\n.",[1],"cuIcon-deletefill:before { content: \x22\\E6A6\x22; }\n.",[1],"cuIcon-refund:before { content: \x22\\E6AC\x22; }\n.",[1],"cuIcon-cart:before { content: \x22\\E6AF\x22; }\n.",[1],"cuIcon-qrcode:before { content: \x22\\E6B0\x22; }\n.",[1],"cuIcon-remind:before { content: \x22\\E6B2\x22; }\n.",[1],"cuIcon-delete:before { content: \x22\\E6B4\x22; }\n.",[1],"cuIcon-profile:before { content: \x22\\E6B7\x22; }\n.",[1],"cuIcon-home:before { content: \x22\\E6B8\x22; }\n.",[1],"cuIcon-cartfill:before { content: \x22\\E6B9\x22; }\n.",[1],"cuIcon-discoverfill:before { content: \x22\\E6BA\x22; }\n.",[1],"cuIcon-homefill:before { content: \x22\\E6BB\x22; }\n.",[1],"cuIcon-message:before { content: \x22\\E6BC\x22; }\n.",[1],"cuIcon-addressbook:before { content: \x22\\E6BD\x22; }\n.",[1],"cuIcon-link:before { content: \x22\\E6BF\x22; }\n.",[1],"cuIcon-lock:before { content: \x22\\E6C0\x22; }\n.",[1],"cuIcon-unlock:before { content: \x22\\E6C2\x22; }\n.",[1],"cuIcon-vip:before { content: \x22\\E6C3\x22; }\n.",[1],"cuIcon-weibo:before { content: \x22\\E6C4\x22; }\n.",[1],"cuIcon-activity:before { content: \x22\\E6C5\x22; }\n.",[1],"cuIcon-friendaddfill:before { content: \x22\\E6C9\x22; }\n.",[1],"cuIcon-friendadd:before { content: \x22\\E6CA\x22; }\n.",[1],"cuIcon-friendfamous:before { content: \x22\\E6CB\x22; }\n.",[1],"cuIcon-friend:before { content: \x22\\E6CC\x22; }\n.",[1],"cuIcon-goods:before { content: \x22\\E6CD\x22; }\n.",[1],"cuIcon-selection:before { content: \x22\\E6CE\x22; }\n.",[1],"cuIcon-explore:before { content: \x22\\E6D2\x22; }\n.",[1],"cuIcon-present:before { content: \x22\\E6D3\x22; }\n.",[1],"cuIcon-squarecheckfill:before { content: \x22\\E6D4\x22; }\n.",[1],"cuIcon-square:before { content: \x22\\E6D5\x22; }\n.",[1],"cuIcon-squarecheck:before { content: \x22\\E6D6\x22; }\n.",[1],"cuIcon-round:before { content: \x22\\E6D7\x22; }\n.",[1],"cuIcon-roundaddfill:before { content: \x22\\E6D8\x22; }\n.",[1],"cuIcon-roundadd:before { content: \x22\\E6D9\x22; }\n.",[1],"cuIcon-add:before { content: \x22\\E6DA\x22; }\n.",[1],"cuIcon-notificationforbidfill:before { content: \x22\\E6DB\x22; }\n.",[1],"cuIcon-explorefill:before { content: \x22\\E6DD\x22; }\n.",[1],"cuIcon-fold:before { content: \x22\\E6DE\x22; }\n.",[1],"cuIcon-game:before { content: \x22\\E6DF\x22; }\n.",[1],"cuIcon-redpacket:before { content: \x22\\E6E0\x22; }\n.",[1],"cuIcon-selectionfill:before { content: \x22\\E6E1\x22; }\n.",[1],"cuIcon-similar:before { content: \x22\\E6E2\x22; }\n.",[1],"cuIcon-appreciatefill:before { content: \x22\\E6E3\x22; }\n.",[1],"cuIcon-infofill:before { content: \x22\\E6E4\x22; }\n.",[1],"cuIcon-info:before { content: \x22\\E6E5\x22; }\n.",[1],"cuIcon-forwardfill:before { content: \x22\\E6EA\x22; }\n.",[1],"cuIcon-forward:before { content: \x22\\E6EB\x22; }\n.",[1],"cuIcon-rechargefill:before { content: \x22\\E6EC\x22; }\n.",[1],"cuIcon-recharge:before { content: \x22\\E6ED\x22; }\n.",[1],"cuIcon-vipcard:before { content: \x22\\E6EE\x22; }\n.",[1],"cuIcon-voice:before { content: \x22\\E6EF\x22; }\n.",[1],"cuIcon-voicefill:before { content: \x22\\E6F0\x22; }\n.",[1],"cuIcon-friendfavor:before { content: \x22\\E6F1\x22; }\n.",[1],"cuIcon-wifi:before { content: \x22\\E6F2\x22; }\n.",[1],"cuIcon-share:before { content: \x22\\E6F3\x22; }\n.",[1],"cuIcon-wefill:before { content: \x22\\E6F4\x22; }\n.",[1],"cuIcon-we:before { content: \x22\\E6F5\x22; }\n.",[1],"cuIcon-lightauto:before { content: \x22\\E6F6\x22; }\n.",[1],"cuIcon-lightforbid:before { content: \x22\\E6F7\x22; }\n.",[1],"cuIcon-lightfill:before { content: \x22\\E6F8\x22; }\n.",[1],"cuIcon-camerarotate:before { content: \x22\\E6F9\x22; }\n.",[1],"cuIcon-light:before { content: \x22\\E6FA\x22; }\n.",[1],"cuIcon-barcode:before { content: \x22\\E6FB\x22; }\n.",[1],"cuIcon-flashlightclose:before { content: \x22\\E6FC\x22; }\n.",[1],"cuIcon-flashlightopen:before { content: \x22\\E6FD\x22; }\n.",[1],"cuIcon-searchlist:before { content: \x22\\E6FE\x22; }\n.",[1],"cuIcon-service:before { content: \x22\\E6FF\x22; }\n.",[1],"cuIcon-sort:before { content: \x22\\E700\x22; }\n.",[1],"cuIcon-down:before { content: \x22\\E703\x22; }\n.",[1],"cuIcon-mobile:before { content: \x22\\E704\x22; }\n.",[1],"cuIcon-mobilefill:before { content: \x22\\E705\x22; }\n.",[1],"cuIcon-copy:before { content: \x22\\E706\x22; }\n.",[1],"cuIcon-countdownfill:before { content: \x22\\E707\x22; }\n.",[1],"cuIcon-countdown:before { content: \x22\\E708\x22; }\n.",[1],"cuIcon-noticefill:before { content: \x22\\E709\x22; }\n.",[1],"cuIcon-notice:before { content: \x22\\E70A\x22; }\n.",[1],"cuIcon-upstagefill:before { content: \x22\\E70E\x22; }\n.",[1],"cuIcon-upstage:before { content: \x22\\E70F\x22; }\n.",[1],"cuIcon-babyfill:before { content: \x22\\E710\x22; }\n.",[1],"cuIcon-baby:before { content: \x22\\E711\x22; }\n.",[1],"cuIcon-brandfill:before { content: \x22\\E712\x22; }\n.",[1],"cuIcon-brand:before { content: \x22\\E713\x22; }\n.",[1],"cuIcon-choicenessfill:before { content: \x22\\E714\x22; }\n.",[1],"cuIcon-choiceness:before { content: \x22\\E715\x22; }\n.",[1],"cuIcon-clothesfill:before { content: \x22\\E716\x22; }\n.",[1],"cuIcon-clothes:before { content: \x22\\E717\x22; }\n.",[1],"cuIcon-creativefill:before { content: \x22\\E718\x22; }\n.",[1],"cuIcon-creative:before { content: \x22\\E719\x22; }\n.",[1],"cuIcon-female:before { content: \x22\\E71A\x22; }\n.",[1],"cuIcon-keyboard:before { content: \x22\\E71B\x22; }\n.",[1],"cuIcon-male:before { content: \x22\\E71C\x22; }\n.",[1],"cuIcon-newfill:before { content: \x22\\E71D\x22; }\n.",[1],"cuIcon-new:before { content: \x22\\E71E\x22; }\n.",[1],"cuIcon-pullleft:before { content: \x22\\E71F\x22; }\n.",[1],"cuIcon-pullright:before { content: \x22\\E720\x22; }\n.",[1],"cuIcon-rankfill:before { content: \x22\\E721\x22; }\n.",[1],"cuIcon-rank:before { content: \x22\\E722\x22; }\n.",[1],"cuIcon-bad:before { content: \x22\\E723\x22; }\n.",[1],"cuIcon-cameraadd:before { content: \x22\\E724\x22; }\n.",[1],"cuIcon-focus:before { content: \x22\\E725\x22; }\n.",[1],"cuIcon-friendfill:before { content: \x22\\E726\x22; }\n.",[1],"cuIcon-cameraaddfill:before { content: \x22\\E727\x22; }\n.",[1],"cuIcon-apps:before { content: \x22\\E729\x22; }\n.",[1],"cuIcon-paintfill:before { content: \x22\\E72A\x22; }\n.",[1],"cuIcon-paint:before { content: \x22\\E72B\x22; }\n.",[1],"cuIcon-picfill:before { content: \x22\\E72C\x22; }\n.",[1],"cuIcon-refresharrow:before { content: \x22\\E72D\x22; }\n.",[1],"cuIcon-colorlens:before { content: \x22\\E6E6\x22; }\n.",[1],"cuIcon-markfill:before { content: \x22\\E730\x22; }\n.",[1],"cuIcon-mark:before { content: \x22\\E731\x22; }\n.",[1],"cuIcon-presentfill:before { content: \x22\\E732\x22; }\n.",[1],"cuIcon-repeal:before { content: \x22\\E733\x22; }\n.",[1],"cuIcon-album:before { content: \x22\\E734\x22; }\n.",[1],"cuIcon-peoplefill:before { content: \x22\\E735\x22; }\n.",[1],"cuIcon-people:before { content: \x22\\E736\x22; }\n.",[1],"cuIcon-servicefill:before { content: \x22\\E737\x22; }\n.",[1],"cuIcon-repair:before { content: \x22\\E738\x22; }\n.",[1],"cuIcon-file:before { content: \x22\\E739\x22; }\n.",[1],"cuIcon-repairfill:before { content: \x22\\E73A\x22; }\n.",[1],"cuIcon-taoxiaopu:before { content: \x22\\E73B\x22; }\n.",[1],"cuIcon-weixin:before { content: \x22\\E612\x22; }\n.",[1],"cuIcon-attentionfill:before { content: \x22\\E73C\x22; }\n.",[1],"cuIcon-attention:before { content: \x22\\E73D\x22; }\n.",[1],"cuIcon-commandfill:before { content: \x22\\E73E\x22; }\n.",[1],"cuIcon-command:before { content: \x22\\E73F\x22; }\n.",[1],"cuIcon-communityfill:before { content: \x22\\E740\x22; }\n.",[1],"cuIcon-community:before { content: \x22\\E741\x22; }\n.",[1],"cuIcon-read:before { content: \x22\\E742\x22; }\n.",[1],"cuIcon-calendar:before { content: \x22\\E74A\x22; }\n.",[1],"cuIcon-cut:before { content: \x22\\E74B\x22; }\n.",[1],"cuIcon-magic:before { content: \x22\\E74C\x22; }\n.",[1],"cuIcon-backwardfill:before { content: \x22\\E74D\x22; }\n.",[1],"cuIcon-playfill:before { content: \x22\\E74F\x22; }\n.",[1],"cuIcon-stop:before { content: \x22\\E750\x22; }\n.",[1],"cuIcon-tagfill:before { content: \x22\\E751\x22; }\n.",[1],"cuIcon-tag:before { content: \x22\\E752\x22; }\n.",[1],"cuIcon-group:before { content: \x22\\E753\x22; }\n.",[1],"cuIcon-all:before { content: \x22\\E755\x22; }\n.",[1],"cuIcon-backdelete:before { content: \x22\\E756\x22; }\n.",[1],"cuIcon-hotfill:before { content: \x22\\E757\x22; }\n.",[1],"cuIcon-hot:before { content: \x22\\E758\x22; }\n.",[1],"cuIcon-post:before { content: \x22\\E759\x22; }\n.",[1],"cuIcon-radiobox:before { content: \x22\\E75B\x22; }\n.",[1],"cuIcon-rounddown:before { content: \x22\\E75C\x22; }\n.",[1],"cuIcon-upload:before { content: \x22\\E75D\x22; }\n.",[1],"cuIcon-writefill:before { content: \x22\\E760\x22; }\n.",[1],"cuIcon-write:before { content: \x22\\E761\x22; }\n.",[1],"cuIcon-radioboxfill:before { content: \x22\\E763\x22; }\n.",[1],"cuIcon-punch:before { content: \x22\\E764\x22; }\n.",[1],"cuIcon-shake:before { content: \x22\\E765\x22; }\n.",[1],"cuIcon-move:before { content: \x22\\E768\x22; }\n.",[1],"cuIcon-safe:before { content: \x22\\E769\x22; }\n.",[1],"cuIcon-activityfill:before { content: \x22\\E775\x22; }\n.",[1],"cuIcon-crownfill:before { content: \x22\\E776\x22; }\n.",[1],"cuIcon-crown:before { content: \x22\\E777\x22; }\n.",[1],"cuIcon-goodsfill:before { content: \x22\\E778\x22; }\n.",[1],"cuIcon-messagefill:before { content: \x22\\E779\x22; }\n.",[1],"cuIcon-profilefill:before { content: \x22\\E77A\x22; }\n.",[1],"cuIcon-sound:before { content: \x22\\E77B\x22; }\n.",[1],"cuIcon-sponsorfill:before { content: \x22\\E77C\x22; }\n.",[1],"cuIcon-sponsor:before { content: \x22\\E77D\x22; }\n.",[1],"cuIcon-upblock:before { content: \x22\\E77E\x22; }\n.",[1],"cuIcon-weblock:before { content: \x22\\E77F\x22; }\n.",[1],"cuIcon-weunblock:before { content: \x22\\E780\x22; }\n.",[1],"cuIcon-my:before { content: \x22\\E78B\x22; }\n.",[1],"cuIcon-myfill:before { content: \x22\\E78C\x22; }\n.",[1],"cuIcon-emojifill:before { content: \x22\\E78D\x22; }\n.",[1],"cuIcon-emojiflashfill:before { content: \x22\\E78E\x22; }\n.",[1],"cuIcon-flashbuyfill:before { content: \x22\\E78F\x22; }\n.",[1],"cuIcon-text:before { content: \x22\\E791\x22; }\n.",[1],"cuIcon-goodsfavor:before { content: \x22\\E794\x22; }\n.",[1],"cuIcon-musicfill:before { content: \x22\\E795\x22; }\n.",[1],"cuIcon-musicforbidfill:before { content: \x22\\E796\x22; }\n.",[1],"cuIcon-card:before { content: \x22\\E624\x22; }\n.",[1],"cuIcon-triangledownfill:before { content: \x22\\E79B\x22; }\n.",[1],"cuIcon-triangleupfill:before { content: \x22\\E79C\x22; }\n.",[1],"cuIcon-roundleftfill-copy:before { content: \x22\\E79E\x22; }\n.",[1],"cuIcon-font:before { content: \x22\\E76A\x22; }\n.",[1],"cuIcon-title:before { content: \x22\\E82F\x22; }\n.",[1],"cuIcon-recordfill:before { content: \x22\\E7A4\x22; }\n.",[1],"cuIcon-record:before { content: \x22\\E7A6\x22; }\n.",[1],"cuIcon-cardboardfill:before { content: \x22\\E7A9\x22; }\n.",[1],"cuIcon-cardboard:before { content: \x22\\E7AA\x22; }\n.",[1],"cuIcon-formfill:before { content: \x22\\E7AB\x22; }\n.",[1],"cuIcon-coin:before { content: \x22\\E7AC\x22; }\n.",[1],"cuIcon-cardboardforbid:before { content: \x22\\E7AF\x22; }\n.",[1],"cuIcon-circlefill:before { content: \x22\\E7B0\x22; }\n.",[1],"cuIcon-circle:before { content: \x22\\E7B1\x22; }\n.",[1],"cuIcon-attentionforbid:before { content: \x22\\E7B2\x22; }\n.",[1],"cuIcon-attentionforbidfill:before { content: \x22\\E7B3\x22; }\n.",[1],"cuIcon-attentionfavorfill:before { content: \x22\\E7B4\x22; }\n.",[1],"cuIcon-attentionfavor:before { content: \x22\\E7B5\x22; }\n.",[1],"cuIcon-titles:before { content: \x22\\E701\x22; }\n.",[1],"cuIcon-icloading:before { content: \x22\\E67A\x22; }\n.",[1],"cuIcon-full:before { content: \x22\\E7BC\x22; }\n.",[1],"cuIcon-mail:before { content: \x22\\E7BD\x22; }\n.",[1],"cuIcon-peoplelist:before { content: \x22\\E7BE\x22; }\n.",[1],"cuIcon-goodsnewfill:before { content: \x22\\E7BF\x22; }\n.",[1],"cuIcon-goodsnew:before { content: \x22\\E7C0\x22; }\n.",[1],"cuIcon-medalfill:before { content: \x22\\E7C1\x22; }\n.",[1],"cuIcon-medal:before { content: \x22\\E7C2\x22; }\n.",[1],"cuIcon-newsfill:before { content: \x22\\E7C3\x22; }\n.",[1],"cuIcon-newshotfill:before { content: \x22\\E7C4\x22; }\n.",[1],"cuIcon-newshot:before { content: \x22\\E7C5\x22; }\n.",[1],"cuIcon-news:before { content: \x22\\E7C6\x22; }\n.",[1],"cuIcon-videofill:before { content: \x22\\E7C7\x22; }\n.",[1],"cuIcon-video:before { content: \x22\\E7C8\x22; }\n.",[1],"cuIcon-exit:before { content: \x22\\E7CB\x22; }\n.",[1],"cuIcon-skinfill:before { content: \x22\\E7CC\x22; }\n.",[1],"cuIcon-skin:before { content: \x22\\E7CD\x22; }\n.",[1],"cuIcon-moneybagfill:before { content: \x22\\E7CE\x22; }\n.",[1],"cuIcon-usefullfill:before { content: \x22\\E7CF\x22; }\n.",[1],"cuIcon-usefull:before { content: \x22\\E7D0\x22; }\n.",[1],"cuIcon-moneybag:before { content: \x22\\E7D1\x22; }\n.",[1],"cuIcon-redpacket_fill:before { content: \x22\\E7D3\x22; }\n.",[1],"cuIcon-subscription:before { content: \x22\\E7D4\x22; }\n.",[1],"cuIcon-loading1:before { content: \x22\\E633\x22; }\n.",[1],"cuIcon-github:before { content: \x22\\E692\x22; }\n.",[1],"cuIcon-global:before { content: \x22\\E7EB\x22; }\n.",[1],"cuIcon-settingsfill:before { content: \x22\\E6AB\x22; }\n.",[1],"cuIcon-back_android:before { content: \x22\\E7ED\x22; }\n.",[1],"cuIcon-expressman:before { content: \x22\\E7EF\x22; }\n.",[1],"cuIcon-evaluate_fill:before { content: \x22\\E7F0\x22; }\n.",[1],"cuIcon-group_fill:before { content: \x22\\E7F5\x22; }\n.",[1],"cuIcon-play_forward_fill:before { content: \x22\\E7F6\x22; }\n.",[1],"cuIcon-deliver_fill:before { content: \x22\\E7F7\x22; }\n.",[1],"cuIcon-notice_forbid_fill:before { content: \x22\\E7F8\x22; }\n.",[1],"cuIcon-fork:before { content: \x22\\E60C\x22; }\n.",[1],"cuIcon-pick:before { content: \x22\\E7FA\x22; }\n.",[1],"cuIcon-wenzi:before { content: \x22\\E6A7\x22; }\n.",[1],"cuIcon-ellipse:before { content: \x22\\E600\x22; }\n.",[1],"cuIcon-qr_code:before { content: \x22\\E61B\x22; }\n.",[1],"cuIcon-dianhua:before { content: \x22\\E64D\x22; }\n.",[1],"cuIcon-cuIcon:before { content: \x22\\E602\x22; }\n.",[1],"cuIcon-loading2:before { content: \x22\\E7F1\x22; }\n.",[1],"cuIcon-btn:before { content: \x22\\E601\x22; }\n.",[1],"nav-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: 0px ",[0,40]," 0px; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"nav-li { padding: ",[0,30],"; border-radius: ",[0,12],"; width: 45%; margin: 0 2.5% ",[0,40],"; background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png); background-size: cover; background-position: center; position: relative; z-index: 1; }\n.",[1],"nav-li::after { content: \x22\x22; position: absolute; z-index: -1; background-color: inherit; width: 100%; height: 100%; left: 0; bottom: -10%; border-radius: ",[0,10],"; opacity: 0.2; -webkit-transform: scale(0.9, 0.9); -ms-transform: scale(0.9, 0.9); transform: scale(0.9, 0.9); }\n.",[1],"nav-li.",[1],"cur { color: #fff; background: rgb(94, 185, 94); -webkit-box-shadow: ",[0,4]," ",[0,4]," ",[0,6]," rgba(94, 185, 94, 0.4); box-shadow: ",[0,4]," ",[0,4]," ",[0,6]," rgba(94, 185, 94, 0.4); }\n.",[1],"nav-title { font-size: ",[0,32],"; font-weight: 300; }\n.",[1],"nav-title::first-letter { font-size: ",[0,40],"; margin-right: ",[0,4],"; }\n.",[1],"nav-name { font-size: ",[0,28],"; text-transform: Capitalize; margin-top: ",[0,20],"; position: relative; }\n.",[1],"nav-name::before { content: \x22\x22; position: absolute; display: block; width: ",[0,40],"; height: ",[0,6],"; background: #fff; bottom: 0; right: 0; opacity: 0.5; }\n.",[1],"nav-name::after { content: \x22\x22; position: absolute; display: block; width: ",[0,100],"; height: 1px; background: #fff; bottom: 0; right: ",[0,40],"; opacity: 0.3; }\n.",[1],"nav-name::first-letter { font-weight: bold; font-size: ",[0,36],"; margin-right: 1px; }\n.",[1],"nav-li wx-text { position: absolute; right: ",[0,30],"; top: ",[0,30],"; font-size: ",[0,52],"; width: ",[0,60],"; height: ",[0,60],"; text-align: center; line-height: ",[0,60],"; }\n.",[1],"text-light { font-weight: 300; }\n@keyframes show { 0% { -webkit-transform: translateY(-50px); transform: translateY(-50px); }\n60% { -webkit-transform: translateY(",[0,40],"); transform: translateY(",[0,40],"); }\n100% { -webkit-transform: translateY(0px); transform: translateY(0px); }\n}@-webkit-keyframes show { 0% { -webkit-transform: translateY(-50px); transform: translateY(-50px); }\n60% { -webkit-transform: translateY(",[0,40],"); transform: translateY(",[0,40],"); }\n100% { -webkit-transform: translateY(0px); transform: translateY(0px); }\n}",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:3891:1)",{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:3891:1)",{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.wxss']=undefined;    
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['colorui/components/newscard.wxss']=undefined;    
__wxAppCode__['colorui/components/newscard.wxml']=$gwx('./colorui/components/newscard.wxml');

__wxAppCode__['components/im-chat/chatinput.wxss']=setCssToHead([".",[1],"footer { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; width: 100%; height: ",[0,80],"; min-height: ",[0,80],"; border-top: solid 1px #bbb; overflow: hidden; padding: ",[0,5],"; background-color: #F4F5F6; }\n.",[1],"footer-left { width: ",[0,80],"; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"footer-right { width: ",[0,120],"; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; color: #1482D1; }\n.",[1],"footer-center { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; padding-left: ",[0,20],"; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"footer-center .",[1],"input-text { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; background: #fff; padding: ",[0,10]," !important; font-family: verdana !important; overflow: hidden; border-radius: ",[0,15],"; }\n.",[1],"footer-right .",[1],"send-comment{ background-color: #007AFF; text-align: center; line-height: ",[0,60],"; color: #FFFFFF; width: ",[0,80],"; height: ",[0,60],"; border-radius: 5px; font-size: 10px; }\n",],undefined,{path:"./components/im-chat/chatinput.wxss"});    
__wxAppCode__['components/im-chat/chatinput.wxml']=$gwx('./components/im-chat/chatinput.wxml');

__wxAppCode__['components/you-scroll.wxss']=setCssToHead([".",[1],"you-scroll.",[1],"data-v-647ba504 { width: 100%; height: 100%; overflow: hidden; position: relative; }\n.",[1],"you-scroll .",[1],"pullDown.",[1],"data-v-647ba504 { width: 100%; height: 40px; line-height: 50px; text-align: center; font-size: 14px; overflow: hidden; -webkit-transform: translateY(-100%); -ms-transform: translateY(-100%); transform: translateY(-100%); position: absolute; top: -40px; left: 0; }\n.",[1],"you-scroll .",[1],"pullDown .",[1],"down-icon.",[1],"data-v-647ba504 { width: 40px; height: 32px; display: inline-block; vertical-align: middle; }\n.",[1],"you-scroll .",[1],"pullDown .",[1],"animate.",[1],"data-v-647ba504 { -webkit-animation: scaleIcon-data-v-647ba504 1s infinite linear; animation: scaleIcon-data-v-647ba504 1s infinite linear; }\n.",[1],"you-scroll .",[1],"pullDown .",[1],"_span.",[1],"data-v-647ba504 { white-space: nowrap; overflow: hidden; display: inline-block; vertical-align: middle; }\n.",[1],"you-scroll .",[1],"you-scroll-inner.",[1],"data-v-647ba504 { width: 100%; height: 100%; overflow: hidden; position: relative; }\n.",[1],"you-scroll-content.",[1],"data-v-647ba504 { overflow: hidden; }\n@-webkit-keyframes scaleIcon-data-v-647ba504 { 0% { -webkit-transform: scaleY(1); transform: scaleY(1); }\n40% { -webkit-transform: scaleY(0.8); transform: scaleY(0.8); }\n80% { -webkit-transform: scaleY(0.9); transform: scaleY(0.9); }\n100% { -webkit-transform: scaleY(1); transform: scaleY(1); }\n}@keyframes scaleIcon-data-v-647ba504 { 0% { -webkit-transform: scaleY(1); transform: scaleY(1); }\n40% { -webkit-transform: scaleY(0.8); transform: scaleY(0.8); }\n80% { -webkit-transform: scaleY(0.9); transform: scaleY(0.9); }\n100% { -webkit-transform: scaleY(1); transform: scaleY(1); }\n}",],undefined,{path:"./components/you-scroll.wxss"});    
__wxAppCode__['components/you-scroll.wxml']=$gwx('./components/you-scroll.wxml');

__wxAppCode__['pages/home/home.wxss']=setCssToHead([".",[1],"page { height: 100vh; }\n",],undefined,{path:"./pages/home/home.wxss"});    
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/index/index.wxss']=undefined;    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/person/home.wxss']=setCssToHead(["body { width: 100%; height: 100%; background-color: white; }\n@charset \x22UTF-8\x22;\n.",[1],"page_content.",[1],"data-v-80ced952 { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"header.",[1],"data-v-80ced952 { padding-top: var(--status-bar-height); width: 95%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-left: 10px; margin-right: 10px; }\n.",[1],"header .",[1],"btn.",[1],"data-v-80ced952 { width: 27px; height: 27px; }\n.",[1],"header .",[1],"title.",[1],"data-v-80ced952 { font-size: 18px; font-weight: 500; color: #2b2b2b; line-height: 41px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"logo.",[1],"data-v-80ced952 { margin-top: 10px; width: 100px; height: 100px; }\n.",[1],"swiper.",[1],"data-v-80ced952 { width: 100%; margin-top: 10px; }\n.",[1],"swiper .",[1],"swiper-item.",[1],"data-v-80ced952 { border-radius: 16px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-left: 10px; margin-right: 10px; }\n.",[1],"swiper .",[1],"big.",[1],"data-v-80ced952 { margin-top: 0; }\n.",[1],"swiper .",[1],"big .",[1],"img.",[1],"data-v-80ced952 { margin-top: 15px; width: 40px; height: 40px; }\n.",[1],"swiper .",[1],"big .",[1],"title.",[1],"data-v-80ced952 { font-size: 25px; font-weight: 500; color: white; line-height: 41px; }\n.",[1],"swiper .",[1],"big .",[1],"sub_title.",[1],"data-v-80ced952 { font-size: 11px; font-weight: 300; color: white; line-height: 41px; }\n.",[1],"swiper .",[1],"small.",[1],"data-v-80ced952 { margin-top: 14px; height: 75%; }\n.",[1],"swiper .",[1],"small .",[1],"img.",[1],"data-v-80ced952 { margin-top: 5px; width: 25px; height: 25px; }\n.",[1],"swiper .",[1],"small .",[1],"title.",[1],"data-v-80ced952 { font-size: 15px; font-weight: 500; color: white; line-height: 31px; }\n.",[1],"swiper .",[1],"small .",[1],"sub_title.",[1],"data-v-80ced952 { font-size: 7px; font-weight: 300; color: white; }\n.",[1],"title_line.",[1],"data-v-80ced952 { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"title_line .",[1],"title.",[1],"data-v-80ced952 { margin-left: 20px; font-size: 18px; font-weight: 500; color: #333333; line-height: 41px; }\n.",[1],"title_line .",[1],"more.",[1],"data-v-80ced952 { margin-right: 20px; font-size: 10px; font-weight: 300; color: #999999; line-height: 41px; }\n.",[1],"slider.",[1],"data-v-80ced952 { white-space: nowrap; width: 100%; }\n.",[1],"slider .",[1],"s_item.",[1],"data-v-80ced952 { display: inline-block; width: 35%; margin-left: 20px; margin-bottom: 10px; }\n.",[1],"slider .",[1],"s_item .",[1],"content.",[1],"data-v-80ced952 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-radius: 8px; background: white; margin-top: 5px; -webkit-box-shadow: 0px 2px 6px 0px rgba(103, 103, 103, 0.2); box-shadow: 0px 2px 6px 0px rgba(103, 103, 103, 0.2); }\n.",[1],"slider .",[1],"s_item .",[1],"content .",[1],"img.",[1],"data-v-80ced952 { width: 103px; height: 105px; }\n.",[1],"slider .",[1],"s_item .",[1],"content .",[1],"name.",[1],"data-v-80ced952 { margin-top: -10px; font-size: 12px; font-weight: 400; color: #333333; line-height: 21px; }\n.",[1],"slider .",[1],"s_item .",[1],"content .",[1],"desc.",[1],"data-v-80ced952 { font-size: 10px; font-weight: 400; color: #999999; line-height: 21px; }\n.",[1],"slider .",[1],"s_item .",[1],"content .",[1],"btn.",[1],"data-v-80ced952 { width: 80px; height: 30px; margin-bottom: 10px; background: -o-linear-gradient(356deg, #c0a069, #e9d5ac); background: linear-gradient(94deg, #c0a069, #e9d5ac); -webkit-box-shadow: 0px 9px 28px 0px rgba(195, 164, 110, 0.23); box-shadow: 0px 9px 28px 0px rgba(195, 164, 110, 0.23); border-radius: 29px; font-size: 12px; font-weight: 400; color: white; line-height: 21px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"welfare.",[1],"data-v-80ced952 { width: 92%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; background: white; -webkit-box-shadow: 0px 1px 21px 0px rgba(103, 103, 103, 0.2); box-shadow: 0px 1px 21px 0px rgba(103, 103, 103, 0.2); border-radius: 10px; margin-bottom: 10px; }\n.",[1],"welfare .",[1],"item.",[1],"data-v-80ced952 { padding: 10px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"welfare .",[1],"item .",[1],"border.",[1],"data-v-80ced952 { margin-top: 5px; border: 2px solid #c9ac7a; border-radius: 50%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"welfare .",[1],"item .",[1],"border .",[1],"img.",[1],"data-v-80ced952 { width: 40px; height: 40px; }\n.",[1],"welfare .",[1],"item .",[1],"txt.",[1],"data-v-80ced952 { margin-top: 5px; font-size: 10px; font-weight: 300; color: #999999; }\n",],undefined,{path:"./pages/person/home.wxss"});    
__wxAppCode__['pages/person/home.wxml']=$gwx('./pages/person/home.wxml');

__wxAppCode__['pages/service/data_recording.wxss']=setCssToHead([".",[1],"cu-form-group .",[1],"title { min-width: calc(4em + 15px); }\n",],undefined,{path:"./pages/service/data_recording.wxss"});    
__wxAppCode__['pages/service/data_recording.wxml']=$gwx('./pages/service/data_recording.wxml');

__wxAppCode__['pages/service/home.wxss']=setCssToHead([".",[1],"page { height: 100vh; }\n.",[1],"cardTitle { color: #fff; padding: ",[0,90]," ",[0,60],"; font-size: ",[0,40],"; font-weight: 300; -webkit-transform: skew(-10deg, 0deg); -ms-transform: skew(-10deg, 0deg); transform: skew(-10deg, 0deg); position: relative; text-shadow: 0px 0px ",[0,6]," rgba(0, 0, 0, 0.3) }\n.",[1],"cardTitle::before { content: \x22\x22; position: absolute; width: ",[0,60],"; height: ",[0,6],"; border-radius: ",[0,20],"; background-color: #fff; display: block; top: ",[0,60],"; left: ",[0,50],"; -webkit-transform: skew(10deg, 0deg); -ms-transform: skew(10deg, 0deg); transform: skew(10deg, 0deg); }\n.",[1],"cardTitle::after { content: \x22\x22; position: absolute; width: ",[0,140],"; border-radius: ",[0,6],"; height: ",[0,24],"; background-color: #fff; display: block; bottom: ",[0,76],"; left: ",[0,90],"; -webkit-transform: skew(10deg, 0deg); -ms-transform: skew(10deg, 0deg); transform: skew(10deg, 0deg); opacity: 0.1; }\n",],undefined,{path:"./pages/service/home.wxss"});    
__wxAppCode__['pages/service/home.wxml']=$gwx('./pages/service/home.wxml');

__wxAppCode__['pages/service/live.wxss']=setCssToHead([".",[1],"liked.",[1],"data-v-3c79173a{ position: relative; margin-right: ",[0,10],"; width: ",[0,34],"; height: ",[0,34],"; }\n.",[1],"post-username.",[1],"data-v-3c79173a{ font-size:",[0,32],"; font-weight: 600; color: #36648B; }\n.",[1],"gallery_img.",[1],"data-v-3c79173a { width: 100%; height: 100% }\n.",[1],"header.",[1],"data-v-3c79173a { width: 100%; height: 100%; z-index: 10; border-radius: ",[0,40],"; }\n.",[1],"publish.",[1],"data-v-3c79173a { position: absolute; top: ",[0,20],"; right: ",[0,20],"; }\n.",[1],"post_header.",[1],"data-v-3c79173a { width: ",[0,90]," !important; height: ",[0,90]," !important; border-radius: ",[0,10],"; margin-top: ",[0,8],"; }\n#moments.data-v-3c79173a { background: #fff; }\n#moments .",[1],"home-pic.",[1],"data-v-3c79173a { width: 100%; position: relative; height: ",[0,500],"; z-index: 5; background: url(data:image/jpg;base64,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KWkpkhiiiigBppKcaSgBKSlooGG3PekI7UpzjpRg0hDM44op3WkxkUANopcUUwEopaKAGUlONJigQlJS4ooATFGKKKCgxSYpaMUANIFIR604jpmg0DG59qTPtTh2puM55oEBPpSde1LgY6U3HPpQSB4HQ0BsnoaUg8ZajAz1NBRtUtGKXFYGglKBS4oApgFFLijFACUUuKMUALiilxS4pAJS0YpcUAJSiilFMoAKXFApaAFoooxQIKKMUYoAWilxRigBKWjFGKAFFLRijFAgooxRigQUtFFABS0UtMAopaKYCUDrS0tABRS0UAJRS0UAJiloxS4oASlpcUYoAKKWigQlFLRQAtFO/Cj8KAG0U78KPwoAKKWigBKKWigAop1FADaKdRQAlFLRQAlFLS0AJRS0UCCiiigApaKUCmAClPSilpAR4oxTsUmKAExRilxRigBMUYpcUYpgJijFLijFADaKMUUwDFGKKKAExRilopAJijFLSYoAbijFLijFMBMUYpcUYoENxSEU6gigBlFLSUDEpKdikxSENNJinYoxQA2kpcUYoASilxRigBKTFLRQA2ilpKAG0UuKMUwEpKdikxQA2kxTqSgBKSlooATFJinUUANxRinUUAMPWkxTiKQimA2kp1JQAlJTqSmAlNIp1FADKKWigBKKWigBtJTqSgBKSlooAZijFOooAbijFOooAZRS0lACUlOpKACkpaKBDTSU4ikxQA2ilooAbRS0lACUUtJQA00lOIpMUALQaKDQMQikwKU0UANx6UlOFJjmgBvSilNJQIaRQOlOxzSd6QCUYyKWigBvGKOD2oNOxxTGR4NLginKBikHU0ANxmgilpMGgBDkN0oGM0uPek5z0oARhxmo+vepW5pmzNMQmM9aBgUuKOKQG5ilxS0VgagBSgUYpaYxMUYpaKAExRilooAXFGKUUtIQAUYpaWgBuKBS4paChBS0UuKYwoxS0UEiYoxS0UAGKXFFFABigCilHWgBcUYoooJDFGKWigAoopaACloApcUxhRS0UxCUtFFAC0UtFACUUuKMUAGKUClooAMUuBRS0AGKMUUUCDFJilooAWilooASilooAKKXFGKAEopcUYoAKKdijFADaKdijFACUU7FGKAG0U7FGKADFGKXFGKAExSYp2KCKBCYpaMUuKACloxS4oAbijFLijFACYoxS4ox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FJSigBcUYpcUYoATFGKXFLtoATFLinYpMUAJigCloxQAtFLRigApaMUoFAC4pcUUtABijFLS0AJilApcUoFACYpQKWlAoAXFLilApaAExS4pcUuKAExSgUuKUCgYAUoFKBSgUAG2lxTgKXFSAzbS7afijFADdtKBTsUoFACBaXbxTwKXFAFdl5phFTMOaYRQBHijFP20EUAQkU3FSkUmKYiLFIRUm2mkUARkUhFSEU0imMjIppFSEUhFAEeKTFSEU0igBhFIRTiKQigBmKTFPxSEUAMxRilxRigBuKQinYpMUAMxRinYpCKAG0lOpKCRtJinUlADTSU4ikxTENopaSgBKKWkouAlIaWg0XEMxRSkUYpgJRS0lAhpopSKTFABRRRTGNI5pKcRSYqhCUUtFADaSlooAbSGnUlADaSnEUmKAG0UtJQISijFGKYBSUtFADCKKcRTcUAJSUtFADaSnYpKAExTcU7FFADaSnYpKBDaKWkoASilpKoBMUmKdSUAMoxSnrRSATFGKWigBtFLSUwEpKdSUAMopaSgBKKWkoAKSnUlACUlLRQAykpxFJQAlFLikxTENoxS0UhCYopaKAG0lOpKAGkUlONJQBv0tFFc1zqFpaSlxRcBcUYpaMUriExRilxRii4DaUClxRii4BS0YpcUXAKKWii4BS0AUtFwG0opcUuKLgFFLilxRcBKKWincAoopaACloooAAKXFKKKAEApaKWgAoopaAClFGKAKAAUtAFLigApRRigCgBRRQBS4oAcKcKaKcKQCinCminCgBcUbaUCnClcCPbS4p+KQrRcBmadSbeacBTuMAKXFKBS4p3AZilAp2KUCi4hAKXFLilxRcBMU7FGKcBRcQgpwFGKUCi4wxSgUuKUClcdgApwFAFOAouAAUoFOApcVNyhMUoFLinBeaLhYAKAtPxS4qbisN20baftNLtouFhuKTHNS7aAnNFx2BF4oZamReKa4pXHYrEVGVqwy0wrRcmxDikIqQrTStVcVhhFNIqQikIp3AjxTSKkIppFFwIyKaRUhFNxTuBGRTSKkIppFVcBhFNIqQimkUARkU0ipCKaRQIZSU7FGKYDTTcU/FJigBlFKaSgBKQ0tFAEdFKaSgQlJS0UANpCKdSEUANpKdSUAJSU6koAbRilooAbikNOpCKAG0UtJQAlFLRQA2kp1JQAlIad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) no-repeat center center; background-size: cover; margin-bottom: ",[0,50]," }\n#moments .",[1],"home-pic-base.",[1],"data-v-3c79173a { position: absolute; left: ",[0,-60],"; bottom: ",[0,-40],"; width: 100%; height: ",[0,160],"; padding: 0 ",[0,30],"; }\n#moments .",[1],"home-pic-base .",[1],"top-pic.",[1],"data-v-3c79173a { width: ",[0,360],"; height: ",[0,360],"; border-radius: ",[0,40],"; -webkit-transform: scale(0.5); -ms-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; -ms-transform-origin: 100% 0%; transform-origin: 100% 0%; background-color: #ffffff; float: right }\n#moments .",[1],"home-pic-base .",[1],"top-name.",[1],"data-v-3c79173a { position: absolute; right: ",[0,240],"; top: ",[0,30],"; font-size: ",[0,32],"; font-weight: 600; text-align: right; color: #ffffff; overflow: hidden }\n#moments .",[1],"moments__post.",[1],"data-v-3c79173a { background: #fff; display: block; border-bottom: 1px solid #f2eeee; padding: ",[0,30]," ",[0,20],"; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n#moments .",[1],"moments__post.",[1],"data-v-3c79173a::before { content: none }\n#moments .",[1],"moments__post .",[1],"post_right.",[1],"data-v-3c79173a { font-size: ",[0,32],"; display: table-cell; padding-left: ",[0,20],"; width: 100%; }\n#moments .",[1],"moments__post .",[1],"title.",[1],"data-v-3c79173a { color: #094dcc }\n#moments .",[1],"moments__post .",[1],"thumbnails.",[1],"data-v-3c79173a { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n#moments .",[1],"moments__post .",[1],"thumbnails .",[1],"thumbnail.",[1],"data-v-3c79173a { width: 30%; height: ",[0,180],"; margin: ",[0,4],"; background: #757575; overflow: hidden; }\n.",[1],"my-gallery.",[1],"data-v-3c79173a{ width: ",[0,250],"; height: ",[0,400],"; margin: ",[0,4],"; background: #757575; overflow: hidden }\n#moments .",[1],"moments__post .",[1],"toolbar.",[1],"data-v-3c79173a { position: relative; top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n#moments .",[1],"moments__post .",[1],"toolbar .",[1],"timestamp.",[1],"data-v-3c79173a { color: #757575; font-size: ",[0,22],"; }\n#moments .",[1],"moments__post .",[1],"like.",[1],"data-v-3c79173a { width: auto; height: auto; position: absolute; right: ",[0,70],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n#moments .",[1],"moments__post .",[1],"comment.",[1],"data-v-3c79173a { width: auto; height: auto; position: absolute; right: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n#moments .",[1],"moments__post .",[1],"toolbar wx-image.",[1],"data-v-3c79173a{ width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"post-footer.",[1],"data-v-3c79173a{ margin-top: ",[0,30],"; background-color: #f3f3f5; width: 100%; }\n#moments .",[1],"moments__post .",[1],"footer_content.",[1],"data-v-3c79173a { padding-left: ",[0,10],"; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap }\n#moments .",[1],"moments__post .",[1],"footer_content .",[1],"nickname.",[1],"data-v-3c79173a { color: #36648B; font-size: ",[0,24]," }\n#moments .",[1],"moments__post .",[1],"footer_content .",[1],"comment-nickname.",[1],"data-v-3c79173a { color: #36648B; font-size: ",[0,24]," }\n#moments .",[1],"moments__post .",[1],"footer_content .",[1],"comment-content.",[1],"data-v-3c79173a { color: #000000; font-size: ",[0,24]," }\n.",[1],"foot.",[1],"data-v-3c79173a { position: fixed; width: 100%; height: ",[0,90],"; min-height: ",[0,90],"; left: ",[0,0],"; bottom: ",[0,0],"; overflow: hidden; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/service/live.wxss:219:1)",{path:"./pages/service/live.wxss"});    
__wxAppCode__['pages/service/live.wxml']=$gwx('./pages/service/live.wxml');

__wxAppCode__['pages/service/release_new.wxss']=setCssToHead([".",[1],"cu-form-group .",[1],"title { min-width: calc(4em + 15px); }\n",],undefined,{path:"./pages/service/release_new.wxss"});    
__wxAppCode__['pages/service/release_new.wxml']=$gwx('./pages/service/release_new.wxml');

__wxAppCode__['pages/service/show.wxss']=setCssToHead(["body { height: 100%; overflow: hidden; }\n.",[1],"img1{ background-size: 100% 100%; background: url(/static/show.png-do-not-use-local-path-./pages/service/show.wxss\x268\x2618) center center no-repeat; height: 100%; position: fixed; width: 100% }\n.",[1],"content { text-align: center; height: 100%; }\n.",[1],"content .",[1],"block { height: 200px; line-height: 200px; text-align: center; margin: 10px; background-color: aquamarine; }\n.",[1],"content .",[1],"loadingText { line-height: 30px; text-align: center; font-size: 12px; color: #999; }\n#preloader_1{ height: 40px; line-height: 40px; position:relative; text-align: center; }\n#preloader_1 .",[1],"_span{ width: 5px; height: 5px; margin: 0 1px; display: inline-block; vertical-align: middle; background: #9b59b6; -webkit-animation: preloader_1 1.5s  infinite ease-in-out; animation: preloader_1 1.5s  infinite ease-in-out; }\n#preloader_1 .",[1],"_span:nth-child(2){ -webkit-animation-delay: .2s; animation-delay: .2s; }\n#preloader_1 .",[1],"_span:nth-child(3){ -webkit-animation-delay: .4s; animation-delay: .4s; }\n#preloader_1 .",[1],"_span:nth-child(4){ -webkit-animation-delay: .6s; animation-delay: .6s; }\n#preloader_1 .",[1],"_span:nth-child(5){ -webkit-animation-delay: .8s; animation-delay: .8s; }\n@-webkit-keyframes preloader_1 { 0% {height:5px;background:#9b59b6;}\n25% {height:30px;background:#3498db;}\n50% {height:5px;background:#9b59b6;}\n100% {height:5px;background:#9b59b6;}\n}@keyframes preloader_1 { 0% {height:5px;background:#9b59b6;}\n25% {height:30px;background:#3498db;}\n50% {height:5px;background:#9b59b6;}\n100% {height:5px;background:#9b59b6;}\n}",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/service/show.wxss:58:1)",{path:"./pages/service/show.wxss"});    
__wxAppCode__['pages/service/show.wxml']=$gwx('./pages/service/show.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
