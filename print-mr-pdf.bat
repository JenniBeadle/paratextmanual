Mr-PDF
=======

npx mr-pdf --initialDocURLs="http://localhost:3000/paratextmanual/docs/next/Training-Manual/Stage-1/Stage-1%20-%20All" ^
--paginationSelector=".docs-prevnext > a.docs-next" ^
--excludeSelectors=".fixedHeaderContainer,footer.nav-footer,#docsNav,nav.onPageNav,a.edit-page-link,div.docs-prevnext" ^
--cssStyle=".navPusher {padding-top: 10;}" --pdfMargin="40,40,40,40" --contentSelector="article" ^
--coverTitle="Paratext Stage 1" ^
--outputPDFFilename="Ptx-stage1.pdf" ^



npx mr-pdf --initialDocURLs="https://jennibeadle.github.io/flexdoc/docs/Video-summaries/FLEx-vidsum-bulkedit" --paginationSelector=".docs-prevnext > a.docs-next" --excludeSelectors=".fixedHeaderContainer,footer.nav-footer,#docsNav,nav.onPageNav,a.edit-page-link,div.docs-prevnext" --cssStyle=".navPusher {padding-top: 10;}" --pdfMargin="40,40,40,40" --contentSelector="article" --coverTitle="FLEx" --outputPDFFilename="flexdocs.en.pdf"


docu-PDF
=======

npx docu-pdf https://jennibeadle.github.io/flexdoc/fr/docs/Video-summaries/Index-of-Demo-Movies --pdfMargin="40,40,40,40" --contentSelector="article" --coverTitle="FLEx"

https://jennibeadle.github.io/flexdoc/docs/Video-summaries/Index-of-Demo-Movies

https://jennibeadle.github.io/flexdoc/fr/docs/Video-summaries/Index-of-Demo-Movies