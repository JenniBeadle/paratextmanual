(()=>{"use strict";var e,a,t,f,r,b={},c={};function d(e){var a=c[e];if(void 0!==a)return a.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=b,d.c=c,e=[],d.O=(a,t,f,r)=>{if(!t){var b=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var c=!0,o=0;o<t.length;o++)(!1&r||b>=r)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(c=!1,r<b&&(b=r));if(c){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var b={};a=a||[null,t({}),t([]),t(t)];for(var c=2&f&&e;"object"==typeof c&&!~a.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,d.d(r,b),r},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",447:"594b045d",461:"1de926c6",477:"69aabb36",582:"bbcbdeef",709:"95d2782a",780:"a2e2a6ef",1071:"f97d8e36",1566:"94c1c5f5",1671:"844e8154",2024:"f58ac6a9",2094:"10ae4e2f",2196:"c0b08e1e",2442:"83295244",2487:"5f5fcb63",2562:"6e755901",2641:"b7d2af09",2653:"892fb73a",2658:"0a36724e",2864:"e3167cac",3220:"7adca5a1",3332:"9a4d4190",3437:"0cf73350",3667:"d1727341",3668:"3e4a8c33",3989:"d9c8d500",4006:"9cacdc20",4121:"22a201bb",4711:"43819284",4958:"55145e57",5268:"910fbb55",5715:"ee6e2833",5745:"218979a3",5926:"d15b5a09",5932:"7b9ba7a6",6590:"766be276",6626:"975ec8ab",6885:"d311ccf8",6991:"635fb14e",7229:"04847427",7367:"052f7eb7",7395:"44ade08c",7918:"17896441",7920:"1a4e3797",8282:"eff0a87a",8820:"00bf44a2",9418:"369fe942",9514:"1be78505",9671:"0e384e19",9693:"9ff645a7",9706:"83689511",9817:"14eb3368"}[e]||e)+"."+{53:"d0c7b313",447:"0d401332",461:"5b715275",477:"b998ae8d",582:"79f22f12",709:"85068173",780:"ad79eec0",1071:"62dab7ec",1566:"bb2b2e7a",1671:"b333be35",2024:"cfaddec1",2094:"1e022491",2196:"01149a12",2442:"81416b91",2487:"026d4128",2562:"bb739bea",2641:"9c91e003",2653:"9233fb0a",2658:"2a67010c",2864:"a5e7d7bf",3220:"05097c94",3332:"2779ffdf",3437:"41abef29",3667:"5b565dd5",3668:"a6f518a7",3989:"15c80c96",4006:"30626d38",4121:"e1266d6b",4711:"5d922026",4958:"09de7cb5",4972:"b0233d80",5268:"7fb40f4b",5525:"804d4221",5715:"9d02ef46",5745:"e4b4a3ba",5926:"255733b6",5932:"fcf4954d",6590:"fba1fade",6626:"f1ab1df0",6885:"85cb2e0c",6991:"4bfcf7b4",7229:"3125f1c2",7367:"770503ee",7395:"761f53b5",7918:"103b01d4",7920:"dc554f28",8282:"18e89246",8443:"95134974",8820:"56bae0f2",9418:"be3a4e98",9514:"981b33bf",9671:"130fad46",9693:"d49cbede",9706:"f946613d",9817:"c4cd432d"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="paratextmanual:",d.l=(e,a,t,b)=>{if(f[e])f[e].push(a);else{var c,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",r+t),c.src=e),f[e]=[a];var l=(a,t)=>{c.onerror=c.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/ar/",d.gca=function(e){return e={17896441:"7918",43819284:"4711",83295244:"2442",83689511:"9706","935f2afb":"53","594b045d":"447","1de926c6":"461","69aabb36":"477",bbcbdeef:"582","95d2782a":"709",a2e2a6ef:"780",f97d8e36:"1071","94c1c5f5":"1566","844e8154":"1671",f58ac6a9:"2024","10ae4e2f":"2094",c0b08e1e:"2196","5f5fcb63":"2487","6e755901":"2562",b7d2af09:"2641","892fb73a":"2653","0a36724e":"2658",e3167cac:"2864","7adca5a1":"3220","9a4d4190":"3332","0cf73350":"3437",d1727341:"3667","3e4a8c33":"3668",d9c8d500:"3989","9cacdc20":"4006","22a201bb":"4121","55145e57":"4958","910fbb55":"5268",ee6e2833:"5715","218979a3":"5745",d15b5a09:"5926","7b9ba7a6":"5932","766be276":"6590","975ec8ab":"6626",d311ccf8:"6885","635fb14e":"6991","04847427":"7229","052f7eb7":"7367","44ade08c":"7395","1a4e3797":"7920",eff0a87a:"8282","00bf44a2":"8820","369fe942":"9418","1be78505":"9514","0e384e19":"9671","9ff645a7":"9693","14eb3368":"9817"}[e]||e,d.p+d.u(e)},(()=>{var e={1303:0,532:0};d.f.j=(a,t)=>{var f=d.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var b=d.p+d.u(a),c=new Error;d.l(b,(t=>{if(d.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),b=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+b+")",c.name="ChunkLoadError",c.type=r,c.request=b,f[1](c)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,b=t[0],c=t[1],o=t[2],n=0;if(b.some((a=>0!==e[a]))){for(f in c)d.o(c,f)&&(d.m[f]=c[f]);if(o)var i=o(d)}for(a&&a(t);n<b.length;n++)r=b[n],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(i)},t=self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();