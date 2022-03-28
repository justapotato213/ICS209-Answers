

//Top circle setup
var topCircleX = 0;
var topCircleY = 0;
var topCircleDiameter = 15;

//Bottom circle setup
var bottomCircleX = 0;
var bottomCircleY = 800;
var bottomCircleDiameter = 40;


function setup() {
  //Setting the background 
	createCanvas(300, 800);
  background(100);
}

function draw() {
  //TOP CIRCLE
  
  //Changing the coordinates of the top circle
  topCircleX += 4;
  topCircleY += 3;

  //Changing the size
  topCircleDiameter += 0.5;

  //Setting the stroke colour and width
  stroke(255, 255, 255);
  strokeWeight(1);

  //Setting the fill colour
  fill(0, 0, 0);

  //Drawing the circle
  ellipse(topCircleX, topCircleY, topCircleDiameter, topCircleDiameter);

  //Top circle resets x if it reaches the x border
  //resets size when it hits the x border 
  //it also resets y once it reaches the line 
  
  //Checking if x has reached the width
  if(topCircleX >= width){
    //Reseting diameter and X
    topCircleX = 0;
    topCircleDiameter = 15;
  }
  //Checking if the y has reached the line
  else if(topCircleY >= height/2){
    topCircleY = 0;
    //reseting the y
  }


  //BOTTOM CIRCLE

  //Changing the coordinates of the bottom circle
  bottomCircleX += 1;
  bottomCircleY -= 10;

  //Changing the size
  bottomCircleDiameter -= 0.5;

  //Setting the stroke colour and width
  stroke(0, 0, 0);
  strokeWeight(1);

  //Setting the fill colour
  fill(255, 255, 255);

  //Drawing the circle
  ellipse(bottomCircleX, bottomCircleY, bottomCircleDiameter, bottomCircleDiameter);

  //Bottom circle resets x if it reaches the x border
  //resets size when it hits the y border
  //it also resets y once it reaches the line 
  
  //Checking if x has reached the width
  if(bottomCircleX >= width){
    //Reseting X
    bottomCircleX = 0;
  }
  //Checking if the y has reached the line
  //Not using else if here because it can cause the circle to draw on the other side of the line for one frame
  if(bottomCircleY <= height/2){
    //reseting the y and diameter
    bottomCircleY = 800;
    bottomCircleDiameter = 40;

  }


  //The line that seperates the middle

  //The colour and width
  stroke(0, 255, 100);
  strokeWeight(5);

  line(0, height/2, width, height/2);


  //Line at the bottom of the gif 
  stroke(0, 255, 100);
  strokeWeight(10);

  line(0, height, width, height);

}
