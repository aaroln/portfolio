/// <reference path="p5.global-mode.d.ts"/>

let canvas;
let containerWidth, containerHeight;

function setup() {
    // Get the canvas container's dimensions
    containerWidth = document.getElementById('canvas-container').offsetWidth;
    containerHeight = document.getElementById('canvas-container').offsetHeight;

    // Create canvas inside the container with dynamic dimensions
    canvas = createCanvas(containerWidth, containerHeight);
    canvas.parent('canvas-container');
    background('f2f2f2');

    frameRate(30);
}

function draw() {

}

// Resize canvas when window size changes
function windowResized() {
    containerWidth = document.getElementById('canvas-container').offsetWidth;
    containerHeight = document.getElementById('canvas-container').offsetHeight;
    resizeCanvas(containerWidth, containerHeight);
}



