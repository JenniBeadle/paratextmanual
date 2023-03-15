# Set the path where the .md files are located
$path = "C:\Users\jjpdq\Documents\paratextmanual\docs\Training-Manual"
# Set the path where the .md files are located
$path = "C:\path\to\md\files"

# Get all .md files in the directory and its subdirectories
$files = Get-ChildItem -Path $path -Recurse -Filter *.md

# Loop through each file and extract the images and their headings
foreach ($file in $files) {
    Write-Host "Images with their headings in $($file.Name):"
    $content = Get-Content $file.FullName
    $headings = $content | Select-String -Pattern '^\#{1,6}\s+(.*)' -AllMatches | Foreach-Object { $_.Matches } | Foreach-Object { $_.Groups[1].Value }
    $images = $content | Select-String -Pattern '!*\[(.*)\]\((.*)\)' -AllMatches | Foreach-Object {
        $_.Line | Select-String -Pattern '!*\[(.*)\]\((.*)\)' -AllMatches | Foreach-Object {
            [PSCustomObject]@{
                Heading = $headings | Where-Object { $_.End -lt $_.Index } | Select-Object -Last 1
                ImageName = $_.Matches.Groups[1].Value
                ImageURL = $_.Matches.Groups[2].Value
            }
        }
    }
    $images | Select-Object ImageName, Heading, @{Name='File';Expression={$file.Name}}
}
