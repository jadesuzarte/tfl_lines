
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
    <li> 
    <span class ="name"> ${line.name}, ${line.lineStatuses[0].statusSeverityDescription}</span>
     <span class="pupulation">${line.serviceTypes.name}</span>
    </li>
     `;
}).join('')
allLines.innerHTML = html
}

const allLines = document.querySelector('.allLines')

allLines.addEventListener('click', displayLines);