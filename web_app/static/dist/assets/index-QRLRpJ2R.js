(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function el(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},ms=[],xn=()=>{},sf=()=>!1,mo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),tl=n=>n.startsWith("onUpdate:"),Ct=Object.assign,nl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zh=Object.prototype.hasOwnProperty,it=(n,e)=>Zh.call(n,e),Fe=Array.isArray,gs=n=>or(n)==="[object Map]",rf=n=>or(n)==="[object Set]",Il=n=>or(n)==="[object Date]",je=n=>typeof n=="function",_t=n=>typeof n=="string",In=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",of=n=>(st(n)||je(n))&&je(n.then)&&je(n.catch),af=Object.prototype.toString,or=n=>af.call(n),Jh=n=>or(n).slice(8,-1),lf=n=>or(n)==="[object Object]",il=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hs=el(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),go=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Qh=/-\w/g,Mn=go(n=>n.replace(Qh,e=>e.slice(1).toUpperCase())),ed=/\B([A-Z])/g,Xi=go(n=>n.replace(ed,"-$1").toLowerCase()),cf=go(n=>n.charAt(0).toUpperCase()+n.slice(1)),Io=go(n=>n?`on${cf(n)}`:""),Pn=(n,e)=>!Object.is(n,e),No=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},uf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},td=n=>{const e=parseFloat(n);return isNaN(e)?n:e},nd=n=>{const e=_t(n)?Number(n):NaN;return isNaN(e)?n:e};let Nl;const _o=()=>Nl||(Nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yn(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=_t(i)?od(i):Yn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(_t(n)||st(n))return n}const id=/;(?![^(]*\))/g,sd=/:([^]+)/,rd=/\/\*[^]*?\*\//g;function od(n){const e={};return n.replace(rd,"").split(id).forEach(t=>{if(t){const i=t.split(sd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pt(n){let e="";if(_t(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=pt(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ld=el(ad);function ff(n){return!!n||n===""}function cd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=sl(n[i],e[i]);return t}function sl(n,e){if(n===e)return!0;let t=Il(n),i=Il(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=In(n),i=In(e),t||i)return n===e;if(t=Fe(n),i=Fe(e),t||i)return t&&i?cd(n,e):!1;if(t=st(n),i=st(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!sl(n[a],e[a]))return!1}}return String(n)===String(e)}const hf=n=>!!(n&&n.__v_isRef===!0),et=n=>_t(n)?n:n==null?"":Fe(n)||st(n)&&(n.toString===af||!je(n.toString))?hf(n)?et(n.value):JSON.stringify(n,df,2):String(n),df=(n,e)=>hf(e)?df(n,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Fo(i,r)+" =>"]=s,t),{})}:rf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Fo(t))}:In(e)?Fo(e):st(e)&&!Fe(e)&&!lf(e)?String(e):e,Fo=(n,e="")=>{var t;return In(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};function ud(n){return n==null?"initial":typeof n=="string"?n===""?" ":n:String(n)}/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class fd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){this._on>0&&--this._on===0&&(jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hd(){return jt}let at;const Oo=new WeakSet;class pf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oo.has(this)&&(Oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fl(this),_f(this);const e=at,t=Sn;at=this,Sn=!0;try{return this.fn()}finally{vf(this),at=e,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)al(e);this.deps=this.depsTail=void 0,Fl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ca(this)&&this.run()}get dirty(){return Ca(this)}}let mf=0,Vs,Gs;function gf(n,e=!1){if(n.flags|=8,e){n.next=Gs,Gs=n;return}n.next=Vs,Vs=n}function rl(){mf++}function ol(){if(--mf>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Vs;){let e=Vs;for(Vs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function _f(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),al(i),dd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ca(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function xf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zs)||(n.globalVersion=Zs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ca(n))))return;n.flags|=2;const e=n.dep,t=at,i=Sn;at=n,Sn=!0;try{_f(n);const s=n.fn(n._value);(e.version===0||Pn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{at=t,Sn=i,vf(n),n.flags&=-3}}function al(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)al(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function dd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Sn=!0;const Mf=[];function Zn(){Mf.push(Sn),Sn=!1}function Jn(){const n=Mf.pop();Sn=n===void 0?!0:n}function Fl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=at;at=void 0;try{e()}finally{at=t}}}let Zs=0;class pd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ll{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!at||!Sn||at===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==at)t=this.activeLink=new pd(at,this),at.deps?(t.prevDep=at.depsTail,at.depsTail.nextDep=t,at.depsTail=t):at.deps=at.depsTail=t,Sf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=at.depsTail,t.nextDep=void 0,at.depsTail.nextDep=t,at.depsTail=t,at.deps===t&&(at.deps=i)}return t}trigger(e){this.version++,Zs++,this.notify(e)}notify(e){rl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ol()}}}function Sf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Sf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ra=new WeakMap,Fi=Symbol(""),La=Symbol(""),Js=Symbol("");function Dt(n,e,t){if(Sn&&at){let i=Ra.get(n);i||Ra.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ll),s.map=i,s.key=t),s.track()}}function $n(n,e,t,i,s,r){const a=Ra.get(n);if(!a){Zs++;return}const o=l=>{l&&l.trigger()};if(rl(),e==="clear")a.forEach(o);else{const l=Fe(n),c=l&&il(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,p)=>{(p==="length"||p===Js||!In(p)&&p>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Js)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Fi)),gs(n)&&o(a.get(La)));break;case"delete":l||(o(a.get(Fi)),gs(n)&&o(a.get(La)));break;case"set":gs(n)&&o(a.get(Fi));break}}ol()}function qi(n){const e=tt(n);return e===n?e:(Dt(e,"iterate",Js),un(n)?e:e.map(yn))}function vo(n){return Dt(n=tt(n),"iterate",Js),n}function Cn(n,e){return Qn(n)?Ss(Oi(n)?yn(e):e):yn(e)}const md={__proto__:null,[Symbol.iterator](){return Bo(this,Symbol.iterator,n=>Cn(this,n))},concat(...n){return qi(this).concat(...n.map(e=>Fe(e)?qi(e):e))},entries(){return Bo(this,"entries",n=>(n[1]=Cn(this,n[1]),n))},every(n,e){return On(this,"every",n,e,void 0,arguments)},filter(n,e){return On(this,"filter",n,e,t=>t.map(i=>Cn(this,i)),arguments)},find(n,e){return On(this,"find",n,e,t=>Cn(this,t),arguments)},findIndex(n,e){return On(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return On(this,"findLast",n,e,t=>Cn(this,t),arguments)},findLastIndex(n,e){return On(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return On(this,"forEach",n,e,void 0,arguments)},includes(...n){return zo(this,"includes",n)},indexOf(...n){return zo(this,"indexOf",n)},join(n){return qi(this).join(n)},lastIndexOf(...n){return zo(this,"lastIndexOf",n)},map(n,e){return On(this,"map",n,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...n){return Ls(this,"push",n)},reduce(n,...e){return Ol(this,"reduce",n,e)},reduceRight(n,...e){return Ol(this,"reduceRight",n,e)},shift(){return Ls(this,"shift")},some(n,e){return On(this,"some",n,e,void 0,arguments)},splice(...n){return Ls(this,"splice",n)},toReversed(){return qi(this).toReversed()},toSorted(n){return qi(this).toSorted(n)},toSpliced(...n){return qi(this).toSpliced(...n)},unshift(...n){return Ls(this,"unshift",n)},values(){return Bo(this,"values",n=>Cn(this,n))}};function Bo(n,e,t){const i=vo(n),s=i[e]();return i!==n&&!un(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const gd=Array.prototype;function On(n,e,t,i,s,r){const a=vo(n),o=a!==n&&!un(n),l=a[e];if(l!==gd[e]){const h=l.apply(n,r);return o?yn(h):h}let c=t;a!==n&&(o?c=function(h,p){return t.call(this,Cn(n,h),p,n)}:t.length>2&&(c=function(h,p){return t.call(this,h,p,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Ol(n,e,t,i){const s=vo(n),r=s!==n&&!un(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=Cn(n,c)),t.call(this,c,Cn(n,u),h,n)}):t.length>3&&(a=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](a,...i);return o?Cn(n,l):l}function zo(n,e,t){const i=tt(n);Dt(i,"iterate",Js);const s=i[e](...t);return(s===-1||s===!1)&&hl(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function Ls(n,e,t=[]){Zn(),rl();const i=tt(n)[e].apply(n,t);return ol(),Jn(),i}const _d=el("__proto__,__v_isRef,__isVue"),yf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(In));function vd(n){In(n)||(n=String(n));const e=tt(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class Ef{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Cd:wf:r?Af:Tf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Fe(e);if(!s){let l;if(a&&(l=md[t]))return l;if(t==="hasOwnProperty")return vd}const o=Reflect.get(e,t,Ut(e)?e:i);if((In(t)?yf.has(t):_d(t))||(s||Dt(e,"get",t),r))return o;if(Ut(o)){const l=a&&il(t)?o:o.value;return s&&st(l)?Da(l):l}return st(o)?s?Da(o):ul(o):o}}class bf extends Ef{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Fe(e)&&il(t);if(!this._isShallow){const c=Qn(r);if(!un(i)&&!Qn(i)&&(r=tt(r),i=tt(i)),!a&&Ut(r)&&!Ut(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:it(e,t),l=Reflect.set(e,t,i,Ut(e)?e:s);return e===tt(s)&&(o?Pn(i,r)&&$n(e,"set",t,i):$n(e,"add",t,i)),l}deleteProperty(e,t){const i=it(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&$n(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!In(t)||!yf.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",Fe(e)?"length":Fi),Reflect.ownKeys(e)}}class xd extends Ef{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Md=new bf,Sd=new xd,yd=new bf(!0);const Pa=n=>n,gr=n=>Reflect.getPrototypeOf(n);function Ed(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),a=gs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Pa:e?Ss:yn;return!e&&Dt(r,"iterate",l?La:Fi),Ct(Object.create(c),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:o?[u(h[0]),u(h[1])]:u(h),done:p}}})}}function _r(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function bd(n,e){const t={get(s){const r=this.__v_raw,a=tt(r),o=tt(s);n||(Pn(s,o)&&Dt(a,"get",s),Dt(a,"get",o));const{has:l}=gr(a),c=e?Pa:n?Ss:yn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Dt(tt(s),"iterate",Fi),s.size},has(s){const r=this.__v_raw,a=tt(r),o=tt(s);return n||(Pn(s,o)&&Dt(a,"has",s),Dt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=tt(o),c=e?Pa:n?Ss:yn;return!n&&Dt(l,"iterate",Fi),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return Ct(t,n?{add:_r("add"),set:_r("set"),delete:_r("delete"),clear:_r("clear")}:{add(s){const r=tt(this),a=gr(r),o=tt(s),l=!e&&!un(s)&&!Qn(s)?o:s;return a.has.call(r,l)||Pn(s,l)&&a.has.call(r,s)||Pn(o,l)&&a.has.call(r,o)||(r.add(l),$n(r,"add",l,l)),this},set(s,r){!e&&!un(r)&&!Qn(r)&&(r=tt(r));const a=tt(this),{has:o,get:l}=gr(a);let c=o.call(a,s);c||(s=tt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Pn(r,u)&&$n(a,"set",s,r):$n(a,"add",s,r),this},delete(s){const r=tt(this),{has:a,get:o}=gr(r);let l=a.call(r,s);l||(s=tt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&$n(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,a=s.clear();return r&&$n(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ed(s,n,e)}),t}function cl(n,e){const t=bd(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(it(t,s)&&s in i?t:i,s,r)}const Td={get:cl(!1,!1)},Ad={get:cl(!1,!0)},wd={get:cl(!0,!1)};const Tf=new WeakMap,Af=new WeakMap,wf=new WeakMap,Cd=new WeakMap;function Rd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ld(n){return n.__v_skip||!Object.isExtensible(n)?0:Rd(Jh(n))}function ul(n){return Qn(n)?n:fl(n,!1,Md,Td,Tf)}function Pd(n){return fl(n,!1,yd,Ad,Af)}function Da(n){return fl(n,!0,Sd,wd,wf)}function fl(n,e,t,i,s){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Ld(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function Oi(n){return Qn(n)?Oi(n.__v_raw):!!(n&&n.__v_isReactive)}function Qn(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function hl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Dd(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&uf(n,"__v_skip",!0),n}const yn=n=>st(n)?ul(n):n,Ss=n=>st(n)?Da(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function nt(n){return Ud(n,!1)}function Ud(n,e){return Ut(n)?n:new Id(n,e)}class Id{constructor(e,t){this.dep=new ll,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||un(e)||Qn(e);e=i?e:tt(e),Pn(e,t)&&(this._rawValue=e,this._value=i?e:yn(e),this.dep.trigger())}}function Nd(n){return Ut(n)?n.value:n}const Fd={get:(n,e,t)=>e==="__v_raw"?n:Nd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ut(s)&&!Ut(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Cf(n){return Oi(n)?n:new Proxy(n,Fd)}class Od{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ll(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&at!==this)return gf(this,!0),!0}get value(){const e=this.dep.track();return xf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bd(n,e,t=!1){let i,s;return je(n)?i=n:(i=n.get,s=n.set),new Od(i,s,t)}const vr={},Zr=new WeakMap;let Ri;function zd(n,e=!1,t=Ri){if(t){let i=Zr.get(t);i||Zr.set(t,i=[]),i.push(n)}}function Hd(n,e,t=lt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=y=>s?y:un(y)||s===!1||s===0?ui(y,1):ui(y);let u,h,p,m,v=!1,g=!1;if(Ut(n)?(h=()=>n.value,v=un(n)):Oi(n)?(h=()=>c(n),v=!0):Fe(n)?(g=!0,v=n.some(y=>Oi(y)||un(y)),h=()=>n.map(y=>{if(Ut(y))return y.value;if(Oi(y))return c(y);if(je(y))return l?l(y,2):y()})):je(n)?e?h=l?()=>l(n,2):n:h=()=>{if(p){Zn();try{p()}finally{Jn()}}const y=Ri;Ri=u;try{return l?l(n,3,[m]):n(m)}finally{Ri=y}}:h=xn,e&&s){const y=h,w=s===!0?1/0:s;h=()=>ui(y(),w)}const d=hd(),f=()=>{u.stop(),d&&d.active&&nl(d.effects,u)};if(r&&e){const y=e;e=(...w)=>{y(...w),f()}}let x=g?new Array(n.length).fill(vr):vr;const _=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const w=u.run();if(s||v||(g?w.some((C,b)=>Pn(C,x[b])):Pn(w,x))){p&&p();const C=Ri;Ri=u;try{const b=[w,x===vr?void 0:g&&x[0]===vr?[]:x,m];x=w,l?l(e,3,b):e(...b)}finally{Ri=C}}}else u.run()};return o&&o(_),u=new pf(h),u.scheduler=a?()=>a(_,!1):_,m=y=>zd(y,!1,u),p=u.onStop=()=>{const y=Zr.get(u);if(y){if(l)l(y,4);else for(const w of y)w();Zr.delete(u)}},e?i?_(!0):x=u.run():a?a(_.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function ui(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ut(n))ui(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)ui(n[i],e,t);else if(rf(n)||gs(n))n.forEach(i=>{ui(i,e,t)});else if(lf(n)){for(const i in n)ui(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ar(n,e,t,i){try{return i?n(...i):n()}catch(s){xo(s,e,t)}}function En(n,e,t,i){if(je(n)){const s=ar(n,e,t,i);return s&&of(s)&&s.catch(r=>{xo(r,e,t)}),s}if(Fe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(En(n[r],e,t,i));return s}}function xo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||lt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){Zn(),ar(r,null,10,[n,l,c]),Jn();return}}Vd(n,t,s,i,a)}function Vd(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const zt=[];let An=-1;const _s=[];let li=null,hs=0;const Rf=Promise.resolve();let Jr=null;function dl(n){const e=Jr||Rf;return n?e.then(this?n.bind(this):n):e}function Gd(n){let e=An+1,t=zt.length;for(;e<t;){const i=e+t>>>1,s=zt[i],r=Qs(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function pl(n){if(!(n.flags&1)){const e=Qs(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=Qs(t)?zt.push(n):zt.splice(Gd(e),0,n),n.flags|=1,Lf()}}function Lf(){Jr||(Jr=Rf.then(Uf))}function Pf(n){Fe(n)?_s.push(...n):li&&n.id===-1?li.splice(hs+1,0,n):n.flags&1||(_s.push(n),n.flags|=1),Lf()}function Bl(n,e,t=An+1){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Df(n){if(_s.length){const e=[...new Set(_s)].sort((t,i)=>Qs(t)-Qs(i));if(_s.length=0,li){li.push(...e);return}for(li=e,hs=0;hs<li.length;hs++){const t=li[hs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}li=null,hs=0}}const Qs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uf(n){try{for(An=0;An<zt.length;An++){const e=zt[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ar(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<zt.length;An++){const e=zt[An];e&&(e.flags&=-2)}An=-1,zt.length=0,Df(),Jr=null,(zt.length||_s.length)&&Uf()}}let Dn=null,If=null;function Qr(n){const e=Dn;return Dn=n,If=n&&n.type.__scopeId||null,e}function Ua(n,e=Dn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&no(-1);const r=Qr(e);let a;try{a=n(...s)}finally{Qr(r),i._d&&no(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Si(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Zn(),En(l,t,8,[n.el,o,n,e]),Jn())}}function kd(n,e){if(Gt){let t=Gt.provides;const i=Gt.parent&&Gt.parent.provides;i===t&&(t=Gt.provides=Object.create(i)),t[n]=e}}function jr(n,e,t=!1){const i=vl();if(i||vs){let s=vs?vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Wd=Symbol.for("v-scx"),Xd=()=>jr(Wd);function Bi(n,e,t){return Nf(n,e,t)}function Nf(n,e,t=lt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Ct({},t),l=e&&i||!e&&r!=="post";let c;if(nr){if(r==="sync"){const m=Xd();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=xn,m.resume=xn,m.pause=xn,m}}const u=Gt;o.call=(m,v,g)=>En(m,u,v,g);let h=!1;r==="post"?o.scheduler=m=>{Xt(m,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(m,v)=>{v?m():pl(m)}),o.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=Hd(n,e,o);return nr&&(c?c.push(p):l&&p()),p}function jd(n,e,t){const i=this.proxy,s=_t(n)?n.includes(".")?Ff(i,n):()=>i[n]:n.bind(i,i);let r;je(e)?r=e:(r=e.handler,t=e);const a=cr(this),o=Nf(s,r.bind(i),t);return a(),o}function Ff(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const qd=Symbol("_vte"),Of=n=>n.__isTeleport,wn=Symbol("_leaveCb"),Ps=Symbol("_enterCb");function Yd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return As(()=>{n.isMounted=!0}),jf(()=>{n.isUnmounting=!0}),n}const sn=[Function,Array],Bf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},zf=n=>{const e=n.subTree;return e.component?zf(e.component):e},$d={name:"BaseTransition",props:Bf,setup(n,{slots:e}){const t=vl(),i=Yd();return()=>{const s=e.default&&Gf(e.default(),!0);if(!s||!s.length)return;const r=Hf(s),a=tt(n),{mode:o}=a;if(i.isLeaving)return Ho(r);const l=zl(r);if(!l)return Ho(r);let c=Ia(l,a,i,t,h=>c=h);l.type!==Vt&&er(l,c);let u=t.subTree&&zl(t.subTree);if(u&&u.type!==Vt&&!Pi(u,l)&&zf(t).type!==Vt){let h=Ia(u,a,i,t);if(er(u,h),o==="out-in"&&l.type!==Vt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Ho(r);o==="in-out"&&l.type!==Vt?h.delayLeave=(p,m,v)=>{const g=Vf(i,u);g[String(u.key)]=u,p[wn]=()=>{m(),p[wn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Hf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Vt){e=t;break}}return e}const Kd=$d;function Vf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ia(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:p,onLeave:m,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:d,onAppear:f,onAfterAppear:x,onAppearCancelled:_}=e,y=String(n.key),w=Vf(t,n),C=(E,T)=>{E&&En(E,i,9,T)},b=(E,T)=>{const D=T[1];C(E,T),Fe(E)?E.every(N=>N.length<=1)&&D():E.length<=1&&D()},z={mode:a,persisted:o,beforeEnter(E){let T=l;if(!t.isMounted)if(r)T=d||l;else return;E[wn]&&E[wn](!0);const D=w[y];D&&Pi(n,D)&&D.el[wn]&&D.el[wn](),C(T,[E])},enter(E){if(w[y]===n)return;let T=c,D=u,N=h;if(!t.isMounted)if(r)T=f||c,D=x||u,N=_||h;else return;let Y=!1;E[Ps]=k=>{Y||(Y=!0,k?C(N,[E]):C(D,[E]),z.delayedLeave&&z.delayedLeave(),E[Ps]=void 0)};const U=E[Ps].bind(null,!1);T?b(T,[E,U]):U()},leave(E,T){const D=String(n.key);if(E[Ps]&&E[Ps](!0),t.isUnmounting)return T();C(p,[E]);let N=!1;E[wn]=U=>{N||(N=!0,T(),U?C(g,[E]):C(v,[E]),E[wn]=void 0,w[D]===n&&delete w[D])};const Y=E[wn].bind(null,!1);w[D]=n,m?b(m,[E,Y]):Y()},clone(E){const T=Ia(E,e,t,i,s);return s&&s(T),T}};return z}function Ho(n){if(Mo(n))return n=_i(n),n.children=null,n}function zl(n){if(!Mo(n))return Of(n.type)&&n.children?Hf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&je(t.default))return t.default()}}function er(n,e){n.shapeFlag&6&&n.component?(n.transition=e,er(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Gf(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===ht?(a.patchFlag&128&&s++,i=i.concat(Gf(a.children,e,o))):(e||a.type!==Vt)&&i.push(o!=null?_i(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function kf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const eo=new WeakMap;function ks(n,e,t,i,s=!1){if(Fe(n)){n.forEach((g,d)=>ks(g,e&&(Fe(e)?e[d]:e),t,i,s));return}if(Ws(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ks(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?xl(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===lt?o.refs={}:o.refs,h=o.setupState,p=tt(h),m=h===lt?sf:g=>Hl(u,g)?!1:it(p,g),v=(g,d)=>!(d&&Hl(u,d));if(c!=null&&c!==l){if(Vl(e),_t(c))u[c]=null,m(c)&&(h[c]=null);else if(Ut(c)){const g=e;v(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(je(l))ar(l,o,12,[a,u]);else{const g=_t(l),d=Ut(l);if(g||d){const f=()=>{if(n.f){const x=g?m(l)?h[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Fe(x)&&nl(x,r);else if(Fe(x))x.includes(r)||x.push(r);else if(g)u[l]=[r],m(l)&&(h[l]=u[l]);else{const _=[r];v(l,n.k)&&(l.value=_),n.k&&(u[n.k]=_)}}else g?(u[l]=a,m(l)&&(h[l]=a)):d&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const x=()=>{f(),eo.delete(n)};x.id=-1,eo.set(n,x),Xt(x,t)}else Vl(n),f()}}}function Vl(n){const e=eo.get(n);e&&(e.flags|=8,eo.delete(n))}_o().requestIdleCallback;_o().cancelIdleCallback;const Ws=n=>!!n.type.__asyncLoader,Mo=n=>n.type.__isKeepAlive;function Zd(n,e){Wf(n,"a",e)}function Jd(n,e){Wf(n,"da",e)}function Wf(n,e,t=Gt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(So(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Mo(s.parent.vnode)&&Qd(i,e,t,s),s=s.parent}}function Qd(n,e,t,i){const s=So(e,n,i,!0);lr(()=>{nl(i[e],s)},t)}function So(n,e,t=Gt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Zn();const o=cr(t),l=En(e,t,n,a);return o(),Jn(),l});return i?s.unshift(r):s.push(r),r}}const ti=n=>(e,t=Gt)=>{(!nr||n==="sp")&&So(n,(...i)=>e(...i),t)},ep=ti("bm"),As=ti("m"),Xf=ti("bu"),tp=ti("u"),jf=ti("bum"),lr=ti("um"),np=ti("sp"),ip=ti("rtg"),sp=ti("rtc");function rp(n,e=Gt){So("ec",n,e)}const op=Symbol.for("v-ndc");function fi(n,e,t,i){let s;const r=t,a=Fe(n);if(a||_t(n)){const o=a&&Oi(n);let l=!1,c=!1;o&&(l=!un(n),c=Qn(n),n=vo(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Ss(yn(n[u])):yn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(st(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Na=n=>n?hh(n)?xl(n):Na(n.parent):null,Xs=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Na(n.parent),$root:n=>Na(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yf(n),$forceUpdate:n=>n.f||(n.f=()=>{pl(n.update)}),$nextTick:n=>n.n||(n.n=dl.bind(n.proxy)),$watch:n=>jd.bind(n)}),Vo=(n,e)=>n!==lt&&!n.__isScriptSetup&&it(n,e),ap={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Vo(i,e))return a[e]=1,i[e];if(s!==lt&&it(s,e))return a[e]=2,s[e];if(it(r,e))return a[e]=3,r[e];if(t!==lt&&it(t,e))return a[e]=4,t[e];Fa&&(a[e]=0)}}const c=Xs[e];let u,h;if(c)return e==="$attrs"&&Dt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==lt&&it(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,it(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Vo(s,e)?(s[e]=t,!0):i!==lt&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==lt&&o[0]!=="$"&&it(n,o)||Vo(e,o)||it(r,o)||it(i,o)||it(Xs,o)||it(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Gl(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Fa=!0;function lp(n){const e=Yf(n),t=n.proxy,i=n.ctx;Fa=!1,e.beforeCreate&&kl(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:v,activated:g,deactivated:d,beforeDestroy:f,beforeUnmount:x,destroyed:_,unmounted:y,render:w,renderTracked:C,renderTriggered:b,errorCaptured:z,serverPrefetch:E,expose:T,inheritAttrs:D,components:N,directives:Y,filters:U}=e;if(c&&cp(c,i,null),a)for(const q in a){const re=a[q];je(re)&&(i[q]=re.bind(t))}if(s){const q=s.call(t,t);st(q)&&(n.data=ul(q))}if(Fa=!0,r)for(const q in r){const re=r[q],ue=je(re)?re.bind(t,t):je(re.get)?re.get.bind(t,t):xn,ce=!je(re)&&je(re.set)?re.set.bind(t):xn,H=vn({get:ue,set:ce});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>H.value,set:j=>H.value=j})}if(o)for(const q in o)qf(o[q],i,t,q);if(l){const q=je(l)?l.call(t):l;Reflect.ownKeys(q).forEach(re=>{kd(re,q[re])})}u&&kl(u,n,"c");function ee(q,re){Fe(re)?re.forEach(ue=>q(ue.bind(t))):re&&q(re.bind(t))}if(ee(ep,h),ee(As,p),ee(Xf,m),ee(tp,v),ee(Zd,g),ee(Jd,d),ee(rp,z),ee(sp,C),ee(ip,b),ee(jf,x),ee(lr,y),ee(np,E),Fe(T))if(T.length){const q=n.exposed||(n.exposed={});T.forEach(re=>{Object.defineProperty(q,re,{get:()=>t[re],set:ue=>t[re]=ue,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===xn&&(n.render=w),D!=null&&(n.inheritAttrs=D),N&&(n.components=N),Y&&(n.directives=Y),E&&kf(n)}function cp(n,e,t=xn){Fe(n)&&(n=Oa(n));for(const i in n){const s=n[i];let r;st(s)?"default"in s?r=jr(s.from||i,s.default,!0):r=jr(s.from||i):r=jr(s),Ut(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function kl(n,e,t){En(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function qf(n,e,t,i){let s=i.includes(".")?Ff(t,i):()=>t[i];if(_t(n)){const r=e[n];je(r)&&Bi(s,r)}else if(je(n))Bi(s,n.bind(t));else if(st(n))if(Fe(n))n.forEach(r=>qf(r,e,t,i));else{const r=je(n.handler)?n.handler.bind(t):e[n.handler];je(r)&&Bi(s,r,n)}}function Yf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>to(l,c,a,!0)),to(l,e,a)),st(e)&&r.set(e,l),l}function to(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&to(n,r,t,!0),s&&s.forEach(a=>to(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=up[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const up={data:Wl,props:Xl,emits:Xl,methods:Bs,computed:Bs,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Bs,directives:Bs,watch:hp,provide:Wl,inject:fp};function Wl(n,e){return e?n?function(){return Ct(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function fp(n,e){return Bs(Oa(n),Oa(e))}function Oa(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Bs(n,e){return n?Ct(Object.create(null),n,e):e}function Xl(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Ct(Object.create(null),Gl(n),Gl(e??{})):e}function hp(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Ft(n[i],e[i]);return t}function $f(){return{app:null,config:{isNativeTag:sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dp=0;function pp(n,e){return function(i,s=null){je(i)||(i=Ct({},i)),s!=null&&!st(s)&&(s=null);const r=$f(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:dp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:qp,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&je(u.install)?(a.add(u),u.install(c,...h)):je(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,p){if(!l){const m=c._ceVNode||mt(i,s);return m.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),n(m,u,p),l=!0,c._container=u,u.__vue_app__=c,xl(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(En(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=vs;vs=c;try{return u()}finally{vs=h}}};return c}}let vs=null;const mp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Mn(e)}Modifiers`]||n[`${Xi(e)}Modifiers`];function gp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let s=t;const r=e.startsWith("update:"),a=r&&mp(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>_t(u)?u.trim():u)),a.number&&(s=t.map(td)));let o,l=i[o=Io(e)]||i[o=Io(Mn(e))];!l&&r&&(l=i[o=Io(Xi(e))]),l&&En(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,En(c,n,6,s)}}const _p=new WeakMap;function Kf(n,e,t=!1){const i=t?_p:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!je(n)){const l=c=>{const u=Kf(c,e,!0);u&&(o=!0,Ct(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(st(n)&&i.set(n,null),null):(Fe(r)?r.forEach(l=>a[l]=null):Ct(a,r),st(n)&&i.set(n,a),a)}function yo(n,e){return!n||!mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,Xi(e))||it(n,e))}function jl(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:p,setupState:m,ctx:v,inheritAttrs:g}=n,d=Qr(n);let f,x;try{if(t.shapeFlag&4){const y=s||i,w=y;f=Rn(c.call(w,y,u,h,m,p,v)),x=o}else{const y=e;f=Rn(y.length>1?y(h,{attrs:o,slots:a,emit:l}):y(h,null)),x=e.props?o:vp(o)}}catch(y){qs.length=0,xo(y,n,1),f=mt(Vt)}let _=f;if(x&&g!==!1){const y=Object.keys(x),{shapeFlag:w}=_;y.length&&w&7&&(r&&y.some(tl)&&(x=xp(x,r)),_=_i(_,x,!1,!0))}return t.dirs&&(_=_i(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&er(_,t.transition),f=_,Qr(d),f}const vp=n=>{let e;for(const t in n)(t==="class"||t==="style"||mo(t))&&((e||(e={}))[t]=n[t]);return e},xp=(n,e)=>{const t={};for(const i in n)(!tl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Mp(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ql(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(Zf(a,i,p)&&!yo(c,p))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ql(i,a,c):!0:!!a;return!1}function ql(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Zf(e,n,r)&&!yo(t,r))return!0}return!1}function Zf(n,e,t){const i=n[t],s=e[t];return t==="style"&&st(i)&&st(s)?!sl(i,s):i!==s}function Sp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Jf={},Qf=()=>Object.create(Jf),eh=n=>Object.getPrototypeOf(n)===Jf;function yp(n,e,t,i=!1){const s={},r=Qf();n.propsDefaults=Object.create(null),th(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Pd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Ep(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=tt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(yo(n.emitsOptions,p))continue;const m=e[p];if(l)if(it(r,p))m!==r[p]&&(r[p]=m,c=!0);else{const v=Mn(p);s[v]=Ba(l,o,v,m,n,!1)}else m!==r[p]&&(r[p]=m,c=!0)}}}else{th(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!it(e,h)&&((u=Xi(h))===h||!it(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ba(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!it(e,h))&&(delete r[h],c=!0)}c&&$n(n.attrs,"set","")}function th(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Hs(l))continue;const c=e[l];let u;s&&it(s,u=Mn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:yo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=tt(t),c=o||lt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ba(s,l,h,c[h],n,!it(c,h))}}return a}function Ba(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=it(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=cr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Xi(t))&&(i=!0))}return i}const bp=new WeakMap;function nh(n,e,t=!1){const i=t?bp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!je(n)){const u=h=>{l=!0;const[p,m]=nh(h,e,!0);Ct(a,p),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return st(n)&&i.set(n,ms),ms;if(Fe(r))for(let u=0;u<r.length;u++){const h=Mn(r[u]);Yl(h)&&(a[h]=lt)}else if(r)for(const u in r){const h=Mn(u);if(Yl(h)){const p=r[u],m=a[h]=Fe(p)||je(p)?{type:p}:Ct({},p),v=m.type;let g=!1,d=!0;if(Fe(v))for(let f=0;f<v.length;++f){const x=v[f],_=je(x)&&x.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(d=!1)}else g=je(v)&&v.name==="Boolean";m[0]=g,m[1]=d,(g||it(m,"default"))&&o.push(h)}}const c=[a,o];return st(n)&&i.set(n,c),c}function Yl(n){return n[0]!=="$"&&!Hs(n)}const ml=n=>n==="_"||n==="_ctx"||n==="$stable",gl=n=>Fe(n)?n.map(Rn):[Rn(n)],Tp=(n,e,t)=>{if(e._n)return e;const i=Ua((...s)=>gl(e(...s)),t);return i._c=!1,i},ih=(n,e,t)=>{const i=n._ctx;for(const s in n){if(ml(s))continue;const r=n[s];if(je(r))e[s]=Tp(s,r,i);else if(r!=null){const a=gl(r);e[s]=()=>a}}},sh=(n,e)=>{const t=gl(e);n.slots.default=()=>t},rh=(n,e,t)=>{for(const i in e)(t||!ml(i))&&(n[i]=e[i])},Ap=(n,e,t)=>{const i=n.slots=Qf();if(n.vnode.shapeFlag&32){const s=e._;s?(rh(i,e,t),t&&uf(i,"_",s,!0)):ih(e,i)}else e&&sh(n,e)},wp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=lt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:rh(s,e,t):(r=!e.$stable,ih(e,s)),a=e}else e&&(sh(n,e),a={default:1});if(r)for(const o in s)!ml(o)&&a[o]==null&&delete s[o]},Xt=Dp;function Cp(n){return Rp(n)}function Rp(n,e){const t=_o();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=xn,insertStaticContent:v}=n,g=(S,L,P,V=null,B=null,X=null,K=void 0,J=null,oe=!!L.dynamicChildren)=>{if(S===L)return;S&&!Pi(S,L)&&(V=Oe(S),j(S,B,X,!0),S=null),L.patchFlag===-2&&(oe=!1,L.dynamicChildren=null);const{type:te,ref:ye,shapeFlag:A}=L;switch(te){case Eo:d(S,L,P,V);break;case Vt:f(S,L,P,V);break;case js:S==null&&x(L,P,V,K);break;case ht:N(S,L,P,V,B,X,K,J,oe);break;default:A&1?w(S,L,P,V,B,X,K,J,oe):A&6?Y(S,L,P,V,B,X,K,J,oe):(A&64||A&128)&&te.process(S,L,P,V,B,X,K,J,oe,Qe)}ye!=null&&B?ks(ye,S&&S.ref,X,L||S,!L):ye==null&&S&&S.ref!=null&&ks(S.ref,null,X,S,!0)},d=(S,L,P,V)=>{if(S==null)i(L.el=o(L.children),P,V);else{const B=L.el=S.el;L.children!==S.children&&c(B,L.children)}},f=(S,L,P,V)=>{S==null?i(L.el=l(L.children||""),P,V):L.el=S.el},x=(S,L,P,V)=>{[S.el,S.anchor]=v(S.children,L,P,V,S.el,S.anchor)},_=({el:S,anchor:L},P,V)=>{let B;for(;S&&S!==L;)B=p(S),i(S,P,V),S=B;i(L,P,V)},y=({el:S,anchor:L})=>{let P;for(;S&&S!==L;)P=p(S),s(S),S=P;s(L)},w=(S,L,P,V,B,X,K,J,oe)=>{if(L.type==="svg"?K="svg":L.type==="math"&&(K="mathml"),S==null)C(L,P,V,B,X,K,J,oe);else{const te=S.el&&S.el._isVueCE?S.el:null;try{te&&te._beginPatch(),E(S,L,B,X,K,J,oe)}finally{te&&te._endPatch()}}},C=(S,L,P,V,B,X,K,J)=>{let oe,te;const{props:ye,shapeFlag:A,transition:M,dirs:F}=S;if(oe=S.el=a(S.type,X,ye&&ye.is,ye),A&8?u(oe,S.children):A&16&&z(S.children,oe,null,V,B,Go(S,X),K,J),F&&Si(S,null,V,"created"),b(oe,S,S.scopeId,K,V),ye){for(const ie in ye)ie!=="value"&&!Hs(ie)&&r(oe,ie,null,ye[ie],X,V);"value"in ye&&r(oe,"value",null,ye.value,X),(te=ye.onVnodeBeforeMount)&&Tn(te,V,S)}F&&Si(S,null,V,"beforeMount");const ne=Lp(B,M);ne&&M.beforeEnter(oe),i(oe,L,P),((te=ye&&ye.onVnodeMounted)||ne||F)&&Xt(()=>{te&&Tn(te,V,S),ne&&M.enter(oe),F&&Si(S,null,V,"mounted")},B)},b=(S,L,P,V,B)=>{if(P&&m(S,P),V)for(let X=0;X<V.length;X++)m(S,V[X]);if(B){let X=B.subTree;if(L===X||ch(X.type)&&(X.ssContent===L||X.ssFallback===L)){const K=B.vnode;b(S,K,K.scopeId,K.slotScopeIds,B.parent)}}},z=(S,L,P,V,B,X,K,J,oe=0)=>{for(let te=oe;te<S.length;te++){const ye=S[te]=J?qn(S[te]):Rn(S[te]);g(null,ye,L,P,V,B,X,K,J)}},E=(S,L,P,V,B,X,K)=>{const J=L.el=S.el;let{patchFlag:oe,dynamicChildren:te,dirs:ye}=L;oe|=S.patchFlag&16;const A=S.props||lt,M=L.props||lt;let F;if(P&&yi(P,!1),(F=M.onVnodeBeforeUpdate)&&Tn(F,P,L,S),ye&&Si(L,S,P,"beforeUpdate"),P&&yi(P,!0),(A.innerHTML&&M.innerHTML==null||A.textContent&&M.textContent==null)&&u(J,""),te?T(S.dynamicChildren,te,J,P,V,Go(L,B),X):K||re(S,L,J,null,P,V,Go(L,B),X,!1),oe>0){if(oe&16)D(J,A,M,P,B);else if(oe&2&&A.class!==M.class&&r(J,"class",null,M.class,B),oe&4&&r(J,"style",A.style,M.style,B),oe&8){const ne=L.dynamicProps;for(let ie=0;ie<ne.length;ie++){const ae=ne[ie],Se=A[ae],he=M[ae];(he!==Se||ae==="value")&&r(J,ae,Se,he,B,P)}}oe&1&&S.children!==L.children&&u(J,L.children)}else!K&&te==null&&D(J,A,M,P,B);((F=M.onVnodeUpdated)||ye)&&Xt(()=>{F&&Tn(F,P,L,S),ye&&Si(L,S,P,"updated")},V)},T=(S,L,P,V,B,X,K)=>{for(let J=0;J<L.length;J++){const oe=S[J],te=L[J],ye=oe.el&&(oe.type===ht||!Pi(oe,te)||oe.shapeFlag&198)?h(oe.el):P;g(oe,te,ye,null,V,B,X,K,!0)}},D=(S,L,P,V,B)=>{if(L!==P){if(L!==lt)for(const X in L)!Hs(X)&&!(X in P)&&r(S,X,L[X],null,B,V);for(const X in P){if(Hs(X))continue;const K=P[X],J=L[X];K!==J&&X!=="value"&&r(S,X,J,K,B,V)}"value"in P&&r(S,"value",L.value,P.value,B)}},N=(S,L,P,V,B,X,K,J,oe)=>{const te=L.el=S?S.el:o(""),ye=L.anchor=S?S.anchor:o("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:F}=L;F&&(J=J?J.concat(F):F),S==null?(i(te,P,V),i(ye,P,V),z(L.children||[],P,ye,B,X,K,J,oe)):A>0&&A&64&&M&&S.dynamicChildren&&S.dynamicChildren.length===M.length?(T(S.dynamicChildren,M,P,B,X,K,J),(L.key!=null||B&&L===B.subTree)&&oh(S,L,!0)):re(S,L,P,ye,B,X,K,J,oe)},Y=(S,L,P,V,B,X,K,J,oe)=>{L.slotScopeIds=J,S==null?L.shapeFlag&512?B.ctx.activate(L,P,V,K,oe):U(L,P,V,B,X,K,oe):k(S,L,oe)},U=(S,L,P,V,B,X,K)=>{const J=S.component=Hp(S,V,B);if(Mo(S)&&(J.ctx.renderer=Qe),Vp(J,!1,K),J.asyncDep){if(B&&B.registerDep(J,ee,K),!S.el){const oe=J.subTree=mt(Vt);f(null,oe,L,P),S.placeholder=oe.el}}else ee(J,S,L,P,B,X,K)},k=(S,L,P)=>{const V=L.component=S.component;if(Mp(S,L,P))if(V.asyncDep&&!V.asyncResolved){q(V,L,P);return}else V.next=L,V.update();else L.el=S.el,V.vnode=L},ee=(S,L,P,V,B,X,K)=>{const J=()=>{if(S.isMounted){let{next:A,bu:M,u:F,parent:ne,vnode:ie}=S;{const I=ah(S);if(I){A&&(A.el=ie.el,q(S,A,K)),I.asyncDep.then(()=>{Xt(()=>{S.isUnmounted||te()},B)});return}}let ae=A,Se;yi(S,!1),A?(A.el=ie.el,q(S,A,K)):A=ie,M&&No(M),(Se=A.props&&A.props.onVnodeBeforeUpdate)&&Tn(Se,ne,A,ie),yi(S,!0);const he=jl(S),ge=S.subTree;S.subTree=he,g(ge,he,h(ge.el),Oe(ge),S,B,X),A.el=he.el,ae===null&&Sp(S,he.el),F&&Xt(F,B),(Se=A.props&&A.props.onVnodeUpdated)&&Xt(()=>Tn(Se,ne,A,ie),B)}else{let A;const{el:M,props:F}=L,{bm:ne,m:ie,parent:ae,root:Se,type:he}=S,ge=Ws(L);yi(S,!1),ne&&No(ne),!ge&&(A=F&&F.onVnodeBeforeMount)&&Tn(A,ae,L),yi(S,!0);{Se.ce&&Se.ce._hasShadowRoot()&&Se.ce._injectChildStyle(he,S.parent?S.parent.type:void 0);const I=S.subTree=jl(S);g(null,I,P,V,S,B,X),L.el=I.el}if(ie&&Xt(ie,B),!ge&&(A=F&&F.onVnodeMounted)){const I=L;Xt(()=>Tn(A,ae,I),B)}(L.shapeFlag&256||ae&&Ws(ae.vnode)&&ae.vnode.shapeFlag&256)&&S.a&&Xt(S.a,B),S.isMounted=!0,L=P=V=null}};S.scope.on();const oe=S.effect=new pf(J);S.scope.off();const te=S.update=oe.run.bind(oe),ye=S.job=oe.runIfDirty.bind(oe);ye.i=S,ye.id=S.uid,oe.scheduler=()=>pl(ye),yi(S,!0),te()},q=(S,L,P)=>{L.component=S;const V=S.vnode.props;S.vnode=L,S.next=null,Ep(S,L.props,V,P),wp(S,L.children,P),Zn(),Bl(S),Jn()},re=(S,L,P,V,B,X,K,J,oe=!1)=>{const te=S&&S.children,ye=S?S.shapeFlag:0,A=L.children,{patchFlag:M,shapeFlag:F}=L;if(M>0){if(M&128){ce(te,A,P,V,B,X,K,J,oe);return}else if(M&256){ue(te,A,P,V,B,X,K,J,oe);return}}F&8?(ye&16&&Re(te,B,X),A!==te&&u(P,A)):ye&16?F&16?ce(te,A,P,V,B,X,K,J,oe):Re(te,B,X,!0):(ye&8&&u(P,""),F&16&&z(A,P,V,B,X,K,J,oe))},ue=(S,L,P,V,B,X,K,J,oe)=>{S=S||ms,L=L||ms;const te=S.length,ye=L.length,A=Math.min(te,ye);let M;for(M=0;M<A;M++){const F=L[M]=oe?qn(L[M]):Rn(L[M]);g(S[M],F,P,null,B,X,K,J,oe)}te>ye?Re(S,B,X,!0,!1,A):z(L,P,V,B,X,K,J,oe,A)},ce=(S,L,P,V,B,X,K,J,oe)=>{let te=0;const ye=L.length;let A=S.length-1,M=ye-1;for(;te<=A&&te<=M;){const F=S[te],ne=L[te]=oe?qn(L[te]):Rn(L[te]);if(Pi(F,ne))g(F,ne,P,null,B,X,K,J,oe);else break;te++}for(;te<=A&&te<=M;){const F=S[A],ne=L[M]=oe?qn(L[M]):Rn(L[M]);if(Pi(F,ne))g(F,ne,P,null,B,X,K,J,oe);else break;A--,M--}if(te>A){if(te<=M){const F=M+1,ne=F<ye?L[F].el:V;for(;te<=M;)g(null,L[te]=oe?qn(L[te]):Rn(L[te]),P,ne,B,X,K,J,oe),te++}}else if(te>M)for(;te<=A;)j(S[te],B,X,!0),te++;else{const F=te,ne=te,ie=new Map;for(te=ne;te<=M;te++){const we=L[te]=oe?qn(L[te]):Rn(L[te]);we.key!=null&&ie.set(we.key,te)}let ae,Se=0;const he=M-ne+1;let ge=!1,I=0;const pe=new Array(he);for(te=0;te<he;te++)pe[te]=0;for(te=F;te<=A;te++){const we=S[te];if(Se>=he){j(we,B,X,!0);continue}let be;if(we.key!=null)be=ie.get(we.key);else for(ae=ne;ae<=M;ae++)if(pe[ae-ne]===0&&Pi(we,L[ae])){be=ae;break}be===void 0?j(we,B,X,!0):(pe[be-ne]=te+1,be>=I?I=be:ge=!0,g(we,L[be],P,null,B,X,K,J,oe),Se++)}const fe=ge?Pp(pe):ms;for(ae=fe.length-1,te=he-1;te>=0;te--){const we=ne+te,be=L[we],Le=L[we+1],Ce=we+1<ye?Le.el||lh(Le):V;pe[te]===0?g(null,be,P,Ce,B,X,K,J,oe):ge&&(ae<0||te!==fe[ae]?H(be,P,Ce,2):ae--)}}},H=(S,L,P,V,B=null)=>{const{el:X,type:K,transition:J,children:oe,shapeFlag:te}=S;if(te&6){H(S.component.subTree,L,P,V);return}if(te&128){S.suspense.move(L,P,V);return}if(te&64){K.move(S,L,P,Qe);return}if(K===ht){i(X,L,P);for(let A=0;A<oe.length;A++)H(oe[A],L,P,V);i(S.anchor,L,P);return}if(K===js){_(S,L,P);return}if(V!==2&&te&1&&J)if(V===0)J.beforeEnter(X),i(X,L,P),Xt(()=>J.enter(X),B);else{const{leave:A,delayLeave:M,afterLeave:F}=J,ne=()=>{S.ctx.isUnmounted?s(X):i(X,L,P)},ie=()=>{X._isLeaving&&X[wn](!0),A(X,()=>{ne(),F&&F()})};M?M(X,ne,ie):ie()}else i(X,L,P)},j=(S,L,P,V=!1,B=!1)=>{const{type:X,props:K,ref:J,children:oe,dynamicChildren:te,shapeFlag:ye,patchFlag:A,dirs:M,cacheIndex:F}=S;if(A===-2&&(B=!1),J!=null&&(Zn(),ks(J,null,P,S,!0),Jn()),F!=null&&(L.renderCache[F]=void 0),ye&256){L.ctx.deactivate(S);return}const ne=ye&1&&M,ie=!Ws(S);let ae;if(ie&&(ae=K&&K.onVnodeBeforeUnmount)&&Tn(ae,L,S),ye&6)Ee(S.component,P,V);else{if(ye&128){S.suspense.unmount(P,V);return}ne&&Si(S,null,L,"beforeUnmount"),ye&64?S.type.remove(S,L,P,Qe,V):te&&!te.hasOnce&&(X!==ht||A>0&&A&64)?Re(te,L,P,!1,!0):(X===ht&&A&384||!B&&ye&16)&&Re(oe,L,P),V&&ve(S)}(ie&&(ae=K&&K.onVnodeUnmounted)||ne)&&Xt(()=>{ae&&Tn(ae,L,S),ne&&Si(S,null,L,"unmounted")},P)},ve=S=>{const{type:L,el:P,anchor:V,transition:B}=S;if(L===ht){xe(P,V);return}if(L===js){y(S);return}const X=()=>{s(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(S.shapeFlag&1&&B&&!B.persisted){const{leave:K,delayLeave:J}=B,oe=()=>K(P,X);J?J(S.el,X,oe):oe()}else X()},xe=(S,L)=>{let P;for(;S!==L;)P=p(S),s(S),S=P;s(L)},Ee=(S,L,P)=>{const{bum:V,scope:B,job:X,subTree:K,um:J,m:oe,a:te}=S;$l(oe),$l(te),V&&No(V),B.stop(),X&&(X.flags|=8,j(K,S,L,P)),J&&Xt(J,L),Xt(()=>{S.isUnmounted=!0},L)},Re=(S,L,P,V=!1,B=!1,X=0)=>{for(let K=X;K<S.length;K++)j(S[K],L,P,V,B)},Oe=S=>{if(S.shapeFlag&6)return Oe(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const L=p(S.anchor||S.el),P=L&&L[qd];return P?p(P):L};let Ue=!1;const Ie=(S,L,P)=>{let V;S==null?L._vnode&&(j(L._vnode,null,null,!0),V=L._vnode.component):g(L._vnode||null,S,L,null,null,null,P),L._vnode=S,Ue||(Ue=!0,Bl(V),Df(),Ue=!1)},Qe={p:g,um:j,m:H,r:ve,mt:U,mc:z,pc:re,pbc:T,n:Oe,o:n};return{render:Ie,hydrate:void 0,createApp:pp(Ie)}}function Go({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Lp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function oh(n,e,t=!1){const i=n.children,s=e.children;if(Fe(i)&&Fe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=qn(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&oh(a,o)),o.type===Eo&&(o.patchFlag===-1&&(o=s[r]=qn(o)),o.el=a.el),o.type===Vt&&!o.el&&(o.el=a.el)}}function Pp(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function ah(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ah(e)}function $l(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function lh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?lh(e.subTree):null}const ch=n=>n.__isSuspense;function Dp(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Pf(n)}const ht=Symbol.for("v-fgt"),Eo=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),js=Symbol.for("v-stc"),qs=[];let Qt=null;function Be(n=!1){qs.push(Qt=n?null:[])}function Up(){qs.pop(),Qt=qs[qs.length-1]||null}let tr=1;function no(n,e=!1){tr+=n,n<0&&Qt&&e&&(Qt.hasOnce=!0)}function uh(n){return n.dynamicChildren=tr>0?Qt||ms:null,Up(),tr>0&&Qt&&Qt.push(n),n}function Ve(n,e,t,i,s,r){return uh(le(n,e,t,i,s,r,!0))}function Ip(n,e,t,i,s){return uh(mt(n,e,t,i,s,!0))}function io(n){return n?n.__v_isVNode===!0:!1}function Pi(n,e){return n.type===e.type&&n.key===e.key}const fh=({key:n})=>n??null,qr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||Ut(n)||je(n)?{i:Dn,r:n,k:e,f:!!t}:n:null);function le(n,e=null,t=null,i=0,s=null,r=n===ht?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&fh(e),ref:e&&qr(e),scopeId:If,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dn};return o?(_l(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),tr>0&&!a&&Qt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Qt.push(l),l}const mt=Np;function Np(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===op)&&(n=Vt),io(n)){const o=_i(n,e,!0);return t&&_l(o,t),tr>0&&!r&&Qt&&(o.shapeFlag&6?Qt[Qt.indexOf(n)]=o:Qt.push(o)),o.patchFlag=-2,o}if(Xp(n)&&(n=n.__vccOpts),e){e=Fp(e);let{class:o,style:l}=e;o&&!_t(o)&&(e.class=pt(o)),st(l)&&(hl(l)&&!Fe(l)&&(l=Ct({},l)),e.style=Yn(l))}const a=_t(n)?1:ch(n)?128:Of(n)?64:st(n)?4:je(n)?2:0;return le(n,e,t,i,s,a,r,!0)}function Fp(n){return n?hl(n)||eh(n)?Ct({},n):n:null}function _i(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Op(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&fh(c),ref:e&&e.ref?t&&r?Fe(r)?r.concat(qr(e)):[r,qr(e)]:qr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ht?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&_i(n.ssContent),ssFallback:n.ssFallback&&_i(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&er(u,l.clone(u)),u}function ds(n=" ",e=0){return mt(Eo,null,n,e)}function so(n,e){const t=mt(js,null,n);return t.staticCount=e,t}function Rt(n="",e=!1){return e?(Be(),Ip(Vt,null,n)):mt(Vt,null,n)}function Rn(n){return n==null||typeof n=="boolean"?mt(Vt):Fe(n)?mt(ht,null,n.slice()):io(n)?qn(n):mt(Eo,null,String(n))}function qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:_i(n)}function _l(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),_l(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!eh(e)?e._ctx=Dn:s===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:Dn},t=32):(e=String(e),i&64?(t=16,e=[ds(e)]):t=8);n.children=e,n.shapeFlag|=t}function Op(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=pt([e.class,i.class]));else if(s==="style")e.style=Yn([e.style,i.style]);else if(mo(s)){const r=e[s],a=i[s];a&&r!==a&&!(Fe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Tn(n,e,t,i=null){En(n,e,7,[t,i])}const Bp=$f();let zp=0;function Hp(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Bp,r={uid:zp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nh(i,s),emitsOptions:Kf(i,s),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gp.bind(null,r),n.ce&&n.ce(r),r}let Gt=null;const vl=()=>Gt||Dn;let ro,za;{const n=_o(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};ro=e("__VUE_INSTANCE_SETTERS__",t=>Gt=t),za=e("__VUE_SSR_SETTERS__",t=>nr=t)}const cr=n=>{const e=Gt;return ro(n),n.scope.on(),()=>{n.scope.off(),ro(e)}},Kl=()=>{Gt&&Gt.scope.off(),ro(null)};function hh(n){return n.vnode.shapeFlag&4}let nr=!1;function Vp(n,e=!1,t=!1){e&&za(e);const{props:i,children:s}=n.vnode,r=hh(n);yp(n,i,r,e),Ap(n,s,t||e);const a=r?Gp(n,e):void 0;return e&&za(!1),a}function Gp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ap);const{setup:i}=t;if(i){Zn();const s=n.setupContext=i.length>1?Wp(n):null,r=cr(n),a=ar(i,n,0,[n.props,s]),o=of(a);if(Jn(),r(),(o||n.sp)&&!Ws(n)&&kf(n),o){if(a.then(Kl,Kl),e)return a.then(l=>{Zl(n,l)}).catch(l=>{xo(l,n,0)});n.asyncDep=a}else Zl(n,a)}else dh(n)}function Zl(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=Cf(e)),dh(n)}function dh(n,e,t){const i=n.type;n.render||(n.render=i.render||xn);{const s=cr(n);Zn();try{lp(n)}finally{Jn(),s()}}}const kp={get(n,e){return Dt(n,"get",""),n[e]}};function Wp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,kp),slots:n.slots,emit:n.emit,expose:e}}function xl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Cf(Dd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Xs)return Xs[t](n)},has(e,t){return t in e||t in Xs}})):n.proxy}function Xp(n){return je(n)&&"__vccOpts"in n}const vn=(n,e)=>Bd(n,e,nr);function jp(n,e,t){try{no(-1);const i=arguments.length;return i===2?st(e)&&!Fe(e)?io(e)?mt(n,null,[e]):mt(n,e):mt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&io(t)&&(t=[t]),mt(n,e,t))}finally{no(1)}}const qp="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ha;const Jl=typeof window<"u"&&window.trustedTypes;if(Jl)try{Ha=Jl.createPolicy("vue",{createHTML:n=>n})}catch{}const ph=Ha?n=>Ha.createHTML(n):n=>n,Yp="http://www.w3.org/2000/svg",$p="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Ql=jn&&jn.createElement("template"),Kp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?jn.createElementNS(Yp,n):e==="mathml"?jn.createElementNS($p,n):t?jn.createElement(n,{is:t}):jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ql.innerHTML=ph(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ql.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ni="transition",Ds="animation",ir=Symbol("_vtc"),mh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zp=Ct({},Bf,mh),Jp=n=>(n.displayName="Transition",n.props=Zp,n),ec=Jp((n,{slots:e})=>jp(Kd,Qp(n),e)),Ei=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},tc=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function Qp(n){const e={};for(const N in n)N in mh||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,v=em(s),g=v&&v[0],d=v&&v[1],{onBeforeEnter:f,onEnter:x,onEnterCancelled:_,onLeave:y,onLeaveCancelled:w,onBeforeAppear:C=f,onAppear:b=x,onAppearCancelled:z=_}=e,E=(N,Y,U,k)=>{N._enterCancelled=k,bi(N,Y?u:o),bi(N,Y?c:a),U&&U()},T=(N,Y)=>{N._isLeaving=!1,bi(N,h),bi(N,m),bi(N,p),Y&&Y()},D=N=>(Y,U)=>{const k=N?b:x,ee=()=>E(Y,N,U);Ei(k,[Y,ee]),nc(()=>{bi(Y,N?l:r),Bn(Y,N?u:o),tc(k)||ic(Y,i,g,ee)})};return Ct(e,{onBeforeEnter(N){Ei(f,[N]),Bn(N,r),Bn(N,a)},onBeforeAppear(N){Ei(C,[N]),Bn(N,l),Bn(N,c)},onEnter:D(!1),onAppear:D(!0),onLeave(N,Y){N._isLeaving=!0;const U=()=>T(N,Y);Bn(N,h),N._enterCancelled?(Bn(N,p),oc(N)):(oc(N),Bn(N,p)),nc(()=>{N._isLeaving&&(bi(N,h),Bn(N,m),tc(y)||ic(N,i,d,U))}),Ei(y,[N,U])},onEnterCancelled(N){E(N,!1,void 0,!0),Ei(_,[N])},onAppearCancelled(N){E(N,!0,void 0,!0),Ei(z,[N])},onLeaveCancelled(N){T(N),Ei(w,[N])}})}function em(n){if(n==null)return null;if(st(n))return[ko(n.enter),ko(n.leave)];{const e=ko(n);return[e,e]}}function ko(n){return nd(n)}function Bn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ir]||(n[ir]=new Set)).add(e)}function bi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ir];t&&(t.delete(e),t.size||(n[ir]=void 0))}function nc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let tm=0;function ic(n,e,t,i){const s=n._endId=++tm,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=nm(n,e);if(!a)return i();const c=a+"end";let u=0;const h=()=>{n.removeEventListener(c,p),r()},p=m=>{m.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),n.addEventListener(c,p)}function nm(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${ni}Delay`),r=i(`${ni}Duration`),a=sc(s,r),o=i(`${Ds}Delay`),l=i(`${Ds}Duration`),c=sc(o,l);let u=null,h=0,p=0;e===ni?a>0&&(u=ni,h=a,p=r.length):e===Ds?c>0&&(u=Ds,h=c,p=l.length):(h=Math.max(a,c),u=h>0?a>c?ni:Ds:null,p=u?u===ni?r.length:l.length:0);const m=u===ni&&/\b(?:transform|all)(?:,|$)/.test(i(`${ni}Property`).toString());return{type:u,timeout:h,propCount:p,hasTransform:m}}function sc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>rc(t)+rc(n[i])))}function rc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function oc(n){return(n?n.ownerDocument:document).body.offsetHeight}function im(n,e,t){const i=n[ir];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ac=Symbol("_vod"),sm=Symbol("_vsh"),gh=Symbol("");function rm(n){const e=vl();if(!e)return;const t=e.ut=(s=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>oo(r,s))},i=()=>{const s=n(e.proxy);e.ce?oo(e.ce,s):Va(e.subTree,s),t(s)};Xf(()=>{Pf(i)}),As(()=>{Bi(i,xn,{flush:"post"});const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),lr(()=>s.disconnect())})}function Va(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{Va(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)oo(n.el,e);else if(n.type===ht)n.children.forEach(t=>Va(t,e));else if(n.type===js){let{el:t,anchor:i}=n;for(;t&&(oo(t,e),t!==i);)t=t.nextSibling}}function oo(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const s in e){const r=ud(e[s]);t.setProperty(`--${s}`,r),i+=`--${s}: ${r};`}t[gh]=i}}const om=/(?:^|;)\s*display\s*:/;function am(n,e,t){const i=n.style,s=_t(t);let r=!1;if(t&&!s){if(e)if(_t(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Yr(i,o,"")}else for(const a in e)t[a]==null&&Yr(i,a,"");for(const a in t)a==="display"&&(r=!0),Yr(i,a,t[a])}else if(s){if(e!==t){const a=i[gh];a&&(t+=";"+a),i.cssText=t,r=om.test(t)}}else e&&n.removeAttribute("style");ac in n&&(n[ac]=r?i.display:"",n[sm]&&(i.display="none"))}const lc=/\s*!important$/;function Yr(n,e,t){if(Fe(t))t.forEach(i=>Yr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=lm(n,e);lc.test(t)?n.setProperty(Xi(i),t.replace(lc,""),"important"):n[i]=t}}const cc=["Webkit","Moz","ms"],Wo={};function lm(n,e){const t=Wo[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return Wo[e]=i;i=cf(i);for(let s=0;s<cc.length;s++){const r=cc[s]+i;if(r in n)return Wo[e]=r}return e}const uc="http://www.w3.org/1999/xlink";function fc(n,e,t,i,s,r=ld(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(uc,e.slice(6,e.length)):n.setAttributeNS(uc,e,t):t==null||r&&!ff(t)?n.removeAttribute(e):n.setAttribute(e,r?"":In(t)?String(t):t)}function hc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ph(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=ff(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function cm(n,e,t,i){n.addEventListener(e,t,i)}function um(n,e,t,i){n.removeEventListener(e,t,i)}const dc=Symbol("_vei");function fm(n,e,t,i,s=null){const r=n[dc]||(n[dc]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=hm(e);if(i){const c=r[e]=mm(i,s);cm(n,o,c,l)}else a&&(um(n,o,a,l),r[e]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function hm(n){let e;if(pc.test(n)){e={};let i;for(;i=n.match(pc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),e]}let Xo=0;const dm=Promise.resolve(),pm=()=>Xo||(dm.then(()=>Xo=0),Xo=Date.now());function mm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(gm(i,t.value),e,5,[i])};return t.value=n,t.attached=pm(),t}function gm(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const mc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_m=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?im(n,i,a):e==="style"?am(n,t,i):mo(e)?tl(e)||fm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vm(n,e,i,a))?(hc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fc(n,e,i,a,r,e!=="value")):n._isVueCE&&(xm(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!_t(i)))?hc(n,Mn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),fc(n,e,i,a))};function vm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&mc(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mc(e)&&_t(t)?!1:e in n}function xm(n,e){const t=n._def.props;if(!t)return!1;const i=Mn(e);return Array.isArray(t)?t.some(s=>Mn(s)===i):Object.keys(t).some(s=>Mn(s)===i)}const Mm=["ctrl","shift","alt","meta"],Sm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Mm.some(t=>n[`${t}Key`]&&!e.includes(t))},gc=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=Sm[e[a]];if(o&&o(s,e))return}return n(s,...r)})},ym=Ct({patchProp:_m},Kp);let _c;function Em(){return _c||(_c=Cp(ym))}const bm=(...n)=>{const e=Em().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Am(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Tm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Tm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Am(n){return _t(n)?document.querySelector(n):n}const ur=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},wm={class:"app-header"},Cm={class:"header-right"},Rm=["title"],Lm=["title"],Pm={__name:"TheHeader",props:{isConnected:{type:Boolean,default:!1},syncCamera:{type:Boolean,default:!1}},emits:["toggleSync"],setup(n){return(e,t)=>(Be(),Ve("header",wm,[t[3]||(t[3]=so('<div class="header-left" data-v-9d960e1c><div class="logo-mark" aria-hidden="true" data-v-9d960e1c><svg width="26" height="24" viewBox="0 0 26 24" fill="none" data-v-9d960e1c><polygon points="13,1.5 24.5,22.5 1.5,22.5" fill="rgba(79,70,229,0.07)" stroke="url(#lgrad)" stroke-width="1.4" stroke-linejoin="round" data-v-9d960e1c></polygon><line x1="13" y1="1.5" x2="13" y2="22.5" stroke="url(#lgrad)" stroke-width="0.8" opacity="0.35" data-v-9d960e1c></line><line x1="7.25" y1="12" x2="18.75" y2="12" stroke="url(#lgrad)" stroke-width="0.8" opacity="0.35" data-v-9d960e1c></line><circle cx="13" cy="1.5" r="2" fill="#4F46E5" data-v-9d960e1c></circle><circle cx="24.5" cy="22.5" r="2" fill="#7C3AED" data-v-9d960e1c></circle><circle cx="1.5" cy="22.5" r="2" fill="#0891B2" data-v-9d960e1c></circle><defs data-v-9d960e1c><linearGradient id="lgrad" x1="1.5" y1="22.5" x2="24.5" y2="1.5" gradientUnits="userSpaceOnUse" data-v-9d960e1c><stop offset="0%" stop-color="#0891B2" data-v-9d960e1c></stop><stop offset="100%" stop-color="#4F46E5" data-v-9d960e1c></stop></linearGradient></defs></svg></div><span class="brand" data-v-9d960e1c>GeoUDF</span><span class="brand-slash" aria-hidden="true" data-v-9d960e1c>/</span><span class="brand-sub" data-v-9d960e1c>Surface Reconstruction</span><div class="header-badge" title="Accepted at ICCV 2023" data-v-9d960e1c>ICCV 2023</div></div>',1)),le("div",Cm,[le("button",{class:pt(["sync-btn",{active:n.syncCamera}]),onClick:t[0]||(t[0]=i=>e.$emit("toggleSync")),title:n.syncCamera?"点击禁用视角同步":"点击启用视角同步","aria-label":"切换视角同步"},[t[1]||(t[1]=so('<svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" data-v-9d960e1c><path d="M1.5 6.5a5 5 0 0 1 5-5 5 5 0 0 1 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-9d960e1c></path><path d="M11.5 6.5a5 5 0 0 1-5 5 5 5 0 0 1-5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-9d960e1c></path><polyline points="10,9 11.5,6.5 13,9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-9d960e1c></polyline><polyline points="0,4 1.5,6.5 3,4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-9d960e1c></polyline></svg>',1)),ds(" "+et(n.syncCamera?"同步视角":"独立视角"),1)],10,Rm),le("div",{class:pt(["conn-status",{connected:n.isConnected}]),title:n.isConnected?"后端服务已连接":"无法连接到后端服务"},[t[2]||(t[2]=le("div",{class:"conn-dot","aria-hidden":"true"},null,-1)),le("span",null,et(n.isConnected?"已连接":"离线"),1)],10,Lm)])]))}},Dm=ur(Pm,[["__scopeId","data-v-9d960e1c"]]),Um={class:"sidebar"},Im={class:"drop-icon"},Nm={class:"drop-text"},Fm={key:0,class:"drop-error"},Om={class:"file-tabs"},Bm={key:0},zm={key:0},Hm={class:"file-list"},Vm=["onClick"],Gm={class:"file-icon"},km={class:"file-info"},Wm=["title"],Xm={class:"file-meta"},jm={key:1,class:"file-empty"},qm={class:"setting-row"},Ym=["title"],$m={class:"selected-badge-name"},Km={key:1,class:"setting-hint"},Zm={class:"setting-row"},Jm={class:"seg-control"},Qm=["onClick"],eg={class:"setting-row"},tg=["disabled"],ng={key:0,class:"btn-spinner"},ig={key:1},sg={class:"section-label-row"},rg={class:"progress-pct"},og={class:"progress-track"},ag={__name:"TheSidebar",props:{files:{type:Object,default:()=>({input:[],test_data:[]})},taskStatus:{type:Object,default:()=>({})}},emits:["fileSelect","reconstruct","loadSample","refreshFiles"],setup(n,{emit:e}){const t=n,i=e,s=nt("test_data"),r=nt(null),a=nt(null),o=nt(128),l=nt(!1),c=nt(!1),u=nt(!1),h=nt(""),p=nt(null),m=nt(null),v=vn(()=>(s.value==="input"?t.files.input:t.files.test_data)||[]),g=vn(()=>{var T,D;return((T=t.taskStatus)==null?void 0:T.status)==="running"||((D=t.taskStatus)==null?void 0:D.status)==="queued"}),d=vn(()=>{var T,D;switch((T=t.taskStatus)==null?void 0:T.status){case"queued":return"等待";case"running":return"运行中";case"done":return"完成";case"error":return"错误";default:return((D=t.taskStatus)==null?void 0:D.status)||""}}),f=vn(()=>{var T;switch((T=t.taskStatus)==null?void 0:T.status){case"queued":case"running":return"badge-warning";case"done":return"badge-success";case"error":return"badge-error";default:return""}});Bi(()=>{var T,D;return(D=(T=t.taskStatus)==null?void 0:T.log)==null?void 0:D.length},async()=>{await dl(),m.value&&(m.value.scrollTop=m.value.scrollHeight)});function x(T){r.value=T,a.value=T.path,i("fileSelect",T)}function _(){!r.value||g.value||i("reconstruct",{inputFile:r.value.path,resolution:o.value,dense:l.value})}function y(T){const D=T.toLowerCase();return D.includes("mesh")||D.includes("_rec_")?"◎":D.endsWith(".obj")?"□":"·"}function w(T){return T?T<1024?T+" B":T<1024*1024?(T/1024).toFixed(1)+" KB":(T/(1024*1024)).toFixed(1)+" MB":"—"}function C(T){return T.includes("ERROR")||T.includes("错误")?"log-error":T.includes("complete")||T.includes("完成")||T.includes("done")?"log-success":T.includes("[WS]")?"log-ws":""}async function b(T){if(!T)return;const D=T.name.split(".").pop().toLowerCase();if(!["ply","obj"].includes(D)){h.value="仅支持 .ply 和 .obj 格式",setTimeout(()=>{h.value=""},3e3);return}u.value=!0,h.value="";try{const N=new FormData;N.append("file",T);const Y=await fetch("/api/upload",{method:"POST",body:N});if(!Y.ok){const U=await Y.json().catch(()=>({detail:"上传失败"}));throw new Error(U.detail||"上传失败")}i("refreshFiles"),s.value="input"}catch(N){h.value=N.message,setTimeout(()=>{h.value=""},4e3)}finally{u.value=!1}}function z(T){c.value=!1;const D=T.dataTransfer.files[0];D&&b(D)}function E(T){const D=T.target.files[0];D&&b(D),T.target.value=""}return(T,D)=>{var N,Y;return Be(),Ve("aside",Um,[D[17]||(D[17]=le("div",{class:"section-label"},"文件",-1)),le("div",{class:pt(["drop-zone",{dragover:c.value}]),onDragover:D[0]||(D[0]=gc(U=>c.value=!0,["prevent"])),onDragleave:D[1]||(D[1]=U=>c.value=!1),onDrop:gc(z,["prevent"]),onClick:D[2]||(D[2]=U=>{var k;return(k=p.value)==null?void 0:k.click()})},[le("span",Im,et(c.value?"📂":"↑"),1),le("span",Nm,et(u.value?"上传中...":"拖拽或点击上传 .ply / .obj"),1),h.value?(Be(),Ve("span",Fm,et(h.value),1)):Rt("",!0)],34),le("input",{ref_key:"fileInputRef",ref:p,type:"file",accept:".ply,.obj",style:{display:"none"},onChange:E},null,544),le("div",Om,[le("button",{class:pt(["file-tab",{active:s.value==="input"}]),onClick:D[3]||(D[3]=U=>s.value="input")},[D[8]||(D[8]=ds(" 输入 ",-1)),(N=n.files.input)!=null&&N.length?(Be(),Ve("span",Bm,"("+et(n.files.input.length)+")",1)):Rt("",!0)],2),le("button",{class:pt(["file-tab",{active:s.value==="test_data"}]),onClick:D[4]||(D[4]=U=>s.value="test_data")},[D[9]||(D[9]=ds(" 样本 ",-1)),(Y=n.files.test_data)!=null&&Y.length?(Be(),Ve("span",zm,"("+et(n.files.test_data.length)+")",1)):Rt("",!0)],2),le("button",{class:"tab-action",onClick:D[5]||(D[5]=U=>T.$emit("refreshFiles")),title:"刷新"},"↺"),le("button",{class:"tab-action",onClick:D[6]||(D[6]=U=>T.$emit("loadSample")),title:"加载示例"},"✦")]),le("div",Hm,[v.value.length>0?(Be(!0),Ve(ht,{key:0},fi(v.value,U=>(Be(),Ve("div",{key:U.path,class:pt(["file-item",{selected:a.value===U.path}]),onClick:k=>x(U)},[le("span",Gm,et(y(U.name)),1),le("div",km,[le("div",{class:"file-name",title:U.name},et(U.name),9,Wm),le("div",Xm,et(w(U.size)),1)])],10,Vm))),128)):(Be(),Ve("div",jm,"暂无文件"))]),D[18]||(D[18]=le("div",{class:"divider"},null,-1)),D[19]||(D[19]=le("div",{class:"section-label"},"重建",-1)),le("div",qm,[D[10]||(D[10]=le("span",{class:"setting-label"},"输入",-1)),r.value?(Be(),Ve("div",{key:0,class:"selected-badge",title:r.value.name},[le("span",$m,et(r.value.name),1)],8,Ym)):(Be(),Ve("span",Km,"未选择文件"))]),le("div",Zm,[D[11]||(D[11]=le("span",{class:"setting-label"},"分辨率",-1)),le("div",Jm,[(Be(),Ve(ht,null,fi([128,192,256],U=>le("button",{key:U,class:pt(["seg-btn",{active:o.value===U}]),onClick:k=>o.value=U},et(U),11,Qm)),64))])]),le("div",eg,[D[13]||(D[13]=le("span",{class:"setting-label"},"密集点云",-1)),le("div",{class:"toggle-wrap",onClick:D[7]||(D[7]=U=>l.value=!l.value)},[le("div",{class:pt(["toggle-track",{on:l.value}])},[...D[12]||(D[12]=[le("div",{class:"toggle-thumb"},null,-1)])],2)])]),le("button",{class:"btn-reconstruct",disabled:!r.value||g.value,onClick:_},[g.value?(Be(),Ve("span",ng,"⟳")):(Be(),Ve("span",ig,"▶")),ds(" "+et(g.value?"重建中...":"开始重建"),1)],8,tg),n.taskStatus.status?(Be(),Ve(ht,{key:0},[D[16]||(D[16]=le("div",{class:"divider"},null,-1)),le("div",sg,[D[15]||(D[15]=le("span",{class:"section-label",style:{margin:"0"}},"进度",-1)),le("div",{class:pt(["task-badge",f.value])},[D[14]||(D[14]=le("span",{class:"task-badge-dot"},null,-1)),ds(et(d.value),1)],2),le("span",rg,et(n.taskStatus.progress)+"%",1)]),le("div",og,[le("div",{class:pt(["progress-fill",{complete:n.taskStatus.status==="done",error:n.taskStatus.status==="error"}]),style:Yn({width:n.taskStatus.progress+"%"})},null,6)]),le("div",{ref_key:"logRef",ref:m,class:"log-area"},[(Be(!0),Ve(ht,null,fi(n.taskStatus.log,(U,k)=>(Be(),Ve("div",{key:k,class:pt(["log-line",C(U)])},et(U),3))),128))],512)],64)):Rt("",!0)])}}},lg=ur(ag,[["__scopeId","data-v-ec5b4276"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="158",Yi={ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cg=0,vc=1,ug=2,_h=1,fg=2,Xn=3,vi=0,Yt=1,mn=2,pi=0,xs=1,xc=2,Mc=3,Sc=4,hg=5,Di=100,dg=101,pg=102,yc=103,Ec=104,mg=200,gg=201,_g=202,vg=203,Ga=204,ka=205,xg=206,Mg=207,Sg=208,yg=209,Eg=210,bg=211,Tg=212,Ag=213,wg=214,Cg=0,Rg=1,Lg=2,ao=3,Pg=4,Dg=5,Ug=6,Ig=7,Sl=0,Ng=1,Fg=2,mi=0,Og=1,Bg=2,zg=3,Hg=4,Vg=5,vh=300,ys=301,Es=302,Wa=303,Xa=304,bo=306,ja=1e3,gn=1001,qa=1002,Bt=1003,bc=1004,jo=1005,an=1006,Gg=1007,sr=1008,gi=1009,kg=1010,Wg=1011,yl=1012,xh=1013,hi=1014,di=1015,rr=1016,Mh=1017,Sh=1018,zi=1020,Xg=1021,_n=1023,jg=1024,qg=1025,Hi=1026,bs=1027,Yg=1028,yh=1029,$g=1030,Eh=1031,bh=1033,qo=33776,Yo=33777,$o=33778,Ko=33779,Tc=35840,Ac=35841,wc=35842,Cc=35843,Kg=36196,Rc=37492,Lc=37496,Pc=37808,Dc=37809,Uc=37810,Ic=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,zc=37816,Hc=37817,Vc=37818,Gc=37819,kc=37820,Wc=37821,Zo=36492,Xc=36494,jc=36495,Zg=36283,qc=36284,Yc=36285,$c=36286,Th=3e3,Vi=3001,Jg=3200,Qg=3201,El=0,e_=1,cn="",Tt="srgb",ei="srgb-linear",bl="display-p3",To="display-p3-linear",lo="linear",ct="srgb",co="rec709",uo="p3",Ki=7680,Kc=519,t_=512,n_=513,i_=514,s_=515,r_=516,o_=517,a_=518,l_=519,Zc=35044,Jc="300 es",Ya=1035,Kn=2e3,fo=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,$a=180/Math.PI;function fr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function c_(n,e){return(n%e+e)%e}function Jo(n,e,t){return(1-t)*n+t*e}function Qc(n){return(n&n-1)===0&&n!==0}function Ka(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const u_={DEG2RAD:$r};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,s,r,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],p=i[2],m=i[5],v=i[8],g=s[0],d=s[3],f=s[6],x=s[1],_=s[4],y=s[7],w=s[2],C=s[5],b=s[8];return r[0]=a*g+o*x+l*w,r[3]=a*d+o*_+l*C,r[6]=a*f+o*y+l*b,r[1]=c*g+u*x+h*w,r[4]=c*d+u*_+h*C,r[7]=c*f+u*y+h*b,r[2]=p*g+m*x+v*w,r[5]=p*d+m*_+v*C,r[8]=p*f+m*y+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,p=o*l-u*r,m=c*r-a*l,v=t*h+i*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=p*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new $e;function Ah(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function f_(){const n=ho("canvas");return n.style.display="block",n}const eu={};function Ys(n){n in eu||(eu[n]=!0,console.warn(n))}const tu=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nu=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xr={[ei]:{transfer:lo,primaries:co,toReference:n=>n,fromReference:n=>n},[Tt]:{transfer:ct,primaries:co,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[To]:{transfer:lo,primaries:uo,toReference:n=>n.applyMatrix3(nu),fromReference:n=>n.applyMatrix3(tu)},[bl]:{transfer:ct,primaries:uo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nu),fromReference:n=>n.applyMatrix3(tu).convertLinearToSRGB()}},h_=new Set([ei,To]),rt={enabled:!0,_workingColorSpace:ei,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!h_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=xr[e].toReference,s=xr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return xr[n].primaries},getTransfer:function(n){return n===cn?lo:xr[n].transfer}};function Ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class wh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=ho("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ho("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ms(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ms(t[i]/255)*255):t[i]=Ms(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d_=0;class Ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=fr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ta(s[a].image)):r.push(ta(s[a]))}else r=ta(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p_=0;class en extends ji{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=gn,s=gn,r=an,a=sr,o=_n,l=gi,c=en.DEFAULT_ANISOTROPY,u=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=fr(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Vi?Tt:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?Vi:Th}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vi?Tt:cn}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=vh;en.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],v=l[9],g=l[2],d=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-g)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+g)<.1&&Math.abs(v+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(m+1)/2,w=(f+1)/2,C=(u+p)/4,b=(h+g)/4,z=(v+d)/4;return _>y&&_>w?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=b/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=z/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=b/r,s=z/r),this.set(i,s,r,t),this}let x=Math.sqrt((d-v)*(d-v)+(h-g)*(h-g)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(d-v)/x,this.y=(h-g)/x,this.z=(p-u)/x,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m_ extends ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vi?Tt:cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ch(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends m_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rh extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g_ extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const p=r[a+0],m=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==p||c!==m||u!==v){let d=1-o;const f=l*p+c*m+u*v+h*g,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const w=Math.sqrt(_),C=Math.atan2(w,f*x);d=Math.sin(d*C)/w,o=Math.sin(o*C)/w}const y=o*x;if(l=l*d+p*y,c=c*d+m*y,u=u*d+v*y,h=h*d+g*y,d===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],p=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*m-c*p,e[t+1]=l*v+u*p+c*h-o*m,e[t+2]=c*v+u*m+o*p-l*h,e[t+3]=u*v-o*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),p=l(i/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*u*h+c*m*v,this._y=c*m*h-p*u*v,this._z=c*u*v+p*m*h,this._w=c*u*h-p*m*v;break;case"YXZ":this._x=p*u*h+c*m*v,this._y=c*m*h-p*u*v,this._z=c*u*v-p*m*h,this._w=c*u*h+p*m*v;break;case"ZXY":this._x=p*u*h-c*m*v,this._y=c*m*h+p*u*v,this._z=c*u*v+p*m*h,this._w=c*u*h-p*m*v;break;case"ZYX":this._x=p*u*h-c*m*v,this._y=c*m*h+p*u*v,this._z=c*u*v-p*m*h,this._w=c*u*h+p*m*v;break;case"YZX":this._x=p*u*h+c*m*v,this._y=c*m*h+p*u*v,this._z=c*u*v-p*m*h,this._w=c*u*h-p*m*v;break;case"XZY":this._x=p*u*h-c*m*v,this._y=c*m*h-p*u*v,this._z=c*u*v+p*m*h,this._w=c*u*h+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=i+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new G,iu=new ki;class ws{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mr.copy(i.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Sr.subVectors(this.max,Is),Ji.subVectors(e.a,Is),Qi.subVectors(e.b,Is),es.subVectors(e.c,Is),ii.subVectors(Qi,Ji),si.subVectors(es,Qi),Ti.subVectors(Ji,es);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ti.z,Ti.y,ii.z,0,-ii.x,si.z,0,-si.x,Ti.z,0,-Ti.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ti.y,Ti.x,0];return!ia(t,Ji,Qi,es,Sr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,Ji,Qi,es,Sr))?!1:(yr.crossVectors(ii,si),t=[yr.x,yr.y,yr.z],ia(t,Ji,Qi,es,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new G,new G,new G,new G,new G,new G,new G,new G],fn=new G,Mr=new ws,Ji=new G,Qi=new G,es=new G,ii=new G,si=new G,Ti=new G,Is=new G,Sr=new G,yr=new G,Ai=new G;function ia(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ai.fromArray(n,r);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const __=new ws,Ns=new G,sa=new G;class hr{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):__.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(sa)),this.expandByPoint(Ns.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new G,ra=new G,Er=new G,ri=new G,oa=new G,br=new G,aa=new G;class Ao{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ra.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(ra);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Er),o=ri.dot(this.direction),l=-ri.dot(Er),c=ri.lengthSq(),u=Math.abs(1-a*a);let h,p,m,v;if(u>0)if(h=a*l-o,p=a*o-l,v=r*u,h>=0)if(p>=-v)if(p<=v){const g=1/u;h*=g,p*=g,m=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ra).addScaledVector(Er,p),m}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),s=Hn.dot(Hn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,s,r){oa.subVectors(t,e),br.subVectors(i,e),aa.crossVectors(oa,br);let a=this.direction.dot(aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(br.crossVectors(ri,br));if(l<0)return null;const c=o*this.direction.dot(oa.cross(ri));if(c<0||l+c>a)return null;const u=-o*ri.dot(aa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,s,r,a,o,l,c,u,h,p,m,v,g,d){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,p,m,v,g,d)}set(e,t,i,s,r,a,o,l,c,u,h,p,m,v,g,d){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=m,f[7]=v,f[11]=g,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=a*u,m=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+v*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,m=l*h,v=c*u,g=c*h;t[0]=p+g*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,m=l*h,v=c*u,g=c*h;t[0]=p-g*o,t[4]=-a*h,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,m=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=v*c-m,t[8]=p*c+g,t[1]=l*h,t[5]=g*c+p,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-p*h,t[8]=v*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+v,t[10]=p-g*h}else if(e.order==="XZY"){const p=a*l,m=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+g,t[5]=a*u,t[9]=m*h-v,t[2]=v*h-m,t[6]=o*u,t[10]=g*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v_,e,x_)}lookAt(e,t,i){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),oi.crossVectors(i,Zt),oi.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),oi.crossVectors(i,Zt)),oi.normalize(),Tr.crossVectors(Zt,oi),s[0]=oi.x,s[4]=Tr.x,s[8]=Zt.x,s[1]=oi.y,s[5]=Tr.y,s[9]=Zt.y,s[2]=oi.z,s[6]=Tr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],p=i[9],m=i[13],v=i[2],g=i[6],d=i[10],f=i[14],x=i[3],_=i[7],y=i[11],w=i[15],C=s[0],b=s[4],z=s[8],E=s[12],T=s[1],D=s[5],N=s[9],Y=s[13],U=s[2],k=s[6],ee=s[10],q=s[14],re=s[3],ue=s[7],ce=s[11],H=s[15];return r[0]=a*C+o*T+l*U+c*re,r[4]=a*b+o*D+l*k+c*ue,r[8]=a*z+o*N+l*ee+c*ce,r[12]=a*E+o*Y+l*q+c*H,r[1]=u*C+h*T+p*U+m*re,r[5]=u*b+h*D+p*k+m*ue,r[9]=u*z+h*N+p*ee+m*ce,r[13]=u*E+h*Y+p*q+m*H,r[2]=v*C+g*T+d*U+f*re,r[6]=v*b+g*D+d*k+f*ue,r[10]=v*z+g*N+d*ee+f*ce,r[14]=v*E+g*Y+d*q+f*H,r[3]=x*C+_*T+y*U+w*re,r[7]=x*b+_*D+y*k+w*ue,r[11]=x*z+_*N+y*ee+w*ce,r[15]=x*E+_*Y+y*q+w*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],m=e[14],v=e[3],g=e[7],d=e[11],f=e[15];return v*(+r*l*h-s*c*h-r*o*p+i*c*p+s*o*m-i*l*m)+g*(+t*l*m-t*c*p+r*a*p-s*a*m+s*c*u-r*l*u)+d*(+t*c*h-t*o*m-r*a*h+i*a*m+r*o*u-i*c*u)+f*(-s*o*u-t*l*h+t*o*p+s*a*h-i*a*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],m=e[11],v=e[12],g=e[13],d=e[14],f=e[15],x=h*d*c-g*p*c+g*l*m-o*d*m-h*l*f+o*p*f,_=v*p*c-u*d*c-v*l*m+a*d*m+u*l*f-a*p*f,y=u*g*c-v*h*c+v*o*m-a*g*m-u*o*f+a*h*f,w=v*h*l-u*g*l-v*o*p+a*g*p+u*o*d-a*h*d,C=t*x+i*_+s*y+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=x*b,e[1]=(g*p*r-h*d*r-g*s*m+i*d*m+h*s*f-i*p*f)*b,e[2]=(o*d*r-g*l*r+g*s*c-i*d*c-o*s*f+i*l*f)*b,e[3]=(h*l*r-o*p*r-h*s*c+i*p*c+o*s*m-i*l*m)*b,e[4]=_*b,e[5]=(u*d*r-v*p*r+v*s*m-t*d*m-u*s*f+t*p*f)*b,e[6]=(v*l*r-a*d*r-v*s*c+t*d*c+a*s*f-t*l*f)*b,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*m+t*l*m)*b,e[8]=y*b,e[9]=(v*h*r-u*g*r-v*i*m+t*g*m+u*i*f-t*h*f)*b,e[10]=(a*g*r-v*o*r+v*i*c-t*g*c-a*i*f+t*o*f)*b,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*m-t*o*m)*b,e[12]=w*b,e[13]=(u*g*s-v*h*s+v*i*p-t*g*p-u*i*d+t*h*d)*b,e[14]=(v*o*s-a*g*s-v*i*l+t*g*l+a*i*d-t*o*d)*b,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*p+t*o*p)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,p=r*c,m=r*u,v=r*h,g=a*u,d=a*h,f=o*h,x=l*c,_=l*u,y=l*h,w=i.x,C=i.y,b=i.z;return s[0]=(1-(g+f))*w,s[1]=(m+y)*w,s[2]=(v-_)*w,s[3]=0,s[4]=(m-y)*C,s[5]=(1-(p+f))*C,s[6]=(d+x)*C,s[7]=0,s[8]=(v+_)*b,s[9]=(d-x)*b,s[10]=(1-(p+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,u=1/a,h=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Kn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let m,v;if(o===Kn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===fo)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Kn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),p=(t+e)*c,m=(i+s)*u;let v,g;if(o===Kn)v=(a+r)*h,g=-2*h;else if(o===fo)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new G,hn=new gt,v_=new G(0,0,0),x_=new G(1,1,1),oi=new G,Tr=new G,Zt=new G,su=new gt,ru=new ki;class wo{constructor(e=0,t=0,i=0,s=wo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wo.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let M_=0;const ou=new G,ns=new ki,Vn=new gt,Ar=new G,Fs=new G,S_=new G,y_=new ki,au=new G(1,0,0),lu=new G(0,1,0),cu=new G(0,0,1),E_={type:"added"},b_={type:"removed"};class wt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new G,t=new wo,i=new ki,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new $e}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ar.copy(e):Ar.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Fs,Ar,this.up):Vn.lookAt(Ar,Fs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Vn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(E_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,S_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}wt.DEFAULT_UP=new G(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new G,Gn=new G,la=new G,kn=new G,is=new G,ss=new G,uu=new G,ca=new G,ua=new G,fa=new G;let wr=!1;class pn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){dn.subVectors(s,t),Gn.subVectors(i,t),la.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Gn),l=dn.dot(la),c=Gn.dot(Gn),u=Gn.dot(la),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const p=1/h,m=(c*l-o*u)*p,v=(a*u-o*l)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,t,i,s,r,a,o,l){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,kn),l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l}static isFrontFacing(e,t,i,s){return dn.subVectors(i,t),Gn.subVectors(e,t),dn.cross(Gn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),dn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,i),ss.subVectors(r,i),ca.subVectors(e,i);const l=is.dot(ca),c=ss.dot(ca);if(l<=0&&c<=0)return t.copy(i);ua.subVectors(e,s);const u=is.dot(ua),h=ss.dot(ua);if(u>=0&&h<=u)return t.copy(s);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(is,a);fa.subVectors(e,r);const m=is.dot(fa),v=ss.dot(fa);if(v>=0&&m<=v)return t.copy(r);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ss,o);const d=u*v-m*h;if(d<=0&&h-u>=0&&m-v>=0)return uu.subVectors(r,s),o=(h-u)/(h-u+(m-v)),t.copy(s).addScaledVector(uu,o);const f=1/(d+g+p);return a=g*f,o=p*f,t.copy(i).addScaledVector(is,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function ha(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=c_(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ha(a,r,e+1/3),this.g=ha(a,r,e),this.b=ha(a,r,e-1/3)}return rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=Ph[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return rt.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ht(Pt.r*255,0,255))*65536+Math.round(Ht(Pt.g*255,0,255))*256+Math.round(Ht(Pt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Tt){rt.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,s=Pt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Cr);const i=Jo(ai.h,Cr.h,t),s=Jo(ai.s,Cr.s,t),r=Jo(ai.l,Cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new ze;ze.NAMES=Ph;let T_=0;class Nn extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=xs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=ka,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ga&&(i.blendSrc=this.blendSrc),this.blendDst!==ka&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class po extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new G,Rr=new We;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this.updateRange={offset:0,count:-1},this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Dh extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uh extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let A_=0;const rn=new gt,da=new wt,rs=new G,Jt=new ws,Os=new ws,bt=new G;class tn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Uh:Dh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Jt.min,Os.min),Jt.expandByPoint(bt),bt.addVectors(Jt.max,Os.max),Jt.expandByPoint(bt)):(Jt.expandByPoint(Os.min),Jt.expandByPoint(Os.max))}Jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),bt.add(rs)),s=Math.max(s,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new G,u[T]=new G;const h=new G,p=new G,m=new G,v=new We,g=new We,d=new We,f=new G,x=new G;function _(T,D,N){h.fromArray(s,T*3),p.fromArray(s,D*3),m.fromArray(s,N*3),v.fromArray(a,T*2),g.fromArray(a,D*2),d.fromArray(a,N*2),p.sub(h),m.sub(h),g.sub(v),d.sub(v);const Y=1/(g.x*d.y-d.x*g.y);isFinite(Y)&&(f.copy(p).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(Y),x.copy(m).multiplyScalar(g.x).addScaledVector(p,-d.x).multiplyScalar(Y),c[T].add(f),c[D].add(f),c[N].add(f),u[T].add(x),u[D].add(x),u[N].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,D=y.length;T<D;++T){const N=y[T],Y=N.start,U=N.count;for(let k=Y,ee=Y+U;k<ee;k+=3)_(i[k+0],i[k+1],i[k+2])}const w=new G,C=new G,b=new G,z=new G;function E(T){b.fromArray(r,T*3),z.copy(b);const D=c[T];w.copy(D),w.sub(b.multiplyScalar(b.dot(D))).normalize(),C.crossVectors(z,D);const Y=C.dot(u[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=Y}for(let T=0,D=y.length;T<D;++T){const N=y[T],Y=N.start,U=N.count;for(let k=Y,ee=Y+U;k<ee;k+=3)E(i[k+0]),E(i[k+1]),E(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),g=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,d),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,d=l.length;g<d;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let f=0;f<u;f++)p[v++]=c[m++]}return new Un(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const p=c[u],m=e(p,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new gt,wi=new Ao,Lr=new hr,hu=new G,os=new G,as=new G,ls=new G,pa=new G,Pr=new G,Dr=new We,Ur=new We,Ir=new We,du=new G,pu=new G,mu=new G,Nr=new G,Fr=new G;class qt extends wt{constructor(e=new tn,t=new po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(pa.fromBufferAttribute(h,e),a?Pr.addScaledVector(pa,u):Pr.addScaledVector(pa.sub(t),u))}t.add(Pr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Lr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Lr,hu)===null||wi.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(fu.copy(r).invert(),wi.copy(e.ray).applyMatrix4(fu),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=p.length;v<g;v++){const d=p[v],f=a[d.materialIndex],x=Math.max(d.start,m.start),_=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let y=x,w=_;y<w;y+=3){const C=o.getX(y),b=o.getX(y+1),z=o.getX(y+2);s=Or(this,f,e,i,c,u,h,C,b,z),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let d=v,f=g;d<f;d+=3){const x=o.getX(d),_=o.getX(d+1),y=o.getX(d+2);s=Or(this,a,e,i,c,u,h,x,_,y),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=p.length;v<g;v++){const d=p[v],f=a[d.materialIndex],x=Math.max(d.start,m.start),_=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let y=x,w=_;y<w;y+=3){const C=y,b=y+1,z=y+2;s=Or(this,f,e,i,c,u,h,C,b,z),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=v,f=g;d<f;d+=3){const x=d,_=d+1,y=d+2;s=Or(this,a,e,i,c,u,h,x,_,y),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function w_(n,e,t,i,s,r,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===vi,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fr);return c<t.near||c>t.far?null:{distance:c,point:Fr.clone(),object:n}}function Or(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,os),n.getVertexPosition(l,as),n.getVertexPosition(c,ls);const u=w_(n,e,t,i,os,as,ls,Nr);if(u){s&&(Dr.fromBufferAttribute(s,o),Ur.fromBufferAttribute(s,l),Ir.fromBufferAttribute(s,c),u.uv=pn.getInterpolation(Nr,os,as,ls,Dr,Ur,Ir,new We)),r&&(Dr.fromBufferAttribute(r,o),Ur.fromBufferAttribute(r,l),Ir.fromBufferAttribute(r,c),u.uv1=pn.getInterpolation(Nr,os,as,ls,Dr,Ur,Ir,new We),u.uv2=u.uv1),a&&(du.fromBufferAttribute(a,o),pu.fromBufferAttribute(a,l),mu.fromBufferAttribute(a,c),u.normal=pn.getInterpolation(Nr,os,as,ls,du,pu,mu,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};pn.getNormal(os,as,ls,h.normal),u.face=h}return u}class dr extends tn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let p=0,m=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function v(g,d,f,x,_,y,w,C,b,z,E){const T=y/b,D=w/z,N=y/2,Y=w/2,U=C/2,k=b+1,ee=z+1;let q=0,re=0;const ue=new G;for(let ce=0;ce<ee;ce++){const H=ce*D-Y;for(let j=0;j<k;j++){const ve=j*T-N;ue[g]=ve*x,ue[d]=H*_,ue[f]=U,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[d]=0,ue[f]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(j/b),h.push(1-ce/z),q+=1}}for(let ce=0;ce<z;ce++)for(let H=0;H<b;H++){const j=p+H+k*ce,ve=p+H+k*(ce+1),xe=p+(H+1)+k*(ce+1),Ee=p+(H+1)+k*ce;l.push(j,ve,Ee),l.push(ve,xe,Ee),re+=6}o.addGroup(m,re,E),m+=re,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Ts(n[t]);for(const s in i)e[s]=i[s]}return e}function C_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ih(n){return n.getRenderTarget()===null?n.outputColorSpace:rt.workingColorSpace}const R_={clone:Ts,merge:Ot};var L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=C_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends Nh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class D_ extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(cs,us,e,t);s.layers=this.layers,this.add(s);const r=new ln(cs,us,e,t);r.layers=this.layers,this.add(r);const a=new ln(cs,us,e,t);a.layers=this.layers,this.add(a);const o=new ln(cs,us,e,t);o.layers=this.layers,this.add(o);const l=new ln(cs,us,e,t);l.layers=this.layers,this.add(l);const c=new ln(cs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Fh extends en{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U_ extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vi?Tt:cn),this.texture=new Fh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dr(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:pi});r.uniforms.tEquirect.value=t;const a=new qt(s,r),o=t.minFilter;return t.minFilter===sr&&(t.minFilter=an),new D_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const ma=new G,I_=new G,N_=new $e;class ci{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ma.subVectors(i,t).cross(I_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||N_.getNormalMatrix(e),s=this.coplanarPoint(ma).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new hr,Br=new G;class Tl{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],p=s[7],m=s[8],v=s[9],g=s[10],d=s[11],f=s[12],x=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,p-c,d-m,y-f).normalize(),i[1].setComponents(l+r,p+c,d+m,y+f).normalize(),i[2].setComponents(l+a,p+u,d+v,y+x).normalize(),i[3].setComponents(l-a,p-u,d-v,y-x).normalize(),i[4].setComponents(l-o,p-h,d-g,y-_).normalize(),t===Kn)i[5].setComponents(l+o,p+h,d+g,y+_).normalize();else if(t===fo)i[5].setComponents(o,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Br.x=s.normal.x>0?e.max.x:e.min.x,Br.y=s.normal.y>0?e.max.y:e.min.y,Br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function F_(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,p=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,p),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const p=u.array,m=u.updateRange;n.bindBuffer(h,c),m.count===-1?n.bufferSubData(h,0,p):(t?n.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Al extends tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,p=t/l,m=[],v=[],g=[],d=[];for(let f=0;f<u;f++){const x=f*p-a;for(let _=0;_<c;_++){const y=_*h-r;v.push(y,-x,0),g.push(0,0,1),d.push(_/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const _=x+c*f,y=x+c*(f+1),w=x+1+c*(f+1),C=x+1+c*f;m.push(_,y,C),m.push(y,w,C)}this.setIndex(m),this.setAttribute("position",new ut(v,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}var O_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B_=`#ifdef USE_ALPHAHASH
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
#endif`,z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k_=`#ifdef USE_AOMAP
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
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y_=`#ifdef USE_IRIDESCENCE
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
#endif`,$_=`#ifdef USE_BUMPMAP
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sv=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,rv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ov=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fv="gl_FragColor = linearToOutputTexel( gl_FragColor );",hv=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,dv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yv=`#ifdef USE_GRADIENTMAP
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
}`,Ev=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wv=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Cv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uv=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Iv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Nv=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xv=`#if defined( USE_POINTS_UV )
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
#endif`,jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,V0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,G0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,k0=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,$0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,K0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Z0=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,J0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Q0=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tx=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,ix=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,rx=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ax=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lx=`uniform float size;
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
}`,cx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ux=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,fx=`uniform vec3 color;
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
}`,hx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,dx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qe={alphahash_fragment:O_,alphahash_pars_fragment:B_,alphamap_fragment:z_,alphamap_pars_fragment:H_,alphatest_fragment:V_,alphatest_pars_fragment:G_,aomap_fragment:k_,aomap_pars_fragment:W_,begin_vertex:X_,beginnormal_vertex:j_,bsdfs:q_,iridescence_fragment:Y_,bumpmap_pars_fragment:$_,clipping_planes_fragment:K_,clipping_planes_pars_fragment:Z_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:Q_,color_fragment:ev,color_pars_fragment:tv,color_pars_vertex:nv,color_vertex:iv,common:sv,cube_uv_reflection_fragment:rv,defaultnormal_vertex:ov,displacementmap_pars_vertex:av,displacementmap_vertex:lv,emissivemap_fragment:cv,emissivemap_pars_fragment:uv,colorspace_fragment:fv,colorspace_pars_fragment:hv,envmap_fragment:dv,envmap_common_pars_fragment:pv,envmap_pars_fragment:mv,envmap_pars_vertex:gv,envmap_physical_pars_fragment:Cv,envmap_vertex:_v,fog_vertex:vv,fog_pars_vertex:xv,fog_fragment:Mv,fog_pars_fragment:Sv,gradientmap_pars_fragment:yv,lightmap_fragment:Ev,lightmap_pars_fragment:bv,lights_lambert_fragment:Tv,lights_lambert_pars_fragment:Av,lights_pars_begin:wv,lights_toon_fragment:Rv,lights_toon_pars_fragment:Lv,lights_phong_fragment:Pv,lights_phong_pars_fragment:Dv,lights_physical_fragment:Uv,lights_physical_pars_fragment:Iv,lights_fragment_begin:Nv,lights_fragment_maps:Fv,lights_fragment_end:Ov,logdepthbuf_fragment:Bv,logdepthbuf_pars_fragment:zv,logdepthbuf_pars_vertex:Hv,logdepthbuf_vertex:Vv,map_fragment:Gv,map_pars_fragment:kv,map_particle_fragment:Wv,map_particle_pars_fragment:Xv,metalnessmap_fragment:jv,metalnessmap_pars_fragment:qv,morphcolor_vertex:Yv,morphnormal_vertex:$v,morphtarget_pars_vertex:Kv,morphtarget_vertex:Zv,normal_fragment_begin:Jv,normal_fragment_maps:Qv,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:a0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:u0,project_vertex:f0,dithering_fragment:h0,dithering_pars_fragment:d0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:_0,shadowmap_vertex:v0,shadowmask_pars_fragment:x0,skinbase_vertex:M0,skinning_pars_vertex:S0,skinning_vertex:y0,skinnormal_vertex:E0,specularmap_fragment:b0,specularmap_pars_fragment:T0,tonemapping_fragment:A0,tonemapping_pars_fragment:w0,transmission_fragment:C0,transmission_pars_fragment:R0,uv_pars_fragment:L0,uv_pars_vertex:P0,uv_vertex:D0,worldpos_vertex:U0,background_vert:I0,background_frag:N0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:B0,cube_frag:z0,depth_vert:H0,depth_frag:V0,distanceRGBA_vert:G0,distanceRGBA_frag:k0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:j0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:$0,meshlambert_vert:K0,meshlambert_frag:Z0,meshmatcap_vert:J0,meshmatcap_frag:Q0,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:ux,shadow_frag:fx,sprite_vert:hx,sprite_frag:dx},Me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ln={basic:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ot([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ot([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ot([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ot([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ot([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ot([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ot([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ot([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ot([Me.common,Me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ot([Me.lights,Me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Ln.physical={uniforms:Ot([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const zr={r:0,b:0,g:0};function px(n,e,t,i,s,r,a){const o=new ze(0);let l=r===!0?0:1,c,u,h=null,p=0,m=null;function v(d,f){let x=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?g(o,l):_&&_.isColor&&(g(_,1),x=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===bo)?(u===void 0&&(u=new qt(new dr(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ts(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=rt.getTransfer(_.colorSpace)!==ct,(h!==_||p!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,p=_.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new qt(new Al(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ts(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=rt.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,f){d.getRGB(zr,Ih(n)),i.buffers.color.setClear(zr.r,zr.g,zr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(d,f=1){o.set(d),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(o,l)},render:v}}function mx(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=d(null);let c=l,u=!1;function h(U,k,ee,q,re){let ue=!1;if(a){const ce=g(q,ee,k);c!==ce&&(c=ce,m(c.object)),ue=f(U,q,ee,re),ue&&x(U,q,ee,re)}else{const ce=k.wireframe===!0;(c.geometry!==q.id||c.program!==ee.id||c.wireframe!==ce)&&(c.geometry=q.id,c.program=ee.id,c.wireframe=ce,ue=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,z(U,k,ee,q),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function v(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function g(U,k,ee){const q=ee.wireframe===!0;let re=o[U.id];re===void 0&&(re={},o[U.id]=re);let ue=re[k.id];ue===void 0&&(ue={},re[k.id]=ue);let ce=ue[q];return ce===void 0&&(ce=d(p()),ue[q]=ce),ce}function d(U){const k=[],ee=[],q=[];for(let re=0;re<s;re++)k[re]=0,ee[re]=0,q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:q,object:U,attributes:{},index:null}}function f(U,k,ee,q){const re=c.attributes,ue=k.attributes;let ce=0;const H=ee.getAttributes();for(const j in H)if(H[j].location>=0){const xe=re[j];let Ee=ue[j];if(Ee===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(Ee=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(Ee=U.instanceColor)),xe===void 0||xe.attribute!==Ee||Ee&&xe.data!==Ee.data)return!0;ce++}return c.attributesNum!==ce||c.index!==q}function x(U,k,ee,q){const re={},ue=k.attributes;let ce=0;const H=ee.getAttributes();for(const j in H)if(H[j].location>=0){let xe=ue[j];xe===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(xe=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(xe=U.instanceColor));const Ee={};Ee.attribute=xe,xe&&xe.data&&(Ee.data=xe.data),re[j]=Ee,ce++}c.attributes=re,c.attributesNum=ce,c.index=q}function _(){const U=c.newAttributes;for(let k=0,ee=U.length;k<ee;k++)U[k]=0}function y(U){w(U,0)}function w(U,k){const ee=c.newAttributes,q=c.enabledAttributes,re=c.attributeDivisors;ee[U]=1,q[U]===0&&(n.enableVertexAttribArray(U),q[U]=1),re[U]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,k),re[U]=k)}function C(){const U=c.newAttributes,k=c.enabledAttributes;for(let ee=0,q=k.length;ee<q;ee++)k[ee]!==U[ee]&&(n.disableVertexAttribArray(ee),k[ee]=0)}function b(U,k,ee,q,re,ue,ce){ce===!0?n.vertexAttribIPointer(U,k,ee,re,ue):n.vertexAttribPointer(U,k,ee,q,re,ue)}function z(U,k,ee,q){if(i.isWebGL2===!1&&(U.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const re=q.attributes,ue=ee.getAttributes(),ce=k.defaultAttributeValues;for(const H in ue){const j=ue[H];if(j.location>=0){let ve=re[H];if(ve===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),ve!==void 0){const xe=ve.normalized,Ee=ve.itemSize,Re=t.get(ve);if(Re===void 0)continue;const Oe=Re.buffer,Ue=Re.type,Ie=Re.bytesPerElement,Qe=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||ve.gpuType===xh);if(ve.isInterleavedBufferAttribute){const Ge=ve.data,S=Ge.stride,L=ve.offset;if(Ge.isInstancedInterleavedBuffer){for(let P=0;P<j.locationSize;P++)w(j.location+P,Ge.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let P=0;P<j.locationSize;P++)y(j.location+P);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let P=0;P<j.locationSize;P++)b(j.location+P,Ee/j.locationSize,Ue,xe,S*Ie,(L+Ee/j.locationSize*P)*Ie,Qe)}else{if(ve.isInstancedBufferAttribute){for(let Ge=0;Ge<j.locationSize;Ge++)w(j.location+Ge,ve.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<j.locationSize;Ge++)y(j.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Ge=0;Ge<j.locationSize;Ge++)b(j.location+Ge,Ee/j.locationSize,Ue,xe,Ee*Ie,Ee/j.locationSize*Ge*Ie,Qe)}}else if(ce!==void 0){const xe=ce[H];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(j.location,xe);break;case 3:n.vertexAttrib3fv(j.location,xe);break;case 4:n.vertexAttrib4fv(j.location,xe);break;default:n.vertexAttrib1fv(j.location,xe)}}}}C()}function E(){N();for(const U in o){const k=o[U];for(const ee in k){const q=k[ee];for(const re in q)v(q[re].object),delete q[re];delete k[ee]}delete o[U]}}function T(U){if(o[U.id]===void 0)return;const k=o[U.id];for(const ee in k){const q=k[ee];for(const re in q)v(q[re].object),delete q[re];delete k[ee]}delete o[U.id]}function D(U){for(const k in o){const ee=o[k];if(ee[U.id]===void 0)continue;const q=ee[U.id];for(const re in q)v(q[re].object),delete q[re];delete ee[U.id]}}function N(){Y(),u=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:Y,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function gx(n,e,t,i){const s=i.isWebGL2;let r;function a(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let p,m;if(s)p=n,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function _x(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,y=a||e.has("OES_texture_float"),w=_&&y,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:C}}function vx(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ci,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||s;return s=p,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){const v=h.clippingPlanes,g=h.clipIntersection,d=h.clipShadows,f=n.get(h);if(!s||v===null||v.length===0||r&&!d)r?u(null):c();else{const x=r?0:i,_=x*4;let y=f.clippingState||null;l.value=y,y=u(v,p,_,m);for(let w=0;w!==_;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,m,v){const g=h!==null?h.length:0;let d=null;if(g!==0){if(d=l.value,v!==!0||d===null){const f=m+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<f)&&(d=new Float32Array(f));for(let _=0,y=m;_!==g;++_,y+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function xx(n){let e=new WeakMap;function t(a,o){return o===Wa?a.mapping=ys:o===Xa&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Wa||o===Xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new U_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Bh extends Nh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,gu=[.125,.215,.35,.446,.526,.582],Ui=20,ga=new Bh,_u=new ze;let _a=null,va=0,xa=0;const Li=(1+Math.sqrt(5))/2,fs=1/Li,vu=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Li,fs),new G(0,Li,-fs),new G(fs,0,Li),new G(-fs,0,Li),new G(Li,fs,0),new G(-Li,fs,0)];class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,va,xa),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:rr,format:_n,colorSpace:ei,depthBuffer:!1},s=Mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mx(r)),this._blurMaterial=Sx(r,e,t)}return s}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,i,s){const o=new ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(_u),u.toneMapping=mi,u.autoClear=!1;const m=new po({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new qt(new dr,m);let g=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,g=!0):(m.color.copy(_u),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;Hr(s,x*_,f>2?_:0,_,_),u.setRenderTarget(s),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ys||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vu[(s-1)%vu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ui-1),g=r/v,d=isFinite(r)?1+Math.floor(u*g):Ui;d>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ui}`);const f=[];let x=0;for(let b=0;b<Ui;++b){const z=b/g,E=Math.exp(-z*z/2);f.push(E),b===0?x+=E:b<d&&(x+=2*E)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-i;const y=this._sizeLods[s],w=3*y*(s>_-ps?s-_+ps:0),C=4*(this._cubeSize-y);Hr(t,w,C,3*y,2*y),l.setRenderTarget(t),l.render(h,ga)}}function Mx(n){const e=[],t=[],i=[];let s=n;const r=n-ps+1+gu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ps?l=gu[a-n+ps-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,g=3,d=2,f=1,x=new Float32Array(g*v*m),_=new Float32Array(d*v*m),y=new Float32Array(f*v*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,z=C>2?0:-1,E=[b,z,0,b+2/3,z,0,b+2/3,z+1,0,b,z,0,b+2/3,z+1,0,b,z+1,0];x.set(E,g*v*C),_.set(p,d*v*C);const T=[C,C,C,C,C,C];y.set(T,f*v*C)}const w=new tn;w.setAttribute("position",new Un(x,g)),w.setAttribute("uv",new Un(_,d)),w.setAttribute("faceIndex",new Un(y,f)),e.push(w),s>ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mu(n,e,t){const i=new Gi(n,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Sx(n,e,t){const i=new Float32Array(Ui),s=new G(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Su(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function yu(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function yx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wa||l===Xa,u=l===ys||l===Es;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new xu(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new xu(n));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ex(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bx(n,e,t,i){const s={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const g=p.morphAttributes[v];for(let d=0,f=g.length;d<f;d++)e.remove(g[d])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const v in p)e.update(p[v],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const g=m[v];for(let d=0,f=g.length;d<f;d++)e.update(g[d],n.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,v=h.attributes.position;let g=0;if(m!==null){const x=m.array;g=m.version;for(let _=0,y=x.length;_<y;_+=3){const w=x[_+0],C=x[_+1],b=x[_+2];p.push(w,C,C,b,b,w)}}else if(v!==void 0){const x=v.array;g=v.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const w=_+0,C=_+1,b=_+2;p.push(w,C,C,b,b,w)}}else return;const d=new(Ah(p)?Uh:Dh)(p,1);d.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,d)}function u(h){const p=r.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Tx(n,e,t,i){const s=i.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,m){n.drawElements(r,m,o,p*l),t.update(m,r,1)}function h(p,m,v){if(v===0)return;let g,d;if(s)g=n,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](r,m,o,p*l,v),t.update(m,r,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Ax(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wx(n,e){return n[0]-e[0]}function Cx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Rx(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new At,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let d=r.get(u);if(d===void 0||d.count!==g){let k=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var m=k;d!==void 0&&d.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),w===!0&&(E=3);let T=u.attributes.position.count*E,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*D*4*g),Y=new Rh(N,T,D,g);Y.type=di,Y.needsUpdate=!0;const U=E*4;for(let ee=0;ee<g;ee++){const q=C[ee],re=b[ee],ue=z[ee],ce=T*D*4*ee;for(let H=0;H<q.count;H++){const j=H*U;_===!0&&(a.fromBufferAttribute(q,H),N[ce+j+0]=a.x,N[ce+j+1]=a.y,N[ce+j+2]=a.z,N[ce+j+3]=0),y===!0&&(a.fromBufferAttribute(re,H),N[ce+j+4]=a.x,N[ce+j+5]=a.y,N[ce+j+6]=a.z,N[ce+j+7]=0),w===!0&&(a.fromBufferAttribute(ue,H),N[ce+j+8]=a.x,N[ce+j+9]=a.y,N[ce+j+10]=a.z,N[ce+j+11]=ue.itemSize===4?a.w:1)}}d={count:g,texture:Y,size:new We(T,D)},r.set(u,d),u.addEventListener("dispose",k)}let f=0;for(let _=0;_<p.length;_++)f+=p[_];const x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",p),h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const v=p===void 0?0:p.length;let g=i[u.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<v;y++){const w=g[y];w[0]=y,w[1]=p[y]}g.sort(Cx);for(let y=0;y<8;y++)y<v&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(wx);const d=u.morphAttributes.position,f=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const w=o[y],C=w[0],b=w[1];C!==Number.MAX_SAFE_INTEGER&&b?(d&&u.getAttribute("morphTarget"+y)!==d[C]&&u.setAttribute("morphTarget"+y,d[C]),f&&u.getAttribute("morphNormal"+y)!==f[C]&&u.setAttribute("morphNormal"+y,f[C]),s[y]=b,x+=b):(d&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const _=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Lx(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const zh=new en,Hh=new Rh,Vh=new g_,Gh=new Fh,Eu=[],bu=[],Tu=new Float32Array(16),Au=new Float32Array(9),wu=new Float32Array(4);function Cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Co(n,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function Nx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;wu.set(i),n.uniformMatrix2fv(this.addr,!1,wu),yt(t,i)}}function Fx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),yt(t,i)}}function Ox(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;Tu.set(i),n.uniformMatrix4fv(this.addr,!1,Tu),yt(t,i)}}function Bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function Gx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function jx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||zh,s)}function qx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vh,s)}function Yx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gh,s)}function $x(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hh,s)}function Kx(n){switch(n){case 5126:return Px;case 35664:return Dx;case 35665:return Ux;case 35666:return Ix;case 35674:return Nx;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return kx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}function Zx(n,e){n.uniform1fv(this.addr,e)}function Jx(n,e){const t=Cs(e,this.size,2);n.uniform2fv(this.addr,t)}function Qx(n,e){const t=Cs(e,this.size,3);n.uniform3fv(this.addr,t)}function eM(n,e){const t=Cs(e,this.size,4);n.uniform4fv(this.addr,t)}function tM(n,e){const t=Cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nM(n,e){const t=Cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iM(n,e){const t=Cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sM(n,e){n.uniform1iv(this.addr,e)}function rM(n,e){n.uniform2iv(this.addr,e)}function oM(n,e){n.uniform3iv(this.addr,e)}function aM(n,e){n.uniform4iv(this.addr,e)}function lM(n,e){n.uniform1uiv(this.addr,e)}function cM(n,e){n.uniform2uiv(this.addr,e)}function uM(n,e){n.uniform3uiv(this.addr,e)}function fM(n,e){n.uniform4uiv(this.addr,e)}function hM(n,e,t){const i=this.cache,s=e.length,r=Co(t,s);St(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||zh,r[a])}function dM(n,e,t){const i=this.cache,s=e.length,r=Co(t,s);St(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vh,r[a])}function pM(n,e,t){const i=this.cache,s=e.length,r=Co(t,s);St(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gh,r[a])}function mM(n,e,t){const i=this.cache,s=e.length,r=Co(t,s);St(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hh,r[a])}function gM(n){switch(n){case 5126:return Zx;case 35664:return Jx;case 35665:return Qx;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class _M{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Kx(t.type)}}class vM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=gM(t.type)}}class xM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Cu(n,e){n.seq.push(e),n.map[e.id]=e}function MM(n,e,t){const i=n.name,s=i.length;for(Ma.lastIndex=0;;){const r=Ma.exec(i),a=Ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cu(t,c===void 0?new _M(o,n,e):new vM(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new xM(o),Cu(t,h)),t=h}}}class Kr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);MM(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const SM=37297;let yM=0;function EM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function bM(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===uo&&t===co?i="LinearDisplayP3ToLinearSRGB":e===co&&t===uo&&(i="LinearSRGBToLinearDisplayP3"),n){case ei:case To:return[i,"LinearTransferOETF"];case Tt:case bl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+EM(n.getShaderSource(e),a)}else return s}function TM(n,e){const t=bM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function AM(n,e){let t;switch(e){case Og:t="Linear";break;case Bg:t="Reinhard";break;case zg:t="OptimizedCineon";break;case Hg:t="ACESFilmic";break;case Vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function CM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function RM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zs(n){return n!==""}function Pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Du(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(n){return n.replace(LM,DM)}const PM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function DM(n,e){let t=qe[e];if(t===void 0){const i=PM.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Za(t)}const UM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(n){return n.replace(UM,IM)}function IM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function FM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case Es:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function BM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ng:e="ENVMAP_BLENDING_MIX";break;case Fg:e="ENVMAP_BLENDING_ADD";break}return e}function zM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function HM(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=NM(t),c=FM(t),u=OM(t),h=BM(t),p=zM(t),m=t.isWebGL2?"":wM(t),v=CM(r),g=s.createProgram();let d,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),d.length>0&&(d+=`
`),f=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),f.length>0&&(f+=`
`)):(d=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),f=[m,Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?qe.tonemapping_pars_fragment:"",t.toneMapping!==mi?AM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,TM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Za(a),a=Pu(a,t),a=Du(a,t),o=Za(o),o=Pu(o,t),o=Du(o,t),a=Uu(a),o=Uu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+d+a,y=x+f+o,w=Ru(s,s.VERTEX_SHADER,_),C=Ru(s,s.FRAGMENT_SHADER,y);s.attachShader(g,w),s.attachShader(g,C),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(D){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(g).trim(),Y=s.getShaderInfoLog(w).trim(),U=s.getShaderInfoLog(C).trim();let k=!0,ee=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,w,C);else{const q=Lu(s,w,"vertex"),re=Lu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+q+`
`+re)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(Y===""||U==="")&&(ee=!1);ee&&(D.diagnostics={runnable:k,programLog:N,vertexShader:{log:Y,prefix:d},fragmentShader:{log:U,prefix:f}})}s.deleteShader(w),s.deleteShader(C),z=new Kr(s,g),E=RM(s,g)}let z;this.getUniforms=function(){return z===void 0&&b(this),z};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(g,SM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}let VM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kM(e),t.set(e,i)),i}}class kM{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}}function WM(n,e,t,i,s,r,a){const o=new Lh,l=new GM,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function d(E,T,D,N,Y){const U=N.fog,k=Y.geometry,ee=E.isMeshStandardMaterial?N.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||ee),re=q&&q.mapping===bo?q.image.height:null,ue=v[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,H=ce!==void 0?ce.length:0;let j=0;k.morphAttributes.position!==void 0&&(j=1),k.morphAttributes.normal!==void 0&&(j=2),k.morphAttributes.color!==void 0&&(j=3);let ve,xe,Ee,Re;if(ue){const vt=Ln[ue];ve=vt.vertexShader,xe=vt.fragmentShader}else ve=E.vertexShader,xe=E.fragmentShader,l.update(E),Ee=l.getVertexShaderID(E),Re=l.getFragmentShaderID(E);const Oe=n.getRenderTarget(),Ue=Y.isInstancedMesh===!0,Ie=!!E.map,Qe=!!E.matcap,Ge=!!q,S=!!E.aoMap,L=!!E.lightMap,P=!!E.bumpMap,V=!!E.normalMap,B=!!E.displacementMap,X=!!E.emissiveMap,K=!!E.metalnessMap,J=!!E.roughnessMap,oe=E.anisotropy>0,te=E.clearcoat>0,ye=E.iridescence>0,A=E.sheen>0,M=E.transmission>0,F=oe&&!!E.anisotropyMap,ne=te&&!!E.clearcoatMap,ie=te&&!!E.clearcoatNormalMap,ae=te&&!!E.clearcoatRoughnessMap,Se=ye&&!!E.iridescenceMap,he=ye&&!!E.iridescenceThicknessMap,ge=A&&!!E.sheenColorMap,I=A&&!!E.sheenRoughnessMap,pe=!!E.specularMap,fe=!!E.specularColorMap,we=!!E.specularIntensityMap,be=M&&!!E.transmissionMap,Le=M&&!!E.thicknessMap,Ce=!!E.gradientMap,Ae=!!E.alphaMap,Ke=E.alphaTest>0,O=!!E.alphaHash,_e=!!E.extensions,de=!!k.attributes.uv1,se=!!k.attributes.uv2,me=!!k.attributes.uv3;let De=mi;return E.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(De=n.toneMapping),{isWebGL2:u,shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:ve,fragmentShader:xe,defines:E.defines,customVertexShaderID:Ee,customFragmentShaderID:Re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:Ue,instancingColor:Ue&&Y.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Oe===null?n.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:ei,map:Ie,matcap:Qe,envMap:Ge,envMapMode:Ge&&q.mapping,envMapCubeUVHeight:re,aoMap:S,lightMap:L,bumpMap:P,normalMap:V,displacementMap:p&&B,emissiveMap:X,normalMapObjectSpace:V&&E.normalMapType===e_,normalMapTangentSpace:V&&E.normalMapType===El,metalnessMap:K,roughnessMap:J,anisotropy:oe,anisotropyMap:F,clearcoat:te,clearcoatMap:ne,clearcoatNormalMap:ie,clearcoatRoughnessMap:ae,iridescence:ye,iridescenceMap:Se,iridescenceThicknessMap:he,sheen:A,sheenColorMap:ge,sheenRoughnessMap:I,specularMap:pe,specularColorMap:fe,specularIntensityMap:we,transmission:M,transmissionMap:be,thicknessMap:Le,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===xs,alphaMap:Ae,alphaTest:Ke,alphaHash:O,combine:E.combine,mapUv:Ie&&g(E.map.channel),aoMapUv:S&&g(E.aoMap.channel),lightMapUv:L&&g(E.lightMap.channel),bumpMapUv:P&&g(E.bumpMap.channel),normalMapUv:V&&g(E.normalMap.channel),displacementMapUv:B&&g(E.displacementMap.channel),emissiveMapUv:X&&g(E.emissiveMap.channel),metalnessMapUv:K&&g(E.metalnessMap.channel),roughnessMapUv:J&&g(E.roughnessMap.channel),anisotropyMapUv:F&&g(E.anisotropyMap.channel),clearcoatMapUv:ne&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:I&&g(E.sheenRoughnessMap.channel),specularMapUv:pe&&g(E.specularMap.channel),specularColorMapUv:fe&&g(E.specularColorMap.channel),specularIntensityMapUv:we&&g(E.specularIntensityMap.channel),transmissionMapUv:be&&g(E.transmissionMap.channel),thicknessMapUv:Le&&g(E.thicknessMap.channel),alphaMapUv:Ae&&g(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(V||oe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:se,vertexUv3s:me,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(Ie||Ae),fog:!!U,useFog:E.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:j,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ie&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mn,flipSided:E.side===Yt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:_e&&E.extensions.derivatives===!0,extensionFragDepth:_e&&E.extensions.fragDepth===!0,extensionDrawBuffers:_e&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)T.push(D),T.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(x(T,E),_(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function x(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function _(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function y(E){const T=v[E.type];let D;if(T){const N=Ln[T];D=R_.clone(N.uniforms)}else D=E.uniforms;return D}function w(E,T){let D;for(let N=0,Y=c.length;N<Y;N++){const U=c[N];if(U.cacheKey===T){D=U,++D.usedTimes;break}}return D===void 0&&(D=new HM(n,T,E,r),c.push(D)),D}function C(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function z(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:z}}function XM(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function jM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,p,m,v,g,d){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:m,groupOrder:v,renderOrder:h.renderOrder,z:g,group:d},n[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=m,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=g,f.group=d),e++,f}function o(h,p,m,v,g,d){const f=a(h,p,m,v,g,d);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(h,p,m,v,g,d){const f=a(h,p,m,v,g,d);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||jM),i.length>1&&i.sort(p||Nu),s.length>1&&s.sort(p||Nu)}function u(){for(let h=e,p=n.length;h<p;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function qM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Fu,n.set(i,[a])):s>=r.length?(a=new Fu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function YM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new ze};break;case"SpotLight":t={position:new G,direction:new G,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function $M(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let KM=0;function ZM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JM(n,e){const t=new YM,i=$M(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new G);const r=new G,a=new gt,o=new gt;function l(u,h){let p=0,m=0,v=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let g=0,d=0,f=0,x=0,_=0,y=0,w=0,C=0,b=0,z=0,E=0;u.sort(ZM);const T=h===!0?Math.PI:1;for(let N=0,Y=u.length;N<Y;N++){const U=u[N],k=U.color,ee=U.intensity,q=U.distance,re=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=k.r*ee*T,m+=k.g*ee*T,v+=k.b*ee*T;else if(U.isLightProbe){for(let ue=0;ue<9;ue++)s.probe[ue].addScaledVector(U.sh.coefficients[ue],ee);E++}else if(U.isDirectionalLight){const ue=t.get(U);if(ue.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const ce=U.shadow,H=i.get(U);H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,s.directionalShadow[g]=H,s.directionalShadowMap[g]=re,s.directionalShadowMatrix[g]=U.shadow.matrix,y++}s.directional[g]=ue,g++}else if(U.isSpotLight){const ue=t.get(U);ue.position.setFromMatrixPosition(U.matrixWorld),ue.color.copy(k).multiplyScalar(ee*T),ue.distance=q,ue.coneCos=Math.cos(U.angle),ue.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ue.decay=U.decay,s.spot[f]=ue;const ce=U.shadow;if(U.map&&(s.spotLightMap[b]=U.map,b++,ce.updateMatrices(U),U.castShadow&&z++),s.spotLightMatrix[f]=ce.matrix,U.castShadow){const H=i.get(U);H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,s.spotShadow[f]=H,s.spotShadowMap[f]=re,C++}f++}else if(U.isRectAreaLight){const ue=t.get(U);ue.color.copy(k).multiplyScalar(ee),ue.halfWidth.set(U.width*.5,0,0),ue.halfHeight.set(0,U.height*.5,0),s.rectArea[x]=ue,x++}else if(U.isPointLight){const ue=t.get(U);if(ue.color.copy(U.color).multiplyScalar(U.intensity*T),ue.distance=U.distance,ue.decay=U.decay,U.castShadow){const ce=U.shadow,H=i.get(U);H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,s.pointShadow[d]=H,s.pointShadowMap[d]=re,s.pointShadowMatrix[d]=U.shadow.matrix,w++}s.point[d]=ue,d++}else if(U.isHemisphereLight){const ue=t.get(U);ue.skyColor.copy(U.color).multiplyScalar(ee*T),ue.groundColor.copy(U.groundColor).multiplyScalar(ee*T),s.hemi[_]=ue,_++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=v;const D=s.hash;(D.directionalLength!==g||D.pointLength!==d||D.spotLength!==f||D.rectAreaLength!==x||D.hemiLength!==_||D.numDirectionalShadows!==y||D.numPointShadows!==w||D.numSpotShadows!==C||D.numSpotMaps!==b||D.numLightProbes!==E)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=x,s.point.length=d,s.hemi.length=_,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=C+b-z,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=E,D.directionalLength=g,D.pointLength=d,D.spotLength=f,D.rectAreaLength=x,D.hemiLength=_,D.numDirectionalShadows=y,D.numPointShadows=w,D.numSpotShadows=C,D.numSpotMaps=b,D.numLightProbes=E,s.version=KM++)}function c(u,h){let p=0,m=0,v=0,g=0,d=0;const f=h.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const y=u[x];if(y.isDirectionalLight){const w=s.directional[p];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),p++}else if(y.isSpotLight){const w=s.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const w=s.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const w=s.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const w=s.hemi[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),d++}}}return{setup:l,setupView:c,state:s}}function Ou(n,e){const t=new JM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(h){i.push(h)}function o(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function QM(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Ou(n,e),t.set(r,[l])):a>=o.length?(l=new Ou(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class eS extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tS extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iS=`uniform sampler2D shadow_pass;
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
}`;function sS(n,e,t){let i=new Tl;const s=new We,r=new We,a=new At,o=new eS({depthPacking:Qg}),l=new tS,c={},u=t.maxTextureSize,h={[vi]:Yt,[Yt]:vi,[mn]:mn},p=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:nS,fragmentShader:iS}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new tn;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new qt(v,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let f=this.type;this.render=function(w,C,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const z=n.getRenderTarget(),E=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),D=n.state;D.setBlending(pi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=f!==Xn&&this.type===Xn,Y=f===Xn&&this.type!==Xn;for(let U=0,k=w.length;U<k;U++){const ee=w[U],q=ee.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const re=q.getFrameExtents();if(s.multiply(re),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,q.mapSize.y=r.y)),q.map===null||N===!0||Y===!0){const ce=this.type!==Xn?{minFilter:Bt,magFilter:Bt}:{};q.map!==null&&q.map.dispose(),q.map=new Gi(s.x,s.y,ce),q.map.texture.name=ee.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const ue=q.getViewportCount();for(let ce=0;ce<ue;ce++){const H=q.getViewport(ce);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),D.viewport(a),q.updateMatrices(ee,ce),i=q.getFrustum(),y(C,b,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Xn&&x(q,b),q.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(z,E,T)};function x(w,C){const b=e.update(g);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gi(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,b,p,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,b,m,g,null)}function _(w,C,b,z){let E=null;const T=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)E=T;else if(E=b.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=E.uuid,N=C.uuid;let Y=c[D];Y===void 0&&(Y={},c[D]=Y);let U=Y[N];U===void 0&&(U=E.clone(),Y[N]=U),E=U}if(E.visible=C.visible,E.wireframe=C.wireframe,z===Xn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=n.properties.get(E);D.light=b}return E}function y(w,C,b,z,E){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Xn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const N=e.update(w),Y=w.material;if(Array.isArray(Y)){const U=N.groups;for(let k=0,ee=U.length;k<ee;k++){const q=U[k],re=Y[q.materialIndex];if(re&&re.visible){const ue=_(w,re,z,E);n.renderBufferDirect(b,null,N,ue,w,q)}}}else if(Y.visible){const U=_(w,Y,z,E);n.renderBufferDirect(b,null,N,U,w,null)}}const D=w.children;for(let N=0,Y=D.length;N<Y;N++)y(D[N],C,b,z,E)}}function rS(n,e,t){const i=t.isWebGL2;function s(){let O=!1;const _e=new At;let de=null;const se=new At(0,0,0,0);return{setMask:function(me){de!==me&&!O&&(n.colorMask(me,me,me,me),de=me)},setLocked:function(me){O=me},setClear:function(me,De,Ze,vt,nn){nn===!0&&(me*=vt,De*=vt,Ze*=vt),_e.set(me,De,Ze,vt),se.equals(_e)===!1&&(n.clearColor(me,De,Ze,vt),se.copy(_e))},reset:function(){O=!1,de=null,se.set(-1,0,0,0)}}}function r(){let O=!1,_e=null,de=null,se=null;return{setTest:function(me){me?Ie(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(me){_e!==me&&!O&&(n.depthMask(me),_e=me)},setFunc:function(me){if(de!==me){switch(me){case Cg:n.depthFunc(n.NEVER);break;case Rg:n.depthFunc(n.ALWAYS);break;case Lg:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case Pg:n.depthFunc(n.EQUAL);break;case Dg:n.depthFunc(n.GEQUAL);break;case Ug:n.depthFunc(n.GREATER);break;case Ig:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=me}},setLocked:function(me){O=me},setClear:function(me){se!==me&&(n.clearDepth(me),se=me)},reset:function(){O=!1,_e=null,de=null,se=null}}}function a(){let O=!1,_e=null,de=null,se=null,me=null,De=null,Ze=null,vt=null,nn=null;return{setTest:function(ot){O||(ot?Ie(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!O&&(n.stencilMask(ot),_e=ot)},setFunc:function(ot,It,bn){(de!==ot||se!==It||me!==bn)&&(n.stencilFunc(ot,It,bn),de=ot,se=It,me=bn)},setOp:function(ot,It,bn){(De!==ot||Ze!==It||vt!==bn)&&(n.stencilOp(ot,It,bn),De=ot,Ze=It,vt=bn)},setLocked:function(ot){O=ot},setClear:function(ot){nn!==ot&&(n.clearStencil(ot),nn=ot)},reset:function(){O=!1,_e=null,de=null,se=null,me=null,De=null,Ze=null,vt=null,nn=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let p={},m={},v=new WeakMap,g=[],d=null,f=!1,x=null,_=null,y=null,w=null,C=null,b=null,z=null,E=new ze(0,0,0),T=0,D=!1,N=null,Y=null,U=null,k=null,ee=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ue=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ce)[1]),re=ue>=1):ce.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),re=ue>=2);let H=null,j={};const ve=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Ee=new At().fromArray(ve),Re=new At().fromArray(xe);function Oe(O,_e,de,se){const me=new Uint8Array(4),De=n.createTexture();n.bindTexture(O,De),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<de;Ze++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(_e+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return De}const Ue={};Ue[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(ao),K(!1),J(vc),Ie(n.CULL_FACE),B(pi);function Ie(O){p[O]!==!0&&(n.enable(O),p[O]=!0)}function Qe(O){p[O]!==!1&&(n.disable(O),p[O]=!1)}function Ge(O,_e){return m[O]!==_e?(n.bindFramebuffer(O,_e),m[O]=_e,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=_e),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function S(O,_e){let de=g,se=!1;if(O)if(de=v.get(_e),de===void 0&&(de=[],v.set(_e,de)),O.isWebGLMultipleRenderTargets){const me=O.texture;if(de.length!==me.length||de[0]!==n.COLOR_ATTACHMENT0){for(let De=0,Ze=me.length;De<Ze;De++)de[De]=n.COLOR_ATTACHMENT0+De;de.length=me.length,se=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,se=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,se=!0);se&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function L(O){return d!==O?(n.useProgram(O),d=O,!0):!1}const P={[Di]:n.FUNC_ADD,[dg]:n.FUNC_SUBTRACT,[pg]:n.FUNC_REVERSE_SUBTRACT};if(i)P[yc]=n.MIN,P[Ec]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[yc]=O.MIN_EXT,P[Ec]=O.MAX_EXT)}const V={[mg]:n.ZERO,[gg]:n.ONE,[_g]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[Eg]:n.SRC_ALPHA_SATURATE,[Sg]:n.DST_COLOR,[xg]:n.DST_ALPHA,[vg]:n.ONE_MINUS_SRC_COLOR,[ka]:n.ONE_MINUS_SRC_ALPHA,[yg]:n.ONE_MINUS_DST_COLOR,[Mg]:n.ONE_MINUS_DST_ALPHA,[bg]:n.CONSTANT_COLOR,[Tg]:n.ONE_MINUS_CONSTANT_COLOR,[Ag]:n.CONSTANT_ALPHA,[wg]:n.ONE_MINUS_CONSTANT_ALPHA};function B(O,_e,de,se,me,De,Ze,vt,nn,ot){if(O===pi){f===!0&&(Qe(n.BLEND),f=!1);return}if(f===!1&&(Ie(n.BLEND),f=!0),O!==hg){if(O!==x||ot!==D){if((_!==Di||C!==Di)&&(n.blendEquation(n.FUNC_ADD),_=Di,C=Di),ot)switch(O){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,w=null,b=null,z=null,E.set(0,0,0),T=0,x=O,D=ot}return}me=me||_e,De=De||de,Ze=Ze||se,(_e!==_||me!==C)&&(n.blendEquationSeparate(P[_e],P[me]),_=_e,C=me),(de!==y||se!==w||De!==b||Ze!==z)&&(n.blendFuncSeparate(V[de],V[se],V[De],V[Ze]),y=de,w=se,b=De,z=Ze),(vt.equals(E)===!1||nn!==T)&&(n.blendColor(vt.r,vt.g,vt.b,nn),E.copy(vt),T=nn),x=O,D=!1}function X(O,_e){O.side===mn?Qe(n.CULL_FACE):Ie(n.CULL_FACE);let de=O.side===Yt;_e&&(de=!de),K(de),O.blending===xs&&O.transparent===!1?B(pi):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const se=O.stencilWrite;c.setTest(se),se&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(O){N!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),N=O)}function J(O){O!==cg?(Ie(n.CULL_FACE),O!==Y&&(O===vc?n.cullFace(n.BACK):O===ug?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),Y=O}function oe(O){O!==U&&(re&&n.lineWidth(O),U=O)}function te(O,_e,de){O?(Ie(n.POLYGON_OFFSET_FILL),(k!==_e||ee!==de)&&(n.polygonOffset(_e,de),k=_e,ee=de)):Qe(n.POLYGON_OFFSET_FILL)}function ye(O){O?Ie(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function A(O){O===void 0&&(O=n.TEXTURE0+q-1),H!==O&&(n.activeTexture(O),H=O)}function M(O,_e,de){de===void 0&&(H===null?de=n.TEXTURE0+q-1:de=H);let se=j[de];se===void 0&&(se={type:void 0,texture:void 0},j[de]=se),(se.type!==O||se.texture!==_e)&&(H!==de&&(n.activeTexture(de),H=de),n.bindTexture(O,_e||Ue[O]),se.type=O,se.texture=_e)}function F(){const O=j[H];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(O){Ee.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ee.copy(O))}function Le(O){Re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Re.copy(O))}function Ce(O,_e){let de=h.get(_e);de===void 0&&(de=new WeakMap,h.set(_e,de));let se=de.get(O);se===void 0&&(se=n.getUniformBlockIndex(_e,O.name),de.set(O,se))}function Ae(O,_e){const se=h.get(_e).get(O);u.get(_e)!==se&&(n.uniformBlockBinding(_e,se,O.__bindingPointIndex),u.set(_e,se))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},H=null,j={},m={},v=new WeakMap,g=[],d=null,f=!1,x=null,_=null,y=null,w=null,C=null,b=null,z=null,E=new ze(0,0,0),T=0,D=!1,N=null,Y=null,U=null,k=null,ee=null,Ee.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:Qe,bindFramebuffer:Ge,drawBuffers:S,useProgram:L,setBlending:B,setMaterial:X,setFlipSided:K,setCullFace:J,setLineWidth:oe,setPolygonOffset:te,setScissorTest:ye,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:ne,compressedTexImage3D:ie,texImage2D:fe,texImage3D:we,updateUBOMapping:Ce,uniformBlockBinding:Ae,texStorage2D:I,texStorage3D:pe,texSubImage2D:ae,texSubImage3D:Se,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:be,viewport:Le,reset:Ke}}function oS(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,M){return f?new OffscreenCanvas(A,M):ho("canvas")}function _(A,M,F,ne){let ie=1;if((A.width>ne||A.height>ne)&&(ie=ne/Math.max(A.width,A.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=M?Ka:Math.floor,Se=ae(ie*A.width),he=ae(ie*A.height);g===void 0&&(g=x(Se,he));const ge=F?x(Se,he):g;return ge.width=Se,ge.height=he,ge.getContext("2d").drawImage(A,0,0,Se,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Se+"x"+he+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Qc(A.width)&&Qc(A.height)}function w(A){return o?!1:A.wrapS!==gn||A.wrapT!==gn||A.minFilter!==Bt&&A.minFilter!==an}function C(A,M){return A.generateMipmaps&&M&&A.minFilter!==Bt&&A.minFilter!==an}function b(A){n.generateMipmap(A)}function z(A,M,F,ne,ie=!1){if(o===!1)return M;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=M;if(M===n.RED&&(F===n.FLOAT&&(ae=n.R32F),F===n.HALF_FLOAT&&(ae=n.R16F),F===n.UNSIGNED_BYTE&&(ae=n.R8)),M===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ae=n.R8UI),F===n.UNSIGNED_SHORT&&(ae=n.R16UI),F===n.UNSIGNED_INT&&(ae=n.R32UI),F===n.BYTE&&(ae=n.R8I),F===n.SHORT&&(ae=n.R16I),F===n.INT&&(ae=n.R32I)),M===n.RG&&(F===n.FLOAT&&(ae=n.RG32F),F===n.HALF_FLOAT&&(ae=n.RG16F),F===n.UNSIGNED_BYTE&&(ae=n.RG8)),M===n.RGBA){const Se=ie?lo:rt.getTransfer(ne);F===n.FLOAT&&(ae=n.RGBA32F),F===n.HALF_FLOAT&&(ae=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ae=Se===ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function E(A,M,F){return C(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){return A===Bt||A===bc||A===jo?n.NEAREST:n.LINEAR}function D(A){const M=A.target;M.removeEventListener("dispose",D),Y(M),M.isVideoTexture&&v.delete(M)}function N(A){const M=A.target;M.removeEventListener("dispose",N),k(M)}function Y(A){const M=i.get(A);if(M.__webglInit===void 0)return;const F=A.source,ne=d.get(F);if(ne){const ie=ne[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&U(A),Object.keys(ne).length===0&&d.delete(F)}i.remove(A)}function U(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const F=A.source,ne=d.get(F);delete ne[M.__cacheKey],a.memory.textures--}function k(A){const M=A.texture,F=i.get(A),ne=i.get(M);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(F.__webglFramebuffer[ie]))for(let ae=0;ae<F.__webglFramebuffer[ie].length;ae++)n.deleteFramebuffer(F.__webglFramebuffer[ie][ae]);else n.deleteFramebuffer(F.__webglFramebuffer[ie]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[ie])}else{if(Array.isArray(F.__webglFramebuffer))for(let ie=0;ie<F.__webglFramebuffer.length;ie++)n.deleteFramebuffer(F.__webglFramebuffer[ie]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ie=0;ie<F.__webglColorRenderbuffer.length;ie++)F.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[ie]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,ae=M.length;ie<ae;ie++){const Se=i.get(M[ie]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(M[ie])}i.remove(M),i.remove(A)}let ee=0;function q(){ee=0}function re(){const A=ee;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),ee+=1,A}function ue(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ce(A,M){const F=i.get(A);if(A.isVideoTexture&&te(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(F,A,M);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+M)}function H(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Ie(F,A,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+M)}function j(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Ie(F,A,M);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+M)}function ve(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Qe(F,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+M)}const xe={[ja]:n.REPEAT,[gn]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},Ee={[Bt]:n.NEAREST,[bc]:n.NEAREST_MIPMAP_NEAREST,[jo]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Gg]:n.LINEAR_MIPMAP_NEAREST,[sr]:n.LINEAR_MIPMAP_LINEAR},Re={[t_]:n.NEVER,[l_]:n.ALWAYS,[n_]:n.LESS,[s_]:n.LEQUAL,[i_]:n.EQUAL,[a_]:n.GEQUAL,[r_]:n.GREATER,[o_]:n.NOTEQUAL};function Oe(A,M,F){if(F?(n.texParameteri(A,n.TEXTURE_WRAP_S,xe[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,xe[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,xe[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ee[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ee[M.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==gn||M.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,T(M.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Bt&&M.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Bt||M.minFilter!==jo&&M.minFilter!==sr||M.type===di&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===rr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ue(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",D));const ne=M.source;let ie=d.get(ne);ie===void 0&&(ie={},d.set(ne,ie));const ae=ue(M);if(ae!==A.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ie[ae].usedTimes++;const Se=ie[A.__cacheKey];Se!==void 0&&(ie[A.__cacheKey].usedTimes--,Se.usedTimes===0&&U(M)),A.__cacheKey=ae,A.__webglTexture=ie[ae].texture}return F}function Ie(A,M,F){let ne=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=n.TEXTURE_3D);const ie=Ue(A,M),ae=M.source;t.bindTexture(ne,A.__webglTexture,n.TEXTURE0+F);const Se=i.get(ae);if(ae.version!==Se.__version||ie===!0){t.activeTexture(n.TEXTURE0+F);const he=rt.getPrimaries(rt.workingColorSpace),ge=M.colorSpace===cn?null:rt.getPrimaries(M.colorSpace),I=M.colorSpace===cn||he===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const pe=w(M)&&y(M.image)===!1;let fe=_(M.image,pe,!1,u);fe=ye(M,fe);const we=y(fe)||o,be=r.convert(M.format,M.colorSpace);let Le=r.convert(M.type),Ce=z(M.internalFormat,be,Le,M.colorSpace,M.isVideoTexture);Oe(ne,M,we);let Ae;const Ke=M.mipmaps,O=o&&M.isVideoTexture!==!0,_e=Se.__version===void 0||ie===!0,de=E(M,fe,we);if(M.isDepthTexture)Ce=n.DEPTH_COMPONENT,o?M.type===di?Ce=n.DEPTH_COMPONENT32F:M.type===hi?Ce=n.DEPTH_COMPONENT24:M.type===zi?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:M.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Hi&&Ce===n.DEPTH_COMPONENT&&M.type!==yl&&M.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=hi,Le=r.convert(M.type)),M.format===bs&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,M.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=zi,Le=r.convert(M.type))),_e&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ce,fe.width,fe.height,0,be,Le,null));else if(M.isDataTexture)if(Ke.length>0&&we){O&&_e&&t.texStorage2D(n.TEXTURE_2D,de,Ce,Ke[0].width,Ke[0].height);for(let se=0,me=Ke.length;se<me;se++)Ae=Ke[se],O?t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,be,Le,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Ce,Ae.width,Ae.height,0,be,Le,Ae.data);M.generateMipmaps=!1}else O?(_e&&t.texStorage2D(n.TEXTURE_2D,de,Ce,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,be,Le,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,fe.width,fe.height,0,be,Le,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ce,Ke[0].width,Ke[0].height,fe.depth);for(let se=0,me=Ke.length;se<me;se++)Ae=Ke[se],M.format!==_n?be!==null?O?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,fe.depth,be,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ce,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Ae.width,Ae.height,fe.depth,be,Le,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ce,Ae.width,Ae.height,fe.depth,0,be,Le,Ae.data)}else{O&&_e&&t.texStorage2D(n.TEXTURE_2D,de,Ce,Ke[0].width,Ke[0].height);for(let se=0,me=Ke.length;se<me;se++)Ae=Ke[se],M.format!==_n?be!==null?O?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,be,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ce,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ae.width,Ae.height,be,Le,Ae.data):t.texImage2D(n.TEXTURE_2D,se,Ce,Ae.width,Ae.height,0,be,Le,Ae.data)}else if(M.isDataArrayTexture)O?(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Ce,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,be,Le,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,be,Le,fe.data);else if(M.isData3DTexture)O?(_e&&t.texStorage3D(n.TEXTURE_3D,de,Ce,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,be,Le,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,be,Le,fe.data);else if(M.isFramebufferTexture){if(_e)if(O)t.texStorage2D(n.TEXTURE_2D,de,Ce,fe.width,fe.height);else{let se=fe.width,me=fe.height;for(let De=0;De<de;De++)t.texImage2D(n.TEXTURE_2D,De,Ce,se,me,0,be,Le,null),se>>=1,me>>=1}}else if(Ke.length>0&&we){O&&_e&&t.texStorage2D(n.TEXTURE_2D,de,Ce,Ke[0].width,Ke[0].height);for(let se=0,me=Ke.length;se<me;se++)Ae=Ke[se],O?t.texSubImage2D(n.TEXTURE_2D,se,0,0,be,Le,Ae):t.texImage2D(n.TEXTURE_2D,se,Ce,be,Le,Ae);M.generateMipmaps=!1}else O?(_e&&t.texStorage2D(n.TEXTURE_2D,de,Ce,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Le,fe)):t.texImage2D(n.TEXTURE_2D,0,Ce,be,Le,fe);C(M,we)&&b(ne),Se.__version=ae.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Qe(A,M,F){if(M.image.length!==6)return;const ne=Ue(A,M),ie=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const ae=i.get(ie);if(ie.version!==ae.__version||ne===!0){t.activeTexture(n.TEXTURE0+F);const Se=rt.getPrimaries(rt.workingColorSpace),he=M.colorSpace===cn?null:rt.getPrimaries(M.colorSpace),ge=M.colorSpace===cn||Se===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const I=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let se=0;se<6;se++)!I&&!pe?fe[se]=_(M.image[se],!1,!0,c):fe[se]=pe?M.image[se].image:M.image[se],fe[se]=ye(M,fe[se]);const we=fe[0],be=y(we)||o,Le=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type),Ae=z(M.internalFormat,Le,Ce,M.colorSpace),Ke=o&&M.isVideoTexture!==!0,O=ae.__version===void 0||ne===!0;let _e=E(M,we,be);Oe(n.TEXTURE_CUBE_MAP,M,be);let de;if(I){Ke&&O&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ae,we.width,we.height);for(let se=0;se<6;se++){de=fe[se].mipmaps;for(let me=0;me<de.length;me++){const De=de[me];M.format!==_n?Le!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,De.width,De.height,Le,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ae,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,De.width,De.height,Le,Ce,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ae,De.width,De.height,0,Le,Ce,De.data)}}}else{de=M.mipmaps,Ke&&O&&(de.length>0&&_e++,t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ae,fe[0].width,fe[0].height));for(let se=0;se<6;se++)if(pe){Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe[se].width,fe[se].height,Le,Ce,fe[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ae,fe[se].width,fe[se].height,0,Le,Ce,fe[se].data);for(let me=0;me<de.length;me++){const Ze=de[me].image[se].image;Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Ze.width,Ze.height,Le,Ce,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ae,Ze.width,Ze.height,0,Le,Ce,Ze.data)}}else{Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Ce,fe[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ae,Le,Ce,fe[se]);for(let me=0;me<de.length;me++){const De=de[me];Ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Le,Ce,De.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ae,Le,Ce,De.image[se])}}}C(M,be)&&b(n.TEXTURE_CUBE_MAP),ae.__version=ie.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ge(A,M,F,ne,ie,ae){const Se=r.convert(F.format,F.colorSpace),he=r.convert(F.type),ge=z(F.internalFormat,Se,he,F.colorSpace);if(!i.get(M).__hasExternalTextures){const pe=Math.max(1,M.width>>ae),fe=Math.max(1,M.height>>ae);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ae,ge,pe,fe,M.depth,0,Se,he,null):t.texImage2D(ie,ae,ge,pe,fe,0,Se,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),oe(M)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ie,i.get(F).__webglTexture,0,J(M)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ie,i.get(F).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function S(A,M,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let ne=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||oe(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===di?ne=n.DEPTH_COMPONENT32F:ie.type===hi&&(ne=n.DEPTH_COMPONENT24));const ae=J(M);oe(M)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,ne,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,ne,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const ne=J(M);F&&oe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,M.width,M.height):oe(M)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0;ie<ne.length;ie++){const ae=ne[ie],Se=r.convert(ae.format,ae.colorSpace),he=r.convert(ae.type),ge=z(ae.internalFormat,Se,he,ae.colorSpace),I=J(M);F&&oe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,I,ge,M.width,M.height):oe(M)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,ge,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ge,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce(M.depthTexture,0);const ne=i.get(M.depthTexture).__webglTexture,ie=J(M);if(M.depthTexture.format===Hi)oe(M)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(M.depthTexture.format===bs)oe(M)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function P(A){const M=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");L(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=n.createRenderbuffer(),S(M.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),S(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(A,M,F){const ne=i.get(A);M!==void 0&&Ge(ne.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&P(A)}function B(A){const M=A.texture,F=i.get(A),ne=i.get(M);A.addEventListener("dispose",N),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=M.version,a.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,Se=y(A)||o;if(ie){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let ge=0;ge<M.mipmaps.length;ge++)F.__webglFramebuffer[he][ge]=n.createFramebuffer()}else F.__webglFramebuffer[he]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)F.__webglFramebuffer[he]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ae)if(s.drawBuffers){const he=A.texture;for(let ge=0,I=he.length;ge<I;ge++){const pe=i.get(he[ge]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&oe(A)===!1){const he=ae?M:[M];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const I=he[ge];F.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);const pe=r.convert(I.format,I.colorSpace),fe=r.convert(I.type),we=z(I.internalFormat,pe,fe,I.colorSpace,A.isXRRenderTarget===!0),be=J(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,we,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),S(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,M,Se);for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Ge(F.__webglFramebuffer[he][ge],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else Ge(F.__webglFramebuffer[he],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);C(M,Se)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const he=A.texture;for(let ge=0,I=he.length;ge<I;ge++){const pe=he[ge],fe=i.get(pe);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Oe(n.TEXTURE_2D,pe,Se),Ge(F.__webglFramebuffer,A,pe,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),C(pe,Se)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?he=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),Oe(he,M,Se),o&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Ge(F.__webglFramebuffer[ge],A,M,n.COLOR_ATTACHMENT0,he,ge);else Ge(F.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,he,0);C(M,Se)&&b(he),t.unbindTexture()}A.depthBuffer&&P(A)}function X(A){const M=y(A)||o,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,ie=F.length;ne<ie;ne++){const ae=F[ne];if(C(ae,M)){const Se=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ae).__webglTexture;t.bindTexture(Se,he),b(Se),t.unbindTexture()}}}function K(A){if(o&&A.samples>0&&oe(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,ne=A.height;let ie=n.COLOR_BUFFER_BIT;const ae=[],Se=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(A),ge=A.isWebGLMultipleRenderTargets===!0;if(ge)for(let I=0;I<M.length;I++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let I=0;I<M.length;I++){ae.push(n.COLOR_ATTACHMENT0+I),A.depthBuffer&&ae.push(Se);const pe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(pe===!1&&(A.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[I]),pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),ge){const fe=i.get(M[I]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,F,ne,0,0,F,ne,ie,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let I=0;I<M.length;I++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,he.__webglColorRenderbuffer[I]);const pe=i.get(M[I]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function J(A){return Math.min(h,A.samples)}function oe(A){const M=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function te(A){const M=a.render.frame;v.get(A)!==M&&(v.set(A,M),A.update())}function ye(A,M){const F=A.colorSpace,ne=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ya||F!==ei&&F!==cn&&(rt.getTransfer(F)===ct?o===!1?e.has("EXT_sRGB")===!0&&ne===_n?(A.format=Ya,A.minFilter=an,A.generateMipmaps=!1):M=wh.sRGBToLinear(M):(ne!==_n||ie!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}this.allocateTextureUnit=re,this.resetTextureUnits=q,this.setTexture2D=ce,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=ve,this.rebindTextures=V,this.setupRenderTarget=B,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=oe}function aS(n,e,t){const i=t.isWebGL2;function s(r,a=cn){let o;const l=rt.getTransfer(a);if(r===gi)return n.UNSIGNED_BYTE;if(r===Mh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Sh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===kg)return n.BYTE;if(r===Wg)return n.SHORT;if(r===yl)return n.UNSIGNED_SHORT;if(r===xh)return n.INT;if(r===hi)return n.UNSIGNED_INT;if(r===di)return n.FLOAT;if(r===rr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Xg)return n.ALPHA;if(r===_n)return n.RGBA;if(r===jg)return n.LUMINANCE;if(r===qg)return n.LUMINANCE_ALPHA;if(r===Hi)return n.DEPTH_COMPONENT;if(r===bs)return n.DEPTH_STENCIL;if(r===Ya)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Yg)return n.RED;if(r===yh)return n.RED_INTEGER;if(r===$g)return n.RG;if(r===Eh)return n.RG_INTEGER;if(r===bh)return n.RGBA_INTEGER;if(r===qo||r===Yo||r===$o||r===Ko)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tc||r===Ac||r===wc||r===Cc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ac)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rc||r===Lc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rc)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Lc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pc||r===Dc||r===Uc||r===Ic||r===Nc||r===Fc||r===Oc||r===Bc||r===zc||r===Hc||r===Vc||r===Gc||r===kc||r===Wc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Pc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ic)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wc)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zo||r===Xc||r===jc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Zo)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zg||r===qc||r===Yc||r===$c)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Zo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===qc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class lS extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ii extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cS={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const d=t.getJointPose(g,i),f=this._getHandJoint(c,g);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cS)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class uS extends en{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:Hi,u!==Hi&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hi&&(i=hi),i===void 0&&u===bs&&(i=zi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fS extends ji{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,m=null,v=null;const g=t.getContextAttributes();let d=null,f=null;const x=[],_=[],y=new ln;y.layers.enable(1),y.viewport=new At;const w=new ln;w.layers.enable(2),w.viewport=new At;const C=[y,w],b=new lS;b.layers.enable(1),b.layers.enable(2);let z=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=x[H];return j===void 0&&(j=new Sa,x[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=x[H];return j===void 0&&(j=new Sa,x[H]=j),j.getGripSpace()},this.getHand=function(H){let j=x[H];return j===void 0&&(j=new Sa,x[H]=j),j.getHandSpace()};function T(H){const j=_.indexOf(H.inputSource);if(j===-1)return;const ve=x[j];ve!==void 0&&(ve.update(H.inputSource,H.frame,c||a),ve.dispatchEvent({type:H.type,data:H.inputSource}))}function D(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",N);for(let H=0;H<x.length;H++){const j=_[H];j!==null&&(_[H]=null,x[H].disconnect(j))}z=null,E=null,e.setRenderTarget(d),m=null,p=null,h=null,s=null,f=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",D),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:m}),f=new Gi(m.framebufferWidth,m.framebufferHeight,{format:_n,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,ve=null,xe=null;g.depth&&(xe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?bs:Hi,ve=g.stencil?zi:hi);const Ee={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=new XRWebGLBinding(s,t),p=h.createProjectionLayer(Ee),s.updateRenderState({layers:[p]}),f=new Gi(p.textureWidth,p.textureHeight,{format:_n,type:gi,depthTexture:new uS(p.textureWidth,p.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(f);Re.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(H){for(let j=0;j<H.removed.length;j++){const ve=H.removed[j],xe=_.indexOf(ve);xe>=0&&(_[xe]=null,x[xe].disconnect(ve))}for(let j=0;j<H.added.length;j++){const ve=H.added[j];let xe=_.indexOf(ve);if(xe===-1){for(let Re=0;Re<x.length;Re++)if(Re>=_.length){_.push(ve),xe=Re;break}else if(_[Re]===null){_[Re]=ve,xe=Re;break}if(xe===-1)break}const Ee=x[xe];Ee&&Ee.connect(ve)}}const Y=new G,U=new G;function k(H,j,ve){Y.setFromMatrixPosition(j.matrixWorld),U.setFromMatrixPosition(ve.matrixWorld);const xe=Y.distanceTo(U),Ee=j.projectionMatrix.elements,Re=ve.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),Ue=Ee[14]/(Ee[10]+1),Ie=(Ee[9]+1)/Ee[5],Qe=(Ee[9]-1)/Ee[5],Ge=(Ee[8]-1)/Ee[0],S=(Re[8]+1)/Re[0],L=Oe*Ge,P=Oe*S,V=xe/(-Ge+S),B=V*-Ge;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(B),H.translateZ(V),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const X=Oe+V,K=Ue+V,J=L-B,oe=P+(xe-B),te=Ie*Ue/K*X,ye=Qe*Ue/K*X;H.projectionMatrix.makePerspective(J,oe,te,ye,X,K),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function ee(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;b.near=w.near=y.near=H.near,b.far=w.far=y.far=H.far,(z!==b.near||E!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),z=b.near,E=b.far);const j=H.parent,ve=b.cameras;ee(b,j);for(let xe=0;xe<ve.length;xe++)ee(ve[xe],j);ve.length===2?k(b,y,w):b.projectionMatrix.copy(y.projectionMatrix),q(H,b,j)};function q(H,j,ve){ve===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(ve.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=$a*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(H){l=H,p!==null&&(p.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let re=null;function ue(H,j){if(u=j.getViewerPose(c||a),v=j,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let xe=!1;ve.length!==b.cameras.length&&(b.cameras.length=0,xe=!0);for(let Ee=0;Ee<ve.length;Ee++){const Re=ve[Ee];let Oe=null;if(m!==null)Oe=m.getViewport(Re);else{const Ie=h.getViewSubImage(p,Re);Oe=Ie.viewport,Ee===0&&(e.setRenderTargetTextures(f,Ie.colorTexture,p.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(f))}let Ue=C[Ee];Ue===void 0&&(Ue=new ln,Ue.layers.enable(Ee),Ue.viewport=new At,C[Ee]=Ue),Ue.matrix.fromArray(Re.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Re.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Ee===0&&(b.matrix.copy(Ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xe===!0&&b.cameras.push(Ue)}}for(let ve=0;ve<x.length;ve++){const xe=_[ve],Ee=x[ve];xe!==null&&Ee!==void 0&&Ee.update(xe,j,c||a)}re&&re(H,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),v=null}const ce=new Oh;ce.setAnimationLoop(ue),this.setAnimationLoop=function(H){re=H},this.dispose=function(){}}}function hS(n,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,Ih(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),h(d,f)):f.isMeshPhongMaterial?(r(d,f),u(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,y)):f.isMeshMatcapMaterial?(r(d,f),v(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),g(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,x,_):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Yt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Yt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,x,_){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*x,d.scale.value=_*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function h(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),e.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,x){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,f){f.matcap&&(d.matcap.value=f.matcap)}function g(d,f){const x=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dS(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=s[x.id];y===void 0&&(v(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",d));const w=_.program;i.updateUBOMapping(x,w);const C=e.render.frame;r[x.id]!==C&&(p(x),r[x.id]=C)}function u(x){const _=h();x.__bindingPointIndex=_;const y=n.createBuffer(),w=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const _=s[x.id],y=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,b=y.length;C<b;C++){const z=y[C];if(m(z,C,w)===!0){const E=z.__offset,T=Array.isArray(z.value)?z.value:[z.value];let D=0;for(let N=0;N<T.length;N++){const Y=T[N],U=g(Y);typeof Y=="number"?(z.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,E+D,z.__data)):Y.isMatrix3?(z.__data[0]=Y.elements[0],z.__data[1]=Y.elements[1],z.__data[2]=Y.elements[2],z.__data[3]=Y.elements[0],z.__data[4]=Y.elements[3],z.__data[5]=Y.elements[4],z.__data[6]=Y.elements[5],z.__data[7]=Y.elements[0],z.__data[8]=Y.elements[6],z.__data[9]=Y.elements[7],z.__data[10]=Y.elements[8],z.__data[11]=Y.elements[0]):(Y.toArray(z.__data,D),D+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,z.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,_,y){const w=x.value;if(y[_]===void 0){if(typeof w=="number")y[_]=w;else{const C=Array.isArray(w)?w:[w],b=[];for(let z=0;z<C.length;z++)b.push(C[z].clone());y[_]=b}return!0}else if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const C=Array.isArray(y[_])?y[_]:[y[_]],b=Array.isArray(w)?w:[w];for(let z=0;z<C.length;z++){const E=C[z];if(E.equals(b[z])===!1)return E.copy(b[z]),!0}}return!1}function v(x){const _=x.uniforms;let y=0;const w=16;let C=0;for(let b=0,z=_.length;b<z;b++){const E=_[b],T={boundary:0,storage:0},D=Array.isArray(E.value)?E.value:[E.value];for(let N=0,Y=D.length;N<Y;N++){const U=D[N],k=g(U);T.boundary+=k.boundary,T.storage+=k.storage}if(E.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,b>0){C=y%w;const N=w-C;C!==0&&N-T.boundary<0&&(y+=w-C,E.__offset=y)}y+=T.storage}return C=y%w,C>0&&(y+=w-C),x.__size=y,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function d(x){const _=x.target;_.removeEventListener("dispose",d);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class kh{constructor(e={}){const{canvas:t=f_(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,d=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const _=this;let y=!1,w=0,C=0,b=null,z=-1,E=null;const T=new At,D=new At;let N=null;const Y=new ze(0);let U=0,k=t.width,ee=t.height,q=1,re=null,ue=null;const ce=new At(0,0,k,ee),H=new At(0,0,k,ee);let j=!1;const ve=new Tl;let xe=!1,Ee=!1,Re=null;const Oe=new gt,Ue=new We,Ie=new G,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return b===null?q:1}let S=i;function L(R,W){for(let $=0;$<R.length;$++){const Z=R[$],Q=t.getContext(Z,W);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",_e,!1),S===null){const W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),S=L(W,R),S===null)throw L(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let P,V,B,X,K,J,oe,te,ye,A,M,F,ne,ie,ae,Se,he,ge,I,pe,fe,we,be,Le;function Ce(){P=new Ex(S),V=new _x(S,P,e),P.init(V),we=new aS(S,P,V),B=new rS(S,P,V),X=new Ax(S),K=new XM,J=new oS(S,P,B,K,V,we,X),oe=new xx(_),te=new yx(_),ye=new F_(S,V),be=new mx(S,P,ye,V),A=new bx(S,ye,X,be),M=new Lx(S,A,ye,X),I=new Rx(S,V,J),Se=new vx(K),F=new WM(_,oe,te,P,V,be,Se),ne=new hS(_,K),ie=new qM,ae=new QM(P,V),ge=new px(_,oe,te,B,M,p,l),he=new sS(_,M,V),Le=new dS(S,X,V,B),pe=new gx(S,P,X,V),fe=new Tx(S,P,X,V),X.programs=F.programs,_.capabilities=V,_.extensions=P,_.properties=K,_.renderLists=ie,_.shadowMap=he,_.state=B,_.info=X}Ce();const Ae=new fS(_,S);this.xr=Ae,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const R=P.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=P.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(k,ee,!1))},this.getSize=function(R){return R.set(k,ee)},this.setSize=function(R,W,$=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,ee=W,t.width=Math.floor(R*q),t.height=Math.floor(W*q),$===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(k*q,ee*q).floor()},this.setDrawingBufferSize=function(R,W,$){k=R,ee=W,q=$,t.width=Math.floor(R*$),t.height=Math.floor(W*$),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(ce)},this.setViewport=function(R,W,$,Z){R.isVector4?ce.set(R.x,R.y,R.z,R.w):ce.set(R,W,$,Z),B.viewport(T.copy(ce).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(H)},this.setScissor=function(R,W,$,Z){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,W,$,Z),B.scissor(D.copy(H).multiplyScalar(q).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(R){B.setScissorTest(j=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(R=!0,W=!0,$=!0){let Z=0;if(R){let Q=!1;if(b!==null){const Te=b.texture.format;Q=Te===bh||Te===Eh||Te===yh}if(Q){const Te=b.texture.type,Pe=Te===gi||Te===hi||Te===yl||Te===zi||Te===Mh||Te===Sh,Ne=ge.getClearColor(),He=ge.getClearAlpha(),Ye=Ne.r,ke=Ne.g,Xe=Ne.b;Pe?(m[0]=Ye,m[1]=ke,m[2]=Xe,m[3]=He,S.clearBufferuiv(S.COLOR,0,m)):(v[0]=Ye,v[1]=ke,v[2]=Xe,v[3]=He,S.clearBufferiv(S.COLOR,0,v))}else Z|=S.COLOR_BUFFER_BIT}W&&(Z|=S.DEPTH_BUFFER_BIT),$&&(Z|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ie.dispose(),ae.dispose(),K.dispose(),oe.dispose(),te.dispose(),M.dispose(),be.dispose(),Le.dispose(),F.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",nn),Ae.removeEventListener("sessionend",ot),Re&&(Re.dispose(),Re=null),It.stop()};function Ke(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=X.autoReset,W=he.enabled,$=he.autoUpdate,Z=he.needsUpdate,Q=he.type;Ce(),X.autoReset=R,he.enabled=W,he.autoUpdate=$,he.needsUpdate=Z,he.type=Q}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function de(R){const W=R.target;W.removeEventListener("dispose",de),se(W)}function se(R){me(R),K.remove(R)}function me(R){const W=K.get(R).programs;W!==void 0&&(W.forEach(function($){F.releaseProgram($)}),R.isShaderMaterial&&F.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,$,Z,Q,Te){W===null&&(W=Qe);const Pe=Q.isMesh&&Q.matrixWorld.determinant()<0,Ne=qh(R,W,$,Z,Q);B.setMaterial(Z,Pe);let He=$.index,Ye=1;if(Z.wireframe===!0){if(He=A.getWireframeAttribute($),He===void 0)return;Ye=2}const ke=$.drawRange,Xe=$.attributes.position;let dt=ke.start*Ye,$t=(ke.start+ke.count)*Ye;Te!==null&&(dt=Math.max(dt,Te.start*Ye),$t=Math.min($t,(Te.start+Te.count)*Ye)),He!==null?(dt=Math.max(dt,0),$t=Math.min($t,He.count)):Xe!=null&&(dt=Math.max(dt,0),$t=Math.min($t,Xe.count));const Et=$t-dt;if(Et<0||Et===1/0)return;be.setup(Q,Z,Ne,$,He);let Fn,ft=pe;if(He!==null&&(Fn=ye.get(He),ft=fe,ft.setIndex(Fn)),Q.isMesh)Z.wireframe===!0?(B.setLineWidth(Z.wireframeLinewidth*Ge()),ft.setMode(S.LINES)):ft.setMode(S.TRIANGLES);else if(Q.isLine){let Je=Z.linewidth;Je===void 0&&(Je=1),B.setLineWidth(Je*Ge()),Q.isLineSegments?ft.setMode(S.LINES):Q.isLineLoop?ft.setMode(S.LINE_LOOP):ft.setMode(S.LINE_STRIP)}else Q.isPoints?ft.setMode(S.POINTS):Q.isSprite&&ft.setMode(S.TRIANGLES);if(Q.isInstancedMesh)ft.renderInstances(dt,Et,Q.count);else if($.isInstancedBufferGeometry){const Je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Lo=Math.min($.instanceCount,Je);ft.renderInstances(dt,Et,Lo)}else ft.render(dt,Et)};function De(R,W,$){R.transparent===!0&&R.side===mn&&R.forceSinglePass===!1?(R.side=Yt,R.needsUpdate=!0,mr(R,W,$),R.side=vi,R.needsUpdate=!0,mr(R,W,$),R.side=mn):mr(R,W,$)}this.compile=function(R,W,$=null){$===null&&($=R),d=ae.get($),d.init(),x.push(d),$.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),R!==$&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights(_._useLegacyLights);const Z=new Set;return R.traverse(function(Q){const Te=Q.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Ne=Te[Pe];De(Ne,$,Q),Z.add(Ne)}else De(Te,$,Q),Z.add(Te)}),x.pop(),d=null,Z},this.compileAsync=function(R,W,$=null){const Z=this.compile(R,W,$);return new Promise(Q=>{function Te(){if(Z.forEach(function(Pe){K.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){Q(R);return}setTimeout(Te,10)}P.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ze=null;function vt(R){Ze&&Ze(R)}function nn(){It.stop()}function ot(){It.start()}const It=new Oh;It.setAnimationLoop(vt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(R){Ze=R,Ae.setAnimationLoop(R),R===null?It.stop():It.start()},Ae.addEventListener("sessionstart",nn),Ae.addEventListener("sessionend",ot),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,W,b),d=ae.get(R,x.length),d.init(),x.push(d),Oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ve.setFromProjectionMatrix(Oe),Ee=this.localClippingEnabled,xe=Se.init(this.clippingPlanes,Ee),g=ie.get(R,f.length),g.init(),f.push(g),bn(R,W,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(re,ue),this.info.render.frame++,xe===!0&&Se.beginShadows();const $=d.state.shadowsArray;if(he.render($,R,W),xe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(g,R),d.setupLights(_._useLegacyLights),W.isArrayCamera){const Z=W.cameras;for(let Q=0,Te=Z.length;Q<Te;Q++){const Pe=Z[Q];Cl(g,R,Pe,Pe.viewport)}}else Cl(g,R,W);b!==null&&(J.updateMultisampleRenderTarget(b),J.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,W),be.resetDefaultState(),z=-1,E=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function bn(R,W,$,Z){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ve.intersectsSprite(R)){Z&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Oe);const Pe=M.update(R),Ne=R.material;Ne.visible&&g.push(R,Pe,Ne,$,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ve.intersectsObject(R))){const Pe=M.update(R),Ne=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ie.copy(Pe.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ne)){const He=Pe.groups;for(let Ye=0,ke=He.length;Ye<ke;Ye++){const Xe=He[Ye],dt=Ne[Xe.materialIndex];dt&&dt.visible&&g.push(R,Pe,dt,$,Ie.z,Xe)}}else Ne.visible&&g.push(R,Pe,Ne,$,Ie.z,null)}}const Te=R.children;for(let Pe=0,Ne=Te.length;Pe<Ne;Pe++)bn(Te[Pe],W,$,Z)}function Cl(R,W,$,Z){const Q=R.opaque,Te=R.transmissive,Pe=R.transparent;d.setupLightsView($),xe===!0&&Se.setGlobalState(_.clippingPlanes,$),Te.length>0&&jh(Q,Te,W,$),Z&&B.viewport(T.copy(Z)),Q.length>0&&pr(Q,W,$),Te.length>0&&pr(Te,W,$),Pe.length>0&&pr(Pe,W,$),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function jh(R,W,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Te=V.isWebGL2;Re===null&&(Re=new Gi(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?rr:gi,minFilter:sr,samples:Te?4:0})),_.getDrawingBufferSize(Ue),Te?Re.setSize(Ue.x,Ue.y):Re.setSize(Ka(Ue.x),Ka(Ue.y));const Pe=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(Y),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();const Ne=_.toneMapping;_.toneMapping=mi,pr(R,$,Z),J.updateMultisampleRenderTarget(Re),J.updateRenderTargetMipmap(Re);let He=!1;for(let Ye=0,ke=W.length;Ye<ke;Ye++){const Xe=W[Ye],dt=Xe.object,$t=Xe.geometry,Et=Xe.material,Fn=Xe.group;if(Et.side===mn&&dt.layers.test(Z.layers)){const ft=Et.side;Et.side=Yt,Et.needsUpdate=!0,Rl(dt,$,Z,$t,Et,Fn),Et.side=ft,Et.needsUpdate=!0,He=!0}}He===!0&&(J.updateMultisampleRenderTarget(Re),J.updateRenderTargetMipmap(Re)),_.setRenderTarget(Pe),_.setClearColor(Y,U),_.toneMapping=Ne}function pr(R,W,$){const Z=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Te=R.length;Q<Te;Q++){const Pe=R[Q],Ne=Pe.object,He=Pe.geometry,Ye=Z===null?Pe.material:Z,ke=Pe.group;Ne.layers.test($.layers)&&Rl(Ne,W,$,He,Ye,ke)}}function Rl(R,W,$,Z,Q,Te){R.onBeforeRender(_,W,$,Z,Q,Te),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(_,W,$,Z,R,Te),Q.transparent===!0&&Q.side===mn&&Q.forceSinglePass===!1?(Q.side=Yt,Q.needsUpdate=!0,_.renderBufferDirect($,W,Z,Q,R,Te),Q.side=vi,Q.needsUpdate=!0,_.renderBufferDirect($,W,Z,Q,R,Te),Q.side=mn):_.renderBufferDirect($,W,Z,Q,R,Te),R.onAfterRender(_,W,$,Z,Q,Te)}function mr(R,W,$){W.isScene!==!0&&(W=Qe);const Z=K.get(R),Q=d.state.lights,Te=d.state.shadowsArray,Pe=Q.state.version,Ne=F.getParameters(R,Q.state,Te,W,$),He=F.getProgramCacheKey(Ne);let Ye=Z.programs;Z.environment=R.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(R.isMeshStandardMaterial?te:oe).get(R.envMap||Z.environment),Ye===void 0&&(R.addEventListener("dispose",de),Ye=new Map,Z.programs=Ye);let ke=Ye.get(He);if(ke!==void 0){if(Z.currentProgram===ke&&Z.lightsStateVersion===Pe)return Pl(R,Ne),ke}else Ne.uniforms=F.getUniforms(R),R.onBuild($,Ne,_),R.onBeforeCompile(Ne,_),ke=F.acquireProgram(Ne,He),Ye.set(He,ke),Z.uniforms=Ne.uniforms;const Xe=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),Pl(R,Ne),Z.needsLights=$h(R),Z.lightsStateVersion=Pe,Z.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMap.value=Q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotShadowMap.value=Q.state.spotShadowMap,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMap.value=Q.state.pointShadowMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.currentProgram=ke,Z.uniformsList=null,ke}function Ll(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Kr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Pl(R,W){const $=K.get(R);$.outputColorSpace=W.outputColorSpace,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function qh(R,W,$,Z,Q){W.isScene!==!0&&(W=Qe),J.resetTextureUnits();const Te=W.fog,Pe=Z.isMeshStandardMaterial?W.environment:null,Ne=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ei,He=(Z.isMeshStandardMaterial?te:oe).get(Z.envMap||Pe),Ye=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ke=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,$t=!!$.morphAttributes.color;let Et=mi;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Et=_.toneMapping);const Fn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ft=Fn!==void 0?Fn.length:0,Je=K.get(Z),Lo=d.state.lights;if(xe===!0&&(Ee===!0||R!==E)){const Kt=R===E&&Z.id===z;Se.setState(Z,R,Kt)}let xt=!1;Z.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Lo.state.version||Je.outputColorSpace!==Ne||Q.isInstancedMesh&&Je.instancing===!1||!Q.isInstancedMesh&&Je.instancing===!0||Q.isSkinnedMesh&&Je.skinning===!1||!Q.isSkinnedMesh&&Je.skinning===!0||Q.isInstancedMesh&&Je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Je.instancingColor===!1&&Q.instanceColor!==null||Je.envMap!==He||Z.fog===!0&&Je.fog!==Te||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Se.numPlanes||Je.numIntersection!==Se.numIntersection)||Je.vertexAlphas!==Ye||Je.vertexTangents!==ke||Je.morphTargets!==Xe||Je.morphNormals!==dt||Je.morphColors!==$t||Je.toneMapping!==Et||V.isWebGL2===!0&&Je.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,Je.__version=Z.version);let xi=Je.currentProgram;xt===!0&&(xi=mr(Z,W,Q));let Dl=!1,Rs=!1,Po=!1;const Nt=xi.getUniforms(),Mi=Je.uniforms;if(B.useProgram(xi.program)&&(Dl=!0,Rs=!0,Po=!0),Z.id!==z&&(z=Z.id,Rs=!0),Dl||E!==R){Nt.setValue(S,"projectionMatrix",R.projectionMatrix),Nt.setValue(S,"viewMatrix",R.matrixWorldInverse);const Kt=Nt.map.cameraPosition;Kt!==void 0&&Kt.setValue(S,Ie.setFromMatrixPosition(R.matrixWorld)),V.logarithmicDepthBuffer&&Nt.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Nt.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Rs=!0,Po=!0)}if(Q.isSkinnedMesh){Nt.setOptional(S,Q,"bindMatrix"),Nt.setOptional(S,Q,"bindMatrixInverse");const Kt=Q.skeleton;Kt&&(V.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Nt.setValue(S,"boneTexture",Kt.boneTexture,J),Nt.setValue(S,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Do=$.morphAttributes;if((Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0&&V.isWebGL2===!0)&&I.update(Q,$,xi),(Rs||Je.receiveShadow!==Q.receiveShadow)&&(Je.receiveShadow=Q.receiveShadow,Nt.setValue(S,"receiveShadow",Q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Mi.envMap.value=He,Mi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Rs&&(Nt.setValue(S,"toneMappingExposure",_.toneMappingExposure),Je.needsLights&&Yh(Mi,Po),Te&&Z.fog===!0&&ne.refreshFogUniforms(Mi,Te),ne.refreshMaterialUniforms(Mi,Z,q,ee,Re),Kr.upload(S,Ll(Je),Mi,J)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Kr.upload(S,Ll(Je),Mi,J),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Nt.setValue(S,"center",Q.center),Nt.setValue(S,"modelViewMatrix",Q.modelViewMatrix),Nt.setValue(S,"normalMatrix",Q.normalMatrix),Nt.setValue(S,"modelMatrix",Q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Kt=Z.uniformsGroups;for(let Uo=0,Kh=Kt.length;Uo<Kh;Uo++)if(V.isWebGL2){const Ul=Kt[Uo];Le.update(Ul,xi),Le.bind(Ul,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Yh(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function $h(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,W,$){K.get(R.texture).__webglTexture=W,K.get(R.depthTexture).__webglTexture=$;const Z=K.get(R);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const $=K.get(R);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,$=0){b=R,w=W,C=$;let Z=!0,Q=null,Te=!1,Pe=!1;if(R){const He=K.get(R);He.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(S.FRAMEBUFFER,null),Z=!1):He.__webglFramebuffer===void 0?J.setupRenderTarget(R):He.__hasExternalTextures&&J.rebindTextures(R,K.get(R.texture).__webglTexture,K.get(R.depthTexture).__webglTexture);const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);const ke=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?Q=ke[W][$]:Q=ke[W],Te=!0):V.isWebGL2&&R.samples>0&&J.useMultisampledRTT(R)===!1?Q=K.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?Q=ke[$]:Q=ke,T.copy(R.viewport),D.copy(R.scissor),N=R.scissorTest}else T.copy(ce).multiplyScalar(q).floor(),D.copy(H).multiplyScalar(q).floor(),N=j;if(B.bindFramebuffer(S.FRAMEBUFFER,Q)&&V.drawBuffers&&Z&&B.drawBuffers(R,Q),B.viewport(T),B.scissor(D),B.setScissorTest(N),Te){const He=K.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,$)}else if(Pe){const He=K.get(R.texture),Ye=W||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,He.__webglTexture,$||0,Ye)}z=-1},this.readRenderTargetPixels=function(R,W,$,Z,Q,Te,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){B.bindFramebuffer(S.FRAMEBUFFER,Ne);try{const He=R.texture,Ye=He.format,ke=He.type;if(Ye!==_n&&we.convert(Ye)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=ke===rr&&(P.has("EXT_color_buffer_half_float")||V.isWebGL2&&P.has("EXT_color_buffer_float"));if(ke!==gi&&we.convert(ke)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===di&&(V.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Z&&$>=0&&$<=R.height-Q&&S.readPixels(W,$,Z,Q,we.convert(Ye),we.convert(ke),Te)}finally{const He=b!==null?K.get(b).__webglFramebuffer:null;B.bindFramebuffer(S.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(R,W,$=0){const Z=Math.pow(2,-$),Q=Math.floor(W.image.width*Z),Te=Math.floor(W.image.height*Z);J.setTexture2D(W,0),S.copyTexSubImage2D(S.TEXTURE_2D,$,0,0,R.x,R.y,Q,Te),B.unbindTexture()},this.copyTextureToTexture=function(R,W,$,Z=0){const Q=W.image.width,Te=W.image.height,Pe=we.convert($.format),Ne=we.convert($.type);J.setTexture2D($,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,$.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Z,R.x,R.y,Q,Te,Pe,Ne,W.image.data):W.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Z,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Pe,W.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,Z,R.x,R.y,Pe,Ne,W.image),Z===0&&$.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(R,W,$,Z,Q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=R.max.x-R.min.x+1,Pe=R.max.y-R.min.y+1,Ne=R.max.z-R.min.z+1,He=we.convert(Z.format),Ye=we.convert(Z.type);let ke;if(Z.isData3DTexture)J.setTexture3D(Z,0),ke=S.TEXTURE_3D;else if(Z.isDataArrayTexture)J.setTexture2DArray(Z,0),ke=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,Z.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xe=S.getParameter(S.UNPACK_ROW_LENGTH),dt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),$t=S.getParameter(S.UNPACK_SKIP_PIXELS),Et=S.getParameter(S.UNPACK_SKIP_ROWS),Fn=S.getParameter(S.UNPACK_SKIP_IMAGES),ft=$.isCompressedTexture?$.mipmaps[0]:$.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,ft.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ft.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,R.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,R.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?S.texSubImage3D(ke,Q,W.x,W.y,W.z,Te,Pe,Ne,He,Ye,ft.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(ke,Q,W.x,W.y,W.z,Te,Pe,Ne,He,ft.data)):S.texSubImage3D(ke,Q,W.x,W.y,W.z,Te,Pe,Ne,He,Ye,ft),S.pixelStorei(S.UNPACK_ROW_LENGTH,Xe),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,dt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,$t),S.pixelStorei(S.UNPACK_SKIP_ROWS,Et),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Fn),Q===0&&Z.generateMipmaps&&S.generateMipmap(ke),B.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?J.setTextureCube(R,0):R.isData3DTexture?J.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?J.setTexture2DArray(R,0):J.setTexture2D(R,0),B.unbindTexture()},this.resetState=function(){w=0,C=0,b=null,B.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bl?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===To?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?Vi:Th}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vi?Tt:ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pS extends kh{}pS.prototype.isWebGL1Renderer=!0;class mS extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class $s extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new G,zu=new G,Hu=new gt,ya=new Ao,Vr=new hr;class gS extends wt{constructor(e=new tn,t=new $s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Bu.fromBufferAttribute(t,s-1),zu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bu.distanceTo(zu);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Hu.copy(s).invert(),ya.copy(e.ray).applyMatrix4(Hu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new G,u=new G,h=new G,p=new G,m=this.isLineSegments?2:1,v=i.index,d=i.attributes.position;if(v!==null){const f=Math.max(0,a.start),x=Math.min(v.count,a.start+a.count);for(let _=f,y=x-1;_<y;_+=m){const w=v.getX(_),C=v.getX(_+1);if(c.fromBufferAttribute(d,w),u.fromBufferAttribute(d,C),ya.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(p);z<e.near||z>e.far||t.push({distance:z,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let _=f,y=x-1;_<y;_+=m){if(c.fromBufferAttribute(d,_),u.fromBufferAttribute(d,_+1),ya.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(p);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Vu=new G,Gu=new G;class Ja extends gS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Vu.fromBufferAttribute(t,s),Gu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vu.distanceTo(Gu);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ni extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ku=new gt,Qa=new Ao,Gr=new hr,kr=new G;class Ks extends wt{constructor(e=new tn,t=new Ni){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;ku.copy(s).invert(),Qa.copy(e.ray).applyMatrix4(ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=p,g=m;v<g;v++){const d=c.getX(v);kr.fromBufferAttribute(h,d),Wu(kr,d,l,s,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=p,g=m;v<g;v++)kr.fromBufferAttribute(h,v),Wu(kr,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wu(n,e,t,i,s,r,a){const o=Qa.distanceSqToPoint(n);if(o<t){const l=new G;Qa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Ea extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _S extends Nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Xu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class vS{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const xS=new vS;class Ro{constructor(e){this.manager=e!==void 0?e:xS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class MS extends Error{constructor(e,t){super(e),this.response=t}}class Wh extends Ro{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xu.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:i,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[e],h=c.body.getReader(),p=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=p?parseInt(p):0,v=m!==0;let g=0;const d=new ReadableStream({start(f){x();function x(){h.read().then(({done:_,value:y})=>{if(_)f.close();else{g+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let C=0,b=u.length;C<b;C++){const z=u[C];z.onProgress&&z.onProgress(w)}f.enqueue(y),x()}})}}});return new Response(d)}else throw new MS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Xu.add(e,c);const u=Wn[e];delete Wn[e];for(let h=0,p=u.length;h<p;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,p=u.length;h<p;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xh extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ba=new gt,ju=new G,qu=new G;class SS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(ju),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yS extends SS{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ta extends Xh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new yS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ES extends Xh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bS extends Ja{constructor(e=10,t=10,i=4473924,s=8947848){i=new ze(i),s=new ze(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let p=0,m=0,v=-o;p<=t;p++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const g=p===r?i:s;g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3}const u=new tn;u.setAttribute("position",new ut(l,3)),u.setAttribute("color",new ut(c,3));const h=new $s({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const $u={type:"change"},Aa={type:"start"},Ku={type:"end"},Wr=new Ao,Zu=new ci,TS=Math.cos(70*u_.DEG2RAD);class AS extends ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",M),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent($u),i.update(),r=s.NONE},this.update=function(){const I=new G,pe=new ki().setFromUnitVectors(e.up,new G(0,1,0)),fe=pe.clone().invert(),we=new G,be=new ki,Le=new G,Ce=2*Math.PI;return function(Ke=null){const O=i.object.position;I.copy(O).sub(i.target),I.applyQuaternion(pe),o.setFromVector3(I),i.autoRotate&&r===s.NONE&&D(E(Ke)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let _e=i.minAzimuthAngle,de=i.maxAzimuthAngle;isFinite(_e)&&isFinite(de)&&(_e<-Math.PI?_e+=Ce:_e>Math.PI&&(_e-=Ce),de<-Math.PI?de+=Ce:de>Math.PI&&(de-=Ce),_e<=de?o.theta=Math.max(_e,Math.min(de,o.theta)):o.theta=o.theta>(_e+de)/2?Math.max(_e,o.theta):Math.min(de,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?o.radius=ue(o.radius):o.radius=ue(o.radius*c),I.setFromSpherical(o),I.applyQuaternion(fe),O.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let se=!1;if(i.zoomToCursor&&C){let me=null;if(i.object.isPerspectiveCamera){const De=I.length();me=ue(De*c);const Ze=De-me;i.object.position.addScaledVector(y,Ze),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const De=new G(w.x,w.y,0);De.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),se=!0;const Ze=new G(w.x,w.y,0);Ze.unproject(i.object),i.object.position.sub(Ze).add(De),i.object.updateMatrixWorld(),me=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(me).add(i.object.position):(Wr.origin.copy(i.object.position),Wr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Wr.direction))<TS?e.lookAt(i.target):(Zu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Wr.intersectPlane(Zu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),se=!0);return c=1,C=!1,se||we.distanceToSquared(i.object.position)>a||8*(1-be.dot(i.object.quaternion))>a||Le.distanceToSquared(i.target)>0?(i.dispatchEvent($u),we.copy(i.object.position),be.copy(i.object.quaternion),Le.copy(i.target),se=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ie),i.domElement.removeEventListener("pointerdown",K),i.domElement.removeEventListener("pointercancel",oe),i.domElement.removeEventListener("wheel",A),i.domElement.removeEventListener("pointermove",J),i.domElement.removeEventListener("pointerup",oe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",M),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Yu,l=new Yu;let c=1;const u=new G,h=new We,p=new We,m=new We,v=new We,g=new We,d=new We,f=new We,x=new We,_=new We,y=new G,w=new We;let C=!1;const b=[],z={};function E(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function D(I){l.theta-=I}function N(I){l.phi-=I}const Y=function(){const I=new G;return function(fe,we){I.setFromMatrixColumn(we,0),I.multiplyScalar(-fe),u.add(I)}}(),U=function(){const I=new G;return function(fe,we){i.screenSpacePanning===!0?I.setFromMatrixColumn(we,1):(I.setFromMatrixColumn(we,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(fe),u.add(I)}}(),k=function(){const I=new G;return function(fe,we){const be=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;I.copy(Le).sub(i.target);let Ce=I.length();Ce*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*fe*Ce/be.clientHeight,i.object.matrix),U(2*we*Ce/be.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(fe*(i.object.right-i.object.left)/i.object.zoom/be.clientWidth,i.object.matrix),U(we*(i.object.top-i.object.bottom)/i.object.zoom/be.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ee(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(I){if(!i.zoomToCursor)return;C=!0;const pe=i.domElement.getBoundingClientRect(),fe=I.clientX-pe.left,we=I.clientY-pe.top,be=pe.width,Le=pe.height;w.x=fe/be*2-1,w.y=-(we/Le)*2+1,y.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function ue(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function ce(I){h.set(I.clientX,I.clientY)}function H(I){re(I),f.set(I.clientX,I.clientY)}function j(I){v.set(I.clientX,I.clientY)}function ve(I){p.set(I.clientX,I.clientY),m.subVectors(p,h).multiplyScalar(i.rotateSpeed);const pe=i.domElement;D(2*Math.PI*m.x/pe.clientHeight),N(2*Math.PI*m.y/pe.clientHeight),h.copy(p),i.update()}function xe(I){x.set(I.clientX,I.clientY),_.subVectors(x,f),_.y>0?ee(T()):_.y<0&&q(T()),f.copy(x),i.update()}function Ee(I){g.set(I.clientX,I.clientY),d.subVectors(g,v).multiplyScalar(i.panSpeed),k(d.x,d.y),v.copy(g),i.update()}function Re(I){re(I),I.deltaY<0?q(T()):I.deltaY>0&&ee(T()),i.update()}function Oe(I){let pe=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),pe=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),pe=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),pe=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),pe=!0;break}pe&&(I.preventDefault(),i.update())}function Ue(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const I=.5*(b[0].pageX+b[1].pageX),pe=.5*(b[0].pageY+b[1].pageY);h.set(I,pe)}}function Ie(){if(b.length===1)v.set(b[0].pageX,b[0].pageY);else{const I=.5*(b[0].pageX+b[1].pageX),pe=.5*(b[0].pageY+b[1].pageY);v.set(I,pe)}}function Qe(){const I=b[0].pageX-b[1].pageX,pe=b[0].pageY-b[1].pageY,fe=Math.sqrt(I*I+pe*pe);f.set(0,fe)}function Ge(){i.enableZoom&&Qe(),i.enablePan&&Ie()}function S(){i.enableZoom&&Qe(),i.enableRotate&&Ue()}function L(I){if(b.length==1)p.set(I.pageX,I.pageY);else{const fe=ge(I),we=.5*(I.pageX+fe.x),be=.5*(I.pageY+fe.y);p.set(we,be)}m.subVectors(p,h).multiplyScalar(i.rotateSpeed);const pe=i.domElement;D(2*Math.PI*m.x/pe.clientHeight),N(2*Math.PI*m.y/pe.clientHeight),h.copy(p)}function P(I){if(b.length===1)g.set(I.pageX,I.pageY);else{const pe=ge(I),fe=.5*(I.pageX+pe.x),we=.5*(I.pageY+pe.y);g.set(fe,we)}d.subVectors(g,v).multiplyScalar(i.panSpeed),k(d.x,d.y),v.copy(g)}function V(I){const pe=ge(I),fe=I.pageX-pe.x,we=I.pageY-pe.y,be=Math.sqrt(fe*fe+we*we);x.set(0,be),_.set(0,Math.pow(x.y/f.y,i.zoomSpeed)),ee(_.y),f.copy(x)}function B(I){i.enableZoom&&V(I),i.enablePan&&P(I)}function X(I){i.enableZoom&&V(I),i.enableRotate&&L(I)}function K(I){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",J),i.domElement.addEventListener("pointerup",oe)),ae(I),I.pointerType==="touch"?F(I):te(I))}function J(I){i.enabled!==!1&&(I.pointerType==="touch"?ne(I):ye(I))}function oe(I){Se(I),b.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",J),i.domElement.removeEventListener("pointerup",oe)),i.dispatchEvent(Ku),r=s.NONE}function te(I){let pe;switch(I.button){case 0:pe=i.mouseButtons.LEFT;break;case 1:pe=i.mouseButtons.MIDDLE;break;case 2:pe=i.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case Yi.DOLLY:if(i.enableZoom===!1)return;H(I),r=s.DOLLY;break;case Yi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;j(I),r=s.PAN}else{if(i.enableRotate===!1)return;ce(I),r=s.ROTATE}break;case Yi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;ce(I),r=s.ROTATE}else{if(i.enablePan===!1)return;j(I),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Aa)}function ye(I){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ve(I);break;case s.DOLLY:if(i.enableZoom===!1)return;xe(I);break;case s.PAN:if(i.enablePan===!1)return;Ee(I);break}}function A(I){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(I.preventDefault(),i.dispatchEvent(Aa),Re(I),i.dispatchEvent(Ku))}function M(I){i.enabled===!1||i.enablePan===!1||Oe(I)}function F(I){switch(he(I),b.length){case 1:switch(i.touches.ONE){case $i.ROTATE:if(i.enableRotate===!1)return;Ue(),r=s.TOUCH_ROTATE;break;case $i.PAN:if(i.enablePan===!1)return;Ie(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case $i.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(),r=s.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Aa)}function ne(I){switch(he(I),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;L(I),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;P(I),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(I),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;X(I),i.update();break;default:r=s.NONE}}function ie(I){i.enabled!==!1&&I.preventDefault()}function ae(I){b.push(I)}function Se(I){delete z[I.pointerId];for(let pe=0;pe<b.length;pe++)if(b[pe].pointerId==I.pointerId){b.splice(pe,1);return}}function he(I){let pe=z[I.pointerId];pe===void 0&&(pe=new We,z[I.pointerId]=pe),pe.set(I.pageX,I.pageY)}function ge(I){const pe=I.pointerId===b[0].pointerId?b[1]:b[0];return z[pe.pointerId]}i.domElement.addEventListener("contextmenu",ie),i.domElement.addEventListener("pointerdown",K),i.domElement.addEventListener("pointercancel",oe),i.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}const Wt=new ze;class wS extends Ro{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,i,s){const r=this,a=new Wh(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(d,f=0){const x=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let _="";const y=x.exec(d);y!==null&&(_=y[1]);const w={comments:[],elements:[],headerLength:f,objInfo:""},C=_.split(/\r\n|\r|\n/);let b;function z(E,T){const D={type:E[0]};return D.type==="list"?(D.name=E[3],D.countType=E[1],D.itemType=E[2]):D.name=E[1],D.name in T&&(D.name=T[D.name]),D}for(let E=0;E<C.length;E++){let T=C[E];if(T=T.trim(),T==="")continue;const D=T.split(/\s+/),N=D.shift();switch(T=D.join(" "),N){case"format":w.format=D[0],w.version=D[1];break;case"comment":w.comments.push(T);break;case"element":b!==void 0&&w.elements.push(b),b={},b.name=D[0],b.count=parseInt(D[1]),b.properties=[];break;case"property":b.properties.push(z(D,g.propertyNameMapping));break;case"obj_info":w.objInfo=T;break;default:console.log("unhandled",N,D)}}return b!==void 0&&w.elements.push(b),w}function i(d,f){switch(f){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(d);case"float":case"double":case"float32":case"float64":return parseFloat(d)}}function s(d,f){const x={};for(let _=0;_<d.length;_++){if(f.empty())return null;if(d[_].type==="list"){const y=[],w=i(f.next(),d[_].countType);for(let C=0;C<w;C++){if(f.empty())return null;y.push(i(f.next(),d[_].itemType))}x[d[_].name]=y}else x[d[_].name]=i(f.next(),d[_].type)}return x}function r(){const d={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const f of Object.keys(g.customPropertyMapping))d[f]=[];return d}function a(d){const f=d.map(_=>_.name);function x(_){for(let y=0,w=_.length;y<w;y++){const C=_[y];if(f.includes(C))return C}return null}return{attrX:x(["x","px","posx"])||"x",attrY:x(["y","py","posy"])||"y",attrZ:x(["z","pz","posz"])||"z",attrNX:x(["nx","normalx"]),attrNY:x(["ny","normaly"]),attrNZ:x(["nz","normalz"]),attrS:x(["s","u","texture_u","tx"]),attrT:x(["t","v","texture_v","ty"]),attrR:x(["red","diffuse_red","r","diffuse_r"]),attrG:x(["green","diffuse_green","g","diffuse_g"]),attrB:x(["blue","diffuse_blue","b","diffuse_b"])}}function o(d,f){const x=r(),_=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let y,w;(w=_.exec(d))!==null?y=w[1].split(/\s+/):y=[];const C=new CS(y);e:for(let b=0;b<f.elements.length;b++){const z=f.elements[b],E=a(z.properties);for(let T=0;T<z.count;T++){const D=s(z.properties,C);if(!D)break e;c(x,z.name,D,E)}}return l(x)}function l(d){let f=new tn;d.indices.length>0&&f.setIndex(d.indices),f.setAttribute("position",new ut(d.vertices,3)),d.normals.length>0&&f.setAttribute("normal",new ut(d.normals,3)),d.uvs.length>0&&f.setAttribute("uv",new ut(d.uvs,2)),d.colors.length>0&&f.setAttribute("color",new ut(d.colors,3)),(d.faceVertexUvs.length>0||d.faceVertexColors.length>0)&&(f=f.toNonIndexed(),d.faceVertexUvs.length>0&&f.setAttribute("uv",new ut(d.faceVertexUvs,2)),d.faceVertexColors.length>0&&f.setAttribute("color",new ut(d.faceVertexColors,3)));for(const x of Object.keys(g.customPropertyMapping))d[x].length>0&&f.setAttribute(x,new ut(d[x],g.customPropertyMapping[x].length));return f.computeBoundingSphere(),f}function c(d,f,x,_){if(f==="vertex"){d.vertices.push(x[_.attrX],x[_.attrY],x[_.attrZ]),_.attrNX!==null&&_.attrNY!==null&&_.attrNZ!==null&&d.normals.push(x[_.attrNX],x[_.attrNY],x[_.attrNZ]),_.attrS!==null&&_.attrT!==null&&d.uvs.push(x[_.attrS],x[_.attrT]),_.attrR!==null&&_.attrG!==null&&_.attrB!==null&&(Wt.setRGB(x[_.attrR]/255,x[_.attrG]/255,x[_.attrB]/255).convertSRGBToLinear(),d.colors.push(Wt.r,Wt.g,Wt.b));for(const y of Object.keys(g.customPropertyMapping))for(const w of g.customPropertyMapping[y])d[y].push(x[w])}else if(f==="face"){const y=x.vertex_indices||x.vertex_index,w=x.texcoord;y.length===3?(d.indices.push(y[0],y[1],y[2]),w&&w.length===6&&(d.faceVertexUvs.push(w[0],w[1]),d.faceVertexUvs.push(w[2],w[3]),d.faceVertexUvs.push(w[4],w[5]))):y.length===4&&(d.indices.push(y[0],y[1],y[3]),d.indices.push(y[1],y[2],y[3])),_.attrR!==null&&_.attrG!==null&&_.attrB!==null&&(Wt.setRGB(x[_.attrR]/255,x[_.attrG]/255,x[_.attrB]/255).convertSRGBToLinear(),d.faceVertexColors.push(Wt.r,Wt.g,Wt.b),d.faceVertexColors.push(Wt.r,Wt.g,Wt.b),d.faceVertexColors.push(Wt.r,Wt.g,Wt.b))}}function u(d,f){const x={};let _=0;for(let y=0;y<f.length;y++){const w=f[y],C=w.valueReader;if(w.type==="list"){const b=[],z=w.countReader.read(d+_);_+=w.countReader.size;for(let E=0;E<z;E++)b.push(C.read(d+_)),_+=C.size;x[w.name]=b}else x[w.name]=C.read(d+_),_+=C.size}return[x,_]}function h(d,f,x){function _(y,w,C){switch(w){case"int8":case"char":return{read:b=>y.getInt8(b),size:1};case"uint8":case"uchar":return{read:b=>y.getUint8(b),size:1};case"int16":case"short":return{read:b=>y.getInt16(b,C),size:2};case"uint16":case"ushort":return{read:b=>y.getUint16(b,C),size:2};case"int32":case"int":return{read:b=>y.getInt32(b,C),size:4};case"uint32":case"uint":return{read:b=>y.getUint32(b,C),size:4};case"float32":case"float":return{read:b=>y.getFloat32(b,C),size:4};case"float64":case"double":return{read:b=>y.getFloat64(b,C),size:8}}}for(let y=0,w=d.length;y<w;y++){const C=d[y];C.type==="list"?(C.countReader=_(f,C.countType,x),C.valueReader=_(f,C.itemType,x)):C.valueReader=_(f,C.type,x)}}function p(d,f){const x=r(),_=f.format==="binary_little_endian",y=new DataView(d,f.headerLength);let w,C=0;for(let b=0;b<f.elements.length;b++){const z=f.elements[b],E=z.properties,T=a(E);h(E,y,_);for(let D=0;D<z.count;D++){w=u(C,E),C+=w[1];const N=w[0];c(x,z.name,N,T)}}return l(x)}function m(d){let f=0,x=!0,_="";const y=[],w=new TextDecoder().decode(d.subarray(0,5)),C=/^ply\r\n/.test(w);do{const b=String.fromCharCode(d[f++]);b!==`
`&&b!=="\r"?_+=b:(_==="end_header"&&(x=!1),_!==""&&(y.push(_),_=""))}while(x&&f<d.length);return C===!0&&f++,{headerText:y.join("\r")+"\r",headerLength:f}}let v;const g=this;if(e instanceof ArrayBuffer){const d=new Uint8Array(e),{headerText:f,headerLength:x}=m(d),_=t(f,x);if(_.format==="ascii"){const y=new TextDecoder().decode(d);v=o(y,_)}else v=p(e,_)}else v=o(e,t(e));return v}}class CS{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}const RS=/^[og]\s*(.+)?/,LS=/^mtllib /,PS=/^usemtl /,DS=/^usemap /,Ju=/\s+/,Qu=new G,wa=new G,ef=new G,tf=new G,on=new G,Xr=new ze;function US(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;Qu.fromArray(s,e),wa.fromArray(s,t),ef.fromArray(s,i),on.subVectors(ef,wa),tf.subVectors(Qu,wa),on.cross(tf),on.normalize(),r.push(on.x,on.y,on.z),r.push(on.x,on.y,on.z),r.push(on.x,on.y,on.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,a,o,l,c){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),p=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(h,p,m),this.addColor(h,p,m),o!==void 0&&o!==""){const v=this.normals.length;h=this.parseNormalIndex(o,v),p=this.parseNormalIndex(l,v),m=this.parseNormalIndex(c,v),this.addNormal(h,p,m)}else this.addFaceNormal(h,p,m);if(s!==void 0&&s!==""){const v=this.uvs.length;h=this.parseUVIndex(s,v),p=this.parseUVIndex(r,v),m=this.parseUVIndex(a,v),this.addUV(h,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class IS extends Ro{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,a=new Wh(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new US;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const h=c.split(Ju);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Xr.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(Xr.r,Xr.g,Xr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const p=c.slice(1).trim().split(Ju),m=[];for(let g=0,d=p.length;g<d;g++){const f=p[g];if(f.length>0){const x=f.split("/");m.push(x)}}const v=m[0];for(let g=1,d=m.length-1;g<d;g++){const f=m[g],x=m[g+1];t.addFace(v[0],f[0],x[0],v[1],f[1],x[1],v[2],f[2],x[2])}}else if(u==="l"){const h=c.substring(1).trim().split(" ");let p=[];const m=[];if(c.indexOf("/")===-1)p=h;else for(let v=0,g=h.length;v<g;v++){const d=h[v].split("/");d[0]!==""&&p.push(d[0]),d[1]!==""&&m.push(d[1])}t.addLineGeometry(p,m)}else if(u==="p"){const p=c.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((s=RS.exec(c))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(PS.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(LS.test(c))t.materialLibraries.push(c.substring(7).trim());else if(DS.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const p=s[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Ii;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],u=c.geometry,h=c.materials,p=u.type==="Line",m=u.type==="Points";let v=!1;if(u.vertices.length===0)continue;const g=new tn;g.setAttribute("position",new ut(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new ut(u.normals,3)),u.colors.length>0&&(v=!0,g.setAttribute("color",new ut(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new ut(u.uvs,2));const d=[];for(let x=0,_=h.length;x<_;x++){const y=h[x],w=y.name+"_"+y.smooth+"_"+v;let C=t.materials[w];if(this.materials!==null){if(C=this.materials.create(y.name),p&&C&&!(C instanceof $s)){const b=new $s;Nn.prototype.copy.call(b,C),b.color.copy(C.color),C=b}else if(m&&C&&!(C instanceof Ni)){const b=new Ni({size:10,sizeAttenuation:!1});Nn.prototype.copy.call(b,C),b.color.copy(C.color),b.map=C.map,C=b}}C===void 0&&(p?C=new $s:m?C=new Ni({size:1,sizeAttenuation:!1}):C=new _S,C.name=y.name,C.flatShading=!y.smooth,C.vertexColors=v,t.materials[w]=C),d.push(C)}let f;if(d.length>1){for(let x=0,_=h.length;x<_;x++){const y=h[x];g.addGroup(y.groupStart,y.groupCount,x)}p?f=new Ja(g,d):m?f=new Ks(g,d):f=new qt(g,d)}else p?f=new Ja(g,d[0]):m?f=new Ks(g,d[0]):f=new qt(g,d[0]);f.name=c.name,r.add(f)}else if(t.vertices.length>0){const o=new Ni({size:1,sizeAttenuation:!1}),l=new tn;l.setAttribute("position",new ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new ut(t.colors,3)),o.vertexColors=!0);const c=new Ks(l,o);r.add(c)}return r}}const NS={class:"viewer-label"},FS={class:"viewer-title"},OS=["title"],BS={key:1,class:"viewer-stats"},zS={class:"stats-val"},HS={class:"stats-val"},VS={key:0,class:"viewer-empty"},GS={class:"empty-title"},kS={key:0,class:"viewer-overlay"},WS={key:0,class:"viewer-overlay viewer-overlay--error"},XS={class:"overlay-text"},jS={key:1,class:"viewer-toolbar"},qS={class:"tb-group"},YS={key:0,class:"tb-group"},$S=["value"],KS={key:1,class:"tb-group"},ZS=["value"],JS={__name:"ThreeViewer",props:{title:{type:String,default:"3D 视图"},accent:{type:String,default:"#4F46E5"},url:{type:String,default:null}},emits:["cameraChange","loaded","error"],setup(n,{expose:e,emit:t}){rm(L=>({dd735346:N.value,v0ce2450d:D.value,v628716d1:n.accent}));const i=n,s=t,r=nt(null),a=nt(null);let o=null,l=null,c=null,u=null,h=null,p=null,m=null,v=null,g=null,d=null;const f=nt(!1),x=nt(""),_=nt(""),y=nt("pointcloud"),w=nt("auto"),C=nt(8),b=nt("#C8D0F8"),z=nt({vertices:0,faces:0});let E=null,T=!1;const D=vn(()=>`${i.accent}22`),N=vn(()=>`${i.accent}30`);e({getCameraState:k,setCameraState:ee}),As(()=>{Y(),i.url&&ue(i.url)}),lr(()=>{S()}),Bi(()=>i.url,L=>{L?ue(L):(re(),_.value="",z.value={vertices:0,faces:0})});function Y(){const L=a.value,P=r.value;o=new kh({canvas:L,antialias:!0,alpha:!1,powerPreference:"high-performance"}),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(16514302,1),o.shadowMap.enabled=!1,o.outputColorSpace=Tt,l=new mS,l.background=new ze(16514302);const V=P.clientWidth||800,B=P.clientHeight||600;c=new ln(45,V/Math.max(B,1),.001,2e3),c.position.set(0,1.5,4),o.setSize(V,B,!1);const X=new ES(16777215,.9),K=new Ta(16777215,1);K.position.set(5,8,5);const J=new Ta(8952319,.4);J.position.set(-3,-2,-4);const oe=new Ta(16772829,.25);oe.position.set(0,-5,2),l.add(X,K,J,oe);const te=new bS(4,16,14541295,15659256);te.material.opacity=.45,te.material.transparent=!0,l.add(te),u=new AS(c,L),u.enableDamping=!0,u.dampingFactor=.06,u.enablePan=!0,u.minDistance=.01,u.maxDistance=500,u.screenSpacePanning=!0,u.addEventListener("change",U);function ye(){h=requestAnimationFrame(ye),u.update(),o.render(l,c)}ye(),p=new ResizeObserver(()=>{if(!o||!c||!r.value)return;const A=r.value.clientWidth,M=r.value.querySelector(".viewer-label"),F=r.value.querySelector(".viewer-toolbar"),ne=r.value.querySelector(".viewer-accent-bar"),ie=(M==null?void 0:M.clientHeight)||36,ae=(F==null?void 0:F.clientHeight)||36,Se=(ne==null?void 0:ne.clientHeight)||3,he=Math.max(r.value.clientHeight-ie-ae-Se,100);c.aspect=A/he,c.updateProjectionMatrix(),o.setSize(A,he,!1)}),p.observe(r.value)}function U(){if(T)return;const L=k();s("cameraChange",L)}function k(){return!c||!u?null:{position:c.position.clone(),target:u.target.clone(),zoom:c.zoom}}function ee(L){!c||!u||!L||(T=!0,c.position.copy(L.position),u.target.copy(L.target),c.zoom=L.zoom,c.updateProjectionMatrix(),u.update(),T=!1)}function q(){!c||!u||!m||xe(m)}function re(){var L,P,V,B,X,K;m&&(l.remove(m),m=null),g&&((L=g.geometry)==null||L.dispose(),(P=g.material)==null||P.dispose(),g=null),v&&((V=v.geometry)==null||V.dispose(),(B=v.material)==null||B.dispose(),v=null),d&&((X=d.geometry)==null||X.dispose(),(K=d.material)==null||K.dispose(),d=null),E=null}async function ue(L){if(!L)return;re(),f.value=!0,x.value="",_.value=decodeURIComponent(L.split("/").pop()),z.value={vertices:0,faces:0};const P=L.split("?")[0].split(".").pop().toLowerCase();try{if(P==="ply")await ce(L);else if(P==="obj")await H(L);else throw new Error(`不支持的格式: .${P}`);s("loaded")}catch(V){console.error("[ThreeViewer] Load error:",V),x.value=`加载失败: ${V.message}`,s("error",V)}finally{f.value=!1}}function ce(L){return new Promise((P,V)=>{new wS().load(L,B=>{var X;try{B.computeVertexNormals(),E=B;const K=B.index!==null;z.value.vertices=((X=B.attributes.position)==null?void 0:X.count)||0,z.value.faces=K&&B.index?B.index.count/3:0,K?(y.value="mesh",j(B),w.value="solid"):(y.value="pointcloud",ve(B),w.value="points"),P()}catch(K){V(K)}},void 0,B=>V(B instanceof Error?B:new Error(String(B))))})}function H(L){return new Promise((P,V)=>{new IS().load(L,B=>{try{y.value="mesh",w.value="solid";let X=0,K=0;B.traverse(J=>{var oe,te;J.isMesh&&(J.material=new Ea({color:new ze(b.value),roughness:.7,metalness:.1}),J.geometry.computeVertexNormals(),X+=((oe=J.geometry.attributes.position)==null?void 0:oe.count)||0,K+=J.geometry.index?J.geometry.index.count/3:((te=J.geometry.attributes.position)==null?void 0:te.count)/3||0)}),z.value={vertices:Math.round(X),faces:Math.round(K)},m=B,l.add(B),xe(B),P()}catch(X){V(X)}},void 0,B=>V(B instanceof Error?B:new Error(String(B))))})}function j(L){const P=new Ea({color:new ze(b.value),roughness:.72,metalness:.08,side:mn});g=new qt(L,P);const V=new po({color:5195493,wireframe:!0,opacity:.22,transparent:!0});d=new qt(L,V);const B=new Ni({size:Oe(),vertexColors:L.attributes.color!==void 0,color:L.attributes.color?void 0:new ze(i.accent),sizeAttenuation:!0});v=new Ks(L,B);const X=new Ii;X.add(g),m=X,l.add(X),xe(X),Ee(w.value)}function ve(L){const P=L.attributes.color!==void 0,V=new Ni({size:Oe(),vertexColors:P,color:P?void 0:new ze(i.accent),sizeAttenuation:!0,transparent:!0,opacity:.95});v=new Ks(L,V);const B=new Ea({color:new ze(b.value),roughness:.7,metalness:.1,side:mn});g=new qt(L,B);const X=new po({color:5195493,wireframe:!0,opacity:.28,transparent:!0});d=new qt(L,X);const K=new Ii;K.add(v),m=K,l.add(K),xe(K),Ee("points")}function xe(L){const P=new ws().setFromObject(L),V=P.getCenter(new G),B=P.getSize(new G),X=Math.max(B.x,B.y,B.z)||1,K=X*2.2;c.position.set(V.x+X*.4,V.y+X*.6,V.z+K),u.target.copy(V),c.near=X*.001,c.far=X*100,c.updateProjectionMatrix(),u.update()}function Ee(L){if(m)switch(w.value=L,m.remove(g),m.remove(d),m.remove(v),L){case"solid":g&&m.add(g);break;case"wireframe":d&&m.add(d);break;case"points":v&&m.add(v);break}}function Re(L){Ee(L)}function Oe(){const L=C.value,P=z.value.vertices||1e3;return(P>1e5?.003:P>1e4?.008:.015)*(L/8)}function Ue(L){C.value=Number(L.target.value),v!=null&&v.material&&(v.material.size=Oe(),v.material.needsUpdate=!0)}function Ie(L){b.value=L.target.value,g!=null&&g.material&&(g.material.color.set(b.value),g.material.needsUpdate=!0)}function Qe(){if(!o)return;o.render(l,c);const L=document.createElement("a");L.href=o.domElement.toDataURL("image/png"),L.download=`geoudf_${i.title}_${Date.now()}.png`,L.click()}function Ge(L){return L>=1e6?(L/1e6).toFixed(1)+"M":L>=1e3?(L/1e3).toFixed(1)+"K":String(L)}function S(){cancelAnimationFrame(h),p==null||p.disconnect(),u==null||u.removeEventListener("change",U),u==null||u.dispose(),re(),o==null||o.dispose(),o=null,l=null,c=null,u=null}return(L,P)=>(Be(),Ve("div",{ref_key:"wrapperRef",ref:r,class:"viewer-wrapper"},[P[18]||(P[18]=le("div",{class:"viewer-accent-bar"},null,-1)),le("div",NS,[P[8]||(P[8]=le("div",{class:"viewer-dot"},null,-1)),le("span",FS,et(n.title),1),_.value?(Be(),Ve("div",{key:0,class:"viewer-filename",title:_.value},et(_.value),9,OS)):Rt("",!0),P[9]||(P[9]=le("div",{class:"viewer-spacer"},null,-1)),z.value.vertices?(Be(),Ve("div",BS,[le("span",zS,et(Ge(z.value.vertices)),1),P[6]||(P[6]=le("span",{class:"stats-label"},"verts",-1)),z.value.faces?(Be(),Ve(ht,{key:0},[P[4]||(P[4]=le("span",{class:"stats-sep"},"·",-1)),le("span",HS,et(Ge(z.value.faces)),1),P[5]||(P[5]=le("span",{class:"stats-label"},"faces",-1))],64)):Rt("",!0)])):Rt("",!0),_.value?(Be(),Ve("button",{key:2,class:"label-btn",onClick:Qe,title:"截图"},[...P[7]||(P[7]=[le("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none"},[le("rect",{x:"1",y:"2.5",width:"11",height:"8.5",rx:"1.5",stroke:"currentColor","stroke-width":"1.3"}),le("circle",{cx:"6.5",cy:"6.75",r:"2",stroke:"currentColor","stroke-width":"1.3"}),le("path",{d:"M4.5 2.5 L5 1 h3 l.5 1.5",stroke:"currentColor","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])])):Rt("",!0)]),le("canvas",{ref_key:"canvasRef",ref:a,class:"viewer-canvas"},null,512),n.url?Rt("",!0):(Be(),Ve("div",VS,[P[10]||(P[10]=so('<div class="empty-graphic" data-v-ac332e51><svg width="52" height="52" viewBox="0 0 52 52" fill="none" data-v-ac332e51><circle cx="26" cy="14" r="2.5" fill="currentColor" opacity="0.4" data-v-ac332e51></circle><circle cx="14" cy="30" r="2.5" fill="currentColor" opacity="0.3" data-v-ac332e51></circle><circle cx="38" cy="30" r="2.5" fill="currentColor" opacity="0.3" data-v-ac332e51></circle><circle cx="20" cy="42" r="2.5" fill="currentColor" opacity="0.2" data-v-ac332e51></circle><circle cx="32" cy="42" r="2.5" fill="currentColor" opacity="0.2" data-v-ac332e51></circle><circle cx="26" cy="26" r="2" fill="currentColor" opacity="0.5" data-v-ac332e51></circle><line x1="26" y1="14" x2="14" y2="30" stroke="currentColor" stroke-width="0.8" opacity="0.2" data-v-ac332e51></line><line x1="26" y1="14" x2="38" y2="30" stroke="currentColor" stroke-width="0.8" opacity="0.2" data-v-ac332e51></line><line x1="14" y1="30" x2="38" y2="30" stroke="currentColor" stroke-width="0.8" opacity="0.2" data-v-ac332e51></line><line x1="14" y1="30" x2="20" y2="42" stroke="currentColor" stroke-width="0.8" opacity="0.15" data-v-ac332e51></line><line x1="38" y1="30" x2="32" y2="42" stroke="currentColor" stroke-width="0.8" opacity="0.15" data-v-ac332e51></line></svg></div>',1)),le("div",GS,et(n.title),1),P[11]||(P[11]=le("div",{class:"empty-hint"},"从左侧选择文件载入",-1))])),mt(ec,{name:"fade-overlay"},{default:Ua(()=>[f.value?(Be(),Ve("div",kS,[...P[12]||(P[12]=[le("div",{class:"loading-ring"},null,-1),le("div",{class:"overlay-text"},"载入中",-1)])])):Rt("",!0)]),_:1}),mt(ec,{name:"fade-overlay"},{default:Ua(()=>[x.value?(Be(),Ve("div",WS,[P[13]||(P[13]=le("div",{class:"error-glyph"},"!",-1)),le("div",XS,et(x.value),1),le("button",{class:"overlay-dismiss",onClick:P[0]||(P[0]=V=>x.value="")},"关闭")])):Rt("",!0)]),_:1}),_.value?(Be(),Ve("div",jS,[le("div",qS,[y.value==="mesh"?(Be(),Ve("button",{key:0,class:pt(["tb-btn",{active:w.value==="solid"}]),onClick:P[1]||(P[1]=V=>Re("solid"))},"实体",2)):Rt("",!0),le("button",{class:pt(["tb-btn",{active:w.value==="wireframe"}]),onClick:P[2]||(P[2]=V=>Re("wireframe"))},"线框",2),le("button",{class:pt(["tb-btn",{active:w.value==="points"}]),onClick:P[3]||(P[3]=V=>Re("points"))},"点云",2)]),P[17]||(P[17]=le("div",{class:"tb-sep"},null,-1)),w.value==="points"||y.value==="pointcloud"?(Be(),Ve("div",YS,[P[14]||(P[14]=le("span",{class:"tb-label"},"大小",-1)),le("input",{type:"range",min:"1",max:"20",value:C.value,onInput:Ue,class:"tb-slider"},null,40,$S)])):Rt("",!0),y.value==="mesh"&&w.value!=="points"?(Be(),Ve("div",KS,[P[15]||(P[15]=le("span",{class:"tb-label"},"色",-1)),le("input",{type:"color",value:b.value,onInput:Ie,class:"tb-color"},null,40,ZS)])):Rt("",!0),le("div",{class:"tb-group",style:{"margin-left":"auto"}},[le("button",{class:"tb-btn",onClick:q,title:"重置视角"},[...P[16]||(P[16]=[le("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},[le("path",{d:"M6 1v2M6 9v2M1 6h2M9 6h2",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),le("circle",{cx:"6",cy:"6",r:"2.5",stroke:"currentColor","stroke-width":"1.3"})],-1)])])])])):Rt("",!0)],512))}},nf=ur(JS,[["__scopeId","data-v-ac332e51"]]),QS={class:"metrics-panel"},ey={class:"mh-left"},ty={key:0,class:"mh-badge"},ny={key:1,class:"mh-badge mh-badge-empty"},iy={class:"mh-right"},sy={class:"pill-label"},ry={class:"pill-value"},oy={class:"metrics-inner"},ay={key:0,class:"metrics-empty"},ly={class:"kpi-row"},cy={class:"kpi-label"},uy={class:"metrics-content"},fy={class:"table-wrap"},hy={class:"metrics-table"},dy=["title"],py={key:0,class:"chart-wrap"},my={__name:"MetricsPanel",props:{metrics:{type:Array,default:()=>[]},isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(n){const e=n,t=nt(null),i=vn(()=>e.metrics&&e.metrics.length>0),s=["name","filename","file","path","model","scan","category"],r=vn(()=>i.value?Object.keys(e.metrics[0]).filter(d=>{if(s.some(x=>d.toLowerCase().includes(x)))return!1;const f=e.metrics[0][d];return typeof f=="number"||!isNaN(parseFloat(f))&&isFinite(f)}):[]);function a(d){for(const f of s){const x=Object.keys(d).find(_=>_.toLowerCase().includes(f));if(x&&d[x])return String(d[x]).split("/").pop().split("\\").pop()}return"—"}const o=[{keys:["cd","chamfer"],label:"CD",color:"#EF4444",note:"越小越好",higherBetter:!1},{keys:["nc","normal"],label:"NC",color:"#10B981",note:"越大越好",higherBetter:!0},{keys:["f_score","fscore","f1"],label:"F-Score@0.01",color:"#6366F1",note:"越大越好",higherBetter:!0},{keys:["f2","fscore_02","f_02"],label:"F-Score@0.02",color:"#06B6D4",note:"越大越好",higherBetter:!0}];function l(d){if(!i.value)return null;const f=Object.keys(e.metrics[0]);for(const x of d){const _=f.find(y=>y.toLowerCase().includes(x.toLowerCase()));if(_)return _}return null}function c(d){if(!d||!i.value)return null;const f=e.metrics.map(x=>parseFloat(x[d])).filter(x=>!isNaN(x));return f.length?f.reduce((x,_)=>x+_,0)/f.length:null}const u=vn(()=>o.map(d=>{const f=l(d.keys),x=c(f);return{key:d.label,label:d.label,color:d.color,note:d.note,value:x!==null?p(x):"—",trend:x!==null?d.higherBetter?1:-1:0}})),h=vn(()=>u.value.filter(d=>d.value!=="—").slice(0,3));function p(d){const f=parseFloat(d);return isNaN(f)?String(d):Math.abs(f)<.001?f.toExponential(3):Math.abs(f)<1?f.toFixed(4):Math.abs(f)<100?f.toFixed(3):f.toFixed(1)}function m(d){return d.replace(/_/g," ").replace(/\b\w/g,f=>f.toUpperCase()).replace("Fscore","F-Score").replace("Cd ","CD ").replace("Nc ","NC ")}function v(d,f){const x=parseFloat(f);if(isNaN(x))return"#94A3B8";const _=d.toLowerCase();return _.includes("cd")||_.includes("chamfer")?"#64748B":"#374151"}function g(){if(!t.value||!i.value)return;const d=t.value,f=d.getContext("2d"),x=d.clientWidth||200,_=d.clientHeight||120;d.width=x*devicePixelRatio,d.height=_*devicePixelRatio,f.scale(devicePixelRatio,devicePixelRatio),f.clearRect(0,0,x,_);const y=r.value.slice(0,2);if(!y.length)return;const w=["rgba(99,102,241,0.7)","rgba(6,182,212,0.7)"],C=e.metrics.length,b=12,z=(x-b*2)/C,E=Math.min(z/(y.length+1),20),T=y.map(N=>{const Y=e.metrics.map(U=>Math.abs(parseFloat(U[N]))).filter(U=>!isNaN(U));return Math.max(...Y,1e-10)}),D=_-28;f.strokeStyle="rgba(99,102,241,0.08)",f.lineWidth=1;for(let N=0;N<=4;N++){const Y=D/4*N;f.beginPath(),f.moveTo(b,Y+4),f.lineTo(x-b,Y+4),f.stroke()}e.metrics.forEach((N,Y)=>{const U=b+Y*z+z/2-y.length*(E+2)/2;y.forEach((q,re)=>{const ue=Math.abs(parseFloat(N[q]));if(isNaN(ue))return;const ce=Math.max(ue/T[re]*(D-8),2),H=U+re*(E+2),j=D-ce+4,ve=f.createLinearGradient(H,j,H,D+4);ve.addColorStop(0,w[re].replace("0.7","0.9")),ve.addColorStop(1,w[re].replace("0.7","0.3")),f.fillStyle=ve,f.beginPath();const xe=Math.min(3,E/2);f.roundRect(H,j,E,ce,[xe,xe,0,0]),f.fill()});const k=a(N),ee=k.length>8?k.slice(0,7)+"…":k;f.fillStyle="#94A3B8",f.font=`${Math.max(8,Math.min(10,z*.4))}px Inter, sans-serif`,f.textAlign="center",f.fillText(ee,b+Y*z+z/2,_-6)}),y.forEach((N,Y)=>{f.fillStyle=w[Y],f.fillRect(x-90+Y*46,2,8,8),f.fillStyle="#94A3B8",f.font="9px Inter, sans-serif",f.textAlign="left",f.fillText(m(N).slice(0,6),x-80+Y*46,10)})}return Bi([()=>e.metrics,()=>e.isOpen],async()=>{e.isOpen&&i.value&&(await dl(),g())},{deep:!0}),As(()=>{e.isOpen&&i.value&&g()}),(d,f)=>(Be(),Ve("div",QS,[le("div",{class:"metrics-header",onClick:f[0]||(f[0]=x=>d.$emit("toggle"))},[le("div",ey,[f[1]||(f[1]=le("div",{class:"mh-icon"},"📈",-1)),f[2]||(f[2]=le("span",{class:"mh-title"},"评估指标",-1)),i.value?(Be(),Ve("div",ty,et(n.metrics.length)+" 条记录",1)):(Be(),Ve("div",ny,"暂无数据"))]),le("div",iy,[n.isOpen&&i.value?(Be(!0),Ve(ht,{key:0},fi(h.value,x=>(Be(),Ve("div",{key:x.key,class:"mh-kpi-pill",style:Yn({"--kc":x.color})},[le("span",sy,et(x.label),1),le("span",ry,et(x.value),1)],4))),128)):Rt("",!0),le("div",{class:pt(["mh-chevron",{open:n.isOpen}])},"›",2)])]),le("div",{class:pt(["metrics-body",{open:n.isOpen}])},[le("div",oy,[i.value?(Be(),Ve(ht,{key:1},[le("div",ly,[(Be(!0),Ve(ht,null,fi(u.value,x=>(Be(),Ve("div",{key:x.key,class:"kpi-card",style:Yn({borderTopColor:x.color})},[le("div",cy,et(x.label),1),le("div",{class:"kpi-value",style:Yn({color:x.color})},et(x.value),5),le("div",{class:"kpi-trend",style:Yn({color:x.trend>0?"#10B981":x.trend<0?"#EF4444":"#94A3B8"})},et(x.note),5)],4))),128))]),le("div",uy,[le("div",fy,[le("table",hy,[le("thead",null,[le("tr",null,[f[4]||(f[4]=le("th",null,"文件名",-1)),(Be(!0),Ve(ht,null,fi(r.value,x=>(Be(),Ve("th",{key:x,class:"num-col"},et(m(x)),1))),128))])]),le("tbody",null,[(Be(!0),Ve(ht,null,fi(n.metrics,(x,_)=>(Be(),Ve("tr",{key:_,class:pt({"tr-alt":_%2===1})},[le("td",{class:"file-col",title:a(x)},et(a(x)),9,dy),(Be(!0),Ve(ht,null,fi(r.value,y=>(Be(),Ve("td",{key:y,class:"num-col"},[le("span",{class:"metric-val",style:Yn({color:v(y,x[y])})},et(p(x[y])),5)]))),128))],2))),128))])])]),n.metrics.length>0&&n.metrics.length<=12?(Be(),Ve("div",py,[le("canvas",{ref_key:"chartCanvas",ref:t,class:"chart-canvas"},null,512)])):Rt("",!0)])],64)):(Be(),Ve("div",ay,[...f[3]||(f[3]=[le("div",{class:"empty-icon-m"},"📊",-1),le("div",{class:"empty-msg"},"运行重建后系统将自动加载评估指标",-1),le("div",{class:"empty-sub"},"指标来源: output/Full_Metric_Results.csv",-1)])]))])],2)]))}},gy=ur(my,[["__scopeId","data-v-32dd65fa"]]),_y={class:"app-root"},vy={class:"main-layout"},xy={class:"content-area"},My={class:"viewers-row"},Sy=["title"],yy={__name:"App",setup(n){const e=nt(null),t=nt(null),i=nt(!1),s=nt(!1),r=nt(!1),a=nt({input:[],test_data:[]}),o=nt({id:null,status:null,progress:0,log:[],outputFile:null}),l=nt([]),c=nt(null),u=nt(null);let h=!1,p=!1,m=null;As(()=>{g(),d(),v();const C=setInterval(v,1e4);lr(()=>{clearInterval(C),m==null||m.close()})});async function v(){try{const C=await fetch("/api/files",{signal:AbortSignal.timeout(3e3)});s.value=C.ok}catch{s.value=!1}}async function g(){try{const C=await fetch("/api/files");if(C.ok){const b=await C.json();a.value={input:b.input||[],test_data:b.test_data||[]},s.value=!0}}catch(C){console.error("[App] fetchFiles error:",C),s.value=!1}}async function d(){var C;try{const b=await fetch("/api/metrics");if(b.ok){const z=await b.json();z.available&&((C=z.data)!=null&&C.length)&&(l.value=z.data,r.value=!0)}}catch(b){console.error("[App] fetchMetrics error:",b)}}function f(C){e.value=`/files/${C.path}`}function x(){const C=[...a.value.input||[],...a.value.test_data||[]],b=C.find(E=>!E.name.toLowerCase().includes("mesh")&&(E.name.toLowerCase().includes("shapenet")||E.name.toLowerCase().includes("scene")||E.name.endsWith(".ply")))||C.find(E=>!E.name.toLowerCase().includes("mesh")),z=C.find(E=>E.name.toLowerCase().includes("mesh")||E.name.toLowerCase().includes("_rec_"));b&&(e.value=`/files/${b.path}`),z&&(t.value=`/files/${z.path}`),!b&&!z&&C.length>0&&(e.value=`/files/${C[0].path}`)}async function _({inputFile:C,resolution:b,dense:z}){o.value={id:null,status:"queued",progress:0,log:["[任务] 正在提交重建请求..."],outputFile:null};try{const E=await fetch("/api/reconstruct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input_file:C,resolution:b,dense:z})});if(!E.ok){const Y=await E.json().catch(()=>({detail:"请求失败"}));o.value.status="error",o.value.log.push(`[错误] ${Y.detail||"服务器错误"}`);return}const{task_id:T}=await E.json();o.value.id=T,o.value.log.push(`[任务] task_id: ${T}`),m==null||m.close();const D=location.protocol==="https:"?"wss:":"ws:",N=new WebSocket(`${D}//${location.host}/ws/${T}`);m=N,N.onopen=()=>{o.value.log.push("[WS] 已连接重建进度流")},N.onmessage=Y=>{var U;try{const k=JSON.parse(Y.data);k.status&&(o.value.status=k.status),typeof k.progress=="number"&&(o.value.progress=k.progress),(U=k.new_lines)!=null&&U.length&&o.value.log.push(...k.new_lines),k.error&&o.value.log.push(`[错误] ${k.error}`),k.status==="done"&&k.output_file&&(o.value.outputFile=k.output_file,t.value=`/files/${k.output_file}`,g(),d())}catch(k){console.error("[App] WS parse error:",k)}},N.onerror=()=>{o.value.log.push("[WS] 连接错误")},N.onclose=()=>{o.value.log.push("[WS] 连接已关闭")}}catch(E){o.value.status="error",o.value.log.push(`[错误] ${E.message}`)}}function y(C){var b;!i.value||p||(h=!0,(b=u.value)==null||b.setCameraState(C),h=!1)}function w(C){var b;!i.value||h||(p=!0,(b=c.value)==null||b.setCameraState(C),p=!1)}return(C,b)=>(Be(),Ve("div",_y,[mt(Dm,{isConnected:s.value,syncCamera:i.value,onToggleSync:b[0]||(b[0]=z=>i.value=!i.value)},null,8,["isConnected","syncCamera"]),le("div",vy,[mt(lg,{files:a.value,taskStatus:o.value,onFileSelect:f,onReconstruct:_,onLoadSample:x,onRefreshFiles:g},null,8,["files","taskStatus"]),le("div",xy,[le("div",My,[mt(nf,{ref_key:"leftViewer",ref:c,title:"输入点云",accent:"#4F46E5",url:e.value,onCameraChange:y},null,8,["url"]),le("div",{class:pt(["sync-bridge",{active:i.value}])},[le("div",{class:"sync-icon",title:i.value?"视角同步中":"独立视角"},[...b[2]||(b[2]=[so('<svg width="12" height="12" viewBox="0 0 12 12" fill="none" data-v-63b19051><path d="M1 6 C1 3.24 3.24 1 6 1 s5 2.24 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-63b19051></path><path d="M11 6 C11 8.76 8.76 11 6 11 s-5-2.24-5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-63b19051></path><polyline points="9,8 11,6 13,8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(-2,0)" data-v-63b19051></polyline><polyline points="-1,4 1,6 3,4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(0,0)" data-v-63b19051></polyline></svg>',1)])],8,Sy)],2),mt(nf,{ref_key:"rightViewer",ref:u,title:"重建网格",accent:"#0891B2",url:t.value,onCameraChange:w},null,8,["url"])]),mt(gy,{metrics:l.value,isOpen:r.value,onToggle:b[1]||(b[1]=z=>r.value=!r.value)},null,8,["metrics","isOpen"])])])]))}},Ey=ur(yy,[["__scopeId","data-v-63b19051"]]);bm(Ey).mount("#app");
