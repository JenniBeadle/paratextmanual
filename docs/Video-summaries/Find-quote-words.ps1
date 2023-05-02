# Set the search path to the current directory and all subfolders

$searchPath = Get-ChildItem -Path . -Recurse

# Initialize an array to hold the quotes words or phrases found in all files
$quoteWords = @()

# Loop through all the .md files in the search path
foreach ($file in $searchPath | Where-Object { $_.Extension -eq '.md' }) {
    # Read the contents of the file
    $content = Get-Content -Path $file.FullName -Encoding utf8
    # Find all the words or phrases in quotes in the file
    $quoteMatches = [regex]::Matches($content, '["“](.*?)["”]')

    # Add the quoteed words or phrases found in the file to the array
    foreach ($match in $quoteMatches) {
        $quoteWords += $match.Groups[1].Value
    }
}

# Sort the array and remove duplicates
$quoteWords = $quoteWords | Sort-Object -Unique

# Output the quote words or phrases to a UTF-8 file
$outputFilePath = 'quote-words.txt'
$quoteWords | ForEach-Object { $_ -replace '–', '-' } | Out-File -FilePath $outputFilePath -Encoding utf8

# Output the path to the output file
Write-Host "Quoted words or phrases found in all .md files have been output to $($outputFilePath)"

