/*
HEX values range from: 0-9 to A-F

*/

const hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
];

const maxHexDigits = 6;
const maxHexValues = Math.pow(hexValues.length, maxHexDigits);
let count = 0;

console.log("max hex:", maxHexValues);

var colorCounterSpan = document.getElementById("colorCounter");
var lastColorSpan = document.getElementById("lastHexColor");
var maxColorSpan = document.getElementById("maxHexColors");

var canvas = document.getElementById("pixel-container");
var canvasContext = canvas.getContext("2d");

maxColorSpan.innerHTML = maxHexValues;

var x = 0;
var y = 0;
var blockXY = 2;
var blockWidth = blockXY;
var blockHeight = blockXY;

var lastColor;

var drawsHorizontally = true;

function switchAxis(){
    drawsHorizontally = !drawsHorizontally;
}

function drawIt() {
    // Used when drawing horizontally
    if (drawsHorizontally) {
        if (y > canvas.height) {
            return;
        }
        if (x > canvas.width - blockWidth) {
            x = 0;
            y += blockHeight;
        }
    } else {
        // Used when drawing vertically
        if (x > canvas.width) {
            return;
        }
    }

    if (y > canvas.height - blockHeight) {
        y = 0;
        x += blockWidth;
    }
    window.requestAnimationFrame(drawIt);

    let color = getColor();
    // canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, blockWidth, blockHeight);

    if (drawsHorizontally) {

        x += blockXY;
    } else {
        y += blockXY;

    }

    lastColor = color;

    colorCounterSpan.innerHTML = ++count;
    lastColorSpan.innerHTML = lastColor;
}

drawIt();


function Wait(ms) {
    return new Promise((res, rej) => setTimeout(() => res(), ms));
}


var firstIndex = 0;
var secondIndex = 0;
var thirdIndex = 0;
var fourthIndex = 0;
var fifthIndex = 0;
var sixthIndex = 0;

function getColor() {

    const maxIndex = hexValues.length;

    let sixthValue = hexValues[sixthIndex];
    let fifthValue = hexValues[fifthIndex];
    let fourthValue = hexValues[fourthIndex];
    let thirdValue = hexValues[thirdIndex];
    let secondValue = hexValues[secondIndex];
    let firstValue = hexValues[firstIndex];

    // let fullValue = `#${firstValue}${secondValue}${thirdValue}${fourthValue}${fifthValue}${sixthValue}`;
    let fullValue = `#${sixthValue}${fifthValue}${fourthValue}${thirdValue}${secondValue}${firstValue}`;


    if (fifthIndex == maxIndex - 1) {
        fifthIndex = 0;
        sixthIndex++;
    }
    if (fourthIndex == maxIndex - 1) {
        fourthIndex = 0;
        fifthIndex++;
    }
    if (thirdIndex == maxIndex - 1) {
        thirdIndex = 0;
        fourthIndex++;
    }

    if (secondIndex == maxIndex - 1) {
        secondIndex = 0;
        thirdIndex++;
    }

    if (firstIndex == maxIndex - 1) {
        firstIndex = 0;
        secondIndex++;

    }

    firstIndex++;
    // if (firstIndex % maxIndex == 0) {
    //     secondIndex++;
    // }

    // if (firstIndex % maxIndex == 0 && secondIndex % maxIndex == 0) {
    //     thirdIndex++;
    // }



    return fullValue;
}