"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[9874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>A,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},A=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},A),{},{components:a})):n.createElement(g,o({ref:t},A))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41784:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"7. PN \u2013 Proper Names"},o=void 0,l={unversionedId:"Training-Manual/Stage-2/PN",id:"version-9.2/Training-Manual/Stage-2/PN",title:"7. PN \u2013 Proper Names",description:"Introduction",source:"@site/versioned_docs/version-9.2/Training-Manual/03-Stage-2/7.PN.md",sourceDirName:"Training-Manual/03-Stage-2",slug:"/Training-Manual/Stage-2/PN",permalink:"/9.2/Training-Manual/Stage-2/PN",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/versioned_docs/version-9.2/Training-Manual/03-Stage-2/7.PN.md",tags:[],version:"9.2",sidebarPosition:7,frontMatter:{title:"7. PN \u2013 Proper Names"},sidebar:"tutorialSidebar",previous:{title:"Stage 2 - Team Checking",permalink:"/9.2/Training-Manual/Stage-2/Stage-2"},next:{title:"8. SP \u2013 Spell Checking",permalink:"/9.2/Training-Manual/Stage-2/SP"}},s={},p=[{value:"7.1 Run the Biblical Terms tool",id:"71-run-the-biblical-terms-tool",level:2},{value:"Open list of terms",id:"open-list-of-terms",level:4},{value:"Choose your reference text as a comparative text",id:"choose-your-reference-text-as-a-comparative-text",level:4},{value:"Change various settings",id:"change-various-settings",level:4},{value:"Filter for names",id:"filter-for-names",level:4},{value:"7.2 Guess Renderings for proper nouns",id:"72-guess-renderings-for-proper-nouns",level:2},{value:"7.3 Adapt names",id:"73-adapt-names",level:2},{value:"Enter the changes for the individual letters (or letter clusters)",id:"enter-the-changes-for-the-individual-letters-or-letter-clusters",level:4},{value:"Then revise and approve the Adapted Name",id:"then-revise-and-approve-the-adapted-name",level:4},{value:"7.4 Ensure your text is consistent",id:"7.4-Confirm",level:2},{value:"7.5 Add an alternative rendering",id:"75-add-an-alternative-rendering",level:2},{value:"7.6 Dealing with verses that do not have the name translated",id:"76-dealing-with-verses-that-do-not-have-the-name-translated",level:2},{value:"7.7 Recall",id:"77-recall",level:2}],A={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},A,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Introduction"),(0,r.kt)("br",{parentName:"p"}),"\n","In this module, you will check that the proper names have been transliterated consistently. There are two ways to do this. One way is to have Paratext guess the proper names based on statistical analysis of a model text. The other way is to tell Paratext the changes for specific characters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Where we are"),(0,r.kt)("br",{parentName:"p"}),"\n","You have (or are working on) the rules for transliterating the names."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why this is important"),(0,r.kt)("br",{parentName:"p"}),"\n","You want to be consistent so that it is clear who is being referred to in the text."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What you are going to do"),(0,r.kt)("br",{parentName:"p"}),"\n","You will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filter the Major Biblical terms list on Names."),(0,r.kt)("li",{parentName:"ul"},"EITHER use the ",(0,r.kt)("strong",{parentName:"li"},"Guess renderings")," tool to guess the appropriate rendering of the names."),(0,r.kt)("li",{parentName:"ul"},"OR use the ",(0,r.kt)("strong",{parentName:"li"},"Adapt Names")," tool to enter your transliteration rules for each letter."),(0,r.kt)("li",{parentName:"ul"},"Edit and approve the individual names."),(0,r.kt)("li",{parentName:"ul"},"Add the approved names as proposed names in the Biblical terms list."),(0,r.kt)("li",{parentName:"ul"},"Work through the Biblical Terms list to ensure that all the verses are consistent.")),(0,r.kt)("h2",{id:"71-run-the-biblical-terms-tool"},"7.1 Run the Biblical Terms tool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click in your project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,r.kt)("strong",{parentName:"li"},"Biblical Terms ..."))),(0,r.kt)("h4",{id:"open-list-of-terms"},"Open list of terms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Biblical terms")," ",">"," ",(0,r.kt)("strong",{parentName:"li"},"Select Biblical terms list")),(0,r.kt)("li",{parentName:"ul"},'Double-click the "',(0,r.kt)("strong",{parentName:"li"},"Major Biblical Terms"),'" list')),(0,r.kt)("h4",{id:"choose-your-reference-text-as-a-comparative-text"},"Choose your reference text as a comparative text"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Comparative Texts")," button on the toolbar.",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("img",{src:a(67535).Z,width:"119",height:"29"})),(0,r.kt)("li",{parentName:"ul"},"Choose your reference text, then click ",(0,r.kt)("strong",{parentName:"li"},"\u2192"),"  (right arrow)."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK"),".")),(0,r.kt)("h4",{id:"change-various-settings"},"Change various settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the second filter button",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("img",{src:a(32704).Z,width:"600",height:"373"})),(0,r.kt)("li",{parentName:"ul"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"Chapters Assigned to Me"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note: The terms column is in Greek (or Hebrew) by default. You can see the terms in a roman script by using the ",(0,r.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"p"},"View")," menu ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Transliterate terms"),".")))),(0,r.kt)("h4",{id:"filter-for-names"},"Filter for names"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the first filter button"),(0,r.kt)("li",{parentName:"ul"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"New Filter")," "),(0,r.kt)("li",{parentName:"ul"},"In the dialog box, under ",(0,r.kt)("strong",{parentName:"li"},"Categories\u2026")),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Names")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK"))),(0,r.kt)("h2",{id:"72-guess-renderings-for-proper-nouns"},"7.2 Guess Renderings for proper nouns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,r.kt)("strong",{parentName:"li"},"Guess renderings")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Paratext will add renderings to any terms which do not have a rendering (with an orange background)")),(0,r.kt)("li",{parentName:"ul"},"You will need to approve these renderings (see ",(0,r.kt)("a",{parentName:"li",href:"#7.4-Confirm"},"7.4"),")")),(0,r.kt)("h2",{id:"73-adapt-names"},"7.3 Adapt names"),(0,r.kt)("p",null,"Adapting names should be done in the early stages of a translation project, before you have approved renderings of proper names. Otherwise, you can use the guess renderings (see above)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,r.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,r.kt)("strong",{parentName:"li"},"Adapt Names")),(0,r.kt)("li",{parentName:"ul"},"Choose the language of your reference text (e.g. English or fran\xe7ais)",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The Name Adaptation dialogue is displayed"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("img",{src:a(56901).Z,width:"484",height:"404"}))),(0,r.kt)("h4",{id:"enter-the-changes-for-the-individual-letters-or-letter-clusters"},"Enter the changes for the individual letters (or letter clusters)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the left pane, fill in the \u201cAdapted Character\u201d column for the individual letters or letter clusters.")),(0,r.kt)("h4",{id:"then-revise-and-approve-the-adapted-name"},"Then revise and approve the Adapted Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Work through the ",(0,r.kt)("strong",{parentName:"li"},"Adapted name")," column in the right pane."),(0,r.kt)("li",{parentName:"ul"},"For each name, if the adapted name is incorrect, click on the name in the ",(0,r.kt)("strong",{parentName:"li"},"Adapted Name")," column,"),(0,r.kt)("li",{parentName:"ul"},"Edit the name and click ",(0,r.kt)("strong",{parentName:"li"},"OK")),(0,r.kt)("li",{parentName:"ul"},'Once the name is correct, click in the "',(0,r.kt)("strong",{parentName:"li"},"Approved"),'" column.'),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Paratext 9 will propose a name (in red) in the rendering column of the biblical terms tool.")),(0,r.kt)("h2",{id:"7.4-Confirm"},"7.4 Ensure your text is consistent"),(0,r.kt)("p",null,"You need to work through the list and confirm that all the verses use the name consistently."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the name in the top pane."),(0,r.kt)("li",{parentName:"ul"},"Click on a verse in the lower pane which doesn\u2019t have the proposed form of the name."),(0,r.kt)("li",{parentName:"ul"},"Click on the Edit link"),(0,r.kt)("li",{parentName:"ul"},"Correct as necessary, then click ",(0,r.kt)("strong",{parentName:"li"},"Close")),(0,r.kt)("li",{parentName:"ul"},"Repeat for each name.")),(0,r.kt)("h2",{id:"75-add-an-alternative-rendering"},"7.5 Add an alternative rendering"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the name in the top pane."),(0,r.kt)("li",{parentName:"ul"},"Select the word(s) in your text"),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add rendering")," button or ",(0,r.kt)("strong",{parentName:"li"},"Ctrl"),"+",(0,r.kt)("strong",{parentName:"li"},"A"))),(0,r.kt)("h2",{id:"76-dealing-with-verses-that-do-not-have-the-name-translated"},"7.6 Dealing with verses that do not have the name translated"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There are times when a verse is correctly translated even though you have not used the name. For example, a pronoun is used instead of the name. In this case you need to tell Paratext 9 that it is correct (that is, deny that the rendering is missing).")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the red cross at the left of the verse reference ",(0,r.kt)("img",{src:a(87309).Z,width:"22",height:"21"}),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The cross turn into green tick (check) with a red cross")," ",(0,r.kt)("img",{src:a(68470).Z,width:"22",height:"20"}),".  "))),(0,r.kt)("li",{parentName:"ul"},"If you clicked on the red cross by mistake, click again on the icon ",(0,r.kt)("img",{src:a(68470).Z,width:"22",height:"20"}))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note: Paratext 9 does not find names in the introductions, headings, footnotes, captions or glossary. (You could use the Word List to find possible mistakes.)")),(0,r.kt)("h2",{id:"77-recall"},"7.7 Recall"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To transliterate proper names, you ","_","_","_",(0,r.kt)("strong",{parentName:"li"},"_"," the ","_"),"_",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"____")),"_"," list on names."),(0,r.kt)("li",{parentName:"ul"},"Then use the ","_",(0,r.kt)("strong",{parentName:"li"},"_"),"_"," menu and ","_",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"__")),"_"," command."),(0,r.kt)("li",{parentName:"ul"},"After entering the ","_",(0,r.kt)("strong",{parentName:"li"},"_"," changes then ","_"),"_","__","_"," the adapted names."),(0,r.kt)("li",{parentName:"ul"},"Paratext 9 then enters a ","_",(0,r.kt)("strong",{parentName:"li"},"____"),"_"," rendering for all the names."),(0,r.kt)("li",{parentName:"ul"},"You then work through the list ","_",(0,r.kt)("strong",{parentName:"li"},"__"),"_",(0,r.kt)("strong",{parentName:"li"},"_"," and/or adding renderings and making sure that all verses are ","_"),"_",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},"___")),"."),(0,r.kt)("li",{parentName:"ul"},"You can add a rendering by selecting the text and pressing ",(0,r.kt)("strong",{parentName:"li"},"Ctrl"),"+__."),(0,r.kt)("li",{parentName:"ul"},"If a pronoun is used you can ","_","____","_"," the rending by clicking on the ",(0,r.kt)("img",{src:a(87309).Z,width:"22",height:"21"}),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Answers: filter, Major Biblical Terms, names, Tools, Adapt Names, character, approve, proposed, correcting, consistent, A, deny")))}m.isMDXComponent=!0},67535:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},32704:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acfeacca31ac78c92cba3987051ae756-59d70be147ae6b75cc6c5e3ec4acec23.png"},68470:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},87309:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},56901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/f559dca6241f7ff8e50dcdda31fc57d3-17dc0df47de2745e870c11809f0f1fee.png"}}]);