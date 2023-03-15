$folder2 = "C:\Users\jjpdq\Documents\paratextmanual\docs\Training-Manual"
$folder1 = "C:\Users\jjpdq\Documents\paratextmanual\versioned_docs\version-9.3\Training-Manual"

Compare-Object -ReferenceObject $(Get-ChildItem -Path $folder1 -Recurse) -DifferenceObject $(Get-ChildItem -Path $folder2 -Recurse) -Property Name, Length, LastWriteTime | Where-Object {$_.SideIndicator -eq "<="} | Format-Table -AutoSize
