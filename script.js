let container = document.querySelector(".container");
let gridBtn = document.getElementById(".submit-grid");
let clearGridBtn = document.getElementById(".clear-grid");
let gridWidth = document.getElementById(".width-range");
let gridLength = document.getElementById(".height-range");
let colorBtn = document.getElementById(".color-input");
let eraseBtn = document.getElementById(".paint-btn");
let paintBtn = document.getElementById(".paint-btn");
let widthValue = document. getElementById(".height-value");
let heightValue = document.getElementById(".height-value");

let events =
{
    mouse:
    {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch:
    {
        down: "touchdown",
        move: "touchmove",
        up: "touchend"
    }
}

let deviceType = "";
let draw = false;
let erase = false;

const isTouchDevice = () => {
    try
    {
        document.createElement("TouchEvent");
        deviceType = "touch";
        return true;
    }
    catch(e)
    {
        deviceType = "mouse";
        return false;
    }
}

isTouchDevice();

