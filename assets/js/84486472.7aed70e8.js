"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[2734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"4. CP - Creating a new project",sidebar_position:7},o=void 0,l={unversionedId:"Admin-Manual/CP",id:"Admin-Manual/CP",title:"4. CP - Creating a new project",description:"Introduction",source:"@site/docs/Admin-Manual/4.CP.md",sourceDirName:"Admin-Manual",slug:"/Admin-Manual/CP",permalink:"/next/Admin-Manual/CP",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/docs/Admin-Manual/4.CP.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"4. CP - Creating a new project",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"3. REGU - User Registration",permalink:"/next/Admin-Manual/REGU"},next:{title:"5. MD - Migrate Paratext 7 Project",permalink:"/next/Admin-Manual/MD"}},p={},s=[{value:"4.1 Create a new project",id:"41-create-a-new-project",level:2},{value:"4.2 Name for the project",id:"42-name-for-the-project",level:2},{value:"4.3 Specify language",id:"43-specify-language",level:2},{value:"4.4 Type of project",id:"44-type-of-project",level:2},{value:"4.5 Register the new project",id:"45-register-the-new-project",level:2},{value:"4.6 Editing your registration",id:"46-editing-your-registration",level:2}],m={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Introduction"),(0,r.kt)("br",{parentName:"p"}),"\n","In this module, you will create and register a new project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you can start"),(0,r.kt)("br",{parentName:"p"}),"\n","You need to have already installed Paratext and registered a user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why is this Important"),(0,r.kt)("br",{parentName:"p"}),"\n","A new aspect in Paratext\xa09 is that projects need to be registered as well as users. This may feel like an extra complication, but it does offer benefits to users."),(0,r.kt)("p",null,"As we saw in the user registration section, the project administrator can create registrations for users they want to be part of their project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What are you going to do?"),(0,r.kt)("br",{parentName:"p"}),"\n","We will create and register a new project."),(0,r.kt)("h2",{id:"41-create-a-new-project"},"4.1 Create a new project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"File"),"  ",(0,r.kt)("strong",{parentName:"li"},"New Project"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The New project dialog is displayed."),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{alt:"media/image14.png",src:a(7171).Z,width:"585",height:"597"}))))),(0,r.kt)("h2",{id:"42-name-for-the-project"},"4.2 Name for the project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Edit")," button",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The \u201cedit name\u201d dialog is displayed"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{alt:"media/image16.png",src:a(45813).Z,width:"365",height:"286"}),"  "))),(0,r.kt)("li",{parentName:"ol"},"In the name section, under Full name, type a name which includes the name of the language."),(0,r.kt)("li",{parentName:"ol"},"Under short name enter the ",(0,r.kt)("strong",{parentName:"li"},"ISO")," code for the language.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," The ISO code is the preferred short name for the DBL.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Once you create a project name, ",(0,r.kt)("strong",{parentName:"p"},"the short name cannot be changed,")," because this is the name Paratext will give to the folder containing the project files, and also the name given to the project on the Internet server. (",(0,r.kt)("strong",{parentName:"p"},"If you  need to change the name, you can convert the project to a new project with a different short name.")," But it can take many hours to convert a project.)")),(0,r.kt)("h2",{id:"43-specify-language"},"4.3 Specify language"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you have another Paratext project in the same language, you can just pick the language from the list in Paratext ",(0,r.kt)("strong",{parentName:"li"},"[2]"),". If not, you will need to create a new language."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"New"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The Choose language identifier box is displayed."),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{alt:"media/image18.png",src:a(93155).Z,width:"364",height:"442"}),"  "))),(0,r.kt)("li",{parentName:"ol"},"Click in the ",(0,r.kt)("strong",{parentName:"li"},"Search")," box"),(0,r.kt)("li",{parentName:"ol"},"Start typing the name of your language",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Paratext will display matching names.")))),(0,r.kt)("li",{parentName:"ol"},"Click on your language in the list.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Paratext will add the language name.")))),(0,r.kt)("li",{parentName:"ol"},"Fill in the advanced fields if necessary."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," You can also specify additional information if needed in the \u201cadvanced\u201d section of the language settings dialog.")),(0,r.kt)("h2",{id:"44-type-of-project"},"4.4 Type of project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the drop-down list beside \u201c",(0,r.kt)("strong",{parentName:"li"},"Type of Project"),"\u201d"),(0,r.kt)("li",{parentName:"ol"},"Choose the appropriate type for your project.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"If it is a back translation, or a daughter or transliteration project, you will need to define the source or base text."))))),(0,r.kt)("h2",{id:"45-register-the-new-project"},"4.5 Register the new project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you have given the project a name and chosen the project type."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Register online")," to go to the registration page"),(0,r.kt)("li",{parentName:"ol"},"Fill in the information (see above)"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Register")," to submit and return to Paratext.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'Paratext should "automagically" detect that the project is now registered,')))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK")," to create the new project.")),(0,r.kt)("p",null,"The types of projects that do not need to be registered separately:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Projects that inherit their inscription from the parent project.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Back translations"),(0,r.kt)("li",{parentName:"ul"},"Transliterations"),(0,r.kt)("li",{parentName:"ul"},"Auxiliary"))),(0,r.kt)("li",{parentName:"ul"},"Consultant notes.")),(0,r.kt)("h5",{id:""}),(0,r.kt)("h2",{id:"46-editing-your-registration"},"4.6 Editing your registration"),(0,r.kt)("p",null,"As you work in your project, you can change your registration information later on."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From Paratext, make sure you are connected to the Internet,"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under  ",(0,r.kt)("strong",{parentName:"li"},"Project"),"  ",(0,r.kt)("strong",{parentName:"li"},"Project Settings"),"  ",(0,r.kt)("strong",{parentName:"li"},"Properties")),(0,r.kt)("li",{parentName:"ol"},"Click the \u201c",(0,r.kt)("strong",{parentName:"li"},"Manage registration"),"\u201d link.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"This will bring up the project registration info and you can edit it. Any project administrator can edit the registration info."))))))}c.isMDXComponent=!0},7171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image14-76dd76994444d8f8cd6919cecb19fd1a.png"},45813:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image16-e638227fe09df6fe683d8680ebbe73e9.png"},93155:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image18-d68dbf2852dd23088be8c008c83e85a4.png"}}]);