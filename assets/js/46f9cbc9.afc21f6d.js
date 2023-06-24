"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[7741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"What's new - Paratext 9.x",sidebar_position:3},o=void 0,l={unversionedId:"Video-summaries/Whats-new",id:"Video-summaries/Whats-new",title:"What's new - Paratext 9.x",description:"Paratext Live",source:"@site/docs/Video-summaries/00-Whats-new.md",sourceDirName:"Video-summaries",slug:"/Video-summaries/Whats-new",permalink:"/Video-summaries/Whats-new",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/docs/Video-summaries/00-Whats-new.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"What's new - Paratext 9.x",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Video Summaries by Features",permalink:"/Video-summaries/list-of-videos"},next:{title:"Introduction",permalink:"/category/introduction"}},s={},p=[{value:"Paratext Live",id:"paratext-live",level:3},{value:"Study Bible Additions",id:"study-bible-additions",level:3},{value:"Scripture reference in navigation bar",id:"scripture-reference-in-navigation-bar",level:3},{value:"Parallel Passages Tool",id:"parallel-passages-tool",level:3},{value:"Open a text collection",id:"open-a-text-collection",level:3},{value:"Arranging windows",id:"arranging-windows",level:3},{value:"Floating Windows",id:"floating-windows",level:3},{value:"Other new/changed",id:"other-newchanged",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"paratext-live"},"Paratext Live"),(0,r.kt)("p",null,"Paratext Live uses a couple of servers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Paratext 8, 9.0 and 9.1 use a server called Internet (secondary) WCF and Paratext 9.2 uses Internet (primary) AMQP.  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"This is why you can't use Paratext Live with 9.2 and 9.1 at the same time")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Paratext 9.3 when you start Paratext live you choose what server you want to use."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Internet (primary)"),", which is 9.2 and 9.3."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Internet (secondary)")," which is 9.0, 9.1 or Paratext\xa08.  ")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Everyone in a particular live session still needs to use the same server, it is just that from 9.3 you can work with someone on 9.1 or someone else on 9.2 (just not at the same time)")),(0,r.kt)("h3",{id:"study-bible-additions"},"Study Bible Additions"),(0,r.kt)("p",null,"The most obvious new feature the ability to ",(0,r.kt)("strong",{parentName:"p"},"compare versions"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open a Study Bible Additions project"),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Project")," menu, "),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Project"),", choose ",(0,r.kt)("strong",{parentName:"li"},"Compare Versions"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The changes in the additions are displayed"),".")))),(0,r.kt)("h3",{id:"scripture-reference-in-navigation-bar"},"Scripture reference in navigation bar"),(0,r.kt)("p",null,"In Paratext 9.3 you can copy and paste a scripture reference into the navigation bar."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the text of a reference (from another file)"),(0,r.kt)("li",{parentName:"ol"},"Click in the ",(0,r.kt)("strong",{parentName:"li"},"book name")," in the navigation bar"),(0,r.kt)("li",{parentName:"ol"},"Paste using ",(0,r.kt)("strong",{parentName:"li"},"Ctrl+V"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{src:a(8990).Z,width:"480",height:"246"}))),(0,r.kt)("p",null,"The reference should be in a format that matches the interface language."),(0,r.kt)("p",null,"For example, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in English: MAT 12.3, Mrk 5:4, Galatians 1:12"),(0,r.kt)("li",{parentName:"ul"},"in Spanish: Romanos 8:28")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The names must matches the names as they are seen in the titles.  ")),(0,r.kt)("h3",{id:"parallel-passages-tool"},"Parallel Passages Tool"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The colours have changed from ",(0,r.kt)("strong",{parentName:"li"},"green")," to ",(0,r.kt)("strong",{parentName:"li"},"grey")),(0,r.kt)("li",{parentName:"ol"},"You can reduce or expand the Greek / Hebrew by clicking the little arrow.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{src:a(3477).Z,width:"480",height:"485"}))),(0,r.kt)("h3",{id:"open-a-text-collection"},"Open a text collection"),(0,r.kt)("p",null,"There is a new menu item on the ",(0,r.kt)("strong",{parentName:"p"},"main menu"),"\n",(0,r.kt)("img",{src:a(19).Z,width:"480",height:"282"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Paratext menu")),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"Open text collection"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"This window looks like what was used in earlier versions of Paratext"),"."))),(0,r.kt)("li",{parentName:"ol"},"Open a previously ",(0,r.kt)("strong",{parentName:"li"},"saved text collection")," from the bottom left"),(0,r.kt)("li",{parentName:"ol"},"You can still open a text collection from the ",(0,r.kt)("strong",{parentName:"li"},"Open")," window as well.")),(0,r.kt)("h3",{id:"arranging-windows"},"Arranging windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arrange windows by ",(0,r.kt)("strong",{parentName:"li"},"rows")," as well as by ",(0,r.kt)("strong",{parentName:"li"},"columns"),".\n",(0,r.kt)("img",{src:a(7734).Z,width:"480",height:"269"}),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Remember to save your layout!")))),(0,r.kt)("h3",{id:"floating-windows"},"Floating Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dropdown to change the active project",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{src:a(8252).Z,width:"480",height:"309"}))),(0,r.kt)("h3",{id:"other-newchanged"},"Other new/changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RegEx Pal")," - from Main menu ",">"," Advanced or Project menu ",">"," Advanced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Synchronizing")," with Logos and other compatible programs is now turned ",(0,r.kt)("strong",{parentName:"li"},"on by default")),(0,r.kt)("li",{parentName:"ul"},"Changes have been made to help with the localization of the help files and the user interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bible modules")," can now handle ",(0,r.kt)("strong",{parentName:"li"},"chapter markers")," in the extra books")))}u.isMDXComponent=!0},7734:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arrange-in-rows-cf2078b54e77ecddc93f6e745e4ad436.png"},8252:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change-project-or-resource-1518809ba9ef7b5bf22c0597b7238d84.png"},19:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-text-collection-menu-item-2-c7eb9eb000a77f0ea62e2debef8eea15.png"},3477:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parallel-passage-greek-collapse-67785cba35a1de82e19a22278edc2181.png"},8990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/paste-reference-2-3b865c74de813755412654769dda8ff9.png"}}]);