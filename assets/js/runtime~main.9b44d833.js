(()=>{"use strict";var e,a,t,r,f,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,o.c=d,e=[],o.O=(a,t,r,f)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var d=!0,b=0;b<t.length;b++)(!1&f||c>=f)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(d=!1,f<c&&(c=f));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(f,c),f},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",461:"1de926c6",709:"95d2782a",780:"a2e2a6ef",965:"7e395c92",1566:"94c1c5f5",1671:"844e8154",2024:"f58ac6a9",2094:"10ae4e2f",2342:"5ddeb580",2487:"5f5fcb63",2562:"6e755901",2641:"b7d2af09",2653:"892fb73a",2658:"0a36724e",3145:"5d02507b",3220:"7adca5a1",3332:"9a4d4190",3437:"0cf73350",3667:"d1727341",3668:"3e4a8c33",3776:"4e2ce6e8",3989:"d9c8d500",4006:"9cacdc20",4121:"22a201bb",4711:"43819284",4801:"a624c7de",4958:"55145e57",5268:"910fbb55",5715:"ee6e2833",5745:"218979a3",5932:"7b9ba7a6",6590:"766be276",6626:"975ec8ab",6681:"ed7a3472",6885:"d311ccf8",6991:"635fb14e",7229:"04847427",7367:"052f7eb7",7395:"44ade08c",7918:"17896441",7920:"1a4e3797",8209:"cfe80106",8282:"eff0a87a",8820:"00bf44a2",9228:"a0083b71",9418:"369fe942",9514:"1be78505",9671:"0e384e19",9693:"9ff645a7",9706:"83689511",9817:"14eb3368"}[e]||e)+"."+{53:"70c36fe1",461:"997e0601",709:"8c62f27e",780:"b0e54184",965:"870c1ee3",1566:"d8e681c1",1671:"adb6290f",2024:"24eb4831",2094:"c8b2d181",2342:"e2ec33f0",2487:"f6e2a166",2562:"0744e25b",2641:"dfed9e27",2653:"55f4eeb0",2658:"234325b8",3145:"c5593042",3220:"9c1a2d3c",3332:"f542e45d",3437:"018cc850",3667:"7e400fe4",3668:"10720fa4",3776:"e1ec1106",3989:"ef6f7787",4006:"240ef91d",4121:"448aee1b",4711:"637ba859",4801:"cc9ec32d",4958:"251809fa",4972:"b0233d80",5268:"7fb40f4b",5525:"804d4221",5715:"7e801127",5745:"e36b5b32",5932:"dc063cdc",6590:"8b948f41",6626:"31e22d24",6681:"6ebff27f",6885:"1922f114",6991:"a24ffb73",7229:"01892f01",7367:"5639d8bb",7395:"2cb288f4",7918:"103b01d4",7920:"dc554f28",8209:"9d3d34c2",8282:"27cc8ae5",8443:"95134974",8820:"6da2873d",9228:"4ef7d892",9418:"be3a4e98",9514:"981b33bf",9671:"a75f29fe",9693:"7bc43dcb",9706:"e2ec8c4c",9817:"c4cd432d"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="paratextmanual:",o.l=(e,a,t,c)=>{if(r[e])r[e].push(a);else{var d,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",f+t),d.src=e),r[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",o.gca=function(e){return e={17896441:"7918",43819284:"4711",83689511:"9706","935f2afb":"53","1de926c6":"461","95d2782a":"709",a2e2a6ef:"780","7e395c92":"965","94c1c5f5":"1566","844e8154":"1671",f58ac6a9:"2024","10ae4e2f":"2094","5ddeb580":"2342","5f5fcb63":"2487","6e755901":"2562",b7d2af09:"2641","892fb73a":"2653","0a36724e":"2658","5d02507b":"3145","7adca5a1":"3220","9a4d4190":"3332","0cf73350":"3437",d1727341:"3667","3e4a8c33":"3668","4e2ce6e8":"3776",d9c8d500:"3989","9cacdc20":"4006","22a201bb":"4121",a624c7de:"4801","55145e57":"4958","910fbb55":"5268",ee6e2833:"5715","218979a3":"5745","7b9ba7a6":"5932","766be276":"6590","975ec8ab":"6626",ed7a3472:"6681",d311ccf8:"6885","635fb14e":"6991","04847427":"7229","052f7eb7":"7367","44ade08c":"7395","1a4e3797":"7920",cfe80106:"8209",eff0a87a:"8282","00bf44a2":"8820",a0083b71:"9228","369fe942":"9418","1be78505":"9514","0e384e19":"9671","9ff645a7":"9693","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",d.name="ChunkLoadError",d.type=f,d.request=c,r[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,c=t[0],d=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(b)var i=b(o)}for(a&&a(t);n<c.length;n++)f=c[n],o.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return o.O(i)},t=self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();