"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[100],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||a;return o?r.createElement(u,i(i({ref:t},s),{},{components:o})):r.createElement(u,i({ref:t},s))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},15856:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={title:"9. CV - Convert project",sidebar_position:12},i=void 0,l={unversionedId:"Admin-Manual/CV",id:"Admin-Manual/CV",title:"9. CV - Convert project",description:"Introduction",source:"@site/docs/Admin-Manual/9.CV.md",sourceDirName:"Admin-Manual",slug:"/Admin-Manual/CV",permalink:"/id/next/Admin-Manual/CV",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/docs/Admin-Manual/9.CV.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"9. CV - Convert project",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"8. SPS - Setting up a project for success",permalink:"/id/next/Admin-Manual/SPS"},next:{title:"10. CR - Cross-references",permalink:"/id/next/Admin-Manual/CR"}},p={},c=[{value:"9.1 The convert project dialog",id:"91-the-convert-project-dialog",level:2},{value:"Changing the short name of the project",id:"changing-the-short-name-of-the-project",level:3},{value:"Removing deleted files from the project history",id:"removing-deleted-files-from-the-project-history",level:3},{value:"Clean up Paratext Live history",id:"clean-up-paratext-live-history",level:3},{value:"Convert encoding to 65001 \u2013 Unicode (UTF8)",id:"convert-encoding-to-65001--unicode-utf8",level:3},{value:"Normalising \u2013 composed or decomposed",id:"normalising--composed-or-decomposed",level:3},{value:"Replacing old User names",id:"replacing-old-user-names",level:3},{value:"9.2 Convert the project",id:"92-convert-the-project",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Introduction"),(0,n.kt)("br",{parentName:"p"}),"\n","If you have ever needed to rename your project, reduce the size of your project, change user names, change the encoding or struggled with composed/decomposed diacritics, then the convert project tool will help you solve these problems."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you Start"),(0,n.kt)("br",{parentName:"p"}),"\n","You must be the administrator of the project to do these conversions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Why is this Important"),(0,n.kt)("br",{parentName:"p"}),"\n","Although, it is possible to make some changes to existing projects through the project and setting dialogs, several major changes require that a new project is created. Using the convert project dialog allows the new project to keep the project history."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What are you going to do?"),(0,n.kt)("br",{parentName:"p"}),"\n","We will work through the six changes that can be made to your project."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Changing the short name of the project"),(0,n.kt)("li",{parentName:"ol"},"Removing deleted files from the project history"),(0,n.kt)("li",{parentName:"ol"},"Clean up Paratext Live history"),(0,n.kt)("li",{parentName:"ol"},"Convert encoding to 65001 \u2013 Unicode (UTF8)"),(0,n.kt)("li",{parentName:"ol"},"Normalising \u2013 composed or decomposed"),(0,n.kt)("li",{parentName:"ol"},"Replacing old User names")),(0,n.kt)("h2",{id:"91-the-convert-project-dialog"},"9.1 The convert project dialog"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the  ",(0,n.kt)("strong",{parentName:"li"},"\u2261 Project"),", under ",(0,n.kt)("strong",{parentName:"li"},"Project"),", choose ",(0,n.kt)("strong",{parentName:"li"},"Advanced"),", then ",(0,n.kt)("strong",{parentName:"li"},"Convert Project"))),(0,n.kt)("h3",{id:"changing-the-short-name-of-the-project"},"Changing the short name of the project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Confirm that the old name of the project is correct. (If not, close the dialogue and click in the correct project window, and access the dialog again.)"),(0,n.kt)("li",{parentName:"ol"},"Enter the new short name for the project in ",(0,n.kt)("strong",{parentName:"li"},"[1]"),".")),(0,n.kt)("h3",{id:"removing-deleted-files-from-the-project-history"},"Removing deleted files from the project history"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[2]")," Select this if you have deleted files (such as large illustration files) that you no longer want to be part of project history and no longer want in the project repository.")),(0,n.kt)("h3",{id:"clean-up-paratext-live-history"},"Clean up Paratext Live history"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[3]")," Select this if you have edited the project with Paratext Live and want to replace names in the project history.")),(0,n.kt)("h3",{id:"convert-encoding-to-65001--unicode-utf8"},"Convert encoding to 65001 \u2013 Unicode (UTF8)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[4]")," Select this to convert a standard project encoding to Unicode.")),(0,n.kt)("h3",{id:"normalising--composed-or-decomposed"},"Normalising \u2013 composed or decomposed"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[5]")," Select Composed (NFC) or one of the options in the drop-down list if the data in your project was created using a mix of composed and decomposed characters. (See the Guide for more details.)")),(0,n.kt)("h3",{id:"replacing-old-user-names"},"Replacing old User names"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[6]")," Select the name of the user you want to replace from the drop-down list."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[7]")," Enter the name of a registered Paratext user in this box."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[8]")," Click ",(0,n.kt)("strong",{parentName:"li"},"Add"),",",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},'A summary of the replacement appears, with a "Remove" button.'),(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{alt:"media/image35.png",src:o(42096).Z,width:"553",height:"63"}),"  "))),(0,n.kt)("li",{parentName:"ol"},'(Click Remove if you either made a mistake in typing the name in the "With" field OR decide not to make the replacement.)')),(0,n.kt)("h2",{id:"92-convert-the-project"},"9.2 Convert the project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[9]")," Click ",(0,n.kt)("strong",{parentName:"li"},"OK")," to convert the project.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"See the note in the guide regarding shared projects.")))}m.isMDXComponent=!0},42096:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/image35-4121d8e22218629b1e8d4f966bbdde9e.png"}}]);