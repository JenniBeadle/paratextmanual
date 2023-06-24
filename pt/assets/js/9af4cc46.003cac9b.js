"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[3365],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>c});var t=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},A="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),A=u(a),d=o,c=A["".concat(s,".").concat(d)]||A[d]||m[d]||i;return a?t.createElement(c,n(n({ref:r},p),{},{components:a})):t.createElement(c,n({ref:r},p))}));function c(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[A]="string"==typeof e?e:o,n[1]=l;for(var u=2;u<i;u++)n[u]=a[u];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8102:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=a(7462),o=(a(7294),a(3905));const i={title:"17. Interlinearize um projeto"},n=void 0,l={unversionedId:"Training-Manual/Stage-3/BT2",id:"Training-Manual/Stage-3/BT2",title:"17. Interlinearize um projeto",description:"Introdu\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/Training-Manual/04-Stage-3/17.BT2.md",sourceDirName:"Training-Manual/04-Stage-3",slug:"/Training-Manual/Stage-3/BT2",permalink:"/pt/Training-Manual/Stage-3/BT2",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/docs/Training-Manual/04-Stage-3/17.BT2.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"17. Interlinearize um projeto"},sidebar:"tutorialSidebar",previous:{title:"16. Elaborar uma Retrotradu\xe7\xe3o",permalink:"/pt/Training-Manual/Stage-3/BT1"},next:{title:"18. Comparar Texto",permalink:"/pt/Training-Manual/Stage-3/CT"}},s={},u=[{value:"17.1 Configurar o interlinearizador do projeto",id:"171-configurar-o-interlinearizador-do-projeto",level:2},{value:"17.2 Corrigir o texto interlinearizado",id:"172-corrigir-o-texto-interlinearizado",level:2},{value:"17.3 Traduzir/glossar uma frase",id:"173-traduzirglossar-uma-frase",level:2},{value:"17.4 Adicionar palavras extras",id:"174-adicionar-palavras-extras",level:2},{value:"17.5 Especificar a morfologia - dividir uma palavra em morfemas",id:"175-especificar-a-morfologia---dividir-uma-palavra-em-morfemas",level:2},{value:"17.6 Aprovar e Exportar o texto",id:"176-aprovar-e-exportar-o-texto",level:2},{value:"17.7 Ajuda",id:"177-ajuda",level:2}],p={toc:u},A="wrapper";function m(e){let{components:r,...i}=e;return(0,o.kt)(A,(0,t.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Introdu\xe7\xe3o"),(0,o.kt)("br",{parentName:"p"}),"\n","O m\xf3dulo anterior explicou como criar uma retrotradu\xe7\xe3o que expressa o que um leitor entende quando l\xea ou ouve o texto. H\xe1 outro tipo de retrotradu\xe7\xe3o que \xe0s vezes \xe9 usado, que \xe9 uma retrotradu\xe7\xe3o estilo palavra por palavra. Alguns consultores podem solicitar esse estilo de retrotradu\xe7\xe3o. Se voc\xea precisar fazer uma dessas, pode usar a fun\xe7\xe3o Interlinearizer do projeto no Paratext. :::tip",(0,o.kt)("br",{parentName:"p"}),"\n","Observe que no Paratext 9 voc\xea s\xf3 pode usar o Interlinearizer em projetos registrados.\n:::"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Antes de come\xe7ar"),(0,o.kt)("br",{parentName:"p"}),"\n","Voc\xea digitou, verificou e revisou sua tradu\xe7\xe3o no Paratext e agora est\xe1 se preparando para uma verifica\xe7\xe3o do consultor fazendo uma retrotradu\xe7\xe3o palavra por palavra. Antes de come\xe7ar, seu administrador deve ter criado um projeto separado para sua retrotradu\xe7\xe3o palavra por palavra. ","[Isso \xe9 separado da retrotradu\xe7\xe3o leg\xedvel no m\xf3dulo anterior.]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Por que isso \xe9 importante"),(0,o.kt)("br",{parentName:"p"}),"\n","Seu consultor precisa ter uma c\xf3pia de sua tradu\xe7\xe3o em um idioma que ele possa entender. A retrotradu\xe7\xe3o feita no m\xf3dulo anterior \xe9 muito \xfatil, mas h\xe1 momentos em que uma tradu\xe7\xe3o literal \xe9 mais \xfatil."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"O que voc\xea far\xe1"),(0,o.kt)("br",{parentName:"p"}),"\n","Voc\xea usar\xe1 o interlinearizador do projeto para produzir um gloss\xe1rio palavra por palavra do texto. Primeiramente, voc\xea configurar\xe1 o interlinearizador e, em seguida, corrigir\xe1 quaisquer erros. Os palpites iniciais do computador muitas vezes est\xe3o errados, mas ele aprende \xe0 medida que avan\xe7a e se torna bastante preciso rapidamente. A ideia \xe9 que o gloss\xe1rio esteja correto, mesmo que a ordem das palavras n\xe3o esteja correta. Quando estiver satisfeito com o verso, voc\xea poder\xe1 aprovar os gloss\xe1rios e passar para o pr\xf3ximo verso com gloss\xe1rios n\xe3o aprovados."),(0,o.kt)("h2",{id:"171-configurar-o-interlinearizador-do-projeto"},"17.1 Configurar o interlinearizador do projeto"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique no seu projeto."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u2261 Aba"),", em ",(0,o.kt)("strong",{parentName:"li"},"Ferramentas")," ",">"," ",(0,o.kt)("strong",{parentName:"li"},"Interlinearizer"),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{src:a(1173).Z,width:"815",height:"265"})),(0,o.kt)("li",{parentName:"ol"},"Clique para abrir a lista suspensa ","[1]","."),(0,o.kt)("li",{parentName:"ol"},"Escolha criar gloss\xe1rios com base em um texto modelo. Isso geralmente \xe9 seu texto de refer\xeancia ou seu projeto de retrotradu\xe7\xe3o livre ","[2]","."),(0,o.kt)("li",{parentName:"ol"},"Escolha seu texto modelo ","[3]","."),(0,o.kt)("li",{parentName:"ol"},"Clique em ",(0,o.kt)("strong",{parentName:"li"},"OK"),".")),(0,o.kt)("h2",{id:"172-corrigir-o-texto-interlinearizado"},"17.2 Corrigir o texto interlinearizado"),(0,o.kt)("p",null,"Para corrigir os gloss\xe1rios:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique no gloss\xe1rio incorreto.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Uma lista ser\xe1 exibida"),"."))),(0,o.kt)("li",{parentName:"ol"},"Clique no gloss\xe1rio correto na lista.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"ou digite o gloss\xe1rio correto na caixa de texto"),"."))),(0,o.kt)("li",{parentName:"ol"},"Clique em ",(0,o.kt)("strong",{parentName:"li"},"Enter"),".")),(0,o.kt)("h2",{id:"173-traduzirglossar-uma-frase"},"17.3 Traduzir/glossar uma frase"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique entre duas palavras",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{src:a(9942).Z,width:"129",height:"202"})),(0,o.kt)("li",{parentName:"ol"},"Clique no \xedcone ",(0,o.kt)("img",{src:a(9646).Z,width:"16",height:"18"})," ",(0,o.kt)("strong",{parentName:"li"},"Vincular palavras")),(0,o.kt)("li",{parentName:"ol"},"Clique na linha vermel ha."),(0,o.kt)("li",{parentName:"ol"},"Digite o gloss\xe1rio.")),(0,o.kt)("h2",{id:"174-adicionar-palavras-extras"},"17.4 Adicionar palavras extras"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique no espa\xe7o entre dois gloss\xe1rios."),(0,o.kt)("li",{parentName:"ol"},"Digite a(s) palavra(s) extra(s).")),(0,o.kt)("h2",{id:"175-especificar-a-morfologia---dividir-uma-palavra-em-morfemas"},"17.5 Especificar a morfologia - dividir uma palavra em morfemas"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique na palavra na linha de tradu\xe7\xe3o (linha superior)."),(0,o.kt)("li",{parentName:"ol"},"Clique em ",(0,o.kt)("strong",{parentName:"li"},"Adicionar an\xe1lise de palavra"),"."),(0,o.kt)("li",{parentName:"ol"},"Adicione ",(0,o.kt)("strong",{parentName:"li"},"espa\xe7os")," para separar os morfemas e adicione prefixos e sufixos com ",(0,o.kt)("strong",{parentName:"li"},"+")," (consulte o guia)."),(0,o.kt)("li",{parentName:"ol"},"Clique em ",(0,o.kt)("strong",{parentName:"li"},"OK"),".")),(0,o.kt)("h2",{id:"176-aprovar-e-exportar-o-texto"},"17.6 Aprovar e Exportar o texto"),(0,o.kt)("p",null,"Quando voc\xea aprovar e exportar o texto, quaisquer gloss\xe1rios vermelhos restantes ser\xe3o aprovados."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique em ",(0,o.kt)("strong",{parentName:"li"},"Aprovar gloss\xe1rios"),"."),(0,o.kt)("li",{parentName:"ol"},"Para continuar, clique em ",(0,o.kt)("strong",{parentName:"li"},"Pr\xf3ximo verso n\xe3o aprovado"),".")),(0,o.kt)("h2",{id:"177-ajuda"},"17.7 Ajuda"),(0,o.kt)("p",null,"Para obter mais ajuda sobre o uso da fun\xe7\xe3o Interlinearizer, consulte os seguintes t\xf3picos na Ajuda do Paratext:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Introdu\xe7\xe3o ao Interlinearizer do Projeto"),(0,o.kt)("li",{parentName:"ol"},"Como abrir o Interlinearizer do Projeto?"),(0,o.kt)("li",{parentName:"ol"},"Como gerar uma retrotradu\xe7\xe3o interlinear?"),(0,o.kt)("li",{parentName:"ol"},"Como criar um projeto de retrotradu\xe7\xe3o com o Interlinearizer?"),(0,o.kt)("li",{parentName:"ol"},"Como criar um projeto de revis\xe3o/adapta\xe7\xe3o de texto com o Interlinearizer?"),(0,o.kt)("li",{parentName:"ol"},"O que significam as cores dos gloss\xe1rios no Interlinearizer?")))}m.isMDXComponent=!0},1173:(e,r,a)=>{a.d(r,{Z:()=>t});const t=a.p+"assets/images/0cdbacaf0e304e0ef379020f2dcaba2f-6aa0abebb2bca9e6149d246ffcbec19c.png"},9646:(e,r,a)=>{a.d(r,{Z:()=>t});const t="data:image/png;base64,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"},9942:(e,r,a)=>{a.d(r,{Z:()=>t});const t="data:image/png;base64,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"}}]);