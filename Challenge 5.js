function setup() {
  createCanvas(425, 900);
  background(255);
}

function draw() {
  //Top circles

  //Inital stuff
  topCircleX = 25;
  topCircleY = 25;
  topCircleColour = 0;

  stroke(0);

  //how many rows to draw
  for(let rows = 16; rows > 0; rows--){
    //how many circles in a row
    for(let circles = 16; circles > 0; circles--){
      //Sets the colour
      fill(topCircleColour);
      //sets the place
      circle(topCircleX, topCircleY, 25);
      //changing the colour and the x
      topCircleColour += 1;
      topCircleX += 25;
    }
    //Changes the y
    topCircleY += 25;
    //Resets the x for the next row
    topCircleX = 25;
  }


  //Bottom circles
  //big circle slowly gets smaller while colour gets more intense
  
  noStroke();

  for(let circleNum = 255; circleNum > 0; circleNum--){
    //circleNum decides the amount of green
    //the minus provides the intial green values so it becomse more pronounced
    fill(255, circleNum - 30, 255);
    //draws the circle
    circle(width/2, 700, circleNum);

  }

}
