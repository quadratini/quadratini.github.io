let x;
let y;
let r;
let style = 1;
let brushSize = 10;

function setup() {
    let canvas = createCanvas(800, 600);
    noStroke();
    background(51);
    x = 0;
}

function draw() {
    fill(255);
    y = random(height);
    if (random() > 0.7) {
        r = random(6, 10);
    } else {
        r = random(1, 5);
    }

    if (random() > 0.5) {
        rect(random() * width, random() * height, r, r);
    }

    ellipse(x, y, r, r);
    x++;

    if (x >= width) {
        x = 0;
    }
}

function mousePressed() {
    fill(0);
    if (style == 1) {
        ellipse(mouseX, mouseY, brushSize, brushSize);
    } else if (style == 2) {
        rect(mouseX, mouseY, brushSize, brushSize);
    }
} 

function mouseDragged() {
    fill(0);
    if (style == 1) {
        ellipse(mouseX, mouseY, brushSize, brushSize);
    } else if (style == 2) {
        rect(mouseX, mouseY, brushSize, brushSize);
    }
}

function keyPressed() {
    if (keyCode == 49) {
        style = 1;
    } else if (keyCode == 50) {
        style = 2;
    }
    if (keyCode == 32) {
        clear();
        background(51);
    }
}

