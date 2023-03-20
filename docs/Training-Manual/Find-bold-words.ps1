# Set the search path to the current directory and all subfolders

$searchPath = Get-ChildItem -Path . -Recurse

# Initialize an array to hold the bolded words or phrases found in all files
$boldWords = @()

# Loop through all the .md files in the search path
foreach ($file in $searchPath | Where-Object { $_.Extension -eq '.md' }) {
    # Read the contents of the file
    $content = Get-Content -Path $file.FullName -Encoding utf8
    # Find all the bolded words or phrases in the file
    $boldMatches = [regex]::Matches($content, '\*\*(.*?)\*\*')

    # Add the bolded words or phrases found in the file to the array
    foreach ($match in $boldMatches) {
        $boldWords += $match.Groups[1].Value
    }
}

# Sort the array and remove duplicates
$boldWords = $boldWords | Sort-Object -Unique

# Output the bolded words or phrases to a UTF-8 file
$outputFilePath = 'bolded-words.txt'
$boldWords | ForEach-Object { $_ -replace '–', '-' } | Out-File -FilePath $outputFilePath -Encoding utf8

# Output the path to the output file
Write-Host "Bolded words or phrases found in all .md files have been output to $($outputFilePath)"

