"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[3989],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},A="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),A=p(r),g=n,d=A["".concat(s,".").concat(g)]||A[g]||u[g]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[A]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"17. Interlinearize a project"},i=void 0,l={unversionedId:"Training-Manual/Stage-3/BT2",id:"Training-Manual/Stage-3/BT2",title:"17. Interlinearize a project",description:"Introduction",source:"@site/docs/Training-Manual/04-Stage-3/17.BT2.md",sourceDirName:"Training-Manual/04-Stage-3",slug:"/Training-Manual/Stage-3/BT2",permalink:"/zh-CN/Training-Manual/Stage-3/BT2",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/docs/Training-Manual/04-Stage-3/17.BT2.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"17. Interlinearize a project"},sidebar:"tutorialSidebar",previous:{title:"16. Draft a Back Translation",permalink:"/zh-CN/Training-Manual/Stage-3/BT1"},next:{title:"18. Compare Text",permalink:"/zh-CN/Training-Manual/Stage-3/CT"}},s={},p=[{value:"17.1 Configure the project interlinearizer",id:"171-configure-the-project-interlinearizer",level:2},{value:"Export glosses to a project",id:"export-glosses-to-a-project",level:3},{value:"17.2 Correct the interlinearized text",id:"172-correct-the-interlinearized-text",level:2},{value:"17.3 Translate/gloss a phrase",id:"173-translategloss-a-phrase",level:2},{value:"17.4 Add extra words",id:"174-add-extra-words",level:2},{value:"17.5 Specify the morphology \u2013 break a word into morphemes",id:"175-specify-the-morphology--break-a-word-into-morphemes",level:2},{value:"17.6 Approve and Export the text",id:"176-approve-and-export-the-text",level:2},{value:"17.7 Help",id:"177-help",level:2}],c={toc:p},A="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(A,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Introduction"),(0,n.kt)("br",{parentName:"p"}),"\n","The previous module explained how to create a back translation that expresses what a reader understands when he reads or hears the text. There is another type of back translation that is sometimes used and that is a word-for-word style back translation. Some consultants may ask for this style of back translation. If you need to make one of these, you can use Paratext\u2019s project Interlinearizer function."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Please note that in Paratext 9 you can only use the Interlinearizer on registered projects.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you start"),(0,n.kt)("br",{parentName:"p"}),"\n","You have typed, checked and revised your translation in Paratext and are now preparing for a consultant check by doing a word-for-word back translation.  If you want to export the interlinear to a separate project, then before you can start, your Administrator must have created a separate auxllary project for your word-for-word back translation. ","[This is separate from the readable back translation in the previous module.]"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Why is this important?"),(0,n.kt)("br",{parentName:"p"}),"\n","Your consultant needs to have a copy of your translation in a language they can understand. The back translation done in the previous module is very useful, but there are times when a literal translation is more helpful."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What you will do"),(0,n.kt)("br",{parentName:"p"}),"\n","You will use the project interlinearizer to produce a word for word gloss of the text. Firstly, you will set up the interlinearizer, and then correct any errors. The computer\u2019s initial guesses are often wrong, but it learns as it goes and becomes quite accurate quickly. The idea is for the gloss to be correct even though the word order is not correct. When you are happy with the verse you can approve the glosses and move to the next verse with unapproved glosses."),(0,n.kt)("h2",{id:"171-configure-the-project-interlinearizer"},"17.1 Configure the project interlinearizer"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click in your project"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,n.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,n.kt)("strong",{parentName:"li"},"Interlinearizer"),(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{src:r(5885).Z,width:"815",height:"265"})),(0,n.kt)("li",{parentName:"ol"},"Click to drop down the list ","[1]","."),(0,n.kt)("li",{parentName:"ol"},"Choose to ",(0,n.kt)("strong",{parentName:"li"},"create glosses based on a model text"),". This is usually your reference text or your free back translation project ","[2]")),(0,n.kt)("h3",{id:"export-glosses-to-a-project"},"Export glosses to a project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If necessary click the lock icon ","[3]"," to unlock the settings."),(0,n.kt)("li",{parentName:"ol"},"Choose your model text ","[4]",".\n",(0,n.kt)("img",{src:r(8551).Z,width:"815",height:"395"})),(0,n.kt)("li",{parentName:"ol"},"Click the checkbox to output glosses to the project that the administrator created"),(0,n.kt)("li",{parentName:"ol"},"Choose the output project created by your administrator\n",(0,n.kt)("img",{src:r(1860).Z,width:"815",height:"452"})),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"))),(0,n.kt)("h2",{id:"172-correct-the-interlinearized-text"},"17.2 Correct the interlinearized text"),(0,n.kt)("p",null,"To correct glosses"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the incorrect gloss",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"A list is displayed"),"."))),(0,n.kt)("li",{parentName:"ol"},"Either click on the correct gloss in the list",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"or type the correct gloss in the textbox")))),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Enter"))),(0,n.kt)("h2",{id:"173-translategloss-a-phrase"},"17.3 Translate/gloss a phrase"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click between two words",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{src:r(4449).Z,width:"129",height:"202"})),(0,n.kt)("li",{parentName:"ol"},"Click the icon ",(0,n.kt)("img",{src:r(8951).Z,width:"16",height:"18"})," ",(0,n.kt)("strong",{parentName:"li"},"Link words")),(0,n.kt)("li",{parentName:"ol"},"Click the red line"),(0,n.kt)("li",{parentName:"ol"},"Type the gloss")),(0,n.kt)("h2",{id:"174-add-extra-words"},"17.4 Add extra words"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click in the space between two glosses"),(0,n.kt)("li",{parentName:"ol"},"Type the extra word(s)")),(0,n.kt)("h2",{id:"175-specify-the-morphology--break-a-word-into-morphemes"},"17.5 Specify the morphology \u2013 break a word into morphemes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the word in the translation line (top line)"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add word parse")," "),(0,n.kt)("li",{parentName:"ol"},"Add ",(0,n.kt)("strong",{parentName:"li"},"spaces")," to separate the morphemes and add ",(0,n.kt)("strong",{parentName:"li"},"+")," prefixes and suffixes (see guide)"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"))),(0,n.kt)("h2",{id:"176-approve-and-export-the-text"},"17.6 Approve and Export the text"),(0,n.kt)("p",null,"When you approve and export the text any remaining red glosses will be approved."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Approve glosses")),(0,n.kt)("li",{parentName:"ol"},"To continue, click ",(0,n.kt)("strong",{parentName:"li"},"Next Unapproved Verse"))),(0,n.kt)("h2",{id:"177-help"},"17.7 Help"),(0,n.kt)("p",null,"For more help on using the Interlinearizer function see the following topics in the Paratext Help:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Introduction to Project Interlinearizer"),(0,n.kt)("li",{parentName:"ol"},"How do I open the Project Interlinearizer?"),(0,n.kt)("li",{parentName:"ol"},"How do I generate an interlinear back translation?"),(0,n.kt)("li",{parentName:"ol"},"How do I create a back translation project with the Interlinearizer?"),(0,n.kt)("li",{parentName:"ol"},"How do I create a text revision/adaptation project with the Interlinearizer?"),(0,n.kt)("li",{parentName:"ol"},"What do the colours of glosses mean in the Interlinearizer?")))}u.isMDXComponent=!0},5885:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/0cdbacaf0e304e0ef379020f2dcaba2f-6aa0abebb2bca9e6149d246ffcbec19c.png"},8951:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},4449:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1860:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/chooseOutput-c63617bcf8c6f6e193565e58c91414ec.png"},8551:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/outputGlosses-50931bd4d67bf9bfa0264e3c7a10c030.png"}}]);