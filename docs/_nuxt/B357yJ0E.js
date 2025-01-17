import{h as H,e as ct,j as M,p as lt,f as X,g as ut,i as F,k as K,l as dt,m as w,n as A,q as pt,r as P,s as tt,o as h,c as m,v as U,x as p,y as ht,z as ft,A as mt,a,b as _,t as b,B as et,C as st,w as E,D as gt,E as N,F as z,G as j,H as q,I as V}from"./DuEqy71z.js";import L from"./CHJeYovq.js";import{u as yt,a as _t,b as bt,n as xt,t as vt,p as wt,s as D,e as G}from"./qfHu2Qml.js";import{_ as nt}from"./Daqitdyu.js";import{_ as W}from"./DlAUqK2U.js";import"./CjJ7nWiZ.js";import"./EbkZybC-.js";async function kt(n,s){return await St(s).catch(e=>(console.error("Failed to get image meta for "+s,e+""),{width:0,height:0,ratio:0}))}async function St(n){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((s,t)=>{const e=new Image;e.onload=()=>{const r={width:e.width,height:e.height,ratio:e.width/e.height};s(r)},e.onerror=r=>t(r),e.src=n})}function Z(n){return s=>s?n[s]||s:n.missingValue}function Ct({formatter:n,keyMap:s,joinWith:t="/",valueMap:e}={}){n||(n=(o,i)=>`${o}=${i}`),s&&typeof s!="function"&&(s=Z(s));const r=e||{};return Object.keys(r).forEach(o=>{typeof r[o]!="function"&&(r[o]=Z(r[o]))}),(o={})=>Object.entries(o).filter(([c,l])=>typeof l<"u").map(([c,l])=>{const u=r[c];return typeof u=="function"&&(l=u(o[c])),c=typeof s=="function"?s(c):c,n(c,l)}).join(t)}function S(n=""){if(typeof n=="number")return n;if(typeof n=="string"&&n.replace("px","").match(/^\d+$/g))return Number.parseInt(n,10)}function $t(n=""){if(n===void 0||!n.length)return[];const s=new Set;for(const t of n.split(" ")){const e=Number.parseInt(t.replace("x",""));e&&s.add(e)}return Array.from(s)}function Pt(n){if(n.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function It(n){const s={};if(typeof n=="string")for(const t of n.split(/[\s,]+/).filter(e=>e)){const e=t.split(":");e.length!==2?s["1px"]=e[0].trim():s[e[0].trim()]=e[1].trim()}else Object.assign(s,n);return s}function jt(n){const s={options:n},t=(r,o={})=>rt(s,r,o),e=(r,o={},i={})=>t(r,{...i,modifiers:X(o,i.modifiers||{})}).url;for(const r in n.presets)e[r]=(o,i,c)=>e(o,i,{...n.presets[r],...c});return e.options=n,e.getImage=t,e.getMeta=(r,o)=>qt(s,r,o),e.getSizes=(r,o)=>zt(s,r,o),s.$img=e,e}async function qt(n,s,t){const e=rt(n,s,{...t});return typeof e.getMeta=="function"?await e.getMeta():await kt(n,e.url)}function rt(n,s,t){var u,f;if(s&&typeof s!="string")throw new TypeError(`input must be a string (received ${typeof s}: ${JSON.stringify(s)})`);if(!s||s.startsWith("data:"))return{url:s};const{provider:e,defaults:r}=At(n,t.provider||n.options.provider),o=Tt(n,t.preset);if(s=H(s)?s:ct(s),!e.supportsAlias){for(const g in n.options.alias)if(s.startsWith(g)){const y=n.options.alias[g];y&&(s=M(y,s.slice(g.length)))}}if(e.validateDomains&&H(s)){const g=lt(s).host;if(!n.options.domains.find(y=>y===g))return{url:s}}const i=X(t,o,r);i.modifiers={...i.modifiers};const c=i.modifiers.format;(u=i.modifiers)!=null&&u.width&&(i.modifiers.width=S(i.modifiers.width)),(f=i.modifiers)!=null&&f.height&&(i.modifiers.height=S(i.modifiers.height));const l=e.getImage(s,i,n);return l.format=l.format||c||"",l}function At(n,s){const t=n.options.providers[s];if(!t)throw new Error("Unknown provider: "+s);return t}function Tt(n,s){if(!s)return{};if(!n.options.presets[s])throw new Error("Unknown preset: "+s);return n.options.presets[s]}function zt(n,s,t){var C,I,O,d,x;const e=S((C=t.modifiers)==null?void 0:C.width),r=S((I=t.modifiers)==null?void 0:I.height),o=It(t.sizes),i=(O=t.densities)!=null&&O.trim()?$t(t.densities.trim()):n.options.densities;Pt(i);const c=e&&r?r/e:0,l=[],u=[];if(Object.keys(o).length>=1){for(const v in o){const k=J(v,String(o[v]),r,c,n);if(k!==void 0){l.push({size:k.size,screenMaxWidth:k.screenMaxWidth,media:`(max-width: ${k.screenMaxWidth}px)`});for(const T of i)u.push({width:k._cWidth*T,src:Y(n,s,t,k,T)})}}Et(l)}else for(const v of i){const k=Object.keys(o)[0];let T=k?J(k,String(o[k]),r,c,n):void 0;T===void 0&&(T={size:"",screenMaxWidth:0,_cWidth:(d=t.modifiers)==null?void 0:d.width,_cHeight:(x=t.modifiers)==null?void 0:x.height}),u.push({width:v,src:Y(n,s,t,T,v)})}Nt(u);const f=u[u.length-1],g=l.length?l.map(v=>`${v.media?v.media+" ":""}${v.size}`).join(", "):void 0,y=g?"w":"x",$=u.map(v=>`${v.src} ${v.width}${y}`).join(", ");return{sizes:g,srcset:$,src:f==null?void 0:f.src}}function J(n,s,t,e,r){const o=r.options.screens&&r.options.screens[n]||Number.parseInt(n),i=s.endsWith("vw");if(!i&&/^\d+$/.test(s)&&(s=s+"px"),!i&&!s.endsWith("px"))return;let c=Number.parseInt(s);if(!o||!c)return;i&&(c=Math.round(c/100*o));const l=e?Math.round(c*e):t;return{size:s,screenMaxWidth:o,_cWidth:c,_cHeight:l}}function Y(n,s,t,e,r){return n.$img(s,{...t.modifiers,width:e._cWidth?e._cWidth*r:void 0,height:e._cHeight?e._cHeight*r:void 0},t)}function Et(n){var t;n.sort((e,r)=>e.screenMaxWidth-r.screenMaxWidth);let s=null;for(let e=n.length-1;e>=0;e--){const r=n[e];r.media===s&&n.splice(e,1),s=r.media}for(let e=0;e<n.length;e++)n[e].media=((t=n[e+1])==null?void 0:t.media)||""}function Nt(n){n.sort((t,e)=>t.width-e.width);let s=null;for(let t=n.length-1;t>=0;t--){const e=n[t];e.width===s&&n.splice(t,1),s=e.width}}const Bt=Ct({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(n,s)=>F(n)+"_"+F(s)}),Ot=(n,{modifiers:s={},baseURL:t}={},e)=>{s.width&&s.height&&(s.resize=`${s.width}x${s.height}`,delete s.width,delete s.height);const r=Bt(s)||"_";return t||(t=M(e.options.nuxt.baseURL,"/_ipx")),{url:M(t,r,ut(n))}},Lt=!0,Dt=!0,Mt=Object.freeze(Object.defineProperty({__proto__:null,getImage:Ot,supportsAlias:Dt,validateDomains:Lt},Symbol.toStringTag,{value:"Module"})),it={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};it.providers={ipxStatic:{provider:Mt,defaults:{}}};const ot=()=>{const n=dt(),s=K();return s.$img||s._img||(s._img=jt({...it,nuxt:{baseURL:n.app.baseURL},runtimeConfig:n}))};function Rt(n){var s;(s=performance==null?void 0:performance.mark)==null||s.call(performance,"mark_feature_usage",{detail:{feature:n}})}const Wt={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:n=>["lazy","eager"].includes(n)},crossorigin:{type:[Boolean,String],required:!1,validator:n=>["anonymous","use-credentials","",!0,!1].includes(n)},decoding:{type:String,required:!1,validator:n=>["async","auto","sync"].includes(n)},nonce:{type:[String],required:!1}},Ht=n=>{const s=w(()=>({provider:n.provider,preset:n.preset})),t=w(()=>({width:S(n.width),height:S(n.height),alt:n.alt,referrerpolicy:n.referrerpolicy,usemap:n.usemap,longdesc:n.longdesc,ismap:n.ismap,crossorigin:n.crossorigin===!0?"anonymous":n.crossorigin||void 0,loading:n.loading,decoding:n.decoding,nonce:n.nonce})),e=ot(),r=w(()=>({...n.modifiers,width:S(n.width),height:S(n.height),format:n.format,quality:n.quality||e.options.quality,background:n.background,fit:n.fit}));return{options:s,attrs:t,modifiers:r}},Ft={...Wt,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1},custom:{type:Boolean,required:!1}},Ut=["src"],at=A({__name:"NuxtImg",props:Ft,emits:["load","error"],setup(n,{emit:s}){const t=n,e=pt(),r=s,o=!1,i=ot(),c=Ht(t),l=P(!1),u=P(),f=w(()=>i.getSizes(t.src,{...c.options.value,sizes:t.sizes,densities:t.densities,modifiers:{...c.modifiers.value,width:S(t.width),height:S(t.height)}})),g=w(()=>{const d={...c.attrs.value,"data-nuxt-img":""};return(!t.placeholder||l.value)&&(d.sizes=f.value.sizes,d.srcset=f.value.srcset),d}),y=w(()=>{let d=t.placeholder;if(d===""&&(d=!0),!d||l.value)return!1;if(typeof d=="string")return d;const x=Array.isArray(d)?d:typeof d=="number"?[d,d]:[10,10];return i(t.src,{...c.modifiers.value,width:x[0],height:x[1],quality:x[2]||50,blur:x[3]||3},c.options.value)}),$=w(()=>t.sizes?f.value.src:i(t.src,c.modifiers.value,c.options.value)),C=w(()=>y.value?y.value:$.value),O=K().isHydrating;return tt(()=>{if(y.value||t.custom){const d=new Image;$.value&&(d.src=$.value),t.sizes&&(d.sizes=f.value.sizes||"",d.srcset=f.value.srcset),d.onload=x=>{l.value=!0,r("load",x)},d.onerror=x=>{r("error",x)},Rt("nuxt-image");return}u.value&&(u.value.complete&&O&&(u.value.getAttribute("data-error")?r("error",new Event("error")):r("load",new Event("load"))),u.value.onload=d=>{r("load",d)},u.value.onerror=d=>{r("error",d)})}),(d,x)=>d.custom?ht(d.$slots,"default",ft(U({key:1},{...p(o)?{onerror:"this.setAttribute('data-error', 1)"}:{},imgAttrs:{...g.value,...p(e)},isLoaded:l.value,src:C.value}))):(h(),m("img",U({key:0,ref_key:"imgEl",ref:u,class:t.placeholder&&!l.value?t.placeholderClass:void 0},{...p(o)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...p(e)},{src:C.value}),null,16,Ut))}});function R(){return R=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},R.apply(this,arguments)}var Vt={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,s){},onStringTyped:function(n,s){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,s){},onTypingResumed:function(n,s){},onReset:function(n){},onStop:function(n,s){},onStart:function(n,s){},onDestroy:function(n){}},Gt=new(function(){function n(){}var s=n.prototype;return s.load=function(t,e,r){if(t.el=typeof r=="string"?document.querySelector(r):r,t.options=R({},Vt,e),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(u){return u.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),i=o.length;if(i)for(var c=0;c<i;c+=1)t.strings.push(o[c].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},s.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},s.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var r=document.createElement("style");r.setAttribute(e,"true"),r.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(r)}},s.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var r=document.createElement("style");r.setAttribute(e,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},n}()),Q=new(function(){function n(){}var s=n.prototype;return s.typeHtmlChars=function(t,e,r){if(r.contentType!=="html")return e;var o=t.substring(e).charAt(0);if(o==="<"||o==="&"){var i;for(i=o==="<"?">":";";t.substring(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e},s.backSpaceHtmlChars=function(t,e,r){if(r.contentType!=="html")return e;var o=t.substring(e).charAt(0);if(o===">"||o===";"){var i;for(i=o===">"?"<":"&";t.substring(e-1).charAt(0)!==i&&!(--e<0););e--}return e},n}()),Zt=function(){function n(t,e){Gt.load(this,e,t),this.begin()}var s=n.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,e){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),i=1;this.pause.status!==!0?this.timeout=setTimeout(function(){e=Q.typeHtmlChars(t,e,r);var c=0,l=t.substring(e);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var u=1;u+=(l=/\d+/.exec(l)[0]).length,c=parseInt(l),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,e)+t.substring(e+u),r.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(e+i).charAt(0)!=="`"&&(i++,!(e+i>t.length)););var f=t.substring(0,e),g=t.substring(f.length+1,e+i),y=t.substring(e+i+1);t=f+g+y,i--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),e>=t.length?r.doneTyping(t,e):r.keepTyping(t,e,i),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},c)},o):this.setPauseStatus(t,e,!0)},s.keepTyping=function(t,e,r){e===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,e+=r);this.replaceText(o),this.typewrite(t,e)},s.doneTyping=function(t,e){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(t,e)},this.backDelay))},s.backspace=function(t,e){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=Q.backSpaceHtmlChars(t,e,r);var i=t.substring(0,e);if(r.replaceText(i),r.smartBackspace){var c=r.strings[r.arrayPos+1];r.stopNum=c&&i===c.substring(0,e)?e:0}e>r.stopNum?(e--,r.backspace(t,e)):e<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],e))},o)}else this.setPauseStatus(t,e,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,e,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=e},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&t.el.value.length!==0||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();const Jt=""+new URL("bubble.C42nCNaT.wav",import.meta.url).href,B=(n,s,t=.75)=>{const e=n,r=P(!1),o=yt(),i=_t();return mt(e,([{isIntersecting:c}])=>{r.value=c,c&&Date.now()-i.value>1e3&&(o.value=s)},{threshold:t}),{targetIsVisible:r}},Yt={class:"flex items-center justify-center"},Qt={class:"relative"},Xt={"data-aos":"zoom-in"},Kt={class:"mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl","data-aos":"fade-up"},te={class:"col-span-8 place-self-center text-center sm:text-left justify-self-start","data-aos":"zoom-in","data-aos-delay":"100"},ee={class:"text-center text-4xl font-bold tracking-tight sm:text-5xl"},se={class:"flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium","data-aos":"fade-up","data-aos-delay":"100"},ne={class:"bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60",href:"https://github.com/996wuxian",target:"_blank"},re=A({__name:"intro",setup(n){const s=P();B(s,"首页",.2);const t=()=>{new Zt("#introduce",{strings:vt,typeSpeed:50,backSpeed:50,loop:!0})};tt(()=>{t()});const{play:e,stop:r}=bt(Jt);return(o,i)=>{const c=at,l=L;return h(),m("section",{ref_key:"introRef",ref:s,class:"mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]",id:"home"},[a("div",Yt,[a("div",Qt,[a("div",Xt,[_(c,{src:"/avatar.png",alt:"avatar",width:"250",height:"250",quality:"95",class:"h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"})]),a("span",{class:"absolute text-4xl bottom-0 right-0 hover:rotate-2 cursor-pointer","data-aos":"zoom-in","data-aos-delay":"200",onMouseover:i[0]||(i[0]=(...u)=>p(e)&&p(e)(...u))}," 👋 ",32)])]),a("h1",Kt,[i[2]||(i[2]=a("span",{class:"tracking-wider"}," 你好，我是 ",-1)),a("div",te,[a("h1",ee,b(p(xt)),1),i[1]||(i[1]=a("div",{class:"text-center"},[a("span",{class:"tracking-wider"}," I'm a "),a("h2",{class:"text-center text-2xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold"},[a("span",{id:"introduce"})])],-1))]),i[3]||(i[3]=a("p",null,"我享受搭建项目的乐趣！",-1))]),a("div",se,[a("a",ne,[_(l,{name:"mdi:github-box"})])])],512)}}}),ie={},oe={class:"text-gray-500 w-8 h-8 mt-12 mb-20 hidden sm:block",initial:{opacity:0,scale:0},enter:{opacity:1,scale:1},delay:300,duration:1200};function ae(n,s){const t=L,e=nt,r=et("motion");return st((h(),m("div",oe,[_(e,{to:"#about"},{default:E(()=>[_(t,{name:"mdi:chevron-down",class:"transition",size:"25"})]),_:1})])),[[r]])}const ce=W(ie,[["render",ae]]),le=A({__name:"about",setup(n){const s=P();return B(s,"关于我"),(t,e)=>{const r=et("motion");return st((h(),m("section",{ref_key:"aboutRef",ref:s,class:"max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28",id:"about",initial:{opacity:0,y:100},enter:{opacity:1,y:0},delay:175},e[0]||(e[0]=[gt('<h2 class="text-3xl font-medium capitalize mb-8 text-center">关于我</h2><p class="indent-8"> 目前掌握 <span class="icon-[logos--vue]"></span> Vue全家桶从0-1搭建项目、 <span class="icon-[logos--webpack]"></span> Webpack和 <span class="icon-[logos--vitejs]"></span> Vite项目配置、 <span class="icon-[logos--nuxt-icon]"></span> Nuxt构建SSR项目、 <span class="icon-[logos--typescript-icon-round]"></span> Typescript + Eslint + Prettier规范代码、 <span class="icon-[tabler--brand-miniprogram]"></span> 微信小程序从0-1搭建上线全流程、Uni-app搭建多端项目、 <span class="icon-[devicon--nodejs]"></span> Node(Express、Nestjs)搭建后端项目、 <span class="icon-[logos--nginx]"></span> Nginx部署项目... </p>',2)]))),[[r]])}}}),ue={class:"group mb-4 sm:mb-8 last:mb-0","data-aos":"fade-up","data-aos-duration":"800","data-aos-once":"true"},de={class:"bg-gray-200 max-w-[45rem] hidden sm:block border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-96 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10"},pe={class:"group pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col items-start gap-3 h-full sm:group-even:ml-[18rem]"},he={class:"flex flex-col gap-3 items-start"},fe={class:"text-2xl font-semibold group-hover:text-pink dark:group-hover:text-yellow hover:underline"},me={class:"flex gap-3 text-sm text-gray-500 dark:text-gray-300"},ge={class:"mt-2 leading-relaxed text-gray-700 dark:text-white/70 font-700"},ye={class:"flex flex-wrap mt-auto gap-2"},_e={class:"card shadow-xl sm:hidden dark:text-white dark:bg-white/10 max-w-[45rem]"},be={class:"bg-base-100"},xe={class:"card-body"},ve={class:"card-title"},we={class:"flex flex-wrap mt-auto gap-2"},ke={class:"card-actions justify-end"},Se=A({__name:"projectItem",props:{project:{}},setup(n){const s=n,{title:t,description:e,tags:r,imageUrl:o,projectUrl:i,demoUrl:c,detailRoute:l}=s.project;return(u,f)=>{const g=L,y=nt,$=at;return h(),m("div",ue,[a("section",de,[a("div",pe,[a("div",he,[a("h3",fe,b(p(t)),1),a("div",me,[p(i)?(h(),N(y,{key:0,to:p(i),target:"_blank",class:"w-full flex items-center gap-1 hover:underline underline-offset-2"},{default:E(()=>[f[0]||(f[0]=a("span",{class:"break-keep"},"Code",-1)),_(g,{name:"mdi:github-box",size:"17"})]),_:1},8,["to"])):z("",!0),p(c)?(h(),N(y,{key:1,to:p(c),target:"_blank",class:"w-full flex items-center gap-1 hover:underline underline-offset-2"},{default:E(()=>[f[1]||(f[1]=a("span",{class:"break-keep min-w-[4.5rem]"},"Live demo",-1)),_(g,{name:"mdi:launch",size:"17"})]),_:1},8,["to"])):z("",!0)])]),a("p",ge,b(p(e)),1),a("ul",ye,[(h(!0),m(j,null,q(p(r),(C,I)=>(h(),m("li",{class:"bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70",key:I},b(C),1))),128))])]),_($,{src:p(o),alt:"Project I worked on",quality:"95",class:"absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"},null,8,["src"])]),a("section",_e,[a("figure",be,[_($,{src:p(o),alt:"Project I worked on",quality:"95",class:"h-[200px] object-cover"},null,8,["src"])]),a("div",xe,[a("h2",ve,b(p(t)),1),a("ul",we,[(h(!0),m(j,null,q(p(r),(C,I)=>(h(),m("li",{class:"badge badge-ghost",key:I},b(C),1))),128))]),a("p",null,b(p(e)),1),a("div",ke,[p(i)?(h(),N(y,{key:0,to:p(i),target:"_blank",class:"flex items-center gap-1 hover:underline underline-offset-2"},{default:E(()=>[f[2]||(f[2]=a("span",{class:"break-keep"},"Code",-1)),_(g,{name:"mdi:github-box",size:"17"})]),_:1},8,["to"])):z("",!0),p(c)?(h(),N(y,{key:1,to:p(c),target:"_blank",class:"flex items-center gap-1 hover:underline underline-offset-2"},{default:E(()=>[f[3]||(f[3]=a("span",{class:"break-keep min-w-[4.5rem]"},"Live demo",-1)),_(g,{name:"mdi:launch",size:"17"})]),_:1},8,["to"])):z("",!0)])])])])}}}),Ce=A({__name:"project",setup(n){const s=P();return B(s,"我的项目",.4),(t,e)=>{const r=Se;return h(),m("div",{ref_key:"projectsRef",ref:s,class:"scroll-mt-28 mb-28",id:"projects"},[e[0]||(e[0]=a("h2",{class:"text-3xl font-medium capitalize mb-8 text-center"},"我的项目",-1)),(h(!0),m(j,null,q(p(wt),(o,i)=>(h(),N(r,{key:i,project:o},null,8,["project"]))),128))],512)}}}),$e={class:"scroll-container mb-4"},Pe={class:"scroll-right"},Ie={class:"flex space-x-4 animate-scroll-right"},je={class:"scroll-container mb-4"},qe={class:"scroll-left"},Ae={class:"flex space-x-4 animate-scroll-left"},Te={class:"scroll-container"},ze={class:"scroll-right"},Ee={class:"flex space-x-4 animate-scroll-right"},Ne=A({__name:"skills",setup(n){const s=P();B(s,"我的技能");const t=w(()=>D.slice(0,8)),e=w(()=>D.slice(8,16)),r=w(()=>D.slice(16)),o=i=>[...i,...i];return(i,c)=>(h(),m("section",{ref_key:"skillsRef",ref:s,class:"max-w-[53rem] scroll-mt-28 text-center mb-28 overflow-hidden",id:"skills"},[c[0]||(c[0]=a("h2",{class:"text-3xl font-medium capitalize mb-8 text-center"},"我的技能",-1)),a("div",$e,[a("div",Pe,[a("ul",Ie,[(h(!0),m(j,null,q(o(p(t)),(l,u)=>(h(),m("li",{key:`row1-${u}`,class:"flex-shrink-0 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"},b(l),1))),128))])])]),a("div",je,[a("div",qe,[a("ul",Ae,[(h(!0),m(j,null,q(o(p(e)),(l,u)=>(h(),m("li",{key:`row2-${u}`,class:"flex-shrink-0 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"},b(l),1))),128))])])]),a("div",Te,[a("div",ze,[a("ul",Ee,[(h(!0),m(j,null,q(o(p(r)),(l,u)=>(h(),m("li",{key:`row3-${u}`,class:"flex-shrink-0 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"},b(l),1))),128))])])])],512))}}),Be=W(Ne,[["__scopeId","data-v-de9da9ad"]]),Oe={class:"sm:mb-40 relative mb-20 scroll-mt-20",id:"experience"},Le={class:"timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-10"},De=["data-aos"],Me={key:0},Re={class:"timeline-middle"},We={class:"flex flex-col gap-2"},He={class:"font-mono italic block md:hidden"},Fe={class:"font-bold capitalize"},Ue={class:"font-normal !mt-0"},Ve={class:"!mt-1 !font-normal text-gray-700 dark:text-white/75"},Ge={key:1,class:"dark:bg-white/10"},Ze=A({__name:"experience",setup(n){const s=P();return B(s,"我的经历",.1),(t,e)=>{const r=L;return h(),m("section",Oe,[a("h2",{ref_key:"experienceRef",ref:s,class:"text-3xl font-medium capitalize mb-8 text-center"}," 我的经历 ",512),a("ul",Le,[(h(!0),m(j,null,q(p(G),(o,i)=>(h(),m("li",{key:i,"data-aos":i%2?"fade-left":"fade-right"},[i!=0?(h(),m("hr",Me)):z("",!0),a("div",{class:V(["hidden md:block",i%2?"timeline-start":"timeline-end"])},b(o.date),3),a("div",Re,[_(r,{name:"mdi:checkbox-marked-circle"})]),a("div",{class:V(["mb-10 dark:text-white dark:bg-white/10 bg-white p-4 rounded-lg shadow-lg",i%2?"timeline-end":"timeline-start md:text-end"])},[a("div",We,[a("time",He,b(o.date),1),a("h3",Fe,b(o.title),1),a("p",Ue,b(o.location),1),a("p",Ve,b(o.description),1)])],2),i!=p(G).length-1?(h(),m("hr",Ge)):z("",!0)],8,De))),128))])])}}}),Je={},Ye={class:"flex flex-col items-center px-4 overflow-x-hidden"};function Qe(n,s){const t=re,e=ce,r=le,o=Ce,i=Be,c=Ze;return h(),m("main",Ye,[_(t),_(e),_(r),_(o),_(i),_(c)])}const is=W(Je,[["render",Qe]]);export{is as default};
