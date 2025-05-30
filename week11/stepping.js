// this class describes the structure
// and movements of the brick
class Brick{
  constructor(bc, y){
    this.brickColor = bc;
    this.yPos = y;
    this.xPos = 0;
  }

  // this function creates the brick
  createBrick(){
    fill(this.brickColor);
    circle(this.xPos, this.yPos, 100, 50);
  }

  // this function sets the speed
  // of movement of the brick to 1
  setSpeed(){
    this.xSpeed = 1;
  }

  // this function sets the bricks in motion
  moveBrick(){
    this.xPos+=this.xSpeed;
    if(this.xPos+100 >= width || this.xPos <= 0){
      this.xSpeed*=-1;
    }
  }
}

function setup() {
  createCanvas(1450, 800);
  createP("Keep the mouse clicked").style('color','#ffffff');
  createP("to check whether the bricks").style('color','#ffffff');
  createP("are moving at same speed or not").style('color','#ffffff');
}

// creating two bricks of 
// colors white and black
let brick1 = new Brick("red",100);
let brick2 = new Brick("blue",400);

// This function sets speed of
// brick 1 and brick2 to 1.
brick1.setSpeed();
brick2.setSpeed();

function draw () {
  background(0);
  if(mouseIsPressed){
    background(40);
  }
  brick1.createBrick();
  brick1.moveBrick();
  if(!mouseIsPressed){
    createBars();
  }
  brick2.createBrick();
  brick2.moveBrick();
}

// this function creates the black and
// white bars across the screen
function createBars() {
  let len = 6;
  for(let i = 0;i<width/len;i++){
    fill("white");
    if(i%2 === 0)
    rect(i*len,height,len,-height);
  }
}