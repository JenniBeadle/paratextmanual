"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[8710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,d=c["".concat(p,".").concat(g)]||c[g]||u[g]||o;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},98048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"5. MD - Migrate Paratext 7 Project",sidebar_position:8},i=void 0,l={unversionedId:"Admin-Manual/MD",id:"Admin-Manual/MD",title:"5. MD - Migrate Paratext 7 Project",description:"Migration is only necessary for Paratext\xa07 projects.",source:"@site/docs/Admin-Manual/5.MD.md",sourceDirName:"Admin-Manual",slug:"/Admin-Manual/MD",permalink:"/zh-TW/next/Admin-Manual/MD",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/docs/Admin-Manual/5.MD.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"5. MD - Migrate Paratext 7 Project",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"4. CP - Creating a new project",permalink:"/zh-TW/next/Admin-Manual/CP"},next:{title:"6. IR - Installing Resources",permalink:"/zh-TW/next/Admin-Manual/IR"}},p={},s=[{value:"5.1 Prepare a project Paratext\xa07 for migration",id:"51-prepare-a-project-paratext7-for-migration",level:2},{value:"5.2 Register project",id:"52-register-project",level:2},{value:"5.3 Complete migration",id:"53-complete-migration",level:2},{value:"Send/receive warning?",id:"sendreceive-warning",level:3},{value:"Additional Project settings",id:"additional-project-settings",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Migration is only necessary for Paratext\xa07 projects.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Introduction"),(0,n.kt)("br",{parentName:"p"}),"\n","Migration is the process of moving a project (including all settings files) from ",(0,n.kt)("strong",{parentName:"p"},"Paratext\xa07")," to Paratext\xa08 (and then opened in Paratext\xa09). Paratext\xa08 projects can be read in Paratext\xa09 without migration. Since Paratext\xa09 does not have a migration feature, any remaining Paratext\xa07 projects will need to be ",(0,n.kt)("strong",{parentName:"p"},"migrated to Paratext\xa08 first"),".  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you start"),(0,n.kt)("br",{parentName:"p"}),"\n",'The Paratext\xa07 project must be in the "My Paratext Projects" folder.  You also need to have installed ',(0,n.kt)("strong",{parentName:"p"},"Paratext\xa08."),"   The administrator must have all the data (that is, the authoritative copy of the project). If needed, make sure all team members have done a send/receive (by USB stick). Repeat the process twice to ensure all the team's data has been incorporated. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Why is this Important?"),(0,n.kt)("br",{parentName:"p"}),"\n","The Paratext\xa07 server was closed down several years ago, so no Paratext\xa07 project is being backed up on the server. Also in order to get the full functionality of Paratext\xa09 your data needs to be migrated. As Paratext\xa07 and Paratext\xa09 use different send/receive servers, all members or the project team must be using Paratext\xa08 or\xa09."),(0,n.kt)("p",null,"Users can have all versions of Paratext\xa07,\xa08 and\xa09 installed on their computers at the same time, but just run one at a time. No project can be shared simultaneously with users in Paratext\xa07 and users in a different version of Paratext."),(0,n.kt)("p",null,"Once you have migrated the project, everyone on the team needs to receive the migrated project, and only do work in Paratext\xa08 or\xa09 from then on."),(0,n.kt)("p",null,"You need to have a good Internet connection to migrate the project, but after that, if you usually work without an Internet connection, you can keep working that way in Paratext\xa09 once the project is migrated."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What are you going to do?")),(0,n.kt)("p",null,"You will"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ensure you have the master copy of the Paratext\xa07 project"),(0,n.kt)("li",{parentName:"ul"},"open the project in Paratext\xa08"),(0,n.kt)("li",{parentName:"ul"},"register the project"),(0,n.kt)("li",{parentName:"ul"},"migrate the data")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"There are alternative notes on ",(0,n.kt)("a",{parentName:"p",href:"https://paratext.org/paratext-help-and-support/migration/"},"https://paratext.org/paratext-help-and-support/migration/"))),(0,n.kt)("h2",{id:"51-prepare-a-project-paratext7-for-migration"},"5.1 Prepare a project Paratext\xa07 for migration"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"All data must be sent to the Administrator. And all the project's users must upgrade at the same time. ")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In Paratext\xa08, open the project using ",(0,n.kt)("strong",{parentName:"li"},"File")," menu, choose ",(0,n.kt)("strong",{parentName:"li"},"Open Project/Resource"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Make sure the box at lower left \u201cShow Paratext\xa07 projects\u201d is checked."),(0,n.kt)("img",{parentName:"li",src:"https://paratext.org/wp-content/uploads/2017/02/image01.png",alt:"https://paratext.org/wp-content/uploads/2017/02/image01.png"})))),(0,n.kt)("li",{parentName:"ol"},"Select your project.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"v7"),"\xa0means Paratext\xa08 sees it in the Paratext\xa07 projects folder."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unregistered"),"\xa0means it isn\u2019t registered for Paratext\xa08."))),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Paratext will open the migration dialogue box"),".",(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("img",{parentName:"li",src:"https://paratext.org/wp-content/uploads/2017/02/image05.png",alt:"https://paratext.org/wp-content/uploads/2017/02/image05.png"}))))),(0,n.kt)("h2",{id:"52-register-project"},"5.2 Register project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Register Online")),(0,n.kt)("li",{parentName:"ol"},"Fill in the ",(0,n.kt)("strong",{parentName:"li"},"Register Project")," Form.",(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"See chapter ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/zh-TW/next/Admin-Manual/REGU"},"3. REGU - User Registration")))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"When your project is registered successfully, the following dialog is displayed"),(0,n.kt)("br",{parentName:"li"}),"",(0,n.kt)("img",{alt:"media/image4.png",src:a(17326).Z,width:"575",height:"451"}))),(0,n.kt)("h2",{id:"53-complete-migration"},"5.3 Complete migration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The migration step has several boxes you have to check off to verify that you understand what is involved."),(0,n.kt)("li",{parentName:"ol"},"Put a ",(0,n.kt)("strong",{parentName:"li"},"check")," in these boxes if they are true  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"are all the boxes ticked?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"yes, click ",(0,n.kt)("strong",{parentName:"li"},"Migrate Now")," to ",(0,n.kt)("strong",{parentName:"li"},"affirm the above information is correct and request this application be reviewed"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When you click ",(0,n.kt)("strong",{parentName:"li"},"Migrate now"),", ",(0,n.kt)("em",{parentName:"li"},"Paratext will copy the project from your Paratext 7 into your Paratext 8 folder and will also do a send/receive to the Internet"),"."))),(0,n.kt)("li",{parentName:"ul"},"no, then click ",(0,n.kt)("strong",{parentName:"li"},"Migrate Later"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"finish preparations then come back and click ",(0,n.kt)("strong",{parentName:"li"},"Migrate Now"),".")))))))),(0,n.kt)("h3",{id:"sendreceive-warning"},"Send/receive warning?"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Paratext 8 is able to check if the Paratext 7 project on your computer has new changes since the last send/receive. If it detects this, it gives you a warning.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://paratext.org/wp-content/uploads/2017/02/image09.png",alt:"https://paratext.org/wp-content/uploads/2017/02/image09.png"}))),(0,n.kt)("p",null,"If you get the warning"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"this stops the migration process"),","))),(0,n.kt)("li",{parentName:"ol"},"In ",(0,n.kt)("strong",{parentName:"li"},"Paratext 7"),", you need to mark a point in the Project History  "),(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Project  menu"),", choose ",(0,n.kt)("strong",{parentName:"li"},"Mark a point in the Project History,")),(0,n.kt)("li",{parentName:"ol"},"Type a comment, click ",(0,n.kt)("strong",{parentName:"li"},"OK"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Restart the migration")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Paratext ",(0,n.kt)("strong",{parentName:"li"},"8"),"."),(0,n.kt)("li",{parentName:"ol"},"Open the project in Paratext 8"),(0,n.kt)("li",{parentName:"ol"},"Check the boxes"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Migrate now"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"A message should be displayed to say the migration was successful"),"."))),(0,n.kt)("li",{parentName:"ol"},"Now your colleagues can go to ",(0,n.kt)("strong",{parentName:"li"},"Paratext 9")," and do a ",(0,n.kt)("strong",{parentName:"li"},"Send/Receive")," to receive the migrated project.")),(0,n.kt)("h3",{id:"additional-project-settings"},"Additional Project settings"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Language identifier"),": After you click \u201cMigrate now\u201d, Paratext 9 may tell you that need to specify a language identifier for your project.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can verify what the language name and language identifier are for your project by going to",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u2261 Tab, under Project  Project Properties  Language settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"The language identifier is either in brackets after the language name, or listed separately below the  name"),".")))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Books")," The project properties and settings has a ",(0,n.kt)("strong",{parentName:"li"},"Books")," tab, you specify here the books that you plan to track their progress in your project.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can choose book by book, or specify ",(0,n.kt)("strong",{parentName:"li"},"Old Testament"),", ",(0,n.kt)("strong",{parentName:"li"},"New Testament"),", ",(0,n.kt)("strong",{parentName:"li"},"Deuterocanon")," by using the buttons. You can change this list of books later on in the project if your plans for the project change.",(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"}," ",(0,n.kt)("strong",{parentName:"p"},"Note"),": Once you have migrated your project, you also need to migrate the back translation and any other daughter projects (one after the other).")))),(0,n.kt)("admonition",{title:"Warning",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Remember, ",(0,n.kt)("strong",{parentName:"p"},"do not edit")," the project in Paratext 7. That would be wasted effort as no one else will see their changes.")),(0,n.kt)("p",null,"To help your team members remember this, you could have them ",(0,n.kt)("strong",{parentName:"p"},"remove the project from their Paratext 7")," once they have it in Paratext 9. Or maybe they can uninstall Paratext 7 from their computer if they don't need it for other projects."))}u.isMDXComponent=!0},17326:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image4-28fcca47878c2ff14be49d42e8a6ef40.png"}}]);