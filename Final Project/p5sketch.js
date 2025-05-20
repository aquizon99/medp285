let t = 0; // time variable

function setup() {
  createCanvas(windowWidth, 150);
  noStroke();
  fill(10, 30, 80);
}

function draw() {
  background("gray", 10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 90) {
    for (let y = 0; y <= height; y = y + 120) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -1 * PI, 5 * PI, true);
      const yAngle = map(mouseY, 0, height, -1 * PI, 5 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 10 * cos(2 * PI * t + angle);
      const myY = y + 10 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 15); // draw particle
    }
  }

  t = t + 0.04; // update time
}