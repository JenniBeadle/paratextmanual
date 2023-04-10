"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[3039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"10. CR - Cross-references",pagination_next:null,sidebar_position:13},s=void 0,i={unversionedId:"Admin-Manual/CR",id:"Admin-Manual/CR",title:"10. CR - Cross-references",description:"Introduction",source:"@site/docs/Admin-Manual/10.CR.md",sourceDirName:"Admin-Manual",slug:"/Admin-Manual/CR",permalink:"/ml/next/Admin-Manual/CR",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/docs/Admin-Manual/10.CR.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"10. CR - Cross-references",pagination_next:null,sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"9. CV - Convert project",permalink:"/ml/next/Admin-Manual/CV"}},l={},c=[{value:"10.1 Extract the references from the model text",id:"101-extract-the-references-from-the-model-text",level:2},{value:"10.2 Check your scripture reference settings",id:"102-check-your-scripture-reference-settings",level:2},{value:"10.3 Check your Language Settings",id:"103-check-your-language-settings",level:2},{value:"10.4 Insert Cross-references",id:"104-insert-cross-references",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Introduction"),(0,a.kt)("br",{parentName:"p"}),"\n","Most languages do not have access to concordances or other Bible study materials in their own languages. Adding cross references to your New Testament can greatly help your reader understand the text by helping your reader find passages on similar themes. There are several lists available (with thousands of cross-references). Some lists can be exported from a model text and then inserted at once."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before you start"),(0,a.kt)("br",{parentName:"p"}),"\n","Before you can insert cross-references from a model text your administrator must have created all the books (and chapters and verses) in your project. They can be empty but they must be present."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why is this important"),(0,a.kt)("br",{parentName:"p"}),"\n","Reading the New Testament is not like reading a novel. Having access to cross-references allows your reader to find similar passages. Nevertheless, adding cross-references one by one is too tedious. The ",(0,a.kt)("strong",{parentName:"p"},"Insert cross-reference")," feature allows you to insert all of the cross-references at once and also converts the book names and punctuation to match your ",(0,a.kt)("strong",{parentName:"p"},"Scripture reference settings"),". Extracting cross-references from a model text allows you to easily insert the same cross-references."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What are you going to do?"),(0,a.kt)("br",{parentName:"p"}),"\n","We are going to do three things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"export the cross-reference from a model text;"),(0,a.kt)("li",{parentName:"ol"},"make sure all the settings for book names and scripture references have been entered for your project;"),(0,a.kt)("li",{parentName:"ol"},"insert the cross-references.")),(0,a.kt)("p",null,"If you don't have a model text with the desired cross-reference, you can create your own list and import it."),(0,a.kt)("h2",{id:"101-extract-the-references-from-the-model-text"},"10.1 Extract the references from the model text"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the model text."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u2261 Project")," under ",(0,a.kt)("strong",{parentName:"li"},"Advanced"),", choose ",(0,a.kt)("strong",{parentName:"li"},"Extract cross-references")),(0,a.kt)("li",{parentName:"ol"},"Type a file name"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),".",(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Note: Some Resource texts may not allow you to extract cross-references.")))),(0,a.kt)("h2",{id:"102-check-your-scripture-reference-settings"},"10.2 Check your scripture reference settings"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u2261 Tab")," under ",(0,a.kt)("strong",{parentName:"li"},"Project"),", select ",(0,a.kt)("strong",{parentName:"li"},"Project Properties")," > ",(0,a.kt)("strong",{parentName:"li"},"Scripture Reference Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Verify that the following have been correctly defined for your project (edit them if necessary).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The punctuation on the ",(0,a.kt)("strong",{parentName:"li"},"Reference Format")," tab."),(0,a.kt)("li",{parentName:"ul"},"The book abbreviations on the ",(0,a.kt)("strong",{parentName:"li"},"Book Names")," tab."))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),".")),(0,a.kt)("h2",{id:"103-check-your-language-settings"},"10.3 Check your Language Settings"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u2261 Tab")," under ",(0,a.kt)("strong",{parentName:"li"},"Project"),", select ",(0,a.kt)("strong",{parentName:"li"},"Project Properties"),"  ",(0,a.kt)("strong",{parentName:"li"},"Language Settings")," \u2026"),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Other Characters")," tab."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Verse segment characters")," box, enter at least six different characters separated by spaces."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),".")),(0,a.kt)("h5",{id:""}),(0,a.kt)("h2",{id:"104-insert-cross-references"},"10.4 Insert Cross-references"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u2261 Tab")," under ",(0,a.kt)("strong",{parentName:"li"},"Project")," menu, point to ",(0,a.kt)("strong",{parentName:"li"},"Advanced"),", and then select ",(0,a.kt)("strong",{parentName:"li"},"Insert Cross References"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Browse"),"..."),(0,a.kt)("li",{parentName:"ol"},"Find the .xrf file of extracted cross-references."),(0,a.kt)("li",{parentName:"ol"},"Select the file, and click ",(0,a.kt)("strong",{parentName:"li"},"Open"),"."),(0,a.kt)("li",{parentName:"ol"},"If desired, select one or more of the options:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(see the guide for more info)"))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"}," If the Copyright box displays a copyright notice or required statement of acknowledgements, copy the text, and then paste it wherever you keep this kind of information for the project.")))))}u.isMDXComponent=!0}}]);