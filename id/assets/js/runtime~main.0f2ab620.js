(()=>{"use strict";var e,a,f,d,b,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,d,b)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],b=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&b||c>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<c&&(c=b));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,d,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(b,c),b},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",193:"516bb34b",243:"6eba30e7",260:"017930a4",273:"a82a813b",343:"a24218be",350:"dd856072",385:"d62c507b",461:"1de926c6",541:"5f6d01cd",544:"3330dd6b",617:"5d333c0e",705:"62fd8527",709:"95d2782a",780:"a2e2a6ef",891:"06ea297b",1034:"090dbf3b",1182:"857a53f3",1187:"0ba04bec",1239:"9c9f23d7",1308:"68fdcbc5",1366:"c107afd8",1566:"94c1c5f5",1575:"d2ee6b82",1578:"617fc5fa",1671:"844e8154",1705:"ffccc5f3",1811:"12435de6",1872:"0791849b",1997:"a63f919f",2024:"f58ac6a9",2046:"9c96598f",2051:"19742921",2094:"10ae4e2f",2237:"48e20535",2243:"9dcd51c5",2258:"adeb2fbb",2283:"34f68d03",2311:"20492496",2320:"627c2c66",2368:"4faebc13",2487:"5f5fcb63",2520:"e7e9793b",2562:"6e755901",2583:"75897112",2641:"b7d2af09",2642:"c2b14a69",2653:"892fb73a",2658:"0a36724e",2883:"84177320",2946:"bac3496d",3156:"c4a31343",3220:"7adca5a1",3280:"37b4950a",3332:"9a4d4190",3366:"34c7b019",3407:"0cfc5243",3437:"0cf73350",3450:"8cc14113",3461:"a806809d",3496:"91df4673",3611:"9d7ae629",3658:"279b8bfa",3667:"d1727341",3668:"3e4a8c33",3681:"a621ed8f",3703:"58374bda",3718:"07bb3102",3723:"597155cf",3745:"f939cb52",3825:"d9470f59",3849:"c37a06f2",3956:"4230ab9b",3989:"d9c8d500",4006:"9cacdc20",4020:"f41226f3",4041:"4ee5988c",4121:"22a201bb",4123:"1dde9450",4466:"297e5f50",4510:"9e272368",4522:"ad09c2d9",4531:"230663c2",4540:"afe173de",4546:"d32a238e",4607:"ac074460",4711:"43819284",4715:"2ade3115",4721:"b758a592",4728:"a46d0eb8",4794:"5b58a4b1",4797:"71b3ba70",4825:"6e43aa00",4828:"3928f373",4885:"4880d897",4958:"55145e57",5027:"9ff645a7",5028:"a5030dfa",5153:"62d5e0b2",5154:"da0f06c8",5268:"910fbb55",5317:"3461fa35",5357:"b45947c4",5420:"f65f4470",5486:"c8cd0507",5491:"35cb4f20",5667:"98df4d23",5715:"ee6e2833",5745:"218979a3",5821:"0dd45977",5932:"7b9ba7a6",5933:"a65dfa38",5959:"413f398a",5981:"ed26d0ba",6117:"9f59d078",6360:"8cd0f500",6590:"766be276",6608:"cc3bb793",6626:"975ec8ab",6882:"67005aad",6885:"d311ccf8",6991:"635fb14e",7091:"18f2bee7",7112:"f0c86161",7229:"04847427",7249:"566d9b35",7325:"846edd76",7340:"0e2516d3",7367:"052f7eb7",7395:"44ade08c",7588:"0bfc90e9",7741:"46f9cbc9",7798:"bca7707b",7807:"8b98bb18",7918:"17896441",7920:"1a4e3797",8071:"30958ee1",8176:"2fb894ab",8275:"bb1b485c",8282:"eff0a87a",8380:"b55d91d6",8547:"7c74f843",8671:"ffb9fb17",8820:"00bf44a2",8903:"86b8a64a",9134:"7fcda8d3",9154:"8bcdef8f",9278:"469995da",9418:"369fe942",9514:"1be78505",9671:"0e384e19",9693:"08fc3ea1",9706:"83689511",9712:"a3c73282",9722:"af1f6ddf",9817:"14eb3368",9822:"28675ae4",9875:"4fa8e66e",9879:"be97753f",9916:"99af2fc3",9943:"2ded09fe"}[e]||e)+"."+{53:"3fae80c2",193:"a49c88c3",243:"e78e7c42",260:"bd792694",273:"f6cd579d",343:"ec2caa1f",350:"e7728453",385:"2081c243",461:"afbe1982",541:"d3a8d99a",544:"81834b90",617:"a4736ee2",705:"7efe2b5a",709:"b579e2c9",780:"8c840306",891:"78ab1df0",1034:"b09d878c",1182:"2aced85e",1187:"048ed3a9",1239:"bbffb767",1308:"3c80fe72",1366:"190f9b3e",1566:"40573431",1575:"338969eb",1578:"bb839a25",1671:"41ab51b3",1705:"4afcf54c",1811:"5f0acb28",1872:"78413f76",1997:"fdaff976",2024:"0c837002",2046:"018ef670",2051:"be02ac48",2094:"3db79865",2237:"1a0468f6",2243:"161b2c38",2258:"c579b0cd",2283:"e61e68a6",2311:"4a6679cd",2320:"3c0ef930",2368:"ea75945b",2487:"d929228b",2520:"d5a1f2b8",2562:"13b3e0e6",2583:"84ce4503",2641:"3b76e165",2642:"5ab1ff0c",2653:"dc3ba90d",2658:"f7c4dd2d",2883:"e98fdf3e",2946:"69b4c1c3",3156:"9a1b4d76",3220:"fe1d0aec",3280:"baa6c1b4",3332:"371c0f05",3366:"6f4dedfd",3407:"6ecaed9e",3437:"dfadca63",3450:"6d3a3b49",3461:"c103ea92",3496:"c57832be",3611:"a0cee671",3658:"1c68d203",3667:"23dc7716",3668:"00b07152",3681:"a75b8575",3703:"0179d11d",3718:"151844c3",3723:"3b704a8f",3745:"0533033b",3825:"f9fa602f",3849:"342fa577",3956:"1056221a",3989:"6e5bbc78",4006:"cd9e7f0a",4020:"baecb1de",4041:"db91e9cd",4121:"7d57ca6c",4123:"42b21fb8",4466:"5e251aa2",4510:"da2c2200",4522:"573622a2",4531:"f9bdc689",4540:"450d7e4e",4546:"ac9c1a99",4607:"37a0e18f",4711:"e1dc4925",4715:"bf70f0bd",4721:"e8e808e5",4728:"59b98f33",4794:"e90eb86a",4797:"8dc53eef",4825:"22d63734",4828:"1eea096a",4885:"153eabdd",4958:"5cde1b2e",4972:"b0233d80",5027:"274c3998",5028:"f1764a96",5153:"f4154707",5154:"ab27833c",5268:"7fb40f4b",5317:"6facc6b6",5357:"6efd0a1c",5420:"5c31c92a",5486:"f08e097f",5491:"9d3d7864",5525:"804d4221",5667:"88e1f30d",5715:"7a121e36",5745:"9a3cfddc",5821:"8c6f61f8",5932:"e38f4dd9",5933:"d912906c",5959:"36b976f9",5981:"51093679",6117:"34c43afe",6360:"8d38d674",6590:"b7263449",6608:"87da4c08",6626:"31749c4e",6882:"673fd7f6",6885:"34968a31",6991:"f4c0b1e8",7091:"60b0b669",7112:"b25bd3e2",7229:"f26fcebb",7249:"2836b2d5",7325:"f29a61e1",7340:"5701e647",7367:"21d0f6f1",7395:"f60f29a9",7588:"601ba463",7741:"efe3103b",7798:"e7543ce0",7807:"c999a424",7918:"103b01d4",7920:"dc554f28",8071:"774fa667",8176:"ed117c73",8275:"207c466d",8282:"eac443e9",8380:"73f61844",8443:"44f897bc",8547:"cc9d5aa3",8671:"6cb1977d",8820:"40dac34e",8903:"03073e7f",9134:"f1f61cc5",9154:"2bc674a9",9278:"c4862ed9",9418:"be3a4e98",9514:"981b33bf",9671:"eded3fa8",9693:"7350bdad",9706:"2fa2564f",9712:"b13461c3",9722:"53e237be",9817:"c4cd432d",9822:"80d39fd9",9875:"d1bd7e61",9879:"0a5b3e46",9916:"40f21887",9943:"4417064b"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},b="paratextmanual:",r.l=(e,a,f,c)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),d[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/id/",r.gca=function(e){return e={17896441:"7918",19742921:"2051",20492496:"2311",43819284:"4711",75897112:"2583",83689511:"9706",84177320:"2883","935f2afb":"53","516bb34b":"193","6eba30e7":"243","017930a4":"260",a82a813b:"273",a24218be:"343",dd856072:"350",d62c507b:"385","1de926c6":"461","5f6d01cd":"541","3330dd6b":"544","5d333c0e":"617","62fd8527":"705","95d2782a":"709",a2e2a6ef:"780","06ea297b":"891","090dbf3b":"1034","857a53f3":"1182","0ba04bec":"1187","9c9f23d7":"1239","68fdcbc5":"1308",c107afd8:"1366","94c1c5f5":"1566",d2ee6b82:"1575","617fc5fa":"1578","844e8154":"1671",ffccc5f3:"1705","12435de6":"1811","0791849b":"1872",a63f919f:"1997",f58ac6a9:"2024","9c96598f":"2046","10ae4e2f":"2094","48e20535":"2237","9dcd51c5":"2243",adeb2fbb:"2258","34f68d03":"2283","627c2c66":"2320","4faebc13":"2368","5f5fcb63":"2487",e7e9793b:"2520","6e755901":"2562",b7d2af09:"2641",c2b14a69:"2642","892fb73a":"2653","0a36724e":"2658",bac3496d:"2946",c4a31343:"3156","7adca5a1":"3220","37b4950a":"3280","9a4d4190":"3332","34c7b019":"3366","0cfc5243":"3407","0cf73350":"3437","8cc14113":"3450",a806809d:"3461","91df4673":"3496","9d7ae629":"3611","279b8bfa":"3658",d1727341:"3667","3e4a8c33":"3668",a621ed8f:"3681","58374bda":"3703","07bb3102":"3718","597155cf":"3723",f939cb52:"3745",d9470f59:"3825",c37a06f2:"3849","4230ab9b":"3956",d9c8d500:"3989","9cacdc20":"4006",f41226f3:"4020","4ee5988c":"4041","22a201bb":"4121","1dde9450":"4123","297e5f50":"4466","9e272368":"4510",ad09c2d9:"4522","230663c2":"4531",afe173de:"4540",d32a238e:"4546",ac074460:"4607","2ade3115":"4715",b758a592:"4721",a46d0eb8:"4728","5b58a4b1":"4794","71b3ba70":"4797","6e43aa00":"4825","3928f373":"4828","4880d897":"4885","55145e57":"4958","9ff645a7":"5027",a5030dfa:"5028","62d5e0b2":"5153",da0f06c8:"5154","910fbb55":"5268","3461fa35":"5317",b45947c4:"5357",f65f4470:"5420",c8cd0507:"5486","35cb4f20":"5491","98df4d23":"5667",ee6e2833:"5715","218979a3":"5745","0dd45977":"5821","7b9ba7a6":"5932",a65dfa38:"5933","413f398a":"5959",ed26d0ba:"5981","9f59d078":"6117","8cd0f500":"6360","766be276":"6590",cc3bb793:"6608","975ec8ab":"6626","67005aad":"6882",d311ccf8:"6885","635fb14e":"6991","18f2bee7":"7091",f0c86161:"7112","04847427":"7229","566d9b35":"7249","846edd76":"7325","0e2516d3":"7340","052f7eb7":"7367","44ade08c":"7395","0bfc90e9":"7588","46f9cbc9":"7741",bca7707b:"7798","8b98bb18":"7807","1a4e3797":"7920","30958ee1":"8071","2fb894ab":"8176",bb1b485c:"8275",eff0a87a:"8282",b55d91d6:"8380","7c74f843":"8547",ffb9fb17:"8671","00bf44a2":"8820","86b8a64a":"8903","7fcda8d3":"9134","8bcdef8f":"9154","469995da":"9278","369fe942":"9418","1be78505":"9514","0e384e19":"9671","08fc3ea1":"9693",a3c73282:"9712",af1f6ddf:"9722","14eb3368":"9817","28675ae4":"9822","4fa8e66e":"9875",be97753f:"9879","99af2fc3":"9916","2ded09fe":"9943"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>d=e[a]=[f,b]));f.push(d[2]=b);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var b=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+c+")",t.name="ChunkLoadError",t.type=b,t.request=c,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,b,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)b=c[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();