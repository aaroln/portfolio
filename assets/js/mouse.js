/// <reference path="p5.global-mode.d.ts"/>

let canvas;
let containerWidth, containerHeight;
let dist = 20;
let colourString = 'black';
let timerDuration = 100;
let strokeSize = 1;

function setup() {
    // Get the canvas container's dimensions
    containerWidth = document.getElementById('canvas-container').offsetWidth;
    containerHeight = document.getElementById('canvas-container').offsetHeight;

    // Create canvas inside the container with dynamic dimensions
    canvas = createCanvas(containerWidth, containerHeight);
    canvas.parent('canvas-container');
    background('#f2f2f2');
}

function draw() {
    clear();
    noFill();
    stroke(colourString);
    strokeWeight(strokeSize);
    line(mouseX-dist,mouseY, mouseX+dist, mouseY);
    line(mouseX,mouseY-dist, mouseX, mouseY+dist);
}

// Resize canvas when window size changes
function windowResized() {
    containerWidth = document.getElementById('canvas-container').offsetWidth;
    containerHeight = document.getElementById('canvas-container').offsetHeight;
    resizeCanvas(containerWidth, containerHeight);
}

function mousePressed() {
    colourString = 'rgb(29, 66, 172)';
    strokeSize = 3;
    setTimeout(() => {
        colourString = 'black';
        strokeSize = 1;
    }, timerDuration);
}