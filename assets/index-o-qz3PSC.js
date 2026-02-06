(function(){const Y=document.createElement("link").relList;if(Y&&Y.supports&&Y.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))h(x);new MutationObserver(x=>{for(const Z of x)if(Z.type==="childList")for(const it of Z.addedNodes)it.tagName==="LINK"&&it.rel==="modulepreload"&&h(it)}).observe(document,{childList:!0,subtree:!0});function X(x){const Z={};return x.integrity&&(Z.integrity=x.integrity),x.referrerPolicy&&(Z.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?Z.credentials="include":x.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function h(x){if(x.ep)return;x.ep=!0;const Z=X(x);fetch(x.href,Z)}})();var ss={exports:{}},En={};var bm;function tg(){if(bm)return En;bm=1;var C=Symbol.for("react.transitional.element"),Y=Symbol.for("react.fragment");function X(h,x,Z){var it=null;if(Z!==void 0&&(it=""+Z),x.key!==void 0&&(it=""+x.key),"key"in x){Z={};for(var Et in x)Et!=="key"&&(Z[Et]=x[Et])}else Z=x;return x=Z.ref,{$$typeof:C,type:h,key:it,ref:x!==void 0?x:null,props:Z}}return En.Fragment=Y,En.jsx=X,En.jsxs=X,En}var pm;function eg(){return pm||(pm=1,ss.exports=tg()),ss.exports}var S=eg(),os={exports:{}},L={};var Sm;function lg(){if(Sm)return L;Sm=1;var C=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),it=Symbol.for("react.context"),Et=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),dt=Symbol.iterator;function Lt(f){return f===null||typeof f!="object"?null:(f=dt&&f[dt]||f["@@iterator"],typeof f=="function"?f:null)}var Xt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,w={};function K(f,E,z){this.props=f,this.context=E,this.refs=w,this.updater=z||Xt}K.prototype.isReactComponent={},K.prototype.setState=function(f,E){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,E,"setState")},K.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function U(){}U.prototype=K.prototype;function Tt(f,E,z){this.props=f,this.context=E,this.refs=w,this.updater=z||Xt}var jt=Tt.prototype=new U;jt.constructor=Tt,N(jt,K.prototype),jt.isPureReactComponent=!0;var te=Array.isArray;function at(){}var B={H:null,A:null,T:null,S:null},Ct=Object.prototype.hasOwnProperty;function yt(f,E,z){var R=z.ref;return{$$typeof:C,type:f,key:E,ref:R!==void 0?R:null,props:z}}function _e(f,E){return yt(f.type,E,f.props)}function re(f){return typeof f=="object"&&f!==null&&f.$$typeof===C}function Qt(f){var E={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(z){return E[z]})}var Cl=/\/+/g;function He(f,E){return typeof f=="object"&&f!==null&&f.key!=null?Qt(""+f.key):E.toString(36)}function Ee(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(at,at):(f.status="pending",f.then(function(E){f.status==="pending"&&(f.status="fulfilled",f.value=E)},function(E){f.status==="pending"&&(f.status="rejected",f.reason=E)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function b(f,E,z,R,Q){var J=typeof f;(J==="undefined"||J==="boolean")&&(f=null);var ut=!1;if(f===null)ut=!0;else switch(J){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(f.$$typeof){case C:case Y:ut=!0;break;case P:return ut=f._init,b(ut(f._payload),E,z,R,Q)}}if(ut)return Q=Q(f),ut=R===""?"."+He(f,0):R,te(Q)?(z="",ut!=null&&(z=ut.replace(Cl,"$&/")+"/"),b(Q,E,z,"",function(Ra){return Ra})):Q!=null&&(re(Q)&&(Q=_e(Q,z+(Q.key==null||f&&f.key===Q.key?"":(""+Q.key).replace(Cl,"$&/")+"/")+ut)),E.push(Q)),1;ut=0;var Vt=R===""?".":R+":";if(te(f))for(var Dt=0;Dt<f.length;Dt++)R=f[Dt],J=Vt+He(R,Dt),ut+=b(R,E,z,J,Q);else if(Dt=Lt(f),typeof Dt=="function")for(f=Dt.call(f),Dt=0;!(R=f.next()).done;)R=R.value,J=Vt+He(R,Dt++),ut+=b(R,E,z,J,Q);else if(J==="object"){if(typeof f.then=="function")return b(Ee(f),E,z,R,Q);throw E=String(f),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return ut}function D(f,E,z){if(f==null)return f;var R=[],Q=0;return b(f,R,"","",function(J){return E.call(z,J,Q++)}),R}function q(f){if(f._status===-1){var E=f._result;E=E(),E.then(function(z){(f._status===0||f._status===-1)&&(f._status=1,f._result=z)},function(z){(f._status===0||f._status===-1)&&(f._status=2,f._result=z)}),f._status===-1&&(f._status=0,f._result=E)}if(f._status===1)return f._result.default;throw f._result}var ot=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},ht={map:D,forEach:function(f,E,z){D(f,function(){E.apply(this,arguments)},z)},count:function(f){var E=0;return D(f,function(){E++}),E},toArray:function(f){return D(f,function(E){return E})||[]},only:function(f){if(!re(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return L.Activity=j,L.Children=ht,L.Component=K,L.Fragment=X,L.Profiler=x,L.PureComponent=Tt,L.StrictMode=h,L.Suspense=O,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,L.__COMPILER_RUNTIME={__proto__:null,c:function(f){return B.H.useMemoCache(f)}},L.cache=function(f){return function(){return f.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(f,E,z){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var R=N({},f.props),Q=f.key;if(E!=null)for(J in E.key!==void 0&&(Q=""+E.key),E)!Ct.call(E,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&E.ref===void 0||(R[J]=E[J]);var J=arguments.length-2;if(J===1)R.children=z;else if(1<J){for(var ut=Array(J),Vt=0;Vt<J;Vt++)ut[Vt]=arguments[Vt+2];R.children=ut}return yt(f.type,Q,R)},L.createContext=function(f){return f={$$typeof:it,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:Z,_context:f},f},L.createElement=function(f,E,z){var R,Q={},J=null;if(E!=null)for(R in E.key!==void 0&&(J=""+E.key),E)Ct.call(E,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(Q[R]=E[R]);var ut=arguments.length-2;if(ut===1)Q.children=z;else if(1<ut){for(var Vt=Array(ut),Dt=0;Dt<ut;Dt++)Vt[Dt]=arguments[Dt+2];Q.children=Vt}if(f&&f.defaultProps)for(R in ut=f.defaultProps,ut)Q[R]===void 0&&(Q[R]=ut[R]);return yt(f,J,Q)},L.createRef=function(){return{current:null}},L.forwardRef=function(f){return{$$typeof:Et,render:f}},L.isValidElement=re,L.lazy=function(f){return{$$typeof:P,_payload:{_status:-1,_result:f},_init:q}},L.memo=function(f,E){return{$$typeof:T,type:f,compare:E===void 0?null:E}},L.startTransition=function(f){var E=B.T,z={};B.T=z;try{var R=f(),Q=B.S;Q!==null&&Q(z,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(at,ot)}catch(J){ot(J)}finally{E!==null&&z.types!==null&&(E.types=z.types),B.T=E}},L.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},L.use=function(f){return B.H.use(f)},L.useActionState=function(f,E,z){return B.H.useActionState(f,E,z)},L.useCallback=function(f,E){return B.H.useCallback(f,E)},L.useContext=function(f){return B.H.useContext(f)},L.useDebugValue=function(){},L.useDeferredValue=function(f,E){return B.H.useDeferredValue(f,E)},L.useEffect=function(f,E){return B.H.useEffect(f,E)},L.useEffectEvent=function(f){return B.H.useEffectEvent(f)},L.useId=function(){return B.H.useId()},L.useImperativeHandle=function(f,E,z){return B.H.useImperativeHandle(f,E,z)},L.useInsertionEffect=function(f,E){return B.H.useInsertionEffect(f,E)},L.useLayoutEffect=function(f,E){return B.H.useLayoutEffect(f,E)},L.useMemo=function(f,E){return B.H.useMemo(f,E)},L.useOptimistic=function(f,E){return B.H.useOptimistic(f,E)},L.useReducer=function(f,E,z){return B.H.useReducer(f,E,z)},L.useRef=function(f){return B.H.useRef(f)},L.useState=function(f){return B.H.useState(f)},L.useSyncExternalStore=function(f,E,z){return B.H.useSyncExternalStore(f,E,z)},L.useTransition=function(){return B.H.useTransition()},L.version="19.2.4",L}var Am;function hs(){return Am||(Am=1,os.exports=lg()),os.exports}var Me=hs(),fs={exports:{}},Tn={},rs={exports:{}},ms={};var Em;function ag(){return Em||(Em=1,(function(C){function Y(b,D){var q=b.length;b.push(D);t:for(;0<q;){var ot=q-1>>>1,ht=b[ot];if(0<x(ht,D))b[ot]=D,b[q]=ht,q=ot;else break t}}function X(b){return b.length===0?null:b[0]}function h(b){if(b.length===0)return null;var D=b[0],q=b.pop();if(q!==D){b[0]=q;t:for(var ot=0,ht=b.length,f=ht>>>1;ot<f;){var E=2*(ot+1)-1,z=b[E],R=E+1,Q=b[R];if(0>x(z,q))R<ht&&0>x(Q,z)?(b[ot]=Q,b[R]=q,ot=R):(b[ot]=z,b[E]=q,ot=E);else if(R<ht&&0>x(Q,q))b[ot]=Q,b[R]=q,ot=R;else break t}}return D}function x(b,D){var q=b.sortIndex-D.sortIndex;return q!==0?q:b.id-D.id}if(C.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Z=performance;C.unstable_now=function(){return Z.now()}}else{var it=Date,Et=it.now();C.unstable_now=function(){return it.now()-Et}}var O=[],T=[],P=1,j=null,dt=3,Lt=!1,Xt=!1,N=!1,w=!1,K=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,Tt=typeof setImmediate<"u"?setImmediate:null;function jt(b){for(var D=X(T);D!==null;){if(D.callback===null)h(T);else if(D.startTime<=b)h(T),D.sortIndex=D.expirationTime,Y(O,D);else break;D=X(T)}}function te(b){if(N=!1,jt(b),!Xt)if(X(O)!==null)Xt=!0,at||(at=!0,Qt());else{var D=X(T);D!==null&&Ee(te,D.startTime-b)}}var at=!1,B=-1,Ct=5,yt=-1;function _e(){return w?!0:!(C.unstable_now()-yt<Ct)}function re(){if(w=!1,at){var b=C.unstable_now();yt=b;var D=!0;try{t:{Xt=!1,N&&(N=!1,U(B),B=-1),Lt=!0;var q=dt;try{e:{for(jt(b),j=X(O);j!==null&&!(j.expirationTime>b&&_e());){var ot=j.callback;if(typeof ot=="function"){j.callback=null,dt=j.priorityLevel;var ht=ot(j.expirationTime<=b);if(b=C.unstable_now(),typeof ht=="function"){j.callback=ht,jt(b),D=!0;break e}j===X(O)&&h(O),jt(b)}else h(O);j=X(O)}if(j!==null)D=!0;else{var f=X(T);f!==null&&Ee(te,f.startTime-b),D=!1}}break t}finally{j=null,dt=q,Lt=!1}D=void 0}}finally{D?Qt():at=!1}}}var Qt;if(typeof Tt=="function")Qt=function(){Tt(re)};else if(typeof MessageChannel<"u"){var Cl=new MessageChannel,He=Cl.port2;Cl.port1.onmessage=re,Qt=function(){He.postMessage(null)}}else Qt=function(){K(re,0)};function Ee(b,D){B=K(function(){b(C.unstable_now())},D)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(b){b.callback=null},C.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ct=0<b?Math.floor(1e3/b):5},C.unstable_getCurrentPriorityLevel=function(){return dt},C.unstable_next=function(b){switch(dt){case 1:case 2:case 3:var D=3;break;default:D=dt}var q=dt;dt=D;try{return b()}finally{dt=q}},C.unstable_requestPaint=function(){w=!0},C.unstable_runWithPriority=function(b,D){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var q=dt;dt=b;try{return D()}finally{dt=q}},C.unstable_scheduleCallback=function(b,D,q){var ot=C.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ot+q:ot):q=ot,b){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=q+ht,b={id:P++,callback:D,priorityLevel:b,startTime:q,expirationTime:ht,sortIndex:-1},q>ot?(b.sortIndex=q,Y(T,b),X(O)===null&&b===X(T)&&(N?(U(B),B=-1):N=!0,Ee(te,q-ot))):(b.sortIndex=ht,Y(O,b),Xt||Lt||(Xt=!0,at||(at=!0,Qt()))),b},C.unstable_shouldYield=_e,C.unstable_wrapCallback=function(b){var D=dt;return function(){var q=dt;dt=D;try{return b.apply(this,arguments)}finally{dt=q}}}})(ms)),ms}var Tm;function ng(){return Tm||(Tm=1,rs.exports=ag()),rs.exports}var ds={exports:{}},kt={};var Cm;function ig(){if(Cm)return kt;Cm=1;var C=hs();function Y(O){var T="https://react.dev/errors/"+O;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)T+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+O+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function X(){}var h={d:{f:X,r:function(){throw Error(Y(522))},D:X,C:X,L:X,m:X,X,S:X,M:X},p:0,findDOMNode:null},x=Symbol.for("react.portal");function Z(O,T,P){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:j==null?null:""+j,children:O,containerInfo:T,implementation:P}}var it=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Et(O,T){if(O==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,kt.createPortal=function(O,T){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(Y(299));return Z(O,T,null,P)},kt.flushSync=function(O){var T=it.T,P=h.p;try{if(it.T=null,h.p=2,O)return O()}finally{it.T=T,h.p=P,h.d.f()}},kt.preconnect=function(O,T){typeof O=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(O,T))},kt.prefetchDNS=function(O){typeof O=="string"&&h.d.D(O)},kt.preinit=function(O,T){if(typeof O=="string"&&T&&typeof T.as=="string"){var P=T.as,j=Et(P,T.crossOrigin),dt=typeof T.integrity=="string"?T.integrity:void 0,Lt=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;P==="style"?h.d.S(O,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:j,integrity:dt,fetchPriority:Lt}):P==="script"&&h.d.X(O,{crossOrigin:j,integrity:dt,fetchPriority:Lt,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},kt.preinitModule=function(O,T){if(typeof O=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var P=Et(T.as,T.crossOrigin);h.d.M(O,{crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(O)},kt.preload=function(O,T){if(typeof O=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var P=T.as,j=Et(P,T.crossOrigin);h.d.L(O,P,{crossOrigin:j,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},kt.preloadModule=function(O,T){if(typeof O=="string")if(T){var P=Et(T.as,T.crossOrigin);h.d.m(O,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(O)},kt.requestFormReset=function(O){h.d.r(O)},kt.unstable_batchedUpdates=function(O,T){return O(T)},kt.useFormState=function(O,T,P){return it.H.useFormState(O,T,P)},kt.useFormStatus=function(){return it.H.useHostTransitionStatus()},kt.version="19.2.4",kt}var Dm;function ug(){if(Dm)return ds.exports;Dm=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(Y){console.error(Y)}}return C(),ds.exports=ig(),ds.exports}var zm;function cg(){if(zm)return Tn;zm=1;var C=ng(),Y=hs(),X=ug();function h(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Z(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function it(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Et(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(Z(t)!==t)throw Error(h(188))}function T(t){var e=t.alternate;if(!e){if(e=Z(t),e===null)throw Error(h(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return O(n),t;if(i===a)return O(n),e;i=i.sibling}throw Error(h(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(h(189))}}if(l.alternate!==a)throw Error(h(190))}if(l.tag!==3)throw Error(h(188));return l.stateNode.current===l?t:e}function P(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=P(t),e!==null)return e;t=t.sibling}return null}var j=Object.assign,dt=Symbol.for("react.element"),Lt=Symbol.for("react.transitional.element"),Xt=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),Tt=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=re&&t[re]||t["@@iterator"],typeof t=="function"?t:null)}var Cl=Symbol.for("react.client.reference");function He(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Cl?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case K:return"Profiler";case w:return"StrictMode";case te:return"Suspense";case at:return"SuspenseList";case yt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Xt:return"Portal";case Tt:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case jt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return e=t.displayName||null,e!==null?e:He(t.type)||"Memo";case Ct:e=t._payload,t=t._init;try{return He(t(e))}catch{}}return null}var Ee=Array.isArray,b=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ot=[],ht=-1;function f(t){return{current:t}}function E(t){0>ht||(t.current=ot[ht],ot[ht]=null,ht--)}function z(t,e){ht++,ot[ht]=t.current,t.current=e}var R=f(null),Q=f(null),J=f(null),ut=f(null);function Vt(t,e){switch(z(J,e),z(Q,t),z(R,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Lr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Lr(e),t=Xr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}E(R),z(R,t)}function Dt(){E(R),E(Q),E(J)}function Ra(t){t.memoizedState!==null&&z(ut,t);var e=R.current,l=Xr(e,t.type);e!==l&&(z(Q,t),z(R,l))}function Dn(t){Q.current===t&&(E(R),E(Q)),ut.current===t&&(E(ut),bn._currentValue=q)}var ki,gs;function Dl(t){if(ki===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);ki=e&&e[1]||"",gs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ki+t+gs}var Vi=!1;function Zi(t,e){if(!t||Vi)return"";Vi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var g=y}Reflect.construct(t,[],A)}else{try{A.call()}catch(y){g=y}t.call(A.prototype)}}else{try{throw Error()}catch(y){g=y}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),d=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===d.length)for(a=s.length-1,n=d.length-1;1<=a&&0<=n&&s[a]!==d[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==d[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==d[n]){var v=`
`+s[a].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=a&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Dl(l):""}function Nm(t,e){switch(t.tag){case 26:case 27:case 5:return Dl(t.type);case 16:return Dl("Lazy");case 13:return t.child!==e&&e!==null?Dl("Suspense Fallback"):Dl("Suspense");case 19:return Dl("SuspenseList");case 0:case 15:return Zi(t.type,!1);case 11:return Zi(t.type.render,!1);case 1:return Zi(t.type,!0);case 31:return Dl("Activity");default:return""}}function ys(t){try{var e="",l=null;do e+=Nm(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ki=Object.prototype.hasOwnProperty,Ji=C.unstable_scheduleCallback,Wi=C.unstable_cancelCallback,xm=C.unstable_shouldYield,Um=C.unstable_requestPaint,ee=C.unstable_now,Hm=C.unstable_getCurrentPriorityLevel,vs=C.unstable_ImmediatePriority,bs=C.unstable_UserBlockingPriority,zn=C.unstable_NormalPriority,jm=C.unstable_LowPriority,ps=C.unstable_IdlePriority,wm=C.log,Gm=C.unstable_setDisableYieldValue,_a=null,le=null;function Pe(t){if(typeof wm=="function"&&Gm(t),le&&typeof le.setStrictMode=="function")try{le.setStrictMode(_a,t)}catch{}}var ae=Math.clz32?Math.clz32:Ym,Bm=Math.log,qm=Math.LN2;function Ym(t){return t>>>=0,t===0?32:31-(Bm(t)/qm|0)|0}var Mn=256,Rn=262144,_n=4194304;function zl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function On(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=zl(a):(u&=c,u!==0?n=zl(u):l||(l=c&~t,l!==0&&(n=zl(l))))):(c=a&~i,c!==0?n=zl(c):u!==0?n=zl(u):l||(l=a&~t,l!==0&&(n=zl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function Oa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Lm(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var t=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),t}function Fi(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Na(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xm(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,d=t.hiddenUpdates;for(l=u&~l;0<l;){var v=31-ae(l),A=1<<v;c[v]=0,s[v]=-1;var g=d[v];if(g!==null)for(d[v]=null,v=0;v<g.length;v++){var y=g[v];y!==null&&(y.lane&=-536870913)}l&=~A}a!==0&&As(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function As(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ae(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Es(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ae(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Ts(t,e){var l=e&-e;return l=(l&42)!==0?1:$i(l),(l&(t.suspendedLanes|e))!==0?0:l}function $i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ii(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cs(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:rm(t.type))}function Ds(t,e){var l=D.p;try{return D.p=t,e()}finally{D.p=l}}var tl=Math.random().toString(36).slice(2),wt="__reactFiber$"+tl,Kt="__reactProps$"+tl,kl="__reactContainer$"+tl,Pi="__reactEvents$"+tl,Qm="__reactListeners$"+tl,km="__reactHandles$"+tl,zs="__reactResources$"+tl,xa="__reactMarker$"+tl;function tu(t){delete t[wt],delete t[Kt],delete t[Pi],delete t[Qm],delete t[km]}function Vl(t){var e=t[wt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[kl]||l[wt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Wr(t);t!==null;){if(l=t[wt])return l;t=Wr(t)}return e}t=l,l=t.parentNode}return null}function Zl(t){if(t=t[wt]||t[kl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ua(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(h(33))}function Kl(t){var e=t[zs];return e||(e=t[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ut(t){t[xa]=!0}var Ms=new Set,Rs={};function Ml(t,e){Jl(t,e),Jl(t+"Capture",e)}function Jl(t,e){for(Rs[t]=e,t=0;t<e.length;t++)Ms.add(e[t])}var Vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_s={},Os={};function Zm(t){return Ki.call(Os,t)?!0:Ki.call(_s,t)?!1:Vm.test(t)?Os[t]=!0:(_s[t]=!0,!1)}function Nn(t,e,l){if(Zm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function xn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function je(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ns(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Km(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){if(!t._valueTracker){var e=Ns(t)?"checked":"value";t._valueTracker=Km(t,e,""+t[e])}}function xs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Ns(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Un(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jm=/[\n"\\]/g;function de(t){return t.replace(Jm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function lu(t,e,l,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+me(e)):t.value!==""+me(e)&&(t.value=""+me(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?au(t,u,me(e)):l!=null?au(t,u,me(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+me(c):t.removeAttribute("name")}function Us(t,e,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){eu(t);return}l=l!=null?""+me(l):"",e=e!=null?""+me(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),eu(t)}function au(t,e,l){e==="number"&&Un(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Wl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+me(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Hs(t,e,l){if(e!=null&&(e=""+me(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+me(l):""}function js(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(h(92));if(Ee(a)){if(1<a.length)throw Error(h(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=me(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),eu(t)}function Fl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ws(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Wm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Gs(t,e,l){if(e!=null&&typeof e!="object")throw Error(h(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&ws(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&ws(t,i,e[i])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$m=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hn(t){return $m.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function we(){}var iu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $l=null,Il=null;function Bs(t){var e=Zl(t);if(e&&(t=e.stateNode)){var l=t[Kt]||null;t:switch(t=e.stateNode,e.type){case"input":if(lu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+de(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Kt]||null;if(!n)throw Error(h(90));lu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&xs(a)}break t;case"textarea":Hs(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Wl(t,!!l.multiple,e,!1)}}}var cu=!1;function qs(t,e,l){if(cu)return t(e,l);cu=!0;try{var a=t(e);return a}finally{if(cu=!1,($l!==null||Il!==null)&&(Ai(),$l&&(e=$l,t=Il,Il=$l=null,Bs(e),t)))for(e=0;e<t.length;e++)Bs(t[e])}}function Ha(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Kt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(h(231,e,typeof l));return l}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Ge)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){su=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{su=!1}var el=null,ou=null,jn=null;function Ys(){if(jn)return jn;var t,e=ou,l=e.length,a,n="value"in el?el.value:el.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return jn=n.slice(t,1<a?1-a:void 0)}function wn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gn(){return!0}function Ls(){return!1}function Jt(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gn:Ls,this.isPropagationStopped=Ls,this}return j(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),e}var Rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Jt(Rl),wa=j({},Rl,{view:0,detail:0}),Im=Jt(wa),fu,ru,Ga,qn=j({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ga&&(Ga&&t.type==="mousemove"?(fu=t.screenX-Ga.screenX,ru=t.screenY-Ga.screenY):ru=fu=0,Ga=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),Xs=Jt(qn),Pm=j({},qn,{dataTransfer:0}),td=Jt(Pm),ed=j({},wa,{relatedTarget:0}),mu=Jt(ed),ld=j({},Rl,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=Jt(ld),nd=j({},Rl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),id=Jt(nd),ud=j({},Rl,{data:0}),Qs=Jt(ud),cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fd(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=od[t])?!!e[t]:!1}function du(){return fd}var rd=j({},wa,{key:function(t){if(t.key){var e=cd[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?wn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),md=Jt(rd),dd=j({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ks=Jt(dd),hd=j({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),gd=Jt(hd),yd=j({},Rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),vd=Jt(yd),bd=j({},qn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pd=Jt(bd),Sd=j({},Rl,{newState:0,oldState:0}),Ad=Jt(Sd),Ed=[9,13,27,32],hu=Ge&&"CompositionEvent"in window,Ba=null;Ge&&"documentMode"in document&&(Ba=document.documentMode);var Td=Ge&&"TextEvent"in window&&!Ba,Vs=Ge&&(!hu||Ba&&8<Ba&&11>=Ba),Zs=" ",Ks=!1;function Js(t,e){switch(t){case"keyup":return Ed.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pl=!1;function Cd(t,e){switch(t){case"compositionend":return Ws(e);case"keypress":return e.which!==32?null:(Ks=!0,Zs);case"textInput":return t=e.data,t===Zs&&Ks?null:t;default:return null}}function Dd(t,e){if(Pl)return t==="compositionend"||!hu&&Js(t,e)?(t=Ys(),jn=ou=el=null,Pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vs&&e.locale!=="ko"?null:e.data;default:return null}}var zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zd[t.type]:e==="textarea"}function $s(t,e,l,a){$l?Il?Il.push(a):Il=[a]:$l=a,e=Ri(e,"onChange"),0<e.length&&(l=new Bn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var qa=null,Ya=null;function Md(t){jr(t,0)}function Yn(t){var e=Ua(t);if(xs(e))return t}function Is(t,e){if(t==="change")return e}var Ps=!1;if(Ge){var gu;if(Ge){var yu="oninput"in document;if(!yu){var to=document.createElement("div");to.setAttribute("oninput","return;"),yu=typeof to.oninput=="function"}gu=yu}else gu=!1;Ps=gu&&(!document.documentMode||9<document.documentMode)}function eo(){qa&&(qa.detachEvent("onpropertychange",lo),Ya=qa=null)}function lo(t){if(t.propertyName==="value"&&Yn(Ya)){var e=[];$s(e,Ya,t,uu(t)),qs(Md,e)}}function Rd(t,e,l){t==="focusin"?(eo(),qa=e,Ya=l,qa.attachEvent("onpropertychange",lo)):t==="focusout"&&eo()}function _d(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yn(Ya)}function Od(t,e){if(t==="click")return Yn(e)}function Nd(t,e){if(t==="input"||t==="change")return Yn(e)}function xd(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ne=typeof Object.is=="function"?Object.is:xd;function La(t,e){if(ne(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ki.call(e,n)||!ne(t[n],e[n]))return!1}return!0}function ao(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function no(t,e){var l=ao(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=ao(l)}}function io(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?io(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Un(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Un(t.document)}return e}function vu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ud=Ge&&"documentMode"in document&&11>=document.documentMode,ta=null,bu=null,Xa=null,pu=!1;function co(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;pu||ta==null||ta!==Un(a)||(a=ta,"selectionStart"in a&&vu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xa&&La(Xa,a)||(Xa=a,a=Ri(bu,"onSelect"),0<a.length&&(e=new Bn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ta)))}function _l(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ea={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionrun:_l("Transition","TransitionRun"),transitionstart:_l("Transition","TransitionStart"),transitioncancel:_l("Transition","TransitionCancel"),transitionend:_l("Transition","TransitionEnd")},Su={},so={};Ge&&(so=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Ol(t){if(Su[t])return Su[t];if(!ea[t])return t;var e=ea[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in so)return Su[t]=e[l];return t}var oo=Ol("animationend"),fo=Ol("animationiteration"),ro=Ol("animationstart"),Hd=Ol("transitionrun"),jd=Ol("transitionstart"),wd=Ol("transitioncancel"),mo=Ol("transitionend"),ho=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function Te(t,e){ho.set(t,e),Ml(e,[t])}var Ln=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},he=[],la=0,Eu=0;function Xn(){for(var t=la,e=Eu=la=0;e<t;){var l=he[e];he[e++]=null;var a=he[e];he[e++]=null;var n=he[e];he[e++]=null;var i=he[e];if(he[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&go(l,n,i)}}function Qn(t,e,l,a){he[la++]=t,he[la++]=e,he[la++]=l,he[la++]=a,Eu|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Tu(t,e,l,a){return Qn(t,e,l,a),kn(t)}function Nl(t,e){return Qn(t,null,null,e),kn(t)}function go(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ae(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function kn(t){if(50<rn)throw rn=0,xc=null,Error(h(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var aa={};function Gd(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ie(t,e,l,a){return new Gd(t,e,l,a)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Be(t,e){var l=t.alternate;return l===null?(l=ie(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function yo(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Vn(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")Cu(t)&&(u=1);else if(typeof t=="string")u=Xh(t,l,R.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case yt:return t=ie(31,l,e,n),t.elementType=yt,t.lanes=i,t;case N:return xl(l.children,n,i,e);case w:u=8,n|=24;break;case K:return t=ie(12,l,e,n|2),t.elementType=K,t.lanes=i,t;case te:return t=ie(13,l,e,n),t.elementType=te,t.lanes=i,t;case at:return t=ie(19,l,e,n),t.elementType=at,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tt:u=10;break t;case U:u=9;break t;case jt:u=11;break t;case B:u=14;break t;case Ct:u=16,a=null;break t}u=29,l=Error(h(130,t===null?"null":typeof t,"")),a=null}return e=ie(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function xl(t,e,l,a){return t=ie(7,t,a,e),t.lanes=l,t}function Du(t,e,l){return t=ie(6,t,null,e),t.lanes=l,t}function vo(t){var e=ie(18,null,null,0);return e.stateNode=t,e}function zu(t,e,l){return e=ie(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var bo=new WeakMap;function ge(t,e){if(typeof t=="object"&&t!==null){var l=bo.get(t);return l!==void 0?l:(e={value:t,source:e,stack:ys(e)},bo.set(t,e),e)}return{value:t,source:e,stack:ys(e)}}var na=[],ia=0,Zn=null,Qa=0,ye=[],ve=0,ll=null,Oe=1,Ne="";function qe(t,e){na[ia++]=Qa,na[ia++]=Zn,Zn=t,Qa=e}function po(t,e,l){ye[ve++]=Oe,ye[ve++]=Ne,ye[ve++]=ll,ll=t;var a=Oe;t=Ne;var n=32-ae(a)-1;a&=~(1<<n),l+=1;var i=32-ae(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Oe=1<<32-ae(e)+n|l<<n|a,Ne=i+t}else Oe=1<<i|l<<n|a,Ne=t}function Mu(t){t.return!==null&&(qe(t,1),po(t,1,0))}function Ru(t){for(;t===Zn;)Zn=na[--ia],na[ia]=null,Qa=na[--ia],na[ia]=null;for(;t===ll;)ll=ye[--ve],ye[ve]=null,Ne=ye[--ve],ye[ve]=null,Oe=ye[--ve],ye[ve]=null}function So(t,e){ye[ve++]=Oe,ye[ve++]=Ne,ye[ve++]=ll,Oe=e.id,Ne=e.overflow,ll=t}var Gt=null,vt=null,tt=!1,al=null,be=!1,_u=Error(h(519));function nl(t){var e=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ka(ge(e,t)),_u}function Ao(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[wt]=t,e[Kt]=a,l){case"dialog":F("cancel",e),F("close",e);break;case"iframe":case"object":case"embed":F("load",e);break;case"video":case"audio":for(l=0;l<dn.length;l++)F(dn[l],e);break;case"source":F("error",e);break;case"img":case"image":case"link":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"input":F("invalid",e),Us(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":F("invalid",e);break;case"textarea":F("invalid",e),js(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||qr(e.textContent,l)?(a.popover!=null&&(F("beforetoggle",e),F("toggle",e)),a.onScroll!=null&&F("scroll",e),a.onScrollEnd!=null&&F("scrollend",e),a.onClick!=null&&(e.onclick=we),e=!0):e=!1,e||nl(t,!0)}function Eo(t){for(Gt=t.return;Gt;)switch(Gt.tag){case 5:case 31:case 13:be=!1;return;case 27:case 3:be=!0;return;default:Gt=Gt.return}}function ua(t){if(t!==Gt)return!1;if(!tt)return Eo(t),tt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Kc(t.type,t.memoizedProps)),l=!l),l&&vt&&nl(t),Eo(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));vt=Jr(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));vt=Jr(t)}else e===27?(e=vt,bl(t.type)?(t=Ic,Ic=null,vt=t):vt=e):vt=Gt?Se(t.stateNode.nextSibling):null;return!0}function Ul(){vt=Gt=null,tt=!1}function Ou(){var t=al;return t!==null&&(It===null?It=t:It.push.apply(It,t),al=null),t}function ka(t){al===null?al=[t]:al.push(t)}var Nu=f(null),Hl=null,Ye=null;function il(t,e,l){z(Nu,e._currentValue),e._currentValue=l}function Le(t){t._currentValue=Nu.current,E(Nu)}function xu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Uu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),xu(i.return,l,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(h(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),xu(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ca(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=n.type;ne(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===ut.current){if(u=n.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(bn):t=[bn])}n=n.return}t!==null&&Uu(e,t,l,a),e.flags|=262144}function Kn(t){for(t=t.firstContext;t!==null;){if(!ne(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jl(t){Hl=t,Ye=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bt(t){return To(Hl,t)}function Jn(t,e){return Hl===null&&jl(t),To(t,e)}function To(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Ye===null){if(t===null)throw Error(h(308));Ye=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ye=Ye.next=e;return l}var Bd=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},qd=C.unstable_scheduleCallback,Yd=C.unstable_NormalPriority,Rt={$$typeof:Tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Bd,data:new Map,refCount:0}}function Va(t){t.refCount--,t.refCount===0&&qd(Yd,function(){t.controller.abort()})}var Za=null,ju=0,sa=0,oa=null;function Ld(t,e){if(Za===null){var l=Za=[];ju=0,sa=Bc(),oa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ju++,e.then(Co,Co),e}function Co(){if(--ju===0&&Za!==null){oa!==null&&(oa.status="fulfilled");var t=Za;Za=null,sa=0,oa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Xd(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Do=b.S;b.S=function(t,e){or=ee(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ld(t,e),Do!==null&&Do(t,e)};var wl=f(null);function wu(){var t=wl.current;return t!==null?t:gt.pooledCache}function Wn(t,e){e===null?z(wl,wl.current):z(wl,e.pool)}function zo(){var t=wu();return t===null?null:{parent:Rt._currentValue,pool:t}}var fa=Error(h(460)),Gu=Error(h(474)),Fn=Error(h(542)),$n={then:function(){}};function Mo(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ro(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(we,we),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Oo(t),t;default:if(typeof e.status=="string")e.then(we,we);else{if(t=gt,t!==null&&100<t.shellSuspendCounter)throw Error(h(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Oo(t),t}throw Bl=e,fa}}function Gl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Bl=l,fa):l}}var Bl=null;function _o(){if(Bl===null)throw Error(h(459));var t=Bl;return Bl=null,t}function Oo(t){if(t===fa||t===Fn)throw Error(h(483))}var ra=null,Ka=0;function In(t){var e=Ka;return Ka+=1,ra===null&&(ra=[]),Ro(ra,t,e)}function Ja(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pn(t,e){throw e.$$typeof===dt?Error(h(525)):(t=Object.prototype.toString.call(e),Error(h(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function No(t){function e(r,o){if(t){var m=r.deletions;m===null?(r.deletions=[o],r.flags|=16):m.push(o)}}function l(r,o){if(!t)return null;for(;o!==null;)e(r,o),o=o.sibling;return null}function a(r){for(var o=new Map;r!==null;)r.key!==null?o.set(r.key,r):o.set(r.index,r),r=r.sibling;return o}function n(r,o){return r=Be(r,o),r.index=0,r.sibling=null,r}function i(r,o,m){return r.index=m,t?(m=r.alternate,m!==null?(m=m.index,m<o?(r.flags|=67108866,o):m):(r.flags|=67108866,o)):(r.flags|=1048576,o)}function u(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,o,m,p){return o===null||o.tag!==6?(o=Du(m,r.mode,p),o.return=r,o):(o=n(o,m),o.return=r,o)}function s(r,o,m,p){var H=m.type;return H===N?v(r,o,m.props.children,p,m.key):o!==null&&(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ct&&Gl(H)===o.type)?(o=n(o,m.props),Ja(o,m),o.return=r,o):(o=Vn(m.type,m.key,m.props,null,r.mode,p),Ja(o,m),o.return=r,o)}function d(r,o,m,p){return o===null||o.tag!==4||o.stateNode.containerInfo!==m.containerInfo||o.stateNode.implementation!==m.implementation?(o=zu(m,r.mode,p),o.return=r,o):(o=n(o,m.children||[]),o.return=r,o)}function v(r,o,m,p,H){return o===null||o.tag!==7?(o=xl(m,r.mode,p,H),o.return=r,o):(o=n(o,m),o.return=r,o)}function A(r,o,m){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Du(""+o,r.mode,m),o.return=r,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Lt:return m=Vn(o.type,o.key,o.props,null,r.mode,m),Ja(m,o),m.return=r,m;case Xt:return o=zu(o,r.mode,m),o.return=r,o;case Ct:return o=Gl(o),A(r,o,m)}if(Ee(o)||Qt(o))return o=xl(o,r.mode,m,null),o.return=r,o;if(typeof o.then=="function")return A(r,In(o),m);if(o.$$typeof===Tt)return A(r,Jn(r,o),m);Pn(r,o)}return null}function g(r,o,m,p){var H=o!==null?o.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return H!==null?null:c(r,o,""+m,p);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Lt:return m.key===H?s(r,o,m,p):null;case Xt:return m.key===H?d(r,o,m,p):null;case Ct:return m=Gl(m),g(r,o,m,p)}if(Ee(m)||Qt(m))return H!==null?null:v(r,o,m,p,null);if(typeof m.then=="function")return g(r,o,In(m),p);if(m.$$typeof===Tt)return g(r,o,Jn(r,m),p);Pn(r,m)}return null}function y(r,o,m,p,H){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return r=r.get(m)||null,c(o,r,""+p,H);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Lt:return r=r.get(p.key===null?m:p.key)||null,s(o,r,p,H);case Xt:return r=r.get(p.key===null?m:p.key)||null,d(o,r,p,H);case Ct:return p=Gl(p),y(r,o,m,p,H)}if(Ee(p)||Qt(p))return r=r.get(m)||null,v(o,r,p,H,null);if(typeof p.then=="function")return y(r,o,m,In(p),H);if(p.$$typeof===Tt)return y(r,o,m,Jn(o,p),H);Pn(o,p)}return null}function M(r,o,m,p){for(var H=null,et=null,_=o,V=o=0,I=null;_!==null&&V<m.length;V++){_.index>V?(I=_,_=null):I=_.sibling;var lt=g(r,_,m[V],p);if(lt===null){_===null&&(_=I);break}t&&_&&lt.alternate===null&&e(r,_),o=i(lt,o,V),et===null?H=lt:et.sibling=lt,et=lt,_=I}if(V===m.length)return l(r,_),tt&&qe(r,V),H;if(_===null){for(;V<m.length;V++)_=A(r,m[V],p),_!==null&&(o=i(_,o,V),et===null?H=_:et.sibling=_,et=_);return tt&&qe(r,V),H}for(_=a(_);V<m.length;V++)I=y(_,r,V,m[V],p),I!==null&&(t&&I.alternate!==null&&_.delete(I.key===null?V:I.key),o=i(I,o,V),et===null?H=I:et.sibling=I,et=I);return t&&_.forEach(function(Tl){return e(r,Tl)}),tt&&qe(r,V),H}function G(r,o,m,p){if(m==null)throw Error(h(151));for(var H=null,et=null,_=o,V=o=0,I=null,lt=m.next();_!==null&&!lt.done;V++,lt=m.next()){_.index>V?(I=_,_=null):I=_.sibling;var Tl=g(r,_,lt.value,p);if(Tl===null){_===null&&(_=I);break}t&&_&&Tl.alternate===null&&e(r,_),o=i(Tl,o,V),et===null?H=Tl:et.sibling=Tl,et=Tl,_=I}if(lt.done)return l(r,_),tt&&qe(r,V),H;if(_===null){for(;!lt.done;V++,lt=m.next())lt=A(r,lt.value,p),lt!==null&&(o=i(lt,o,V),et===null?H=lt:et.sibling=lt,et=lt);return tt&&qe(r,V),H}for(_=a(_);!lt.done;V++,lt=m.next())lt=y(_,r,V,lt.value,p),lt!==null&&(t&&lt.alternate!==null&&_.delete(lt.key===null?V:lt.key),o=i(lt,o,V),et===null?H=lt:et.sibling=lt,et=lt);return t&&_.forEach(function(Ph){return e(r,Ph)}),tt&&qe(r,V),H}function mt(r,o,m,p){if(typeof m=="object"&&m!==null&&m.type===N&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Lt:t:{for(var H=m.key;o!==null;){if(o.key===H){if(H=m.type,H===N){if(o.tag===7){l(r,o.sibling),p=n(o,m.props.children),p.return=r,r=p;break t}}else if(o.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ct&&Gl(H)===o.type){l(r,o.sibling),p=n(o,m.props),Ja(p,m),p.return=r,r=p;break t}l(r,o);break}else e(r,o);o=o.sibling}m.type===N?(p=xl(m.props.children,r.mode,p,m.key),p.return=r,r=p):(p=Vn(m.type,m.key,m.props,null,r.mode,p),Ja(p,m),p.return=r,r=p)}return u(r);case Xt:t:{for(H=m.key;o!==null;){if(o.key===H)if(o.tag===4&&o.stateNode.containerInfo===m.containerInfo&&o.stateNode.implementation===m.implementation){l(r,o.sibling),p=n(o,m.children||[]),p.return=r,r=p;break t}else{l(r,o);break}else e(r,o);o=o.sibling}p=zu(m,r.mode,p),p.return=r,r=p}return u(r);case Ct:return m=Gl(m),mt(r,o,m,p)}if(Ee(m))return M(r,o,m,p);if(Qt(m)){if(H=Qt(m),typeof H!="function")throw Error(h(150));return m=H.call(m),G(r,o,m,p)}if(typeof m.then=="function")return mt(r,o,In(m),p);if(m.$$typeof===Tt)return mt(r,o,Jn(r,m),p);Pn(r,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,o!==null&&o.tag===6?(l(r,o.sibling),p=n(o,m),p.return=r,r=p):(l(r,o),p=Du(m,r.mode,p),p.return=r,r=p),u(r)):l(r,o)}return function(r,o,m,p){try{Ka=0;var H=mt(r,o,m,p);return ra=null,H}catch(_){if(_===fa||_===Fn)throw _;var et=ie(29,_,null,r.mode);return et.lanes=p,et.return=r,et}}}var ql=No(!0),xo=No(!1),ul=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function cl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(nt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=kn(t),go(t,null,l),e}return Qn(t,a,e,l),kn(t)}function Wa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Es(t,l)}}function Yu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Lu=!1;function Fa(){if(Lu){var t=oa;if(t!==null)throw t}}function $a(t,e,l,a){Lu=!1;var n=t.updateQueue;ul=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,d=s.next;s.next=null,u===null?i=d:u.next=d,u=s;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=d:c.next=d,v.lastBaseUpdate=s))}if(i!==null){var A=n.baseState;u=0,v=d=s=null,c=i;do{var g=c.lane&-536870913,y=g!==c.lane;if(y?($&g)===g:(a&g)===g){g!==0&&g===sa&&(Lu=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var M=t,G=c;g=e;var mt=l;switch(G.tag){case 1:if(M=G.payload,typeof M=="function"){A=M.call(mt,A,g);break t}A=M;break t;case 3:M.flags=M.flags&-65537|128;case 0:if(M=G.payload,g=typeof M=="function"?M.call(mt,A,g):M,g==null)break t;A=j({},A,g);break t;case 2:ul=!0}}g=c.callback,g!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[g]:y.push(g))}else y={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(d=v=y,s=A):v=v.next=y,u|=g;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);v===null&&(s=A),n.baseState=s,n.firstBaseUpdate=d,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),dl|=u,t.lanes=u,t.memoizedState=A}}function Uo(t,e){if(typeof t!="function")throw Error(h(191,t));t.call(e)}function Ho(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Uo(l[t],e)}var ma=f(null),ti=f(0);function jo(t,e){t=Fe,z(ti,t),z(ma,e),Fe=t|e.baseLanes}function Xu(){z(ti,Fe),z(ma,ma.current)}function Qu(){Fe=ti.current,E(ma),E(ti)}var ue=f(null),pe=null;function ol(t){var e=t.alternate;z(zt,zt.current&1),z(ue,t),pe===null&&(e===null||ma.current!==null||e.memoizedState!==null)&&(pe=t)}function ku(t){z(zt,zt.current),z(ue,t),pe===null&&(pe=t)}function wo(t){t.tag===22?(z(zt,zt.current),z(ue,t),pe===null&&(pe=t)):fl()}function fl(){z(zt,zt.current),z(ue,ue.current)}function ce(t){E(ue),pe===t&&(pe=null),E(zt)}var zt=f(0);function ei(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Fc(l)||$c(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xe=0,k=null,ft=null,_t=null,li=!1,da=!1,Yl=!1,ai=0,Ia=0,ha=null,Qd=0;function St(){throw Error(h(321))}function Vu(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ne(t[l],e[l]))return!1;return!0}function Zu(t,e,l,a,n,i){return Xe=i,k=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,b.H=t===null||t.memoizedState===null?Sf:cc,Yl=!1,i=l(a,n),Yl=!1,da&&(i=Bo(e,l,a,n)),Go(t),i}function Go(t){b.H=en;var e=ft!==null&&ft.next!==null;if(Xe=0,_t=ft=k=null,li=!1,Ia=0,ha=null,e)throw Error(h(300));t===null||Ot||(t=t.dependencies,t!==null&&Kn(t)&&(Ot=!0))}function Bo(t,e,l,a){k=t;var n=0;do{if(da&&(ha=null),Ia=0,da=!1,25<=n)throw Error(h(301));if(n+=1,_t=ft=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=Af,i=e(l,a)}while(da);return i}function kd(){var t=b.H,e=t.useState()[0];return e=typeof e.then=="function"?Pa(e):e,t=t.useState()[0],(ft!==null?ft.memoizedState:null)!==t&&(k.flags|=1024),e}function Ku(){var t=ai!==0;return ai=0,t}function Ju(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Wu(t){if(li){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}li=!1}Xe=0,_t=ft=k=null,da=!1,Ia=ai=0,ha=null}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?k.memoizedState=_t=t:_t=_t.next=t,_t}function Mt(){if(ft===null){var t=k.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=_t===null?k.memoizedState:_t.next;if(e!==null)_t=e,ft=t;else{if(t===null)throw k.alternate===null?Error(h(467)):Error(h(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},_t===null?k.memoizedState=_t=t:_t=_t.next=t}return _t}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(t){var e=Ia;return Ia+=1,ha===null&&(ha=[]),t=Ro(ha,t,e),e=k,(_t===null?e.memoizedState:_t.next)===null&&(e=e.alternate,b.H=e===null||e.memoizedState===null?Sf:cc),t}function ii(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pa(t);if(t.$$typeof===Tt)return Bt(t)}throw Error(h(438,String(t)))}function Fu(t){var e=null,l=k.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=k.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=ni(),k.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=_e;return e.index++,l}function Qe(t,e){return typeof e=="function"?e(t):e}function ui(t){var e=Mt();return $u(e,ft,t)}function $u(t,e,l){var a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,s=null,d=e,v=!1;do{var A=d.lane&-536870913;if(A!==d.lane?($&A)===A:(Xe&A)===A){var g=d.revertLane;if(g===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),A===sa&&(v=!0);else if((Xe&g)===g){d=d.next,g===sa&&(v=!0);continue}else A={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(c=s=A,u=i):s=s.next=A,k.lanes|=g,dl|=g;A=d.action,Yl&&l(i,A),i=d.hasEagerState?d.eagerState:l(i,A)}else g={lane:A,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(c=s=g,u=i):s=s.next=g,k.lanes|=A,dl|=A;d=d.next}while(d!==null&&d!==e);if(s===null?u=i:s.next=c,!ne(i,t.memoizedState)&&(Ot=!0,v&&(l=oa,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Iu(t){var e=Mt(),l=e.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);ne(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function qo(t,e,l){var a=k,n=Mt(),i=tt;if(i){if(l===void 0)throw Error(h(407));l=l()}else l=e();var u=!ne((ft||n).memoizedState,l);if(u&&(n.memoizedState=l,Ot=!0),n=n.queue,ec(Xo.bind(null,a,n,t),[t]),n.getSnapshot!==e||u||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},Lo.bind(null,a,n,l,e),null),gt===null)throw Error(h(349));i||(Xe&127)!==0||Yo(a,e,l)}return l}function Yo(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=k.updateQueue,e===null?(e=ni(),k.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Lo(t,e,l,a){e.value=l,e.getSnapshot=a,Qo(e)&&ko(t)}function Xo(t,e,l){return l(function(){Qo(e)&&ko(t)})}function Qo(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ne(t,l)}catch{return!0}}function ko(t){var e=Nl(t,2);e!==null&&Pt(e,t,2)}function Pu(t){var e=Zt();if(typeof t=="function"){var l=t;if(t=l(),Yl){Pe(!0);try{l()}finally{Pe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:t},e}function Vo(t,e,l,a){return t.baseState=l,$u(t,ft,typeof a=="function"?a:Qe)}function Vd(t,e,l,a,n){if(oi(t))throw Error(h(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Zo(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Zo(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=b.T,u={};b.T=u;try{var c=l(n,a),s=b.S;s!==null&&s(u,c),Ko(t,e,c)}catch(d){tc(t,e,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),b.T=i}}else try{i=l(n,a),Ko(t,e,i)}catch(d){tc(t,e,d)}}function Ko(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Jo(t,e,a)},function(a){return tc(t,e,a)}):Jo(t,e,l)}function Jo(t,e,l){e.status="fulfilled",e.value=l,Wo(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Zo(t,l)))}function tc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Wo(e),e=e.next;while(e!==a)}t.action=null}function Wo(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Fo(t,e){return e}function $o(t,e){if(tt){var l=gt.formState;if(l!==null){t:{var a=k;if(tt){if(vt){e:{for(var n=vt,i=be;n.nodeType!==8;){if(!i){n=null;break e}if(n=Se(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){vt=Se(n.nextSibling),a=n.data==="F!";break t}}nl(a)}a=!1}a&&(e=l[0])}}return l=Zt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},l.queue=a,l=vf.bind(null,k,a),a.dispatch=l,a=Pu(!1),i=uc.bind(null,k,!1,a.queue),a=Zt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Vd.bind(null,k,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Io(t){var e=Mt();return Po(e,ft,t)}function Po(t,e,l){if(e=$u(t,e,Fo)[0],t=ui(Qe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Pa(e)}catch(u){throw u===fa?Fn:u}else a=e;e=Mt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(k.flags|=2048,ga(9,{destroy:void 0},Zd.bind(null,n,l),null)),[a,i,t]}function Zd(t,e){t.action=e}function tf(t){var e=Mt(),l=ft;if(l!==null)return Po(e,l,t);Mt(),e=e.memoizedState,l=Mt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ga(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=k.updateQueue,e===null&&(e=ni(),k.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ef(){return Mt().memoizedState}function ci(t,e,l,a){var n=Zt();k.flags|=t,n.memoizedState=ga(1|e,{destroy:void 0},l,a===void 0?null:a)}function si(t,e,l,a){var n=Mt();a=a===void 0?null:a;var i=n.memoizedState.inst;ft!==null&&a!==null&&Vu(a,ft.memoizedState.deps)?n.memoizedState=ga(e,i,l,a):(k.flags|=t,n.memoizedState=ga(1|e,i,l,a))}function lf(t,e){ci(8390656,8,t,e)}function ec(t,e){si(2048,8,t,e)}function Kd(t){k.flags|=4;var e=k.updateQueue;if(e===null)e=ni(),k.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function af(t){var e=Mt().memoizedState;return Kd({ref:e,nextImpl:t}),function(){if((nt&2)!==0)throw Error(h(440));return e.impl.apply(void 0,arguments)}}function nf(t,e){return si(4,2,t,e)}function uf(t,e){return si(4,4,t,e)}function cf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sf(t,e,l){l=l!=null?l.concat([t]):null,si(4,4,cf.bind(null,e,t),l)}function lc(){}function of(t,e){var l=Mt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Vu(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function ff(t,e){var l=Mt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Vu(e,a[1]))return a[0];if(a=t(),Yl){Pe(!0);try{t()}finally{Pe(!1)}}return l.memoizedState=[a,e],a}function ac(t,e,l){return l===void 0||(Xe&1073741824)!==0&&($&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=rr(),k.lanes|=t,dl|=t,l)}function rf(t,e,l,a){return ne(l,e)?l:ma.current!==null?(t=ac(t,l,a),ne(t,e)||(Ot=!0),t):(Xe&42)===0||(Xe&1073741824)!==0&&($&261930)===0?(Ot=!0,t.memoizedState=l):(t=rr(),k.lanes|=t,dl|=t,e)}function mf(t,e,l,a,n){var i=D.p;D.p=i!==0&&8>i?i:8;var u=b.T,c={};b.T=c,uc(t,!1,e,l);try{var s=n(),d=b.S;if(d!==null&&d(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=Xd(s,a);tn(t,e,v,fe(t))}else tn(t,e,a,fe(t))}catch(A){tn(t,e,{then:function(){},status:"rejected",reason:A},fe())}finally{D.p=i,u!==null&&c.types!==null&&(u.types=c.types),b.T=u}}function Jd(){}function nc(t,e,l,a){if(t.tag!==5)throw Error(h(476));var n=df(t).queue;mf(t,n,e,q,l===null?Jd:function(){return hf(t),l(a)})}function df(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:q},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function hf(t){var e=df(t);e.next===null&&(e=t.alternate.memoizedState),tn(t,e.next.queue,{},fe())}function ic(){return Bt(bn)}function gf(){return Mt().memoizedState}function yf(){return Mt().memoizedState}function Wd(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=fe();t=cl(l);var a=sl(e,t,l);a!==null&&(Pt(a,e,l),Wa(a,e,l)),e={cache:Hu()},t.payload=e;return}e=e.return}}function Fd(t,e,l){var a=fe();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},oi(t)?bf(e,l):(l=Tu(t,e,l,a),l!==null&&(Pt(l,t,a),pf(l,e,a)))}function vf(t,e,l){var a=fe();tn(t,e,l,a)}function tn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(oi(t))bf(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,ne(c,u))return Qn(t,e,n,0),gt===null&&Xn(),!1}catch{}if(l=Tu(t,e,n,a),l!==null)return Pt(l,t,a),pf(l,e,a),!0}return!1}function uc(t,e,l,a){if(a={lane:2,revertLane:Bc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(t)){if(e)throw Error(h(479))}else e=Tu(t,l,a,2),e!==null&&Pt(e,t,2)}function oi(t){var e=t.alternate;return t===k||e!==null&&e===k}function bf(t,e){da=li=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function pf(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Es(t,l)}}var en={readContext:Bt,use:ii,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St};en.useEffectEvent=St;var Sf={readContext:Bt,use:ii,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:lf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ci(4194308,4,cf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ci(4194308,4,t,e)},useInsertionEffect:function(t,e){ci(4,2,t,e)},useMemo:function(t,e){var l=Zt();e=e===void 0?null:e;var a=t();if(Yl){Pe(!0);try{t()}finally{Pe(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Zt();if(l!==void 0){var n=l(e);if(Yl){Pe(!0);try{l(e)}finally{Pe(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Fd.bind(null,k,t),[a.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:function(t){t=Pu(t);var e=t.queue,l=vf.bind(null,k,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:lc,useDeferredValue:function(t,e){var l=Zt();return ac(l,t,e)},useTransition:function(){var t=Pu(!1);return t=mf.bind(null,k,t.queue,!0,!1),Zt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=k,n=Zt();if(tt){if(l===void 0)throw Error(h(407));l=l()}else{if(l=e(),gt===null)throw Error(h(349));($&127)!==0||Yo(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,lf(Xo.bind(null,a,i,t),[t]),a.flags|=2048,ga(9,{destroy:void 0},Lo.bind(null,a,i,l,e),null),l},useId:function(){var t=Zt(),e=gt.identifierPrefix;if(tt){var l=Ne,a=Oe;l=(a&~(1<<32-ae(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=ai++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Qd++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:ic,useFormState:$o,useActionState:$o,useOptimistic:function(t){var e=Zt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=uc.bind(null,k,!0,l),l.dispatch=e,[t,e]},useMemoCache:Fu,useCacheRefresh:function(){return Zt().memoizedState=Wd.bind(null,k)},useEffectEvent:function(t){var e=Zt(),l={impl:t};return e.memoizedState=l,function(){if((nt&2)!==0)throw Error(h(440));return l.impl.apply(void 0,arguments)}}},cc={readContext:Bt,use:ii,useCallback:of,useContext:Bt,useEffect:ec,useImperativeHandle:sf,useInsertionEffect:nf,useLayoutEffect:uf,useMemo:ff,useReducer:ui,useRef:ef,useState:function(){return ui(Qe)},useDebugValue:lc,useDeferredValue:function(t,e){var l=Mt();return rf(l,ft.memoizedState,t,e)},useTransition:function(){var t=ui(Qe)[0],e=Mt().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:qo,useId:gf,useHostTransitionStatus:ic,useFormState:Io,useActionState:Io,useOptimistic:function(t,e){var l=Mt();return Vo(l,ft,t,e)},useMemoCache:Fu,useCacheRefresh:yf};cc.useEffectEvent=af;var Af={readContext:Bt,use:ii,useCallback:of,useContext:Bt,useEffect:ec,useImperativeHandle:sf,useInsertionEffect:nf,useLayoutEffect:uf,useMemo:ff,useReducer:Iu,useRef:ef,useState:function(){return Iu(Qe)},useDebugValue:lc,useDeferredValue:function(t,e){var l=Mt();return ft===null?ac(l,t,e):rf(l,ft.memoizedState,t,e)},useTransition:function(){var t=Iu(Qe)[0],e=Mt().memoizedState;return[typeof t=="boolean"?t:Pa(t),e]},useSyncExternalStore:qo,useId:gf,useHostTransitionStatus:ic,useFormState:tf,useActionState:tf,useOptimistic:function(t,e){var l=Mt();return ft!==null?Vo(l,ft,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:yf};Af.useEffectEvent=af;function sc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:j({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var oc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=fe(),n=cl(a);n.payload=e,l!=null&&(n.callback=l),e=sl(t,n,a),e!==null&&(Pt(e,t,a),Wa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=fe(),n=cl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=sl(t,n,a),e!==null&&(Pt(e,t,a),Wa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=fe(),a=cl(l);a.tag=2,e!=null&&(a.callback=e),e=sl(t,a,l),e!==null&&(Pt(e,t,l),Wa(e,t,l))}};function Ef(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!La(l,a)||!La(n,i):!0}function Tf(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function Ll(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=j({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Cf(t){Ln(t)}function Df(t){console.error(t)}function zf(t){Ln(t)}function fi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Mf(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fc(t,e,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){fi(t,e)},l}function Rf(t){return t=cl(t),t.tag=3,t}function _f(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Mf(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Mf(e,l,a),typeof n!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function $d(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ca(e,l,n,!0),l=ue.current,l!==null){switch(l.tag){case 31:case 13:return pe===null?Ei():l.alternate===null&&At===0&&(At=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===$n?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),jc(t,a,n)),!1;case 22:return l.flags|=65536,a===$n?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),jc(t,a,n)),!1}throw Error(h(435,l.tag))}return jc(t,a,n),Ei(),!1}if(tt)return e=ue.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==_u&&(t=Error(h(422),{cause:a}),ka(ge(t,l)))):(a!==_u&&(e=Error(h(423),{cause:a}),ka(ge(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=ge(a,l),n=fc(t.stateNode,a,n),Yu(t,n),At!==4&&(At=2)),!1;var i=Error(h(520),{cause:a});if(i=ge(i,l),fn===null?fn=[i]:fn.push(i),At!==4&&(At=2),e===null)return!0;a=ge(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=fc(l.stateNode,a,t),Yu(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(hl===null||!hl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Rf(n),_f(n,t,l,a),Yu(l,n),!1}l=l.return}while(l!==null);return!1}var rc=Error(h(461)),Ot=!1;function qt(t,e,l,a){e.child=t===null?xo(e,null,l,a):ql(e,t.child,l,a)}function Of(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return jl(e),a=Zu(t,e,l,u,i,n),c=Ku(),t!==null&&!Ot?(Ju(t,e,n),ke(t,e,n)):(tt&&c&&Mu(e),e.flags|=1,qt(t,e,a,n),e.child)}function Nf(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Cu(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,xf(t,e,i,a,n)):(t=Vn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!pc(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:La,l(u,a)&&t.ref===e.ref)return ke(t,e,n)}return e.flags|=1,t=Be(i,a),t.ref=e.ref,t.return=e,e.child=t}function xf(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(La(i,a)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=a=i,pc(t,n))(t.flags&131072)!==0&&(Ot=!0);else return e.lanes=t.lanes,ke(t,e,n)}return mc(t,e,l,a,n)}function Uf(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return Hf(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wn(e,i!==null?i.cachePool:null),i!==null?jo(e,i):Xu(),wo(e);else return a=e.lanes=536870912,Hf(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Wn(e,i.cachePool),jo(e,i),fl(),e.memoizedState=null):(t!==null&&Wn(e,null),Xu(),fl());return qt(t,e,n,l),e.child}function ln(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Hf(t,e,l,a,n){var i=wu();return i=i===null?null:{parent:Rt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Wn(e,null),Xu(),wo(e),t!==null&&ca(t,e,a,!0),e.childLanes=n,null}function ri(t,e){return e=di({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function jf(t,e,l){return ql(e,t.child,null,l),t=ri(e,e.pendingProps),t.flags|=2,ce(e),e.memoizedState=null,t}function Id(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(tt){if(a.mode==="hidden")return t=ri(e,a),e.lanes=536870912,ln(null,t);if(ku(e),(t=vt)?(t=Kr(t,be),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ll!==null?{id:Oe,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},l=vo(t),l.return=e,e.child=l,Gt=e,vt=null)):t=null,t===null)throw nl(e);return e.lanes=536870912,null}return ri(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(ku(e),n)if(e.flags&256)e.flags&=-257,e=jf(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(h(558));else if(Ot||ca(t,e,l,!1),n=(l&t.childLanes)!==0,Ot||n){if(a=gt,a!==null&&(u=Ts(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Nl(t,u),Pt(a,t,u),rc;Ei(),e=jf(t,e,l)}else t=i.treeContext,vt=Se(u.nextSibling),Gt=e,tt=!0,al=null,be=!1,t!==null&&So(e,t),e=ri(e,a),e.flags|=4096;return e}return t=Be(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function mi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(h(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function mc(t,e,l,a,n){return jl(e),l=Zu(t,e,l,a,void 0,n),a=Ku(),t!==null&&!Ot?(Ju(t,e,n),ke(t,e,n)):(tt&&a&&Mu(e),e.flags|=1,qt(t,e,l,n),e.child)}function wf(t,e,l,a,n,i){return jl(e),e.updateQueue=null,l=Bo(e,a,l,n),Go(t),a=Ku(),t!==null&&!Ot?(Ju(t,e,i),ke(t,e,i)):(tt&&a&&Mu(e),e.flags|=1,qt(t,e,l,i),e.child)}function Gf(t,e,l,a,n){if(jl(e),e.stateNode===null){var i=aa,u=l.contextType;typeof u=="object"&&u!==null&&(i=Bt(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=oc,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Bu(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?Bt(u):aa,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(sc(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&oc.enqueueReplaceState(i,i.state,null),$a(e,a,i,n),Fa(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,s=Ll(l,c);i.props=s;var d=i.context,v=l.contextType;u=aa,typeof v=="object"&&v!==null&&(u=Bt(v));var A=l.getDerivedStateFromProps;v=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||d!==u)&&Tf(e,i,a,u),ul=!1;var g=e.memoizedState;i.state=g,$a(e,a,i,n),Fa(),d=e.memoizedState,c||g!==d||ul?(typeof A=="function"&&(sc(e,l,A,a),d=e.memoizedState),(s=ul||Ef(e,l,s,a,g,d,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=d),i.props=a,i.state=d,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,qu(t,e),u=e.memoizedProps,v=Ll(l,u),i.props=v,A=e.pendingProps,g=i.context,d=l.contextType,s=aa,typeof d=="object"&&d!==null&&(s=Bt(d)),c=l.getDerivedStateFromProps,(d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||g!==s)&&Tf(e,i,a,s),ul=!1,g=e.memoizedState,i.state=g,$a(e,a,i,n),Fa();var y=e.memoizedState;u!==A||g!==y||ul||t!==null&&t.dependencies!==null&&Kn(t.dependencies)?(typeof c=="function"&&(sc(e,l,c,a),y=e.memoizedState),(v=ul||Ef(e,l,v,a,g,y,s)||t!==null&&t.dependencies!==null&&Kn(t.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=y),i.props=a,i.state=y,i.context=s,a=v):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,mi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=ql(e,t.child,null,n),e.child=ql(e,null,l,n)):qt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=ke(t,e,n),t}function Bf(t,e,l,a){return Ul(),e.flags|=256,qt(t,e,l,a),e.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(t){return{baseLanes:t,cachePool:zo()}}function gc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=oe),t}function qf(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(zt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(tt){if(n?ol(e):fl(),(t=vt)?(t=Kr(t,be),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ll!==null?{id:Oe,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},l=vo(t),l.return=e,e.child=l,Gt=e,vt=null)):t=null,t===null)throw nl(e);return $c(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(fl(),n=e.mode,c=di({mode:"hidden",children:c},n),a=xl(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=hc(l),a.childLanes=gc(t,u,l),e.memoizedState=dc,ln(null,a)):(ol(e),yc(e,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)e.flags&256?(ol(e),e.flags&=-257,e=vc(t,e,l)):e.memoizedState!==null?(fl(),e.child=t.child,e.flags|=128,e=null):(fl(),c=a.fallback,n=e.mode,a=di({mode:"visible",children:a.children},n),c=xl(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,ql(e,t.child,null,l),a=e.child,a.memoizedState=hc(l),a.childLanes=gc(t,u,l),e.memoizedState=dc,e=ln(null,a));else if(ol(e),$c(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var d=u.dgst;u=d,a=Error(h(419)),a.stack="",a.digest=u,ka({value:a,source:null,stack:null}),e=vc(t,e,l)}else if(Ot||ca(t,e,l,!1),u=(l&t.childLanes)!==0,Ot||u){if(u=gt,u!==null&&(a=Ts(u,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Nl(t,a),Pt(u,t,a),rc;Fc(c)||Ei(),e=vc(t,e,l)}else Fc(c)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,vt=Se(c.nextSibling),Gt=e,tt=!0,al=null,be=!1,t!==null&&So(e,t),e=yc(e,a.children),e.flags|=4096);return e}return n?(fl(),c=a.fallback,n=e.mode,s=t.child,d=s.sibling,a=Be(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,d!==null?c=Be(d,c):(c=xl(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,ln(null,a),a=e.child,c=t.child.memoizedState,c===null?c=hc(l):(n=c.cachePool,n!==null?(s=Rt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=zo(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=gc(t,u,l),e.memoizedState=dc,ln(t.child,a)):(ol(e),l=t.child,t=l.sibling,l=Be(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function yc(t,e){return e=di({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function di(t,e){return t=ie(22,t,null,e),t.lanes=0,t}function vc(t,e,l){return ql(e,t.child,null,l),t=yc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yf(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),xu(t.return,e,l)}function bc(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Lf(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=zt.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,z(zt,u),qt(t,e,a,l),a=tt?Qa:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yf(t,l,e);else if(t.tag===19)Yf(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ei(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),bc(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ei(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}bc(e,!0,l,null,i,a);break;case"together":bc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function ke(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),dl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ca(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(h(153));if(e.child!==null){for(t=e.child,l=Be(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Be(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function pc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Kn(t)))}function Pd(t,e,l){switch(e.tag){case 3:Vt(e,e.stateNode.containerInfo),il(e,Rt,t.memoizedState.cache),Ul();break;case 27:case 5:Ra(e);break;case 4:Vt(e,e.stateNode.containerInfo);break;case 10:il(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ku(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(ol(e),e.flags|=128,null):(l&e.child.childLanes)!==0?qf(t,e,l):(ol(e),t=ke(t,e,l),t!==null?t.sibling:null);ol(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ca(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Lf(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),z(zt,zt.current),a)break;return null;case 22:return e.lanes=0,Uf(t,e,l,e.pendingProps);case 24:il(e,Rt,t.memoizedState.cache)}return ke(t,e,l)}function Xf(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ot=!0;else{if(!pc(t,l)&&(e.flags&128)===0)return Ot=!1,Pd(t,e,l);Ot=(t.flags&131072)!==0}else Ot=!1,tt&&(e.flags&1048576)!==0&&po(e,Qa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Gl(e.elementType),e.type=t,typeof t=="function")Cu(t)?(a=Ll(t,a),e.tag=1,e=Gf(null,e,t,a,l)):(e.tag=0,e=mc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===jt){e.tag=11,e=Of(null,e,t,a,l);break t}else if(n===B){e.tag=14,e=Nf(null,e,t,a,l);break t}}throw e=He(t)||t,Error(h(306,e,""))}}return e;case 0:return mc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Ll(a,e.pendingProps),Gf(t,e,a,n,l);case 3:t:{if(Vt(e,e.stateNode.containerInfo),t===null)throw Error(h(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,qu(t,e),$a(e,a,null,l);var u=e.memoizedState;if(a=u.cache,il(e,Rt,a),a!==i.cache&&Uu(e,[Rt],l,!0),Fa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Bf(t,e,a,l);break t}else if(a!==n){n=ge(Error(h(424)),e),ka(n),e=Bf(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,vt=Se(t.firstChild),Gt=e,tt=!0,al=null,be=!0,l=xo(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ul(),a===n){e=ke(t,e,l);break t}qt(t,e,a,l)}e=e.child}return e;case 26:return mi(t,e),t===null?(l=Pr(e.type,null,e.pendingProps,null))?e.memoizedState=l:tt||(l=e.type,t=e.pendingProps,a=_i(J.current).createElement(l),a[wt]=e,a[Kt]=t,Yt(a,l,t),Ut(a),e.stateNode=a):e.memoizedState=Pr(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ra(e),t===null&&tt&&(a=e.stateNode=Fr(e.type,e.pendingProps,J.current),Gt=e,be=!0,n=vt,bl(e.type)?(Ic=n,vt=Se(a.firstChild)):vt=n),qt(t,e,e.pendingProps.children,l),mi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&tt&&((n=a=vt)&&(a=_h(a,e.type,e.pendingProps,be),a!==null?(e.stateNode=a,Gt=e,vt=Se(a.firstChild),be=!1,n=!0):n=!1),n||nl(e)),Ra(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,Kc(n,i)?a=null:u!==null&&Kc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Zu(t,e,kd,null,null,l),bn._currentValue=n),mi(t,e),qt(t,e,a,l),e.child;case 6:return t===null&&tt&&((t=l=vt)&&(l=Oh(l,e.pendingProps,be),l!==null?(e.stateNode=l,Gt=e,vt=null,t=!0):t=!1),t||nl(e)),null;case 13:return qf(t,e,l);case 4:return Vt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ql(e,null,a,l):qt(t,e,a,l),e.child;case 11:return Of(t,e,e.type,e.pendingProps,l);case 7:return qt(t,e,e.pendingProps,l),e.child;case 8:return qt(t,e,e.pendingProps.children,l),e.child;case 12:return qt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,il(e,e.type,a.value),qt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,jl(e),n=Bt(n),a=a(n),e.flags|=1,qt(t,e,a,l),e.child;case 14:return Nf(t,e,e.type,e.pendingProps,l);case 15:return xf(t,e,e.type,e.pendingProps,l);case 19:return Lf(t,e,l);case 31:return Id(t,e,l);case 22:return Uf(t,e,l,e.pendingProps);case 24:return jl(e),a=Bt(Rt),t===null?(n=wu(),n===null&&(n=gt,i=Hu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Bu(e),il(e,Rt,n)):((t.lanes&l)!==0&&(qu(t,e),$a(e,null,null,l),Fa()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),il(e,Rt,a)):(a=i.cache,il(e,Rt,a),a!==n.cache&&Uu(e,[Rt],l,!0))),qt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(h(156,e.tag))}function Ve(t){t.flags|=4}function Sc(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(gr())t.flags|=8192;else throw Bl=$n,Gu}else t.flags&=-16777217}function Qf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nm(e))if(gr())t.flags|=8192;else throw Bl=$n,Gu}function hi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ss():536870912,t.lanes|=e,pa|=e)}function an(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function th(t,e,l){var a=e.pendingProps;switch(Ru(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return bt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Le(Rt),Dt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ua(e)?Ve(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ou())),bt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Ve(e),i!==null?(bt(e),Qf(e,i)):(bt(e),Sc(e,n,null,a,l))):i?i!==t.memoizedState?(Ve(e),bt(e),Qf(e,i)):(bt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ve(e),bt(e),Sc(e,n,t,a,l)),null;case 27:if(Dn(e),l=J.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ve(e);else{if(!a){if(e.stateNode===null)throw Error(h(166));return bt(e),null}t=R.current,ua(e)?Ao(e):(t=Fr(n,a,l),e.stateNode=t,Ve(e))}return bt(e),null;case 5:if(Dn(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ve(e);else{if(!a){if(e.stateNode===null)throw Error(h(166));return bt(e),null}if(i=R.current,ua(e))Ao(e);else{var u=_i(J.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[wt]=e,i[Kt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Yt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ve(e)}}return bt(e),Sc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ve(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(h(166));if(t=J.current,ua(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Gt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[wt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||qr(t.nodeValue,l)),t||nl(e,!0)}else t=_i(t).createTextNode(a),t[wt]=e,e.stateNode=t}return bt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ua(e),l!==null){if(t===null){if(!a)throw Error(h(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(557));t[wt]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bt(e),t=!1}else l=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(ce(e),e):(ce(e),null);if((e.flags&128)!==0)throw Error(h(558))}return bt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ua(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(h(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[wt]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bt(e),n=!1}else n=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ce(e),e):(ce(e),null)}return ce(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),hi(e,e.updateQueue),bt(e),null);case 4:return Dt(),t===null&&Xc(e.stateNode.containerInfo),bt(e),null;case 10:return Le(e.type),bt(e),null;case 19:if(E(zt),a=e.memoizedState,a===null)return bt(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)an(a,!1);else{if(At!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ei(t),i!==null){for(e.flags|=128,an(a,!1),t=i.updateQueue,e.updateQueue=t,hi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)yo(l,t),l=l.sibling;return z(zt,zt.current&1|2),tt&&qe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ee()>pi&&(e.flags|=128,n=!0,an(a,!1),e.lanes=4194304)}else{if(!n)if(t=ei(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,hi(e,t),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!tt)return bt(e),null}else 2*ee()-a.renderingStartTime>pi&&l!==536870912&&(e.flags|=128,n=!0,an(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ee(),t.sibling=null,l=zt.current,z(zt,n?l&1|2:l&1),tt&&qe(e,a.treeForkCount),t):(bt(e),null);case 22:case 23:return ce(e),Qu(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),l=e.updateQueue,l!==null&&hi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&E(wl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Le(Rt),bt(e),null;case 25:return null;case 30:return null}throw Error(h(156,e.tag))}function eh(t,e){switch(Ru(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Le(Rt),Dt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Dn(e),null;case 31:if(e.memoizedState!==null){if(ce(e),e.alternate===null)throw Error(h(340));Ul()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ce(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(h(340));Ul()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return E(zt),null;case 4:return Dt(),null;case 10:return Le(e.type),null;case 22:case 23:return ce(e),Qu(),t!==null&&E(wl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Le(Rt),null;case 25:return null;default:return null}}function kf(t,e){switch(Ru(e),e.tag){case 3:Le(Rt),Dt();break;case 26:case 27:case 5:Dn(e);break;case 4:Dt();break;case 31:e.memoizedState!==null&&ce(e);break;case 13:ce(e);break;case 19:E(zt);break;case 10:Le(e.type);break;case 22:case 23:ce(e),Qu(),t!==null&&E(wl);break;case 24:Le(Rt)}}function nn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){st(e,e.return,c)}}function rl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var s=l,d=c;try{d()}catch(v){st(n,s,v)}}}a=a.next}while(a!==i)}}catch(v){st(e,e.return,v)}}function Vf(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Ho(e,l)}catch(a){st(t,t.return,a)}}}function Zf(t,e,l){l.props=Ll(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){st(t,e,a)}}function un(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){st(t,e,n)}}function xe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){st(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){st(t,e,n)}else l.current=null}function Kf(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){st(t,t.return,n)}}function Ac(t,e,l){try{var a=t.stateNode;Th(a,t.type,l,e),a[Kt]=e}catch(n){st(t,t.return,n)}}function Jf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&bl(t.type)||t.tag===4}function Ec(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&bl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=we));else if(a!==4&&(a===27&&bl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Tc(t,e,l),t=t.sibling;t!==null;)Tc(t,e,l),t=t.sibling}function gi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&bl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(gi(t,e,l),t=t.sibling;t!==null;)gi(t,e,l),t=t.sibling}function Wf(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Yt(e,a,l),e[wt]=t,e[Kt]=l}catch(i){st(t,t.return,i)}}var Ze=!1,Nt=!1,Cc=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function lh(t,e){if(t=t.containerInfo,Vc=wi,t=uo(t),vu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,c=-1,s=-1,d=0,v=0,A=t,g=null;e:for(;;){for(var y;A!==l||n!==0&&A.nodeType!==3||(c=u+n),A!==i||a!==0&&A.nodeType!==3||(s=u+a),A.nodeType===3&&(u+=A.nodeValue.length),(y=A.firstChild)!==null;)g=A,A=y;for(;;){if(A===t)break e;if(g===l&&++d===n&&(c=u),g===i&&++v===a&&(s=u),(y=A.nextSibling)!==null)break;A=g,g=A.parentNode}A=y}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zc={focusedElem:t,selectionRange:l},wi=!1,Ht=e;Ht!==null;)if(e=Ht,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ht=t;else for(;Ht!==null;){switch(e=Ht,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var M=Ll(l.type,n);t=a.getSnapshotBeforeUpdate(M,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(G){st(l,l.return,G)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Wc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(h(163))}if(t=e.sibling,t!==null){t.return=e.return,Ht=t;break}Ht=e.return}}function $f(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Je(t,l),a&4&&nn(5,l);break;case 1:if(Je(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){st(l,l.return,u)}else{var n=Ll(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){st(l,l.return,u)}}a&64&&Vf(l),a&512&&un(l,l.return);break;case 3:if(Je(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Ho(t,e)}catch(u){st(l,l.return,u)}}break;case 27:e===null&&a&4&&Wf(l);case 26:case 5:Je(t,l),e===null&&a&4&&Kf(l),a&512&&un(l,l.return);break;case 12:Je(t,l);break;case 31:Je(t,l),a&4&&tr(t,l);break;case 13:Je(t,l),a&4&&er(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=rh.bind(null,l),Nh(t,l))));break;case 22:if(a=l.memoizedState!==null||Ze,!a){e=e!==null&&e.memoizedState!==null||Nt,n=Ze;var i=Nt;Ze=a,(Nt=e)&&!i?We(t,l,(l.subtreeFlags&8772)!==0):Je(t,l),Ze=n,Nt=i}break;case 30:break;default:Je(t,l)}}function If(t){var e=t.alternate;e!==null&&(t.alternate=null,If(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&tu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pt=null,Wt=!1;function Ke(t,e,l){for(l=l.child;l!==null;)Pf(t,e,l),l=l.sibling}function Pf(t,e,l){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(_a,l)}catch{}switch(l.tag){case 26:Nt||xe(l,e),Ke(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Nt||xe(l,e);var a=pt,n=Wt;bl(l.type)&&(pt=l.stateNode,Wt=!1),Ke(t,e,l),gn(l.stateNode),pt=a,Wt=n;break;case 5:Nt||xe(l,e);case 6:if(a=pt,n=Wt,pt=null,Ke(t,e,l),pt=a,Wt=n,pt!==null)if(Wt)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(l.stateNode)}catch(i){st(l,e,i)}else try{pt.removeChild(l.stateNode)}catch(i){st(l,e,i)}break;case 18:pt!==null&&(Wt?(t=pt,Vr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ma(t)):Vr(pt,l.stateNode));break;case 4:a=pt,n=Wt,pt=l.stateNode.containerInfo,Wt=!0,Ke(t,e,l),pt=a,Wt=n;break;case 0:case 11:case 14:case 15:rl(2,l,e),Nt||rl(4,l,e),Ke(t,e,l);break;case 1:Nt||(xe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Zf(l,e,a)),Ke(t,e,l);break;case 21:Ke(t,e,l);break;case 22:Nt=(a=Nt)||l.memoizedState!==null,Ke(t,e,l),Nt=a;break;default:Ke(t,e,l)}}function tr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ma(t)}catch(l){st(e,e.return,l)}}}function er(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ma(t)}catch(l){st(e,e.return,l)}}function ah(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ff),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ff),e;default:throw Error(h(435,t.tag))}}function yi(t,e){var l=ah(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=mh.bind(null,t,a);a.then(n,n)}})}function Ft(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(bl(c.type)){pt=c.stateNode,Wt=!1;break t}break;case 5:pt=c.stateNode,Wt=!1;break t;case 3:case 4:pt=c.stateNode.containerInfo,Wt=!0;break t}c=c.return}if(pt===null)throw Error(h(160));Pf(i,u,n),pt=null,Wt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)lr(e,t),e=e.sibling}var Ce=null;function lr(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ft(e,t),$t(t),a&4&&(rl(3,t,t.return),nn(3,t),rl(5,t,t.return));break;case 1:Ft(e,t),$t(t),a&512&&(Nt||l===null||xe(l,l.return)),a&64&&Ze&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ce;if(Ft(e,t),$t(t),a&512&&(Nt||l===null||xe(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[xa]||i[wt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Yt(i,a,l),i[wt]=t,Ut(i),a=i;break t;case"link":var u=lm("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(a),Yt(i,a,l),n.head.appendChild(i);break;case"meta":if(u=lm("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}i=n.createElement(a),Yt(i,a,l),n.head.appendChild(i);break;default:throw Error(h(468,a))}i[wt]=t,Ut(i),a=i}t.stateNode=a}else am(n,t.type,t.stateNode);else t.stateNode=em(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?am(n,t.type,t.stateNode):em(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ac(t,t.memoizedProps,l.memoizedProps)}break;case 27:Ft(e,t),$t(t),a&512&&(Nt||l===null||xe(l,l.return)),l!==null&&a&4&&Ac(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Ft(e,t),$t(t),a&512&&(Nt||l===null||xe(l,l.return)),t.flags&32){n=t.stateNode;try{Fl(n,"")}catch(M){st(t,t.return,M)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Ac(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Cc=!0);break;case 6:if(Ft(e,t),$t(t),a&4){if(t.stateNode===null)throw Error(h(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(M){st(t,t.return,M)}}break;case 3:if(xi=null,n=Ce,Ce=Oi(e.containerInfo),Ft(e,t),Ce=n,$t(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(M){st(t,t.return,M)}Cc&&(Cc=!1,ar(t));break;case 4:a=Ce,Ce=Oi(t.stateNode.containerInfo),Ft(e,t),$t(t),Ce=a;break;case 12:Ft(e,t),$t(t);break;case 31:Ft(e,t),$t(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 13:Ft(e,t),$t(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(bi=ee()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 22:n=t.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,d=Ze,v=Nt;if(Ze=d||n,Nt=v||s,Ft(e,t),Nt=v,Ze=d,$t(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||s||Ze||Nt||Xl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){s=l=e;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var A=s.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(M){st(s,s.return,M)}}}else if(e.tag===6){if(l===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(M){st(s,s.return,M)}}}else if(e.tag===18){if(l===null){s=e;try{var y=s.stateNode;n?Zr(y,!0):Zr(s.stateNode,!1)}catch(M){st(s,s.return,M)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,yi(t,l))));break;case 19:Ft(e,t),$t(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 30:break;case 21:break;default:Ft(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Jf(a)){l=a;break}a=a.return}if(l==null)throw Error(h(160));switch(l.tag){case 27:var n=l.stateNode,i=Ec(t);gi(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Fl(u,""),l.flags&=-33);var c=Ec(t);gi(t,c,u);break;case 3:case 4:var s=l.stateNode.containerInfo,d=Ec(t);Tc(t,d,s);break;default:throw Error(h(161))}}catch(v){st(t,t.return,v)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ar(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ar(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Je(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)$f(t,e.alternate,e),e=e.sibling}function Xl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:rl(4,e,e.return),Xl(e);break;case 1:xe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Zf(e,e.return,l),Xl(e);break;case 27:gn(e.stateNode);case 26:case 5:xe(e,e.return),Xl(e);break;case 22:e.memoizedState===null&&Xl(e);break;case 30:Xl(e);break;default:Xl(e)}t=t.sibling}}function We(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:We(n,i,l),nn(4,i);break;case 1:if(We(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){st(a,a.return,d)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Uo(s[n],c)}catch(d){st(a,a.return,d)}}l&&u&64&&Vf(i),un(i,i.return);break;case 27:Wf(i);case 26:case 5:We(n,i,l),l&&a===null&&u&4&&Kf(i),un(i,i.return);break;case 12:We(n,i,l);break;case 31:We(n,i,l),l&&u&4&&tr(n,i);break;case 13:We(n,i,l),l&&u&4&&er(n,i);break;case 22:i.memoizedState===null&&We(n,i,l),un(i,i.return);break;case 30:break;default:We(n,i,l)}e=e.sibling}}function Dc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Va(l))}function zc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Va(t))}function De(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nr(t,e,l,a),e=e.sibling}function nr(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:De(t,e,l,a),n&2048&&nn(9,e);break;case 1:De(t,e,l,a);break;case 3:De(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Va(t)));break;case 12:if(n&2048){De(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){st(e,e.return,s)}}else De(t,e,l,a);break;case 31:De(t,e,l,a);break;case 13:De(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?De(t,e,l,a):cn(t,e):i._visibility&2?De(t,e,l,a):(i._visibility|=2,ya(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Dc(u,e);break;case 24:De(t,e,l,a),n&2048&&zc(e.alternate,e);break;default:De(t,e,l,a)}}function ya(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=l,s=a,d=u.flags;switch(u.tag){case 0:case 11:case 15:ya(i,u,c,s,n),nn(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?ya(i,u,c,s,n):cn(i,u):(v._visibility|=2,ya(i,u,c,s,n)),n&&d&2048&&Dc(u.alternate,u);break;case 24:ya(i,u,c,s,n),n&&d&2048&&zc(u.alternate,u);break;default:ya(i,u,c,s,n)}e=e.sibling}}function cn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&Dc(a.alternate,a);break;case 24:cn(l,a),n&2048&&zc(a.alternate,a);break;default:cn(l,a)}e=e.sibling}}var sn=8192;function va(t,e,l){if(t.subtreeFlags&sn)for(t=t.child;t!==null;)ir(t,e,l),t=t.sibling}function ir(t,e,l){switch(t.tag){case 26:va(t,e,l),t.flags&sn&&t.memoizedState!==null&&Qh(l,Ce,t.memoizedState,t.memoizedProps);break;case 5:va(t,e,l);break;case 3:case 4:var a=Ce;Ce=Oi(t.stateNode.containerInfo),va(t,e,l),Ce=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,va(t,e,l),sn=a):va(t,e,l));break;default:va(t,e,l)}}function ur(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function on(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ht=a,sr(a,t)}ur(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cr(t),t=t.sibling}function cr(t){switch(t.tag){case 0:case 11:case 15:on(t),t.flags&2048&&rl(9,t,t.return);break;case 3:on(t);break;case 12:on(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,vi(t)):on(t);break;default:on(t)}}function vi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ht=a,sr(a,t)}ur(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:rl(8,e,e.return),vi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,vi(e));break;default:vi(e)}t=t.sibling}}function sr(t,e){for(;Ht!==null;){var l=Ht;switch(l.tag){case 0:case 11:case 15:rl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ht=a;else t:for(l=t;Ht!==null;){a=Ht;var n=a.sibling,i=a.return;if(If(a),a===l){Ht=null;break t}if(n!==null){n.return=i,Ht=n;break t}Ht=i}}}var nh={getCacheForType:function(t){var e=Bt(Rt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Bt(Rt).controller.signal}},ih=typeof WeakMap=="function"?WeakMap:Map,nt=0,gt=null,W=null,$=0,ct=0,se=null,ml=!1,ba=!1,Mc=!1,Fe=0,At=0,dl=0,Ql=0,Rc=0,oe=0,pa=0,fn=null,It=null,_c=!1,bi=0,or=0,pi=1/0,Si=null,hl=null,xt=0,gl=null,Sa=null,$e=0,Oc=0,Nc=null,fr=null,rn=0,xc=null;function fe(){return(nt&2)!==0&&$!==0?$&-$:b.T!==null?Bc():Cs()}function rr(){if(oe===0)if(($&536870912)===0||tt){var t=Rn;Rn<<=1,(Rn&3932160)===0&&(Rn=262144),oe=t}else oe=536870912;return t=ue.current,t!==null&&(t.flags|=32),oe}function Pt(t,e,l){(t===gt&&(ct===2||ct===9)||t.cancelPendingCommit!==null)&&(Aa(t,0),yl(t,$,oe,!1)),Na(t,l),((nt&2)===0||t!==gt)&&(t===gt&&((nt&2)===0&&(Ql|=l),At===4&&yl(t,$,oe,!1)),Ue(t))}function mr(t,e,l){if((nt&6)!==0)throw Error(h(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Oa(t,e),n=a?sh(t,e):Hc(t,e,!0),i=a;do{if(n===0){ba&&!a&&yl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!uh(l)){n=Hc(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=fn;var s=c.current.memoizedState.isDehydrated;if(s&&(Aa(c,u).flags|=256),u=Hc(c,u,!1),u!==2){if(Mc&&!s){c.errorRecoveryDisabledLanes|=i,Ql|=i,n=4;break t}i=It,It=n,i!==null&&(It===null?It=i:It.push.apply(It,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Aa(t,0),yl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(h(345));case 4:if((e&4194048)!==e)break;case 6:yl(a,e,oe,!ml);break t;case 2:It=null;break;case 3:case 5:break;default:throw Error(h(329))}if((e&62914560)===e&&(n=bi+300-ee(),10<n)){if(yl(a,e,oe,!ml),On(a,0,!0)!==0)break t;$e=e,a.timeoutHandle=Qr(dr.bind(null,a,l,It,Si,_c,e,oe,Ql,pa,ml,i,"Throttled",-0,0),n);break t}dr(a,l,It,Si,_c,e,oe,Ql,pa,ml,i,null,-0,0)}}break}while(!0);Ue(t)}function dr(t,e,l,a,n,i,u,c,s,d,v,A,g,y){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:we},ir(e,i,A);var M=(i&62914560)===i?bi-ee():(i&4194048)===i?or-ee():0;if(M=kh(A,M),M!==null){$e=i,t.cancelPendingCommit=M(Ar.bind(null,t,e,i,l,a,n,u,c,s,v,A,null,g,y)),yl(t,i,u,!d);return}}Ar(t,e,i,l,a,n,u,c,s)}function uh(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ne(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yl(t,e,l,a){e&=~Rc,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-ae(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&As(t,l,e)}function Ai(){return(nt&6)===0?(mn(0),!1):!0}function Uc(){if(W!==null){if(ct===0)var t=W.return;else t=W,Ye=Hl=null,Wu(t),ra=null,Ka=0,t=W;for(;t!==null;)kf(t.alternate,t),t=t.return;W=null}}function Aa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,zh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),$e=0,Uc(),gt=t,W=l=Be(t.current,null),$=e,ct=0,se=null,ml=!1,ba=Oa(t,e),Mc=!1,pa=oe=Rc=Ql=dl=At=0,It=fn=null,_c=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-ae(a),i=1<<n;e|=t[n],a&=~i}return Fe=e,Xn(),l}function hr(t,e){k=null,b.H=en,e===fa||e===Fn?(e=_o(),ct=3):e===Gu?(e=_o(),ct=4):ct=e===rc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,se=e,W===null&&(At=1,fi(t,ge(e,t.current)))}function gr(){var t=ue.current;return t===null?!0:($&4194048)===$?pe===null:($&62914560)===$||($&536870912)!==0?t===pe:!1}function yr(){var t=b.H;return b.H=en,t===null?en:t}function vr(){var t=b.A;return b.A=nh,t}function Ei(){At=4,ml||($&4194048)!==$&&ue.current!==null||(ba=!0),(dl&134217727)===0&&(Ql&134217727)===0||gt===null||yl(gt,$,oe,!1)}function Hc(t,e,l){var a=nt;nt|=2;var n=yr(),i=vr();(gt!==t||$!==e)&&(Si=null,Aa(t,e)),e=!1;var u=At;t:do try{if(ct!==0&&W!==null){var c=W,s=se;switch(ct){case 8:Uc(),u=6;break t;case 3:case 2:case 9:case 6:ue.current===null&&(e=!0);var d=ct;if(ct=0,se=null,Ea(t,c,s,d),l&&ba){u=0;break t}break;default:d=ct,ct=0,se=null,Ea(t,c,s,d)}}ch(),u=At;break}catch(v){hr(t,v)}while(!0);return e&&t.shellSuspendCounter++,Ye=Hl=null,nt=a,b.H=n,b.A=i,W===null&&(gt=null,$=0,Xn()),u}function ch(){for(;W!==null;)br(W)}function sh(t,e){var l=nt;nt|=2;var a=yr(),n=vr();gt!==t||$!==e?(Si=null,pi=ee()+500,Aa(t,e)):ba=Oa(t,e);t:do try{if(ct!==0&&W!==null){e=W;var i=se;e:switch(ct){case 1:ct=0,se=null,Ea(t,e,i,1);break;case 2:case 9:if(Mo(i)){ct=0,se=null,pr(e);break}e=function(){ct!==2&&ct!==9||gt!==t||(ct=7),Ue(t)},i.then(e,e);break t;case 3:ct=7;break t;case 4:ct=5;break t;case 7:Mo(i)?(ct=0,se=null,pr(e)):(ct=0,se=null,Ea(t,e,i,7));break;case 5:var u=null;switch(W.tag){case 26:u=W.memoizedState;case 5:case 27:var c=W;if(u?nm(u):c.stateNode.complete){ct=0,se=null;var s=c.sibling;if(s!==null)W=s;else{var d=c.return;d!==null?(W=d,Ti(d)):W=null}break e}}ct=0,se=null,Ea(t,e,i,5);break;case 6:ct=0,se=null,Ea(t,e,i,6);break;case 8:Uc(),At=6;break t;default:throw Error(h(462))}}oh();break}catch(v){hr(t,v)}while(!0);return Ye=Hl=null,b.H=a,b.A=n,nt=l,W!==null?0:(gt=null,$=0,Xn(),At)}function oh(){for(;W!==null&&!xm();)br(W)}function br(t){var e=Xf(t.alternate,t,Fe);t.memoizedProps=t.pendingProps,e===null?Ti(t):W=e}function pr(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=wf(l,e,e.pendingProps,e.type,void 0,$);break;case 11:e=wf(l,e,e.pendingProps,e.type.render,e.ref,$);break;case 5:Wu(e);default:kf(l,e),e=W=yo(e,Fe),e=Xf(l,e,Fe)}t.memoizedProps=t.pendingProps,e===null?Ti(t):W=e}function Ea(t,e,l,a){Ye=Hl=null,Wu(e),ra=null,Ka=0;var n=e.return;try{if($d(t,n,e,l,$)){At=1,fi(t,ge(l,t.current)),W=null;return}}catch(i){if(n!==null)throw W=n,i;At=1,fi(t,ge(l,t.current)),W=null;return}e.flags&32768?(tt||a===1?t=!0:ba||($&536870912)!==0?t=!1:(ml=t=!0,(a===2||a===9||a===3||a===6)&&(a=ue.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sr(e,t)):Ti(e)}function Ti(t){var e=t;do{if((e.flags&32768)!==0){Sr(e,ml);return}t=e.return;var l=th(e.alternate,e,Fe);if(l!==null){W=l;return}if(e=e.sibling,e!==null){W=e;return}W=e=t}while(e!==null);At===0&&(At=5)}function Sr(t,e){do{var l=eh(t.alternate,t);if(l!==null){l.flags&=32767,W=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){W=t;return}W=t=l}while(t!==null);At=6,W=null}function Ar(t,e,l,a,n,i,u,c,s){t.cancelPendingCommit=null;do Ci();while(xt!==0);if((nt&6)!==0)throw Error(h(327));if(e!==null){if(e===t.current)throw Error(h(177));if(i=e.lanes|e.childLanes,i|=Eu,Xm(t,l,i,u,c,s),t===gt&&(W=gt=null,$=0),Sa=e,gl=t,$e=l,Oc=i,Nc=n,fr=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dh(zn,function(){return zr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=b.T,b.T=null,n=D.p,D.p=2,u=nt,nt|=4;try{lh(t,e,l)}finally{nt=u,D.p=n,b.T=a}}xt=1,Er(),Tr(),Cr()}}function Er(){if(xt===1){xt=0;var t=gl,e=Sa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=b.T,b.T=null;var a=D.p;D.p=2;var n=nt;nt|=4;try{lr(e,t);var i=Zc,u=uo(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&io(c.ownerDocument.documentElement,c)){if(s!==null&&vu(c)){var d=s.start,v=s.end;if(v===void 0&&(v=d),"selectionStart"in c)c.selectionStart=d,c.selectionEnd=Math.min(v,c.value.length);else{var A=c.ownerDocument||document,g=A&&A.defaultView||window;if(g.getSelection){var y=g.getSelection(),M=c.textContent.length,G=Math.min(s.start,M),mt=s.end===void 0?G:Math.min(s.end,M);!y.extend&&G>mt&&(u=mt,mt=G,G=u);var r=no(c,G),o=no(c,mt);if(r&&o&&(y.rangeCount!==1||y.anchorNode!==r.node||y.anchorOffset!==r.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var m=A.createRange();m.setStart(r.node,r.offset),y.removeAllRanges(),G>mt?(y.addRange(m),y.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),y.addRange(m))}}}}for(A=[],y=c;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var p=A[c];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}wi=!!Vc,Zc=Vc=null}finally{nt=n,D.p=a,b.T=l}}t.current=e,xt=2}}function Tr(){if(xt===2){xt=0;var t=gl,e=Sa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=b.T,b.T=null;var a=D.p;D.p=2;var n=nt;nt|=4;try{$f(t,e.alternate,e)}finally{nt=n,D.p=a,b.T=l}}xt=3}}function Cr(){if(xt===4||xt===3){xt=0,Um();var t=gl,e=Sa,l=$e,a=fr;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?xt=5:(xt=0,Sa=gl=null,Dr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(hl=null),Ii(l),e=e.stateNode,le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(_a,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=b.T,n=D.p,D.p=2,b.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{b.T=e,D.p=n}}($e&3)!==0&&Ci(),Ue(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===xc?rn++:(rn=0,xc=t):rn=0,mn(0)}}function Dr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Va(e)))}function Ci(){return Er(),Tr(),Cr(),zr()}function zr(){if(xt!==5)return!1;var t=gl,e=Oc;Oc=0;var l=Ii($e),a=b.T,n=D.p;try{D.p=32>l?32:l,b.T=null,l=Nc,Nc=null;var i=gl,u=$e;if(xt=0,Sa=gl=null,$e=0,(nt&6)!==0)throw Error(h(331));var c=nt;if(nt|=4,cr(i.current),nr(i,i.current,u,l),nt=c,mn(0,!1),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(_a,i)}catch{}return!0}finally{D.p=n,b.T=a,Dr(t,e)}}function Mr(t,e,l){e=ge(l,e),e=fc(t.stateNode,e,2),t=sl(t,e,2),t!==null&&(Na(t,2),Ue(t))}function st(t,e,l){if(t.tag===3)Mr(t,t,l);else for(;e!==null;){if(e.tag===3){Mr(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(hl===null||!hl.has(a))){t=ge(l,t),l=Rf(2),a=sl(e,l,2),a!==null&&(_f(l,a,e,t),Na(a,2),Ue(a));break}}e=e.return}}function jc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new ih;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Mc=!0,n.add(l),t=fh.bind(null,t,e,l),e.then(t,t))}function fh(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,gt===t&&($&l)===l&&(At===4||At===3&&($&62914560)===$&&300>ee()-bi?(nt&2)===0&&Aa(t,0):Rc|=l,pa===$&&(pa=0)),Ue(t)}function Rr(t,e){e===0&&(e=Ss()),t=Nl(t,e),t!==null&&(Na(t,e),Ue(t))}function rh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Rr(t,l)}function mh(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(e),Rr(t,l)}function dh(t,e){return Ji(t,e)}var Di=null,Ta=null,wc=!1,zi=!1,Gc=!1,vl=0;function Ue(t){t!==Ta&&t.next===null&&(Ta===null?Di=Ta=t:Ta=Ta.next=t),zi=!0,wc||(wc=!0,gh())}function mn(t,e){if(!Gc&&zi){Gc=!0;do for(var l=!1,a=Di;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-ae(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,xr(a,i))}else i=$,i=On(a,a===gt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Oa(a,i)||(l=!0,xr(a,i));a=a.next}while(l);Gc=!1}}function hh(){_r()}function _r(){zi=wc=!1;var t=0;vl!==0&&Dh()&&(t=vl);for(var e=ee(),l=null,a=Di;a!==null;){var n=a.next,i=Or(a,e);i===0?(a.next=null,l===null?Di=n:l.next=n,n===null&&(Ta=l)):(l=a,(t!==0||(i&3)!==0)&&(zi=!0)),a=n}xt!==0&&xt!==5||mn(t),vl!==0&&(vl=0)}function Or(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-ae(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&a)!==0)&&(n[u]=Lm(c,e)):s<=e&&(t.expiredLanes|=c),i&=~c}if(e=gt,l=$,l=On(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(ct===2||ct===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Wi(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Oa(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Wi(a),Ii(l)){case 2:case 8:l=bs;break;case 32:l=zn;break;case 268435456:l=ps;break;default:l=zn}return a=Nr.bind(null,t),l=Ji(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Wi(a),t.callbackPriority=2,t.callbackNode=null,2}function Nr(t,e){if(xt!==0&&xt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Ci()&&t.callbackNode!==l)return null;var a=$;return a=On(t,t===gt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(mr(t,a,e),Or(t,ee()),t.callbackNode!=null&&t.callbackNode===l?Nr.bind(null,t):null)}function xr(t,e){if(Ci())return null;mr(t,e,!0)}function gh(){Mh(function(){(nt&6)!==0?Ji(vs,hh):_r()})}function Bc(){if(vl===0){var t=sa;t===0&&(t=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),vl=t}return vl}function Ur(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Hn(""+t)}function Hr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function yh(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Ur((n[Kt]||null).action),u=a.submitter;u&&(e=(e=u[Kt]||null)?Ur(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new Bn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(vl!==0){var s=u?Hr(n,u):new FormData(n);nc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?Hr(n,u):new FormData(n),nc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var qc=0;qc<Au.length;qc++){var Yc=Au[qc],vh=Yc.toLowerCase(),bh=Yc[0].toUpperCase()+Yc.slice(1);Te(vh,"on"+bh)}Te(oo,"onAnimationEnd"),Te(fo,"onAnimationIteration"),Te(ro,"onAnimationStart"),Te("dblclick","onDoubleClick"),Te("focusin","onFocus"),Te("focusout","onBlur"),Te(Hd,"onTransitionRun"),Te(jd,"onTransitionStart"),Te(wd,"onTransitionCancel"),Te(mo,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),Ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ml("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ph=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function jr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,d=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=d;try{i(n)}catch(v){Ln(v)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,d=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=d;try{i(n)}catch(v){Ln(v)}n.currentTarget=null,i=s}}}}function F(t,e){var l=e[Pi];l===void 0&&(l=e[Pi]=new Set);var a=t+"__bubble";l.has(a)||(wr(e,t,2,!1),l.add(a))}function Lc(t,e,l){var a=0;e&&(a|=4),wr(l,t,a,e)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Xc(t){if(!t[Mi]){t[Mi]=!0,Ms.forEach(function(l){l!=="selectionchange"&&(ph.has(l)||Lc(l,!1,t),Lc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mi]||(e[Mi]=!0,Lc("selectionchange",!1,e))}}function wr(t,e,l,a){switch(rm(e)){case 2:var n=Kh;break;case 8:n=Jh;break;default:n=as}l=n.bind(null,e,l,t),n=void 0,!su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Qc(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Vl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue t}c=c.parentNode}}a=a.return}qs(function(){var d=i,v=uu(l),A=[];t:{var g=ho.get(t);if(g!==void 0){var y=Bn,M=t;switch(t){case"keypress":if(wn(l)===0)break t;case"keydown":case"keyup":y=md;break;case"focusin":M="focus",y=mu;break;case"focusout":M="blur",y=mu;break;case"beforeblur":case"afterblur":y=mu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gd;break;case oo:case fo:case ro:y=ad;break;case mo:y=vd;break;case"scroll":case"scrollend":y=Im;break;case"wheel":y=pd;break;case"copy":case"cut":case"paste":y=id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ks;break;case"toggle":case"beforetoggle":y=Ad}var G=(e&4)!==0,mt=!G&&(t==="scroll"||t==="scrollend"),r=G?g!==null?g+"Capture":null:g;G=[];for(var o=d,m;o!==null;){var p=o;if(m=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||m===null||r===null||(p=Ha(o,r),p!=null&&G.push(hn(o,p,m))),mt)break;o=o.return}0<G.length&&(g=new y(g,M,null,l,v),A.push({event:g,listeners:G}))}}if((e&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&l!==iu&&(M=l.relatedTarget||l.fromElement)&&(Vl(M)||M[kl]))break t;if((y||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,y?(M=l.relatedTarget||l.toElement,y=d,M=M?Vl(M):null,M!==null&&(mt=Z(M),G=M.tag,M!==mt||G!==5&&G!==27&&G!==6)&&(M=null)):(y=null,M=d),y!==M)){if(G=Xs,p="onMouseLeave",r="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(G=ks,p="onPointerLeave",r="onPointerEnter",o="pointer"),mt=y==null?g:Ua(y),m=M==null?g:Ua(M),g=new G(p,o+"leave",y,l,v),g.target=mt,g.relatedTarget=m,p=null,Vl(v)===d&&(G=new G(r,o+"enter",M,l,v),G.target=m,G.relatedTarget=mt,p=G),mt=p,y&&M)e:{for(G=Sh,r=y,o=M,m=0,p=r;p;p=G(p))m++;p=0;for(var H=o;H;H=G(H))p++;for(;0<m-p;)r=G(r),m--;for(;0<p-m;)o=G(o),p--;for(;m--;){if(r===o||o!==null&&r===o.alternate){G=r;break e}r=G(r),o=G(o)}G=null}else G=null;y!==null&&Gr(A,g,y,G,!1),M!==null&&mt!==null&&Gr(A,mt,M,G,!0)}}t:{if(g=d?Ua(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var et=Is;else if(Fs(g))if(Ps)et=Nd;else{et=_d;var _=Rd}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?d&&nu(d.elementType)&&(et=Is):et=Od;if(et&&(et=et(t,d))){$s(A,et,l,v);break t}_&&_(t,g,d),t==="focusout"&&d&&g.type==="number"&&d.memoizedProps.value!=null&&au(g,"number",g.value)}switch(_=d?Ua(d):window,t){case"focusin":(Fs(_)||_.contentEditable==="true")&&(ta=_,bu=d,Xa=null);break;case"focusout":Xa=bu=ta=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,co(A,l,v);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":co(A,l,v)}var V;if(hu)t:{switch(t){case"compositionstart":var I="onCompositionStart";break t;case"compositionend":I="onCompositionEnd";break t;case"compositionupdate":I="onCompositionUpdate";break t}I=void 0}else Pl?Js(t,l)&&(I="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(I="onCompositionStart");I&&(Vs&&l.locale!=="ko"&&(Pl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pl&&(V=Ys()):(el=v,ou="value"in el?el.value:el.textContent,Pl=!0)),_=Ri(d,I),0<_.length&&(I=new Qs(I,t,null,l,v),A.push({event:I,listeners:_}),V?I.data=V:(V=Ws(l),V!==null&&(I.data=V)))),(V=Td?Cd(t,l):Dd(t,l))&&(I=Ri(d,"onBeforeInput"),0<I.length&&(_=new Qs("onBeforeInput","beforeinput",null,l,v),A.push({event:_,listeners:I}),_.data=V)),yh(A,t,d,l,v)}jr(A,e)})}function hn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Ri(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ha(t,l),n!=null&&a.unshift(hn(t,n,i)),n=Ha(t,e),n!=null&&a.push(hn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Sh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Gr(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,d=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||d===null||(s=d,n?(d=Ha(l,i),d!=null&&u.unshift(hn(l,d,s))):n||(d=Ha(l,i),d!=null&&u.push(hn(l,d,s)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var Ah=/\r\n?/g,Eh=/\u0000|\uFFFD/g;function Br(t){return(typeof t=="string"?t:""+t).replace(Ah,`
`).replace(Eh,"")}function qr(t,e){return e=Br(e),Br(t)===e}function rt(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Fl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Fl(t,""+a);break;case"className":xn(t,"class",a);break;case"tabIndex":xn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":xn(t,l,a);break;case"style":Gs(t,a,i);break;case"data":if(e!=="object"){xn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Hn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&rt(t,e,"name",n.name,n,null),rt(t,e,"formEncType",n.formEncType,n,null),rt(t,e,"formMethod",n.formMethod,n,null),rt(t,e,"formTarget",n.formTarget,n,null)):(rt(t,e,"encType",n.encType,n,null),rt(t,e,"method",n.method,n,null),rt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Hn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=we);break;case"onScroll":a!=null&&F("scroll",t);break;case"onScrollEnd":a!=null&&F("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Hn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":F("beforetoggle",t),F("toggle",t),Nn(t,"popover",a);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Fm.get(l)||l,Nn(t,l,a))}}function kc(t,e,l,a,n,i){switch(l){case"style":Gs(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Fl(t,a):(typeof a=="number"||typeof a=="bigint")&&Fl(t,""+a);break;case"onScroll":a!=null&&F("scroll",t);break;case"onScrollEnd":a!=null&&F("scrollend",t);break;case"onClick":a!=null&&(t.onclick=we);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rs.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Kt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Nn(t,l,a)}}}function Yt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",t),F("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,e));default:rt(t,e,i,u,l,null)}}n&&rt(t,e,"srcSet",l.srcSet,l,null),a&&rt(t,e,"src",l.src,l,null);return;case"input":F("invalid",t);var c=i=u=n=null,s=null,d=null;for(a in l)if(l.hasOwnProperty(a)){var v=l[a];if(v!=null)switch(a){case"name":n=v;break;case"type":u=v;break;case"checked":s=v;break;case"defaultChecked":d=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,e));break;default:rt(t,e,a,v,l,null)}}Us(t,i,c,s,d,u,n,!1);return;case"select":F("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:rt(t,e,n,c,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Wl(t,!!a,e,!1):l!=null&&Wl(t,!!a,l,!0);return;case"textarea":F("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:rt(t,e,u,c,l,null)}js(t,a,n,i);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":rt(t,e,s,a,l,null));return;case"dialog":F("beforetoggle",t),F("toggle",t),F("cancel",t),F("close",t);break;case"iframe":case"object":F("load",t);break;case"video":case"audio":for(a=0;a<dn.length;a++)F(dn[a],t);break;case"image":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"embed":case"source":case"link":F("error",t),F("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,e));default:rt(t,e,d,a,l,null)}return;default:if(nu(e)){for(v in l)l.hasOwnProperty(v)&&(a=l[v],a!==void 0&&kc(t,e,v,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&rt(t,e,c,a,l,null))}function Th(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,d=null,v=null;for(y in l){var A=l[y];if(l.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=A;default:a.hasOwnProperty(y)||rt(t,e,y,null,a,A)}}for(var g in a){var y=a[g];if(A=l[g],a.hasOwnProperty(g)&&(y!=null||A!=null))switch(g){case"type":i=y;break;case"name":n=y;break;case"checked":d=y;break;case"defaultChecked":v=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,e));break;default:y!==A&&rt(t,e,g,y,a,A)}}lu(t,u,c,s,d,v,i,n);return;case"select":y=u=c=g=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":y=s;default:a.hasOwnProperty(i)||rt(t,e,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":g=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&rt(t,e,n,i,a,s)}e=c,l=u,a=y,g!=null?Wl(t,!!l,g,!1):!!a!=!!l&&(e!=null?Wl(t,!!l,e,!0):Wl(t,!!l,l?[]:"",!1));return;case"textarea":y=g=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:rt(t,e,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":g=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==i&&rt(t,e,u,n,a,i)}Hs(t,g,y);return;case"option":for(var M in l)g=l[M],l.hasOwnProperty(M)&&g!=null&&!a.hasOwnProperty(M)&&(M==="selected"?t.selected=!1:rt(t,e,M,null,a,g));for(s in a)g=a[s],y=l[s],a.hasOwnProperty(s)&&g!==y&&(g!=null||y!=null)&&(s==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":rt(t,e,s,g,a,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in l)g=l[G],l.hasOwnProperty(G)&&g!=null&&!a.hasOwnProperty(G)&&rt(t,e,G,null,a,g);for(d in a)if(g=a[d],y=l[d],a.hasOwnProperty(d)&&g!==y&&(g!=null||y!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,e));break;default:rt(t,e,d,g,a,y)}return;default:if(nu(e)){for(var mt in l)g=l[mt],l.hasOwnProperty(mt)&&g!==void 0&&!a.hasOwnProperty(mt)&&kc(t,e,mt,void 0,a,g);for(v in a)g=a[v],y=l[v],!a.hasOwnProperty(v)||g===y||g===void 0&&y===void 0||kc(t,e,v,g,a,y);return}}for(var r in l)g=l[r],l.hasOwnProperty(r)&&g!=null&&!a.hasOwnProperty(r)&&rt(t,e,r,null,a,g);for(A in a)g=a[A],y=l[A],!a.hasOwnProperty(A)||g===y||g==null&&y==null||rt(t,e,A,g,a,y)}function Yr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ch(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&Yr(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],d=s.startTime;if(d>c)break;var v=s.transferSize,A=s.initiatorType;v&&Yr(A)&&(s=s.responseEnd,u+=v*(s<c?1:(c-d)/(s-d)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vc=null,Zc=null;function _i(t){return t.nodeType===9?t:t.ownerDocument}function Lr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Dh(){var t=window.event;return t&&t.type==="popstate"?t===Jc?!1:(Jc=t,!0):(Jc=null,!1)}var Qr=typeof setTimeout=="function"?setTimeout:void 0,zh=typeof clearTimeout=="function"?clearTimeout:void 0,kr=typeof Promise=="function"?Promise:void 0,Mh=typeof queueMicrotask=="function"?queueMicrotask:typeof kr<"u"?function(t){return kr.resolve(null).then(t).catch(Rh)}:Qr;function Rh(t){setTimeout(function(){throw t})}function bl(t){return t==="head"}function Vr(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Ma(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")gn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,gn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[xa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&gn(t.ownerDocument.body);l=n}while(l);Ma(e)}function Zr(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Wc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wc(l),tu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function _h(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[xa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Se(t.nextSibling),t===null)break}return null}function Oh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Se(t.nextSibling),t===null))return null;return t}function Kr(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Se(t.nextSibling),t===null))return null;return t}function Fc(t){return t.data==="$?"||t.data==="$~"}function $c(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Nh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Se(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ic=null;function Jr(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Se(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Wr(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Fr(t,e,l){switch(e=_i(l),t){case"html":if(t=e.documentElement,!t)throw Error(h(452));return t;case"head":if(t=e.head,!t)throw Error(h(453));return t;case"body":if(t=e.body,!t)throw Error(h(454));return t;default:throw Error(h(451))}}function gn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);tu(t)}var Ae=new Map,$r=new Set;function Oi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ie=D.d;D.d={f:xh,r:Uh,D:Hh,C:jh,L:wh,m:Gh,X:qh,S:Bh,M:Yh};function xh(){var t=Ie.f(),e=Ai();return t||e}function Uh(t){var e=Zl(t);e!==null&&e.tag===5&&e.type==="form"?hf(e):Ie.r(t)}var Ca=typeof document>"u"?null:document;function Ir(t,e,l){var a=Ca;if(a&&typeof e=="string"&&e){var n=de(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),$r.has(n)||($r.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Yt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function Hh(t){Ie.D(t),Ir("dns-prefetch",t,null)}function jh(t,e){Ie.C(t,e),Ir("preconnect",t,e)}function wh(t,e,l){Ie.L(t,e,l);var a=Ca;if(a&&t&&e){var n='link[rel="preload"][as="'+de(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+de(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+de(l.imageSizes)+'"]')):n+='[href="'+de(t)+'"]';var i=n;switch(e){case"style":i=Da(t);break;case"script":i=za(t)}Ae.has(i)||(t=j({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ae.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(yn(i))||e==="script"&&a.querySelector(vn(i))||(e=a.createElement("link"),Yt(e,"link",t),Ut(e),a.head.appendChild(e)))}}function Gh(t,e){Ie.m(t,e);var l=Ca;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+de(a)+'"][href="'+de(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=za(t)}if(!Ae.has(i)&&(t=j({rel:"modulepreload",href:t},e),Ae.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vn(i)))return}a=l.createElement("link"),Yt(a,"link",t),Ut(a),l.head.appendChild(a)}}}function Bh(t,e,l){Ie.S(t,e,l);var a=Ca;if(a&&t){var n=Kl(a).hoistableStyles,i=Da(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(yn(i)))c.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ae.get(i))&&Pc(t,l);var s=u=a.createElement("link");Ut(s),Yt(s,"link",t),s._p=new Promise(function(d,v){s.onload=d,s.onerror=v}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ni(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function qh(t,e){Ie.X(t,e);var l=Ca;if(l&&t){var a=Kl(l).hoistableScripts,n=za(t),i=a.get(n);i||(i=l.querySelector(vn(n)),i||(t=j({src:t,async:!0},e),(e=Ae.get(n))&&ts(t,e),i=l.createElement("script"),Ut(i),Yt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Yh(t,e){Ie.M(t,e);var l=Ca;if(l&&t){var a=Kl(l).hoistableScripts,n=za(t),i=a.get(n);i||(i=l.querySelector(vn(n)),i||(t=j({src:t,async:!0,type:"module"},e),(e=Ae.get(n))&&ts(t,e),i=l.createElement("script"),Ut(i),Yt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Pr(t,e,l,a){var n=(n=J.current)?Oi(n):null;if(!n)throw Error(h(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Da(l.href),l=Kl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Da(l.href);var i=Kl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(yn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Ae.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ae.set(t,l),i||Lh(n,t,l,u.state))),e&&a===null)throw Error(h(528,""));return u}if(e&&a!==null)throw Error(h(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=za(l),l=Kl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,t))}}function Da(t){return'href="'+de(t)+'"'}function yn(t){return'link[rel="stylesheet"]['+t+"]"}function tm(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function Lh(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Yt(e,"link",l),Ut(e),t.head.appendChild(e))}function za(t){return'[src="'+de(t)+'"]'}function vn(t){return"script[async]"+t}function em(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+de(l.href)+'"]');if(a)return e.instance=a,Ut(a),a;var n=j({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Ut(a),Yt(a,"style",n),Ni(a,l.precedence,t),e.instance=a;case"stylesheet":n=Da(l.href);var i=t.querySelector(yn(n));if(i)return e.state.loading|=4,e.instance=i,Ut(i),i;a=tm(l),(n=Ae.get(n))&&Pc(a,n),i=(t.ownerDocument||t).createElement("link"),Ut(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Yt(i,"link",a),e.state.loading|=4,Ni(i,l.precedence,t),e.instance=i;case"script":return i=za(l.src),(n=t.querySelector(vn(i)))?(e.instance=n,Ut(n),n):(a=l,(n=Ae.get(i))&&(a=j({},l),ts(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Ut(n),Yt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(h(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ni(a,l.precedence,t));return e.instance}function Ni(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Pc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ts(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var xi=null;function lm(t,e,l){if(xi===null){var a=new Map,n=xi=new Map;n.set(l,a)}else n=xi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[xa]||i[wt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function am(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Xh(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function nm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Qh(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Da(a.href),i=e.querySelector(yn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ui.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Ut(i);return}i=e.ownerDocument||e,a=tm(a),(n=Ae.get(n))&&Pc(a,n),i=i.createElement("link"),Ut(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),Yt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Ui.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var es=0;function kh(t,e){return t.stylesheets&&t.count===0&&ji(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&ji(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&es===0&&(es=62500*Ch());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ji(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>es?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ji(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hi=null;function ji(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hi=new Map,e.forEach(Vh,t),Hi=null,Ui.call(t))}function Vh(t,e){if(!(e.state.loading&4)){var l=Hi.get(t);if(l)var a=l.get(null);else{l=new Map,Hi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ui.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var bn={$$typeof:Tt,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Zh(t,e,l,a,n,i,u,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function im(t,e,l,a,n,i,u,c,s,d,v,A){return t=new Zh(t,e,l,u,s,d,v,A,c),e=1,i===!0&&(e|=24),i=ie(3,null,null,e),t.current=i,i.stateNode=t,e=Hu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Bu(i),t}function um(t){return t?(t=aa,t):aa}function cm(t,e,l,a,n,i){n=um(n),a.context===null?a.context=n:a.pendingContext=n,a=cl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=sl(t,a,e),l!==null&&(Pt(l,t,e),Wa(l,t,e))}function sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ls(t,e){sm(t,e),(t=t.alternate)&&sm(t,e)}function om(t){if(t.tag===13||t.tag===31){var e=Nl(t,67108864);e!==null&&Pt(e,t,67108864),ls(t,67108864)}}function fm(t){if(t.tag===13||t.tag===31){var e=fe();e=$i(e);var l=Nl(t,e);l!==null&&Pt(l,t,e),ls(t,e)}}var wi=!0;function Kh(t,e,l,a){var n=b.T;b.T=null;var i=D.p;try{D.p=2,as(t,e,l,a)}finally{D.p=i,b.T=n}}function Jh(t,e,l,a){var n=b.T;b.T=null;var i=D.p;try{D.p=8,as(t,e,l,a)}finally{D.p=i,b.T=n}}function as(t,e,l,a){if(wi){var n=ns(a);if(n===null)Qc(t,e,a,Gi,l),mm(t,a);else if(Fh(n,t,e,l,a))a.stopPropagation();else if(mm(t,a),e&4&&-1<Wh.indexOf(t)){for(;n!==null;){var i=Zl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=zl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-ae(u);c.entanglements[1]|=s,u&=~s}Ue(i),(nt&6)===0&&(pi=ee()+500,mn(0))}}break;case 31:case 13:c=Nl(i,2),c!==null&&Pt(c,i,2),Ai(),ls(i,2)}if(i=ns(a),i===null&&Qc(t,e,a,Gi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Qc(t,e,a,null,l)}}function ns(t){return t=uu(t),is(t)}var Gi=null;function is(t){if(Gi=null,t=Vl(t),t!==null){var e=Z(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=it(e),t!==null)return t;t=null}else if(l===31){if(t=Et(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Gi=t,null}function rm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hm()){case vs:return 2;case bs:return 8;case zn:case jm:return 32;case ps:return 268435456;default:return 32}default:return 32}}var us=!1,pl=null,Sl=null,Al=null,pn=new Map,Sn=new Map,El=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mm(t,e){switch(t){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":Al=null;break;case"pointerover":case"pointerout":pn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(e.pointerId)}}function An(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Zl(e),e!==null&&om(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Fh(t,e,l,a,n){switch(e){case"focusin":return pl=An(pl,t,e,l,a,n),!0;case"dragenter":return Sl=An(Sl,t,e,l,a,n),!0;case"mouseover":return Al=An(Al,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return pn.set(i,An(pn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,An(Sn.get(i)||null,t,e,l,a,n)),!0}return!1}function dm(t){var e=Vl(t.target);if(e!==null){var l=Z(e);if(l!==null){if(e=l.tag,e===13){if(e=it(l),e!==null){t.blockedOn=e,Ds(t.priority,function(){fm(l)});return}}else if(e===31){if(e=Et(l),e!==null){t.blockedOn=e,Ds(t.priority,function(){fm(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=ns(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);iu=a,l.target.dispatchEvent(a),iu=null}else return e=Zl(l),e!==null&&om(e),t.blockedOn=l,!1;e.shift()}return!0}function hm(t,e,l){Bi(t)&&l.delete(e)}function $h(){us=!1,pl!==null&&Bi(pl)&&(pl=null),Sl!==null&&Bi(Sl)&&(Sl=null),Al!==null&&Bi(Al)&&(Al=null),pn.forEach(hm),Sn.forEach(hm)}function qi(t,e){t.blockedOn===e&&(t.blockedOn=null,us||(us=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,$h)))}var Yi=null;function gm(t){Yi!==t&&(Yi=t,C.unstable_scheduleCallback(C.unstable_NormalPriority,function(){Yi===t&&(Yi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(is(a||l)===null)continue;break}var i=Zl(l);i!==null&&(t.splice(e,3),e-=3,nc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ma(t){function e(s){return qi(s,t)}pl!==null&&qi(pl,t),Sl!==null&&qi(Sl,t),Al!==null&&qi(Al,t),pn.forEach(e),Sn.forEach(e);for(var l=0;l<El.length;l++){var a=El[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<El.length&&(l=El[0],l.blockedOn===null);)dm(l),l.blockedOn===null&&El.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Kt]||null;if(typeof i=="function")u||gm(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Kt]||null)c=u.formAction;else if(is(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),gm(l)}}}function ym(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function cs(t){this._internalRoot=t}Li.prototype.render=cs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(h(409));var l=e.current,a=fe();cm(l,a,t,e,null,null)},Li.prototype.unmount=cs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cm(t.current,2,null,t,null,null),Ai(),e[kl]=null}};function Li(t){this._internalRoot=t}Li.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cs();t={blockedOn:null,target:t,priority:e};for(var l=0;l<El.length&&e!==0&&e<El[l].priority;l++);El.splice(l,0,t),l===0&&dm(t)}};var vm=Y.version;if(vm!=="19.2.4")throw Error(h(527,vm,"19.2.4"));D.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(h(188)):(t=Object.keys(t).join(","),Error(h(268,t)));return t=T(e),t=t!==null?P(t):null,t=t===null?null:t.stateNode,t};var Ih={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{_a=Xi.inject(Ih),le=Xi}catch{}}return Tn.createRoot=function(t,e){if(!x(t))throw Error(h(299));var l=!1,a="",n=Cf,i=Df,u=zf;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=im(t,1,!1,null,null,l,a,null,n,i,u,ym),t[kl]=e.current,Xc(t),new cs(e)},Tn.hydrateRoot=function(t,e,l){if(!x(t))throw Error(h(299));var a=!1,n="",i=Cf,u=Df,c=zf,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=im(t,1,!0,e,l??null,a,n,s,i,u,c,ym),e.context=um(null),l=e.current,a=fe(),a=$i(a),n=cl(a),n.callback=null,sl(l,n,a),l=a,e.current.lanes=l,Na(e,l),Ue(e),t[kl]=e.current,Xc(t),new Li(e)},Tn.version="19.2.4",Tn}var Mm;function sg(){if(Mm)return fs.exports;Mm=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(Y){console.error(Y)}}return C(),fs.exports=cg(),fs.exports}var og=sg();const ze={chapters:[{id:1,title:"Getting Started with Git",description:"Understanding version control fundamentals",lessons:[{id:"1-1",title:"What is Version Control?",duration:"8 min",content:`
## Welcome to Git! 🎉

Imagine writing a 50-page essay and accidentally deleting half of it. Without version control, you'd cry. With it? Just restore the previous version!

### What is Version Control?

**Version control** tracks changes to files over time. It lets you:
- Go back to any previous version
- See who changed what and when
- Work with others without overwriting each other's work
- Experiment safely with branches

### The Problem Git Solves

\`\`\`
Without Git:
essay_v1.docx
essay_v2.docx
essay_v2_final.docx
essay_v2_final_REAL.docx
essay_v2_final_REAL_submitted.docx  😱
\`\`\`

\`\`\`
With Git:
essay.docx
  └── Version 1 (Jan 1)
  └── Version 2 (Jan 2)
  └── Version 3 (Jan 3)  ← Current
  
Need version 1? Just checkout! ✨
\`\`\`

### Git vs GitHub

| Git | GitHub |
|-----|--------|
| Software on your computer | Website/cloud service |
| Tracks file versions locally | Hosts Git repos online |
| Works offline | Enables collaboration |
| Free & open source | Free + paid tiers |

Think of it like:
- **Git** = Microsoft Word's "Track Changes"
- **GitHub** = Google Docs (online collaboration)

### Key Concepts

\`\`\`
Repository (Repo)  = Project folder tracked by Git
Commit             = A saved snapshot of changes
Branch             = Parallel version of code
Merge              = Combining branches together
Clone              = Copy a remote repo locally
Push               = Upload commits to remote
Pull               = Download commits from remote
\`\`\`

### Why Developers Love Git

1. **Never lose work** — Every change is saved
2. **Fearless experimentation** — Try anything in branches
3. **Collaboration** — Multiple people, one codebase
4. **History** — See exactly what changed and why
5. **Industry standard** — Every tech company uses it

<tip>
💡 Git was created by Linus Torvalds in 2005 — the same person who created Linux!
</tip>

### Installing Git

\`\`\`bash
# Check if Git is installed
git --version

# macOS (with Homebrew)
brew install git

# Windows
# Download from git-scm.com

# Ubuntu/Debian
sudo apt install git
\`\`\`

### First-Time Setup

\`\`\`bash
# Tell Git who you are
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Verify settings
git config --list
\`\`\`

<warning>
⚠️ Use the same email as your GitHub account to link your commits to your profile!
</warning>

Ready to create your first repository? Let's go! 🚀
          `},{id:"1-2",title:"Your First Repository",duration:"10 min",content:`
## Creating Your First Git Repo 📁

Let's get hands-on and create your first Git repository!

### Initialize a Repository

\`\`\`bash
# Create a new folder
mkdir my-first-repo
cd my-first-repo

# Initialize Git in this folder
git init

# Output: Initialized empty Git repository in /path/my-first-repo/.git/
\`\`\`

That \`.git\` folder is where Git stores all version history. Don't delete it!

### Check Repository Status

\`\`\`bash
git status

# On branch main
# No commits yet
# nothing to commit (create/copy files and use "git add" to track)
\`\`\`

This is your new best friend command — use it constantly!

### Create Your First File

\`\`\`bash
# Create a README file
echo "# My First Project" > README.md

# Check status again
git status

# Untracked files:
#   README.md
\`\`\`

### The Staging Area

Git has a two-step save process:

\`\`\`
Working Directory → Staging Area → Repository
     (edit)           (add)         (commit)

1. You EDIT files in working directory
2. You ADD files to staging area (preparing to commit)
3. You COMMIT staged files to repository (permanent snapshot)
\`\`\`

### Stage Files with git add

\`\`\`bash
# Add a specific file
git add README.md

# Add all files
git add .

# Check status
git status

# Changes to be committed:
#   new file: README.md   (now it's green!)
\`\`\`

### Commit Your Changes

\`\`\`bash
git commit -m "Initial commit: add README"

# [main (root-commit) a1b2c3d] Initial commit: add README
#  1 file changed, 1 insertion(+)
#  create mode 100644 README.md
\`\`\`

**Congratulations!** You just created your first commit! 🎉

### View Commit History

\`\`\`bash
git log

# commit a1b2c3d... (HEAD -> main)
# Author: Your Name <you@example.com>
# Date:   Mon Jan 1 12:00:00 2024
#
#     Initial commit: add README
\`\`\`

### The Complete Workflow

\`\`\`bash
# 1. Make changes to files
echo "This is my project" >> README.md

# 2. See what changed
git status
git diff  # Shows actual changes

# 3. Stage changes
git add README.md

# 4. Commit with a message
git commit -m "Add project description to README"

# 5. View history
git log --oneline
# b2c3d4e Add project description to README
# a1b2c3d Initial commit: add README
\`\`\`

### Quick Tip: Stage + Commit in One

\`\`\`bash
# Add all changes AND commit (for tracked files only)
git commit -am "Update README"

# Note: This doesn't work for NEW files - use git add first
\`\`\`

<tip>
💡 Write clear commit messages! "Fix bug" is bad. "Fix login button not responding on mobile" is good!
</tip>

### Commit Message Best Practices

| ❌ Bad | ✅ Good |
|--------|---------|
| "update" | "Add user authentication feature" |
| "fix" | "Fix crash when username is empty" |
| "stuff" | "Refactor database connection handling" |
| "asdfjkl" | "Update README with installation steps" |

### Practice Exercise

\`\`\`bash
# Create a project folder
mkdir hello-git && cd hello-git
git init

# Create and commit a file
echo "Hello, Git!" > hello.txt
git add hello.txt
git commit -m "Add hello.txt with greeting"

# Modify and commit again
echo "Learning Git is fun!" >> hello.txt
git commit -am "Add learning message"

# View your history
git log --oneline
\`\`\`

You now know the basic Git workflow! 🎯
          `}]},{id:2,title:"Understanding Commits",description:"Deep dive into commits and history",lessons:[{id:"2-1",title:"Anatomy of a Commit",duration:"10 min",content:`
## What's Inside a Commit? 🔍

Every commit is a snapshot of your project at a moment in time.

### Commit Structure

\`\`\`
commit a1b2c3d4e5f6789...
├── Tree (snapshot of all files)
├── Parent (previous commit)
├── Author (who wrote the code)
├── Committer (who committed it)
├── Date
└── Message
\`\`\`

### View Commit Details

\`\`\`bash
# Short log
git log --oneline
# a1b2c3d Add feature X
# b2c3d4e Fix bug Y
# c3d4e5f Initial commit

# Full details
git log

# Super detailed
git show a1b2c3d
\`\`\`

### Understanding SHA Hashes

Every commit has a unique identifier (SHA-1 hash):

\`\`\`
a1b2c3d4e5f6789abcdef1234567890abcdef12
└──────────────────────────────────────┘
              40 characters

You only need the first 7 to identify it:
a1b2c3d
\`\`\`

<tip>
💡 The hash is generated from the commit contents. Change anything, and you get a completely different hash!
</tip>

### View What Changed

\`\`\`bash
# See changes in a specific commit
git show a1b2c3d

# See all changes between two commits
git diff a1b2c3d b2c3d4e

# See changes in last commit
git show HEAD

# See changes before staging
git diff

# See changes after staging
git diff --staged
\`\`\`

### HEAD - Where You Are Now

\`HEAD\` is a pointer to your current position:

\`\`\`
c3d4e5f ← HEAD (you are here)
    ↓
b2c3d4e
    ↓
a1b2c3d (first commit)
\`\`\`

### Navigate History

\`\`\`bash
# HEAD references
HEAD      = current commit
HEAD~1    = 1 commit before HEAD
HEAD~2    = 2 commits before HEAD
HEAD^     = parent of HEAD (same as HEAD~1)
\`\`\`

\`\`\`bash
# View file from previous commit
git show HEAD~1:README.md

# Compare current vs 2 commits ago
git diff HEAD~2 HEAD
\`\`\`

### Amending Commits

Made a typo in your last commit message?

\`\`\`bash
# Change the last commit message
git commit --amend -m "New, better message"

# Add forgotten files to last commit
git add forgotten-file.txt
git commit --amend --no-edit
\`\`\`

<warning>
⚠️ Only amend commits that haven't been pushed! Amending rewrites history.
</warning>

### Viewing File History

\`\`\`bash
# All commits that touched a file
git log -- README.md

# With patches (actual changes)
git log -p -- README.md

# Who changed each line (blame)
git blame README.md

# Output:
# a1b2c3d (Alice 2024-01-01) # My Project
# b2c3d4e (Bob   2024-01-02) Description here
\`\`\`

### Pretty Log Formats

\`\`\`bash
# One line per commit
git log --oneline

# With graph
git log --oneline --graph

# With stats
git log --stat

# Custom format
git log --pretty=format:"%h - %an: %s"
# a1b2c3d - Alice: Add feature
# b2c3d4e - Bob: Fix bug
\`\`\`

### Searching Commits

\`\`\`bash
# Find commits by message
git log --grep="bug fix"

# Find commits by author
git log --author="Alice"

# Find commits that changed specific code
git log -S "function_name"

# Commits in date range
git log --since="2024-01-01" --until="2024-02-01"
\`\`\`

You now understand what commits really are! 📚
          `},{id:"2-2",title:"Undoing Changes",duration:"12 min",content:`
## Oops! Undoing in Git 🔙

Everyone makes mistakes. Git has many ways to undo them!

### Levels of "Undo"

\`\`\`
Scenario                           → Solution
─────────────────────────────────────────────────
Changed file, not staged           → git checkout
Staged file, not committed         → git reset
Committed locally                  → git reset/revert
Pushed to remote                   → git revert (safest)
\`\`\`

### Discard Unstaged Changes

\`\`\`bash
# You edited a file but want to discard changes
git checkout -- filename.txt

# Discard ALL unstaged changes (careful!)
git checkout -- .

# Modern way (Git 2.23+)
git restore filename.txt
\`\`\`

<warning>
⚠️ This permanently deletes your changes! No way to recover unless you have a backup.
</warning>

### Unstage Files

\`\`\`bash
# You added files to staging but changed your mind
git reset filename.txt

# Unstage everything
git reset

# Modern way (Git 2.23+)
git restore --staged filename.txt
\`\`\`

Your changes are kept, just unstaged.

### Undo the Last Commit (Keep Changes)

\`\`\`bash
# Oops, committed too soon!
git reset --soft HEAD~1

# Your changes are back in staging area
# The commit is gone, but your work is safe
\`\`\`

### Undo the Last Commit (Discard Changes)

\`\`\`bash
# Nuclear option - delete last commit AND changes
git reset --hard HEAD~1

# Changes are GONE. Use carefully!
\`\`\`

### Reset Modes Explained

\`\`\`
git reset --soft HEAD~1
  ├── Commit: UNDONE
  ├── Staging: KEPT
  └── Working: KEPT

git reset --mixed HEAD~1  (default)
  ├── Commit: UNDONE
  ├── Staging: UNDONE
  └── Working: KEPT

git reset --hard HEAD~1
  ├── Commit: UNDONE
  ├── Staging: UNDONE
  └── Working: UNDONE (deleted!)
\`\`\`

### Revert - Safe Undo for Pushed Commits

\`\`\`bash
# Creates a NEW commit that undoes an old commit
git revert a1b2c3d

# History:
# c - Revert "Add feature"  ← new commit
# b - Add feature           ← still exists
# a - Initial
\`\`\`

<tip>
💡 Use \`revert\` for pushed commits because it doesn't rewrite history. Others won't have conflicts!
</tip>

### Recover "Lost" Commits

Accidentally reset too far? Git saves everything for 30 days!

\`\`\`bash
# See all recent HEAD positions
git reflog

# Output:
# a1b2c3d HEAD@{0}: reset: moving to HEAD~2
# b2c3d4e HEAD@{1}: commit: Add feature
# c3d4e5f HEAD@{2}: commit: Fix bug

# Recover to a specific point
git reset --hard b2c3d4e
\`\`\`

### Clean Untracked Files

\`\`\`bash
# See what would be deleted
git clean -n

# Delete untracked files
git clean -f

# Delete untracked files AND directories
git clean -fd

# Interactive mode
git clean -i
\`\`\`

### Stash - Temporary Save

Need to switch tasks but not ready to commit?

\`\`\`bash
# Save current changes temporarily
git stash

# Your working directory is now clean!

# Do other work...

# Get your changes back
git stash pop

# List all stashes
git stash list

# Apply specific stash
git stash apply stash@{1}
\`\`\`

### Practical Scenarios

\`\`\`bash
# "I want to start fresh on this file"
git checkout -- filename.txt

# "I committed to the wrong branch!"
git reset --soft HEAD~1    # undo commit, keep changes
git stash                   # save changes
git checkout correct-branch
git stash pop              # apply changes here

# "I need to undo a pushed commit"
git revert abc123

# "I deleted everything by accident!"
git reflog                 # find the commit
git reset --hard abc123    # go back to it
\`\`\`

You now have the power to fix almost any mistake! 💪
          `}]},{id:3,title:"Branching & Merging",description:"Work on features in isolation",lessons:[{id:"3-1",title:"Understanding Branches",duration:"12 min",content:`
## Branches - Parallel Universes 🌿

Branches let you work on features without affecting the main code!

### What is a Branch?

\`\`\`
                 feature
                    ↓
              e --- f
             /
a --- b --- c --- d  ← main
\`\`\`

A branch is just a pointer to a commit. Creating branches is instant and cheap!

### Why Use Branches?

- **Isolation**: Work on features without breaking main code
- **Experimentation**: Try ideas, delete branch if it fails
- **Collaboration**: Multiple people work on different features
- **Organization**: Keep work separated and manageable

### Create and Switch Branches

\`\`\`bash
# See all branches
git branch
# * main   ← asterisk shows current branch

# Create a new branch
git branch feature-login

# Switch to it
git checkout feature-login

# Or create AND switch in one command
git checkout -b feature-signup

# Modern way (Git 2.23+)
git switch feature-login
git switch -c feature-new  # create and switch
\`\`\`

### Branch Workflow

\`\`\`bash
# 1. Create feature branch
git checkout -b feature-navbar

# 2. Make changes and commit
echo "navbar code" > navbar.js
git add navbar.js
git commit -m "Add navbar component"

# 3. Make more commits...
git commit -am "Style navbar"
git commit -am "Add mobile menu"

# 4. Switch back to main
git checkout main

# 5. Your navbar changes aren't here!
ls navbar.js  # File not found

# 6. Switch back to feature
git checkout feature-navbar
ls navbar.js  # File exists!
\`\`\`

### Visualize Branches

\`\`\`bash
# See branches with commits
git log --oneline --graph --all

# Output:
# * abc123 (feature-navbar) Add mobile menu
# * def456 Style navbar
# * ghi789 Add navbar component
# | * jkl012 (main) Update README
# |/
# * mno345 Initial commit
\`\`\`

### List Branches

\`\`\`bash
# Local branches
git branch

# Remote branches
git branch -r

# All branches
git branch -a

# With last commit info
git branch -v
\`\`\`

### Delete Branches

\`\`\`bash
# Delete merged branch
git branch -d feature-done

# Force delete unmerged branch
git branch -D feature-abandoned
\`\`\`

<warning>
⚠️ Don't delete branches you haven't merged unless you're sure you don't need that work!
</warning>

### Rename Branches

\`\`\`bash
# Rename current branch
git branch -m new-name

# Rename another branch
git branch -m old-name new-name
\`\`\`

### Branch Naming Conventions

\`\`\`
Common patterns:
feature/user-authentication
bugfix/login-crash
hotfix/security-patch
release/v2.0
experiment/new-algorithm

Good names:
feature/add-shopping-cart
bugfix/fix-email-validation
hotfix/patch-sql-injection

Bad names:
my-branch
test
asdf
johns-stuff
\`\`\`

<tip>
💡 Use descriptive branch names! Future you will thank present you.
</tip>

### Practical Exercise

\`\`\`bash
# Create a new project
mkdir branch-practice && cd branch-practice
git init
echo "# Project" > README.md
git add . && git commit -m "Initial commit"

# Create a feature branch
git checkout -b feature/greeting

# Add a feature
echo "Hello!" > greeting.txt
git add . && git commit -m "Add greeting"

# Check the difference
git checkout main
ls  # Only README.md
git checkout feature/greeting
ls  # README.md AND greeting.txt!
\`\`\`

You're now a branching pro! 🌳
          `},{id:"3-2",title:"Merging Branches",duration:"14 min",content:`
## Bringing It All Together 🔀

You've made changes on a branch. Now let's merge them back!

### What is Merging?

\`\`\`
Before merge:
        feature
           ↓
     c --- d
    /
a --- b  ← main

After merge:
     c --- d
    /       \\
a --- b --- e  ← main (includes c & d)
\`\`\`

### Basic Merge

\`\`\`bash
# 1. Switch to the TARGET branch (where you want changes)
git checkout main

# 2. Merge the SOURCE branch
git merge feature-navbar

# Output:
# Updating abc123..def456
# Fast-forward
#  navbar.js | 50 ++++++++++++++
#  1 file changed, 50 insertions(+)
\`\`\`

### Fast-Forward Merge

When main hasn't changed since you branched:

\`\`\`
Before:
     c --- d  ← feature
    /
a --- b  ← main

After (fast-forward):
a --- b --- c --- d  ← main, feature

Git just moves the main pointer forward!
\`\`\`

\`\`\`bash
# Force a merge commit even when fast-forward possible
git merge --no-ff feature-branch
\`\`\`

### Three-Way Merge

When both branches have new commits:

\`\`\`
Before:
        feature
           ↓
     c --- d
    /
a --- b --- e  ← main

After (merge commit created):
     c --- d
    /       \\
a --- b --- e --- f  ← main
              merge commit
\`\`\`

### Merge Conflicts 😱

When Git can't auto-merge because both branches changed the same lines:

\`\`\`bash
git merge feature-branch

# CONFLICT (content): Merge conflict in file.txt
# Automatic merge failed; fix conflicts and commit.
\`\`\`

### Resolving Conflicts

\`\`\`
<<<<<<< HEAD
This is the content from main branch
=======
This is the content from feature branch
>>>>>>> feature-branch
\`\`\`

To resolve:
1. Edit the file - keep what you want
2. Remove the conflict markers
3. Stage and commit

\`\`\`bash
# After fixing the file manually
git add file.txt
git commit -m "Merge feature-branch, resolve conflicts"
\`\`\`

### Conflict Resolution Tools

\`\`\`bash
# Use visual merge tool
git mergetool

# See what's conflicted
git status

# Abort merge and go back
git merge --abort
\`\`\`

<tip>
💡 VS Code and other editors have great built-in merge conflict resolution. Look for "Accept Incoming" / "Accept Current" / "Accept Both" buttons!
</tip>

### Merge Strategies

\`\`\`bash
# Standard merge (creates merge commit)
git merge feature-branch

# Squash merge (combine all commits into one)
git merge --squash feature-branch
git commit -m "Add feature X"

# The squash keeps history clean but loses individual commits
\`\`\`

### Complete Merge Workflow

\`\`\`bash
# 1. Start on main, create feature branch
git checkout main
git checkout -b feature/user-profile

# 2. Do work and commit
git add .
git commit -m "Add user profile page"
git commit -m "Add avatar upload"
git commit -m "Add bio editing"

# 3. Update from main (get latest changes)
git checkout main
git pull origin main
git checkout feature/user-profile
git merge main  # or git rebase main

# 4. Merge feature into main
git checkout main
git merge feature/user-profile

# 5. Delete feature branch
git branch -d feature/user-profile

# 6. Push to remote
git push origin main
\`\`\`

### Avoiding Conflicts

\`\`\`
✅ Communicate with team about what you're working on
✅ Pull from main frequently
✅ Keep branches short-lived
✅ Make small, focused commits
✅ Don't reformat entire files unnecessarily
\`\`\`

<warning>
⚠️ Never merge directly to main in team projects! Use Pull Requests instead (covered next chapter).
</warning>

You can now merge like a pro! 🎯
          `}]},{id:4,title:"Working with GitHub",description:"Remote repositories and collaboration",lessons:[{id:"4-1",title:"Connecting to GitHub",duration:"12 min",content:`
## Git Meets the Cloud ☁️

GitHub hosts your Git repositories online, enabling collaboration worldwide!

### Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Sign up with your email
3. Choose a username (this is your identity!)
4. Verify your email

### Create Your First Remote Repository

\`\`\`
1. Click "+" → "New repository"
2. Name it (e.g., "my-first-repo")
3. Add description (optional)
4. Choose Public or Private
5. DON'T initialize with README (we have local repo)
6. Click "Create repository"
\`\`\`

### Connect Local to Remote

\`\`\`bash
# Add remote (origin is conventional name)
git remote add origin https://github.com/username/my-first-repo.git

# Verify remote
git remote -v
# origin  https://github.com/username/my-first-repo.git (fetch)
# origin  https://github.com/username/my-first-repo.git (push)

# Push your code!
git push -u origin main
\`\`\`

### Authentication Options

**Option 1: HTTPS with Token**
\`\`\`bash
# Generate token: GitHub → Settings → Developer Settings → Personal Access Tokens
# Use token as password when pushing
\`\`\`

**Option 2: SSH Keys (Recommended!)**
\`\`\`bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your@email.com"

# Start SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
# Add this to GitHub → Settings → SSH Keys

# Test connection
ssh -T git@github.com
# Hi username! You've successfully authenticated...

# Use SSH URL
git remote set-url origin git@github.com:username/repo.git
\`\`\`

<tip>
💡 SSH keys mean you never type passwords! Set them up once and forget about them.
</tip>

### Clone Existing Repositories

\`\`\`bash
# Clone someone else's repo
git clone https://github.com/facebook/react.git

# Clone into specific folder
git clone https://github.com/user/repo.git my-folder

# Clone specific branch
git clone -b develop https://github.com/user/repo.git
\`\`\`

### Push and Pull

\`\`\`bash
# Push your commits to GitHub
git push origin main

# Get commits from GitHub
git pull origin main

# First push of a new branch
git push -u origin feature-branch
# -u sets upstream, so next time just: git push
\`\`\`

### Remote Commands

\`\`\`bash
# List remotes
git remote -v

# Add another remote
git remote add upstream https://github.com/original/repo.git

# Remove remote
git remote remove origin

# Rename remote
git remote rename origin github
\`\`\`

### Fetch vs Pull

\`\`\`bash
# Fetch: download changes but DON'T merge
git fetch origin

# Now you can see what changed
git log origin/main

# Merge when ready
git merge origin/main

# Pull: fetch + merge in one command
git pull origin main
\`\`\`

<warning>
⚠️ \`git pull\` can create merge conflicts if you have local changes. Consider using \`git fetch\` first to see what's coming!
</warning>

### The .gitignore File

Tell Git what NOT to track:

\`\`\`bash
# .gitignore file
node_modules/
.env
*.log
.DS_Store
dist/
build/
*.secret
\`\`\`

\`\`\`bash
# Create .gitignore
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "Add gitignore"
\`\`\`

### GitHub's Web Interface

You can do a lot without command line:
- View code and commits
- Edit files directly
- Create branches
- Open issues
- Review pull requests
- Manage settings

Your code is now in the cloud! 🌤️
          `},{id:"4-2",title:"Pull Requests & Code Review",duration:"14 min",content:`
## Pull Requests - The Heart of Collaboration 💜

Pull Requests (PRs) are how teams collaborate and review code on GitHub.

### What is a Pull Request?

A PR is a request to merge your branch into another branch. It enables:
- **Code review** before merging
- **Discussion** about changes
- **CI/CD** automated testing
- **Documentation** of why changes were made

### Creating a Pull Request

\`\`\`bash
# 1. Create and push your feature branch
git checkout -b feature/add-login
# ... make changes ...
git add .
git commit -m "Add login functionality"
git push -u origin feature/add-login
\`\`\`

Then on GitHub:
1. Click "Compare & pull request" (appears after pushing)
2. Or: Pull Requests → New Pull Request
3. Select base branch (main) and compare branch (feature/add-login)
4. Write a title and description
5. Click "Create Pull Request"

### Writing Good PR Descriptions

\`\`\`markdown
## What does this PR do?
Adds user login functionality with email/password authentication.

## Changes
- Add login form component
- Implement authentication API
- Add session management
- Create protected route wrapper

## Testing
- [x] Unit tests pass
- [x] Manual testing on Chrome/Firefox
- [x] Mobile responsive

## Screenshots
![Login form](screenshot.png)

## Related Issues
Closes #42
\`\`\`

### Code Review Process

**As a Reviewer:**
\`\`\`
1. Look at the "Files changed" tab
2. Click line numbers to add comments
3. Use "Start a review" to batch comments
4. Submit review with:
   - Comment (just feedback)
   - Approve (looks good!)
   - Request changes (needs work)
\`\`\`

**As the Author:**
\`\`\`
1. Respond to feedback
2. Make requested changes
3. Push new commits
4. Request re-review
\`\`\`

<tip>
💡 Be kind in reviews! Suggest improvements, don't criticize. "Consider using X because..." is better than "This is wrong."
</tip>

### PR Review Best Practices

\`\`\`
✅ Keep PRs small (< 400 lines ideally)
✅ One feature per PR
✅ Write descriptive commit messages
✅ Add screenshots for UI changes
✅ Link related issues
✅ Respond to all feedback
✅ Test before requesting review
\`\`\`

### Merging Pull Requests

Three merge options on GitHub:

**1. Merge Commit**
\`\`\`
Creates a merge commit. Preserves full history.
Best for: Most cases
\`\`\`

**2. Squash and Merge**
\`\`\`
Combines all commits into one. Clean history.
Best for: Feature branches with messy commits
\`\`\`

**3. Rebase and Merge**
\`\`\`
Applies commits on top of base. Linear history.
Best for: When you want clean, linear history
\`\`\`

### Handling Merge Conflicts in PRs

\`\`\`bash
# GitHub shows: "This branch has conflicts"

# Option 1: Resolve on GitHub (for simple conflicts)
# Click "Resolve conflicts" button

# Option 2: Resolve locally
git checkout feature/add-login
git pull origin main
# Fix conflicts
git add .
git commit -m "Resolve merge conflicts"
git push
\`\`\`

### Draft Pull Requests

Not ready for review yet?

\`\`\`
1. Create PR as usual
2. Click dropdown next to "Create" → "Create draft"
3. Work on it, push commits
4. Click "Ready for review" when done
\`\`\`

### Forking and Contributing

To contribute to repos you don't own:

\`\`\`bash
# 1. Fork the repo on GitHub (click "Fork" button)

# 2. Clone YOUR fork
git clone https://github.com/YOUR-USERNAME/repo.git

# 3. Add original as upstream
git remote add upstream https://github.com/ORIGINAL/repo.git

# 4. Create branch and make changes
git checkout -b fix/typo
# make changes
git push origin fix/typo

# 5. Create PR from your fork to original repo
\`\`\`

### Keeping Fork Updated

\`\`\`bash
# Get changes from original repo
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
\`\`\`

<warning>
⚠️ Always create PRs from feature branches, never from main!
</warning>

You now understand collaborative Git workflows! 🤝
          `}]},{id:5,title:"Advanced Git Techniques",description:"Power user features",lessons:[{id:"5-1",title:"Rebasing",duration:"14 min",content:`
## Rebase - Rewriting History ✨

Rebasing is an alternative to merging that creates cleaner history.

### Merge vs Rebase

\`\`\`
Merge creates a merge commit:
     c --- d
    /       \\
a --- b --- e --- M  ← merge commit

Rebase replays commits on top:
a --- b --- e --- c' --- d'
                   ↑
         commits are "replayed"
\`\`\`

### Basic Rebase

\`\`\`bash
# You're on feature branch, main has new commits
git checkout feature-branch
git rebase main

# Your commits are now on top of main!
# Then merge (will be fast-forward)
git checkout main
git merge feature-branch
\`\`\`

### When to Use Rebase vs Merge

| Use Rebase | Use Merge |
|-----------|-----------|
| Local branches not pushed | Shared/pushed branches |
| Want linear history | Preserve full history |
| Before creating PR | Main/develop branches |
| Cleaning up commits | Team collaboration |

### Interactive Rebase - Edit Commits

\`\`\`bash
# Rebase last 3 commits interactively
git rebase -i HEAD~3
\`\`\`

Opens editor:
\`\`\`
pick abc123 Add feature
pick def456 Fix typo
pick ghi789 Add tests

# Commands:
# p, pick = use commit
# r, reword = use commit, edit message
# e, edit = use commit, stop for amending
# s, squash = meld into previous commit
# f, fixup = like squash but discard message
# d, drop = remove commit
\`\`\`

### Squash Commits

Combine multiple commits into one:

\`\`\`bash
git rebase -i HEAD~3

# Change to:
pick abc123 Add feature
squash def456 Fix typo
squash ghi789 Add tests

# Result: One commit with all changes
\`\`\`

<tip>
💡 Squash messy "WIP" commits before creating a PR for cleaner history!
</tip>

### Reorder Commits

\`\`\`bash
git rebase -i HEAD~3

# Original:
pick abc123 Third commit
pick def456 Second commit
pick ghi789 First commit

# Reorder by changing lines:
pick ghi789 First commit
pick def456 Second commit
pick abc123 Third commit
\`\`\`

### Edit Commit Messages

\`\`\`bash
git rebase -i HEAD~2

# Change 'pick' to 'reword':
reword abc123 Fix teh typo
pick def456 Add feature

# Save, then edit the message when prompted
\`\`\`

### Handling Rebase Conflicts

\`\`\`bash
git rebase main

# CONFLICT! Fix the file, then:
git add conflicted-file.txt
git rebase --continue

# Or abort and go back
git rebase --abort
\`\`\`

### The Golden Rule of Rebasing

<warning>
⚠️ NEVER rebase commits that have been pushed to a shared branch!

Rebasing rewrites commit history. If others have those commits, you'll cause major problems!
</warning>

\`\`\`
Safe to rebase:
✅ Your local feature branch
✅ Before pushing
✅ Your own fork

Never rebase:
❌ main branch
❌ Shared feature branches
❌ After pushing (unless solo)
\`\`\`

### Rebase Workflow Example

\`\`\`bash
# 1. Working on feature branch
git checkout -b feature/new-button

# 2. Make commits
git commit -m "Add button component"
git commit -m "wip"
git commit -m "fix styling"
git commit -m "Add click handler"

# 3. Clean up before PR
git rebase -i HEAD~4
# Squash the wip/fix commits

# 4. Get latest main
git fetch origin
git rebase origin/main

# 5. Force push (only your branch!)
git push --force-with-lease

# 6. Create clean PR
\`\`\`

### Force Push Safely

\`\`\`bash
# After rebasing, you need to force push
# Use --force-with-lease (safer than --force)
git push --force-with-lease origin feature-branch

# This fails if someone else pushed in the meantime
\`\`\`

You're now a rebase master! 🎓
          `},{id:"5-2",title:"Git Workflows",duration:"12 min",content:`
## Team Workflows 🏢

Different teams use different Git strategies. Let's learn the popular ones!

### 1. Feature Branch Workflow

The simplest workflow for teams:

\`\`\`
main
  │
  ├── feature/login
  │     └── PR → main
  │
  ├── feature/signup
  │     └── PR → main
  │
  └── feature/profile
        └── PR → main
\`\`\`

\`\`\`bash
# 1. Always branch from main
git checkout main
git pull origin main
git checkout -b feature/my-feature

# 2. Work and commit
git commit -m "Add feature"

# 3. Create PR, get reviewed, merge
# 4. Delete feature branch
\`\`\`

### 2. Gitflow Workflow

For projects with scheduled releases:

\`\`\`
main ────●────────────●────────────●── (releases)
         │            │
develop ─┴────●───●───┴────●───●───── (integration)
              │   │        │
         feature  feature  feature
\`\`\`

**Branches:**
- \`main\` — Production releases only
- \`develop\` — Integration branch
- \`feature/*\` — New features
- \`release/*\` — Release preparation
- \`hotfix/*\` — Emergency production fixes

### 3. GitHub Flow

Simple workflow for continuous deployment:

\`\`\`
main ─────●──●──●──●──●──●── (always deployable)
          │  │  │  │  │  │
          PR PR PR PR PR PR
\`\`\`

Rules:
1. \`main\` is always deployable
2. Branch from \`main\` for new work
3. Open PR when ready
4. Merge after review
5. Deploy immediately

### 4. Trunk-Based Development

For fast-moving teams:

\`\`\`
main ─●─●─●─●─●─●─●─●─●─●─ (everyone commits here)
      │ │ │ │ │ │ │ │ │ │
     Short-lived branches (hours, not days)
\`\`\`

Rules:
- Very short-lived branches (< 1 day)
- Small, frequent commits
- Feature flags for incomplete features
- Strong test coverage required

### Choosing a Workflow

| Workflow | Best For |
|----------|----------|
| Feature Branch | Small teams, startups |
| Gitflow | Release cycles, versioned software |
| GitHub Flow | Web apps, continuous deployment |
| Trunk-Based | Large teams, rapid iteration |

### Branch Protection Rules

Set these on GitHub for safety:

\`\`\`
Settings → Branches → Add rule

Recommended rules:
☑ Require pull request reviews
☑ Require status checks (CI/CD)
☑ Require branches be up to date
☑ Require conversation resolution
☑ Do not allow force pushes
☑ Do not allow deletions
\`\`\`

<warning>
⚠️ Always protect your main branch! No one should push directly to it.
</warning>

### Code Owners

Automatically request reviews from the right people:

\`\`\`bash
# .github/CODEOWNERS file
# Frontend team owns these files
*.js @frontend-team
*.css @frontend-team

# Backend team owns these
/api/ @backend-team
*.py @backend-team

# Security team must approve
/auth/ @security-team
\`\`\`

### Semantic Versioning

When releasing, use semantic versions:

\`\`\`
MAJOR.MINOR.PATCH

1.0.0 → 1.0.1  (bug fix)
1.0.0 → 1.1.0  (new feature, backwards compatible)
1.0.0 → 2.0.0  (breaking changes)
\`\`\`

\`\`\`bash
# Tag a release
git tag v1.0.0
git push origin v1.0.0

# Or create release on GitHub
# Releases → New Release → Create tag
\`\`\`

<tip>
💡 Start with Feature Branch or GitHub Flow. They're simple and work for most teams!
</tip>

You now know how professional teams use Git! 🏆
          `}]},{id:6,title:"CI/CD with GitHub Actions",description:"Automate testing and deployment",lessons:[{id:"6-1",title:"Introduction to GitHub Actions",duration:"12 min",content:`
## Automate Everything! 🤖

GitHub Actions lets you automate tasks whenever something happens in your repo.

### What is CI/CD?

\`\`\`
CI (Continuous Integration)
  → Automatically test code when pushed
  → Catch bugs before merging

CD (Continuous Deployment)
  → Automatically deploy when tests pass
  → Get changes to users faster
\`\`\`

### How GitHub Actions Works

\`\`\`
Trigger (push, PR, schedule)
    ↓
Workflow starts
    ↓
Job 1: Build
    ↓
Job 2: Test
    ↓
Job 3: Deploy
    ↓
Done! ✅
\`\`\`

### Your First Workflow

Create \`.github/workflows/ci.yml\`:

\`\`\`yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm install
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
\`\`\`

### Workflow Anatomy

\`\`\`yaml
name: CI                    # Workflow name

on:                         # Triggers
  push:                     # When to run
    branches: [main]
  pull_request:
    branches: [main]

jobs:                       # What to do
  build:                    # Job name
    runs-on: ubuntu-latest  # Machine type
    
    steps:                  # Sequential steps
      - uses: actions/checkout@v4  # Pre-made action
      - run: npm install           # Shell command
\`\`\`

### Common Triggers

\`\`\`yaml
on:
  # On push to specific branches
  push:
    branches: [main, develop]
  
  # On pull requests
  pull_request:
    branches: [main]
  
  # On schedule (cron)
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
  
  # Manual trigger
  workflow_dispatch:
  
  # When release is published
  release:
    types: [published]
\`\`\`

### Using Actions from Marketplace

\`\`\`yaml
steps:
  # Checkout code
  - uses: actions/checkout@v4
  
  # Setup Node
  - uses: actions/setup-node@v4
    with:
      node-version: '20'
  
  # Setup Python
  - uses: actions/setup-python@v5
    with:
      python-version: '3.12'
  
  # Cache dependencies
  - uses: actions/cache@v4
    with:
      path: node_modules
      key: deps-\${{ hashFiles('package-lock.json') }}
\`\`\`

### Environment Variables & Secrets

\`\`\`yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
    
    steps:
      - name: Deploy
        env:
          API_KEY: \${{ secrets.API_KEY }}
        run: ./deploy.sh
\`\`\`

Add secrets: Settings → Secrets → Actions → New secret

<warning>
⚠️ Never hardcode secrets in workflow files! Always use GitHub Secrets.
</warning>

### Matrix Builds

Test on multiple versions/platforms:

\`\`\`yaml
jobs:
  test:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node: [18, 20, 22]
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node }}
      - run: npm test
\`\`\`

This runs 9 jobs (3 OS × 3 Node versions)!

### Viewing Results

\`\`\`
GitHub → Actions tab
  │
  ├── See all workflow runs
  ├── Click into specific run
  ├── View logs for each step
  └── Download artifacts
\`\`\`

<tip>
💡 Failed builds block PRs from merging (if you set up branch protection). This catches bugs early!
</tip>

You've automated your first workflow! 🎉
          `},{id:"6-2",title:"Deploying with Actions",duration:"14 min",content:`
## Ship It! 🚀

Let's set up automatic deployment with GitHub Actions.

### Deploy to GitHub Pages

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install and Build
        run: |
          npm install
          npm run build
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
\`\`\`

### Deploy to Vercel

\`\`\`yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

### Deploy to AWS S3

\`\`\`yaml
name: Deploy to S3

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Build
        run: npm install && npm run build
      
      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@v0.5.1
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: \${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          SOURCE_DIR: 'dist'
\`\`\`

### Deploy with Docker

\`\`\`yaml
name: Build and Push Docker

on:
  push:
    branches: [main]

jobs:
  docker:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: username/app:latest
\`\`\`

### Complete CI/CD Pipeline

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: build
          path: dist

  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: build
          path: dist
      - name: Deploy
        run: echo "Deploying to production..."
        # Add your deployment commands
\`\`\`

### Job Dependencies

\`\`\`yaml
jobs:
  test:
    # runs first
    
  build:
    needs: test  # waits for test
    
  deploy:
    needs: [test, build]  # waits for both
    if: github.ref == 'refs/heads/main'  # only on main
\`\`\`

### Notifications

\`\`\`yaml
- name: Notify Slack
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: \${{ job.status }}
    text: 'Deployment failed!'
  env:
    SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}
\`\`\`

<tip>
💡 Start simple! Just CI (testing) is valuable. Add deployment later when you're comfortable.
</tip>

### Best Practices

\`\`\`
✅ Always test before deploying
✅ Use caching to speed up builds
✅ Keep secrets in GitHub Secrets
✅ Use specific action versions (@v4, not @latest)
✅ Add status badges to README
✅ Set up notifications for failures
\`\`\`

You can now automate your entire deployment pipeline! 🚀
          `}]},{id:7,title:"Git Tips & Tricks",description:"Productivity boosters",lessons:[{id:"7-1",title:"Git Aliases & Configuration",duration:"10 min",content:`
## Work Smarter, Not Harder ⚡

Let's supercharge your Git workflow with aliases and configuration!

### Git Aliases

Shortcuts for common commands:

\`\`\`bash
# Set up aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Now use them!
git co main       # instead of git checkout main
git br            # instead of git branch
git ci -m "msg"   # instead of git commit -m "msg"
git st            # instead of git status
\`\`\`

### Power Aliases

\`\`\`bash
# Pretty log
git config --global alias.lg "log --oneline --graph --all --decorate"

# Undo last commit (keep changes)
git config --global alias.undo "reset --soft HEAD~1"

# Show what you did today
git config --global alias.today "log --since='midnight' --oneline --author='$(git config user.name)'"

# Amend without editing message
git config --global alias.amend "commit --amend --no-edit"

# Quick save (add all + commit)
git config --global alias.save "!git add -A && git commit -m"
# Usage: git save "Quick save"
\`\`\`

### View All Aliases

\`\`\`bash
git config --global --get-regexp alias
\`\`\`

### My Recommended Aliases

\`\`\`bash
# Add these to your ~/.gitconfig
[alias]
    # Shortcuts
    co = checkout
    br = branch
    ci = commit
    st = status
    
    # Logs
    lg = log --oneline --graph --all --decorate
    last = log -1 HEAD --stat
    
    # Undo
    undo = reset --soft HEAD~1
    unstage = reset HEAD --
    
    # Info
    branches = branch -a
    remotes = remote -v
    tags = tag -l
    
    # Workflow
    save = !git add -A && git commit -m
    wip = commit -am "WIP"
    sync = !git fetch --all && git rebase origin/main
\`\`\`

### Global Gitignore

Ignore files across ALL repos:

\`\`\`bash
# Create global gitignore
git config --global core.excludesfile ~/.gitignore_global

# Edit ~/.gitignore_global
.DS_Store
Thumbs.db
*.swp
*.swo
.idea/
.vscode/
*.log
node_modules/
.env.local
\`\`\`

### Default Branch Name

\`\`\`bash
# Set default branch to 'main' for new repos
git config --global init.defaultBranch main
\`\`\`

### Useful Configurations

\`\`\`bash
# Colorful output
git config --global color.ui auto

# Use VS Code as default editor
git config --global core.editor "code --wait"

# Better diff algorithm
git config --global diff.algorithm histogram

# Auto-correct typos
git config --global help.autocorrect 20
# git chekcout → Did you mean 'checkout'? Running in 2 seconds...

# Rebase by default on pull
git config --global pull.rebase true

# Prune deleted remote branches on fetch
git config --global fetch.prune true
\`\`\`

### View Your Config

\`\`\`bash
# See all config
git config --list

# See where each setting comes from
git config --list --show-origin

# Check specific setting
git config user.email
\`\`\`

### Config Files

\`\`\`
Priority (highest to lowest):
1. .git/config     (repo-specific)
2. ~/.gitconfig    (user global)
3. /etc/gitconfig  (system-wide)
\`\`\`

<tip>
💡 Keep your ~/.gitconfig backed up! It's a lifesaver when setting up a new machine.
</tip>

### Example ~/.gitconfig

\`\`\`ini
[user]
    name = Your Name
    email = you@example.com

[init]
    defaultBranch = main

[core]
    editor = code --wait
    excludesfile = ~/.gitignore_global

[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
    lg = log --oneline --graph --all --decorate
    undo = reset --soft HEAD~1

[pull]
    rebase = true

[fetch]
    prune = true

[color]
    ui = auto
\`\`\`

Your Git is now turbocharged! ⚡
          `},{id:"7-2",title:"Advanced Tips",duration:"12 min",content:`
## Pro Tips & Hidden Gems 💎

Let's explore some advanced Git features that pros use daily!

### Bisect - Find Bad Commits

Binary search to find which commit introduced a bug:

\`\`\`bash
git bisect start
git bisect bad              # Current version is broken
git bisect good v1.0        # This version worked

# Git checks out middle commit
# Test it, then:
git bisect good  # or
git bisect bad

# Repeat until Git finds the exact commit!
git bisect reset  # Return to normal
\`\`\`

### Cherry Pick - Copy Specific Commits

\`\`\`bash
# Copy commit from another branch
git cherry-pick abc123

# Copy multiple commits
git cherry-pick abc123 def456

# Cherry pick without committing
git cherry-pick --no-commit abc123
\`\`\`

### Worktrees - Multiple Checkouts

Work on multiple branches simultaneously:

\`\`\`bash
# Create a new worktree for a branch
git worktree add ../hotfix hotfix-branch

# Now you have two working directories!
# /project (main branch)
# /hotfix  (hotfix-branch)

# List worktrees
git worktree list

# Remove worktree
git worktree remove ../hotfix
\`\`\`

### Blame with Ignore

\`\`\`bash
# Ignore whitespace-only commits
git blame -w file.txt

# Ignore revisions (formatting commits, etc.)
echo "abc123" >> .git-blame-ignore-revs
git config blame.ignoreRevsFile .git-blame-ignore-revs
git blame file.txt
\`\`\`

### Searching in Git

\`\`\`bash
# Search in all commits
git log -S "functionName" --oneline

# Search with regex
git log -G "fix.*bug" --oneline

# Search commit messages
git log --grep="refactor"

# Search in all branches
git log --all -S "searchTerm"
\`\`\`

### Partial Staging

Stage specific lines, not whole files:

\`\`\`bash
git add -p file.txt

# Git shows each change (hunk) and asks:
# Stage this hunk [y,n,q,a,d,e,?]?
# y = yes, stage this hunk
# n = no, don't stage
# s = split into smaller hunks
# e = manually edit
\`\`\`

### Recover Deleted Branch

\`\`\`bash
# Oops, deleted a branch!
git branch -D feature-branch

# Find it in reflog
git reflog | grep feature

# Recreate it
git checkout -b feature-branch abc123
\`\`\`

### Clean Up Local Branches

\`\`\`bash
# See which branches are merged
git branch --merged main

# Delete all merged branches (except main)
git branch --merged main | grep -v "main" | xargs git branch -d

# See stale remote tracking branches
git remote prune origin --dry-run

# Clean them up
git remote prune origin
\`\`\`

### Git Hooks

Automate actions on Git events:

\`\`\`bash
# .git/hooks/pre-commit
#!/bin/sh
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed! Commit aborted."
  exit 1
fi
\`\`\`

Common hooks:
- \`pre-commit\` — Before commit (run tests, lint)
- \`commit-msg\` — Validate commit message
- \`pre-push\` — Before push (run tests)

### Stash Tips

\`\`\`bash
# Stash with a name
git stash push -m "Work in progress on login"

# Stash specific files
git stash push -m "Partial work" file1.js file2.js

# Create branch from stash
git stash branch new-branch stash@{0}

# Show stash diff
git stash show -p stash@{0}
\`\`\`

### Quick Stats

\`\`\`bash
# Lines of code per author
git shortlog -sn

# Commits per day
git log --format="%ad" --date=short | uniq -c

# Files changed in last 10 commits
git log --oneline --stat -10
\`\`\`

<tip>
💡 These commands become muscle memory with practice. Start with 2-3 and add more as you need them!
</tip>

### Git Cheat Sheet

\`\`\`bash
# Status & History
git status                    # Current state
git log --oneline            # Commit history
git diff                     # Unstaged changes
git diff --staged            # Staged changes

# Branching
git branch                   # List branches
git checkout -b name         # Create & switch
git merge branch             # Merge branch

# Stashing
git stash                    # Save changes
git stash pop               # Restore changes

# Undoing
git checkout -- file        # Discard changes
git reset HEAD file         # Unstage
git reset --soft HEAD~1     # Undo commit
git revert commit           # Safe undo

# Remote
git pull                    # Fetch & merge
git push                    # Upload commits
git fetch                   # Download only
\`\`\`

You're now a Git power user! 🎯
          `}]},{id:8,title:"Real-World Projects",description:"Apply your skills",lessons:[{id:"8-1",title:"Contributing to Open Source",duration:"12 min",content:`
## Join the Global Dev Community 🌍

Open source is how the world builds software together. Let's contribute!

### Why Contribute?

- **Learn** from experienced developers
- **Build** your portfolio and reputation
- **Network** with the global dev community
- **Give back** to tools you use daily
- **Get hired** — companies love OSS contributors!

### Find Projects to Contribute

**Good first project criteria:**
- Active (recent commits)
- Has issues labeled "good first issue"
- Responsive maintainers
- Clear contribution guidelines

**Where to look:**
\`\`\`
🔍 github.com/explore
🔍 goodfirstissue.dev
🔍 firsttimersonly.com
🔍 up-for-grabs.net
🔍 codetriage.com
\`\`\`

### The Contribution Workflow

\`\`\`bash
# 1. Fork the repository on GitHub

# 2. Clone YOUR fork
git clone https://github.com/YOUR-USERNAME/project.git
cd project

# 3. Add upstream remote
git remote add upstream https://github.com/ORIGINAL/project.git

# 4. Create a branch
git checkout -b fix/typo-readme

# 5. Make your changes
# Edit files...

# 6. Commit with clear message
git commit -m "Fix typo in README installation section"

# 7. Push to YOUR fork
git push origin fix/typo-readme

# 8. Create Pull Request on GitHub
# Go to original repo → Pull Requests → New
\`\`\`

### Before You Start

\`\`\`bash
# Always read these files:
README.md             # Project overview
CONTRIBUTING.md       # How to contribute
CODE_OF_CONDUCT.md    # Community guidelines

# Check existing issues and PRs
# Don't duplicate work!
\`\`\`

### Good First Contributions

Start small:
- **Documentation**: Fix typos, improve clarity
- **Tests**: Add missing test cases
- **Translation**: Translate docs to your language
- **Bug fixes**: Fix "good first issue" bugs
- **Code style**: Apply consistent formatting

### Writing Good PR Descriptions

\`\`\`markdown
## Description
Fixes the typo in the installation section of README.md

## Changes Made
- Changed "instalation" to "installation"
- Fixed broken markdown link

## Related Issue
Closes #42

## Checklist
- [x] I have read CONTRIBUTING.md
- [x] My code follows the project style
- [x] I have tested my changes
\`\`\`

### Responding to Review Feedback

\`\`\`bash
# Maintainer requests changes
# Make the changes locally
git add .
git commit -m "Address review feedback"
git push origin fix/typo-readme

# The PR automatically updates!
\`\`\`

<tip>
💡 Be patient and polite. Maintainers are volunteers. A week for review is normal!
</tip>

### Keeping Your Fork Updated

\`\`\`bash
# Fetch upstream changes
git fetch upstream

# Update your main branch
git checkout main
git merge upstream/main
git push origin main

# Update your feature branch
git checkout fix/typo-readme
git rebase main
git push --force-with-lease origin fix/typo-readme
\`\`\`

### Common Mistakes to Avoid

\`\`\`
❌ Don't make PRs without reading guidelines
❌ Don't claim issues and disappear
❌ Don't submit huge PRs
❌ Don't argue with maintainers
❌ Don't copy code without attribution

✅ Do ask questions
✅ Do make small, focused PRs
✅ Do be patient and kind
✅ Do test your changes
✅ Do update documentation
\`\`\`

### Your First Contribution Task

\`\`\`
1. Find a project you use
2. Star it ⭐
3. Read the README and CONTRIBUTING
4. Find a "good first issue" or typo
5. Fork, branch, fix, PR
6. Celebrate! 🎉
\`\`\`

<warning>
⚠️ Sign the CLA (Contributor License Agreement) if required. Some big projects need this!
</warning>

Welcome to open source! 🌟
          `},{id:"8-2",title:"Managing Your Own Project",duration:"14 min",content:`
## Build Something Amazing 🚀

You've learned Git. Now let's create a project others can contribute to!

### Setting Up Your Project

\`\`\`bash
# Create project
mkdir my-awesome-project
cd my-awesome-project
git init

# Create initial structure
touch README.md
touch LICENSE
touch CONTRIBUTING.md
touch .gitignore
mkdir src tests docs
\`\`\`

### Essential Files

**README.md**
\`\`\`markdown
# Project Name

Brief description of what it does.

## Installation

\\\`\\\`\\\`bash
npm install my-project
\\\`\\\`\\\`

## Usage

\\\`\\\`\\\`javascript
import { feature } from 'my-project';
feature.doSomething();
\\\`\\\`\\\`

## Features

- Feature 1
- Feature 2
- Feature 3

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT License - see [LICENSE](LICENSE)
\`\`\`

**CONTRIBUTING.md**
\`\`\`markdown
# Contributing to Project Name

Thank you for your interest in contributing!

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a branch
4. Make changes
5. Submit a PR

## Development Setup

\\\`\\\`\\\`bash
npm install
npm test
\\\`\\\`\\\`

## Code Style

- Use ESLint configuration
- Write tests for new features
- Update documentation

## Pull Request Process

1. Update README if needed
2. Add tests for new features
3. Ensure all tests pass
4. Request review from maintainers
\`\`\`

### Issue Templates

Create \`.github/ISSUE_TEMPLATE/bug_report.md\`:

\`\`\`markdown
---
name: Bug Report
about: Create a report to help us improve
---

## Bug Description
A clear description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen.

## Screenshots
If applicable.

## Environment
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Version: [e.g., 1.0.0]
\`\`\`

### Pull Request Template

Create \`.github/pull_request_template.md\`:

\`\`\`markdown
## Description
What does this PR do?

## Related Issue
Closes #

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Refactoring

## Checklist
- [ ] Tests pass
- [ ] Code follows style guide
- [ ] Documentation updated
\`\`\`

### Labels for Issues

\`\`\`
Good labels to create:
  bug           - Something isn't working
  enhancement   - New feature
  documentation - Documentation improvements
  good first issue - Good for newcomers
  help wanted   - Extra attention needed
  question      - Further info requested
  wontfix       - Will not be worked on
  duplicate     - Already exists
\`\`\`

### Set Up GitHub Actions

\`.github/workflows/ci.yml\`:
\`\`\`yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
\`\`\`

### Branch Protection

\`\`\`
Settings → Branches → Add rule

For "main" branch:
☑️ Require pull request before merging
  ☑️ Require approvals (1+)
☑️ Require status checks
  ☑️ Require branches be up to date
☑️ Do not allow force pushes
\`\`\`

### Release Your Project

\`\`\`bash
# Tag a version
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0

# Create GitHub Release
# Releases → Draft new release
# Select tag → Write release notes → Publish
\`\`\`

### Semantic Versioning

\`\`\`
1.0.0
│ │ └── PATCH (bug fixes)
│ └──── MINOR (new features, backwards compatible)
└────── MAJOR (breaking changes)

Examples:
1.0.0 → 1.0.1  Fix a bug
1.0.1 → 1.1.0  Add a feature
1.1.0 → 2.0.0  Breaking API change
\`\`\`

### Add Badges to README

\`\`\`markdown
![Build Status](https://github.com/user/repo/workflows/CI/badge.svg)
![npm version](https://img.shields.io/npm/v/my-package)
![License](https://img.shields.io/github/license/user/repo)
\`\`\`

<tip>
💡 Good documentation is more important than good code. People can't use what they don't understand!
</tip>

### Promoting Your Project

\`\`\`
📢 Post on:
- Twitter/X with relevant hashtags
- Reddit (r/webdev, r/programming)
- Hacker News (Show HN)
- Dev.to
- Your blog

📈 Track:
- GitHub stars
- npm downloads
- Issue engagement
- Contributor count
\`\`\`

Congratulations! You've completed the Git & GitHub course! 🎉

You now know how to:
- Track changes with Git
- Collaborate with branches and PRs
- Automate with GitHub Actions
- Contribute to open source
- Maintain your own projects

Keep building, keep learning, keep shipping! 🚀
          `}]}]};const Om=(...C)=>C.filter((Y,X,h)=>!!Y&&Y.trim()!==""&&h.indexOf(Y)===X).join(" ").trim();const fg=C=>C.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const rg=C=>C.replace(/^([A-Z])|[\s-_]+(\w)/g,(Y,X,h)=>h?h.toUpperCase():X.toLowerCase());const Rm=C=>{const Y=rg(C);return Y.charAt(0).toUpperCase()+Y.slice(1)};var mg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const dg=C=>{for(const Y in C)if(Y.startsWith("aria-")||Y==="role"||Y==="title")return!0;return!1};const hg=Me.forwardRef(({color:C="currentColor",size:Y=24,strokeWidth:X=2,absoluteStrokeWidth:h,className:x="",children:Z,iconNode:it,...Et},O)=>Me.createElement("svg",{ref:O,...mg,width:Y,height:Y,stroke:C,strokeWidth:h?Number(X)*24/Number(Y):X,className:Om("lucide",x),...!Z&&!dg(Et)&&{"aria-hidden":"true"},...Et},[...it.map(([T,P])=>Me.createElement(T,P)),...Array.isArray(Z)?Z:[Z]]));const Re=(C,Y)=>{const X=Me.forwardRef(({className:h,...x},Z)=>Me.createElement(hg,{ref:Z,iconNode:Y,className:Om(`lucide-${fg(Rm(C))}`,`lucide-${C}`,h),...x}));return X.displayName=Rm(C),X};const gg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],yg=Re("book-open",gg);const vg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Qi=Re("chevron-right",vg);const bg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Cn=Re("circle-check",bg);const pg=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sg=Re("clock",pg);const Ag=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],_m=Re("git-branch",Ag);const Eg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tg=Re("house",Eg);const Cg=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Dg=Re("lightbulb",Cg);const zg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mg=Re("menu",zg);const Rg=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],_g=Re("play",Rg);const Og=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ng=Re("triangle-alert",Og);const xg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ug=Re("x",xg);function Hg(){const[C,Y]=Me.useState(!1),[X,h]=Me.useState("home"),[x,Z]=Me.useState(null),[it,Et]=Me.useState([]);Me.useEffect(()=>{const N=localStorage.getItem("git-learning-progress");N&&Et(JSON.parse(N))},[]);const O=N=>{const w=[...it,N];Et(w),localStorage.setItem("git-learning-progress",JSON.stringify(w))},T=ze.chapters.reduce((N,w)=>N+w.lessons.length,0),P=Math.round(it.length/T*100),j=N=>{Z(N),h("lesson"),Y(!1),window.scrollTo(0,0)},dt=()=>{if(!x)return null;for(let N=0;N<ze.chapters.length;N++){const w=ze.chapters[N];for(let K=0;K<w.lessons.length;K++)if(w.lessons[K].id===x.id){if(K<w.lessons.length-1)return w.lessons[K+1];if(N<ze.chapters.length-1)return ze.chapters[N+1].lessons[0]}}return null},Lt=()=>{if(!x)return null;for(let N=0;N<ze.chapters.length;N++){const w=ze.chapters[N];for(let K=0;K<w.lessons.length;K++)if(w.lessons[K].id===x.id){if(K>0)return w.lessons[K-1];if(N>0){const U=ze.chapters[N-1];return U.lessons[U.lessons.length-1]}}}return null},Xt=N=>{const w=N.trim().split(`
`),K=[];let U=0,Tt=!1,jt=[],te="";for(;U<w.length;){const at=w[U];if(at.startsWith("```")){Tt?(K.push(S.jsxs("div",{className:"code-block",children:[S.jsxs("div",{className:"code-header",children:[S.jsx("span",{className:"code-language",children:te}),S.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(jt.join(`
`)),children:"Copy"})]}),S.jsx("div",{className:"code-content",children:S.jsx("pre",{children:jt.join(`
`)})})]},`code-${U}`)),Tt=!1):(Tt=!0,te=at.slice(3).trim()||"text",jt=[]),U++;continue}if(Tt){jt.push(at),U++;continue}if(at.includes("<tip>")){let B=[];for(U++;U<w.length&&!w[U].includes("</tip>");)B.push(w[U]),U++;K.push(S.jsxs("div",{className:"tip-box",children:[S.jsxs("div",{className:"tip-box-header",children:[S.jsx(Dg,{size:18}),S.jsx("span",{children:"Pro Tip"})]}),S.jsx("p",{children:B.join(" ").replace("💡 ","")})]},`tip-${U}`)),U++;continue}if(at.includes("<warning>")){let B=[];for(U++;U<w.length&&!w[U].includes("</warning>");)B.push(w[U]),U++;K.push(S.jsxs("div",{className:"warning-box",children:[S.jsxs("div",{className:"warning-box-header",children:[S.jsx(Ng,{size:18}),S.jsx("span",{children:"Warning"})]}),S.jsx("p",{children:B.join(" ").replace("⚠️ ","")})]},`warn-${U}`)),U++;continue}if(at.startsWith("## ")){K.push(S.jsx("h2",{children:at.slice(3)},`h2-${U}`)),U++;continue}if(at.startsWith("### ")){K.push(S.jsx("h3",{children:at.slice(4)},`h3-${U}`)),U++;continue}if(at.includes("|")&&w[U+1]?.includes("---")){const B=at.split("|").filter(yt=>yt.trim()).map(yt=>yt.trim());U+=2;const Ct=[];for(;U<w.length&&w[U].includes("|");)Ct.push(w[U].split("|").filter(yt=>yt.trim()).map(yt=>yt.trim())),U++;K.push(S.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:S.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[S.jsx("thead",{children:S.jsx("tr",{children:B.map((yt,_e)=>S.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-primary)"},children:yt},_e))})}),S.jsx("tbody",{children:Ct.map((yt,_e)=>S.jsx("tr",{children:yt.map((re,Qt)=>S.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:S.jsx("span",{dangerouslySetInnerHTML:{__html:re.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Qt))},_e))})]})},`table-${U}`));continue}if(at.startsWith("- ")||at.startsWith("* ")){const B=[];for(;U<w.length&&(w[U].startsWith("- ")||w[U].startsWith("* "));)B.push(w[U].slice(2)),U++;K.push(S.jsx("ul",{children:B.map((Ct,yt)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:Ct.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},yt))},`ul-${U}`));continue}if(/^\d+\. /.test(at)){const B=[];for(;U<w.length&&/^\d+\. /.test(w[U]);)B.push(w[U].replace(/^\d+\. /,"")),U++;K.push(S.jsx("ol",{children:B.map((Ct,yt)=>S.jsx("li",{dangerouslySetInnerHTML:{__html:Ct.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},yt))},`ol-${U}`));continue}at.trim()&&K.push(S.jsx("p",{dangerouslySetInnerHTML:{__html:at.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${U}`)),U++}return K};return S.jsxs("div",{className:"app-container",children:[S.jsx("div",{className:"bg-grid"}),S.jsx("div",{className:"bg-noise"}),S.jsx("div",{className:"gradient-orb orb-primary"}),S.jsx("div",{className:"gradient-orb orb-cyan"}),S.jsx("div",{className:"gradient-orb orb-purple"}),S.jsx("button",{className:"mobile-menu-btn",onClick:()=>Y(!C),children:C?S.jsx(Ug,{size:24}):S.jsx(Mg,{size:24})}),S.jsx("div",{className:`sidebar-overlay ${C?"open":""}`,onClick:()=>Y(!1)}),S.jsxs("aside",{className:`sidebar ${C?"open":""}`,children:[S.jsxs("div",{className:"sidebar-header",children:[S.jsx("div",{className:"sidebar-logo",children:S.jsx(_m,{size:24})}),S.jsx("span",{className:"sidebar-title",children:"Git & GitHub"})]}),S.jsxs("nav",{className:"sidebar-nav",children:[S.jsxs("div",{className:`nav-item ${X==="home"?"active":""}`,onClick:()=>{h("home"),Y(!1)},children:[S.jsx(Tg,{size:20,className:"nav-item-icon"}),S.jsx("span",{children:"Home"})]}),ze.chapters.map(N=>S.jsxs("div",{className:"nav-section",children:[S.jsxs("div",{className:"nav-section-title",children:["Ch ",N.id,": ",N.title]}),N.lessons.map(w=>S.jsxs("div",{className:`nav-item ${x?.id===w.id?"active":""}`,onClick:()=>j(w),children:[it.includes(w.id)?S.jsx(Cn,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):S.jsx(yg,{size:18,className:"nav-item-icon"}),S.jsx("span",{children:w.title})]},w.id))]},N.id))]}),S.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[S.jsx("span",{children:"Progress"}),S.jsxs("span",{children:[P,"%"]})]}),S.jsx("div",{className:"progress-bar",children:S.jsx("div",{className:"progress-fill",style:{width:`${P}%`}})})]})]}),S.jsxs("main",{className:"main-content",children:[X==="home"&&S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"hero",children:[S.jsxs("div",{className:"hero-badge",children:[S.jsx(_m,{size:16}),S.jsx("span",{children:"Git & GitHub Course"})]}),S.jsxs("h1",{className:"hero-title",children:["Master",S.jsx("br",{}),S.jsx("span",{children:"Version Control"})]}),S.jsx("p",{className:"hero-subtitle",children:"Learn Git from scratch and become a collaboration pro. Track changes, work with teams, and deploy with confidence!"}),S.jsxs("button",{className:"nav-button primary",onClick:()=>j(ze.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[S.jsx(_g,{size:20}),"Start Learning"]})]}),S.jsxs("div",{style:{marginBottom:"48px"},children:[S.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),ze.chapters.map(N=>{const w=N.lessons.filter(K=>it.includes(K.id)).length;return S.jsxs("div",{className:"chapter-card",onClick:()=>j(N.lessons[0]),children:[S.jsx("div",{className:"chapter-number",children:N.id}),S.jsxs("div",{className:"chapter-info",children:[S.jsx("div",{className:"chapter-title",children:N.title}),S.jsxs("div",{className:"chapter-meta",children:[N.description," • ",N.lessons.length," lessons",w>0&&S.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",w,"/",N.lessons.length," complete)"]})]})]}),S.jsx(Qi,{size:24,style:{color:"var(--text-muted)"}})]},N.id)})]}),S.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[S.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),S.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll be able to:"}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["Git Basics","Branching","Merging","Pull Requests","GitHub Actions","CI/CD"].map(N=>S.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"12px",border:"1px solid rgba(239, 68, 68, 0.2)"},children:[S.jsx(Cn,{size:24,style:{color:"var(--accent-primary)",marginBottom:"8px"}}),S.jsx("div",{style:{fontWeight:"500"},children:N})]},N))})]})]}),X==="lesson"&&x&&S.jsxs("div",{className:"lesson-container",children:[S.jsxs("div",{className:"lesson-header",children:[S.jsxs("div",{className:"lesson-breadcrumb",children:[S.jsx("a",{href:"#",onClick:N=>{N.preventDefault(),h("home")},children:"Home"}),S.jsx(Qi,{size:16}),S.jsx("span",{children:x.title})]}),S.jsx("h1",{className:"lesson-title",children:x.title}),S.jsxs("div",{className:"lesson-meta",children:[S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[S.jsx(Sg,{size:16}),x.duration]}),it.includes(x.id)&&S.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[S.jsx(Cn,{size:16}),"Completed"]})]})]}),S.jsx("div",{className:"lesson-content",children:Xt(x.content)}),!it.includes(x.id)&&S.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>O(x.id),children:[S.jsx(Cn,{size:20}),"Mark as Complete"]}),S.jsxs("div",{className:"lesson-nav",children:[Lt()?S.jsxs("button",{className:"nav-button",onClick:()=>j(Lt()),children:[S.jsx(Qi,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):S.jsx("div",{}),dt()?S.jsxs("button",{className:"nav-button primary",onClick:()=>j(dt()),children:["Next Lesson",S.jsx(Qi,{size:20})]}):S.jsxs("button",{className:"nav-button primary",onClick:()=>h("home"),children:["Finish Course",S.jsx(Cn,{size:20})]})]})]})]})]})}og.createRoot(document.getElementById("root")).render(S.jsx(Me.StrictMode,{children:S.jsx(Hg,{})}));
