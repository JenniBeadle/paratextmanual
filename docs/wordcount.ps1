# Define the file extension to search for
$extension = ".md"

# Define a counter for the total number of words
$totalWordCount = 0

# Get all the files with the specified extension in the current directory and all subdirectories
$files = Get-ChildItem -Path . -Recurse -Filter "*$extension"

# Loop through each file and count the words
foreach ($file in $files) {
    $wordCount = 0
    if (Test-Path $file.FullName) {
        $content = Get-Content $file.FullName -Raw
        $wordCount = ($content -split '\W+' | Measure-Object).Count
    }
    Write-Host "The file $($file.FullName) contains $wordCount words."
    $totalWordCount += $wordCount
}

# Output the total number of words found
Write-Host "The total number of words in all $($extension) files is $totalWordCount."
