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

const maxHexDigits = 3;
const maxHexValues = Math.pow(hexValues.length, maxHexDigits);
let count = 0;

console.log("max hex:", maxHexValues);

// 400x400
var canvas = document.getElementById("pixel-container");
var canvasContext = canvas.getContext("2d");
canvasContext.lineWidth = 3;
canvasContext.strokeStyle = "#01a";

let currentX = 0;
for (let i = 0; i < 400; i++) {
    // this has to become a single pixel instead of a whole line

    let lineY = 7;
    canvasContext.strokeStyle = "#0ff";
    canvasContext.moveTo(0, lineY);
    canvasContext.lineTo(++currentX, lineY);
    canvasContext.stroke();
}

function getColor() {
    let count = 0;
    const iterationLimit = maxHexValues;

    const maxIndex = hexValues.length;

    let firstIndex = 0;
    let secondIndex = 0;
    let thirdIndex = 0;

    //     console.log(maxIndex);

    while (count < iterationLimit) {
        let firstValue = hexValues[firstIndex];
        let secondValue = hexValues[secondIndex % maxIndex];
        let thirdValue = hexValues[thirdIndex % maxIndex];

        let fullValue = `#${firstValue}${secondValue}${thirdValue}`;
        console.log(fullValue); // this will be the return value of the method
        count++;

        thirdIndex++;
        if (thirdIndex % maxIndex == 0) {
            secondIndex++;
        }

        if (secondIndex % maxIndex == 0 && thirdIndex % maxIndex == 0) {
            firstIndex++;
        }
    }
}

getColor();
