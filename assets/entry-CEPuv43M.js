var Mv=Object.defineProperty;var Ev=(s,e,n)=>e in s?Mv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Np=(s,e,n)=>Ev(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Tv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mu={exports:{}},Uo={},Eu={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function wv(){if(Up)return at;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function _(I,se,Pe){this.props=I,this.context=se,this.refs=A,this.updater=Pe||S}_.prototype.isReactComponent={},_.prototype.setState=function(I,se){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,se,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=_.prototype;function U(I,se,Pe){this.props=I,this.context=se,this.refs=A,this.updater=Pe||S}var P=U.prototype=new v;P.constructor=U,w(P,_.prototype),P.isPureReactComponent=!0;var N=Array.isArray,q=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function K(I,se,Pe){var Z,le={},xe=null,Se=null;if(se!=null)for(Z in se.ref!==void 0&&(Se=se.ref),se.key!==void 0&&(xe=""+se.key),se)q.call(se,Z)&&!F.hasOwnProperty(Z)&&(le[Z]=se[Z]);var be=arguments.length-2;if(be===1)le.children=Pe;else if(1<be){for(var Le=Array(be),et=0;et<be;et++)Le[et]=arguments[et+2];le.children=Le}if(I&&I.defaultProps)for(Z in be=I.defaultProps,be)le[Z]===void 0&&(le[Z]=be[Z]);return{$$typeof:s,type:I,key:xe,ref:Se,props:le,_owner:z.current}}function ye(I,se){return{$$typeof:s,type:I.type,key:se,ref:I.ref,props:I.props,_owner:I._owner}}function E(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function R(I){var se={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Pe){return se[Pe]})}var oe=/\/+/g;function ne(I,se){return typeof I=="object"&&I!==null&&I.key!=null?R(""+I.key):se.toString(36)}function ue(I,se,Pe,Z,le){var xe=typeof I;(xe==="undefined"||xe==="boolean")&&(I=null);var Se=!1;if(I===null)Se=!0;else switch(xe){case"string":case"number":Se=!0;break;case"object":switch(I.$$typeof){case s:case e:Se=!0}}if(Se)return Se=I,le=le(Se),I=Z===""?"."+ne(Se,0):Z,N(le)?(Pe="",I!=null&&(Pe=I.replace(oe,"$&/")+"/"),ue(le,se,Pe,"",function(et){return et})):le!=null&&(E(le)&&(le=ye(le,Pe+(!le.key||Se&&Se.key===le.key?"":(""+le.key).replace(oe,"$&/")+"/")+I)),se.push(le)),1;if(Se=0,Z=Z===""?".":Z+":",N(I))for(var be=0;be<I.length;be++){xe=I[be];var Le=Z+ne(xe,be);Se+=ue(xe,se,Pe,Le,le)}else if(Le=x(I),typeof Le=="function")for(I=Le.call(I),be=0;!(xe=I.next()).done;)xe=xe.value,Le=Z+ne(xe,be++),Se+=ue(xe,se,Pe,Le,le);else if(xe==="object")throw se=String(I),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return Se}function pe(I,se,Pe){if(I==null)return I;var Z=[],le=0;return ue(I,Z,"","",function(xe){return se.call(Pe,xe,le++)}),Z}function re(I){if(I._status===-1){var se=I._result;se=se(),se.then(function(Pe){(I._status===0||I._status===-1)&&(I._status=1,I._result=Pe)},function(Pe){(I._status===0||I._status===-1)&&(I._status=2,I._result=Pe)}),I._status===-1&&(I._status=0,I._result=se)}if(I._status===1)return I._result.default;throw I._result}var V={current:null},D={transition:null},ie={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:D,ReactCurrentOwner:z};function J(){throw Error("act(...) is not supported in production builds of React.")}return at.Children={map:pe,forEach:function(I,se,Pe){pe(I,function(){se.apply(this,arguments)},Pe)},count:function(I){var se=0;return pe(I,function(){se++}),se},toArray:function(I){return pe(I,function(se){return se})||[]},only:function(I){if(!E(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},at.Component=_,at.Fragment=n,at.Profiler=a,at.PureComponent=U,at.StrictMode=r,at.Suspense=p,at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,at.act=J,at.cloneElement=function(I,se,Pe){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=w({},I.props),le=I.key,xe=I.ref,Se=I._owner;if(se!=null){if(se.ref!==void 0&&(xe=se.ref,Se=z.current),se.key!==void 0&&(le=""+se.key),I.type&&I.type.defaultProps)var be=I.type.defaultProps;for(Le in se)q.call(se,Le)&&!F.hasOwnProperty(Le)&&(Z[Le]=se[Le]===void 0&&be!==void 0?be[Le]:se[Le])}var Le=arguments.length-2;if(Le===1)Z.children=Pe;else if(1<Le){be=Array(Le);for(var et=0;et<Le;et++)be[et]=arguments[et+2];Z.children=be}return{$$typeof:s,type:I.type,key:le,ref:xe,props:Z,_owner:Se}},at.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:c,_context:I},I.Consumer=I},at.createElement=K,at.createFactory=function(I){var se=K.bind(null,I);return se.type=I,se},at.createRef=function(){return{current:null}},at.forwardRef=function(I){return{$$typeof:d,render:I}},at.isValidElement=E,at.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:re}},at.memo=function(I,se){return{$$typeof:m,type:I,compare:se===void 0?null:se}},at.startTransition=function(I){var se=D.transition;D.transition={};try{I()}finally{D.transition=se}},at.unstable_act=J,at.useCallback=function(I,se){return V.current.useCallback(I,se)},at.useContext=function(I){return V.current.useContext(I)},at.useDebugValue=function(){},at.useDeferredValue=function(I){return V.current.useDeferredValue(I)},at.useEffect=function(I,se){return V.current.useEffect(I,se)},at.useId=function(){return V.current.useId()},at.useImperativeHandle=function(I,se,Pe){return V.current.useImperativeHandle(I,se,Pe)},at.useInsertionEffect=function(I,se){return V.current.useInsertionEffect(I,se)},at.useLayoutEffect=function(I,se){return V.current.useLayoutEffect(I,se)},at.useMemo=function(I,se){return V.current.useMemo(I,se)},at.useReducer=function(I,se,Pe){return V.current.useReducer(I,se,Pe)},at.useRef=function(I){return V.current.useRef(I)},at.useState=function(I){return V.current.useState(I)},at.useSyncExternalStore=function(I,se,Pe){return V.current.useSyncExternalStore(I,se,Pe)},at.useTransition=function(){return V.current.useTransition()},at.version="18.3.1",at}var Fp;function $f(){return Fp||(Fp=1,Eu.exports=wv()),Eu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Av(){if(Op)return Uo;Op=1;var s=$f(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var g,y={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(g in p)r.call(p,g)&&!c.hasOwnProperty(g)&&(y[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)y[g]===void 0&&(y[g]=p[g]);return{$$typeof:e,type:d,key:x,ref:S,props:y,_owner:a.current}}return Uo.Fragment=n,Uo.jsx=f,Uo.jsxs=f,Uo}var kp;function Cv(){return kp||(kp=1,Mu.exports=Av()),Mu.exports}var ce=Cv(),_r=$f();const Qa=Tv(_r);var Ja={},Tu={exports:{}},An={},wu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Rv(){return Bp||(Bp=1,(function(s){function e(D,ie){var J=D.length;D.push(ie);e:for(;0<J;){var I=J-1>>>1,se=D[I];if(0<a(se,ie))D[I]=ie,D[J]=se,J=I;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var ie=D[0],J=D.pop();if(J!==ie){D[0]=J;e:for(var I=0,se=D.length,Pe=se>>>1;I<Pe;){var Z=2*(I+1)-1,le=D[Z],xe=Z+1,Se=D[xe];if(0>a(le,J))xe<se&&0>a(Se,le)?(D[I]=Se,D[xe]=J,I=xe):(D[I]=le,D[Z]=J,I=Z);else if(xe<se&&0>a(Se,J))D[I]=Se,D[xe]=J,I=xe;else break e}}return ie}function a(D,ie){var J=D.sortIndex-ie.sortIndex;return J!==0?J:D.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,y=null,x=3,S=!1,w=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(D){for(var ie=n(m);ie!==null;){if(ie.callback===null)r(m);else if(ie.startTime<=D)r(m),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=n(m)}}function N(D){if(A=!1,P(D),!w)if(n(p)!==null)w=!0,re(q);else{var ie=n(m);ie!==null&&V(N,ie.startTime-D)}}function q(D,ie){w=!1,A&&(A=!1,v(K),K=-1),S=!0;var J=x;try{for(P(ie),y=n(p);y!==null&&(!(y.expirationTime>ie)||D&&!R());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var se=I(y.expirationTime<=ie);ie=s.unstable_now(),typeof se=="function"?y.callback=se:y===n(p)&&r(p),P(ie)}else r(p);y=n(p)}if(y!==null)var Pe=!0;else{var Z=n(m);Z!==null&&V(N,Z.startTime-ie),Pe=!1}return Pe}finally{y=null,x=J,S=!1}}var z=!1,F=null,K=-1,ye=5,E=-1;function R(){return!(s.unstable_now()-E<ye)}function oe(){if(F!==null){var D=s.unstable_now();E=D;var ie=!0;try{ie=F(!0,D)}finally{ie?ne():(z=!1,F=null)}}else z=!1}var ne;if(typeof U=="function")ne=function(){U(oe)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=oe,ne=function(){pe.postMessage(null)}}else ne=function(){_(oe,0)};function re(D){F=D,z||(z=!0,ne())}function V(D,ie){K=_(function(){D(s.unstable_now())},ie)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,re(q))},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(D){switch(x){case 1:case 2:case 3:var ie=3;break;default:ie=x}var J=x;x=ie;try{return D()}finally{x=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(D,ie){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=x;x=D;try{return ie()}finally{x=J}},s.unstable_scheduleCallback=function(D,ie,J){var I=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?I+J:I):J=I,D){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=J+se,D={id:g++,callback:ie,priorityLevel:D,startTime:J,expirationTime:se,sortIndex:-1},J>I?(D.sortIndex=J,e(m,D),n(p)===null&&D===n(m)&&(A?(v(K),K=-1):A=!0,V(N,J-I))):(D.sortIndex=se,e(p,D),w||S||(w=!0,re(q))),D},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(D){var ie=x;return function(){var J=x;x=ie;try{return D.apply(this,arguments)}finally{x=J}}}})(Au)),Au}var zp;function Pv(){return zp||(zp=1,wu.exports=Rv()),wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function bv(){if(Hp)return An;Hp=1;var s=$f(),e=Pv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(t){return p.call(y,t)?!0:p.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,u,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,U);_[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,U);_[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,U);_[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var u=_.hasOwnProperty(i)?_[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,u,l)&&(o=null),l||u===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),D=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,I;function se(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Pe=!1;function Z(t,i){if(!t||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),h=l.stack.split(`
`),M=u.length-1,L=h.length-1;1<=M&&0<=L&&u[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(u[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||u[M]!==h[L]){var O=`
`+u[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?se(t):""}function le(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case ye:return"Profiler";case K:return"StrictMode";case ne:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t){var i=Le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function gt(t){t._valueTracker||(t._valueTracker=et(t))}function ut(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function k(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sn(t,i){var o=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ct(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=be(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function $e(t,i){ht(t,i);var o=be(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(t,i.type,o):i.hasOwnProperty("defaultValue")&&Qe(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function wt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Qe(t,i,o){(i!=="number"||k(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var b=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+be(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function $(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function de(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(b(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:be(o)}}function _e(t,i){var o=be(i.value),l=be(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function fe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function je(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?je(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,pt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Oe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(Oe).forEach(function(t){tt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oe[i]=Oe[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Oe.hasOwnProperty(t)&&Oe[t]?(""+i).trim():i+"px"}function Be(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var ft=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(t,i){if(i){if(ft[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Mt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function De(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ae=null,he=null,Ce=null;function Ne(t){if(t=yo(t)){if(typeof ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ha(i),ae(t.stateNode,t.type,i))}}function dt(t){he?Ce?Ce.push(t):Ce=[t]:he=t}function kt(){if(he){var t=he,i=Ce;if(Ce=he=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function on(t,i){return t(i)}function mt(){}var Qt=!1;function Bn(t,i,o){if(Qt)return t(i,o);Qt=!0;try{return on(t,i,o)}finally{Qt=!1,(he!==null||Ce!==null)&&(mt(),kt())}}function Vi(t,i){var o=t.stateNode;if(o===null)return null;var l=ha(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Jr=!1;if(d)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Jr=!1}function eo(t,i,o,l,u,h,M,L,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(ge){this.onError(ge)}}var Gi=!1,Tr=null,yi=!1,es=null,ts={onError:function(t){Gi=!0,Tr=t}};function qo(t,i,o,l,u,h,M,L,O){Gi=!1,Tr=null,eo.apply(ts,arguments)}function Ko(t,i,o,l,u,h,M,L,O){if(qo.apply(this,arguments),Gi){if(Gi){var te=Tr;Gi=!1,Tr=null}else throw Error(n(198));yi||(yi=!0,es=te)}}function Si(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function $o(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Zo(t){if(Si(t)!==t)throw Error(n(188))}function C(t){var i=t.alternate;if(!i){if(i=Si(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Zo(u),t;if(h===l)return Zo(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var M=!1,L=u.child;L;){if(L===o){M=!0,o=u,l=h;break}if(L===l){M=!0,l=u,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=u;break}if(L===l){M=!0,l=h,o=u;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function G(t){return t=C(t),t!==null?Q(t):null}function Q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Q(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,W=e.unstable_cancelCallback,Te=e.unstable_shouldYield,Ie=e.unstable_requestPaint,we=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,St=e.unstable_LowPriority,At=e.unstable_IdlePriority,Rt=null,Nt=null;function vt(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Rt,t,void 0,(t.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:Dn,jt=Math.log,xt=Math.LN2;function Dn(t){return t>>>=0,t===0?32:31-(jt(t)/xt|0)|0}var Zn=64,Jt=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~u;L!==0?l=Mi(L):(h&=M,h!==0&&(l=Mi(h)))}else M=o&~u,M!==0?l=Mi(M):h!==0&&(l=Mi(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ke(i),u=1<<o,l|=t[o],i&=~u;return l}function ui(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function to(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ke(h),L=1<<M,O=u[M];O===-1?((L&o)===0||(L&l)!==0)&&(u[M]=ui(L,i)):O<=i&&(t.expiredLanes|=L),h&=~L}}function un(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ns(){var t=Zn;return Zn<<=1,(Zn&4194240)===0&&(Zn=64),t}function no(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Wi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ke(i),t[i]=o}function Gg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-ke(o),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function Xl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ke(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var Tt=0;function dd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hd,jl,pd,md,gd,Yl=!1,Qo=[],Xi=null,ji=null,Yi=null,io=new Map,ro=new Map,qi=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(t,i,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=yo(i),i!==null&&jl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function Xg(t,i,o,l,u){switch(i){case"focusin":return Xi=so(Xi,t,i,o,l,u),!0;case"dragenter":return ji=so(ji,t,i,o,l,u),!0;case"mouseover":return Yi=so(Yi,t,i,o,l,u),!0;case"pointerover":var h=u.pointerId;return io.set(h,so(io.get(h)||null,t,i,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,ro.set(h,so(ro.get(h)||null,t,i,o,l,u)),!0}return!1}function vd(t){var i=wr(t.target);if(i!==null){var o=Si(i);if(o!==null){if(i=o.tag,i===13){if(i=$o(o),i!==null){t.blockedOn=i,gd(t.priority,function(){pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);H=l,o.target.dispatchEvent(l),H=null}else return i=yo(o),i!==null&&jl(i),t.blockedOn=o,!1;i.shift()}return!0}function xd(t,i,o){Jo(t)&&o.delete(i)}function jg(){Yl=!1,Xi!==null&&Jo(Xi)&&(Xi=null),ji!==null&&Jo(ji)&&(ji=null),Yi!==null&&Jo(Yi)&&(Yi=null),io.forEach(xd),ro.forEach(xd)}function oo(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jg)))}function ao(t){function i(u){return oo(u,t)}if(0<Qo.length){oo(Qo[0],t);for(var o=1;o<Qo.length;o++){var l=Qo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&oo(Xi,t),ji!==null&&oo(ji,t),Yi!==null&&oo(Yi,t),io.forEach(i),ro.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)vd(o),o.blockedOn===null&&qi.shift()}var is=N.ReactCurrentBatchConfig,ea=!0;function Yg(t,i,o,l){var u=Tt,h=is.transition;is.transition=null;try{Tt=1,ql(t,i,o,l)}finally{Tt=u,is.transition=h}}function qg(t,i,o,l){var u=Tt,h=is.transition;is.transition=null;try{Tt=4,ql(t,i,o,l)}finally{Tt=u,is.transition=h}}function ql(t,i,o,l){if(ea){var u=Kl(t,i,o,l);if(u===null)dc(t,i,l,ta,o),_d(t,l);else if(Xg(u,t,i,o,l))l.stopPropagation();else if(_d(t,l),i&4&&-1<Wg.indexOf(t)){for(;u!==null;){var h=yo(u);if(h!==null&&hd(h),h=Kl(t,i,o,l),h===null&&dc(t,i,l,ta,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else dc(t,i,l,null,o)}}var ta=null;function Kl(t,i,o,l){if(ta=null,t=De(l),t=wr(t),t!==null)if(i=Si(t),i===null)t=null;else if(o=i.tag,o===13){if(t=$o(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ta=t,null}function yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ke:return 1;case Ze:return 4;case We:case St:return 16;case At:return 536870912;default:return 16}default:return 16}}var Ki=null,$l=null,na=null;function Sd(){if(na)return na;var t,i=$l,o=i.length,l,u="value"in Ki?Ki.value:Ki.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===u[h-l];l++);return na=u.slice(t,1<l?1-l:void 0)}function ia(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function Md(){return!1}function In(t){function i(o,l,u,h,M){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ra:Md,this.isPropagationStopped=Md,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=In(rs),lo=J({},rs,{view:0,detail:0}),Kg=In(lo),Ql,Jl,co,sa=J({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Ql=t.screenX-co.screenX,Jl=t.screenY-co.screenY):Jl=Ql=0,co=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),Ed=In(sa),$g=J({},sa,{dataTransfer:0}),Zg=In($g),Qg=J({},lo,{relatedTarget:0}),ec=In(Qg),Jg=J({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),e_=In(Jg),t_=J({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n_=In(t_),i_=J({},rs,{data:0}),Td=In(i_),r_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=o_[t])?!!i[t]:!1}function tc(){return a_}var l_=J({},lo,{key:function(t){if(t.key){var i=r_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c_=In(l_),u_=J({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=In(u_),f_=J({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),d_=In(f_),h_=J({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),p_=In(h_),m_=J({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g_=In(m_),__=[9,13,27,32],nc=d&&"CompositionEvent"in window,uo=null;d&&"documentMode"in document&&(uo=document.documentMode);var v_=d&&"TextEvent"in window&&!uo,Ad=d&&(!nc||uo&&8<uo&&11>=uo),Cd=" ",Rd=!1;function Pd(t,i){switch(t){case"keyup":return __.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function x_(t,i){switch(t){case"compositionend":return bd(i);case"keypress":return i.which!==32?null:(Rd=!0,Cd);case"textInput":return t=i.data,t===Cd&&Rd?null:t;default:return null}}function y_(t,i){if(ss)return t==="compositionend"||!nc&&Pd(t,i)?(t=Sd(),na=$l=Ki=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ad&&i.locale!=="ko"?null:i.data;default:return null}}var S_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!S_[t.type]:i==="textarea"}function Dd(t,i,o,l){dt(l),i=ua(i,"onChange"),0<i.length&&(o=new Zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var fo=null,ho=null;function M_(t){$d(t,0)}function oa(t){var i=us(t);if(ut(i))return t}function E_(t,i){if(t==="change")return i}var Id=!1;if(d){var ic;if(d){var rc="oninput"in document;if(!rc){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),rc=typeof Nd.oninput=="function"}ic=rc}else ic=!1;Id=ic&&(!document.documentMode||9<document.documentMode)}function Ud(){fo&&(fo.detachEvent("onpropertychange",Fd),ho=fo=null)}function Fd(t){if(t.propertyName==="value"&&oa(ho)){var i=[];Dd(i,ho,t,De(t)),Bn(M_,i)}}function T_(t,i,o){t==="focusin"?(Ud(),fo=i,ho=o,fo.attachEvent("onpropertychange",Fd)):t==="focusout"&&Ud()}function w_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oa(ho)}function A_(t,i){if(t==="click")return oa(i)}function C_(t,i){if(t==="input"||t==="change")return oa(i)}function R_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:R_;function po(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(i,u)||!Qn(t[u],i[u]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,i){var o=Od(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function Bd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Bd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function zd(){for(var t=window,i=k();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=k(t.document)}return i}function sc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function P_(t){var i=zd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Bd(o.ownerDocument.documentElement,o)){if(l!==null&&sc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=kd(o,h);var M=kd(o,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b_=d&&"documentMode"in document&&11>=document.documentMode,os=null,oc=null,mo=null,ac=!1;function Hd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ac||os==null||os!==k(l)||(l=os,"selectionStart"in l&&sc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),mo&&po(mo,l)||(mo=l,l=ua(oc,"onSelect"),0<l.length&&(i=new Zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=os)))}function aa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},lc={},Vd={};d&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function la(t){if(lc[t])return lc[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Vd)return lc[t]=i[o];return t}var Gd=la("animationend"),Wd=la("animationiteration"),Xd=la("animationstart"),jd=la("transitionend"),Yd=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Yd.set(t,i),c(i,[t])}for(var cc=0;cc<qd.length;cc++){var uc=qd[cc],L_=uc.toLowerCase(),D_=uc[0].toUpperCase()+uc.slice(1);$i(L_,"on"+D_)}$i(Gd,"onAnimationEnd"),$i(Wd,"onAnimationIteration"),$i(Xd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(jd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I_=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Kd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ko(l,i,void 0,t),t.currentTarget=null}function $d(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,te=L.currentTarget;if(L=L.listener,O!==h&&u.isPropagationStopped())break e;Kd(u,L,te),h=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,te=L.currentTarget,L=L.listener,O!==h&&u.isPropagationStopped())break e;Kd(u,L,te),h=O}}}if(yi)throw t=es,yi=!1,es=null,t}function Lt(t,i){var o=i[vc];o===void 0&&(o=i[vc]=new Set);var l=t+"__bubble";o.has(l)||(Zd(i,t,2,!1),o.add(l))}function fc(t,i,o){var l=0;i&&(l|=4),Zd(o,t,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[ca]){t[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(I_.has(o)||fc(o,!1,t),fc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ca]||(i[ca]=!0,fc("selectionchange",!1,i))}}function Zd(t,i,o,l){switch(yd(i)){case 1:var u=Yg;break;case 4:u=qg;break;default:u=ql}o=u.bind(null,i,o,t),u=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function dc(t,i,o,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===u||L.nodeType===8&&L.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;M=M.return}for(;L!==null;){if(M=wr(L),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}L=L.parentNode}}l=l.return}Bn(function(){var te=h,ge=De(o),ve=[];e:{var me=Yd.get(t);if(me!==void 0){var Ue=Zl,He=t;switch(t){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":Ue=c_;break;case"focusin":He="focus",Ue=ec;break;case"focusout":He="blur",Ue=ec;break;case"beforeblur":case"afterblur":Ue=ec;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=d_;break;case Gd:case Wd:case Xd:Ue=e_;break;case jd:Ue=p_;break;case"scroll":Ue=Kg;break;case"wheel":Ue=g_;break;case"copy":case"cut":case"paste":Ue=n_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=wd}var Ve=(i&4)!==0,Gt=!Ve&&t==="scroll",X=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var B=te,Y;B!==null;){Y=B;var Ee=Y.stateNode;if(Y.tag===5&&Ee!==null&&(Y=Ee,X!==null&&(Ee=Vi(B,X),Ee!=null&&Ve.push(vo(B,Ee,Y)))),Gt)break;B=B.return}0<Ve.length&&(me=new Ue(me,He,null,o,ge),ve.push({event:me,listeners:Ve}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",me&&o!==H&&(He=o.relatedTarget||o.fromElement)&&(wr(He)||He[Ei]))break e;if((Ue||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(He=o.relatedTarget||o.toElement,Ue=te,He=He?wr(He):null,He!==null&&(Gt=Si(He),He!==Gt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=te),Ue!==He)){if(Ve=Ed,Ee="onMouseLeave",X="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=wd,Ee="onPointerLeave",X="onPointerEnter",B="pointer"),Gt=Ue==null?me:us(Ue),Y=He==null?me:us(He),me=new Ve(Ee,B+"leave",Ue,o,ge),me.target=Gt,me.relatedTarget=Y,Ee=null,wr(ge)===te&&(Ve=new Ve(X,B+"enter",He,o,ge),Ve.target=Y,Ve.relatedTarget=Gt,Ee=Ve),Gt=Ee,Ue&&He)t:{for(Ve=Ue,X=He,B=0,Y=Ve;Y;Y=ls(Y))B++;for(Y=0,Ee=X;Ee;Ee=ls(Ee))Y++;for(;0<B-Y;)Ve=ls(Ve),B--;for(;0<Y-B;)X=ls(X),Y--;for(;B--;){if(Ve===X||X!==null&&Ve===X.alternate)break t;Ve=ls(Ve),X=ls(X)}Ve=null}else Ve=null;Ue!==null&&Qd(ve,me,Ue,Ve,!1),He!==null&&Gt!==null&&Qd(ve,Gt,He,Ve,!0)}}e:{if(me=te?us(te):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var Xe=E_;else if(Ld(me))if(Id)Xe=C_;else{Xe=w_;var Ye=T_}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=A_);if(Xe&&(Xe=Xe(t,te))){Dd(ve,Xe,o,ge);break e}Ye&&Ye(t,me,te),t==="focusout"&&(Ye=me._wrapperState)&&Ye.controlled&&me.type==="number"&&Qe(me,"number",me.value)}switch(Ye=te?us(te):window,t){case"focusin":(Ld(Ye)||Ye.contentEditable==="true")&&(os=Ye,oc=te,mo=null);break;case"focusout":mo=oc=os=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Hd(ve,o,ge);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":Hd(ve,o,ge)}var qe;if(nc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ss?Pd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Ad&&o.locale!=="ko"&&(ss||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ss&&(qe=Sd()):(Ki=ge,$l="value"in Ki?Ki.value:Ki.textContent,ss=!0)),Ye=ua(te,nt),0<Ye.length&&(nt=new Td(nt,t,null,o,ge),ve.push({event:nt,listeners:Ye}),qe?nt.data=qe:(qe=bd(o),qe!==null&&(nt.data=qe)))),(qe=v_?x_(t,o):y_(t,o))&&(te=ua(te,"onBeforeInput"),0<te.length&&(ge=new Td("onBeforeInput","beforeinput",null,o,ge),ve.push({event:ge,listeners:te}),ge.data=qe))}$d(ve,i)})}function vo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ua(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Vi(t,o),h!=null&&l.unshift(vo(t,h,u)),h=Vi(t,i),h!=null&&l.push(vo(t,h,u))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qd(t,i,o,l,u){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,O=L.alternate,te=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&te!==null&&(L=te,u?(O=Vi(o,h),O!=null&&M.unshift(vo(o,O,L))):u||(O=Vi(o,h),O!=null&&M.push(vo(o,O,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var N_=/\r\n?/g,U_=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(N_,`
`).replace(U_,"")}function fa(t,i,o){if(i=Jd(i),Jd(t)!==i&&o)throw Error(n(425))}function da(){}var hc=null,pc=null;function mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,F_=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,O_=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(k_)}:gc;function k_(t){setTimeout(function(){throw t})}function _c(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),ao(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);ao(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),fi="__reactFiber$"+cs,xo="__reactProps$"+cs,Ei="__reactContainer$"+cs,vc="__reactEvents$"+cs,B_="__reactListeners$"+cs,z_="__reactHandles$"+cs;function wr(t){var i=t[fi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ei]||o[fi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=th(t);t!==null;){if(o=t[fi])return o;t=th(t)}return i}t=o,o=t.parentNode}return null}function yo(t){return t=t[fi]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ha(t){return t[xo]||null}var xc=[],fs=-1;function Qi(t){return{current:t}}function Dt(t){0>fs||(t.current=xc[fs],xc[fs]=null,fs--)}function bt(t,i){fs++,xc[fs]=t.current,t.current=i}var Ji={},fn=Qi(Ji),Sn=Qi(!1),Ar=Ji;function ds(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Mn(t){return t=t.childContextTypes,t!=null}function pa(){Dt(Sn),Dt(fn)}function nh(t,i,o){if(fn.current!==Ji)throw Error(n(168));bt(fn,i),bt(Sn,o)}function ih(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,Se(t)||"Unknown",u));return J({},o,l)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Ar=fn.current,bt(fn,t),bt(Sn,Sn.current),!0}function rh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=ih(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Dt(Sn),Dt(fn),bt(fn,t)):Dt(Sn),bt(Sn,o)}var Ti=null,ga=!1,yc=!1;function sh(t){Ti===null?Ti=[t]:Ti.push(t)}function H_(t){ga=!0,sh(t)}function er(){if(!yc&&Ti!==null){yc=!0;var t=0,i=Tt;try{var o=Ti;for(Tt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ti=null,ga=!1}catch(u){throw Ti!==null&&(Ti=Ti.slice(t+1)),ee(Ke,er),u}finally{Tt=i,yc=!1}}return null}var hs=[],ps=0,_a=null,va=0,zn=[],Hn=0,Cr=null,wi=1,Ai="";function Rr(t,i){hs[ps++]=va,hs[ps++]=_a,_a=t,va=i}function oh(t,i,o){zn[Hn++]=wi,zn[Hn++]=Ai,zn[Hn++]=Cr,Cr=t;var l=wi;t=Ai;var u=32-ke(l)-1;l&=~(1<<u),o+=1;var h=32-ke(i)+u;if(30<h){var M=u-u%5;h=(l&(1<<M)-1).toString(32),l>>=M,u-=M,wi=1<<32-ke(i)+u|o<<u|l,Ai=h+t}else wi=1<<h|o<<u|l,Ai=t}function Sc(t){t.return!==null&&(Rr(t,1),oh(t,1,0))}function Mc(t){for(;t===_a;)_a=hs[--ps],hs[ps]=null,va=hs[--ps],hs[ps]=null;for(;t===Cr;)Cr=zn[--Hn],zn[Hn]=null,Ai=zn[--Hn],zn[Hn]=null,wi=zn[--Hn],zn[Hn]=null}var Nn=null,Un=null,Ut=!1,Jn=null;function ah(t,i){var o=Xn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function lh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,Un=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Cr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Xn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,Un=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(Ut){var i=Un;if(i){var o=i;if(!lh(t,i)){if(Ec(t))throw Error(n(418));i=Zi(o.nextSibling);var l=Nn;i&&lh(t,i)?ah(l,o):(t.flags=t.flags&-4097|2,Ut=!1,Nn=t)}}else{if(Ec(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ut=!1,Nn=t}}}function ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function xa(t){if(t!==Nn)return!1;if(!Ut)return ch(t),Ut=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!mc(t.type,t.memoizedProps)),i&&(i=Un)){if(Ec(t))throw uh(),Error(n(418));for(;i;)ah(t,i),i=Zi(i.nextSibling)}if(ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Un=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=Nn?Zi(t.stateNode.nextSibling):null;return!0}function uh(){for(var t=Un;t;)t=Zi(t.nextSibling)}function ms(){Un=Nn=null,Ut=!1}function wc(t){Jn===null?Jn=[t]:Jn.push(t)}var V_=N.ReactCurrentBatchConfig;function So(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=u.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ya(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function fh(t){var i=t._init;return i(t._payload)}function dh(t){function i(X,B){if(t){var Y=X.deletions;Y===null?(X.deletions=[B],X.flags|=16):Y.push(B)}}function o(X,B){if(!t)return null;for(;B!==null;)i(X,B),B=B.sibling;return null}function l(X,B){for(X=new Map;B!==null;)B.key!==null?X.set(B.key,B):X.set(B.index,B),B=B.sibling;return X}function u(X,B){return X=lr(X,B),X.index=0,X.sibling=null,X}function h(X,B,Y){return X.index=Y,t?(Y=X.alternate,Y!==null?(Y=Y.index,Y<B?(X.flags|=2,B):Y):(X.flags|=2,B)):(X.flags|=1048576,B)}function M(X){return t&&X.alternate===null&&(X.flags|=2),X}function L(X,B,Y,Ee){return B===null||B.tag!==6?(B=gu(Y,X.mode,Ee),B.return=X,B):(B=u(B,Y),B.return=X,B)}function O(X,B,Y,Ee){var Xe=Y.type;return Xe===F?ge(X,B,Y.props.children,Ee,Y.key):B!==null&&(B.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===re&&fh(Xe)===B.type)?(Ee=u(B,Y.props),Ee.ref=So(X,B,Y),Ee.return=X,Ee):(Ee=Wa(Y.type,Y.key,Y.props,null,X.mode,Ee),Ee.ref=So(X,B,Y),Ee.return=X,Ee)}function te(X,B,Y,Ee){return B===null||B.tag!==4||B.stateNode.containerInfo!==Y.containerInfo||B.stateNode.implementation!==Y.implementation?(B=_u(Y,X.mode,Ee),B.return=X,B):(B=u(B,Y.children||[]),B.return=X,B)}function ge(X,B,Y,Ee,Xe){return B===null||B.tag!==7?(B=Fr(Y,X.mode,Ee,Xe),B.return=X,B):(B=u(B,Y),B.return=X,B)}function ve(X,B,Y){if(typeof B=="string"&&B!==""||typeof B=="number")return B=gu(""+B,X.mode,Y),B.return=X,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case q:return Y=Wa(B.type,B.key,B.props,null,X.mode,Y),Y.ref=So(X,null,B),Y.return=X,Y;case z:return B=_u(B,X.mode,Y),B.return=X,B;case re:var Ee=B._init;return ve(X,Ee(B._payload),Y)}if(b(B)||ie(B))return B=Fr(B,X.mode,Y,null),B.return=X,B;ya(X,B)}return null}function me(X,B,Y,Ee){var Xe=B!==null?B.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Xe!==null?null:L(X,B,""+Y,Ee);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case q:return Y.key===Xe?O(X,B,Y,Ee):null;case z:return Y.key===Xe?te(X,B,Y,Ee):null;case re:return Xe=Y._init,me(X,B,Xe(Y._payload),Ee)}if(b(Y)||ie(Y))return Xe!==null?null:ge(X,B,Y,Ee,null);ya(X,Y)}return null}function Ue(X,B,Y,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return X=X.get(Y)||null,L(B,X,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case q:return X=X.get(Ee.key===null?Y:Ee.key)||null,O(B,X,Ee,Xe);case z:return X=X.get(Ee.key===null?Y:Ee.key)||null,te(B,X,Ee,Xe);case re:var Ye=Ee._init;return Ue(X,B,Y,Ye(Ee._payload),Xe)}if(b(Ee)||ie(Ee))return X=X.get(Y)||null,ge(B,X,Ee,Xe,null);ya(B,Ee)}return null}function He(X,B,Y,Ee){for(var Xe=null,Ye=null,qe=B,nt=B=0,nn=null;qe!==null&&nt<Y.length;nt++){qe.index>nt?(nn=qe,qe=null):nn=qe.sibling;var yt=me(X,qe,Y[nt],Ee);if(yt===null){qe===null&&(qe=nn);break}t&&qe&&yt.alternate===null&&i(X,qe),B=h(yt,B,nt),Ye===null?Xe=yt:Ye.sibling=yt,Ye=yt,qe=nn}if(nt===Y.length)return o(X,qe),Ut&&Rr(X,nt),Xe;if(qe===null){for(;nt<Y.length;nt++)qe=ve(X,Y[nt],Ee),qe!==null&&(B=h(qe,B,nt),Ye===null?Xe=qe:Ye.sibling=qe,Ye=qe);return Ut&&Rr(X,nt),Xe}for(qe=l(X,qe);nt<Y.length;nt++)nn=Ue(qe,X,nt,Y[nt],Ee),nn!==null&&(t&&nn.alternate!==null&&qe.delete(nn.key===null?nt:nn.key),B=h(nn,B,nt),Ye===null?Xe=nn:Ye.sibling=nn,Ye=nn);return t&&qe.forEach(function(cr){return i(X,cr)}),Ut&&Rr(X,nt),Xe}function Ve(X,B,Y,Ee){var Xe=ie(Y);if(typeof Xe!="function")throw Error(n(150));if(Y=Xe.call(Y),Y==null)throw Error(n(151));for(var Ye=Xe=null,qe=B,nt=B=0,nn=null,yt=Y.next();qe!==null&&!yt.done;nt++,yt=Y.next()){qe.index>nt?(nn=qe,qe=null):nn=qe.sibling;var cr=me(X,qe,yt.value,Ee);if(cr===null){qe===null&&(qe=nn);break}t&&qe&&cr.alternate===null&&i(X,qe),B=h(cr,B,nt),Ye===null?Xe=cr:Ye.sibling=cr,Ye=cr,qe=nn}if(yt.done)return o(X,qe),Ut&&Rr(X,nt),Xe;if(qe===null){for(;!yt.done;nt++,yt=Y.next())yt=ve(X,yt.value,Ee),yt!==null&&(B=h(yt,B,nt),Ye===null?Xe=yt:Ye.sibling=yt,Ye=yt);return Ut&&Rr(X,nt),Xe}for(qe=l(X,qe);!yt.done;nt++,yt=Y.next())yt=Ue(qe,X,nt,yt.value,Ee),yt!==null&&(t&&yt.alternate!==null&&qe.delete(yt.key===null?nt:yt.key),B=h(yt,B,nt),Ye===null?Xe=yt:Ye.sibling=yt,Ye=yt);return t&&qe.forEach(function(Sv){return i(X,Sv)}),Ut&&Rr(X,nt),Xe}function Gt(X,B,Y,Ee){if(typeof Y=="object"&&Y!==null&&Y.type===F&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case q:e:{for(var Xe=Y.key,Ye=B;Ye!==null;){if(Ye.key===Xe){if(Xe=Y.type,Xe===F){if(Ye.tag===7){o(X,Ye.sibling),B=u(Ye,Y.props.children),B.return=X,X=B;break e}}else if(Ye.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===re&&fh(Xe)===Ye.type){o(X,Ye.sibling),B=u(Ye,Y.props),B.ref=So(X,Ye,Y),B.return=X,X=B;break e}o(X,Ye);break}else i(X,Ye);Ye=Ye.sibling}Y.type===F?(B=Fr(Y.props.children,X.mode,Ee,Y.key),B.return=X,X=B):(Ee=Wa(Y.type,Y.key,Y.props,null,X.mode,Ee),Ee.ref=So(X,B,Y),Ee.return=X,X=Ee)}return M(X);case z:e:{for(Ye=Y.key;B!==null;){if(B.key===Ye)if(B.tag===4&&B.stateNode.containerInfo===Y.containerInfo&&B.stateNode.implementation===Y.implementation){o(X,B.sibling),B=u(B,Y.children||[]),B.return=X,X=B;break e}else{o(X,B);break}else i(X,B);B=B.sibling}B=_u(Y,X.mode,Ee),B.return=X,X=B}return M(X);case re:return Ye=Y._init,Gt(X,B,Ye(Y._payload),Ee)}if(b(Y))return He(X,B,Y,Ee);if(ie(Y))return Ve(X,B,Y,Ee);ya(X,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,B!==null&&B.tag===6?(o(X,B.sibling),B=u(B,Y),B.return=X,X=B):(o(X,B),B=gu(Y,X.mode,Ee),B.return=X,X=B),M(X)):o(X,B)}return Gt}var gs=dh(!0),hh=dh(!1),Sa=Qi(null),Ma=null,_s=null,Ac=null;function Cc(){Ac=_s=Ma=null}function Rc(t){var i=Sa.current;Dt(Sa),t._currentValue=i}function Pc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function vs(t,i){Ma=t,Ac=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(En=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(Ma===null)throw Error(n(308));_s=t,Ma.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Pr=null;function bc(t){Pr===null?Pr=[t]:Pr.push(t)}function ph(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,bc(i)):(o.next=u.next,u.next=o),i.interleaved=o,Ci(t,l)}function Ci(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ci(t,o)}return u=l.interleaved,u===null?(i.next=i,bc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ci(t,o)}function Ea(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Xl(t,o)}}function gh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ta(t,i,o,l){var u=t.updateQueue;tr=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,L=u.shared.pending;if(L!==null){u.shared.pending=null;var O=L,te=O.next;O.next=null,M===null?h=te:M.next=te,M=O;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,L=ge.lastBaseUpdate,L!==M&&(L===null?ge.firstBaseUpdate=te:L.next=te,ge.lastBaseUpdate=O))}if(h!==null){var ve=u.baseState;M=0,ge=te=O=null,L=h;do{var me=L.lane,Ue=L.eventTime;if((l&me)===me){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=t,Ve=L;switch(me=i,Ue=o,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){ve=He.call(Ue,ve,me);break e}ve=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,me=typeof He=="function"?He.call(Ue,ve,me):He,me==null)break e;ve=J({},ve,me);break e;case 2:tr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=u.effects,me===null?u.effects=[L]:me.push(L))}else Ue={eventTime:Ue,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ge===null?(te=ge=Ue,O=ve):ge=ge.next=Ue,M|=me;if(L=L.next,L===null){if(L=u.shared.pending,L===null)break;me=L,L=me.next,me.next=null,u.lastBaseUpdate=me,u.shared.pending=null}}while(!0);if(ge===null&&(O=ve),u.baseState=O,u.firstBaseUpdate=te,u.lastBaseUpdate=ge,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Dr|=M,t.lanes=M,t.memoizedState=ve}}function _h(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var Mo={},di=Qi(Mo),Eo=Qi(Mo),To=Qi(Mo);function br(t){if(t===Mo)throw Error(n(174));return t}function Dc(t,i){switch(bt(To,i),bt(Eo,t),bt(di,Mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}Dt(di),bt(di,i)}function xs(){Dt(di),Dt(Eo),Dt(To)}function vh(t){br(To.current);var i=br(di.current),o=Ae(i,t.type);i!==o&&(bt(Eo,t),bt(di,o))}function Ic(t){Eo.current===t&&(Dt(di),Dt(Eo))}var Bt=Qi(0);function wa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Uc(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Aa=N.ReactCurrentDispatcher,Fc=N.ReactCurrentBatchConfig,Lr=0,zt=null,Yt=null,en=null,Ca=!1,wo=!1,Ao=0,G_=0;function dn(){throw Error(n(321))}function Oc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function kc(t,i,o,l,u,h){if(Lr=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=t===null||t.memoizedState===null?Y_:q_,t=o(l,u),wo){h=0;do{if(wo=!1,Ao=0,25<=h)throw Error(n(301));h+=1,en=Yt=null,i.updateQueue=null,Aa.current=K_,t=o(l,u)}while(wo)}if(Aa.current=ba,i=Yt!==null&&Yt.next!==null,Lr=0,en=Yt=zt=null,Ca=!1,i)throw Error(n(300));return t}function Bc(){var t=Ao!==0;return Ao=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=t:en=en.next=t,en}function Gn(){if(Yt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},en===null?zt.memoizedState=en=t:en=en.next=t}return en}function Co(t,i){return typeof i=="function"?i(t):i}function zc(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var L=M=null,O=null,te=h;do{var ge=te.lane;if((Lr&ge)===ge)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ve={lane:ge,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(L=O=ve,M=l):O=O.next=ve,zt.lanes|=ge,Dr|=ge}te=te.next}while(te!==null&&te!==h);O===null?M=l:O.next=L,Qn(l,i.memoizedState)||(En=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,zt.lanes|=h,Dr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hc(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Qn(h,i.memoizedState)||(En=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function xh(){}function yh(t,i){var o=zt,l=Gn(),u=i(),h=!Qn(l.memoizedState,u);if(h&&(l.memoizedState=u,En=!0),l=l.queue,Vc(Eh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Ro(9,Mh.bind(null,o,l,u,i),void 0,null),tn===null)throw Error(n(349));(Lr&30)!==0||Sh(o,i,u)}return u}function Sh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Mh(t,i,o,l){i.value=o,i.getSnapshot=l,Th(i)&&wh(t)}function Eh(t,i,o){return o(function(){Th(i)&&wh(t)})}function Th(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function wh(t){var i=Ci(t,1);i!==null&&ii(i,t,1,-1)}function Ah(t){var i=hi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},i.queue=t,t=t.dispatch=j_.bind(null,zt,t),[i.memoizedState,t]}function Ro(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Ch(){return Gn().memoizedState}function Ra(t,i,o,l){var u=hi();zt.flags|=t,u.memoizedState=Ro(1|i,o,void 0,l===void 0?null:l)}function Pa(t,i,o,l){var u=Gn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&Oc(l,M.deps)){u.memoizedState=Ro(i,o,h,l);return}}zt.flags|=t,u.memoizedState=Ro(1|i,o,h,l)}function Rh(t,i){return Ra(8390656,8,t,i)}function Vc(t,i){return Pa(2048,8,t,i)}function Ph(t,i){return Pa(4,2,t,i)}function bh(t,i){return Pa(4,4,t,i)}function Lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4,4,Lh.bind(null,i,t),o)}function Gc(){}function Ih(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Nh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Uh(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=o):(Qn(o,i)||(o=ns(),zt.lanes|=o,Dr|=o,t.baseState=!0),i)}function W_(t,i){var o=Tt;Tt=o!==0&&4>o?o:4,t(!0);var l=Fc.transition;Fc.transition={};try{t(!1),i()}finally{Tt=o,Fc.transition=l}}function Fh(){return Gn().memoizedState}function X_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(t))kh(i,o);else if(o=ph(t,i,o,l),o!==null){var u=vn();ii(o,t,l,u),Bh(o,i,l)}}function j_(t,i,o){var l=or(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))kh(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(u.hasEagerState=!0,u.eagerState=L,Qn(L,M)){var O=i.interleaved;O===null?(u.next=u,bc(i)):(u.next=O.next,O.next=u),i.interleaved=u;return}}catch{}finally{}o=ph(t,i,u,l),o!==null&&(u=vn(),ii(o,t,l,u),Bh(o,i,l))}}function Oh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function kh(t,i){wo=Ca=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Bh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Xl(t,o)}}var ba={readContext:Vn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},Y_={readContext:Vn,useCallback:function(t,i){return hi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:Rh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ra(4194308,4,Lh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ra(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ra(4,2,t,i)},useMemo:function(t,i){var o=hi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=hi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=X_.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=hi();return t={current:t},i.memoizedState=t},useState:Ah,useDebugValue:Gc,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Ah(!1),i=t[0];return t=W_.bind(null,t[1]),hi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=zt,u=hi();if(Ut){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),tn===null)throw Error(n(349));(Lr&30)!==0||Sh(l,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,Rh(Eh.bind(null,l,h,t),[t]),l.flags|=2048,Ro(9,Mh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=hi(),i=tn.identifierPrefix;if(Ut){var o=Ai,l=wi;o=(l&~(1<<32-ke(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ao++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=G_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},q_={readContext:Vn,useCallback:Ih,useContext:Vn,useEffect:Vc,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Nh,useReducer:zc,useRef:Ch,useState:function(){return zc(Co)},useDebugValue:Gc,useDeferredValue:function(t){var i=Gn();return Uh(i,Yt.memoizedState,t)},useTransition:function(){var t=zc(Co)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1},K_={readContext:Vn,useCallback:Ih,useContext:Vn,useEffect:Vc,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Nh,useReducer:Hc,useRef:Ch,useState:function(){return Hc(Co)},useDebugValue:Gc,useDeferredValue:function(t){var i=Gn();return Yt===null?i.memoizedState=t:Uh(i,Yt.memoizedState,t)},useTransition:function(){var t=Hc(Co)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=J({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Wc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:J({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var La={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),u=or(t),h=Ri(l,u);h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,u),i!==null&&(ii(i,t,u,l),Ea(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),u=or(t),h=Ri(l,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,u),i!==null&&(ii(i,t,u,l),Ea(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=or(t),u=Ri(o,l);u.tag=2,i!=null&&(u.callback=i),i=nr(t,u,l),i!==null&&(ii(i,t,l,o),Ea(i,t,l))}};function zh(t,i,o,l,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!po(o,l)||!po(u,h):!0}function Hh(t,i,o){var l=!1,u=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(u=Mn(i)?Ar:fn.current,l=i.contextTypes,h=(l=l!=null)?ds(t,u):Ji),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function Vh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&La.enqueueReplaceState(i,i.state,null)}function Xc(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Lc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Vn(h):(h=Mn(i)?Ar:fn.current,u.context=ds(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Wc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&La.enqueueReplaceState(u,u.state,null),Ta(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",l=i;do o+=le(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function jc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var $_=typeof WeakMap=="function"?WeakMap:Map;function Gh(t,i,o){o=Ri(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,lu=l),Yc(t,i)},o}function Wh(t,i,o){o=Ri(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Yc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Yc(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Xh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new $_;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=uv.bind(null,t,i,o),i.then(t,t))}function jh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Yh(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ri(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Z_=N.ReactCurrentOwner,En=!1;function _n(t,i,o,l){i.child=t===null?hh(i,null,o,l):gs(i,t.child,o,l)}function qh(t,i,o,l,u){o=o.render;var h=i.ref;return vs(i,u),l=kc(t,i,o,l,h,u),o=Bc(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Pi(t,i,u)):(Ut&&o&&Sc(i),i.flags|=1,_n(t,i,l,u),i.child)}function Kh(t,i,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,$h(t,i,h,l,u)):(t=Wa(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:po,o(M,l)&&t.ref===i.ref)return Pi(t,i,u)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function $h(t,i,o,l,u){if(t!==null){var h=t.memoizedProps;if(po(h,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,Pi(t,i,u)}return qc(t,i,o,l,u)}function Zh(t,i,o){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(Ms,Fn),Fn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(Ms,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,bt(Ms,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,bt(Ms,Fn),Fn|=l;return _n(t,i,u,o),i.child}function Qh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function qc(t,i,o,l,u){var h=Mn(o)?Ar:fn.current;return h=ds(i,h),vs(i,u),o=kc(t,i,o,l,h,u),l=Bc(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Pi(t,i,u)):(Ut&&l&&Sc(i),i.flags|=1,_n(t,i,o,u),i.child)}function Jh(t,i,o,l,u){if(Mn(o)){var h=!0;ma(i)}else h=!1;if(vs(i,u),i.stateNode===null)Ia(t,i),Hh(i,o,l),Xc(i,o,l,u),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Vn(te):(te=Mn(o)?Ar:fn.current,te=ds(i,te));var ge=o.getDerivedStateFromProps,ve=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==te)&&Vh(i,M,l,te),tr=!1;var me=i.memoizedState;M.state=me,Ta(i,l,M,u),O=i.memoizedState,L!==l||me!==O||Sn.current||tr?(typeof ge=="function"&&(Wc(i,o,ge,l),O=i.memoizedState),(L=tr||zh(i,o,L,l,me,O,te))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=te,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,mh(t,i),L=i.memoizedProps,te=i.type===i.elementType?L:ei(i.type,L),M.props=te,ve=i.pendingProps,me=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Vn(O):(O=Mn(o)?Ar:fn.current,O=ds(i,O));var Ue=o.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==ve||me!==O)&&Vh(i,M,l,O),tr=!1,me=i.memoizedState,M.state=me,Ta(i,l,M,u);var He=i.memoizedState;L!==ve||me!==He||Sn.current||tr?(typeof Ue=="function"&&(Wc(i,o,Ue,l),He=i.memoizedState),(te=tr||zh(i,o,te,l,me,He,O)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,He,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,He,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),M.props=l,M.state=He,M.context=O,l=te):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Kc(t,i,o,l,h,u)}function Kc(t,i,o,l,u,h){Qh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&rh(i,o,!1),Pi(t,i,h);l=i.stateNode,Z_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=gs(i,t.child,null,h),i.child=gs(i,null,L,h)):_n(t,i,L,h),i.memoizedState=l.state,u&&rh(i,o,!0),i.child}function ep(t){var i=t.stateNode;i.pendingContext?nh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(t,i.context,!1),Dc(t,i.containerInfo)}function tp(t,i,o,l,u){return ms(),wc(u),i.flags|=256,_n(t,i,o,l),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function np(t,i,o){var l=i.pendingProps,u=Bt.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(u&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),bt(Bt,u&1),t===null)return Tc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Xa(M,l,0,null),t=Fr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Zc(o),i.memoizedState=$c,t):Qc(i,M));if(u=t.memoizedState,u!==null&&(L=u.dehydrated,L!==null))return Q_(t,i,M,l,L,u,o);if(h){h=l.fallback,M=i.mode,u=t.child,L=u.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=lr(u,O),l.subtreeFlags=u.subtreeFlags&14680064),L!==null?h=lr(L,h):(h=Fr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Zc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=$c,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Qc(t,i){return i=Xa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Da(t,i,o,l){return l!==null&&wc(l),gs(i,t.child,null,o),t=Qc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Q_(t,i,o,l,u,h,M){if(o)return i.flags&256?(i.flags&=-257,l=jc(Error(n(422))),Da(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Xa({mode:"visible",children:l.children},u,0,null),h=Fr(h,u,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&gs(i,t.child,null,M),i.child.memoizedState=Zc(M),i.memoizedState=$c,h);if((i.mode&1)===0)return Da(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=jc(h,l,void 0),Da(t,i,M,l)}if(L=(M&t.childLanes)!==0,En||L){if(l=tn,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|M))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Ci(t,u),ii(l,t,u,-1))}return pu(),l=jc(Error(n(421))),Da(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=fv.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,Un=Zi(u.nextSibling),Nn=i,Ut=!0,Jn=null,t!==null&&(zn[Hn++]=wi,zn[Hn++]=Ai,zn[Hn++]=Cr,wi=t.id,Ai=t.overflow,Cr=i),i=Qc(i,l.children),i.flags|=4096,i)}function ip(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Pc(t.return,i,o)}function Jc(t,i,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function rp(t,i,o){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(_n(t,i,l.children,o),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,o,i);else if(t.tag===19)ip(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&wa(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),Jc(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&wa(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Jc(i,!0,o,null,h);break;case"together":Jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function J_(t,i,o){switch(i.tag){case 3:ep(i),ms();break;case 5:vh(i);break;case 1:Mn(i.type)&&ma(i);break;case 4:Dc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;bt(Sa,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?np(t,i,o):(bt(Bt,Bt.current&1),t=Pi(t,i,o),t!==null?t.sibling:null);bt(Bt,Bt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return rp(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Zh(t,i,o)}return Pi(t,i,o)}var sp,eu,op,ap;sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},eu=function(){},op=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,br(di.current);var h=null;switch(o){case"input":u=sn(t,u),l=sn(t,l),h=[];break;case"select":u=J({},u,{value:void 0}),l=J({},l,{value:void 0}),h=[];break;case"textarea":u=$(t,u),l=$(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}it(o,l);var M;o=null;for(te in u)if(!l.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var L=u[te];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var O=l[te];if(L=u!=null?u[te]:void 0,l.hasOwnProperty(te)&&O!==L&&(O!=null||L!=null))if(te==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(h=h||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Lt("scroll",t),h||L===O||(h=[])):(h=h||[]).push(te,O))}o&&(h=h||[]).push("style",o);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},ap=function(t,i,o,l){o!==l&&(i.flags|=4)};function Po(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function ev(t,i,o){var l=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Mn(i.type)&&pa(),hn(i),null;case 3:return l=i.stateNode,xs(),Dt(Sn),Dt(fn),Uc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(fu(Jn),Jn=null))),eu(t,i),hn(i),null;case 5:Ic(i);var u=br(To.current);if(o=i.type,t!==null&&i.stateNode!=null)op(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=br(di.current),xa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[fi]=i,l[xo]=h,t=(i.mode&1)!==0,o){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(u=0;u<go.length;u++)Lt(go[u],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":ct(l,h),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Lt("invalid",l);break;case"textarea":de(l,h),Lt("invalid",l)}it(o,h),u=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&fa(l.textContent,L,t),u=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&fa(l.textContent,L,t),u=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Lt("scroll",l)}switch(o){case"input":gt(l),wt(l,h,!0);break;case"textarea":gt(l),fe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=da)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=je(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[fi]=i,t[xo]=l,sp(t,i,!1,!1),i.stateNode=t;e:{switch(M=Mt(o,l),o){case"dialog":Lt("cancel",t),Lt("close",t),u=l;break;case"iframe":case"object":case"embed":Lt("load",t),u=l;break;case"video":case"audio":for(u=0;u<go.length;u++)Lt(go[u],t);u=l;break;case"source":Lt("error",t),u=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),u=l;break;case"details":Lt("toggle",t),u=l;break;case"input":ct(t,l),u=sn(t,l),Lt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=J({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":de(t,l),u=$(t,l),Lt("invalid",t);break;default:u=l}it(o,u),L=u;for(h in L)if(L.hasOwnProperty(h)){var O=L[h];h==="style"?Be(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&pt(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&Me(t,O):typeof O=="number"&&Me(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Lt("scroll",t):O!=null&&P(t,h,O,M))}switch(o){case"input":gt(t),wt(t,l,!1);break;case"textarea":gt(t),fe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)ap(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=br(To.current),br(di.current),xa(i)){if(l=i.stateNode,o=i.memoizedProps,l[fi]=i,(h=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:fa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return hn(i),null;case 13:if(Dt(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)uh(),ms(),i.flags|=98560,h=!1;else if(h=xa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[fi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else Jn!==null&&(fu(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?qt===0&&(qt=3):pu())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return xs(),eu(t,i),t===null&&_o(i.stateNode.containerInfo),hn(i),null;case 10:return Rc(i.type._context),hn(i),null;case 17:return Mn(i.type)&&pa(),hn(i),null;case 19:if(Dt(Bt),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Po(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=wa(t),M!==null){for(i.flags|=128,Po(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return bt(Bt,Bt.current&1|2),i.child}t=t.sibling}h.tail!==null&&we()>Es&&(i.flags|=128,l=!0,Po(h,!1),i.lanes=4194304)}else{if(!l)if(t=wa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Po(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ut)return hn(i),null}else 2*we()-h.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,l=!0,Po(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=we(),i.sibling=null,o=Bt.current,bt(Bt,l?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return hu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function tv(t,i){switch(Mc(i),i.tag){case 1:return Mn(i.type)&&pa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Dt(Sn),Dt(fn),Uc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ic(i),null;case 13:if(Dt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(Bt),null;case 4:return xs(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Na=!1,pn=!1,nv=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ss(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ht(t,i,l)}else o.current=null}function tu(t,i,o){try{o()}catch(l){Ht(t,i,l)}}var lp=!1;function iv(t,i){if(hc=ea,t=zd(),sc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,O=-1,te=0,ge=0,ve=t,me=null;t:for(;;){for(var Ue;ve!==o||u!==0&&ve.nodeType!==3||(L=M+u),ve!==h||l!==0&&ve.nodeType!==3||(O=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(Ue=ve.firstChild)!==null;)me=ve,ve=Ue;for(;;){if(ve===t)break t;if(me===o&&++te===u&&(L=M),me===h&&++ge===l&&(O=M),(Ue=ve.nextSibling)!==null)break;ve=me,me=ve.parentNode}ve=Ue}o=L===-1||O===-1?null:{start:L,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(pc={focusedElem:t,selectionRange:o},ea=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Gt=He.memoizedState,X=i.stateNode,B=X.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ei(i.type,Ve),Gt);X.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var Y=i.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Ht(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=lp,lp=!1,He}function bo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&tu(i,o,h)}u=u.next}while(u!==l)}}function Ua(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function nu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function cp(t){var i=t.alternate;i!==null&&(t.alternate=null,cp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[fi],delete i[xo],delete i[vc],delete i[B_],delete i[z_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function up(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function iu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,o),t=t.sibling;t!==null;)iu(t,i,o),t=t.sibling}function ru(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ru(t,i,o),t=t.sibling;t!==null;)ru(t,i,o),t=t.sibling}var an=null,ti=!1;function ir(t,i,o){for(o=o.child;o!==null;)dp(t,i,o),o=o.sibling}function dp(t,i,o){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Rt,o)}catch{}switch(o.tag){case 5:pn||Ss(o,i);case 6:var l=an,u=ti;an=null,ir(t,i,o),an=l,ti=u,an!==null&&(ti?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ti?(t=an,o=o.stateNode,t.nodeType===8?_c(t.parentNode,o):t.nodeType===1&&_c(t,o),ao(t)):_c(an,o.stateNode));break;case 4:l=an,u=ti,an=o.stateNode.containerInfo,ti=!0,ir(t,i,o),an=l,ti=u;break;case 0:case 11:case 14:case 15:if(!pn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&tu(o,i,M),u=u.next}while(u!==l)}ir(t,i,o);break;case 1:if(!pn&&(Ss(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Ht(o,i,L)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(pn=(l=pn)||o.memoizedState!==null,ir(t,i,o),pn=l):ir(t,i,o);break;default:ir(t,i,o)}}function hp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new nv),i.forEach(function(l){var u=dv.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function ni(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:an=L.stateNode,ti=!1;break e;case 3:an=L.stateNode.containerInfo,ti=!0;break e;case 4:an=L.stateNode.containerInfo,ti=!0;break e}L=L.return}if(an===null)throw Error(n(160));dp(h,M,u),an=null,ti=!1;var O=u.alternate;O!==null&&(O.return=null),u.return=null}catch(te){Ht(u,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,t),i=i.sibling}function pp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),pi(t),l&4){try{bo(3,t,t.return),Ua(3,t)}catch(Ve){Ht(t,t.return,Ve)}try{bo(5,t,t.return)}catch(Ve){Ht(t,t.return,Ve)}}break;case 1:ni(i,t),pi(t),l&512&&o!==null&&Ss(o,o.return);break;case 5:if(ni(i,t),pi(t),l&512&&o!==null&&Ss(o,o.return),t.flags&32){var u=t.stateNode;try{Me(u,"")}catch(Ve){Ht(t,t.return,Ve)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&ht(u,h),Mt(L,M);var te=Mt(L,h);for(M=0;M<O.length;M+=2){var ge=O[M],ve=O[M+1];ge==="style"?Be(u,ve):ge==="dangerouslySetInnerHTML"?pt(u,ve):ge==="children"?Me(u,ve):P(u,ge,ve,te)}switch(L){case"input":$e(u,h);break;case"textarea":_e(u,h);break;case"select":var me=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?T(u,!!h.multiple,Ue,!1):me!==!!h.multiple&&(h.defaultValue!=null?T(u,!!h.multiple,h.defaultValue,!0):T(u,!!h.multiple,h.multiple?[]:"",!1))}u[xo]=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 6:if(ni(i,t),pi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 3:if(ni(i,t),pi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch(Ve){Ht(t,t.return,Ve)}break;case 4:ni(i,t),pi(t);break;case 13:ni(i,t),pi(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(au=we())),l&4&&hp(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(pn=(te=pn)||ge,ni(i,t),pn=te):ni(i,t),pi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!ge&&(t.mode&1)!==0)for(ze=t,ge=t.child;ge!==null;){for(ve=ze=ge;ze!==null;){switch(me=ze,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:bo(4,me,me.return);break;case 1:Ss(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Ht(l,o,Ve)}}break;case 5:Ss(me,me.return);break;case 22:if(me.memoizedState!==null){_p(ve);continue}}Ue!==null?(Ue.return=me,ze=Ue):_p(ve)}ge=ge.sibling}e:for(ge=null,ve=t;;){if(ve.tag===5){if(ge===null){ge=ve;try{u=ve.stateNode,te?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=ve.stateNode,O=ve.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=Je("display",M))}catch(Ve){Ht(t,t.return,Ve)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=te?"":ve.memoizedProps}catch(Ve){Ht(t,t.return,Ve)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:ni(i,t),pi(t),l&4&&hp(t);break;case 21:break;default:ni(i,t),pi(t)}}function pi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(up(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Me(u,""),l.flags&=-33);var h=fp(t);ru(t,h,u);break;case 3:case 4:var M=l.stateNode.containerInfo,L=fp(t);iu(t,L,M);break;default:throw Error(n(161))}}catch(O){Ht(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function rv(t,i,o){ze=t,mp(t)}function mp(t,i,o){for(var l=(t.mode&1)!==0;ze!==null;){var u=ze,h=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||Na;if(!M){var L=u.alternate,O=L!==null&&L.memoizedState!==null||pn;L=Na;var te=pn;if(Na=M,(pn=O)&&!te)for(ze=u;ze!==null;)M=ze,O=M.child,M.tag===22&&M.memoizedState!==null?vp(u):O!==null?(O.return=M,ze=O):vp(u);for(;h!==null;)ze=h,mp(h),h=h.sibling;ze=u,Na=L,pn=te}gp(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,ze=h):gp(t)}}function gp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Ua(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&_h(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}_h(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var ge=te.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&ao(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&nu(i)}catch(me){Ht(i,i.return,me)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function _p(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function vp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ua(4,i)}catch(O){Ht(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(O){Ht(i,u,O)}}var h=i.return;try{nu(i)}catch(O){Ht(i,h,O)}break;case 5:var M=i.return;try{nu(i)}catch(O){Ht(i,M,O)}}}catch(O){Ht(i,i.return,O)}if(i===t){ze=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ze=L;break}ze=i.return}}var sv=Math.ceil,Fa=N.ReactCurrentDispatcher,su=N.ReactCurrentOwner,Wn=N.ReactCurrentBatchConfig,_t=0,tn=null,Wt=null,ln=0,Fn=0,Ms=Qi(0),qt=0,Lo=null,Dr=0,Oa=0,ou=0,Do=null,Tn=null,au=0,Es=1/0,bi=null,ka=!1,lu=null,rr=null,Ba=!1,sr=null,za=0,Io=0,cu=null,Ha=-1,Va=0;function vn(){return(_t&6)!==0?we():Ha!==-1?Ha:Ha=we()}function or(t){return(t.mode&1)===0?1:(_t&2)!==0&&ln!==0?ln&-ln:V_.transition!==null?(Va===0&&(Va=ns()),Va):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:yd(t.type)),t)}function ii(t,i,o,l){if(50<Io)throw Io=0,cu=null,Error(n(185));Wi(t,o,l),((_t&2)===0||t!==tn)&&(t===tn&&((_t&2)===0&&(Oa|=o),qt===4&&ar(t,ln)),wn(t,l),o===1&&_t===0&&(i.mode&1)===0&&(Es=we()+500,ga&&er()))}function wn(t,i){var o=t.callbackNode;to(t,i);var l=Pt(t,t===tn?ln:0);if(l===0)o!==null&&W(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&W(o),i===1)t.tag===0?H_(yp.bind(null,t)):sh(yp.bind(null,t)),O_(function(){(_t&6)===0&&er()}),o=null;else{switch(dd(l)){case 1:o=Ke;break;case 4:o=Ze;break;case 16:o=We;break;case 536870912:o=At;break;default:o=We}o=Rp(o,xp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function xp(t,i){if(Ha=-1,Va=0,(_t&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ts()&&t.callbackNode!==o)return null;var l=Pt(t,t===tn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ga(t,l);else{i=l;var u=_t;_t|=2;var h=Mp();(tn!==t||ln!==i)&&(bi=null,Es=we()+500,Nr(t,i));do try{lv();break}catch(L){Sp(t,L)}while(!0);Cc(),Fa.current=h,_t=u,Wt!==null?i=0:(tn=null,ln=0,i=qt)}if(i!==0){if(i===2&&(u=un(t),u!==0&&(l=u,i=uu(t,u))),i===1)throw o=Lo,Nr(t,0),ar(t,l),wn(t,we()),o;if(i===6)ar(t,l);else{if(u=t.current.alternate,(l&30)===0&&!ov(u)&&(i=Ga(t,l),i===2&&(h=un(t),h!==0&&(l=h,i=uu(t,h))),i===1))throw o=Lo,Nr(t,0),ar(t,l),wn(t,we()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,Tn,bi);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=au+500-we(),10<i)){if(Pt(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=gc(Ur.bind(null,t,Tn,bi),i);break}Ur(t,Tn,bi);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-ke(l);h=1<<M,M=i[M],M>u&&(u=M),l&=~h}if(l=u,l=we()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*sv(l/1960))-l,10<l){t.timeoutHandle=gc(Ur.bind(null,t,Tn,bi),l);break}Ur(t,Tn,bi);break;case 5:Ur(t,Tn,bi);break;default:throw Error(n(329))}}}return wn(t,we()),t.callbackNode===o?xp.bind(null,t):null}function uu(t,i){var o=Do;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Ga(t,i),t!==2&&(i=Tn,Tn=o,i!==null&&fu(i)),t}function fu(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function ov(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!Qn(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~ou,i&=~Oa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ke(i),l=1<<o;t[o]=-1,i&=~l}}function yp(t){if((_t&6)!==0)throw Error(n(327));Ts();var i=Pt(t,0);if((i&1)===0)return wn(t,we()),null;var o=Ga(t,i);if(t.tag!==0&&o===2){var l=un(t);l!==0&&(i=l,o=uu(t,l))}if(o===1)throw o=Lo,Nr(t,0),ar(t,i),wn(t,we()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,Tn,bi),wn(t,we()),null}function du(t,i){var o=_t;_t|=1;try{return t(i)}finally{_t=o,_t===0&&(Es=we()+500,ga&&er())}}function Ir(t){sr!==null&&sr.tag===0&&(_t&6)===0&&Ts();var i=_t;_t|=1;var o=Wn.transition,l=Tt;try{if(Wn.transition=null,Tt=1,t)return t()}finally{Tt=l,Wn.transition=o,_t=i,(_t&6)===0&&er()}}function hu(){Fn=Ms.current,Dt(Ms)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,F_(o)),Wt!==null)for(o=Wt.return;o!==null;){var l=o;switch(Mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&pa();break;case 3:xs(),Dt(Sn),Dt(fn),Uc();break;case 5:Ic(l);break;case 4:xs();break;case 13:Dt(Bt);break;case 19:Dt(Bt);break;case 10:Rc(l.type._context);break;case 22:case 23:hu()}o=o.return}if(tn=t,Wt=t=lr(t.current,null),ln=Fn=i,qt=0,Lo=null,ou=Oa=Dr=0,Tn=Do=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=u,l.next=M}o.pending=l}Pr=null}return t}function Sp(t,i){do{var o=Wt;try{if(Cc(),Aa.current=ba,Ca){for(var l=zt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ca=!1}if(Lr=0,en=Yt=zt=null,wo=!1,Ao=0,su.current=null,o===null||o.return===null){qt=1,Lo=i,Wt=null;break}e:{var h=t,M=o.return,L=o,O=i;if(i=ln,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,ge=L,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=jh(M);if(Ue!==null){Ue.flags&=-257,Yh(Ue,M,L,h,i),Ue.mode&1&&Xh(h,te,i),i=Ue,O=te;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else He.add(O);break e}else{if((i&1)===0){Xh(h,te,i),pu();break e}O=Error(n(426))}}else if(Ut&&L.mode&1){var Gt=jh(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Yh(Gt,M,L,h,i),wc(ys(O,L));break e}}h=O=ys(O,L),qt!==4&&(qt=2),Do===null?Do=[h]:Do.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var X=Gh(h,O,i);gh(h,X);break e;case 1:L=O;var B=h.type,Y=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(rr===null||!rr.has(Y)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Wh(h,L,i);gh(h,Ee);break e}}h=h.return}while(h!==null)}Tp(o)}catch(Xe){i=Xe,Wt===o&&o!==null&&(Wt=o=o.return);continue}break}while(!0)}function Mp(){var t=Fa.current;return Fa.current=ba,t===null?ba:t}function pu(){(qt===0||qt===3||qt===2)&&(qt=4),tn===null||(Dr&268435455)===0&&(Oa&268435455)===0||ar(tn,ln)}function Ga(t,i){var o=_t;_t|=2;var l=Mp();(tn!==t||ln!==i)&&(bi=null,Nr(t,i));do try{av();break}catch(u){Sp(t,u)}while(!0);if(Cc(),_t=o,Fa.current=l,Wt!==null)throw Error(n(261));return tn=null,ln=0,qt}function av(){for(;Wt!==null;)Ep(Wt)}function lv(){for(;Wt!==null&&!Te();)Ep(Wt)}function Ep(t){var i=Cp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?Tp(t):Wt=i,su.current=null}function Tp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=ev(o,i,Fn),o!==null){Wt=o;return}}else{if(o=tv(o,i),o!==null){o.flags&=32767,Wt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);qt===0&&(qt=5)}function Ur(t,i,o){var l=Tt,u=Wn.transition;try{Wn.transition=null,Tt=1,cv(t,i,o,l)}finally{Wn.transition=u,Tt=l}return null}function cv(t,i,o,l){do Ts();while(sr!==null);if((_t&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Gg(t,h),t===tn&&(Wt=tn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ba||(Ba=!0,Rp(We,function(){return Ts(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Wn.transition,Wn.transition=null;var M=Tt;Tt=1;var L=_t;_t|=4,su.current=null,iv(t,o),pp(o,t),P_(pc),ea=!!hc,pc=hc=null,t.current=o,rv(o),Ie(),_t=L,Tt=M,Wn.transition=h}else t.current=o;if(Ba&&(Ba=!1,sr=t,za=u),h=t.pendingLanes,h===0&&(rr=null),vt(o.stateNode),wn(t,we()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(ka)throw ka=!1,t=lu,lu=null,t;return(za&1)!==0&&t.tag!==0&&Ts(),h=t.pendingLanes,(h&1)!==0?t===cu?Io++:(Io=0,cu=t):Io=0,er(),null}function Ts(){if(sr!==null){var t=dd(za),i=Wn.transition,o=Tt;try{if(Wn.transition=null,Tt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,za=0,(_t&6)!==0)throw Error(n(331));var u=_t;for(_t|=4,ze=t.current;ze!==null;){var h=ze,M=h.child;if((ze.flags&16)!==0){var L=h.deletions;if(L!==null){for(var O=0;O<L.length;O++){var te=L[O];for(ze=te;ze!==null;){var ge=ze;switch(ge.tag){case 0:case 11:case 15:bo(8,ge,h)}var ve=ge.child;if(ve!==null)ve.return=ge,ze=ve;else for(;ze!==null;){ge=ze;var me=ge.sibling,Ue=ge.return;if(cp(ge),ge===te){ze=null;break}if(me!==null){me.return=Ue,ze=me;break}ze=Ue}}}var He=h.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ze=M;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:bo(9,h,h.return)}var X=h.sibling;if(X!==null){X.return=h.return,ze=X;break e}ze=h.return}}var B=t.current;for(ze=B;ze!==null;){M=ze;var Y=M.child;if((M.subtreeFlags&2064)!==0&&Y!==null)Y.return=M,ze=Y;else e:for(M=B;ze!==null;){if(L=ze,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ua(9,L)}}catch(Xe){Ht(L,L.return,Xe)}if(L===M){ze=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,ze=Ee;break e}ze=L.return}}if(_t=u,er(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Rt,t)}catch{}l=!0}return l}finally{Tt=o,Wn.transition=i}}return!1}function wp(t,i,o){i=ys(o,i),i=Gh(t,i,1),t=nr(t,i,1),i=vn(),t!==null&&(Wi(t,1,i),wn(t,i))}function Ht(t,i,o){if(t.tag===3)wp(t,t,o);else for(;i!==null;){if(i.tag===3){wp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=ys(o,t),t=Wh(i,t,1),i=nr(i,t,1),t=vn(),i!==null&&(Wi(i,1,t),wn(i,t));break}}i=i.return}}function uv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,tn===t&&(ln&o)===o&&(qt===4||qt===3&&(ln&130023424)===ln&&500>we()-au?Nr(t,0):ou|=o),wn(t,i)}function Ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var o=vn();t=Ci(t,i),t!==null&&(Wi(t,i,o),wn(t,o))}function fv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(t,o)}function dv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ap(t,o)}var Cp;Cp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Sn.current)En=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return En=!1,J_(t,i,o);En=(t.flags&131072)!==0}else En=!1,Ut&&(i.flags&1048576)!==0&&oh(i,va,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ia(t,i),t=i.pendingProps;var u=ds(i,fn.current);vs(i,o),u=kc(null,i,l,t,u,o);var h=Bc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Mn(l)?(h=!0,ma(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Lc(i),u.updater=La,i.stateNode=u,u._reactInternals=i,Xc(i,l,t,o),i=Kc(null,i,l,!0,h,o)):(i.tag=0,Ut&&h&&Sc(i),_n(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ia(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=pv(l),t=ei(l,t),u){case 0:i=qc(null,i,l,t,o);break e;case 1:i=Jh(null,i,l,t,o);break e;case 11:i=qh(null,i,l,t,o);break e;case 14:i=Kh(null,i,l,ei(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),qc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),Jh(t,i,l,u,o);case 3:e:{if(ep(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,mh(t,i),Ta(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=ys(Error(n(423)),i),i=tp(t,i,l,o,u);break e}else if(l!==u){u=ys(Error(n(424)),i),i=tp(t,i,l,o,u);break e}else for(Un=Zi(i.stateNode.containerInfo.firstChild),Nn=i,Ut=!0,Jn=null,o=hh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),l===u){i=Pi(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return vh(i),t===null&&Tc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,M=u.children,mc(l,u)?M=null:h!==null&&mc(l,h)&&(i.flags|=32),Qh(t,i),_n(t,i,M,o),i.child;case 6:return t===null&&Tc(i),null;case 13:return np(t,i,o);case 4:return Dc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),qh(t,i,l,u,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,M=u.value,bt(Sa,l._currentValue),l._currentValue=M,h!==null)if(Qn(h.value,M)){if(h.children===u.children&&!Sn.current){i=Pi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ri(-1,o&-o),O.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var ge=te.pending;ge===null?O.next=O:(O.next=ge.next,ge.next=O),te.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),Pc(h.return,o,i),L.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Pc(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}_n(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,vs(i,o),u=Vn(u),l=l(u),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,u=ei(l,i.pendingProps),u=ei(l.type,u),Kh(t,i,l,u,o);case 15:return $h(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),Ia(t,i),i.tag=1,Mn(l)?(t=!0,ma(i)):t=!1,vs(i,o),Hh(i,l,u),Xc(i,l,u,o),Kc(null,i,l,!0,t,o);case 19:return rp(t,i,o);case 22:return Zh(t,i,o)}throw Error(n(156,i.tag))};function Rp(t,i){return ee(t,i)}function hv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,o,l){return new hv(t,i,o,l)}function mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pv(t){if(typeof t=="function")return mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===pe)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=Xn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Wa(t,i,o,l,u,h){var M=2;if(l=t,typeof t=="function")mu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Fr(o.children,u,h,i);case K:M=8,u|=8;break;case ye:return t=Xn(12,o,i,u|2),t.elementType=ye,t.lanes=h,t;case ne:return t=Xn(13,o,i,u),t.elementType=ne,t.lanes=h,t;case ue:return t=Xn(19,o,i,u),t.elementType=ue,t.lanes=h,t;case V:return Xa(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case R:M=9;break e;case oe:M=11;break e;case pe:M=14;break e;case re:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,o,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Fr(t,i,o,l){return t=Xn(7,t,l,i),t.lanes=o,t}function Xa(t,i,o,l){return t=Xn(22,t,l,i),t.elementType=V,t.lanes=o,t.stateNode={isHidden:!1},t}function gu(t,i,o){return t=Xn(6,t,null,i),t.lanes=o,t}function _u(t,i,o){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function mv(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function vu(t,i,o,l,u,h,M,L,O){return t=new mv(t,i,o,L,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(h),t}function gv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Pp(t){if(!t)return Ji;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Mn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Mn(o))return ih(t,o,i)}return i}function bp(t,i,o,l,u,h,M,L,O){return t=vu(o,l,!0,t,u,h,M,L,O),t.context=Pp(null),o=t.current,l=vn(),u=or(o),h=Ri(l,u),h.callback=i??null,nr(o,h,u),t.current.lanes=u,Wi(t,u,l),wn(t,l),t}function ja(t,i,o,l){var u=i.current,h=vn(),M=or(u);return o=Pp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ri(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(u,i,M),t!==null&&(ii(t,u,M,h),Ea(t,u,M)),M}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function xu(t,i){Lp(t,i),(t=t.alternate)&&Lp(t,i)}function _v(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function yu(t){this._internalRoot=t}qa.prototype.render=yu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},qa.prototype.unmount=yu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){ja(null,t,null,null)}),i[Ei]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=md();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&vd(t)}};function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function vv(t,i,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var te=Ya(M);h.call(te)}}var M=bp(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=M,t[Ei]=M.current,_o(t.nodeType===8?t.parentNode:t),Ir(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var L=l;l=function(){var te=Ya(O);L.call(te)}}var O=vu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=O,t[Ei]=O.current,_o(t.nodeType===8?t.parentNode:t),Ir(function(){ja(i,O,o,l)}),O}function $a(t,i,o,l,u){var h=o._reactRootContainer;if(h){var M=h;if(typeof u=="function"){var L=u;u=function(){var O=Ya(M);L.call(O)}}ja(i,M,t,u)}else M=vv(o,i,t,u,l);return Ya(M)}hd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Mi(i.pendingLanes);o!==0&&(Xl(i,o|1),wn(i,we()),(_t&6)===0&&(Es=we()+500,er()))}break;case 13:Ir(function(){var l=Ci(t,1);if(l!==null){var u=vn();ii(l,t,1,u)}}),xu(t,1)}},jl=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var o=vn();ii(i,t,134217728,o)}xu(t,134217728)}},pd=function(t){if(t.tag===13){var i=or(t),o=Ci(t,i);if(o!==null){var l=vn();ii(o,t,i,l)}xu(t,i)}},md=function(){return Tt},gd=function(t,i){var o=Tt;try{return Tt=t,i()}finally{Tt=o}},ae=function(t,i,o){switch(i){case"input":if($e(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=ha(l);if(!u)throw Error(n(90));ut(l),$e(l,u)}}}break;case"textarea":_e(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},on=du,mt=Ir;var xv={usingClientEntryPoint:!1,Events:[yo,us,ha,dt,kt,du]},No={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yv={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G(t),t===null?null:t.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Rt=Za.inject(yv),Nt=Za}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xv,An.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(i))throw Error(n(200));return gv(t,i,null,o)},An.createRoot=function(t,i){if(!Su(t))throw Error(n(299));var o=!1,l="",u=Dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=vu(t,1,!1,null,null,o,!1,l,u),t[Ei]=i.current,_o(t.nodeType===8?t.parentNode:t),new yu(i)},An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=G(i),t=t===null?null:t.stateNode,t},An.flushSync=function(t){return Ir(t)},An.hydrate=function(t,i,o){if(!Ka(i))throw Error(n(200));return $a(null,t,i,!0,o)},An.hydrateRoot=function(t,i,o){if(!Su(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",M=Dp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=bp(i,null,t,1,o??null,u,!1,h,M),t[Ei]=i.current,_o(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new qa(i)},An.render=function(t,i,o){if(!Ka(i))throw Error(n(200));return $a(null,t,i,!1,o)},An.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){$a(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},An.unstable_batchedUpdates=du,An.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ka(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return $a(t,i,o,!1,l)},An.version="18.3.1-next-f1338f8080-20240426",An}var Vp;function Lv(){if(Vp)return Tu.exports;Vp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tu.exports=bv(),Tu.exports}var Gp;function Dv(){if(Gp)return Ja;Gp=1;var s=Lv();return Ja.createRoot=s.createRoot,Ja.hydrateRoot=s.hydrateRoot,Ja}var Iv=Dv();class og extends _r.Component{constructor(){super(...arguments);Np(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,r){console.error("App render error:",n,r)}render(){return this.state.error?ce.jsxs("div",{className:"error-screen",children:[ce.jsx("h1",{children:"Something went wrong"}),ce.jsx("p",{children:this.state.error.message}),ce.jsx("pre",{children:this.state.error.stack})]}):this.props.children}}const Wp=s=>{let e;const n=new Set,r=(m,g)=>{const y=typeof m=="function"?m(e):m;if(!Object.is(y,e)){const x=e;e=g??(typeof y!="object"||y===null)?y:Object.assign({},e,y),n.forEach(S=>S(e,x))}},a=()=>e,d={setState:r,getState:a,getInitialState:()=>p,subscribe:m=>(n.add(m),()=>n.delete(m))},p=e=s(r,a,d);return d},Nv=(s=>s?Wp(s):Wp),Uv=s=>s;function Fv(s,e=Uv){const n=Qa.useSyncExternalStore(s.subscribe,Qa.useCallback(()=>e(s.getState()),[s,e]),Qa.useCallback(()=>e(s.getInitialState()),[s,e]));return Qa.useDebugValue(n),n}const Xp=s=>{const e=Nv(s),n=r=>Fv(e,r);return Object.assign(n,e),n},Ov=(s=>s?Xp(s):Xp),Zf=[{id:"post",name:"Post",description:"1 × 2 × 1 vertical post",size:[1,2,1],color:"#C4A882",materialLabel:"4×4 lumber"},{id:"beam",name:"Beam",description:"2 × 1 × 1 horizontal beam",size:[2,1,1],color:"#B8956F",materialLabel:"2×6 lumber"},{id:"panel",name:"Panel",description:"2 × 2 × 0.5 roof panel",size:[2,2,.5],color:"#D4C4A8",materialLabel:"Plywood sheet"},{id:"block",name:"Block",description:"2 × 2 × 2 large block",size:[2,2,2],color:"#A08060",materialLabel:"Timber block"}];function Dl(s){return Zf.find(e=>e.id===s)}function kv(s){const[e,n,r]=s;return`${e} × ${n} × ${r} units`}function Bv(s){const e=[],[n,,r]=s.size,a=Math.ceil(n),c=Math.ceil(r);for(let f=s.gridX;f<s.gridX+a;f++)for(let d=s.gridZ;d<s.gridZ+c;d++)e.push({x:f,z:d});return e}function zv(s){const e=new Set;for(const n of s)for(const r of Bv(n))e.add(`${r.x},${r.z}`);return e}function ag(s,e,n,r,a,c){const f=Dl(s);if(!f)return!1;const[d,p,m]=f.size,g=Math.ceil(d),y=Math.ceil(m);if(e<0||n<0||e+g>r.width||n+y>r.depth||p>r.height)return!1;const x=zv(a);for(let S=e;S<e+g;S++)for(let w=n;w<n+y;w++)if(x.has(`${S},${w}`))return!1;return!0}function Hv(s){const e=new Map;for(const n of s)e.set(n.typeId,(e.get(n.typeId)??0)+1);return Zf.filter(n=>e.has(n.id)).map(n=>({typeId:n.id,name:n.name,dimensions:kv(n.size),count:e.get(n.id)??0,materialLabel:n.materialLabel}))}const Ft=Ov((s,e)=>({boundingBox:{width:10,depth:10,height:6},primitives:[],activeTool:"select",activePrimitiveType:null,selectedPrimitiveId:null,hoverGrid:null,placementValid:!1,setBoundingBox:n=>s(r=>({boundingBox:{...r.boundingBox,...n}})),setActiveTool:n=>s({activeTool:n,activePrimitiveType:n==="place"?e().activePrimitiveType:null,selectedPrimitiveId:n==="place"?null:e().selectedPrimitiveId}),setActivePrimitiveType:n=>s({activePrimitiveType:n,activeTool:n?"place":"select",selectedPrimitiveId:null}),setHoverGrid:(n,r)=>s(a=>{var f,d;return((f=a.hoverGrid)==null?void 0:f.x)===(n==null?void 0:n.x)&&((d=a.hoverGrid)==null?void 0:d.z)===(n==null?void 0:n.z)&&a.placementValid===r?a:{hoverGrid:n,placementValid:r}}),selectPrimitive:n=>s({selectedPrimitiveId:n,activeTool:"select",activePrimitiveType:null}),placePrimitive:(n,r)=>{const{activePrimitiveType:a,boundingBox:c,primitives:f}=e();if(!a||!ag(a,n,r,c,f))return;const d=Dl(a);if(!d)return;const p={id:crypto.randomUUID(),typeId:a,gridX:n,gridZ:r,size:d.size};s({primitives:[...f,p]})},removeSelected:()=>{const{selectedPrimitiveId:n,primitives:r}=e();n&&s({primitives:r.filter(a=>a.id!==n),selectedPrimitiveId:null})},clearPrimitives:()=>s({primitives:[],selectedPrimitiveId:null})}));function Vv(){const s=Ft(e=>e.primitives);return _r.useMemo(()=>Hv(s),[s])}function jp(s,e,n){const[r,a,c]=n;return{x:s+r/2,y:a/2,z:e+c/2}}function Yp({label:s,description:e,active:n,onClick:r,icon:a,previewColor:c}){return ce.jsxs("button",{type:"button",className:`tool-item${n?" tool-item--active":""}`,onClick:r,children:[c?ce.jsx("span",{className:"tool-item__preview",style:{background:c}}):a&&ce.jsx("span",{className:"tool-item__icon",children:a}),ce.jsxs("span",{className:"tool-item__text",children:[ce.jsx("span",{className:"tool-item__label",children:s}),e&&ce.jsx("span",{className:"tool-item__description",children:e})]})]})}function Gv(){return ce.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[ce.jsx("path",{d:"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}),ce.jsx("path",{d:"M13 13l6 6"})]})}function Wv(){return ce.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[ce.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),ce.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),ce.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})}function Xv(){const s=Ft(m=>m.boundingBox),e=Ft(m=>m.activeTool),n=Ft(m=>m.activePrimitiveType),r=Ft(m=>m.selectedPrimitiveId),a=Ft(m=>m.setBoundingBox),c=Ft(m=>m.setActiveTool),f=Ft(m=>m.setActivePrimitiveType),d=Ft(m=>m.removeSelected),p=Ft(m=>m.clearPrimitives);return ce.jsxs("aside",{className:"sidebar sidebar--left",children:[ce.jsxs("header",{className:"sidebar__header",children:[ce.jsx("h1",{className:"sidebar__title",children:"Pavilion"}),ce.jsx("p",{className:"sidebar__subtitle",children:"Configurator"})]}),ce.jsxs("section",{className:"sidebar__section",children:[ce.jsx("h2",{className:"sidebar__section-title",children:"Tools"}),ce.jsx(Yp,{label:"Select",description:"Click to select primitives",active:e==="select",onClick:()=>c("select"),icon:ce.jsx(Gv,{})})]}),ce.jsxs("section",{className:"sidebar__section",children:[ce.jsx("h2",{className:"sidebar__section-title",children:"Site setup"}),ce.jsxs("div",{className:"bounding-box-controls",children:[ce.jsxs("div",{className:"bounding-box-controls__header",children:[ce.jsx(Wv,{}),ce.jsx("span",{children:"Bounding box"})]}),ce.jsxs("div",{className:"input-row",children:[ce.jsxs("label",{children:["Width",ce.jsx("input",{type:"number",min:4,max:30,value:s.width,onChange:m=>a({width:Math.max(4,Number(m.target.value))})})]}),ce.jsxs("label",{children:["Depth",ce.jsx("input",{type:"number",min:4,max:30,value:s.depth,onChange:m=>a({depth:Math.max(4,Number(m.target.value))})})]}),ce.jsxs("label",{children:["Height",ce.jsx("input",{type:"number",min:2,max:20,value:s.height,onChange:m=>a({height:Math.max(2,Number(m.target.value))})})]})]})]})]}),ce.jsxs("section",{className:"sidebar__section",children:[ce.jsx("h2",{className:"sidebar__section-title",children:"Primitives"}),ce.jsx("p",{className:"sidebar__hint",children:"Select a primitive, then click the grid to place it."}),ce.jsx("div",{className:"tool-list",children:Zf.map(m=>ce.jsx(Yp,{label:m.name,description:m.description,active:n===m.id,previewColor:m.color,onClick:()=>f(n===m.id?null:m.id)},m.id))})]}),ce.jsxs("section",{className:"sidebar__section sidebar__section--footer",children:[r&&ce.jsx("button",{type:"button",className:"btn btn--secondary",onClick:d,children:"Remove selected"}),ce.jsx("button",{type:"button",className:"btn btn--ghost",onClick:p,children:"Clear all"})]})]})}function qp(){return ce.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[ce.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),ce.jsx("polyline",{points:"7 10 12 15 17 10"}),ce.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]})}function Kp(){return ce.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[ce.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),ce.jsx("polyline",{points:"15 3 21 3 21 9"}),ce.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})}function jv(){const s=Ft(a=>a.boundingBox),e=Ft(a=>a.primitives),n=Vv(),r=e.length;return ce.jsxs("aside",{className:"sidebar sidebar--right",children:[ce.jsxs("header",{className:"sidebar__header",children:[ce.jsx("h2",{className:"sidebar__heading",children:"Materials"}),ce.jsx("p",{className:"sidebar__subtitle",children:"Live bill of materials"})]}),ce.jsxs("section",{className:"sidebar__section",children:[ce.jsxs("div",{className:"stat-card",children:[ce.jsx("span",{className:"stat-card__label",children:"Site dimensions"}),ce.jsxs("span",{className:"stat-card__value",children:[s.width," × ",s.depth," × ",s.height]}),ce.jsx("span",{className:"stat-card__meta",children:"W × D × H (units)"})]}),ce.jsxs("div",{className:"stat-card",children:[ce.jsx("span",{className:"stat-card__label",children:"Total pieces"}),ce.jsx("span",{className:"stat-card__value",children:r})]})]}),ce.jsxs("section",{className:"sidebar__section",children:[ce.jsx("h3",{className:"sidebar__section-title",children:"Material list"}),n.length===0?ce.jsx("p",{className:"sidebar__empty",children:"Place primitives in the canvas to see required materials."}):ce.jsx("div",{className:"material-list",children:n.map(a=>ce.jsxs("div",{className:"material-card",children:[ce.jsxs("div",{className:"material-card__header",children:[ce.jsx("span",{className:"material-card__name",children:a.name}),ce.jsxs("span",{className:"material-card__count",children:["×",a.count]})]}),ce.jsx("p",{className:"material-card__dimensions",children:a.dimensions}),ce.jsx("p",{className:"material-card__material",children:a.materialLabel})]},a.typeId))})]}),ce.jsxs("section",{className:"sidebar__section",children:[ce.jsx("h3",{className:"sidebar__section-title",children:"Downloads"}),ce.jsxs("div",{className:"action-list",children:[ce.jsxs("button",{type:"button",className:"action-item",disabled:!0,children:[ce.jsx(qp,{}),ce.jsx("span",{children:"Instruction file"}),ce.jsx("span",{className:"action-item__badge",children:"Soon"})]}),ce.jsxs("button",{type:"button",className:"action-item",disabled:!0,children:[ce.jsx(qp,{}),ce.jsx("span",{children:"Cut list & dimensions"}),ce.jsx("span",{className:"action-item__badge",children:"Soon"})]})]})]}),ce.jsxs("section",{className:"sidebar__section",children:[ce.jsx("h3",{className:"sidebar__section-title",children:"Purchase links"}),ce.jsxs("div",{className:"action-list",children:[ce.jsxs("button",{type:"button",className:"action-item",disabled:!0,children:[ce.jsx(Kp,{}),ce.jsx("span",{children:"Browse lumber"}),ce.jsx("span",{className:"action-item__badge",children:"Soon"})]}),ce.jsxs("button",{type:"button",className:"action-item",disabled:!0,children:[ce.jsx(Kp,{}),ce.jsx("span",{children:"Hardware & fasteners"}),ce.jsx("span",{className:"action-item__badge",children:"Soon"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="169",Hs={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yv=0,$p=1,qv=2,lg=1,Kv=2,Fi=3,Sr=0,Pn=1,ki=2,vr=0,Vs=1,Zp=2,Qp=3,Jp=4,$v=5,Wr=100,Zv=101,Qv=102,Jv=103,e0=104,t0=200,n0=201,i0=202,r0=203,af=204,lf=205,s0=206,o0=207,a0=208,l0=209,c0=210,u0=211,f0=212,d0=213,h0=214,cf=0,uf=1,ff=2,Xs=3,df=4,hf=5,pf=6,mf=7,cg=0,p0=1,m0=2,xr=0,g0=1,_0=2,v0=3,x0=4,y0=5,S0=6,M0=7,ug=300,js=301,Ys=302,gf=303,_f=304,zl=306,vf=1e3,jr=1001,xf=1002,qn=1003,E0=1004,el=1005,ai=1006,Cu=1007,Yr=1008,Hi=1009,fg=1010,dg=1011,Wo=1012,Jf=1013,Kr=1014,Bi=1015,Xo=1016,ed=1017,td=1018,qs=1020,hg=35902,pg=1021,mg=1022,ci=1023,gg=1024,_g=1025,Gs=1026,Ks=1027,vg=1028,nd=1029,xg=1030,id=1031,rd=1033,Tl=33776,wl=33777,Al=33778,Cl=33779,yf=35840,Sf=35841,Mf=35842,Ef=35843,Tf=36196,wf=37492,Af=37496,Cf=37808,Rf=37809,Pf=37810,bf=37811,Lf=37812,Df=37813,If=37814,Nf=37815,Uf=37816,Ff=37817,Of=37818,kf=37819,Bf=37820,zf=37821,Rl=36492,Hf=36494,Vf=36495,yg=36283,Gf=36284,Wf=36285,Xf=36286,T0=3200,w0=3201,Sg=0,A0=1,gr="",mi="srgb",Er="srgb-linear",sd="display-p3",Hl="display-p3-linear",Il="linear",It="srgb",Nl="rec709",Ul="p3",ws=7680,em=519,C0=512,R0=513,P0=514,Mg=515,b0=516,L0=517,D0=518,I0=519,tm=35044,nm="300 es",zi=2e3,Fl=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,f=a.length;c<f;c++)a[c].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pl=Math.PI/180,jf=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function yn(s,e,n){return Math.max(e,Math.min(n,s))}function N0(s,e){return(s%e+e)%e}function Ru(s,e,n){return(1-n)*s+n*e}function Fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const U0={DEG2RAD:Pl};class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*a+e.x,this.y=c*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,c,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,p,m)}set(e,n,r,a,c,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],y=r[7],x=r[2],S=r[5],w=r[8],A=a[0],_=a[3],v=a[6],U=a[1],P=a[4],N=a[7],q=a[2],z=a[5],F=a[8];return c[0]=f*A+d*U+p*q,c[3]=f*_+d*P+p*z,c[6]=f*v+d*N+p*F,c[1]=m*A+g*U+y*q,c[4]=m*_+g*P+y*z,c[7]=m*v+g*N+y*F,c[2]=x*A+S*U+w*q,c[5]=x*_+S*P+w*z,c[8]=x*v+S*N+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-r*c*g+r*d*p+a*c*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],y=g*f-d*m,x=d*p-g*c,S=m*c-f*p,w=n*y+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(a*m-g*r)*A,e[2]=(d*r-a*f)*A,e[3]=x*A,e[4]=(g*n-a*p)*A,e[5]=(a*c-d*n)*A,e[6]=S*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Pu.makeScale(e,n)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new ot;function Eg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function F0(){const s=Ol("canvas");return s.style.display="block",s}const im={};function bl(s){s in im||(im[s]=!0,console.warn(s))}function O0(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function k0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function B0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rm=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sm=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[Er]:{transfer:Il,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[mi]:{transfer:It,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Hl]:{transfer:Il,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(sm),fromReference:s=>s.applyMatrix3(rm)},[sd]:{transfer:It,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(sm),fromReference:s=>s.applyMatrix3(rm).convertLinearToSRGB()}},z0=new Set([Er,Hl]),Et={enabled:!0,_workingColorSpace:Er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!z0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Oo[e].toReference,a=Oo[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Oo[s].primaries},getTransfer:function(s){return s===gr?Il:Oo[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Oo[e].luminanceCoefficients)}};function Ws(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class H0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Ol("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let f=0;f<c.length;f++)c[f]=Ws(c[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ws(n[r]/255)*255):n[r]=Ws(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V0=0;class Tg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?c.push(Lu(a[f].image)):c.push(Lu(a[f]))}else c=Lu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Lu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?H0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G0=0;class bn extends Qr{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=jr,a=jr,c=ai,f=Yr,d=ci,p=Hi,m=bn.DEFAULT_ANISOTROPY,g=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=jo(),this.name="",this.source=new Tg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=ug;bn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,a=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],g=p[4],y=p[8],x=p[1],S=p[5],w=p[9],A=p[2],_=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(y-A)<.01&&Math.abs(w-_)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+A)<.1&&Math.abs(w+_)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,N=(S+1)/2,q=(v+1)/2,z=(g+x)/4,F=(y+A)/4,K=(w+_)/4;return P>N&&P>q?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=z/r,c=F/r):N>q?N<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(N),r=z/a,c=K/a):q<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(q),r=F/c,a=K/c),this.set(r,a,c,n),this}let U=Math.sqrt((_-w)*(_-w)+(y-A)*(y-A)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(_-w)/U,this.y=(y-A)/U,this.z=(x-g)/U,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W0 extends Qr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends W0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class wg extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X0 extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,f,d){let p=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];const x=c[f+0],S=c[f+1],w=c[f+2],A=c[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=A;return}if(y!==A||p!==x||m!==S||g!==w){let _=1-d;const v=p*x+m*S+g*w+y*A,U=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const q=Math.sqrt(P),z=Math.atan2(q,v*U);_=Math.sin(_*z)/q,d=Math.sin(d*z)/q}const N=d*U;if(p=p*_+x*N,m=m*_+S*N,g=g*_+w*N,y=y*_+A*N,_===1-d){const q=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=q,m*=q,g*=q,y*=q}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,c,f){const d=r[a],p=r[a+1],m=r[a+2],g=r[a+3],y=c[f],x=c[f+1],S=c[f+2],w=c[f+3];return e[n]=d*w+g*y+p*S-m*x,e[n+1]=p*w+g*x+m*y-d*S,e[n+2]=m*w+g*S+d*x-p*y,e[n+3]=g*w-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(a/2),y=d(c/2),x=p(r/2),S=p(a/2),w=p(c/2);switch(f){case"XYZ":this._x=x*g*y+m*S*w,this._y=m*S*y-x*g*w,this._z=m*g*w+x*S*y,this._w=m*g*y-x*S*w;break;case"YXZ":this._x=x*g*y+m*S*w,this._y=m*S*y-x*g*w,this._z=m*g*w-x*S*y,this._w=m*g*y+x*S*w;break;case"ZXY":this._x=x*g*y-m*S*w,this._y=m*S*y+x*g*w,this._z=m*g*w+x*S*y,this._w=m*g*y-x*S*w;break;case"ZYX":this._x=x*g*y-m*S*w,this._y=m*S*y+x*g*w,this._z=m*g*w-x*S*y,this._w=m*g*y+x*S*w;break;case"YZX":this._x=x*g*y+m*S*w,this._y=m*S*y+x*g*w,this._z=m*g*w-x*S*y,this._w=m*g*y-x*S*w;break;case"XZY":this._x=x*g*y-m*S*w,this._y=m*S*y-x*g*w,this._z=m*g*w+x*S*y,this._w=m*g*y+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],y=n[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(g-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(c+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(c-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,f=e._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+f*d+a*m-c*p,this._y=a*g+f*p+c*d-r*m,this._z=c*g+f*m+r*p-a*d,this._w=f*g-r*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),y=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),g=2*(d*n-c*a),y=2*(c*r-f*n);return this.x=n+p*m+f*y-d*g,this.y=r+p*g+d*m-c*y,this.z=a+p*y+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-c*d,this.y=c*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new j,om=new Zr;class Yo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ri):ri.fromBufferAttribute(c,f),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let c=0,f=a.length;c<f;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),nl.subVectors(this.max,ko),Cs.subVectors(e.a,ko),Rs.subVectors(e.b,ko),Ps.subVectors(e.c,ko),ur.subVectors(Rs,Cs),fr.subVectors(Ps,Rs),Or.subVectors(Cs,Ps);let n=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Or.z,Or.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Or.z,0,-Or.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Or.y,Or.x,0];return!Iu(n,Cs,Rs,Ps,nl)||(n=[1,0,0,0,1,0,0,0,1],!Iu(n,Cs,Rs,Ps,nl))?!1:(il.crossVectors(ur,fr),n=[il.x,il.y,il.z],Iu(n,Cs,Rs,Ps,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new j,new j,new j,new j,new j,new j,new j,new j],ri=new j,tl=new Yo,Cs=new j,Rs=new j,Ps=new j,ur=new j,fr=new j,Or=new j,ko=new j,nl=new j,il=new j,kr=new j;function Iu(s,e,n,r,a){for(let c=0,f=s.length-3;c<=f;c+=3){kr.fromArray(s,c);const d=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),p=e.dot(kr),m=n.dot(kr),g=r.dot(kr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const j0=new Yo,Bo=new j,Nu=new j;class Vl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):j0.setFromPoints(e).getCenter(r);let a=0;for(let c=0,f=e.length;c<f;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Nu)),this.expandByPoint(Bo.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new j,Uu=new j,rl=new j,dr=new j,Fu=new j,sl=new j,Ou=new j;class Gl{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Uu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Uu);const c=e.distanceTo(n)*.5,f=-this.direction.dot(rl),d=dr.dot(this.direction),p=-dr.dot(rl),m=dr.lengthSq(),g=Math.abs(1-f*f);let y,x,S,w;if(g>0)if(y=f*p-d,x=f*d-p,w=c*g,y>=0)if(x>=-w)if(x<=w){const A=1/g;y*=A,x*=A,S=y*(y+f*x+2*d)+x*(f*y+x+2*p)+m}else x=c,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x=-c,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-w?(y=Math.max(0,-(-f*c+d)),x=y>0?-c:Math.min(Math.max(-c,-p),c),S=-y*y+x*(x+2*p)+m):x<=w?(y=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(y=Math.max(0,-(f*c+d)),x=y>0?c:Math.min(Math.max(-c,-p),c),S=-y*y+x*(x+2*p)+m);else x=f>0?-c:c,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Uu).addScaledVector(rl,x),S}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,c=e.radius*e.radius;if(a>c)return null;const f=Math.sqrt(c-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||c>a||((c>r||isNaN(r))&&(r=c),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,c){Fu.subVectors(n,e),sl.subVectors(r,e),Ou.crossVectors(Fu,sl);let f=this.direction.dot(Ou),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=d*this.direction.dot(sl.crossVectors(dr,sl));if(p<0)return null;const m=d*this.direction.dot(Fu.cross(dr));if(m<0||p+m>f)return null;const g=-d*dr.dot(Ou);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,r,a,c,f,d,p,m,g,y,x,S,w,A,_){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,p,m,g,y,x,S,w,A,_)}set(e,n,r,a,c,f,d,p,m,g,y,x,S,w,A,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=c,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=y,v[14]=x,v[3]=S,v[7]=w,v[11]=A,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),g=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=f*g,S=f*y,w=d*g,A=d*y;n[0]=p*g,n[4]=-p*y,n[8]=m,n[1]=S+w*m,n[5]=x-A*m,n[9]=-d*p,n[2]=A-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*g,S=p*y,w=m*g,A=m*y;n[0]=x+A*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*y,n[5]=f*g,n[9]=-d,n[2]=S*d-w,n[6]=A+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*g,S=p*y,w=m*g,A=m*y;n[0]=x-A*d,n[4]=-f*y,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*g,n[9]=A-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*g,S=f*y,w=d*g,A=d*y;n[0]=p*g,n[4]=w*m-S,n[8]=x*m+A,n[1]=p*y,n[5]=A*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,A=d*m;n[0]=p*g,n[4]=A-x*y,n[8]=w*y+S,n[1]=y,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=S*y+w,n[10]=x-A*y}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,A=d*m;n[0]=p*g,n[4]=-y,n[8]=m*g,n[1]=x*y+A,n[5]=f*g,n[9]=S*y-w,n[2]=w*y-S,n[6]=d*g,n[10]=A*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,q0)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),hr.crossVectors(r,On),hr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),hr.crossVectors(r,On)),hr.normalize(),ol.crossVectors(On,hr),a[0]=hr.x,a[4]=ol.x,a[8]=On.x,a[1]=hr.y,a[5]=ol.y,a[9]=On.y,a[2]=hr.z,a[6]=ol.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],y=r[5],x=r[9],S=r[13],w=r[2],A=r[6],_=r[10],v=r[14],U=r[3],P=r[7],N=r[11],q=r[15],z=a[0],F=a[4],K=a[8],ye=a[12],E=a[1],R=a[5],oe=a[9],ne=a[13],ue=a[2],pe=a[6],re=a[10],V=a[14],D=a[3],ie=a[7],J=a[11],I=a[15];return c[0]=f*z+d*E+p*ue+m*D,c[4]=f*F+d*R+p*pe+m*ie,c[8]=f*K+d*oe+p*re+m*J,c[12]=f*ye+d*ne+p*V+m*I,c[1]=g*z+y*E+x*ue+S*D,c[5]=g*F+y*R+x*pe+S*ie,c[9]=g*K+y*oe+x*re+S*J,c[13]=g*ye+y*ne+x*V+S*I,c[2]=w*z+A*E+_*ue+v*D,c[6]=w*F+A*R+_*pe+v*ie,c[10]=w*K+A*oe+_*re+v*J,c[14]=w*ye+A*ne+_*V+v*I,c[3]=U*z+P*E+N*ue+q*D,c[7]=U*F+P*R+N*pe+q*ie,c[11]=U*K+P*oe+N*re+q*J,c[15]=U*ye+P*ne+N*V+q*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],y=e[6],x=e[10],S=e[14],w=e[3],A=e[7],_=e[11],v=e[15];return w*(+c*p*y-a*m*y-c*d*x+r*m*x+a*d*S-r*p*S)+A*(+n*p*S-n*m*x+c*f*x-a*f*S+a*m*g-c*p*g)+_*(+n*m*y-n*d*S-c*f*y+r*f*S+c*d*g-r*m*g)+v*(-a*d*g-n*p*y+n*d*x+a*f*y-r*f*x+r*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],y=e[9],x=e[10],S=e[11],w=e[12],A=e[13],_=e[14],v=e[15],U=y*_*m-A*x*m+A*p*S-d*_*S-y*p*v+d*x*v,P=w*x*m-g*_*m-w*p*S+f*_*S+g*p*v-f*x*v,N=g*A*m-w*y*m+w*d*S-f*A*S-g*d*v+f*y*v,q=w*y*p-g*A*p-w*d*x+f*A*x+g*d*_-f*y*_,z=n*U+r*P+a*N+c*q;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=U*F,e[1]=(A*x*c-y*_*c-A*a*S+r*_*S+y*a*v-r*x*v)*F,e[2]=(d*_*c-A*p*c+A*a*m-r*_*m-d*a*v+r*p*v)*F,e[3]=(y*p*c-d*x*c-y*a*m+r*x*m+d*a*S-r*p*S)*F,e[4]=P*F,e[5]=(g*_*c-w*x*c+w*a*S-n*_*S-g*a*v+n*x*v)*F,e[6]=(w*p*c-f*_*c-w*a*m+n*_*m+f*a*v-n*p*v)*F,e[7]=(f*x*c-g*p*c+g*a*m-n*x*m-f*a*S+n*p*S)*F,e[8]=N*F,e[9]=(w*y*c-g*A*c-w*r*S+n*A*S+g*r*v-n*y*v)*F,e[10]=(f*A*c-w*d*c+w*r*m-n*A*m-f*r*v+n*d*v)*F,e[11]=(g*d*c-f*y*c-g*r*m+n*y*m+f*r*S-n*d*S)*F,e[12]=q*F,e[13]=(g*A*a-w*y*a+w*r*x-n*A*x-g*r*_+n*y*_)*F,e[14]=(w*d*a-f*A*a-w*r*p+n*A*p+f*r*_-n*d*_)*F,e[15]=(f*y*a-g*d*a+g*r*p-n*y*p-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,f=e.x,d=e.y,p=e.z,m=c*f,g=c*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,g*d+r,g*p-a*f,0,m*p-a*d,g*p+a*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,f){return this.set(1,r,c,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,f=n._y,d=n._z,p=n._w,m=c+c,g=f+f,y=d+d,x=c*m,S=c*g,w=c*y,A=f*g,_=f*y,v=d*y,U=p*m,P=p*g,N=p*y,q=r.x,z=r.y,F=r.z;return a[0]=(1-(A+v))*q,a[1]=(S+N)*q,a[2]=(w-P)*q,a[3]=0,a[4]=(S-N)*z,a[5]=(1-(x+v))*z,a[6]=(_+U)*z,a[7]=0,a[8]=(w+P)*F,a[9]=(_-U)*F,a[10]=(1-(x+A))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=bs.set(a[0],a[1],a[2]).length();const f=bs.set(a[4],a[5],a[6]).length(),d=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/c,g=1/f,y=1/d;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=g,si.elements[5]*=g,si.elements[6]*=g,si.elements[8]*=y,si.elements[9]*=y,si.elements[10]*=y,n.setFromRotationMatrix(si),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,a,c,f,d=zi){const p=this.elements,m=2*c/(n-e),g=2*c/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===zi)S=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===Fl)S=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,f,d=zi){const p=this.elements,m=1/(n-e),g=1/(r-a),y=1/(f-c),x=(n+e)*m,S=(r+a)*g;let w,A;if(d===zi)w=(f+c)*y,A=-2*y;else if(d===Fl)w=c*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new j,si=new Ot,Y0=new j(0,0,0),q0=new j(1,1,1),hr=new j,ol=new j,On=new j,am=new Ot,lm=new Zr;class vi{constructor(e=0,n=0,r=0,a=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],f=a[4],d=a[8],p=a[1],m=a[5],g=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(yn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-yn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(yn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K0=0;const cm=new j,Ls=new Zr,Ii=new Ot,al=new j,zo=new j,$0=new j,Z0=new Zr,um=new j(1,0,0),fm=new j(0,1,0),dm=new j(0,0,1),hm={type:"added"},Q0={type:"removed"},Ds={type:"childadded",child:null},ku={type:"childremoved",child:null};class cn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new j,n=new vi,r=new Zr,a=new j(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ot}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(zo,al,this.up):Ii.lookAt(al,zo,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Q0),ku.child=e,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];c(e.shapes,y)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),y=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}cn.DEFAULT_UP=new j(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new j,Ni=new j,Bu=new j,Ui=new j,Is=new j,Ns=new j,pm=new j,zu=new j,Hu=new j,Vu=new j,Gu=new Vt,Wu=new Vt,Xu=new Vt;class li{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){oi.subVectors(a,n),Ni.subVectors(r,n),Bu.subVectors(e,n);const f=oi.dot(oi),d=oi.dot(Ni),p=oi.dot(Bu),m=Ni.dot(Ni),g=Ni.dot(Bu),y=f*m-d*d;if(y===0)return c.set(0,0,0),null;const x=1/y,S=(m*p-d*g)*x,w=(f*g-d*p)*x;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,a,c,f,d,p){return this.getBarycoord(e,n,r,a,Ui)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ui.x),p.addScaledVector(f,Ui.y),p.addScaledVector(d,Ui.z),p)}static getInterpolatedAttribute(e,n,r,a,c,f){return Gu.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),Gu.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,r),Xu.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Gu,c.x),f.addScaledVector(Wu,c.y),f.addScaledVector(Xu,c.z),f}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Ni.subVectors(e,n),oi.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let f,d;Is.subVectors(a,r),Ns.subVectors(c,r),zu.subVectors(e,r);const p=Is.dot(zu),m=Ns.dot(zu);if(p<=0&&m<=0)return n.copy(r);Hu.subVectors(e,a);const g=Is.dot(Hu),y=Ns.dot(Hu);if(g>=0&&y<=g)return n.copy(a);const x=p*y-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(Is,f);Vu.subVectors(e,c);const S=Is.dot(Vu),w=Ns.dot(Vu);if(w>=0&&S<=w)return n.copy(c);const A=S*m-p*w;if(A<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Ns,d);const _=g*w-S*y;if(_<=0&&y-g>=0&&S-w>=0)return pm.subVectors(c,a),d=(y-g)/(y-g+(S-w)),n.copy(a).addScaledVector(pm,d);const v=1/(_+A+x);return f=A*v,d=x*v,n.copy(r).addScaledVector(Is,f).addScaledVector(Ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class lt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=N0(e,1),n=yn(n,0,1),r=yn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=ju(f,c,e+1/3),this.g=ju(f,c,e),this.b=ju(f,c,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=mi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const r=Ag[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=bu(e.r),this.g=bu(e.g),this.b=bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Et.fromWorkingColorSpace(gn.copy(this),e),Math.round(yn(gn.r*255,0,255))*65536+Math.round(yn(gn.g*255,0,255))*256+Math.round(yn(gn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,c=gn.b,f=Math.max(r,a,c),d=Math.min(r,a,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=g<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-c)/y+(a<c?6:0);break;case a:p=(c-r)/y+2;break;case c:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=mi){Et.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(ll);const r=Ru(pr.h,ll.h,n),a=Ru(pr.s,ll.s,n),c=Ru(pr.l,ll.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new lt;lt.NAMES=Ag;let J0=0;class Qs extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Vs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=lf,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==af&&(r.blendSrc=this.blendSrc),this.blendDst!==lf&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(n){const c=a(e.textures),f=a(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ad extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new j,cl=new rt;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=tm,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),a=Cn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),a=Cn(a,this.array),c=Cn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class Cg extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Rg extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $n extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let ex=0;const jn=new Ot,Yu=new cn,Us=new j,kn=new Yo,Ho=new Yo,rn=new j;class xi extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eg(e)?Rg:Cg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new $n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];kn.setFromBufferAttribute(c),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(kn.min,Ho.min),kn.expandByPoint(rn),rn.addVectors(kn.max,Ho.max),kn.expandByPoint(rn)):(kn.expandByPoint(Ho.min),kn.expandByPoint(Ho.max))}kn.getCenter(r);let a=0;for(let c=0,f=e.count;c<f;c++)rn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)rn.fromBufferAttribute(d,m),p&&(Us.fromBufferAttribute(e,m),rn.add(Us)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new j,p[K]=new j;const m=new j,g=new j,y=new j,x=new rt,S=new rt,w=new rt,A=new j,_=new j;function v(K,ye,E){m.fromBufferAttribute(r,K),g.fromBufferAttribute(r,ye),y.fromBufferAttribute(r,E),x.fromBufferAttribute(c,K),S.fromBufferAttribute(c,ye),w.fromBufferAttribute(c,E),g.sub(m),y.sub(m),S.sub(x),w.sub(x);const R=1/(S.x*w.y-w.x*S.y);isFinite(R)&&(A.copy(g).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(R),_.copy(y).multiplyScalar(S.x).addScaledVector(g,-w.x).multiplyScalar(R),d[K].add(A),d[ye].add(A),d[E].add(A),p[K].add(_),p[ye].add(_),p[E].add(_))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let K=0,ye=U.length;K<ye;++K){const E=U[K],R=E.start,oe=E.count;for(let ne=R,ue=R+oe;ne<ue;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const P=new j,N=new j,q=new j,z=new j;function F(K){q.fromBufferAttribute(a,K),z.copy(q);const ye=d[K];P.copy(ye),P.sub(q.multiplyScalar(q.dot(ye))).normalize(),N.crossVectors(z,ye);const R=N.dot(p[K])<0?-1:1;f.setXYZW(K,P.x,P.y,P.z,R)}for(let K=0,ye=U.length;K<ye;++K){const E=U[K],R=E.start,oe=E.count;for(let ne=R,ue=R+oe;ne<ue;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new j,c=new j,f=new j,d=new j,p=new j,m=new j,g=new j,y=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),A=e.getX(x+1),_=e.getX(x+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,_),g.subVectors(f,c),y.subVectors(a,c),g.cross(y),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,_),d.add(g),p.add(g),m.add(g),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),y.subVectors(a,c),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,y=d.normalized,x=new m.constructor(p.length*g);let S=0,w=0;for(let A=0,_=p.length;A<_;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*g;for(let v=0;v<g;v++)x[w++]=m[S++]}return new _i(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,y=m.length;g<y;g++){const x=m[g],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];g.push(S.toJSON(e.data))}g.length>0&&(a[p]=g,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],y=c[m];for(let x=0,S=y.length;x<S;x++)g.push(y[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mm=new Ot,Br=new Gl,ul=new Vl,gm=new j,fl=new j,dl=new j,hl=new j,qu=new j,pl=new j,_m=new j,ml=new j;class Kn extends cn{constructor(e=new xi,n=new ad){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){pl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],y=c[p];g!==0&&(qu.fromBufferAttribute(y,e),f?pl.addScaledVector(qu,g):pl.addScaledVector(qu.sub(n),g))}n.add(pl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(ul.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ul,gm)===null||Br.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(c).invert(),Br.copy(e.ray).applyMatrix4(mm),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let a;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,y=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,A=x.length;w<A;w++){const _=x[w],v=f[_.materialIndex],U=Math.max(_.start,S.start),P=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let N=U,q=P;N<q;N+=3){const z=d.getX(N),F=d.getX(N+1),K=d.getX(N+2);a=gl(this,v,e,r,m,g,y,z,F,K),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let _=w,v=A;_<v;_+=3){const U=d.getX(_),P=d.getX(_+1),N=d.getX(_+2);a=gl(this,f,e,r,m,g,y,U,P,N),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,A=x.length;w<A;w++){const _=x[w],v=f[_.materialIndex],U=Math.max(_.start,S.start),P=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let N=U,q=P;N<q;N+=3){const z=N,F=N+1,K=N+2;a=gl(this,v,e,r,m,g,y,z,F,K),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let _=w,v=A;_<v;_+=3){const U=_,P=_+1,N=_+2;a=gl(this,f,e,r,m,g,y,U,P,N),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function tx(s,e,n,r,a,c,f,d){let p;if(e.side===Pn?p=r.intersectTriangle(f,c,a,!0,d):p=r.intersectTriangle(a,c,f,e.side===Sr,d),p===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ml);return m<n.near||m>n.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,n,r,a,c,f,d,p,m){s.getVertexPosition(d,fl),s.getVertexPosition(p,dl),s.getVertexPosition(m,hl);const g=tx(s,e,n,r,fl,dl,hl,_m);if(g){const y=new j;li.getBarycoord(_m,fl,dl,hl,y),a&&(g.uv=li.getInterpolatedAttribute(a,d,p,m,y,new rt)),c&&(g.uv1=li.getInterpolatedAttribute(c,d,p,m,y,new rt)),f&&(g.normal=li.getInterpolatedAttribute(f,d,p,m,y,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new j,materialIndex:0};li.getNormal(fl,dl,hl,x.normal),g.face=x,g.barycoord=y}return g}class yr extends xi{constructor(e=1,n=1,r=1,a=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:f};const d=this;a=Math.floor(a),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],y=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,c,0),w("z","y","x",1,-1,r,n,-e,f,c,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new $n(m,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(y,2));function w(A,_,v,U,P,N,q,z,F,K,ye){const E=N/F,R=q/K,oe=N/2,ne=q/2,ue=z/2,pe=F+1,re=K+1;let V=0,D=0;const ie=new j;for(let J=0;J<re;J++){const I=J*R-ne;for(let se=0;se<pe;se++){const Pe=se*E-oe;ie[A]=Pe*U,ie[_]=I*P,ie[v]=ue,m.push(ie.x,ie.y,ie.z),ie[A]=0,ie[_]=0,ie[v]=z>0?1:-1,g.push(ie.x,ie.y,ie.z),y.push(se/F),y.push(1-J/K),V+=1}}for(let J=0;J<K;J++)for(let I=0;I<F;I++){const se=x+I+pe*J,Pe=x+I+pe*(J+1),Z=x+(I+1)+pe*(J+1),le=x+(I+1)+pe*J;p.push(se,Pe,le),p.push(Pe,Z,le),D+=6}d.addGroup(S,D,ye),S+=D,x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function xn(s){const e={};for(let n=0;n<s.length;n++){const r=$s(s[n]);for(const a in r)e[a]=r[a]}return e}function nx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Pg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const ix={clone:$s,merge:xn};var rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rx,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class bg extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new j,vm=new rt,xm=new rt;class Yn extends bg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,vm,xm),n.subVectors(xm,vm)}setViewOffset(e,n,r,a,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class ox extends cn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Fs,Os,e,n);a.layers=this.layers,this.add(a);const c=new Yn(Fs,Os,e,n);c.layers=this.layers,this.add(c);const f=new Yn(Fs,Os,e,n);f.layers=this.layers,this.add(f);const d=new Yn(Fs,Os,e,n);d.layers=this.layers,this.add(d);const p=new Yn(Fs,Os,e,n);p.layers=this.layers,this.add(p);const m=new Yn(Fs,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,f,d,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(y,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Lg extends bn{constructor(e,n,r,a,c,f,d,p,m,g){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,a,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ax extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Lg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new yr(5,5,5),c=new Mr({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:vr});c.uniforms.tEquirect.value=n;const f=new Kn(a,c),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=ai),new ox(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(c)}}const Ku=new j,lx=new j,cx=new ot;class Oi{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Ku.subVectors(r,n).cross(lx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ku),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||cx.getNormalMatrix(e),a=this.coplanarPoint(Ku).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Vl,_l=new j;class ld{constructor(e=new Oi,n=new Oi,r=new Oi,a=new Oi,c=new Oi,f=new Oi){this.planes=[e,n,r,a,c,f]}set(e,n,r,a,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],p=a[3],m=a[4],g=a[5],y=a[6],x=a[7],S=a[8],w=a[9],A=a[10],_=a[11],v=a[12],U=a[13],P=a[14],N=a[15];if(r[0].setComponents(p-c,x-m,_-S,N-v).normalize(),r[1].setComponents(p+c,x+m,_+S,N+v).normalize(),r[2].setComponents(p+f,x+g,_+w,N+U).normalize(),r[3].setComponents(p-f,x-g,_-w,N-U).normalize(),r[4].setComponents(p-d,x-y,_-A,N-P).normalize(),n===zi)r[5].setComponents(p+d,x+y,_+A,N+P).normalize();else if(n===Fl)r[5].setComponents(d,y,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dg(){let s=null,e=!1,n=null,r=null;function a(c,f){n(c,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function ux(s){const e=new WeakMap;function n(d,p){const m=d.array,g=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const g=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,g);else{y.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<y.length;S++){const w=y[x],A=y[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++x,y[x]=A)}y.length=x+1;for(let S=0,w=y.length;S<w;S++){const A=y[S];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:f}}class Zs extends xi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,g=p+1,y=e/d,x=n/p,S=[],w=[],A=[],_=[];for(let v=0;v<g;v++){const U=v*x-f;for(let P=0;P<m;P++){const N=P*y-c;w.push(N,-U,0),A.push(0,0,1),_.push(P/d),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let U=0;U<d;U++){const P=U+m*v,N=U+m*(v+1),q=U+1+m*(v+1),z=U+1+m*v;S.push(P,N,z),S.push(N,q,z)}this.setIndex(S),this.setAttribute("position",new $n(w,3)),this.setAttribute("normal",new $n(A,3)),this.setAttribute("uv",new $n(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ny=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ly=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,My=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Py=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_S=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,US=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:fx,alphahash_pars_fragment:dx,alphamap_fragment:hx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:_x,aomap_pars_fragment:vx,batching_pars_vertex:xx,batching_vertex:yx,begin_vertex:Sx,beginnormal_vertex:Mx,bsdfs:Ex,iridescence_fragment:Tx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:Cx,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Px,color_fragment:bx,color_pars_fragment:Lx,color_pars_vertex:Dx,color_vertex:Ix,common:Nx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Fx,displacementmap_pars_vertex:Ox,displacementmap_vertex:kx,emissivemap_fragment:Bx,emissivemap_pars_fragment:zx,colorspace_fragment:Hx,colorspace_pars_fragment:Vx,envmap_fragment:Gx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:iy,envmap_vertex:Yx,fog_vertex:qx,fog_pars_vertex:Kx,fog_fragment:$x,fog_pars_fragment:Zx,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:Jx,lights_lambert_fragment:ey,lights_lambert_pars_fragment:ty,lights_pars_begin:ny,lights_toon_fragment:ry,lights_toon_pars_fragment:sy,lights_phong_fragment:oy,lights_phong_pars_fragment:ay,lights_physical_fragment:ly,lights_physical_pars_fragment:cy,lights_fragment_begin:uy,lights_fragment_maps:fy,lights_fragment_end:dy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:_y,map_pars_fragment:vy,map_particle_fragment:xy,map_particle_pars_fragment:yy,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:My,morphinstance_vertex:Ey,morphcolor_vertex:Ty,morphnormal_vertex:wy,morphtarget_pars_vertex:Ay,morphtarget_vertex:Cy,normal_fragment_begin:Ry,normal_fragment_maps:Py,normal_pars_fragment:by,normal_pars_vertex:Ly,normal_vertex:Dy,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Ny,clearcoat_normal_fragment_maps:Uy,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:Oy,opaque_fragment:ky,packing:By,premultiplied_alpha_fragment:zy,project_vertex:Hy,dithering_fragment:Vy,dithering_pars_fragment:Gy,roughnessmap_fragment:Wy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Yy,shadowmap_vertex:qy,shadowmask_pars_fragment:Ky,skinbase_vertex:$y,skinning_pars_vertex:Zy,skinning_vertex:Qy,skinnormal_vertex:Jy,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:rS,transmission_pars_fragment:sS,uv_pars_fragment:oS,uv_pars_vertex:aS,uv_vertex:lS,worldpos_vertex:cS,background_vert:uS,background_frag:fS,backgroundCube_vert:dS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:_S,distanceRGBA_vert:vS,distanceRGBA_frag:xS,equirect_vert:yS,equirect_frag:SS,linedashed_vert:MS,linedashed_frag:ES,meshbasic_vert:TS,meshbasic_frag:wS,meshlambert_vert:AS,meshlambert_frag:CS,meshmatcap_vert:RS,meshmatcap_frag:PS,meshnormal_vert:bS,meshnormal_frag:LS,meshphong_vert:DS,meshphong_frag:IS,meshphysical_vert:NS,meshphysical_frag:US,meshtoon_vert:FS,meshtoon_frag:OS,points_vert:kS,points_frag:BS,shadow_vert:zS,shadow_frag:HS,sprite_vert:VS,sprite_frag:GS},Re={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new lt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new lt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:xn([Re.common,Re.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:xn([Re.lights,Re.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};gi.physical={uniforms:xn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const vl={r:0,b:0,g:0},Hr=new vi,WS=new Ot;function XS(s,e,n,r,a,c,f){const d=new lt(0);let p=c===!0?0:1,m,g,y=null,x=0,S=null;function w(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?n:e).get(P)),P}function A(U){let P=!1;const N=w(U);N===null?v(d,p):N&&N.isColor&&(v(N,1),P=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,f):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(U,P){const N=w(P);N&&(N.isCubeTexture||N.mapping===zl)?(g===void 0&&(g=new Kn(new yr(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:$s(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Hr.copy(P.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(Hr)),g.material.toneMapped=Et.getTransfer(N.colorSpace)!==It,(y!==N||x!==N.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=N,x=N.version,S=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Kn(new Zs(2,2),new Mr({name:"BackgroundMaterial",uniforms:$s(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Et.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(y!==N||x!==N.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=N,x=N.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function v(U,P){U.getRGB(vl,Pg(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(U,P=1){d.set(U),p=P,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,v(d,p)},render:A,addToRenderList:_}}function jS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,f=!1;function d(E,R,oe,ne,ue){let pe=!1;const re=y(ne,oe,R);c!==re&&(c=re,m(c.object)),pe=S(E,ne,oe,ue),pe&&w(E,ne,oe,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,N(E,R,oe,ne),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return s.createVertexArray()}function m(E){return s.bindVertexArray(E)}function g(E){return s.deleteVertexArray(E)}function y(E,R,oe){const ne=oe.wireframe===!0;let ue=r[E.id];ue===void 0&&(ue={},r[E.id]=ue);let pe=ue[R.id];pe===void 0&&(pe={},ue[R.id]=pe);let re=pe[ne];return re===void 0&&(re=x(p()),pe[ne]=re),re}function x(E){const R=[],oe=[],ne=[];for(let ue=0;ue<n;ue++)R[ue]=0,oe[ue]=0,ne[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:oe,attributeDivisors:ne,object:E,attributes:{},index:null}}function S(E,R,oe,ne){const ue=c.attributes,pe=R.attributes;let re=0;const V=oe.getAttributes();for(const D in V)if(V[D].location>=0){const J=ue[D];let I=pe[D];if(I===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(I=E.instanceColor)),J===void 0||J.attribute!==I||I&&J.data!==I.data)return!0;re++}return c.attributesNum!==re||c.index!==ne}function w(E,R,oe,ne){const ue={},pe=R.attributes;let re=0;const V=oe.getAttributes();for(const D in V)if(V[D].location>=0){let J=pe[D];J===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(J=E.instanceColor));const I={};I.attribute=J,J&&J.data&&(I.data=J.data),ue[D]=I,re++}c.attributes=ue,c.attributesNum=re,c.index=ne}function A(){const E=c.newAttributes;for(let R=0,oe=E.length;R<oe;R++)E[R]=0}function _(E){v(E,0)}function v(E,R){const oe=c.newAttributes,ne=c.enabledAttributes,ue=c.attributeDivisors;oe[E]=1,ne[E]===0&&(s.enableVertexAttribArray(E),ne[E]=1),ue[E]!==R&&(s.vertexAttribDivisor(E,R),ue[E]=R)}function U(){const E=c.newAttributes,R=c.enabledAttributes;for(let oe=0,ne=R.length;oe<ne;oe++)R[oe]!==E[oe]&&(s.disableVertexAttribArray(oe),R[oe]=0)}function P(E,R,oe,ne,ue,pe,re){re===!0?s.vertexAttribIPointer(E,R,oe,ue,pe):s.vertexAttribPointer(E,R,oe,ne,ue,pe)}function N(E,R,oe,ne){A();const ue=ne.attributes,pe=oe.getAttributes(),re=R.defaultAttributeValues;for(const V in pe){const D=pe[V];if(D.location>=0){let ie=ue[V];if(ie===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const J=ie.normalized,I=ie.itemSize,se=e.get(ie);if(se===void 0)continue;const Pe=se.buffer,Z=se.type,le=se.bytesPerElement,xe=Z===s.INT||Z===s.UNSIGNED_INT||ie.gpuType===Jf;if(ie.isInterleavedBufferAttribute){const Se=ie.data,be=Se.stride,Le=ie.offset;if(Se.isInstancedInterleavedBuffer){for(let et=0;et<D.locationSize;et++)v(D.location+et,Se.meshPerAttribute);E.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let et=0;et<D.locationSize;et++)_(D.location+et);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let et=0;et<D.locationSize;et++)P(D.location+et,I/D.locationSize,Z,J,be*le,(Le+I/D.locationSize*et)*le,xe)}else{if(ie.isInstancedBufferAttribute){for(let Se=0;Se<D.locationSize;Se++)v(D.location+Se,ie.meshPerAttribute);E.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Se=0;Se<D.locationSize;Se++)_(D.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Se=0;Se<D.locationSize;Se++)P(D.location+Se,I/D.locationSize,Z,J,I*le,I/D.locationSize*Se*le,xe)}}else if(re!==void 0){const J=re[V];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(D.location,J);break;case 3:s.vertexAttrib3fv(D.location,J);break;case 4:s.vertexAttrib4fv(D.location,J);break;default:s.vertexAttrib1fv(D.location,J)}}}}U()}function q(){K();for(const E in r){const R=r[E];for(const oe in R){const ne=R[oe];for(const ue in ne)g(ne[ue].object),delete ne[ue];delete R[oe]}delete r[E]}}function z(E){if(r[E.id]===void 0)return;const R=r[E.id];for(const oe in R){const ne=R[oe];for(const ue in ne)g(ne[ue].object),delete ne[ue];delete R[oe]}delete r[E.id]}function F(E){for(const R in r){const oe=r[R];if(oe[E.id]===void 0)continue;const ne=oe[E.id];for(const ue in ne)g(ne[ue].object),delete ne[ue];delete oe[E.id]}}function K(){ye(),f=!0,c!==a&&(c=a,m(c.object))}function ye(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:K,resetDefaultState:ye,dispose:q,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:_,disableUnusedAttributes:U}}function YS(s,e,n){let r;function a(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,y){y!==0&&(s.drawArraysInstanced(r,m,g,y),n.update(g,r,y))}function d(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,y);let S=0;for(let w=0;w<y;w++)S+=g[w];n.update(S,r,1)}function p(m,g,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],g[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,y);let w=0;for(let A=0;A<y;A++)w+=g[A];for(let A=0;A<x.length;A++)n.update(w,r,x[A])}}this.setMode=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function qS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(F){return!(F!==ci&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Hi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!K)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const F=e.get("EXT_clip_control");F.clipControlEXT(F.LOWER_LEFT_EXT,F.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=w>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:q,maxSamples:z}}function KS(s){const e=this;let n=null,r=0,a=!1,c=!1;const f=new Oi,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=g(y,x,0)},this.setState=function(y,x,S){const w=y.clippingPlanes,A=y.clipIntersection,_=y.clipShadows,v=s.get(y);if(!a||w===null||w.length===0||c&&!_)c?g(null):m();else{const U=c?0:r,P=U*4;let N=v.clippingState||null;p.value=N,N=g(w,x,P,S);for(let q=0;q!==P;++q)N[q]=n[q];v.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,S,w){const A=y!==null?y.length:0;let _=null;if(A!==0){if(_=p.value,w!==!0||_===null){const v=S+A*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(_===null||_.length<v)&&(_=new Float32Array(v));for(let P=0,N=S;P!==A;++P,N+=4)f.copy(y[P]).applyMatrix4(U,d),f.normal.toArray(_,N),_[N+3]=f.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}function $S(s){let e=new WeakMap;function n(f,d){return d===gf?f.mapping=js:d===_f&&(f.mapping=Ys),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===gf||d===_f)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new ax(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Ig extends bg{constructor(e=-1,n=1,r=1,a=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,ym=[.125,.215,.35,.446,.526,.582],Xr=20,$u=new Ig,Sm=new lt;let Zu=null,Qu=0,Ju=0,ef=!1;const Gr=(1+Math.sqrt(5))/2,ks=1/Gr,Mm=[new j(-Gr,ks,0),new j(Gr,ks,0),new j(-ks,0,Gr),new j(ks,0,Gr),new j(0,Gr,-ks),new j(0,Gr,ks),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Qu,Ju),this._renderer.xr.enabled=ef,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Xo,format:ci,colorSpace:Er,depthBuffer:!1},a=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZS(c)),this._blurMaterial=QS(c,e,n)}return a}_compileMaterial(e){const n=new Kn(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,r,a){const d=new Yn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(Sm),g.toneMapping=xr,g.autoClear=!1;const S=new ad({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),w=new Kn(new yr,S);let A=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,A=!0):(S.color.copy(Sm),A=!0);for(let v=0;v<6;v++){const U=v%3;U===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):U===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const P=this._cubeSize;xl(a,U*P,v>2?P:0,P,P),g.setRenderTarget(a),A&&g.render(w,d),g.render(e,d)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===js||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const c=a?this._cubemapMaterial:this._equirectMaterial,f=new Kn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;xl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,$u)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Mm[(a-c-1)%Mm.length];this._blur(e,c-1,c,f,d)}n.autoClear=r}_blur(e,n,r,a,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",c),this._halfBlur(f,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Kn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),A=c/w,_=isFinite(c)?1+Math.floor(g*A):Xr;_>Xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Xr}`);const v=[];let U=0;for(let F=0;F<Xr;++F){const K=F/A,ye=Math.exp(-K*K/2);v.push(ye),F===0?U+=ye:F<_&&(U+=2*ye)}for(let F=0;F<v.length;F++)v[F]=v[F]/U;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=w,x.mipInt.value=P-r;const N=this._sizeLods[a],q=3*N*(a>P-zs?a-P+zs:0),z=4*(this._cubeSize-N);xl(n,q,z,3*N,2*N),p.setRenderTarget(n),p.render(y,$u)}}function ZS(s){const e=[],n=[],r=[];let a=s;const c=s-zs+1+ym.length;for(let f=0;f<c;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-zs?p=ym[f-s+zs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,w=6,A=3,_=2,v=1,U=new Float32Array(A*w*S),P=new Float32Array(_*w*S),N=new Float32Array(v*w*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,K=z>2?0:-1,ye=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];U.set(ye,A*w*z),P.set(x,_*w*z);const E=[z,z,z,z,z,z];N.set(E,v*w*z)}const q=new xi;q.setAttribute("position",new _i(U,A)),q.setAttribute("uv",new _i(P,_)),q.setAttribute("faceIndex",new _i(N,v)),e.push(q),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tm(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=zl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function QS(s,e,n){const r=new Float32Array(Xr),a=new j(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function wm(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Am(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===gf||p===_f,g=p===js||p===Ys;if(m||g){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Em(s)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&a(S)?(n===null&&(n=new Em(s)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",c),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function eM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&bl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function tM(s,e,n,r){const a={},c=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const A=x.morphAttributes[w];for(let _=0,v=A.length;_<v;_++)e.remove(A[_])}x.removeEventListener("dispose",f),delete a[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const A=S[w];for(let _=0,v=A.length;_<v;_++)e.update(A[_],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,w=y.attributes.position;let A=0;if(S!==null){const U=S.array;A=S.version;for(let P=0,N=U.length;P<N;P+=3){const q=U[P+0],z=U[P+1],F=U[P+2];x.push(q,z,z,F,F,q)}}else if(w!==void 0){const U=w.array;A=w.version;for(let P=0,N=U.length/3-1;P<N;P+=3){const q=P+0,z=P+1,F=P+2;x.push(q,z,z,F,F,q)}}else return;const _=new(Eg(x)?Rg:Cg)(x,1);_.version=A;const v=c.get(y);v&&e.remove(v),c.set(y,_)}function g(y){const x=c.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return c.get(y)}return{get:d,update:p,getWireframeAttribute:g}}function nM(s,e,n){let r;function a(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,c,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,c,x*f,w),n.update(S,r,w))}function g(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,w);let _=0;for(let v=0;v<w;v++)_+=S[v];n.update(_,r,1)}function y(x,S,w,A){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<x.length;v++)m(x[v]/f,S[v],A[v]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,A,0,w);let v=0;for(let U=0;U<w;U++)v+=S[U];for(let U=0;U<A.length;U++)n.update(v,r,A[U])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function iM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function rM(s,e,n){const r=new WeakMap,a=new Vt;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let E=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var S=E;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;w===!0&&(N=1),A===!0&&(N=2),_===!0&&(N=3);let q=d.attributes.position.count*N,z=1;q>e.maxTextureSize&&(z=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const F=new Float32Array(q*z*4*y),K=new wg(F,q,z,y);K.type=Bi,K.needsUpdate=!0;const ye=N*4;for(let R=0;R<y;R++){const oe=v[R],ne=U[R],ue=P[R],pe=q*z*4*R;for(let re=0;re<oe.count;re++){const V=re*ye;w===!0&&(a.fromBufferAttribute(oe,re),F[pe+V+0]=a.x,F[pe+V+1]=a.y,F[pe+V+2]=a.z,F[pe+V+3]=0),A===!0&&(a.fromBufferAttribute(ne,re),F[pe+V+4]=a.x,F[pe+V+5]=a.y,F[pe+V+6]=a.z,F[pe+V+7]=0),_===!0&&(a.fromBufferAttribute(ue,re),F[pe+V+8]=a.x,F[pe+V+9]=a.y,F[pe+V+10]=a.z,F[pe+V+11]=ue.itemSize===4?a.w:1)}}x={count:y,texture:K,size:new rt(q,z)},r.set(d,x),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let _=0;_<m.length;_++)w+=m[_];const A=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function sM(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,y=e.get(p,g);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class Ng extends bn{constructor(e,n,r,a,c,f,d,p,m,g=Gs){if(g!==Gs&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Gs&&(r=Kr),r===void 0&&g===Ks&&(r=qs),super(null,a,c,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:qn,this.minFilter=p!==void 0?p:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ug=new bn,Cm=new Ng(1,1),Fg=new wg,Og=new X0,kg=new Lg,Rm=[],Pm=[],bm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=Rm[a];if(c===void 0&&(c=new Float32Array(a),Rm[a]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(c,d)}return c}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Wl(s,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function oM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function uM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;Dm.set(r),s.uniformMatrix2fv(this.addr,!1,Dm),Zt(n,r)}}function fM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;Lm.set(r),s.uniformMatrix3fv(this.addr,!1,Lm),Zt(n,r)}}function dM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if($t(n,r))return;bm.set(r),s.uniformMatrix4fv(this.addr,!1,bm),Zt(n,r)}}function hM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function gM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function _M(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function vM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function xM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function yM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function SM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Cm.compareFunction=Mg,c=Cm):c=Ug,n.setTexture2D(e||c,a)}function MM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Og,a)}function EM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||kg,a)}function TM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Fg,a)}function wM(s){switch(s){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return fM;case 35676:return dM;case 5124:case 35670:return hM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return vM;case 36295:return xM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return TM}}function AM(s,e){s.uniform1fv(this.addr,e)}function CM(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function RM(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function PM(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function bM(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function LM(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function DM(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function IM(s,e){s.uniform1iv(this.addr,e)}function NM(s,e){s.uniform2iv(this.addr,e)}function UM(s,e){s.uniform3iv(this.addr,e)}function FM(s,e){s.uniform4iv(this.addr,e)}function OM(s,e){s.uniform1uiv(this.addr,e)}function kM(s,e){s.uniform2uiv(this.addr,e)}function BM(s,e){s.uniform3uiv(this.addr,e)}function zM(s,e){s.uniform4uiv(this.addr,e)}function HM(s,e,n){const r=this.cache,a=e.length,c=Wl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Ug,c[f])}function VM(s,e,n){const r=this.cache,a=e.length,c=Wl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Og,c[f])}function GM(s,e,n){const r=this.cache,a=e.length,c=Wl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||kg,c[f])}function WM(s,e,n){const r=this.cache,a=e.length,c=Wl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Fg,c[f])}function XM(s){switch(s){case 5126:return AM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return bM;case 35675:return LM;case 35676:return DM;case 5124:case 35670:return IM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return kM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}class jM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=wM(n.type)}}class YM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XM(n.type)}}class qM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,f=a.length;c!==f;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function KM(s,e,n){const r=s.name,a=r.length;for(tf.lastIndex=0;;){const c=tf.exec(r),f=tf.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){Im(n,m===void 0?new jM(d,s,e):new YM(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new qM(d),Im(n,y)),n=y}}}class Ll{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),f=e.getUniformLocation(n,c.name);KM(c,f,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,f=n.length;c!==f;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function Nm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const $M=37297;let ZM=0;function QM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=a;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function JM(s){const e=Et.getPrimaries(Et.workingColorSpace),n=Et.getPrimaries(s);let r;switch(e===n?r="":e===Ul&&n===Nl?r="LinearDisplayP3ToLinearSRGB":e===Nl&&n===Ul&&(r="LinearSRGBToLinearDisplayP3"),s){case Er:case Hl:return[r,"LinearTransferOETF"];case mi:case sd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Um(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+QM(s.getShaderSource(e),f)}else return a}function eE(s,e){const n=JM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tE(s,e){let n;switch(e){case g0:n="Linear";break;case _0:n="Reinhard";break;case v0:n="Cineon";break;case x0:n="ACESFilmic";break;case S0:n="AgX";break;case M0:n="Neutral";break;case y0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new j;function nE(){Et.getLuminanceCoefficients(yl);const s=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function rE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function sE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Go(s){return s!==""}function Fm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(s){return s.replace(oE,lE)}const aE=new Map;function lE(s,e){let n=st[e];if(n===void 0){const r=aE.get(e);if(r!==void 0)n=st[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yf(n)}const cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(s){return s.replace(cE,uE)}function uE(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function dE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function pE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cg:e="ENVMAP_BLENDING_MULTIPLY";break;case p0:e="ENVMAP_BLENDING_MIX";break;case m0:e="ENVMAP_BLENDING_ADD";break}return e}function mE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gE(s,e,n,r){const a=s.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=fE(n),m=dE(n),g=hE(n),y=pE(n),x=mE(n),S=iE(n),w=rE(c),A=a.createProgram();let _,v,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Go).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Go).join(`
`),v.length>0&&(v+=`
`)):(_=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),v=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?st.tonemapping_pars_fragment:"",n.toneMapping!==xr?tE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,eE("linearToOutputTexel",n.outputColorSpace),nE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),f=Yf(f),f=Fm(f,n),f=Om(f,n),d=Yf(d),d=Fm(d,n),d=Om(d,n),f=km(f),d=km(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=U+_+f,N=U+v+d,q=Nm(a,a.VERTEX_SHADER,P),z=Nm(a,a.FRAGMENT_SHADER,N);a.attachShader(A,q),a.attachShader(A,z),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(R){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(A).trim(),ne=a.getShaderInfoLog(q).trim(),ue=a.getShaderInfoLog(z).trim();let pe=!0,re=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,q,z);else{const V=Um(a,q,"vertex"),D=Um(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+oe+`
`+V+`
`+D)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ne===""||ue==="")&&(re=!1);re&&(R.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:ne,prefix:_},fragmentShader:{log:ue,prefix:v}})}a.deleteShader(q),a.deleteShader(z),K=new Ll(a,A),ye=sE(a,A)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let ye;this.getAttributes=function(){return ye===void 0&&F(this),ye};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(A,$M)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=q,this.fragmentShader=z,this}let _E=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xE(e),n.set(e,r)),r}}class xE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function yE(s,e,n,r,a,c,f){const d=new od,p=new vE,m=new Set,g=[],y=a.logarithmicDepthBuffer,x=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return m.add(E),E===0?"uv":`uv${E}`}function v(E,R,oe,ne,ue){const pe=ne.fog,re=ue.geometry,V=E.isMeshStandardMaterial?ne.environment:null,D=(E.isMeshStandardMaterial?n:e).get(E.envMap||V),ie=D&&D.mapping===zl?D.image.height:null,J=A[E.type];E.precision!==null&&(w=a.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const I=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,se=I!==void 0?I.length:0;let Pe=0;re.morphAttributes.position!==void 0&&(Pe=1),re.morphAttributes.normal!==void 0&&(Pe=2),re.morphAttributes.color!==void 0&&(Pe=3);let Z,le,xe,Se;if(J){const Qt=gi[J];Z=Qt.vertexShader,le=Qt.fragmentShader}else Z=E.vertexShader,le=E.fragmentShader,p.update(E),xe=p.getVertexShaderID(E),Se=p.getFragmentShaderID(E);const be=s.getRenderTarget(),Le=ue.isInstancedMesh===!0,et=ue.isBatchedMesh===!0,gt=!!E.map,ut=!!E.matcap,k=!!D,sn=!!E.aoMap,ct=!!E.lightMap,ht=!!E.bumpMap,$e=!!E.normalMap,wt=!!E.displacementMap,Qe=!!E.emissiveMap,b=!!E.metalnessMap,T=!!E.roughnessMap,$=E.anisotropy>0,de=E.clearcoat>0,_e=E.dispersion>0,fe=E.iridescence>0,je=E.sheen>0,Ae=E.transmission>0,Fe=$&&!!E.anisotropyMap,pt=de&&!!E.clearcoatMap,Me=de&&!!E.clearcoatNormalMap,Oe=de&&!!E.clearcoatRoughnessMap,tt=fe&&!!E.iridescenceMap,Je=fe&&!!E.iridescenceThicknessMap,Be=je&&!!E.sheenColorMap,ft=je&&!!E.sheenRoughnessMap,it=!!E.specularMap,Mt=!!E.specularColorMap,H=!!E.specularIntensityMap,De=Ae&&!!E.transmissionMap,ae=Ae&&!!E.thicknessMap,he=!!E.gradientMap,Ce=!!E.alphaMap,Ne=E.alphaTest>0,dt=!!E.alphaHash,kt=!!E.extensions;let on=xr;E.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(on=s.toneMapping);const mt={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Z,fragmentShader:le,defines:E.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:et,batchingColor:et&&ue._colorsTexture!==null,instancing:Le,instancingColor:Le&&ue.instanceColor!==null,instancingMorph:Le&&ue.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Er,alphaToCoverage:!!E.alphaToCoverage,map:gt,matcap:ut,envMap:k,envMapMode:k&&D.mapping,envMapCubeUVHeight:ie,aoMap:sn,lightMap:ct,bumpMap:ht,normalMap:$e,displacementMap:S&&wt,emissiveMap:Qe,normalMapObjectSpace:$e&&E.normalMapType===A0,normalMapTangentSpace:$e&&E.normalMapType===Sg,metalnessMap:b,roughnessMap:T,anisotropy:$,anisotropyMap:Fe,clearcoat:de,clearcoatMap:pt,clearcoatNormalMap:Me,clearcoatRoughnessMap:Oe,dispersion:_e,iridescence:fe,iridescenceMap:tt,iridescenceThicknessMap:Je,sheen:je,sheenColorMap:Be,sheenRoughnessMap:ft,specularMap:it,specularColorMap:Mt,specularIntensityMap:H,transmission:Ae,transmissionMap:De,thicknessMap:ae,gradientMap:he,opaque:E.transparent===!1&&E.blending===Vs&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Ne,alphaHash:dt,combine:E.combine,mapUv:gt&&_(E.map.channel),aoMapUv:sn&&_(E.aoMap.channel),lightMapUv:ct&&_(E.lightMap.channel),bumpMapUv:ht&&_(E.bumpMap.channel),normalMapUv:$e&&_(E.normalMap.channel),displacementMapUv:wt&&_(E.displacementMap.channel),emissiveMapUv:Qe&&_(E.emissiveMap.channel),metalnessMapUv:b&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:Fe&&_(E.anisotropyMap.channel),clearcoatMapUv:pt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(E.sheenRoughnessMap.channel),specularMapUv:it&&_(E.specularMap.channel),specularColorMapUv:Mt&&_(E.specularColorMap.channel),specularIntensityMapUv:H&&_(E.specularIntensityMap.channel),transmissionMapUv:De&&_(E.transmissionMap.channel),thicknessMapUv:ae&&_(E.thicknessMap.channel),alphaMapUv:Ce&&_(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&($e||$),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!re.attributes.uv&&(gt||Ce),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:x,skinning:ue.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&oe.length>0,shadowMapType:s.shadowMap.type,toneMapping:on,decodeVideoTexture:gt&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ki,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return mt.vertexUv1s=m.has(1),mt.vertexUv2s=m.has(2),mt.vertexUv3s=m.has(3),m.clear(),mt}function U(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const oe in E.defines)R.push(oe),R.push(E.defines[oe]);return E.isRawShaderMaterial===!1&&(P(R,E),N(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function P(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function N(E,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.alphaToCoverage&&d.enable(20),E.push(d.mask)}function q(E){const R=A[E.type];let oe;if(R){const ne=gi[R];oe=ix.clone(ne.uniforms)}else oe=E.uniforms;return oe}function z(E,R){let oe;for(let ne=0,ue=g.length;ne<ue;ne++){const pe=g[ne];if(pe.cacheKey===R){oe=pe,++oe.usedTimes;break}}return oe===void 0&&(oe=new gE(s,R,E,c),g.push(oe)),oe}function F(E){if(--E.usedTimes===0){const R=g.indexOf(E);g[R]=g[g.length-1],g.pop(),E.destroy()}}function K(E){p.remove(E)}function ye(){p.dispose()}return{getParameters:v,getProgramCacheKey:U,getUniforms:q,acquireProgram:z,releaseProgram:F,releaseShaderCache:K,programs:g,dispose:ye}}function SE(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,S,w,A,_){let v=s[e];return v===void 0?(v={id:y.id,object:y,geometry:x,material:S,groupOrder:w,renderOrder:y.renderOrder,z:A,group:_},s[e]=v):(v.id=y.id,v.object=y,v.geometry=x,v.material=S,v.groupOrder=w,v.renderOrder=y.renderOrder,v.z=A,v.group=_),e++,v}function d(y,x,S,w,A,_){const v=f(y,x,S,w,A,_);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function p(y,x,S,w,A,_){const v=f(y,x,S,w,A,_);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function m(y,x){n.length>1&&n.sort(y||ME),r.length>1&&r.sort(x||zm),a.length>1&&a.sort(x||zm)}function g(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:p,finish:g,sort:m}}function EE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let f;return c===void 0?(f=new Hm,s.set(r,[f])):a>=c.length?(f=new Hm,c.push(f)):f=c[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new lt};break;case"SpotLight":n={position:new j,direction:new j,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=n,n}}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let AE=0;function CE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function RE(s){const e=new TE,n=wE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new j);const a=new j,c=new Ot,f=new Ot;function d(m){let g=0,y=0,x=0;for(let ye=0;ye<9;ye++)r.probe[ye].set(0,0,0);let S=0,w=0,A=0,_=0,v=0,U=0,P=0,N=0,q=0,z=0,F=0;m.sort(CE);for(let ye=0,E=m.length;ye<E;ye++){const R=m[ye],oe=R.color,ne=R.intensity,ue=R.distance,pe=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)g+=oe.r*ne,y+=oe.g*ne,x+=oe.b*ne;else if(R.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(R.sh.coefficients[re],ne);F++}else if(R.isDirectionalLight){const re=e.get(R);if(re.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,D=n.get(R);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,r.directionalShadow[S]=D,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=R.shadow.matrix,U++}r.directional[S]=re,S++}else if(R.isSpotLight){const re=e.get(R);re.position.setFromMatrixPosition(R.matrixWorld),re.color.copy(oe).multiplyScalar(ne),re.distance=ue,re.coneCos=Math.cos(R.angle),re.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),re.decay=R.decay,r.spot[A]=re;const V=R.shadow;if(R.map&&(r.spotLightMap[q]=R.map,q++,V.updateMatrices(R),R.castShadow&&z++),r.spotLightMatrix[A]=V.matrix,R.castShadow){const D=n.get(R);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,r.spotShadow[A]=D,r.spotShadowMap[A]=pe,N++}A++}else if(R.isRectAreaLight){const re=e.get(R);re.color.copy(oe).multiplyScalar(ne),re.halfWidth.set(R.width*.5,0,0),re.halfHeight.set(0,R.height*.5,0),r.rectArea[_]=re,_++}else if(R.isPointLight){const re=e.get(R);if(re.color.copy(R.color).multiplyScalar(R.intensity),re.distance=R.distance,re.decay=R.decay,R.castShadow){const V=R.shadow,D=n.get(R);D.shadowIntensity=V.intensity,D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,D.shadowCameraNear=V.camera.near,D.shadowCameraFar=V.camera.far,r.pointShadow[w]=D,r.pointShadowMap[w]=pe,r.pointShadowMatrix[w]=R.shadow.matrix,P++}r.point[w]=re,w++}else if(R.isHemisphereLight){const re=e.get(R);re.skyColor.copy(R.color).multiplyScalar(ne),re.groundColor.copy(R.groundColor).multiplyScalar(ne),r.hemi[v]=re,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==S||K.pointLength!==w||K.spotLength!==A||K.rectAreaLength!==_||K.hemiLength!==v||K.numDirectionalShadows!==U||K.numPointShadows!==P||K.numSpotShadows!==N||K.numSpotMaps!==q||K.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=_,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+q-z,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,K.directionalLength=S,K.pointLength=w,K.spotLength=A,K.rectAreaLength=_,K.hemiLength=v,K.numDirectionalShadows=U,K.numPointShadows=P,K.numSpotShadows=N,K.numSpotMaps=q,K.numLightProbes=F,r.version=AE++)}function p(m,g){let y=0,x=0,S=0,w=0,A=0;const _=g.matrixWorldInverse;for(let v=0,U=m.length;v<U;v++){const P=m[v];if(P.isDirectionalLight){const N=r.directional[y];N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(_),y++}else if(P.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(_),S++}else if(P.isRectAreaLight){const N=r.rectArea[w];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(_),f.identity(),c.copy(P.matrixWorld),c.premultiply(_),f.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),w++}else if(P.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(_),x++}else if(P.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(_),A++}}}return{setup:d,setupView:p,state:r}}function Vm(s){const e=new RE(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function PE(s){let e=new WeakMap;function n(a,c=0){const f=e.get(a);let d;return f===void 0?(d=new Vm(s),e.set(a,[d])):c>=f.length?(d=new Vm(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class bE extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NE(s,e,n){let r=new ld;const a=new rt,c=new rt,f=new Vt,d=new bE({depthPacking:w0}),p=new LE,m={},g=n.maxTextureSize,y={[Sr]:Pn,[Pn]:Sr,[ki]:ki},x=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:DE,fragmentShader:IE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new xi;w.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Kn(w,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lg;let v=this.type;this.render=function(z,F,K){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||z.length===0)return;const ye=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(vr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ne=v!==Fi&&this.type===Fi,ue=v===Fi&&this.type!==Fi;for(let pe=0,re=z.length;pe<re;pe++){const V=z[pe],D=V.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;a.copy(D.mapSize);const ie=D.getFrameExtents();if(a.multiply(ie),c.copy(D.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(c.x=Math.floor(g/ie.x),a.x=c.x*ie.x,D.mapSize.x=c.x),a.y>g&&(c.y=Math.floor(g/ie.y),a.y=c.y*ie.y,D.mapSize.y=c.y)),D.map===null||ne===!0||ue===!0){const I=this.type!==Fi?{minFilter:qn,magFilter:qn}:{};D.map!==null&&D.map.dispose(),D.map=new $r(a.x,a.y,I),D.map.texture.name=V.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const J=D.getViewportCount();for(let I=0;I<J;I++){const se=D.getViewport(I);f.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),oe.viewport(f),D.updateMatrices(V,I),r=D.getFrustum(),N(F,K,D.camera,V,this.type)}D.isPointLightShadow!==!0&&this.type===Fi&&U(D,K),D.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(ye,E,R)};function U(z,F){const K=e.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,K,x,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,K,S,A,null)}function P(z,F,K,ye){let E=null;const R=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(R!==void 0)E=R;else if(E=K.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const oe=E.uuid,ne=F.uuid;let ue=m[oe];ue===void 0&&(ue={},m[oe]=ue);let pe=ue[ne];pe===void 0&&(pe=E.clone(),ue[ne]=pe,F.addEventListener("dispose",q)),E=pe}if(E.visible=F.visible,E.wireframe=F.wireframe,ye===Fi?E.side=F.shadowSide!==null?F.shadowSide:F.side:E.side=F.shadowSide!==null?F.shadowSide:y[F.side],E.alphaMap=F.alphaMap,E.alphaTest=F.alphaTest,E.map=F.map,E.clipShadows=F.clipShadows,E.clippingPlanes=F.clippingPlanes,E.clipIntersection=F.clipIntersection,E.displacementMap=F.displacementMap,E.displacementScale=F.displacementScale,E.displacementBias=F.displacementBias,E.wireframeLinewidth=F.wireframeLinewidth,E.linewidth=F.linewidth,K.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const oe=s.properties.get(E);oe.light=K}return E}function N(z,F,K,ye,E){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&E===Fi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const ne=e.update(z),ue=z.material;if(Array.isArray(ue)){const pe=ne.groups;for(let re=0,V=pe.length;re<V;re++){const D=pe[re],ie=ue[D.materialIndex];if(ie&&ie.visible){const J=P(z,ie,ye,E);z.onBeforeShadow(s,z,F,K,ne,J,D),s.renderBufferDirect(K,null,ne,J,z,D),z.onAfterShadow(s,z,F,K,ne,J,D)}}}else if(ue.visible){const pe=P(z,ue,ye,E);z.onBeforeShadow(s,z,F,K,ne,pe,null),s.renderBufferDirect(K,null,ne,pe,z,null),z.onAfterShadow(s,z,F,K,ne,pe,null)}}const oe=z.children;for(let ne=0,ue=oe.length;ne<ue;ne++)N(oe[ne],F,K,ye,E)}function q(z){z.target.removeEventListener("dispose",q);for(const K in m){const ye=m[K],E=z.target.uuid;E in ye&&(ye[E].dispose(),delete ye[E])}}}const UE={[cf]:uf,[ff]:pf,[df]:mf,[Xs]:hf,[uf]:cf,[pf]:ff,[mf]:df,[hf]:Xs};function FE(s){function e(){let H=!1;const De=new Vt;let ae=null;const he=new Vt(0,0,0,0);return{setMask:function(Ce){ae!==Ce&&!H&&(s.colorMask(Ce,Ce,Ce,Ce),ae=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,Ne,dt,kt,on){on===!0&&(Ce*=kt,Ne*=kt,dt*=kt),De.set(Ce,Ne,dt,kt),he.equals(De)===!1&&(s.clearColor(Ce,Ne,dt,kt),he.copy(De))},reset:function(){H=!1,ae=null,he.set(-1,0,0,0)}}}function n(){let H=!1,De=!1,ae=null,he=null,Ce=null;return{setReversed:function(Ne){De=Ne},setTest:function(Ne){Ne?xe(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(Ne){ae!==Ne&&!H&&(s.depthMask(Ne),ae=Ne)},setFunc:function(Ne){if(De&&(Ne=UE[Ne]),he!==Ne){switch(Ne){case cf:s.depthFunc(s.NEVER);break;case uf:s.depthFunc(s.ALWAYS);break;case ff:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case df:s.depthFunc(s.EQUAL);break;case hf:s.depthFunc(s.GEQUAL);break;case pf:s.depthFunc(s.GREATER);break;case mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Ne}},setLocked:function(Ne){H=Ne},setClear:function(Ne){Ce!==Ne&&(s.clearDepth(Ne),Ce=Ne)},reset:function(){H=!1,ae=null,he=null,Ce=null}}}function r(){let H=!1,De=null,ae=null,he=null,Ce=null,Ne=null,dt=null,kt=null,on=null;return{setTest:function(mt){H||(mt?xe(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(mt){De!==mt&&!H&&(s.stencilMask(mt),De=mt)},setFunc:function(mt,Qt,Bn){(ae!==mt||he!==Qt||Ce!==Bn)&&(s.stencilFunc(mt,Qt,Bn),ae=mt,he=Qt,Ce=Bn)},setOp:function(mt,Qt,Bn){(Ne!==mt||dt!==Qt||kt!==Bn)&&(s.stencilOp(mt,Qt,Bn),Ne=mt,dt=Qt,kt=Bn)},setLocked:function(mt){H=mt},setClear:function(mt){on!==mt&&(s.clearStencil(mt),on=mt)},reset:function(){H=!1,De=null,ae=null,he=null,Ce=null,Ne=null,dt=null,kt=null,on=null}}}const a=new e,c=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},g={},y=new WeakMap,x=[],S=null,w=!1,A=null,_=null,v=null,U=null,P=null,N=null,q=null,z=new lt(0,0,0),F=0,K=!1,ye=null,E=null,R=null,oe=null,ne=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pe=!1,re=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(V)[1]),pe=re>=1):V.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),pe=re>=2);let D=null,ie={};const J=s.getParameter(s.SCISSOR_BOX),I=s.getParameter(s.VIEWPORT),se=new Vt().fromArray(J),Pe=new Vt().fromArray(I);function Z(H,De,ae,he){const Ce=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(H,Ne),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<ae;dt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(De+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ne}const le={};le[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),c.setFunc(Xs),ct(!1),ht($p),xe(s.CULL_FACE),k(vr);function xe(H){m[H]!==!0&&(s.enable(H),m[H]=!0)}function Se(H){m[H]!==!1&&(s.disable(H),m[H]=!1)}function be(H,De){return g[H]!==De?(s.bindFramebuffer(H,De),g[H]=De,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Le(H,De){let ae=x,he=!1;if(H){ae=y.get(De),ae===void 0&&(ae=[],y.set(De,ae));const Ce=H.textures;if(ae.length!==Ce.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,dt=Ce.length;Ne<dt;Ne++)ae[Ne]=s.COLOR_ATTACHMENT0+Ne;ae.length=Ce.length,he=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,he=!0);he&&s.drawBuffers(ae)}function et(H){return S!==H?(s.useProgram(H),S=H,!0):!1}const gt={[Wr]:s.FUNC_ADD,[Zv]:s.FUNC_SUBTRACT,[Qv]:s.FUNC_REVERSE_SUBTRACT};gt[Jv]=s.MIN,gt[e0]=s.MAX;const ut={[t0]:s.ZERO,[n0]:s.ONE,[i0]:s.SRC_COLOR,[af]:s.SRC_ALPHA,[c0]:s.SRC_ALPHA_SATURATE,[a0]:s.DST_COLOR,[s0]:s.DST_ALPHA,[r0]:s.ONE_MINUS_SRC_COLOR,[lf]:s.ONE_MINUS_SRC_ALPHA,[l0]:s.ONE_MINUS_DST_COLOR,[o0]:s.ONE_MINUS_DST_ALPHA,[u0]:s.CONSTANT_COLOR,[f0]:s.ONE_MINUS_CONSTANT_COLOR,[d0]:s.CONSTANT_ALPHA,[h0]:s.ONE_MINUS_CONSTANT_ALPHA};function k(H,De,ae,he,Ce,Ne,dt,kt,on,mt){if(H===vr){w===!0&&(Se(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),H!==$v){if(H!==A||mt!==K){if((_!==Wr||P!==Wr)&&(s.blendEquation(s.FUNC_ADD),_=Wr,P=Wr),mt)switch(H){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.ONE,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,U=null,N=null,q=null,z.set(0,0,0),F=0,A=H,K=mt}return}Ce=Ce||De,Ne=Ne||ae,dt=dt||he,(De!==_||Ce!==P)&&(s.blendEquationSeparate(gt[De],gt[Ce]),_=De,P=Ce),(ae!==v||he!==U||Ne!==N||dt!==q)&&(s.blendFuncSeparate(ut[ae],ut[he],ut[Ne],ut[dt]),v=ae,U=he,N=Ne,q=dt),(kt.equals(z)===!1||on!==F)&&(s.blendColor(kt.r,kt.g,kt.b,on),z.copy(kt),F=on),A=H,K=!1}function sn(H,De){H.side===ki?Se(s.CULL_FACE):xe(s.CULL_FACE);let ae=H.side===Pn;De&&(ae=!ae),ct(ae),H.blending===Vs&&H.transparent===!1?k(vr):k(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const he=H.stencilWrite;f.setTest(he),he&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){ye!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),ye=H)}function ht(H){H!==Yv?(xe(s.CULL_FACE),H!==E&&(H===$p?s.cullFace(s.BACK):H===qv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),E=H}function $e(H){H!==R&&(pe&&s.lineWidth(H),R=H)}function wt(H,De,ae){H?(xe(s.POLYGON_OFFSET_FILL),(oe!==De||ne!==ae)&&(s.polygonOffset(De,ae),oe=De,ne=ae)):Se(s.POLYGON_OFFSET_FILL)}function Qe(H){H?xe(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+ue-1),D!==H&&(s.activeTexture(H),D=H)}function T(H,De,ae){ae===void 0&&(D===null?ae=s.TEXTURE0+ue-1:ae=D);let he=ie[ae];he===void 0&&(he={type:void 0,texture:void 0},ie[ae]=he),(he.type!==H||he.texture!==De)&&(D!==ae&&(s.activeTexture(ae),D=ae),s.bindTexture(H,De||le[H]),he.type=H,he.texture=De)}function $(){const H=ie[D];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){se.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),se.copy(H))}function Be(H){Pe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Pe.copy(H))}function ft(H,De){let ae=p.get(De);ae===void 0&&(ae=new WeakMap,p.set(De,ae));let he=ae.get(H);he===void 0&&(he=s.getUniformBlockIndex(De,H.name),ae.set(H,he))}function it(H,De){const he=p.get(De).get(H);d.get(De)!==he&&(s.uniformBlockBinding(De,he,H.__bindingPointIndex),d.set(De,he))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},D=null,ie={},g={},y=new WeakMap,x=[],S=null,w=!1,A=null,_=null,v=null,U=null,P=null,N=null,q=null,z=new lt(0,0,0),F=0,K=!1,ye=null,E=null,R=null,oe=null,ne=null,se.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:xe,disable:Se,bindFramebuffer:be,drawBuffers:Le,useProgram:et,setBlending:k,setMaterial:sn,setFlipSided:ct,setCullFace:ht,setLineWidth:$e,setPolygonOffset:wt,setScissorTest:Qe,activeTexture:b,bindTexture:T,unbindTexture:$,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:tt,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:pt,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:je,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:Je,viewport:Be,reset:Mt}}function Gm(s,e,n,r){const a=OE(r);switch(n){case pg:return s*e;case gg:return s*e;case _g:return s*e*2;case vg:return s*e/a.components*a.byteLength;case nd:return s*e/a.components*a.byteLength;case xg:return s*e*2/a.components*a.byteLength;case id:return s*e*2/a.components*a.byteLength;case mg:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case rd:return s*e*4/a.components*a.byteLength;case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:case Ef:return Math.max(s,16)*Math.max(e,8)/4;case yf:case Mf:return Math.max(s,8)*Math.max(e,8)/2;case Tf:case wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Hf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yg:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OE(s){switch(s){case Hi:case fg:return{byteLength:1,components:1};case Wo:case dg:case Xo:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case Kr:case Jf:case Bi:return{byteLength:4,components:1};case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function kE(s,e,n,r,a,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new rt,g=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,T){return S?new OffscreenCanvas(b,T):Ol("canvas")}function A(b,T,$){let de=1;const _e=Qe(b);if((_e.width>$||_e.height>$)&&(de=$/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const fe=Math.floor(de*_e.width),je=Math.floor(de*_e.height);y===void 0&&(y=w(fe,je));const Ae=T?w(fe,je):y;return Ae.width=fe,Ae.height=je,Ae.getContext("2d").drawImage(b,0,0,fe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+je+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function _(b){return b.generateMipmaps&&b.minFilter!==qn&&b.minFilter!==ai}function v(b){s.generateMipmap(b)}function U(b,T,$,de,_e=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe=T;if(T===s.RED&&($===s.FLOAT&&(fe=s.R32F),$===s.HALF_FLOAT&&(fe=s.R16F),$===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.R8UI),$===s.UNSIGNED_SHORT&&(fe=s.R16UI),$===s.UNSIGNED_INT&&(fe=s.R32UI),$===s.BYTE&&(fe=s.R8I),$===s.SHORT&&(fe=s.R16I),$===s.INT&&(fe=s.R32I)),T===s.RG&&($===s.FLOAT&&(fe=s.RG32F),$===s.HALF_FLOAT&&(fe=s.RG16F),$===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RG8UI),$===s.UNSIGNED_SHORT&&(fe=s.RG16UI),$===s.UNSIGNED_INT&&(fe=s.RG32UI),$===s.BYTE&&(fe=s.RG8I),$===s.SHORT&&(fe=s.RG16I),$===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),$===s.UNSIGNED_INT&&(fe=s.RGB32UI),$===s.BYTE&&(fe=s.RGB8I),$===s.SHORT&&(fe=s.RGB16I),$===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),$===s.UNSIGNED_INT&&(fe=s.RGBA32UI),$===s.BYTE&&(fe=s.RGBA8I),$===s.SHORT&&(fe=s.RGBA16I),$===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const je=_e?Il:Et.getTransfer(de);$===s.FLOAT&&(fe=s.RGBA32F),$===s.HALF_FLOAT&&(fe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(fe=je===It?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(b,T){let $;return b?T===null||T===Kr||T===qs?$=s.DEPTH24_STENCIL8:T===Bi?$=s.DEPTH32F_STENCIL8:T===Wo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Kr||T===qs?$=s.DEPTH_COMPONENT24:T===Bi?$=s.DEPTH_COMPONENT32F:T===Wo&&($=s.DEPTH_COMPONENT16),$}function N(b,T){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==qn&&b.minFilter!==ai?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function q(b){const T=b.target;T.removeEventListener("dispose",q),F(T),T.isVideoTexture&&g.delete(T)}function z(b){const T=b.target;T.removeEventListener("dispose",z),ye(T)}function F(b){const T=r.get(b);if(T.__webglInit===void 0)return;const $=b.source,de=x.get($);if(de){const _e=de[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&K(b),Object.keys(de).length===0&&x.delete($)}r.remove(b)}function K(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const $=b.source,de=x.get($);delete de[T.__cacheKey],f.memory.textures--}function ye(b){const T=r.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let _e=0;_e<T.__webglFramebuffer[de].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[de][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=b.textures;for(let de=0,_e=$.length;de<_e;de++){const fe=r.get($[de]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove($[de])}r.remove(b)}let E=0;function R(){E=0}function oe(){const b=E;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),E+=1,b}function ne(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function ue(b,T){const $=r.get(b);if(b.isVideoTexture&&$e(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const de=b.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe($,b,T);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function pe(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Pe($,b,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function re(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Pe($,b,T);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function V(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Z($,b,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}const D={[vf]:s.REPEAT,[jr]:s.CLAMP_TO_EDGE,[xf]:s.MIRRORED_REPEAT},ie={[qn]:s.NEAREST,[E0]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[Cu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},J={[C0]:s.NEVER,[I0]:s.ALWAYS,[R0]:s.LESS,[Mg]:s.LEQUAL,[P0]:s.EQUAL,[D0]:s.GEQUAL,[b0]:s.GREATER,[L0]:s.NOTEQUAL};function I(b,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ai||T.magFilter===Cu||T.magFilter===el||T.magFilter===Yr||T.minFilter===ai||T.minFilter===Cu||T.minFilter===el||T.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,D[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,D[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,D[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ie[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qn||T.minFilter!==el&&T.minFilter!==Yr||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function se(b,T){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",q));const de=T.source;let _e=x.get(de);_e===void 0&&(_e={},x.set(de,_e));const fe=ne(T);if(fe!==b.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),_e[fe].usedTimes++;const je=_e[b.__cacheKey];je!==void 0&&(_e[b.__cacheKey].usedTimes--,je.usedTimes===0&&K(T)),b.__cacheKey=fe,b.__webglTexture=_e[fe].texture}return $}function Pe(b,T,$){let de=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=s.TEXTURE_3D);const _e=se(b,T),fe=T.source;n.bindTexture(de,b.__webglTexture,s.TEXTURE0+$);const je=r.get(fe);if(fe.version!==je.__version||_e===!0){n.activeTexture(s.TEXTURE0+$);const Ae=Et.getPrimaries(Et.workingColorSpace),Fe=T.colorSpace===gr?null:Et.getPrimaries(T.colorSpace),pt=T.colorSpace===gr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Me=A(T.image,!1,a.maxTextureSize);Me=wt(T,Me);const Oe=c.convert(T.format,T.colorSpace),tt=c.convert(T.type);let Je=U(T.internalFormat,Oe,tt,T.colorSpace,T.isVideoTexture);I(de,T);let Be;const ft=T.mipmaps,it=T.isVideoTexture!==!0,Mt=je.__version===void 0||_e===!0,H=fe.dataReady,De=N(T,Me);if(T.isDepthTexture)Je=P(T.format===Ks,T.type),Mt&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,tt,null));else if(T.isDataTexture)if(ft.length>0){it&&Mt&&n.texStorage2D(s.TEXTURE_2D,De,Je,ft[0].width,ft[0].height);for(let ae=0,he=ft.length;ae<he;ae++)Be=ft[ae],it?H&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,Oe,tt,Be.data):n.texImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,Oe,tt,Be.data);T.generateMipmaps=!1}else it?(Mt&&n.texStorage2D(s.TEXTURE_2D,De,Je,Me.width,Me.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,tt,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,tt,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Je,ft[0].width,ft[0].height,Me.depth);for(let ae=0,he=ft.length;ae<he;ae++)if(Be=ft[ae],T.format!==ci)if(Oe!==null)if(it){if(H)if(T.layerUpdates.size>0){const Ce=Gm(Be.width,Be.height,T.format,T.type);for(const Ne of T.layerUpdates){const dt=Be.data.subarray(Ne*Ce/Be.data.BYTES_PER_ELEMENT,(Ne+1)*Ce/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ne,Be.width,Be.height,1,Oe,dt,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Me.depth,Oe,Be.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Je,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Me.depth,Oe,tt,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,Je,Be.width,Be.height,Me.depth,0,Oe,tt,Be.data)}else{it&&Mt&&n.texStorage2D(s.TEXTURE_2D,De,Je,ft[0].width,ft[0].height);for(let ae=0,he=ft.length;ae<he;ae++)Be=ft[ae],T.format!==ci?Oe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,Oe,tt,Be.data):n.texImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,Oe,tt,Be.data)}else if(T.isDataArrayTexture)if(it){if(Mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Je,Me.width,Me.height,Me.depth),H)if(T.layerUpdates.size>0){const ae=Gm(Me.width,Me.height,T.format,T.type);for(const he of T.layerUpdates){const Ce=Me.data.subarray(he*ae/Me.data.BYTES_PER_ELEMENT,(he+1)*ae/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Oe,tt,Ce)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(T.isData3DTexture)it?(Mt&&n.texStorage3D(s.TEXTURE_3D,De,Je,Me.width,Me.height,Me.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,tt,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,tt,Me.data);else if(T.isFramebufferTexture){if(Mt)if(it)n.texStorage2D(s.TEXTURE_2D,De,Je,Me.width,Me.height);else{let ae=Me.width,he=Me.height;for(let Ce=0;Ce<De;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,Je,ae,he,0,Oe,tt,null),ae>>=1,he>>=1}}else if(ft.length>0){if(it&&Mt){const ae=Qe(ft[0]);n.texStorage2D(s.TEXTURE_2D,De,Je,ae.width,ae.height)}for(let ae=0,he=ft.length;ae<he;ae++)Be=ft[ae],it?H&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe,tt,Be):n.texImage2D(s.TEXTURE_2D,ae,Je,Oe,tt,Be);T.generateMipmaps=!1}else if(it){if(Mt){const ae=Qe(Me);n.texStorage2D(s.TEXTURE_2D,De,Je,ae.width,ae.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,tt,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,tt,Me);_(T)&&v(de),je.__version=fe.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Z(b,T,$){if(T.image.length!==6)return;const de=se(b,T),_e=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+$);const fe=r.get(_e);if(_e.version!==fe.__version||de===!0){n.activeTexture(s.TEXTURE0+$);const je=Et.getPrimaries(Et.workingColorSpace),Ae=T.colorSpace===gr?null:Et.getPrimaries(T.colorSpace),Fe=T.colorSpace===gr||je===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!pt&&!Me?Oe[he]=A(T.image[he],!0,a.maxCubemapSize):Oe[he]=Me?T.image[he].image:T.image[he],Oe[he]=wt(T,Oe[he]);const tt=Oe[0],Je=c.convert(T.format,T.colorSpace),Be=c.convert(T.type),ft=U(T.internalFormat,Je,Be,T.colorSpace),it=T.isVideoTexture!==!0,Mt=fe.__version===void 0||de===!0,H=_e.dataReady;let De=N(T,tt);I(s.TEXTURE_CUBE_MAP,T);let ae;if(pt){it&&Mt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ft,tt.width,tt.height);for(let he=0;he<6;he++){ae=Oe[he].mipmaps;for(let Ce=0;Ce<ae.length;Ce++){const Ne=ae[Ce];T.format!==ci?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ne.width,Ne.height,Je,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,ft,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ne.width,Ne.height,Je,Be,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,ft,Ne.width,Ne.height,0,Je,Be,Ne.data)}}}else{if(ae=T.mipmaps,it&&Mt){ae.length>0&&De++;const he=Qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Me){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,Je,Be,Oe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Oe[he].width,Oe[he].height,0,Je,Be,Oe[he].data);for(let Ce=0;Ce<ae.length;Ce++){const dt=ae[Ce].image[he].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,dt.width,dt.height,Je,Be,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,ft,dt.width,dt.height,0,Je,Be,dt.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Be,Oe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Je,Be,Oe[he]);for(let Ce=0;Ce<ae.length;Ce++){const Ne=ae[Ce];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,Je,Be,Ne.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,ft,Je,Be,Ne.image[he])}}}_(T)&&v(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function le(b,T,$,de,_e,fe){const je=c.convert($.format,$.colorSpace),Ae=c.convert($.type),Fe=U($.internalFormat,je,Ae,$.colorSpace);if(!r.get(T).__hasExternalTextures){const Me=Math.max(1,T.width>>fe),Oe=Math.max(1,T.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,Fe,Me,Oe,T.depth,0,je,Ae,null):n.texImage2D(_e,fe,Fe,Me,Oe,0,je,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,_e,r.get($).__webglTexture,0,ct(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,_e,r.get($).__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(b,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const de=T.depthTexture,_e=de&&de.isDepthTexture?de.type:null,fe=P(T.stencilBuffer,_e),je=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ct(T);ht(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,b)}else{const de=T.textures;for(let _e=0;_e<de.length;_e++){const fe=de[_e],je=c.convert(fe.format,fe.colorSpace),Ae=c.convert(fe.type),Fe=U(fe.internalFormat,je,Ae,fe.colorSpace),pt=ct(T);$&&ht(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Fe,T.width,T.height):ht(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue(T.depthTexture,0);const de=r.get(T.depthTexture).__webglTexture,_e=ct(T);if(T.depthTexture.format===Gs)ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(T.depthTexture.format===Ks)ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function be(b){const T=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const de=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=de}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Se(T.__webglFramebuffer,b)}else if($){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[de],b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,b,!1);else{const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(b,T,$){const de=r.get(b);T!==void 0&&le(de.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&be(b)}function et(b){const T=b.texture,$=r.get(b),de=r.get(T);b.addEventListener("dispose",z);const _e=b.textures,fe=b.isWebGLCubeRenderTarget===!0,je=_e.length>1;if(je||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=T.version,f.memory.textures++),fe){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)$.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else $.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const pt=r.get(_e[Ae]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ht(b)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];$.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const pt=c.convert(Fe.format,Fe.colorSpace),Me=c.convert(Fe.type),Oe=U(Fe.internalFormat,pt,Me,Fe.colorSpace,b.isXRRenderTarget===!0),tt=ct(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),xe($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),I(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)le($.__webglFramebuffer[Ae][Fe],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else le($.__webglFramebuffer[Ae],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);_(T)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const pt=_e[Ae],Me=r.get(pt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),I(s.TEXTURE_2D,pt),le($.__webglFramebuffer,b,pt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),_(pt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,de.__webglTexture),I(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)le($.__webglFramebuffer[Fe],b,T,s.COLOR_ATTACHMENT0,Ae,Fe);else le($.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,Ae,0);_(T)&&v(Ae),n.unbindTexture()}b.depthBuffer&&be(b)}function gt(b){const T=b.textures;for(let $=0,de=T.length;$<de;$++){const _e=T[$];if(_(_e)){const fe=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,je=r.get(_e).__webglTexture;n.bindTexture(fe,je),v(fe),n.unbindTexture()}}}const ut=[],k=[];function sn(b){if(b.samples>0){if(ht(b)===!1){const T=b.textures,$=b.width,de=b.height;let _e=s.COLOR_BUFFER_BIT;const fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(b),Ae=T.length>1;if(Ae)for(let Fe=0;Fe<T.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const pt=r.get(T[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,$,de,0,0,$,de,_e,s.NEAREST),p===!0&&(ut.length=0,k.length=0,ut.push(s.COLOR_ATTACHMENT0+Fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ut.push(fe),k.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<T.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const pt=r.get(T[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,pt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ct(b){return Math.min(a.maxSamples,b.samples)}function ht(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(b){const T=f.render.frame;g.get(b)!==T&&(g.set(b,T),b.update())}function wt(b,T){const $=b.colorSpace,de=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Er&&$!==gr&&(Et.getTransfer($)===It?(de!==ci||_e!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=R,this.setTexture2D=ue,this.setTexture2DArray=pe,this.setTexture3D=re,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=et,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ht}function BE(s,e){function n(r,a=gr){let c;const f=Et.getTransfer(a);if(r===Hi)return s.UNSIGNED_BYTE;if(r===ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fg)return s.BYTE;if(r===dg)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Jf)return s.INT;if(r===Kr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Xo)return s.HALF_FLOAT;if(r===pg)return s.ALPHA;if(r===mg)return s.RGB;if(r===ci)return s.RGBA;if(r===gg)return s.LUMINANCE;if(r===_g)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===vg)return s.RED;if(r===nd)return s.RED_INTEGER;if(r===xg)return s.RG;if(r===id)return s.RG_INTEGER;if(r===rd)return s.RGBA_INTEGER;if(r===Tl||r===wl||r===Al||r===Cl)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Tl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Tl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===Sf||r===Mf||r===Ef)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===yf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ef)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tf||r===wf||r===Af)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Tf||r===wf)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Af)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cf||r===Rf||r===Pf||r===bf||r===Lf||r===Df||r===If||r===Nf||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Cf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Df)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===If)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ff)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Of)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zf)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===Hf||r===Vf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rl)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yg||r===Gf||r===Wf||r===Xf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Gf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class zE extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qr extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const _=n.getJointPose(A,r),v=this._getHandJoint(m,A);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new qr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const VE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new bn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:VE,fragmentShader:GE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new Zs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XE extends Qr{constructor(e,n){super();const r=this;let a=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,y=null,x=null,S=null,w=null;const A=new WE,_=n.getContextAttributes();let v=null,U=null;const P=[],N=[],q=new rt;let z=null;const F=new Yn;F.layers.enable(1),F.viewport=new Vt;const K=new Yn;K.layers.enable(2),K.viewport=new Vt;const ye=[F,K],E=new zE;E.layers.enable(1),E.layers.enable(2);let R=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=P[Z];return le===void 0&&(le=new nf,P[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=P[Z];return le===void 0&&(le=new nf,P[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=P[Z];return le===void 0&&(le=new nf,P[Z]=le),le.getHandSpace()};function ne(Z){const le=N.indexOf(Z.inputSource);if(le===-1)return;const xe=P[le];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,m||f),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ue(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<P.length;Z++){const le=N[Z];le!==null&&(N[Z]=null,P[Z].disconnect(le))}R=null,oe=null,A.reset(),e.setRenderTarget(v),S=null,x=null,y=null,a=null,U=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",pe),_.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,le),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new $r(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let le=null,xe=null,Se=null;_.depth&&(Se=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=_.stencil?Ks:Gs,xe=_.stencil?qs:Kr);const be={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:c};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(be),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new $r(x.textureWidth,x.textureHeight,{format:ci,type:Hi,depthTexture:new Ng(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Pe.setContext(a),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(Z){for(let le=0;le<Z.removed.length;le++){const xe=Z.removed[le],Se=N.indexOf(xe);Se>=0&&(N[Se]=null,P[Se].disconnect(xe))}for(let le=0;le<Z.added.length;le++){const xe=Z.added[le];let Se=N.indexOf(xe);if(Se===-1){for(let Le=0;Le<P.length;Le++)if(Le>=N.length){N.push(xe),Se=Le;break}else if(N[Le]===null){N[Le]=xe,Se=Le;break}if(Se===-1)break}const be=P[Se];be&&be.connect(xe)}}const re=new j,V=new j;function D(Z,le,xe){re.setFromMatrixPosition(le.matrixWorld),V.setFromMatrixPosition(xe.matrixWorld);const Se=re.distanceTo(V),be=le.projectionMatrix.elements,Le=xe.projectionMatrix.elements,et=be[14]/(be[10]-1),gt=be[14]/(be[10]+1),ut=(be[9]+1)/be[5],k=(be[9]-1)/be[5],sn=(be[8]-1)/be[0],ct=(Le[8]+1)/Le[0],ht=et*sn,$e=et*ct,wt=Se/(-sn+ct),Qe=wt*-sn;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qe),Z.translateZ(wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const b=et+wt,T=gt+wt,$=ht-Qe,de=$e+(Se-Qe),_e=ut*gt/T*b,fe=k*gt/T*b;Z.projectionMatrix.makePerspective($,de,_e,fe,b,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let le=Z.near,xe=Z.far;A.texture!==null&&(A.depthNear>0&&(le=A.depthNear),A.depthFar>0&&(xe=A.depthFar)),E.near=K.near=F.near=le,E.far=K.far=F.far=xe,(R!==E.near||oe!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,oe=E.far);const Se=Z.parent,be=E.cameras;ie(E,Se);for(let Le=0;Le<be.length;Le++)ie(be[Le],Se);be.length===2?D(E,F,K):E.projectionMatrix.copy(F.projectionMatrix),J(Z,E,Se)};function J(Z,le,xe){xe===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=jf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(E)};let I=null;function se(Z,le){if(g=le.getViewerPose(m||f),w=le,g!==null){const xe=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let Se=!1;xe.length!==E.cameras.length&&(E.cameras.length=0,Se=!0);for(let Le=0;Le<xe.length;Le++){const et=xe[Le];let gt=null;if(S!==null)gt=S.getViewport(et);else{const k=y.getViewSubImage(x,et);gt=k.viewport,Le===0&&(e.setRenderTargetTextures(U,k.colorTexture,x.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(U))}let ut=ye[Le];ut===void 0&&(ut=new Yn,ut.layers.enable(Le),ut.viewport=new Vt,ye[Le]=ut),ut.matrix.fromArray(et.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(et.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(gt.x,gt.y,gt.width,gt.height),Le===0&&(E.matrix.copy(ut.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Se===!0&&E.cameras.push(ut)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")){const Le=y.getDepthInformation(xe[0]);Le&&Le.isValid&&Le.texture&&A.init(e,Le,a.renderState)}}for(let xe=0;xe<P.length;xe++){const Se=N[xe],be=P[xe];Se!==null&&be!==void 0&&be.update(Se,le,m||f)}I&&I(Z,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),w=null}const Pe=new Dg;Pe.setAnimationLoop(se),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const Vr=new vi,jE=new Ot;function YE(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,Pg(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function a(_,v,U,P,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(_,v):v.isMeshToonMaterial?(c(_,v),y(_,v)):v.isMeshPhongMaterial?(c(_,v),g(_,v)):v.isMeshStandardMaterial?(c(_,v),x(_,v),v.isMeshPhysicalMaterial&&S(_,v,N)):v.isMeshMatcapMaterial?(c(_,v),w(_,v)):v.isMeshDepthMaterial?c(_,v):v.isMeshDistanceMaterial?(c(_,v),A(_,v)):v.isMeshNormalMaterial?c(_,v):v.isLineBasicMaterial?(f(_,v),v.isLineDashedMaterial&&d(_,v)):v.isPointsMaterial?p(_,v,U,P):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Pn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Pn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const U=e.get(v),P=U.envMap,N=U.envMapRotation;P&&(_.envMap.value=P,Vr.copy(N),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),_.envMapRotation.value.setFromMatrix4(jE.makeRotationFromEuler(Vr)),_.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function f(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function d(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,U,P){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*U,_.scale.value=P*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function g(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function y(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function x(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function S(_,v,U){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Pn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=U.texture,_.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,v){v.matcap&&(_.matcap.value=v.matcap)}function A(_,v){const U=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(U.matrixWorld),_.nearDistance.value=U.shadow.camera.near,_.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function qE(s,e,n,r){let a={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,P){const N=P.program;r.uniformBlockBinding(U,N)}function m(U,P){let N=a[U.id];N===void 0&&(w(U),N=g(U),a[U.id]=N,U.addEventListener("dispose",_));const q=P.program;r.updateUBOMapping(U,q);const z=e.render.frame;c[U.id]!==z&&(x(U),c[U.id]=z)}function g(U){const P=y();U.__bindingPointIndex=P;const N=s.createBuffer(),q=U.__size,z=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,q,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function y(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const P=a[U.id],N=U.uniforms,q=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let z=0,F=N.length;z<F;z++){const K=Array.isArray(N[z])?N[z]:[N[z]];for(let ye=0,E=K.length;ye<E;ye++){const R=K[ye];if(S(R,z,ye,q)===!0){const oe=R.__offset,ne=Array.isArray(R.value)?R.value:[R.value];let ue=0;for(let pe=0;pe<ne.length;pe++){const re=ne[pe],V=A(re);typeof re=="number"||typeof re=="boolean"?(R.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,oe+ue,R.__data)):re.isMatrix3?(R.__data[0]=re.elements[0],R.__data[1]=re.elements[1],R.__data[2]=re.elements[2],R.__data[3]=0,R.__data[4]=re.elements[3],R.__data[5]=re.elements[4],R.__data[6]=re.elements[5],R.__data[7]=0,R.__data[8]=re.elements[6],R.__data[9]=re.elements[7],R.__data[10]=re.elements[8],R.__data[11]=0):(re.toArray(R.__data,ue),ue+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,P,N,q){const z=U.value,F=P+"_"+N;if(q[F]===void 0)return typeof z=="number"||typeof z=="boolean"?q[F]=z:q[F]=z.clone(),!0;{const K=q[F];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return q[F]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function w(U){const P=U.uniforms;let N=0;const q=16;for(let F=0,K=P.length;F<K;F++){const ye=Array.isArray(P[F])?P[F]:[P[F]];for(let E=0,R=ye.length;E<R;E++){const oe=ye[E],ne=Array.isArray(oe.value)?oe.value:[oe.value];for(let ue=0,pe=ne.length;ue<pe;ue++){const re=ne[ue],V=A(re),D=N%q,ie=D%V.boundary,J=D+ie;N+=ie,J!==0&&q-J<V.storage&&(N+=q-J),oe.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=N,N+=V.storage}}}const z=N%q;return z>0&&(N+=q-z),U.__size=N,U.__cache={},this}function A(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function _(U){const P=U.target;P.removeEventListener("dispose",_);const N=f.indexOf(P.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function v(){for(const U in a)s.deleteBuffer(a[U]);f=[],a={},c={}}return{bind:p,update:m,dispose:v}}class KE{constructor(e={}){const{canvas:n=F0(),context:r=null,depth:a=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const S=new Uint32Array(4),w=new Int32Array(4);let A=null,_=null;const v=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=xr,this.toneMappingExposure=1;const P=this;let N=!1,q=0,z=0,F=null,K=-1,ye=null;const E=new Vt,R=new Vt;let oe=null;const ne=new lt(0);let ue=0,pe=n.width,re=n.height,V=1,D=null,ie=null;const J=new Vt(0,0,pe,re),I=new Vt(0,0,pe,re);let se=!1;const Pe=new ld;let Z=!1,le=!1;const xe=new Ot,Se=new Ot,be=new j,Le=new Vt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function ut(){return F===null?V:1}let k=r;function sn(C,G){return n.getContext(C,G)}try{const C={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),k===null){const G="webgl2";if(k=sn(G,C),k===null)throw sn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ct,ht,$e,wt,Qe,b,T,$,de,_e,fe,je,Ae,Fe,pt,Me,Oe,tt,Je,Be,ft,it,Mt,H;function De(){ct=new eM(k),ct.init(),it=new BE(k,ct),ht=new qS(k,ct,e,it),$e=new FE(k),ht.reverseDepthBuffer&&$e.buffers.depth.setReversed(!0),wt=new iM(k),Qe=new SE,b=new kE(k,ct,$e,Qe,ht,it,wt),T=new $S(P),$=new JS(P),de=new ux(k),Mt=new jS(k,de),_e=new tM(k,de,wt,Mt),fe=new sM(k,_e,de,wt),Je=new rM(k,ht,b),Me=new KS(Qe),je=new yE(P,T,$,ct,ht,Mt,Me),Ae=new YE(P,Qe),Fe=new EE,pt=new PE(ct),tt=new XS(P,T,$,$e,fe,x,p),Oe=new NE(P,fe,ht),H=new qE(k,wt,ht,$e),Be=new YS(k,ct,wt),ft=new nM(k,ct,wt),wt.programs=je.programs,P.capabilities=ht,P.extensions=ct,P.properties=Qe,P.renderLists=Fe,P.shadowMap=Oe,P.state=$e,P.info=wt}De();const ae=new XE(P,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(pe,re,!1))},this.getSize=function(C){return C.set(pe,re)},this.setSize=function(C,G,Q=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=C,re=G,n.width=Math.floor(C*V),n.height=Math.floor(G*V),Q===!0&&(n.style.width=C+"px",n.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(pe*V,re*V).floor()},this.setDrawingBufferSize=function(C,G,Q){pe=C,re=G,V=Q,n.width=Math.floor(C*Q),n.height=Math.floor(G*Q),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,G,Q,ee){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,G,Q,ee),$e.viewport(E.copy(J).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(I)},this.setScissor=function(C,G,Q,ee){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,G,Q,ee),$e.scissor(R.copy(I).multiplyScalar(V).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){$e.setScissorTest(se=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(C=!0,G=!0,Q=!0){let ee=0;if(C){let W=!1;if(F!==null){const Te=F.texture.format;W=Te===rd||Te===id||Te===nd}if(W){const Te=F.texture.type,Ie=Te===Hi||Te===Kr||Te===Wo||Te===qs||Te===ed||Te===td,we=tt.getClearColor(),Ge=tt.getClearAlpha(),Ke=we.r,Ze=we.g,We=we.b;Ie?(S[0]=Ke,S[1]=Ze,S[2]=We,S[3]=Ge,k.clearBufferuiv(k.COLOR,0,S)):(w[0]=Ke,w[1]=Ze,w[2]=We,w[3]=Ge,k.clearBufferiv(k.COLOR,0,w))}else ee|=k.COLOR_BUFFER_BIT}G&&(ee|=k.DEPTH_BUFFER_BIT,k.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),pt.dispose(),Qe.dispose(),T.dispose(),$.dispose(),fe.dispose(),Mt.dispose(),H.dispose(),je.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Vi),ae.removeEventListener("sessionend",Jr),Ln.stop()};function he(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=wt.autoReset,G=Oe.enabled,Q=Oe.autoUpdate,ee=Oe.needsUpdate,W=Oe.type;De(),wt.autoReset=C,Oe.enabled=G,Oe.autoUpdate=Q,Oe.needsUpdate=ee,Oe.type=W}function Ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function dt(C){const G=C.target;G.removeEventListener("dispose",dt),kt(G)}function kt(C){on(C),Qe.remove(C)}function on(C){const G=Qe.get(C).programs;G!==void 0&&(G.forEach(function(Q){je.releaseProgram(Q)}),C.isShaderMaterial&&je.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Q,ee,W,Te){G===null&&(G=et);const Ie=W.isMesh&&W.matrixWorld.determinant()<0,we=Si(C,G,Q,ee,W);$e.setMaterial(ee,Ie);let Ge=Q.index,Ke=1;if(ee.wireframe===!0){if(Ge=_e.getWireframeAttribute(Q),Ge===void 0)return;Ke=2}const Ze=Q.drawRange,We=Q.attributes.position;let St=Ze.start*Ke,At=(Ze.start+Ze.count)*Ke;Te!==null&&(St=Math.max(St,Te.start*Ke),At=Math.min(At,(Te.start+Te.count)*Ke)),Ge!==null?(St=Math.max(St,0),At=Math.min(At,Ge.count)):We!=null&&(St=Math.max(St,0),At=Math.min(At,We.count));const Rt=At-St;if(Rt<0||Rt===1/0)return;Mt.setup(W,ee,we,Q,Ge);let Nt,vt=Be;if(Ge!==null&&(Nt=de.get(Ge),vt=ft,vt.setIndex(Nt)),W.isMesh)ee.wireframe===!0?($e.setLineWidth(ee.wireframeLinewidth*ut()),vt.setMode(k.LINES)):vt.setMode(k.TRIANGLES);else if(W.isLine){let ke=ee.linewidth;ke===void 0&&(ke=1),$e.setLineWidth(ke*ut()),W.isLineSegments?vt.setMode(k.LINES):W.isLineLoop?vt.setMode(k.LINE_LOOP):vt.setMode(k.LINE_STRIP)}else W.isPoints?vt.setMode(k.POINTS):W.isSprite&&vt.setMode(k.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)vt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ke=W._multiDrawStarts,jt=W._multiDrawCounts,xt=W._multiDrawCount,Dn=Ge?de.get(Ge).bytesPerElement:1,Zn=Qe.get(ee).currentProgram.getUniforms();for(let Jt=0;Jt<xt;Jt++)Zn.setValue(k,"_gl_DrawID",Jt),vt.render(ke[Jt]/Dn,jt[Jt])}else if(W.isInstancedMesh)vt.renderInstances(St,Rt,W.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,jt=Math.min(Q.instanceCount,ke);vt.renderInstances(St,Rt,jt)}else vt.render(St,Rt)};function mt(C,G,Q){C.transparent===!0&&C.side===ki&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,ts(C,G,Q),C.side=Sr,C.needsUpdate=!0,ts(C,G,Q),C.side=ki):ts(C,G,Q)}this.compile=function(C,G,Q=null){Q===null&&(Q=C),_=pt.get(Q),_.init(G),U.push(_),Q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),C!==Q&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const ee=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const we=Te[Ie];mt(we,Q,W),ee.add(we)}else mt(Te,Q,W),ee.add(Te)}),U.pop(),_=null,ee},this.compileAsync=function(C,G,Q=null){const ee=this.compile(C,G,Q);return new Promise(W=>{function Te(){if(ee.forEach(function(Ie){Qe.get(Ie).currentProgram.isReady()&&ee.delete(Ie)}),ee.size===0){W(C);return}setTimeout(Te,10)}ct.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Qt=null;function Bn(C){Qt&&Qt(C)}function Vi(){Ln.stop()}function Jr(){Ln.start()}const Ln=new Dg;Ln.setAnimationLoop(Bn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(C){Qt=C,ae.setAnimationLoop(C),C===null?Ln.stop():Ln.start()},ae.addEventListener("sessionstart",Vi),ae.addEventListener("sessionend",Jr),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,G,F),_=pt.get(C,U.length),_.init(G),U.push(_),Se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Pe.setFromProjectionMatrix(Se),le=this.localClippingEnabled,Z=Me.init(this.clippingPlanes,le),A=Fe.get(C,v.length),A.init(),v.push(A),ae.enabled===!0&&ae.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&eo(Te,G,-1/0,P.sortObjects)}eo(C,G,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(D,ie),gt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,gt&&tt.addToRenderList(A,C),this.info.render.frame++,Z===!0&&Me.beginShadows();const Q=_.state.shadowsArray;Oe.render(Q,C,G),Z===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=A.opaque,W=A.transmissive;if(_.setupLights(),G.isArrayCamera){const Te=G.cameras;if(W.length>0)for(let Ie=0,we=Te.length;Ie<we;Ie++){const Ge=Te[Ie];Tr(ee,W,C,Ge)}gt&&tt.render(C);for(let Ie=0,we=Te.length;Ie<we;Ie++){const Ge=Te[Ie];Gi(A,C,Ge,Ge.viewport)}}else W.length>0&&Tr(ee,W,C,G),gt&&tt.render(C),Gi(A,C,G);F!==null&&(b.updateMultisampleRenderTarget(F),b.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(P,C,G),Mt.resetDefaultState(),K=-1,ye=null,U.pop(),U.length>0?(_=U[U.length-1],Z===!0&&Me.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,v.pop(),v.length>0?A=v[v.length-1]:A=null};function eo(C,G,Q,ee){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Pe.intersectsSprite(C)){ee&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const Ie=fe.update(C),we=C.material;we.visible&&A.push(C,Ie,we,Q,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Pe.intersectsObject(C))){const Ie=fe.update(C),we=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Le.copy(Ie.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(Se)),Array.isArray(we)){const Ge=Ie.groups;for(let Ke=0,Ze=Ge.length;Ke<Ze;Ke++){const We=Ge[Ke],St=we[We.materialIndex];St&&St.visible&&A.push(C,Ie,St,Q,Le.z,We)}}else we.visible&&A.push(C,Ie,we,Q,Le.z,null)}}const Te=C.children;for(let Ie=0,we=Te.length;Ie<we;Ie++)eo(Te[Ie],G,Q,ee)}function Gi(C,G,Q,ee){const W=C.opaque,Te=C.transmissive,Ie=C.transparent;_.setupLightsView(Q),Z===!0&&Me.setGlobalState(P.clippingPlanes,Q),ee&&$e.viewport(E.copy(ee)),W.length>0&&yi(W,G,Q),Te.length>0&&yi(Te,G,Q),Ie.length>0&&yi(Ie,G,Q),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Tr(C,G,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ee.id]===void 0&&(_.state.transmissionRenderTarget[ee.id]=new $r(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Xo:Hi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Te=_.state.transmissionRenderTarget[ee.id],Ie=ee.viewport||E;Te.setSize(Ie.z,Ie.w);const we=P.getRenderTarget();P.setRenderTarget(Te),P.getClearColor(ne),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),gt&&tt.render(Q);const Ge=P.toneMapping;P.toneMapping=xr;const Ke=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),_.setupLightsView(ee),Z===!0&&Me.setGlobalState(P.clippingPlanes,ee),yi(C,Q,ee),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let We=0,St=G.length;We<St;We++){const At=G[We],Rt=At.object,Nt=At.geometry,vt=At.material,ke=At.group;if(vt.side===ki&&Rt.layers.test(ee.layers)){const jt=vt.side;vt.side=Pn,vt.needsUpdate=!0,es(Rt,Q,ee,Nt,vt,ke),vt.side=jt,vt.needsUpdate=!0,Ze=!0}}Ze===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}P.setRenderTarget(we),P.setClearColor(ne,ue),Ke!==void 0&&(ee.viewport=Ke),P.toneMapping=Ge}function yi(C,G,Q){const ee=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Te=C.length;W<Te;W++){const Ie=C[W],we=Ie.object,Ge=Ie.geometry,Ke=ee===null?Ie.material:ee,Ze=Ie.group;we.layers.test(Q.layers)&&es(we,G,Q,Ge,Ke,Ze)}}function es(C,G,Q,ee,W,Te){C.onBeforeRender(P,G,Q,ee,W,Te),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(P,G,Q,ee,C,Te),W.transparent===!0&&W.side===ki&&W.forceSinglePass===!1?(W.side=Pn,W.needsUpdate=!0,P.renderBufferDirect(Q,G,ee,W,C,Te),W.side=Sr,W.needsUpdate=!0,P.renderBufferDirect(Q,G,ee,W,C,Te),W.side=ki):P.renderBufferDirect(Q,G,ee,W,C,Te),C.onAfterRender(P,G,Q,ee,W,Te)}function ts(C,G,Q){G.isScene!==!0&&(G=et);const ee=Qe.get(C),W=_.state.lights,Te=_.state.shadowsArray,Ie=W.state.version,we=je.getParameters(C,W.state,Te,G,Q),Ge=je.getProgramCacheKey(we);let Ke=ee.programs;ee.environment=C.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(C.isMeshStandardMaterial?$:T).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",dt),Ke=new Map,ee.programs=Ke);let Ze=Ke.get(Ge);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===Ie)return Ko(C,we),Ze}else we.uniforms=je.getUniforms(C),C.onBeforeCompile(we,P),Ze=je.acquireProgram(we,Ge),Ke.set(Ge,Ze),ee.uniforms=we.uniforms;const We=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Me.uniform),Ko(C,we),ee.needsLights=Zo(C),ee.lightsStateVersion=Ie,ee.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function qo(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Ll.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Ko(C,G){const Q=Qe.get(C);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Si(C,G,Q,ee,W){G.isScene!==!0&&(G=et),b.resetTextureUnits();const Te=G.fog,Ie=ee.isMeshStandardMaterial?G.environment:null,we=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Er,Ge=(ee.isMeshStandardMaterial?$:T).get(ee.envMap||Ie),Ke=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),We=!!Q.morphAttributes.position,St=!!Q.morphAttributes.normal,At=!!Q.morphAttributes.color;let Rt=xr;ee.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Rt=P.toneMapping);const Nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=Nt!==void 0?Nt.length:0,ke=Qe.get(ee),jt=_.state.lights;if(Z===!0&&(le===!0||C!==ye)){const un=C===ye&&ee.id===K;Me.setState(ee,C,un)}let xt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==jt.state.version||ke.outputColorSpace!==we||W.isBatchedMesh&&ke.batching===!1||!W.isBatchedMesh&&ke.batching===!0||W.isBatchedMesh&&ke.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ke.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||W.isInstancedMesh&&ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ke.instancingMorph===!1&&W.morphTexture!==null||ke.envMap!==Ge||ee.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection)||ke.vertexAlphas!==Ke||ke.vertexTangents!==Ze||ke.morphTargets!==We||ke.morphNormals!==St||ke.morphColors!==At||ke.toneMapping!==Rt||ke.morphTargetsCount!==vt)&&(xt=!0):(xt=!0,ke.__version=ee.version);let Dn=ke.currentProgram;xt===!0&&(Dn=ts(ee,G,W));let Zn=!1,Jt=!1,Mi=!1;const Pt=Dn.getUniforms(),ui=ke.uniforms;if($e.useProgram(Dn.program)&&(Zn=!0,Jt=!0,Mi=!0),ee.id!==K&&(K=ee.id,Jt=!0),Zn||ye!==C){ht.reverseDepthBuffer?(xe.copy(C.projectionMatrix),k0(xe),B0(xe),Pt.setValue(k,"projectionMatrix",xe)):Pt.setValue(k,"projectionMatrix",C.projectionMatrix),Pt.setValue(k,"viewMatrix",C.matrixWorldInverse);const un=Pt.map.cameraPosition;un!==void 0&&un.setValue(k,be.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&Pt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Pt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),ye!==C&&(ye=C,Jt=!0,Mi=!0)}if(W.isSkinnedMesh){Pt.setOptional(k,W,"bindMatrix"),Pt.setOptional(k,W,"bindMatrixInverse");const un=W.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Pt.setValue(k,"boneTexture",un.boneTexture,b))}W.isBatchedMesh&&(Pt.setOptional(k,W,"batchingTexture"),Pt.setValue(k,"batchingTexture",W._matricesTexture,b),Pt.setOptional(k,W,"batchingIdTexture"),Pt.setValue(k,"batchingIdTexture",W._indirectTexture,b),Pt.setOptional(k,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(k,"batchingColorTexture",W._colorsTexture,b));const to=Q.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&Je.update(W,Q,Dn),(Jt||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,Pt.setValue(k,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ui.envMap.value=Ge,ui.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(ui.envMapIntensity.value=G.environmentIntensity),Jt&&(Pt.setValue(k,"toneMappingExposure",P.toneMappingExposure),ke.needsLights&&$o(ui,Mi),Te&&ee.fog===!0&&Ae.refreshFogUniforms(ui,Te),Ae.refreshMaterialUniforms(ui,ee,V,re,_.state.transmissionRenderTarget[C.id]),Ll.upload(k,qo(ke),ui,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ll.upload(k,qo(ke),ui,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Pt.setValue(k,"center",W.center),Pt.setValue(k,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(k,"normalMatrix",W.normalMatrix),Pt.setValue(k,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const un=ee.uniformsGroups;for(let ns=0,no=un.length;ns<no;ns++){const Wi=un[ns];H.update(Wi,Dn),H.bind(Wi,Dn)}}return Dn}function $o(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Zo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,G,Q){Qe.get(C.texture).__webglTexture=G,Qe.get(C.depthTexture).__webglTexture=Q;const ee=Qe.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const Q=Qe.get(C);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Q=0){F=C,q=G,z=Q;let ee=!0,W=null,Te=!1,Ie=!1;if(C){const Ge=Qe.get(C);if(Ge.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(k.FRAMEBUFFER,null),ee=!1;else if(Ge.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(Ge.__hasExternalTextures)b.rebindTextures(C,Qe.get(C.texture).__webglTexture,Qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ie=!0);const Ze=Qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?W=Ze[G][Q]:W=Ze[G],Te=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?W=Qe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[Q]:W=Ze,E.copy(C.viewport),R.copy(C.scissor),oe=C.scissorTest}else E.copy(J).multiplyScalar(V).floor(),R.copy(I).multiplyScalar(V).floor(),oe=se;if($e.bindFramebuffer(k.FRAMEBUFFER,W)&&ee&&$e.drawBuffers(C,W),$e.viewport(E),$e.scissor(R),$e.setScissorTest(oe),Te){const Ge=Qe.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ge.__webglTexture,Q)}else if(Ie){const Ge=Qe.get(C.texture),Ke=G||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.__webglTexture,Q||0,Ke)}K=-1},this.readRenderTargetPixels=function(C,G,Q,ee,W,Te,Ie){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(we=we[Ie]),we){$e.bindFramebuffer(k.FRAMEBUFFER,we);try{const Ge=C.texture,Ke=Ge.format,Ze=Ge.type;if(!ht.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-ee&&Q>=0&&Q<=C.height-W&&k.readPixels(G,Q,ee,W,it.convert(Ke),it.convert(Ze),Te)}finally{const Ge=F!==null?Qe.get(F).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,G,Q,ee,W,Te,Ie){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(we=we[Ie]),we){const Ge=C.texture,Ke=Ge.format,Ze=Ge.type;if(!ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-ee&&Q>=0&&Q<=C.height-W){$e.bindFramebuffer(k.FRAMEBUFFER,we);const We=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,We),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels(G,Q,ee,W,it.convert(Ke),it.convert(Ze),0);const St=F!==null?Qe.get(F).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,St);const At=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await O0(k,At,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,We),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.deleteBuffer(We),k.deleteSync(At),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,Q=0){C.isTexture!==!0&&(bl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const ee=Math.pow(2,-Q),W=Math.floor(C.image.width*ee),Te=Math.floor(C.image.height*ee),Ie=G!==null?G.x:0,we=G!==null?G.y:0;b.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Ie,we,W,Te),$e.unbindTexture()},this.copyTextureToTexture=function(C,G,Q=null,ee=null,W=0){C.isTexture!==!0&&(bl("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,C=arguments[1],G=arguments[2],W=arguments[3]||0,Q=null);let Te,Ie,we,Ge,Ke,Ze;Q!==null?(Te=Q.max.x-Q.min.x,Ie=Q.max.y-Q.min.y,we=Q.min.x,Ge=Q.min.y):(Te=C.image.width,Ie=C.image.height,we=0,Ge=0),ee!==null?(Ke=ee.x,Ze=ee.y):(Ke=0,Ze=0);const We=it.convert(G.format),St=it.convert(G.type);b.setTexture2D(G,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const At=k.getParameter(k.UNPACK_ROW_LENGTH),Rt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Nt=k.getParameter(k.UNPACK_SKIP_PIXELS),vt=k.getParameter(k.UNPACK_SKIP_ROWS),ke=k.getParameter(k.UNPACK_SKIP_IMAGES),jt=C.isCompressedTexture?C.mipmaps[W]:C.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,jt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,jt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,we),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ge),C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,Ke,Ze,Te,Ie,We,St,jt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,Ke,Ze,jt.width,jt.height,We,jt.data):k.texSubImage2D(k.TEXTURE_2D,W,Ke,Ze,Te,Ie,We,St,jt),k.pixelStorei(k.UNPACK_ROW_LENGTH,At),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,vt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ke),W===0&&G.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Q=null,ee=null,W=0){C.isTexture!==!0&&(bl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,C=arguments[2],G=arguments[3],W=arguments[4]||0);let Te,Ie,we,Ge,Ke,Ze,We,St,At;const Rt=C.isCompressedTexture?C.mipmaps[W]:C.image;Q!==null?(Te=Q.max.x-Q.min.x,Ie=Q.max.y-Q.min.y,we=Q.max.z-Q.min.z,Ge=Q.min.x,Ke=Q.min.y,Ze=Q.min.z):(Te=Rt.width,Ie=Rt.height,we=Rt.depth,Ge=0,Ke=0,Ze=0),ee!==null?(We=ee.x,St=ee.y,At=ee.z):(We=0,St=0,At=0);const Nt=it.convert(G.format),vt=it.convert(G.type);let ke;if(G.isData3DTexture)b.setTexture3D(G,0),ke=k.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)b.setTexture2DArray(G,0),ke=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const jt=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Dn=k.getParameter(k.UNPACK_SKIP_PIXELS),Zn=k.getParameter(k.UNPACK_SKIP_ROWS),Jt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Rt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ge),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze),C.isDataTexture||C.isData3DTexture?k.texSubImage3D(ke,W,We,St,At,Te,Ie,we,Nt,vt,Rt.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,W,We,St,At,Te,Ie,we,Nt,Rt.data):k.texSubImage3D(ke,W,We,St,At,Te,Ie,we,Nt,vt,Rt),k.pixelStorei(k.UNPACK_ROW_LENGTH,jt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Dn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Zn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jt),W===0&&G.generateMipmaps&&k.generateMipmap(ke),$e.unbindTexture()},this.initRenderTarget=function(C){Qe.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),$e.unbindTexture()},this.resetState=function(){q=0,z=0,F=null,$e.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sd?"display-p3":"srgb",n.unpackColorSpace=Et.workingColorSpace===Hl?"display-p3":"srgb"}}class $E extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ud extends Qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new j,Bl=new j,Wm=new Ot,Vo=new Gl,Sl=new Vl,rf=new j,Xm=new j;class ZE extends cn{constructor(e=new xi,n=new ud){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)kl.fromBufferAttribute(n,a-1),Bl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=kl.distanceTo(Bl);e.setAttribute("lineDistance",new $n(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(a),Sl.radius+=c,e.ray.intersectsSphere(Sl)===!1)return;Wm.copy(a).invert(),Vo.copy(e.ray).applyMatrix4(Wm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,f.start),w=Math.min(g.count,f.start+f.count);for(let A=S,_=w-1;A<_;A+=m){const v=g.getX(A),U=g.getX(A+1),P=Ml(this,e,Vo,p,v,U);P&&n.push(P)}if(this.isLineLoop){const A=g.getX(w-1),_=g.getX(S),v=Ml(this,e,Vo,p,A,_);v&&n.push(v)}}else{const S=Math.max(0,f.start),w=Math.min(x.count,f.start+f.count);for(let A=S,_=w-1;A<_;A+=m){const v=Ml(this,e,Vo,p,A,A+1);v&&n.push(v)}if(this.isLineLoop){const A=Ml(this,e,Vo,p,w-1,S);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ml(s,e,n,r,a,c){const f=s.geometry.attributes.position;if(kl.fromBufferAttribute(f,a),Bl.fromBufferAttribute(f,c),n.distanceSqToSegment(kl,Bl,rf,Xm)>r)return;rf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(rf);if(!(p<e.near||p>e.far))return{distance:p,point:Xm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const jm=new j,Ym=new j;class Bg extends ZE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,c=n.count;a<c;a+=2)jm.fromBufferAttribute(n,a),Ym.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+jm.distanceTo(Ym);e.setAttribute("lineDistance",new $n(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qm extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sg,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zg extends cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const sf=new Ot,Km=new j,$m=new j;class QE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ld,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),n.position.copy(Km),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JE extends QE{constructor(){super(new Ig(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zm extends zg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new JE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eT extends zg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qm=new Ot;class tT{constructor(e,n,r=0,a=1/0){this.ray=new Gl(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new od,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Qm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qm),this}intersectObject(e,n=!0,r=[]){return qf(e,this,r,n),r.sort(Jm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,c=e.length;a<c;a++)qf(e[a],this,r,n);return r.sort(Jm),r}}function Jm(s,e){return s.distance-e.distance}function qf(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const c=s.children;for(let f=0,d=c.length;f<d;f++)qf(c[f],e,n,!0)}}class eg{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(yn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tg extends Bg{constructor(e=10,n=10,r=4473924,a=8947848){r=new lt(r),a=new lt(a);const c=n/2,f=e/n,d=e/2,p=[],m=[];for(let x=0,S=0,w=-d;x<=n;x++,w+=f){p.push(-d,0,w,d,0,w),p.push(w,0,-d,w,0,d);const A=x===c?r:a;A.toArray(m,S),S+=3,A.toArray(m,S),S+=3,A.toArray(m,S),S+=3,A.toArray(m,S),S+=3}const g=new xi;g.setAttribute("position",new $n(p,3)),g.setAttribute("color",new $n(m,3));const y=new ud({vertexColors:!0,toneMapped:!1});super(g,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class nT extends Qr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);const ng={type:"change"},fd={type:"start"},Hg={type:"end"},El=new Gl,ig=new Oi,iT=Math.cos(70*U0.DEG2RAD),Kt=new j,Rn=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},of=1e-6;class rT extends nT{constructor(e,n=null){super(e,n),this.state=Ct.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hs.ROTATE,MIDDLE:Hs.DOLLY,RIGHT:Hs.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Zr,this._lastTargetPosition=new j,this._quat=new Zr().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eg,this._sphericalDelta=new eg,this._scale=1,this._panOffset=new j,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new j,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oT.bind(this),this._onPointerDown=sT.bind(this),this._onPointerUp=aT.bind(this),this._onContextMenu=pT.bind(this),this._onMouseWheel=uT.bind(this),this._onKeyDown=fT.bind(this),this._onTouchStart=dT.bind(this),this._onTouchMove=hT.bind(this),this._onMouseDown=lT.bind(this),this._onMouseMove=cT.bind(this),this._interceptControlDown=mT.bind(this),this._interceptControlUp=gT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ng),this.update(),this.state=Ct.NONE}update(e=null){const n=this.object.position;Kt.copy(n).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Rn:r>Math.PI&&(r-=Rn),a<-Math.PI?a+=Rn:a>Math.PI&&(a-=Rn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Kt.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new j(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(El.origin.copy(this.object.position),El.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(El.direction))<iT?this.object.lookAt(this.target):(ig.setFromNormalAndCoplanarPoint(this.object.up,this.target),El.intersectPlane(ig,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>of||8*(1-this._lastQuaternion.dot(this.object.quaternion))>of||this._lastTargetPosition.distanceToSquared(this.target)>of?(this.dispatchEvent(ng),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Kt.setFromMatrixColumn(n,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,n){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(n,1):(Kt.setFromMatrixColumn(n,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Kt.copy(a).sub(this.target);let c=Kt.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,c=n-r.top,f=r.width,d=r.height;this._mouse.x=a/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,c=Math.sqrt(r*r+a*a);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(a,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,c=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,d=(e.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new rt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function sT(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function oT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function aT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hg),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function lT(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ct.DOLLY;break;case Hs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ct.ROTATE}break;case Hs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(fd)}function cT(s){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function uT(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(s.preventDefault(),this.dispatchEvent(fd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Hg))}function fT(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function dT(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ct.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ct.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(fd)}function hT(s){switch(this._trackPointer(s),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ct.NONE}}function pT(s){this.enabled!==!1&&s.preventDefault()}function mT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rg=-.02,Kf=.02;function sg(s,e,n){const r=Kf,a=[[0,r,0],[s,r,0],[s,r,0],[s,r,e],[s,r,e],[0,r,e],[0,r,e],[0,r,0],[0,n,0],[s,n,0],[s,n,0],[s,n,e],[s,n,e],[0,n,e],[0,n,e],[0,n,0],[0,r,0],[0,n,0],[s,r,0],[s,n,0],[s,r,e],[s,n,e],[0,r,e],[0,n,e]],c=new xi;return c.setAttribute("position",new $n(a.flat(),3)),c}function _T(s){const e=Math.max(s.clientWidth,1),n=Math.max(s.clientHeight,1),r=new $E;r.background=new lt("#FAFAFA");const a=new Yn(45,e/n,.1,200);a.position.set(18,12,18);const c=new KE({antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(e,n),c.domElement.style.display="block",c.domElement.style.width="100%",c.domElement.style.height="100%",s.appendChild(c.domElement);const f=new rT(a,c.domElement);f.enableDamping=!0,f.dampingFactor=.08,f.minDistance=3,f.maxDistance=50,f.maxPolarAngle=Math.PI/2-.05,r.add(new eT(16777215,.6));const d=new Zm(16777215,.9);d.position.set(10,15,8),r.add(d);const p=new Zm(16777215,.25);p.position.set(-5,8,-5),r.add(p);const m=new qr;let g=new tg(20,20,13816535,15263981);g.position.y=rg,m.add(g),r.add(m);const y=new qr,x=new Bg(sg(10,10,6),new ud({color:29155,depthTest:!0})),S=new Kn(new Zs(10,10),new ad({color:29155,transparent:!0,opacity:.04}));S.rotation.x=-Math.PI/2,S.position.set(5,Kf,5),y.add(x,S),r.add(y);const w=new qr;r.add(w);const A=new Kn(new yr(1,1,1),new qm({color:29155,transparent:!0,opacity:.35}));A.visible=!1,r.add(A);const _=new tT,v=new rt,U=new Oi(new j(0,1,0),0),P=new Map;let N=0,q=Ft.getState(),z=!1;const F=V=>{const D=new j(V.width/2,V.height/3,V.depth/2);f.target.copy(D),a.position.set(V.width+8,V.height+6,V.depth+8),a.lookAt(D)},K=V=>{x.geometry.dispose(),x.geometry=sg(V.width,V.depth,V.height),S.geometry.dispose(),S.geometry=new Zs(V.width,V.depth),S.position.set(V.width/2,Kf,V.depth/2);const D=Math.max(V.width,V.depth)+4;m.remove(g),g.geometry.dispose(),(Array.isArray(g.material)?g.material:[g.material]).forEach(J=>J.dispose()),g=new tg(D,D,13816535,15263981),g.position.set(V.width/2,rg,V.depth/2),m.add(g),F(V)},ye=V=>{for(const D of P.values())D.geometry.dispose(),Array.isArray(D.material)?D.material.forEach(ie=>ie.dispose()):D.material.dispose(),w.remove(D);P.clear();for(const D of V.primitives){const ie=Dl(D.typeId),[J,I,se]=D.size,Pe=jp(D.gridX,D.gridZ,D.size),Z=new lt((ie==null?void 0:ie.color)??"#C4A882"),le=new Kn(new yr(J,I,se),new qm({color:Z,roughness:.85,metalness:.05,emissive:V.selectedPrimitiveId===D.id?new lt(29155):new lt(0),emissiveIntensity:V.selectedPrimitiveId===D.id?.15:0}));le.position.set(Pe.x,Pe.y,Pe.z),le.userData.primitiveId=D.id,w.add(le),P.set(D.id,le)}},E=V=>{if(V.activeTool!=="place"||!V.activePrimitiveType||!V.hoverGrid){A.visible=!1;return}const D=Dl(V.activePrimitiveType);if(!D){A.visible=!1;return}const[ie,J,I]=D.size,se=jp(V.hoverGrid.x,V.hoverGrid.z,D.size);A.geometry.dispose(),A.geometry=new yr(ie,J,I),A.position.set(se.x,se.y,se.z),A.material.color.set(V.placementValid?29155:16726832),A.visible=!0},R=(V,D)=>{const ie=c.domElement.getBoundingClientRect();v.x=(V-ie.left)/ie.width*2-1,v.y=-((D-ie.top)/ie.height)*2+1,_.setFromCamera(v,a);const J=new j;return _.ray.intersectPlane(U,J)?{gridX:Math.floor(J.x),gridZ:Math.floor(J.z)}:null},oe=()=>{z=!1},ne=V=>{V.buttons>0&&(z=!0);const D=R(V.clientX,V.clientY);if(!D)return;const ie=Ft.getState();if(ie.activeTool==="place"&&ie.activePrimitiveType){const J=ag(ie.activePrimitiveType,D.gridX,D.gridZ,ie.boundingBox,ie.primitives);Ft.getState().setHoverGrid({x:D.gridX,z:D.gridZ},J),c.domElement.style.cursor=J?"crosshair":"not-allowed"}else c.domElement.style.cursor="default"},ue=()=>{Ft.getState().setHoverGrid(null,!1),c.domElement.style.cursor="default"},pe=V=>{if(z)return;const D=Ft.getState();if(D.activeTool==="place"&&D.activePrimitiveType){const I=R(V.clientX,V.clientY);if(!I)return;Ft.getState().placePrimitive(I.gridX,I.gridZ);return}const ie=c.domElement.getBoundingClientRect();v.x=(V.clientX-ie.left)/ie.width*2-1,v.y=-((V.clientY-ie.top)/ie.height)*2+1,_.setFromCamera(v,a);const J=_.intersectObjects([...P.values()]);if(J.length>0){const I=J[0].object.userData.primitiveId;Ft.getState().selectPrimitive(I)}else Ft.getState().selectPrimitive(null)};c.domElement.addEventListener("pointerdown",oe),c.domElement.addEventListener("pointermove",ne),c.domElement.addEventListener("pointerleave",ue),c.domElement.addEventListener("click",pe);const re=()=>{N=requestAnimationFrame(re),f.update(),c.render(r,a)};return re(),K(q.boundingBox),ye(q),{sync(V){const D=V.boundingBox.width!==q.boundingBox.width||V.boundingBox.depth!==q.boundingBox.depth||V.boundingBox.height!==q.boundingBox.height,ie=V.primitives!==q.primitives||V.selectedPrimitiveId!==q.selectedPrimitiveId,J=V.activeTool!==q.activeTool||V.activePrimitiveType!==q.activePrimitiveType||V.hoverGrid!==q.hoverGrid||V.placementValid!==q.placementValid;q=V,D&&K(V.boundingBox),ie&&ye(V),J&&E(V)},resize(){const V=s.clientWidth,D=s.clientHeight;V===0||D===0||(a.aspect=V/D,a.updateProjectionMatrix(),c.setSize(V,D))},dispose(){cancelAnimationFrame(N),c.domElement.removeEventListener("pointerdown",oe),c.domElement.removeEventListener("pointermove",ne),c.domElement.removeEventListener("pointerleave",ue),c.domElement.removeEventListener("click",pe);for(const D of P.values())D.geometry.dispose(),Array.isArray(D.material)?D.material.forEach(ie=>ie.dispose()):D.material.dispose();x.geometry.dispose(),x.material.dispose(),S.geometry.dispose(),S.material.dispose(),A.geometry.dispose(),A.material.dispose(),g.geometry.dispose(),(Array.isArray(g.material)?g.material:[g.material]).forEach(D=>D.dispose()),f.dispose(),c.dispose(),c.domElement.parentElement===s&&s.removeChild(c.domElement)}}}function vT(){const s=_r.useRef(null),[e,n]=_r.useState(null);return _r.useEffect(()=>{const r=s.current;if(!r)return;let a=null;try{a=_T(r),a.sync(Ft.getState()),requestAnimationFrame(()=>a==null?void 0:a.resize())}catch(d){const p=d instanceof Error?d.message:"Failed to initialize 3D view";console.error("Viewport init error:",d),n(p);return}const c=Ft.subscribe(d=>{a==null||a.sync(d)}),f=new ResizeObserver(()=>{a==null||a.resize()});return f.observe(r),()=>{f.disconnect(),c(),a==null||a.dispose()}},[]),e?ce.jsxs("div",{className:"canvas-error",children:[ce.jsx("h3",{children:"3D view failed to load"}),ce.jsx("p",{children:e}),ce.jsxs("p",{className:"canvas-error__hint",children:["Try refreshing the page. Make sure you are running via ",ce.jsx("code",{children:"npm run dev"}),", not opening the HTML file directly."]})]}):ce.jsx("div",{ref:s,className:"canvas-mount"})}function xT(){return ce.jsxs("div",{className:"canvas-container",children:[ce.jsx(vT,{}),ce.jsxs("div",{className:"canvas-hint",children:[ce.jsx("span",{children:"Drag to orbit"}),ce.jsx("span",{className:"canvas-hint__dot",children:"·"}),ce.jsx("span",{children:"Scroll to zoom"}),ce.jsx("span",{className:"canvas-hint__dot",children:"·"}),ce.jsx("span",{children:"Right-drag to pan"})]})]})}function yT(){const s=Ft(n=>n.removeSelected),e=Ft(n=>n.selectedPrimitiveId);return _r.useEffect(()=>{const n=r=>{(r.key==="Delete"||r.key==="Backspace")&&e&&(r.preventDefault(),s())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[s,e]),ce.jsxs("div",{className:"app-layout",children:[ce.jsx(Xv,{}),ce.jsx("main",{className:"app-main",children:ce.jsx(og,{children:ce.jsx(xT,{})})}),ce.jsx(jv,{})]})}function ST(){return ce.jsx(yT,{})}const Vg=document.getElementById("root");if(!Vg)throw new Error("Root element #root not found");Iv.createRoot(Vg).render(ce.jsx(_r.StrictMode,{children:ce.jsx(og,{children:ce.jsx(ST,{})})}));
