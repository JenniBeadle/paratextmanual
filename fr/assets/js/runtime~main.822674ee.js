(()=>{"use strict";var e,a,d,f,b,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=c,r.c=t,e=[],r.O=(a,d,f,b)=>{if(!d){var c=1/0;for(i=0;i<e.length;i++){d=e[i][0],f=e[i][1],b=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&b||c>=b)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,b<c&&(c=b));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[d,f,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var c={};a=a||[null,d({}),d([]),d(d)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(b,c),b},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({20:"44b964e5",53:"935f2afb",115:"d19157e5",240:"62aec57e",246:"b4da26a1",273:"f2096484",279:"d333b04e",326:"16eba4fb",364:"4982e9a4",395:"d689e942",525:"eb57a20d",545:"25240cb7",552:"f3d81657",624:"035222ff",659:"85defcf5",662:"f22f79b1",821:"dee8983c",913:"ab6d47be",1030:"2edf5920",1076:"bba912fc",1084:"a37419ee",1108:"48703512",1133:"fdedf3a8",1146:"6e8576b7",1200:"45ebaf2d",1238:"d51f1ed4",1366:"149aeecb",1396:"4d1dbb23",1575:"b1261834",1627:"5055efe2",1650:"0d1ac094",1659:"e059c5f3",1696:"6385b52f",1718:"f727aa50",1805:"719a7dca",1835:"8afdb6f5",1884:"24303a56",2072:"0dc1bbcd",2116:"71dd7cc9",2127:"5c41e875",2269:"54f835f1",2273:"eaf6de36",2311:"ad3b12a5",2554:"772ab17d",2579:"2e9b1e61",2738:"7468ba33",2806:"fbbef80e",2812:"85049f7f",2859:"3a70aef5",2863:"fe3912b4",2950:"e709257c",3034:"ab20c81b",3237:"92eb680c",3252:"648da1d6",3390:"dd91932d",3447:"ca6a331c",3475:"e608a504",3478:"1b230c4a",3528:"45feece6",3550:"89ed217f",3808:"c87d1c69",3836:"fb616737",4050:"113c0dd8",4118:"330e30f5",4125:"b4a9a523",4182:"f9ba7792",4233:"4068f0a6",4294:"d1a74dcb",4484:"e905c878",4540:"afe173de",4562:"c9bc15ce",4619:"1beee53b",4635:"60cb719f",4677:"94dcbfb9",4725:"fad730dd",4747:"e0ba4816",4793:"af3a605f",5018:"cc66e58d",5042:"5a34e8f9",5102:"d1054a3a",5201:"b9d84b81",5258:"8cd2f0a4",5268:"910fbb55",5304:"b259bfc1",5416:"226dbe39",5472:"5fd8532d",5479:"9a52152c",5867:"4a647785",6022:"c19223bd",6140:"6966e037",6150:"d8162897",6191:"1b6f9fda",6222:"846014d2",6307:"6dd24bf9",6334:"cf9585e6",6386:"024bc438",6387:"410c295d",6460:"1ba18601",6499:"375f1701",6514:"2c8ab43a",6581:"3f288e15",6603:"93344772",6698:"01bd961c",6800:"cfe05902",6836:"56fb90ba",6978:"1be81d58",7e3:"c681b06a",7038:"19897900",7065:"975e467a",7119:"d4326251",7123:"924c636b",7190:"134230c6",7275:"a6ccfe49",7352:"7bc30529",7397:"b5609165",7521:"5be00d71",7546:"37d3db62",7550:"1a2fd9d8",7721:"36f4a15c",7737:"903e5e02",7741:"46f9cbc9",7764:"6f350fc5",7827:"22572331",7918:"17896441",7920:"1a4e3797",7983:"b5a454ea",8082:"aaf1b65f",8196:"e46f0ca9",8291:"a4f80ad1",8310:"705b95b0",8390:"a559ca64",8410:"39a94233",8543:"b25d0325",8596:"e5c96028",8631:"fea7c907",8696:"654563db",8720:"81fda216",8748:"19f55b03",8815:"f1fd2cd3",8944:"b4136fed",8954:"8e1054ea",9010:"74f4111c",9014:"087ed877",9027:"418a754b",9029:"2ccdad1d",9068:"447a19c8",9106:"8a698c1d",9135:"6178cc59",9223:"ef9e2451",9287:"362f2db1",9288:"31e1d26f",9383:"eddcb29b",9388:"803134f2",9418:"369fe942",9510:"7be9c9ae",9514:"1be78505",9545:"b22c5021",9619:"c3cf1b9a",9671:"0e384e19",9700:"3fa7d874",9733:"bdd9fc2c",9740:"8572da77",9817:"14eb3368",9833:"4a896f29"}[e]||e)+"."+{20:"62586732",53:"3a674723",115:"c09cc377",240:"4f038253",246:"c35b4c9e",273:"7ebd210d",279:"33177a8f",326:"12faa012",364:"20e66d96",395:"f6245d46",525:"de8b3bc7",545:"55d2e2f9",552:"47886141",624:"290da8ee",659:"bd24f7e5",662:"e78990a0",821:"7288bb4d",913:"7fc7fe9b",1030:"c5cf8afe",1076:"ad2882d6",1084:"c9082b3c",1108:"ae4f9b13",1133:"afe3cc2a",1146:"cc31d2d0",1200:"6c045b21",1238:"a0f0897f",1366:"63b37dc3",1396:"e1b0b1b0",1575:"3854c407",1627:"a0fa9496",1650:"6fc1c30d",1659:"cc6022ba",1696:"7dded418",1718:"af679d56",1805:"2eb447df",1835:"548eb073",1884:"d8397ab1",2072:"c9a49dfe",2116:"f5e35492",2127:"8980ff7d",2269:"6554a3c0",2273:"bee2c3f0",2311:"2f193bb2",2554:"7d61340a",2579:"8d93b030",2738:"80231438",2806:"cf97bdce",2812:"8097359f",2859:"100c98a4",2863:"ec5f2d43",2950:"993dd382",3034:"8145c187",3237:"3b33cc61",3252:"03212522",3390:"b0aef283",3447:"d21a6936",3475:"5672c73e",3478:"cd1b713c",3528:"b8144349",3550:"05bd3233",3808:"ec6d6876",3836:"98aaf5c3",4050:"c66c0afa",4118:"6b2c2ab6",4125:"e1103712",4182:"3ef5f09d",4233:"cfccf23a",4294:"b8238016",4484:"ebd19011",4540:"2efd64c0",4562:"7bae8461",4619:"8a1e7172",4635:"40f88988",4677:"42873807",4725:"e24261aa",4747:"4835cc75",4793:"905a9063",4972:"b0233d80",5018:"f536ff80",5042:"870082e2",5102:"9ba59e99",5201:"93a8ceeb",5258:"68c7280c",5268:"7fb40f4b",5304:"e4db45c7",5416:"a11d29ce",5472:"a5b4c6db",5479:"9d1eabf7",5525:"804d4221",5867:"8b27430e",6022:"df0b62d7",6140:"7bb28041",6150:"4fe6256b",6191:"0e6a7430",6222:"e5cc65e1",6307:"5170895a",6334:"640c6dec",6386:"617ee613",6387:"40a7baea",6460:"9e9a0fcb",6499:"20a3584c",6514:"6704840e",6581:"6f86a78d",6603:"84d733f4",6698:"01854655",6800:"cdfea35f",6836:"5baa02ca",6978:"7e0f0ccc",7e3:"29467cc6",7038:"4b2d9e44",7065:"a7fd008b",7119:"896c7b63",7123:"28a113c7",7190:"c7eae93d",7275:"64ddc453",7352:"7004536c",7397:"bd0078ad",7521:"a42eb890",7546:"aa897adf",7550:"d23ca330",7721:"1fc1c32b",7737:"ab51dfc2",7741:"485bc218",7764:"6048754e",7827:"83628c1b",7918:"103b01d4",7920:"dc554f28",7983:"9282a097",8082:"59218625",8196:"343fb005",8291:"c277f41e",8310:"bf7be6e5",8390:"1af07a17",8410:"7ad80e2d",8443:"4beec43a",8543:"5453af48",8596:"c29353d3",8631:"45366009",8696:"d3a21fd9",8720:"f4a7b503",8748:"5c8e7974",8815:"c6b323ed",8944:"4f89484c",8954:"3d7731f7",9010:"81ceb556",9014:"1f7afc4e",9027:"dd83c36f",9029:"5a4eb34d",9068:"8a37d369",9106:"ba3a8a2b",9135:"380061d0",9223:"7645c709",9287:"075f09d9",9288:"f6e15b7e",9383:"02a6df73",9388:"6723b454",9418:"be3a4e98",9510:"a7558175",9514:"981b33bf",9545:"deb27377",9619:"6ba77cb9",9671:"dd58a06f",9700:"9c953853",9733:"b0577b52",9740:"322546d3",9817:"c4cd432d",9833:"cf792372"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},b="paratextmanual:",r.l=(e,a,d,c)=>{if(f[e])f[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+d),t.src=e),f[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var b=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/fr/",r.gca=function(e){return e={17896441:"7918",19897900:"7038",22572331:"7827",48703512:"1108",93344772:"6603","44b964e5":"20","935f2afb":"53",d19157e5:"115","62aec57e":"240",b4da26a1:"246",f2096484:"273",d333b04e:"279","16eba4fb":"326","4982e9a4":"364",d689e942:"395",eb57a20d:"525","25240cb7":"545",f3d81657:"552","035222ff":"624","85defcf5":"659",f22f79b1:"662",dee8983c:"821",ab6d47be:"913","2edf5920":"1030",bba912fc:"1076",a37419ee:"1084",fdedf3a8:"1133","6e8576b7":"1146","45ebaf2d":"1200",d51f1ed4:"1238","149aeecb":"1366","4d1dbb23":"1396",b1261834:"1575","5055efe2":"1627","0d1ac094":"1650",e059c5f3:"1659","6385b52f":"1696",f727aa50:"1718","719a7dca":"1805","8afdb6f5":"1835","24303a56":"1884","0dc1bbcd":"2072","71dd7cc9":"2116","5c41e875":"2127","54f835f1":"2269",eaf6de36:"2273",ad3b12a5:"2311","772ab17d":"2554","2e9b1e61":"2579","7468ba33":"2738",fbbef80e:"2806","85049f7f":"2812","3a70aef5":"2859",fe3912b4:"2863",e709257c:"2950",ab20c81b:"3034","92eb680c":"3237","648da1d6":"3252",dd91932d:"3390",ca6a331c:"3447",e608a504:"3475","1b230c4a":"3478","45feece6":"3528","89ed217f":"3550",c87d1c69:"3808",fb616737:"3836","113c0dd8":"4050","330e30f5":"4118",b4a9a523:"4125",f9ba7792:"4182","4068f0a6":"4233",d1a74dcb:"4294",e905c878:"4484",afe173de:"4540",c9bc15ce:"4562","1beee53b":"4619","60cb719f":"4635","94dcbfb9":"4677",fad730dd:"4725",e0ba4816:"4747",af3a605f:"4793",cc66e58d:"5018","5a34e8f9":"5042",d1054a3a:"5102",b9d84b81:"5201","8cd2f0a4":"5258","910fbb55":"5268",b259bfc1:"5304","226dbe39":"5416","5fd8532d":"5472","9a52152c":"5479","4a647785":"5867",c19223bd:"6022","6966e037":"6140",d8162897:"6150","1b6f9fda":"6191","846014d2":"6222","6dd24bf9":"6307",cf9585e6:"6334","024bc438":"6386","410c295d":"6387","1ba18601":"6460","375f1701":"6499","2c8ab43a":"6514","3f288e15":"6581","01bd961c":"6698",cfe05902:"6800","56fb90ba":"6836","1be81d58":"6978",c681b06a:"7000","975e467a":"7065",d4326251:"7119","924c636b":"7123","134230c6":"7190",a6ccfe49:"7275","7bc30529":"7352",b5609165:"7397","5be00d71":"7521","37d3db62":"7546","1a2fd9d8":"7550","36f4a15c":"7721","903e5e02":"7737","46f9cbc9":"7741","6f350fc5":"7764","1a4e3797":"7920",b5a454ea:"7983",aaf1b65f:"8082",e46f0ca9:"8196",a4f80ad1:"8291","705b95b0":"8310",a559ca64:"8390","39a94233":"8410",b25d0325:"8543",e5c96028:"8596",fea7c907:"8631","654563db":"8696","81fda216":"8720","19f55b03":"8748",f1fd2cd3:"8815",b4136fed:"8944","8e1054ea":"8954","74f4111c":"9010","087ed877":"9014","418a754b":"9027","2ccdad1d":"9029","447a19c8":"9068","8a698c1d":"9106","6178cc59":"9135",ef9e2451:"9223","362f2db1":"9287","31e1d26f":"9288",eddcb29b:"9383","803134f2":"9388","369fe942":"9418","7be9c9ae":"9510","1be78505":"9514",b22c5021:"9545",c3cf1b9a:"9619","0e384e19":"9671","3fa7d874":"9700",bdd9fc2c:"9733","8572da77":"9740","14eb3368":"9817","4a896f29":"9833"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)d.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((d,b)=>f=e[a]=[d,b]));d.push(f[2]=b);var c=r.p+r.u(a),t=new Error;r.l(c,(d=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var b=d&&("load"===d.type?"missing":d.type),c=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+c+")",t.name="ChunkLoadError",t.type=b,t.request=c,f[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var f,b,c=d[0],t=d[1],o=d[2],n=0;if(c.some((a=>0!==e[a]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(a&&a(d);n<c.length;n++)b=c[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},d=self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();