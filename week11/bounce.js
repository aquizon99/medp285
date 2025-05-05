let rad = 100; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 10.8; // Speed of the shape
let yspeed = 8.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(1450, 800);
  noStroke();
  frameRate(30);
  rectMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background("lightgreen",102);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  rect(xpos, ypos, rad, rad);
}
