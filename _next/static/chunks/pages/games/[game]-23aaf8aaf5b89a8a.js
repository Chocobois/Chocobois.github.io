(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{2638:function(e,n,t){var r={"./cat-got-your-tongue.mdx":[6542,542],"./coyote.mdx":[257,257],"./fire-and-dice.mdx":[9274,274],"./kactus-kid.mdx":[378,378],"./rerooted.mdx":[4091,635],"./rhythm-sheriff.mdx":[6846,846],"./shiba-farm.mdx":[7102,102],"./twilight-wings.mdx":[6287,287]};function l(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(r)},l.id=2638,e.exports=l},9476:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/[game]",function(){return t(9114)}])},5047:function(e,n,t){"use strict";t.d(n,{l:function(){return o}});var r=t(5893),l=JSON.parse('[{"text":"Home","href":"/"},{"text":"Games","href":"/games"},{"text":"Articles","href":"/articles"},{"text":"The Bois","href":"/about"}]'),s=t(1664),c=t.n(s);function o(){return(0,r.jsx)("div",{className:"flex gap-8 text-blue-300 font-bold mt-4 mb-6",children:l.map((e,n)=>{let{href:t,text:l}=e;return(0,r.jsx)(c(),{className:"hover:text-blue-200 transition-colors",href:t,children:l},n)})})}},9114:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return w},default:function(){return j}});var r=t(5893),l=t(5047),s=t(7294),c={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},o="undefined"!=typeof window&&void 0!==window.document?window.document:{},a="fullscreenEnabled"in o&&Object.keys(c)||"webkitFullscreenEnabled"in o&&["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"]||"mozFullScreenEnabled"in o&&["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"]||"msFullscreenEnabled"in o&&["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"]||[],i={requestFullscreen:function(e){return e[a[c.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[a[c.requestFullscreen]]},get exitFullscreen(){return o[a[c.exitFullscreen]].bind(o)},get fullscreenPseudoClass(){return":"+a[c.fullscreen]},addEventListener:function(e,n,t){return o.addEventListener(a[c[e]],n,t)},removeEventListener:function(e,n,t){return o.removeEventListener(a[c[e]],n,t)},get fullscreenEnabled(){return Boolean(o[a[c.fullscreenEnabled]])},set fullscreenEnabled(val){},get fullscreenElement(){return o[a[c.fullscreenElement]]},set fullscreenElement(val){},get onfullscreenchange(){return o[("on"+a[c.fullscreenchange]).toLowerCase()]},set onfullscreenchange(handler){return o[("on"+a[c.fullscreenchange]).toLowerCase()]=handler},get onfullscreenerror(){return o[("on"+a[c.fullscreenerror]).toLowerCase()]},set onfullscreenerror(handler){return o[("on"+a[c.fullscreenerror]).toLowerCase()]=handler}},u=function(e){var n=e.handle,t=e.onChange,r=e.children,l=e.className,c=[];return l&&c.push(l),c.push("fullscreen"),n.active&&c.push("fullscreen-enabled"),(0,s.useEffect)(function(){t&&t(n.active,n)},[n.active]),s.createElement("div",{className:c.join(" "),ref:n.node,style:n.active?{height:"100%",width:"100%"}:void 0},r)},d=t(5678);let f=e=>{let{source:n,cover:t,aspectRatio:l="16/9",fullscreenHandle:c,className:o="",href:a=""}=e,[i,f]=(0,s.useState)(!1),m=(0,s.useRef)(null);(0,d.OR)("fullscreenchange",()=>{document.fullscreenElement||screen.orientation.unlock()},m);let h=(0,r.jsx)("iframe",{src:"https://chocobois.github.io/".concat(n),className:"h-full w-full",ref:m}),x=c?(0,r.jsx)(u,{className:"h-full w-full",handle:c,children:h}):h;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"bg-slate-900 overflow-hidden relative flex justify-center items-center rounded ".concat(o),style:{aspectRatio:l},children:i?x:(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)("img",{src:"./".concat(a,"/").concat(t),alt:"Game banner",className:"object-cover opacity-50 h-full"}),(0,r.jsx)("button",{className:"absolute font-bold bg-orange-600 hover:bg-orange-500 rounded p-2 transition-colors",onClick:()=>f(!0),children:"Click to start"})]})})})};var m=JSON.parse('{"golen":{"display":"Golen","socials":{"twitter":"@Golenchu","github":"Golen87"}},"luxx":{"display":"LuxxArt","socials":{"kofi":"LuxxArt","twitter":"@LuxxArt"},"globals":["https://luxxart.carrd.co/"]},"arcticfqx":{"display":"ArcticFqx","socials":{"twitter":"@ArcticFqx","github":"ArcticFqx"}},"mato":{"display":"MatoCookies","socials":{"twitter":"@MatoCookies","bandcamp":"m-a-t-o","github":"Matojeje","kofi":"riiii"},"globals":["https://mato.bio.link/"]},"konix":{"display":"KonixKun","socials":{"twitter":"@KonixKun","kofi":"konixkun"},"globals":["https://konixkun.carrd.co/"]},"miau":{"display":"Miau","socials":{"twitter":"@JolteonDude","kofi":"miau0283"}},"frassy":{"display":"Frassy","socials":{"twitter":"@the_frassy_one"}},"jwatch":{"display":"JWatch","socials":{"twitter":"@justicewatch24","kofi":"justicewatch"}},"dreeda":{"display":"Dreedawott","socials":{"twitter":"@Dreedawott"}},"lumie":{"display":"Lumie","socials":{"twitter":"@NightLightLumie"}},"squishy":{"display":"Squishy","socials":{"twitter":"@Squishy_Snail"}},"shaymoo":{"display":"Shaymoo","socials":{"twitter":"@TheShaymoo"},"globals":["https://shaymoo.net/"]}}');let h={twitter:{name:e=>"Twitter: ".concat(e),url:e=>"https://twitter.com/".concat(e),icon:()=>(0,r.jsx)("i",{className:"fa-brands fa-twitter"})},kofi:{name:e=>"Ko-fi: ".concat(e),url:e=>"https://ko-fi.com/".concat(e),icon:()=>(0,r.jsx)("i",{className:"fa-solid fa-mug-saucer"})},patreon:{name:e=>"Patreon: ".concat(e),url:e=>"https://www.patreon.com/".concat(e),icon:()=>(0,r.jsx)("i",{className:"fa-brands fa-patreon"})},github:{name:e=>"GitHub: ".concat(e),url:e=>"https://github.com/".concat(e),icon:()=>(0,r.jsx)("i",{className:"fa-brands fa-github"})},soundcloud:{name:e=>"SoundCloud: ".concat(e),url:e=>"https://soundcloud.com/".concat(e),icon:()=>(0,r.jsx)("i",{className:"fa-brands fa-soundcloud"})},bandcamp:{name:e=>"Bandcamp: ".concat(e),url:e=>"https://".concat(e,".bandcamp.com/"),icon:()=>(0,r.jsx)("i",{className:"fa-brands fa-bandcamp"})}},x=e=>h[e];function b(e){let{who:n,role:t}=e,{display:l,socials:s,globals:c}=m[n.toLowerCase()]||{};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex justify-between flex-wrap items-center not-prose p-1 pl-2 pr-2 even:bg-black even:bg-opacity-20",children:[(0,r.jsx)("p",{className:"font-semibold text-xl flex items-center",children:(0,r.jsxs)(r.Fragment,{children:[l||n,t&&(0,r.jsxs)("span",{className:"text-xs text-slate-300",children:["\xa0","- ".concat(t)]})]})}),(0,r.jsx)("div",{className:"flex gap-2 justify-end flex-1",children:(0,r.jsxs)(r.Fragment,{children:[c&&c.map(e=>(0,r.jsx)("a",{className:"bg-slate-800 p-1 pl-2 pr-2 rounded hover:bg-slate-700 transition-colors aspect-square",title:e,href:e,children:(0,r.jsx)("i",{className:"fa-solid fa-globe"})},"".concat(l,"-").concat(e))),s&&Object.entries(s).map(e=>{let[n,t]=e;return(0,r.jsx)("a",{className:"bg-slate-800 p-1 pl-2 pr-2 rounded hover:bg-slate-700 transition-colors aspect-square",title:x(n).name(t),href:x(n).url(t),children:x(n).icon()},"".concat(n,"-").concat(t))})]})})]})})}function p(e){let{color:n,contributors:t,roles:l}=e;return(0,r.jsx)("div",{style:{backgroundColor:n},className:"text-white rounded mt-4",children:t.map(e=>(0,r.jsx)(b,{who:e,role:null==l?void 0:l[e]},e))})}var g=t(570),w=!0;function j(e){let{game:n}=e,[c,o]=function(){var e,n,t,l,c,o;let a=(n=(e=(0,s.useState)(!1))[0],t=e[1],l=(0,s.useRef)(null),(0,s.useEffect)(function(){var e=function(){t(i.fullscreenElement===l.current)};return i.addEventListener("fullscreenchange",e),function(){return i.removeEventListener("fullscreenchange",e)}},[]),c=(0,s.useCallback)(function(){return i.fullscreenElement?i.exitFullscreen().then(function(){return i.requestFullscreen(l.current)}):l.current?i.requestFullscreen(l.current):void 0},[]),o=(0,s.useCallback)(function(){return i.fullscreenElement===l.current?i.exitFullscreen():Promise.resolve()},[]),(0,s.useMemo)(function(){return{active:n,enter:c,exit:o,node:l}},[n,c,o])),u=()=>(0,r.jsx)("button",{onClick:()=>{a.enter(),screen.orientation.lock("landscape").catch(()=>{})},className:"font-bold bg-green-600 hover:bg-green-500 rounded p-2 transition-colors",children:"Fullscreen"});return[a,u]}(),a=(0,s.lazy)(()=>t(2638)("./".concat(n.href,".mdx"))),u=(0,r.jsx)(f,{fullscreenHandle:c,source:n.source,className:"drop-shadow-lg",cover:n.cover,href:n.href});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.D,{children:n.name}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-5xl",children:n.name}),(0,r.jsx)(l.l,{}),(0,r.jsx)(s.Suspense,{children:(0,r.jsx)("div",{className:"prose prose-invert max-w-none",children:(0,r.jsx)(a,{Game:u,FullScreenButton:(0,r.jsx)(o,{}),Contributors:(0,r.jsx)(p,{color:n.color,contributors:n.contributors,roles:n.roles})})})})]})]})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=9476)}),_N_E=e.O()}]);