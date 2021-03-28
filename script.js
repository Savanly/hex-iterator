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
const maxColumns = 50;
const maxRows = 20;

const maxHexDigits = 4;
const maxHexValues = Math.pow(hexValues.length, maxHexDigits);
let count = 0;

console.log("max hex:", maxHexValues);

// 400x400
let maxWidth = 400;
let maxHeight = 400;
let maxPixels = maxWidth * maxHeight;

var colorCounterSpan = document.getElementById("colorCounter");
var lastColorSpan = document.getElementById("lastHexColor");

var canvas = document.getElementById("pixel-container");
var canvasContext = canvas.getContext("2d");
canvasContext.lineWidth = 1;
// canvasContext.strokeStyle = "#01a";

let currentX = 0;
let currentY = 0;
// for (let i = 0; i < 10000; i++) {
//     // this has to become a single pixel instead of a whole line
//     setPixel(i);
// }


var x = 0;
var y = 0;
var blockXY = 10;
var blockWidth = blockXY;
var blockHeight = blockXY;

var lastColor;

function drawIt() {
    if (y > canvas.height) {
        return;
    }
    if (x > canvas.width - blockWidth) {
        x = 0;
        y += blockHeight;
    }
    window.requestAnimationFrame(drawIt);

    let color = getColor();
    // canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, blockWidth, blockHeight);
    x += blockXY;

    lastColor = color;

    colorCounterSpan.innerHTML = ++count;
    lastColorSpan.innerHTML = lastColor;
}

//window.requestAnimationFrame(drawIt);
drawIt();

function setPixel(i, hex) {
    // if (i > maxPixels) {
    //     console.log("Loop got stuck.");
    //     return;
    //     // break;
    // }
    if (i == (currentY + 1) * maxWidth) {
        currentY += 1;
        console.log("Max exceeded");
        currentX = 0;
    }
    canvasContext.strokeStyle = hex;
    canvasContext.moveTo(currentX, currentY);
    canvasContext.lineTo(++currentX, currentY);
    canvasContext.stroke();
}

function Wait(ms) {
    return new Promise((res, rej) => setTimeout(() => res(), ms));
}


var firstIndex = 0;
var secondIndex = 0;
var thirdIndex = 0;
var fourthIndex = 0;

function getColor() {
    // let count = 0;
    // const iterationLimit = maxHexValues;

    const maxIndex = hexValues.length;

    // let firstIndex = 0;
    // let secondIndex = 0;
    // let thirdIndex = 0;
    // let fourthIndex = 0;

    //     console.log(maxIndex);

    // while (count < iterationLimit) {
    let firstValue = hexValues[firstIndex % maxIndex];
    let secondValue = hexValues[secondIndex % maxIndex];
    let thirdValue = hexValues[thirdIndex % maxIndex];
    // let fourthValue = hexValues[fourthIndex % maxIndex];

    // let fullValue = `#${firstValue}${secondValue}${thirdValue}${fourthValue}`;
    let fullValue = `#${firstValue}${secondValue}${thirdValue}`;
    // You might as well draw the canvas pixels here
    // console.log(fullValue);
    // setPixel(count, fullValue);
    // count++;

    firstIndex++;
    if (firstIndex % maxIndex == 0) {
        secondIndex++;
    }

    if (firstIndex % maxIndex == 0 && secondIndex % maxIndex == 0) {
        thirdIndex++;
    }

    // if (
    //     firstIndex % maxIndex == 0 &&
    //     secondIndex % maxIndex == 0 &&
    //     thirdIndex % maxIndex == 0
    // ) {
    //     fourthValue++;
    // }

    // thirdIndex++;
    // if (thirdIndex % maxIndex == 0) {
    //     secondIndex++;
    // }

    // if (secondIndex % maxIndex == 0 && thirdIndex % maxIndex == 0) {
    //     firstIndex++;
    // }
    // }

    return fullValue;
}

// let testCount = 0;

// while (testCount < 40) {
//     getColor();
//     testCount++;
// }
