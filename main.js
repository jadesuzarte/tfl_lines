
const api_key = '491c623c555e291b2dbb5d11d2ab1985';
const app_id = '2cfcbdcd'
const url = 'https://api.tfl.gov.uk/Line/Mode/tube/Status?detail=true&app_id=2cfcbdcd&app_key=491c623c555e291b2dbb5d11d2ab1985'

const lines = []; 

fetch(url)
.then(blob => blob.json())
.then(data => lines.push(...data))

function displayLines() {
const html = lines.map(line =>  {
    return `
    <p> 
    <span class ="lines"> ${line.name}, ${line.lineStatuses[0].statusSeverityDescription}</span> <br>
    </p>
     `;
}).join('')
allLines.innerHTML = html
}

function coloringLines() {
    
}

const allLines = document.querySelector('.allLines')

allLines.addEventListener('click', displayLines);