(()=>{"use strict";var e,a,t,r,c,f={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=f,b.c=d,e=[],b.O=(a,t,r,c)=>{if(!t){var f=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],c=e[i][2];for(var d=!0,o=0;o<t.length;o++)(!1&c||f>=c)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(d=!1,c<f&&(f=c));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,r,c]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var c=Object.create(null);b.r(c);var f={};a=a||[null,t({}),t([]),t(t)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(c,f),c},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",461:"1de926c6",709:"95d2782a",780:"a2e2a6ef",1566:"94c1c5f5",1671:"844e8154",2024:"f58ac6a9",2094:"10ae4e2f",2487:"5f5fcb63",2562:"6e755901",2641:"b7d2af09",2653:"892fb73a",2658:"0a36724e",2789:"0f997d18",2919:"34ce1565",3220:"7adca5a1",3332:"9a4d4190",3437:"0cf73350",3636:"b1311b0b",3667:"d1727341",3668:"3e4a8c33",3989:"d9c8d500",4006:"9cacdc20",4033:"c610c99d",4121:"22a201bb",4332:"d15dbca5",4711:"43819284",4958:"55145e57",5268:"910fbb55",5443:"82bbdee6",5715:"ee6e2833",5745:"218979a3",5932:"7b9ba7a6",6590:"766be276",6625:"01d7f348",6626:"975ec8ab",6885:"d311ccf8",6991:"635fb14e",7229:"04847427",7367:"052f7eb7",7395:"44ade08c",7918:"17896441",7920:"1a4e3797",8051:"a54b000f",8282:"eff0a87a",8820:"00bf44a2",9418:"369fe942",9514:"1be78505",9671:"0e384e19",9693:"9ff645a7",9706:"83689511",9817:"14eb3368"}[e]||e)+"."+{53:"461f62aa",461:"65a39051",709:"df7b0795",780:"934952e1",1566:"6be573d4",1671:"3197a609",2024:"58c4c15e",2094:"a5e5d577",2487:"a8dfa6c5",2562:"8f5ebf29",2641:"a593871b",2653:"929021d6",2658:"51e52bb0",2789:"e901e0a6",2919:"57810b7b",3220:"836863f0",3332:"a364076c",3437:"d46b892b",3636:"72726c58",3667:"28140272",3668:"38eb9f2f",3989:"679d6d37",4006:"1138d015",4033:"c2e87f27",4121:"a952b267",4332:"9e183ad8",4711:"f085937f",4958:"7521df37",4972:"b0233d80",5268:"7fb40f4b",5443:"9d4eb757",5525:"804d4221",5715:"9aabceea",5745:"b692382e",5932:"cbfb20c9",6590:"5505d061",6625:"c277b11a",6626:"5d8820b6",6885:"c2765e6c",6991:"2d6ec81c",7229:"cff6fd77",7367:"e1798c61",7395:"45f909d4",7918:"103b01d4",7920:"dc554f28",8051:"d6a7c938",8282:"725d2b24",8443:"95134974",8820:"e5de1372",9418:"be3a4e98",9514:"981b33bf",9671:"de79a8e0",9693:"c8f36dd3",9706:"5eb859f7",9817:"c4cd432d"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},c="paratextmanual:",b.l=(e,a,t,f)=>{if(r[e])r[e].push(a);else{var d,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+t){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",c+t),d.src=e),r[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var c=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),c&&c.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/paratextmanual/ru/",b.gca=function(e){return e={17896441:"7918",43819284:"4711",83689511:"9706","935f2afb":"53","1de926c6":"461","95d2782a":"709",a2e2a6ef:"780","94c1c5f5":"1566","844e8154":"1671",f58ac6a9:"2024","10ae4e2f":"2094","5f5fcb63":"2487","6e755901":"2562",b7d2af09:"2641","892fb73a":"2653","0a36724e":"2658","0f997d18":"2789","34ce1565":"2919","7adca5a1":"3220","9a4d4190":"3332","0cf73350":"3437",b1311b0b:"3636",d1727341:"3667","3e4a8c33":"3668",d9c8d500:"3989","9cacdc20":"4006",c610c99d:"4033","22a201bb":"4121",d15dbca5:"4332","55145e57":"4958","910fbb55":"5268","82bbdee6":"5443",ee6e2833:"5715","218979a3":"5745","7b9ba7a6":"5932","766be276":"6590","01d7f348":"6625","975ec8ab":"6626",d311ccf8:"6885","635fb14e":"6991","04847427":"7229","052f7eb7":"7367","44ade08c":"7395","1a4e3797":"7920",a54b000f:"8051",eff0a87a:"8282","00bf44a2":"8820","369fe942":"9418","1be78505":"9514","0e384e19":"9671","9ff645a7":"9693","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var r=b.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>r=e[a]=[t,c]));t.push(r[2]=c);var f=b.p+b.u(a),d=new Error;b.l(f,(t=>{if(b.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var c=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+c+": "+f+")",d.name="ChunkLoadError",d.type=c,d.request=f,r[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var r,c,f=t[0],d=t[1],o=t[2],n=0;if(f.some((a=>0!==e[a]))){for(r in d)b.o(d,r)&&(b.m[r]=d[r]);if(o)var i=o(b)}for(a&&a(t);n<f.length;n++)c=f[n],b.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return b.O(i)},t=self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();