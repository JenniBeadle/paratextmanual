
@ECHO OFF
SETLOCAL
IF "%1"=="" GOTO MENU
SET M=%1
SET X=1
GOTO :AFTER_MENU
:MENU
CLS

ECHO.
ECHO Docu-pdf command for producing PDFs of Docusaurus
ECHO.
ECHO ---------------------------------------------
ECHO PRESS 1-9 to select your task, or 0 to EXIT
ECHO ---------------------------------------------
ECHO .
ECHO . Manuals
ECHO 1 - English Manual version 9.3
ECHO 2 - English Manual version 9.2
ECHO 3 - French Manual version 9.3
ECHO 4 - French Manual version 9.3 LH
ECHO . 
ECHO . Video Summaries
ECHO 5 - English Vidsum version 9.3
ECHO 6 - English Vidsum version 9.2
ECHO 7 - French Vidsum version 9.3
ECHO 8 - French Vidsum version 9.2 
ECHO 9 - ?? 
ECHO 0 - EXIT
ECHO.

SET /P M= Type 1-9 or 0 then press ENTER:
:AFTER_MENU
IF %M%==1 GOTO ENG-man-9.3
IF %M%==2 GOTO FRENCH
IF %M%==3 GOTO FR-man-9.3
IF %M%==4 GOTO FR-man-lh
IF %M%==5 GOTO BUILD
IF %M%==6 GOTO SERVE
IF %M%==7 GOTO DEPLOY
IF %M%==8 GOTO UPGRADE
IF %M%==9 GOTO CLEARC
IF %M%==0 GOTO EOF

:ENG-man-9.3
ECHO docu-pdf English manual 9.3
npx docu-pdf http://localhost:3000/Training-Manual/Overview --coverPath="cover-man-en.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-man-a5-9.3.en.pdf" --disableTOC --excludeURLs="http://localhost:3000/Training-manual/category/paratext-training-manual, http://localhost:3000/category/appendix"
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FRENCH
ECHO Start French (npm run start -- --locale fr)
npm run start -- --locale fr
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-man-9.3
ECHO docu-pdf French manual 9.3
npx docu-pdf https://manual.paratext.org/fr/Training-Manual/Overview --coverPath="cover-man-fr.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-man-a5-9.3.fr.pdf" --disableTOC --headerTemplate="<header><div style='width: 100 10px; margin: 1cm; color: #bbb; height: 30px; text-align: right;'><span class='URL'</span></div></header>"  
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:FR-man-lh
ECHO docu-pdf French manual 9.3
npx docu-pdf http://localhost:3000/fr/Training-Manual/Overview --coverPath="cover-man-fr.html"  --contentSelector="article" --pageSize="A5" --outputPath="Ptx-man-a5-9.3.fr-LH.pdf" --disableTOC --headerTemplate="<header><div style='width: 100 10px; margin: 1cm; color: #bbb; height: 30px; text-align: right;'><span class='URL'</span></div></header>"  
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:VERSION
ECHO Version
npm run docusaurus docs:version x.x
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:UPGRADE
ECHO Upgrade
npm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:BUILD
ECHO Build
npm run build
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:SERVE
ECHO Serve (npm run serve)
npm run serve
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:CLEARC
ECHO Docusarus clear (cache, build...) npm run docusaurus clear
npm run docusaurus clear
IF "%X%"== "1" GOTO :EOF
GOTO MENU

:EOF
