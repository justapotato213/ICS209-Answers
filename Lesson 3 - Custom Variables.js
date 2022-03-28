

//Setting variables for both ellipse (x, y and diameter)

var ellipse1X = 0;
var ellipse1Y = 0;

var ellipse1Diameter = 25;

//Can't access width and height from here so have to do this instead
var ellipse2X = 500/2;
var ellipse2Y = 800;

var ellipse2Diameter = 100;




function setup() {
	createCanvas(500, 800);
  background(100);
}

function draw() {
	
  //First ellipse
  fill(255);
  ellipse(ellipse1X, ellipse1Y, ellipse1Diameter, ellipse1Diameter);

  //Changing ellispe1X and ellipse1Y to make it go torwards the right and down
  ellipse1X += 2;
  ellipse1Y += 2;

  //Changing width and height so it gets bigger
  ellipse1Diameter += 0.25


  //Second ellipse
  ellipse(ellipse2X, ellipse2Y, ellipse2Diameter, ellipse2Diameter);

  //Changing x and y to make it go up and right
  //Moves more up then right so change y more
  ellipse2X += 1;
  ellipse2Y -= 11;

  //Changing the size of ellipse2
  ellipse2Diameter -= 0.75;



  //Text part
  //Changing text size
  textSize(25);

  //Making it a random colour
  fill(random(255), random(255), random(255));

  //Actually displaying it on screen
  text("Moving Circles", 100, 30);

  
  //Printing the variables
  //Commented for now becuase it lags repl

  
  //Ellipse 1
  console.log("ellipse1X: " + ellipse1X);
  console.log("ellipse1Y: " + ellipse1Y);
  console.log("ellipse1Diameter: " + ellipse1Diameter);

  //Ellipse 2
  console.log("ellipse2X: " + ellipse2X);
  console.log("ellipse2Y: " + ellipse2Y);
  console.log("ellipse2Diameter: " + ellipse2Diameter);
  

  //Checking when to reset
  //Since ellipse1 is slower, we should only reset when that reaches the right 
  //Adding the diameter to x makes it reset only when the entire circle is off screeen
  
  if(ellipse1X >= width + ellipse1Diameter){
    //Clearing the old stuff
    background(100);

    //Resetting variables for both ellipses (x, y and diameter)
    ellipse1X = 0;
    ellipse1Y = 0;

    ellipse1Diameter = 25;


    ellipse2X = 500/2;
    ellipse2Y = 800;

    ellipse2Diameter = 100;
  }

}
