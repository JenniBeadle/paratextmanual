"use strict";(self.webpackChunkparatextmanual=self.webpackChunkparatextmanual||[]).push([[3107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=i,k=d["".concat(s,".").concat(u)]||d[u]||h[u]||n;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=r(87462),i=(r(67294),r(3905));const n={title:"8. SP \u2013 Spell Checking"},l=void 0,o={unversionedId:"Training-Manual/Stage-2/SP",id:"version-9.2/Training-Manual/Stage-2/SP",title:"8. SP \u2013 Spell Checking",description:"Introduction",source:"@site/versioned_docs/version-9.2/Training-Manual/03-Stage-2/8.SP.md",sourceDirName:"Training-Manual/03-Stage-2",slug:"/Training-Manual/Stage-2/SP",permalink:"/ml/9.2/Training-Manual/Stage-2/SP",draft:!1,editUrl:"https://github.com/JenniBeadle/paratextmanual/tree/main/versioned_docs/version-9.2/Training-Manual/03-Stage-2/8.SP.md",tags:[],version:"9.2",sidebarPosition:8,frontMatter:{title:"8. SP \u2013 Spell Checking"},sidebar:"tutorialSidebar",previous:{title:"7. PN \u2013 Proper Names",permalink:"/ml/9.2/Training-Manual/Stage-2/PN"},next:{title:"9. GL - Glossary",permalink:"/ml/9.2/Training-Manual/Stage-2/GL"}},s={},c=[{value:"Introduction",id:"introduction",level:4},{value:"Where we are",id:"where-we-are",level:4},{value:"Why is this important?",id:"why-is-this-important",level:4},{value:"What you are going to do",id:"what-you-are-going-to-do",level:4},{value:"8.1 Configure the word list",id:"81-configure-the-word-list",level:2},{value:"Approve the spelling of common words",id:"approve-the-spelling-of-common-words",level:4},{value:"Check the words that Paratext thinks are incorrect",id:"check-the-words-that-paratext-thinks-are-incorrect",level:4},{value:"Check similarly spelled words",id:"check-similarly-spelled-words",level:4},{value:"8.2 Spell checking \u2013 from the text",id:"82mc",level:2},{value:"Making corrections",id:"making-corrections",level:4},{value:"8.3 Spell checking \u2013 current book",id:"83-spell-checking--current-book",level:2},{value:"8.4 Spell checking \u2013 from the wordlist",id:"84-spell-checking--from-the-wordlist",level:2},{value:"Using the checks",id:"using-the-checks",level:4},{value:"All checks",id:"all-checks",level:4},{value:"Missing Capitals",id:"missing-capitals",level:4},{value:"Single Character Typos",id:"single-character-typos",level:4},{value:"Unusual Letter Combinations",id:"unusual-letter-combinations",level:4},{value:"Diacritic Errors",id:"diacritic-errors",level:4},{value:"Common Typos",id:"common-typos",level:4},{value:"Unknown Morphology",id:"unknown-morphology",level:4},{value:"Find incorrectly joined or split words",id:"find-incorrectly-joined-or-split-words",level:4},{value:"Correct a word which was incorrectly marked",id:"correct-a-word-which-was-incorrectly-marked",level:4},{value:"8.5 Spelling discussion note",id:"85-spelling-discussion-note",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This module explains how to check for spelling mistakes in the text you have typed into your project in Paratext 9."),(0,i.kt)("h4",{id:"where-we-are"},"Where we are"),(0,i.kt)("p",null,"You have typed your text in Paratext 9 and have done some checks, but there may still be spelling mistakes in the text."),(0,i.kt)("h4",{id:"why-is-this-important"},"Why is this important?"),(0,i.kt)("p",null,"It is important to correct any spelling mistakes so that your text will communicate clearly."),(0,i.kt)("h4",{id:"what-you-are-going-to-do"},"What you are going to do"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure the wordlist to build up a base of correct words."),(0,i.kt)("li",{parentName:"ul"},"Work through your text with red squiggly lines showing words that Paratext does not know are correct."),(0,i.kt)("li",{parentName:"ul"},"Work through your wordlist, either correcting mistakes or telling Paratext 9 that the words are correct."),(0,i.kt)("li",{parentName:"ul"},"Use a variety of checks from the word list."),(0,i.kt)("li",{parentName:"ul"},"Add a spelling discussion note to words that require further discussion before a correct spelling is decided.")),(0,i.kt)("h2",{id:"81-configure-the-word-list"},"8.1 Configure the word list"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Before you can check the spelling, it is important to have a base of words that are known to be correct. There are three things we can do:")),(0,i.kt)("h4",{id:"approve-the-spelling-of-common-words"},"Approve the spelling of common words"),(0,i.kt)("p",null,"In Paratext"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,i.kt)("strong",{parentName:"li"},"Wordlist"))),(0,i.kt)("p",null,"In the Wordlist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,i.kt)("strong",{parentName:"li"},"Approve spelling of common words")),(0,i.kt)("li",{parentName:"ul"},"Enter a number")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The number is the number of times the words must appear to automatically mark it as being spelled correctly. The default is 100, but you can choose more (if you have doubts about the text) or less (if you are confident about the accuracy of the typist).")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"OK")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Yes")," (to confirm that you cannot undo)")),(0,i.kt)("h4",{id:"check-the-words-that-paratext-thinks-are-incorrect"},"Check the words that Paratext thinks are incorrect"),(0,i.kt)("p",null,"In the Wordlist (",(0,i.kt)("strong",{parentName:"p"},"\u2261 Tab")," under ",(0,i.kt)("strong",{parentName:"p"},"Tools")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Word List"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,i.kt)("strong",{parentName:"li"},"Spell Check ",">"," All checks"),"  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"A list of word s is displayed."),"  "))),(0,i.kt)("li",{parentName:"ul"},"Click on a word in the top pane."),(0,i.kt)("li",{parentName:"ul"},"If the word is correct \u2013 click the green checkbox ",(0,i.kt)("img",{src:r(51469).Z,width:"29",height:"25"})," at the top of the column"),(0,i.kt)("li",{parentName:"ul"},"If the word is incorrect, but Paratext 9 has suggested the correct word, then click the blue link for the correct word."),(0,i.kt)("li",{parentName:"ul"},"If the word is incorrect, and Paratext 9 hasn\u2019t suggested the correct word, click on the red checkbox ",(0,i.kt)("img",{src:r(70324).Z,width:"29",height:"29"})," and correct the word. (See 9.3)")),(0,i.kt)("h4",{id:"check-similarly-spelled-words"},"Check similarly spelled words"),(0,i.kt)("p",null,"In the Wordlist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,i.kt)("strong",{parentName:"li"},"Find Similar Words")),(0,i.kt)("li",{parentName:"ul"},"Enter letters which sound alike separated by / (e.g. s/sh/z)")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Depending on your language, tick or untick \u201cIgnore all diacritics when comparing words\u201d.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"OK"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"A list of words is displayed."),"  "),(0,i.kt)("li",{parentName:"ul"},"Correct the words (as described above).")),(0,i.kt)("h2",{id:"82mc"},"8.2 Spell checking \u2013 from the text"),(0,i.kt)("p",null,"In Paratext"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"li"},"View")," ",">"," ",(0,i.kt)("strong",{parentName:"li"},"Display spelling"),"  ",(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A progress meter is displayed initially, then all the words that are either unknown or incorrect have red squiggly lines underneath.")))),(0,i.kt)("h4",{id:"making-corrections"},"Making corrections"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Paratext 9 will underline in red the words that have not been approved in the word list. This either means that the word is misspelled or unknown.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Right-click a word which is underlined in either red or grey",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"A dialogue is displayed."),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("img",{src:r(47351).Z,width:"244",height:"328"}),"  "),(0,i.kt)("li",{parentName:"ul"},"Either type the correction in the box or select the correct word from the list"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"OK"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When possible, it is better to use the spelling check even when making minor corrections as Paratext 9 will remember the correction, and you can apply the correction if it happens again.")),(0,i.kt)("p",null,"When there is more than one correction, a dialog box is displayed.",(0,i.kt)("br",{parentName:"p"}),"\n","Choose as appropriate:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yes")," = changes this verse and looks for the next  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No")," = skips this verse and looks for the next  "),(0,i.kt)("li",{parentName:"ul"},"Yes to all \u2013 ",(0,i.kt)("strong",{parentName:"li"},"is dangerous"),", use with caution  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cancel")," = stops further changes")),(0,i.kt)("h2",{id:"83-spell-checking--current-book"},"8.3 Spell checking \u2013 current book"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"li"},"Tools")," ",">"," ",(0,i.kt)("strong",{parentName:"li"},"Spell Check Current Book"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"A window appears with a list of some words in the current book."),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("img",{src:r(1412).Z,width:"937",height:"834"})),(0,i.kt)("li",{parentName:"ul"},"Make corrections as explained above ",(0,i.kt)("a",{parentName:"li",href:"#82mc"},"8.2")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"More items available")," to see additional words."),(0,i.kt)("li",{parentName:"ul"},"Continue as needed.")),(0,i.kt)("h2",{id:"84-spell-checking--from-the-wordlist"},"8.4 Spell checking \u2013 from the wordlist"),(0,i.kt)("h4",{id:"using-the-checks"},"Using the checks"),(0,i.kt)("p",null,"In the Wordlist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"li"},"Tools"),">"," ",(0,i.kt)("strong",{parentName:"li"},"Spell check ",">")),(0,i.kt)("li",{parentName:"ul"},"Choose the desired check (see descriptions below)",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("img",{src:r(19494).Z,width:"298",height:"273"}),"  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"A list of words is displayed"),". "))),(0,i.kt)("li",{parentName:"ul"},"Make the corrections as needed."),(0,i.kt)("li",{parentName:"ul"},'Click "',(0,i.kt)("strong",{parentName:"li"},"More items available"),'" to see more words.'),(0,i.kt)("li",{parentName:"ul"},"Continue as needed."),(0,i.kt)("li",{parentName:"ul"},"When the list is finished, a message is displayed",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("img",{src:r(46073).Z,width:"527",height:"128"}),"  "),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Yes"),".")),(0,i.kt)("h4",{id:"all-checks"},"All checks"),(0,i.kt)("p",null,"This runs all of the checks. This is very useful as it will find all types of errors especially words with multiple types of errors."),(0,i.kt)("h4",{id:"missing-capitals"},"Missing Capitals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A list of words is displayed which have capitalised forms but are not always capitalised (that is both forms are used). The list shows the word with a lower case, then the capitalised form below it, which has a blue link to the word.\n",(0,i.kt)("img",{src:r(7983).Z,width:"1179",height:"80"})),(0,i.kt)("li",{parentName:"ul"},"Click the blue link to the capitalised form\n",(0,i.kt)("img",{src:r(62825).Z,width:"1178",height:"45"})),(0,i.kt)("li",{parentName:"ul"},"Click the appropriate blue link.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Show incorrect")," (to see the verses)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"The two forms are acceptable")," (to accept both forms)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Capitalise All")," (to correct all the words)")))),(0,i.kt)("h4",{id:"single-character-typos"},"Single Character Typos"),(0,i.kt)("p",null,"A list of words is displayed with links to other words which are similar but only have one letter different."),(0,i.kt)("h4",{id:"unusual-letter-combinations"},"Unusual Letter Combinations"),(0,i.kt)("p",null,"A list of words is displayed which have unusual combination of letters (such as consonant or vowel clusters \u2026)."),(0,i.kt)("h4",{id:"diacritic-errors"},"Diacritic Errors"),(0,i.kt)("p",null,"A list of words is displayed with links to other words which are the same except for the diacritics."),(0,i.kt)("h4",{id:"common-typos"},"Common Typos"),(0,i.kt)("p",null,'A list of words is displayed which have the same type of problem which have already been corrected in other words. E.g. if you have already corrected "teh" as "the", and it finds "tehm" it will suggest "them".'),(0,i.kt)("h4",{id:"unknown-morphology"},"Unknown Morphology"),(0,i.kt)("p",null,"A list of words is displayed which the computer has not been able to guess the morphology based on other words."),(0,i.kt)("h4",{id:"find-incorrectly-joined-or-split-words"},"Find incorrectly joined or split words"),(0,i.kt)("p",null,"In the Wordlist (",(0,i.kt)("strong",{parentName:"p"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"p"},"Tools")," \u2013 Wordlist)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u2261 Tab"),", under ",(0,i.kt)("strong",{parentName:"li"},"Tools"),">"," ",(0,i.kt)("strong",{parentName:"li"},"Find Incorrectly Joined or Split Words"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("img",{src:r(54958).Z,width:"381",height:"222"})),(0,i.kt)("li",{parentName:"ul"},"Type in any punctuation which can be in the middle of a word e.g. - '"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"OK"),"  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"A list of words is displayed with similar words grouped together."),(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{src:r(71875).Z,width:"1225",height:"723"}))))),(0,i.kt)("h4",{id:"correct-a-word-which-was-incorrectly-marked"},"Correct a word which was incorrectly marked"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find the word in the list (using the filter if necessary)"),(0,i.kt)("li",{parentName:"ul"},"Click on the line to see the word in context"),(0,i.kt)("li",{parentName:"ul"},"Click the correct spelling status.")),(0,i.kt)("h2",{id:"85-spelling-discussion-note"},"8.5 Spelling discussion note"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you have not made a final decision on the spelling, you can add a spelling discussion note.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Double-click on the note icon (in the first column)",(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("img",{src:r(32464).Z,width:"922",height:"304"})),(0,i.kt)("li",{parentName:"ul"},"Type in the note"),(0,i.kt)("li",{parentName:"ul"},"Assign the note as necessary."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"OK"),".")))}h.isMDXComponent=!0},47351:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/140e456179a5e7ad97e3961b6f3ff207-26d59afc4fd84aa21efb15b3a697ae8f.png"},7983:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/19bea051786b16da58b16b9e457624bd-18466b970b6d261cbae00adc266e7fb5.png"},46073:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/24ac959432e62926d742b7c7e915c253-fa96b7129d6604f5c40be87529685dd4.png"},70324:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAALnSURBVEhLzVVNT1pREMW2m9YE5OM9ePB4RokooYv+KxcmbNgqEEFFIaRVQHGFNiaN3TVpF/34G902tUmb7to00aRpnc4ZuM2FPOSpqZXkZHLnnpnz5t6Zi4/+w09EfT7fjWFAtNPp/HPcftG9vT2B256CF45nUT3RqKReOIAnUZWgWq3S6urqgG+YUyqVaHNz05WjMFZUBdbrdbIsi4J+P62trVGH/bu7u7InlteFQoGCk5Nkx+PC1+N1XCiqAhqNBjmOQ0+mDHprJGjajFKlUhGhVqsldmVlhaKBAL0zbDoKxYSPOD2PwkhREIHqxgbN2rYI/p6ep3Nnnl5G4uSYJpXLZdrnKpeXl0UQ/nPmgHcUjlHKTtL6+vrfXJ5EYct8hwYnPA5bRMk0fYzPEvWFU7EYLS4ukh0Myhr+k/7+c+abgSnXHhgpqhPxtVGu7JCPjZx0LzF/wAtUfPeeWKx7gmnhgY84PY/ChaKACsAdmoZBT/vCX1jglIU+JVJisYYf++DJnWvxOsaKAhLIwB0muTMP+OhOWeArC35LzonFGn6bOxw88N0EAU+iALp0n5MsLS3RA98EnbDQd3tOKoT9wPY++/P5vPDa7bZrHsCTqJpDdGkyEqFXPBan/Qp/9O0ZVwp/ik/i2pWqo8Xgq7FA03zmys7YvrdmxGINvxqnK9+pCigWiz1BQ43FjDTNATdNcOKO2F5Xw8/jxDw8IJfuXkUssWCEn7Y3/BLhYejNaa9LE9Eo5XI5saqr1Ry/Zr7pD8ic6/mAsZXWazV6lMnQY36RfvFLgyPEHGIs5EViDizWMse8/5NFi/4wPVxYkHjPlepA52azWX4KTTqOWBRTd8bJpEvZYg3/Mx4bCIIv77JLvrGi6itbzSZluOJQKOT+L8MW/nA4LDzw9XgdnipVgdvb27S1tTXgG+bU+DibOzuuHAVPosMYlWyUfxiXEkXScYm9CF+p0uvidojeFESv2+3SzaJLfwB57zRbptuX5QAAAABJRU5ErkJggg=="},62825:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/475dfee706953d2680179c5bd19a389e-a215e99c0215c21e19e1a052996ec409.png"},54958:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/518a8859b0aaf6229b4350c1c28c43b7-4e3682024603c2188a15f401f9922210.png"},51469:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAYAAADNAiUZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAKSSURBVEhL1dNNbxJRFAZgf0AJShRLoS20RajGRfkKpOnGVmP5Ch1aunJpSHBBQoLRuFXjXzFpda9Go+KeNoS0/6B8LSBdFBh4veeQGwlQhBY1vpMJk8zlPnPOnLkigr8Rco6OEnz+/2i73eZzUP4I2o0NgieOtlot/i2Xy6hWq3zdC08U7QZXVlawurqKaq0fnhgqwUqlAo/Hg5svXNA9voO1tTWcnp7yPQlPBJVgqVSC2+2GPu3AciaG5e8xhl1uF04KJ4zSORJKm8qNe9MNulwu6J8K8EcMlj2/QHdw7ZEN6xvrKFfKvI4yEiqer3P0DIQEi8UigzcEaBcVWvY3BbwL7fYiAoEA6vU6r5MZinI7xJFMJpFKpfhaQt2gw+GA/pmTW2rZ9zOs3V5CMBhEvdkBux94KEohcOqeCZrNOaTTaYhGo9ls8r1CoQCn0ynAzjv8BS4iFArhrHHG63o7NBClRTRxiScJaO7PwvZJgf3bDqY2TFyxKmCqkD4L/fOeCqOLCIfDAyuU6UPlouPjY2g0GhheeWGnwRCb3vqsQPNgFvF4HF6fl0G7GJZxQEofSpGLDw8PMWM2CtgH21ex+Xs/rB+2cD1xF9MvvbB+UWB5R1MqQGUBkUgEDbXB/z0PpAxEKXJQstkspk0GGF4LWLTYvLfJrbZ+jGBBgLczYkq3OmCz1XnXw0DKuShFVVWeWIJn5qli0WrRTvPbh1w1fYcEKooyUoUyQ1GKhKnVhjkjpgnO7MAu2q2NdEC1rfLaUUDKb1GKhA8ODmCcN8Hwxoeru0uIRqOipeOBlJFQCsGUXC4HnU7H36F6AZAyMkqRw5XP51Gr1fh6XJAyFkq5CNKbsVEKVXwZ/ELoZfOP0QR+ArcJjbz4r+BGAAAAAElFTkSuQmCC"},71875:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/55eebda87e179d36e0141f16b521b574-85f8c3c8b387e768601c9fda607c1b4c.png"},1412:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c4356daac0635a47fcd3a5fb78a5278b-183ab875603c86185ef42007f7d227cd.png"},19494:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/d6385d317ad43d0af38f63119293f5b6-4faa02c4cf89709bdd93860b849c7bfb.png"},32464:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/d859aeba987bd3ccac2a6362201d8647-dc65d1ab41d9cd72acbbbd23a18b3e1a.png"}}]);