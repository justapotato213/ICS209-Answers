
function setup(){
  createCanvas(500, 500);
	background(255);
}

function draw(){

  // clear the background
  background(255);

  // drawing some circles
  circles(10, 25, color(123, 123, 123), color(0, 0, 0), 0, 5, 15, false);

  circles(100, 250, color(100, 0, 0), color(0, 255, 255), 2, 20, 3, false);

  circles(450, 100, color(25, 100, 30), color(0, 0, 0), 1, 100, 5, true);

  circles(249, 60, color(255, 0, 255), color(0, 0, 0), 0, 10, 36, false);

}

function circles(xValue, yValue, fillColour, strokeColour, weight, diameter, numOfCircles, randomColor){

  // setting the fill colours and the stroke colours etc.

  // ignore the fill colour if the it is above a certain x value and they don't want random colours
  if (xValue >= 250 && !randomColor){
    fill(0, 255, 0);
  }
  // they want a random color
  else if (randomColor){
    fill(random(255), random(255), random(255));
  }
  else{
    fill(fillColour);
  }
  stroke(strokeColour);
  strokeWeight(weight);
  
  // actually drawing the circle
  for (let i = 0; i < numOfCircles; i++){
    // moves down in y 
    circle(xValue, yValue + diameter * i, diameter);
  }

}
