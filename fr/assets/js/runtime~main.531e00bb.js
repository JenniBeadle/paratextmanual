(()=>{"use strict";var e,a,t,f,r,d={},b={};function c(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=d,c.c=b,e=[],c.O=(a,t,f,r)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&r||d>=r)&&Object.keys(c.O).every((e=>c.O[e](t[o])))?t.splice(o--,1):(b=!1,r<d&&(d=r));if(b){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var d={};a=a||[null,t({}),t([]),t(t)];for(var b=2&f&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,c.d(r,d),r},c.d=(e,a)=>{for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,t)=>(c.f[t](e,a),a)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",70:"8e5117c5",115:"d19157e5",279:"d333b04e",326:"16eba4fb",659:"85defcf5",1076:"bba912fc",1200:"45ebaf2d",1247:"a530e0af",1396:"4d1dbb23",1467:"57a1d77e",1575:"b1261834",1627:"5055efe2",1650:"0d1ac094",1762:"bf6f2c08",2056:"01abb3e2",2116:"71dd7cc9",2127:"5c41e875",2273:"eaf6de36",2579:"2e9b1e61",3808:"c87d1c69",4050:"113c0dd8",4125:"b4a9a523",4294:"d1a74dcb",4677:"94dcbfb9",5201:"b9d84b81",5268:"910fbb55",6022:"c19223bd",6160:"025d3c88",6191:"1b6f9fda",6334:"cf9585e6",6836:"56fb90ba",6978:"1be81d58",7012:"883a02c8",7065:"975e467a",7119:"d4326251",7520:"449a1ee9",7545:"20d8719a",7764:"6f350fc5",7918:"17896441",7920:"1a4e3797",8082:"aaf1b65f",8291:"a4f80ad1",8596:"e5c96028",9027:"418a754b",9223:"ef9e2451",9418:"369fe942",9510:"7be9c9ae",9514:"1be78505",9619:"c3cf1b9a",9817:"14eb3368",9833:"4a896f29"}[e]||e)+"."+{53:"6cdb2876",70:"9826e70a",115:"985b8c6e",279:"8006eac9",326:"8baae15a",659:"97b54465",1076:"39b70346",1200:"1a18855c",1247:"1f8804fd",1396:"87df7496",1467:"fbef0408",1575:"036bbe16",1627:"4950d96c",1650:"5006dc46",1762:"12d9ef42",2056:"cf13e0ae",2116:"87e574f1",2127:"17795512",2273:"f0298c0a",2579:"140c7810",3808:"7c34b812",4050:"2b8d0c34",4125:"4bed0a4a",4294:"36df7d3d",4677:"61a29644",4972:"b0233d80",5201:"c89c5e6a",5268:"7fb40f4b",5525:"804d4221",6022:"7ad582d6",6160:"296d8f53",6191:"5c93b68d",6334:"846748ff",6836:"6ad1671f",6978:"62152712",7012:"81ef6256",7065:"b0254d14",7119:"90b855db",7520:"09c0c7fc",7545:"6cf8c7e4",7764:"10c87897",7918:"103b01d4",7920:"dc554f28",8082:"c59569a0",8291:"5aede438",8443:"4beec43a",8596:"22a4af8e",9027:"be1725c5",9223:"c6c6ff54",9418:"be3a4e98",9510:"7288c64e",9514:"981b33bf",9619:"6a88c08e",9817:"c4cd432d",9833:"21d7d71c"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="paratextmanual:",c.l=(e,a,t,d)=>{if(f[e])f[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.setAttribute("data-webpack",r+t),b.src=e),f[e]=[a];var l=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],b.parentNode&&b.parentNode.removeChild(b),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/paratextmanual/fr/",c.gca=function(e){return e={17896441:"7918","935f2afb":"53","8e5117c5":"70",d19157e5:"115",d333b04e:"279","16eba4fb":"326","85defcf5":"659",bba912fc:"1076","45ebaf2d":"1200",a530e0af:"1247","4d1dbb23":"1396","57a1d77e":"1467",b1261834:"1575","5055efe2":"1627","0d1ac094":"1650",bf6f2c08:"1762","01abb3e2":"2056","71dd7cc9":"2116","5c41e875":"2127",eaf6de36:"2273","2e9b1e61":"2579",c87d1c69:"3808","113c0dd8":"4050",b4a9a523:"4125",d1a74dcb:"4294","94dcbfb9":"4677",b9d84b81:"5201","910fbb55":"5268",c19223bd:"6022","025d3c88":"6160","1b6f9fda":"6191",cf9585e6:"6334","56fb90ba":"6836","1be81d58":"6978","883a02c8":"7012","975e467a":"7065",d4326251:"7119","449a1ee9":"7520","20d8719a":"7545","6f350fc5":"7764","1a4e3797":"7920",aaf1b65f:"8082",a4f80ad1:"8291",e5c96028:"8596","418a754b":"9027",ef9e2451:"9223","369fe942":"9418","7be9c9ae":"9510","1be78505":"9514",c3cf1b9a:"9619","14eb3368":"9817","4a896f29":"9833"}[e]||e,c.p+c.u(e)},(()=>{var e={1303:0,532:0};c.f.j=(a,t)=>{var f=c.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var d=c.p+c.u(a),b=new Error;c.l(d,(t=>{if(c.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",b.name="ChunkLoadError",b.type=r,b.request=d,f[1](b)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,d=t[0],b=t[1],o=t[2],n=0;if(d.some((a=>0!==e[a]))){for(f in b)c.o(b,f)&&(c.m[f]=b[f]);if(o)var i=o(c)}for(a&&a(t);n<d.length;n++)r=d[n],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(i)},t=self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();