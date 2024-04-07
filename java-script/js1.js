
let nMax;
const main = document.querySelector('main');

function displayNumbers() {
    const optRows = document.querySelector("#nRows");
    const nRows = optRows.value;
    //console.log(nRows);
    const optColumns = document.querySelector("#nColumns");
    const nColumns = optColumns.value;
    //console.log(nColumns);
    var nCells = (nRows * nColumns);
    nMax = (nCells - 1);
    var nBreak = (nColumns - 1);
    var theNumbers = new Array(nCells);
    for (var i = 0; i <= nMax; i++) {
        theNumbers[i] = i;
    }
    for (var j = 0; j <= nMax; j++) {
        var tempInteger
        var newPosition
        tempInteger = theNumbers[j]
        newPosition = Math.floor(Math.random() * nMax)
        theNumbers[j] = theNumbers[newPosition]
        theNumbers[newPosition] = tempInteger
    }
    
    var gameChart = "<div class=\"game-header\"> Gra się zaczeła!</div>"
    gameChart += "<div class='game-under-h'>Zacznij od <span style='font-weight: 800;'> ZERA</span>, czas ucieka!</div>"
    gameChart += "<div class=\"game-content\">"
    gameChart += "<div class=\"game-box\">"
    for (var k = 0; k <= nMax; k++) {
        var cellNumber;
        if ((k % nColumns) == 0) gameChart += ""
        cellNumber = theNumbers[k];
        gameChart += "<div class=\"game-item\" id =\"" + cellNumber + "\" onClick=\"evalClick(" + cellNumber + ")\"><font size=\"+2\"><b>" + cellNumber + "</b></font></div>"
        if ((k % nColumns) == nBreak) gameChart += "<div style=\"clear: both\"></div>"
    }
    gameChart += "</div><div style=\"clear: both\"></div>"
    gameChart += "<div style='margin: 20px auto 0 auto; width: max-content;'><input type=\"button\" name=\"restart\" value=\"RESTART!\" style=\"margin: 0 auto;\" onClick=\"window.location.reload()\"></div>"
    gameChart +="</div>"
    main.innerHTML = gameChart;
    console.log(nMax);
}

var currNum = 0;
start = new Date();
var startTime = start.getTime();
function evalClick(x){
    theCell = document.getElementById(x);
    if (x == currNum) {
        theCell.style.background = "#003300";theCell.style.color = "#a8a8a8";
        currNum++
    }else if (x < currNum) {
        theCell.style.background = "#003300";
    }else{
        theCell.style.background = "#ff0000";
        setTimeout('theCell.style.background = "#8a8a8a"',100);
    }if (currNum == nMax+1) {
        end = new Date();
        var endTime = end.getTime();
        var elapsedTime = ((endTime - startTime)/1000);
        var totMin = Math.floor(elapsedTime/60);
        var totSec = Math.floor(elapsedTime % 60);

        var endChart = "<div class='game-under-h'>Gratulacje udało Ci się ukońyczyć test w " + totMin + " minut, " + totSec + " sekund."
        endChart += "<p>Aby zaczac od początku naduś guzik</p></div>"
        endChart += "<div style='margin: 20px auto 0 auto; width: max-content;'><input type=\"button\" name=\"restart\" value=\"GUZIK!!\" style=\"margin: 0 auto;\" onClick=\"window.location.reload()\"></div>"
        main.innerHTML = endChart;

    }
}                              