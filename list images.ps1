# Set the path where the .md files are located
$path = "C:\Users\jjpdq\Documents\paratextmanual\docs\Training-Manual"

# Get all .md files in the directory and its subdirectories
$files = Get-ChildItem -Path $path -Recurse -Filter *.md

# Loop through each file and extract the images
foreach ($file in $files) {
    Write-Host "Images in $($file.Name):"
    $content = Get-Content $file.FullName
    $images = $content | Select-String -Pattern '!*\[.*\]\((.*)\)' -AllMatches | Foreach-Object { $_.Matches } | Foreach-Object { $_.Groups[1].Value }
    $images
}
