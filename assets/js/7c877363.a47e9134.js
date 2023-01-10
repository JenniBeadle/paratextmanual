"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[8001],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,h=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},64282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Creating a Study Bible"},o=void 0,l={unversionedId:"Training-Manual/Stage-6/StudyBibles",id:"version-9.2/Training-Manual/Stage-6/StudyBibles",title:"Creating a Study Bible",description:"Introduction",source:"@site/versioned_docs/version-9.2/Training-Manual/07-Stage-6/25.StudyBibles.md",sourceDirName:"Training-Manual/07-Stage-6",slug:"/Training-Manual/Stage-6/StudyBibles",permalink:"/9.2/Training-Manual/Stage-6/StudyBibles",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/versioned_docs/version-9.2/Training-Manual/07-Stage-6/25.StudyBibles.md",tags:[],version:"9.2",sidebarPosition:25,frontMatter:{title:"Creating a Study Bible"},sidebar:"tutorialSidebar",previous:{title:"24. Finalising for Publication \u2013 New Testament",permalink:"/9.2/Training-Manual/Stage-6/FFP"},next:{title:"Appendix",permalink:"/9.2/category/appendix"}},p={},d=[{value:"Create a Study Bible Additions project",id:"create-a-study-bible-additions-project",level:2},{value:"Add the additional material",id:"add-the-additional-material",level:2},{value:"Introductory material",id:"introductory-material",level:3},{value:"Sidebar text",id:"sidebar-text",level:3},{value:"Extended cross-reference",id:"extended-cross-reference",level:3},{value:"Extended footnote",id:"extended-footnote",level:3},{value:"Hide non-scriptural material",id:"hide-non-scriptural-material",level:2},{value:"Merge the projects to create a publication project.",id:"merge-the-projects-to-create-a-publication-project",level:2},{value:"Making changes",id:"making-changes",level:3},{value:"Printing the Study Bible with PTXPrint",id:"printing-the-study-bible-with-ptxprint",level:3}],u={toc:d};function s(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Introduction"),(0,n.kt)("br",{parentName:"p"}),"\n","With Paratext 9.2 (and above) you can create a study Bible based on your translation by adding introductory paragraphs, sidebars and detailed footnotes and additional cross-references to help your user have a deeper understanding of the Bible text."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Where are you in the process?"),(0,n.kt)("br",{parentName:"p"}),"\n","Before you can create a study Bible, you will want to translate and consultant check your New Testament (or portions). Then your administrator can create a new project (see below)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Why is this important?"),(0,n.kt)("br",{parentName:"p"}),"\n","Study Bible information is created in a separate project with links to the translated text. If the translated text changes, the link can be broken. Links can be fixed, but it is less likely to be a problem if the text is stable."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What will you do?"),(0,n.kt)("br",{parentName:"p"}),"\n","You (or your administrator) will create a ",(0,n.kt)("strong",{parentName:"p"},"Study Bible Additions project"),". As the name suggests, this is where you can add the study materials (without affecting your translation)."),(0,n.kt)("p",null,"This separate project contains a read-only copy of your project and your additional text. When you are ready, you can merge the Study Bible Additions project with your translation project into a third project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new project of Study Bible Additions based on your translation"),(0,n.kt)("li",{parentName:"ul"},"Register the new project"),(0,n.kt)("li",{parentName:"ul"},"Add the additional material (introductions, sidebars, footnotes and cross-references)"),(0,n.kt)("li",{parentName:"ul"},"Hide any non-biblical text in the base translation (e.g. headings)"),(0,n.kt)("li",{parentName:"ul"},"Merge the projects to create a publication project.")),(0,n.kt)("h2",{id:"create-a-study-bible-additions-project"},"Create a Study Bible Additions project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the Paratext menu to create a new project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set the type of project to Study Bible Additions (Annexe de la Bible d\u2019\xe9tude)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose your translation project for the \u201cbased on\u201d project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You will need to register the new project.",(0,n.kt)("br",{parentName:"p"}),"\n","",(0,n.kt)("em",{parentName:"p"},"A grey-out read-only copy of your project is displayed, with a toolbar at the top.")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(82564).Z,width:"977",height:"62"})))),(0,n.kt)("h2",{id:"add-the-additional-material"},"Add the additional material"),(0,n.kt)("h3",{id:"introductory-material"},"Introductory material"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Position your cursor where you would like the additional material"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add +")," on the toolbar"),(0,n.kt)("li",{parentName:"ul"},"A blue box with an ","\\","ip is added."),(0,n.kt)("li",{parentName:"ul"},"Type the text.")),(0,n.kt)("h3",{id:"sidebar-text"},"Sidebar text"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Position your cursor where you would like additional material"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("strong",{parentName:"li"},"\\","esb")," on the toolbar"),(0,n.kt)("li",{parentName:"ul"},"A sidebar panel is opened with a ","\\","ms marker added"),(0,n.kt)("li",{parentName:"ul"},"Type the title after the ","\\","ms marker"),(0,n.kt)("li",{parentName:"ul"},"Press Enter"),(0,n.kt)("li",{parentName:"ul"},"Choose a marker for the following text."),(0,n.kt)("li",{parentName:"ul"},"Type the text."),(0,n.kt)("li",{parentName:"ul"},"Continue as needed.")),(0,n.kt)("h3",{id:"extended-cross-reference"},"Extended cross-reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Position your cursor where you would like the cross-reference caller"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("strong",{parentName:"li"},"\\","ex")," on the toolbar"),(0,n.kt)("li",{parentName:"ul"},"A footnote panel is opened with a ","\\","ex markers added"),(0,n.kt)("li",{parentName:"ul"},"Type in the cross-reference.")),(0,n.kt)("h3",{id:"extended-footnote"},"Extended footnote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Position your cursor where you would like the additional footnote"),(0,n.kt)("li",{parentName:"ul"},"click ",(0,n.kt)("strong",{parentName:"li"},"\\","ef")," on the toolbar"),(0,n.kt)("li",{parentName:"ul"},"A footnote panel is opened with the appropriate ","\\","ef markers"),(0,n.kt)("li",{parentName:"ul"},"Add footnotes as needed.")),(0,n.kt)("h2",{id:"hide-non-scriptural-material"},"Hide non-scriptural material"),(0,n.kt)("p",null,"You can hide non-scriptural material such as headings from the translation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Position your cursor where you would like the additional footnote"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Hide")," on the toolbar"),(0,n.kt)("li",{parentName:"ul"},"The text is displayed in a greyed-out box.")),(0,n.kt)("h2",{id:"merge-the-projects-to-create-a-publication-project"},"Merge the projects to create a publication project."),(0,n.kt)("p",null,"To publish the study Bible, you need to create a publication project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the Project menu")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose \u201cCreate merged publication project\u201d"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(35514).Z,width:"798",height:"281"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the drop-down list \u201cMerged publication project\u201d.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a new project or choose a previous project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),(0,n.kt)("br",{parentName:"p"}),"\n","",(0,n.kt)("em",{parentName:"p"},"Paratext merges the translation project and the Bible Study Additions project and displayed the Merged publication project."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If necessary change the view to Preview."))),(0,n.kt)("h3",{id:"making-changes"},"Making changes"),(0,n.kt)("p",null,"You now have three projects."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your original translation project,"),(0,n.kt)("li",{parentName:"ul"},"The Bible Study Additions project and"),(0,n.kt)("li",{parentName:"ul"},"The Merged publication project.")),(0,n.kt)("p",null,"The merged publication project is read-only and cannot be changed."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Any corrections to the translation")," should be made to the original translation project. These corrections will be updated in the Bible Study Additions project when you next recreate the merge publication project."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Any corrections to the Bible study material")," should be made in the Bible Study Additions project."),(0,n.kt)("p",null,"To update the changes, create the merged publication project again."),(0,n.kt)("h3",{id:"printing-the-study-bible-with-ptxprint"},"Printing the Study Bible with PTXPrint"),(0,n.kt)("p",null,"Version 2.1.x (and above) of PTXPrint can print the merged publication project."),(0,n.kt)("p",null,"For detailed instructions see ",(0,n.kt)("a",{parentName:"p",href:"https://software.sil.org/ptxprint/how-to-study-bible-layout/"},"https://software.sil.org/ptxprint/how-to-study-bible-layout/")))}s.isMDXComponent=!0},82564:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/8671bb469453dc88a90bc9ea7889d114-dc84ab538beb8f394ac5f2f21b73157b.png"},35514:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c2532d37aae74e992a95d26c8725c242-0ff80a0afbaa8c0ae115ffd00a2f5533.png"}}]);