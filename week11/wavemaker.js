
let t = 0; // time variable

function setup() {
  createCanvas(1450, 810);
  noStroke();
  fill(10, 30, 80);
}

function draw() {
  background("gray", 10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 60) {
    for (let y = 0; y <= height; y = y + 60) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -6 * PI, 6 * PI, true);
      const yAngle = map(mouseY, 0, height, -6 * PI, 6 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 40 * cos(2 * PI * t + angle);
      const myY = y + 40 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.04; // update time
}