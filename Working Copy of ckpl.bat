npx docu-pdf http://localhost:3000/next/Training-Manual/Stage-3/BT1 --pdfMargin="68,68,100,175" --cssStyle="body{font-size: 135%;}" --outputPath="Ptx-man-noVS-BT1.en.pdf" --headerTemplate="<header><div style='width: 100 10px; margin: 1cm; color: #bbb; height: 30px; text-align: right;'><span class='URL'</span></div></header>" --excludeURLs="@excludesBT1.txt"
pause
npx docu-pdf http://localhost:3000/next/Training-Manual/Stage-3/BT2 --pdfMargin="68,68,100,175" --cssStyle="body{font-size: 135%;}" --outputPath="Ptx-man-noVS-BT2.en.pdf" --headerTemplate="<header><div style='width: 100 10px; margin: 1cm; color: #bbb; height: 30px; text-align: right;'><span class='URL'</span></div></header>" --excludeURLs="@excludesBT2.txt"
pause
npx docu-pdf http://localhost:3000/next/Training-Manual/Stage-3/CT --pdfMargin="68,68,100,175" --cssStyle="body{font-size: 135%;}" --outputPath="Ptx-man-noVS-CT.en.pdf" --headerTemplate="<header><div style='width: 100 10px; margin: 1cm; color: #bbb; height: 30px; text-align: right;'><span class='URL'</span></div></header>" --excludeURLs="@excludesCT.txt"
pause
npx docu-pdf http://localhost:3000/next/Training-Manual/Stage-3/BC3 --pdfMargin="68,68,100,175" --cssStyle="body{font-size: 135%;}" --outputPath="Ptx-man-noVS-BC3.en.pdf" --headerTemplate="<header><div style='width: 100 10px; margin: 1cm; color: #bbb; height: 30px; text-align: right;'><span class='URL'</span></div></header>" --excludeURLs="@excludesBC3.txt"
pause


npx docu-pdf http://localhost:3000/next/Training-Manual/Overview --pdfMargin="68,68,100,175" --cssStyle="body{font-size: 135%;}" --outputPath="Ptx-man-noVS-all.en.pdf" --headerTemplate="<header><div style='width: 100 10px; margin: 1cm; color: #bbb; height: 30px; text-align: right;'><span class='URL'</span></div></header>"