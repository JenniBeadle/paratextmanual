"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[52],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Punctuation Inventory (1A.7b)"},i=void 0,u={unversionedId:"Video-summaries/Checking-tools/1A.7b",id:"version-9.2/Video-summaries/Checking-tools/1A.7b",title:"Punctuation Inventory (1A.7b)",description:"In this video we will learn how to tell Paratext which uses of punctuation marks that it has found in the text are valid and which are invalid. This set-up task is required for the Punctuation Check.",source:"@site/versioned_docs/version-9.2/Video-summaries/Checking-tools/1A.7b.md",sourceDirName:"Video-summaries/Checking-tools",slug:"/Video-summaries/Checking-tools/1A.7b",permalink:"/9.2/Video-summaries/Checking-tools/1A.7b",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/versioned_docs/version-9.2/Video-summaries/Checking-tools/1A.7b.md",tags:[],version:"9.2",frontMatter:{title:"Punctuation Inventory (1A.7b)"},sidebar:"tutorialSidebar",previous:{title:"Character Inventory (1A.7a)",permalink:"/9.2/Video-summaries/Checking-tools/1A.7a"},next:{title:"Print a draft (2.4a)",permalink:"/9.2/Video-summaries/Checking-tools/2.4a"}},l={},s=[{value:"To set up the Punctuation check (Administrators)",id:"to-set-up-the-punctuation-check-administrators",level:3},{value:"Change the status of several punctuation patterns at once",id:"change-the-status-of-several-punctuation-patterns-at-once",level:3},{value:"To re-open the Punctuation Inventory",id:"to-re-open-the-punctuation-inventory",level:3},{value:"Show sequences",id:"show-sequences",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this video we will learn how to tell Paratext which uses of punctuation marks that it has found in the text are valid and which are invalid. This set-up task is required for the ",(0,r.kt)("strong",{parentName:"p"},"Punctuation Check"),"."),(0,r.kt)("p",null,"Before Paratext can check that the team has only used punctuation correctly someone needs to tell Paratext what the valid use of punctuation marks is in this project!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We need to inform Paratext not only whether a punctuation mark is a ",(0,r.kt)("strong",{parentName:"li"},"valid")," ",(0,r.kt)("strong",{parentName:"li"},"character")," or not, but what the ",(0,r.kt)("strong",{parentName:"li"},"valid and invalid ways")," of using each one are, in terms of the surrounding words or spaces."),(0,r.kt)("li",{parentName:"ul"},"If Paratext finds a significant proportion of punctuation usage patterns are new and no one has yet marked if they are valid or invalid, the Assignments and Progress dialog will show \u201cSet up Required\u201d next to the check."),(0,r.kt)("li",{parentName:"ul"},"It may be that you deal with all the unknown punctuation patterns in one book and later find you need to deal with a few more when you move on to check the next book.")),(0,r.kt)("h3",{id:"to-set-up-the-punctuation-check-administrators"},"To set up the Punctuation check (Administrators)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click \u201c",(0,r.kt)("strong",{parentName:"li"},"Set Up Required"),"\u201d.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Punctuation Inventory opens.")))),(0,r.kt)("p",null,"Each punctuation pattern is marked as either ",(0,r.kt)("strong",{parentName:"p"},"valid"),", ",(0,r.kt)("strong",{parentName:"p"},"invalid")," or ",(0,r.kt)("strong",{parentName:"p"},"unknown"),"."),(0,r.kt)("p",null,"The same punctuation character will be listed twice if it occurs in two contexts."),(0,r.kt)("p",null,"The underscore character (_) represents a space."),(0,r.kt)("p",null,"With ",(0,r.kt)("strong",{parentName:"p"},"Show Sequences unchecked"),", other punctuation is ignored when the punctuation patterns are analysed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a punctuation pattern."),(0,r.kt)("li",{parentName:"ul"},"Review where it is used"),(0,r.kt)("li",{parentName:"ul"},"Click the relevant button: Valid, Invalid or Unknown.")),(0,r.kt)("h3",{id:"change-the-status-of-several-punctuation-patterns-at-once"},"Change the status of several punctuation patterns at once"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the first character"),(0,r.kt)("li",{parentName:"ul"},"Use shift with your second click.")),(0,r.kt)("p",null,"Sorting and filtering are useful ways to examine the punctuation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To save the changes, click OK.")),(0,r.kt)("p",null,"If sufficient punctuation patterns have been marked as valid or invalid, the Assignments and Progress dialog will now show the number of punctuation issues in the current book."),(0,r.kt)("h5",{id:""}),(0,r.kt)("h3",{id:"to-re-open-the-punctuation-inventory"},"To re-open the Punctuation Inventory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the menu for the project."),(0,r.kt)("li",{parentName:"ul"},"Expand the menu."),(0,r.kt)("li",{parentName:"ul"},"Hover the mouse over Checking Inventories."),(0,r.kt)("li",{parentName:"ul"},"Click Punctuation Inventory.")),(0,r.kt)("h3",{id:"show-sequences"},"Show sequences"),(0,r.kt)("p",null,"It is recommended that you start working on the punctuation inventory with the ",(0,r.kt)("strong",{parentName:"p"},"Show sequences")," box unchecked."))}p.isMDXComponent=!0}}]);