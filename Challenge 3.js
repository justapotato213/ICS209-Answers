var rectX = 100;
var rectY = 100;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  fill(0, 0, 0);

  //MOUSE STUFF

  //Checking if the mouse is pressed
  if (mouseIsPressed) {
    //These 2 if statements could be combined, but its easier for me to understand this way
    //Checking if its inside the x part of the rectangle
    if (mouseX >= rectX && mouseX <= rectX + 100){
      //Checking if its inside the y part of the rectangle
      if (mouseY >= rectY && mouseY <= rectY + 100){
        fill(0, 255, 0);
      }
    }
  }

  //MOVEMENT

  // LEFT
  if (keyIsDown(LEFT_ARROW) && rectX > 0){
    rectX -= 5;
  }
  // RIGHT
  // Adding the width of the rectangle to the x so that it doesn't go off screen as x is on the left
  if (keyIsDown(RIGHT_ARROW) && rectX + 100 < width){
    rectX += 5;
  }
  // UP
  if (keyIsDown(UP_ARROW) && rectY > 0){
    rectY -= 5;
  }
  // DOWN
  // Adding the hegiht of the rectangle to the y so that it doesn't go off screen as y is on the top
  if (keyIsDown(DOWN_ARROW) && rectY + 100 < height){
    rectY += 5;
  }

  
  rect(rectX, rectY, 100, 100);
}
