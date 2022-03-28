



function setup() {
  //Setting up background and canvas
	createCanvas(550, 800);
	background(200);
}

function draw() {
  //TRIANGLE

  //triangleX is the bottom left
  let triangleX = 100;
  

	while(triangleX < 500){
    //the colour of the trianlge
    //triangle x will always be a multiple of 100
    //if you divide by 100 you can find how many traingles you have drew
    //63.75 is the inital blue and if you times it by how many triangles you can increase it

    fill(0, 0, 63.75 * (triangleX / 100));

    //Drawing the triangles
    triangle(triangleX, 100, triangleX + 25, 25, triangleX + 50, 100);

    //Distance between the different triangles
    triangleX += 100;
  }


  //SQUARES & LINES
  
  //Initial square variables

  //Colour
  let squareRed = 0;
  //Y coord
  let squareY = 25;

  //Inital line values
  let lineColour = 0;

  for(let rectangleCount = 7; rectangleCount > 0; rectangleCount--){
    //reseting the stroke colour
    stroke(0);

    //Setting the colour
    fill(squareRed, 0, 0);
    //Drawing the squares

    //Square on the left
    square(30, squareY, 50);
    //Square on the right (math makes sure its the same distance away from the border as the left square)
    square(width - 50 - 30, squareY, 50);

    //Changing values 
    squareY += 50;
    squareRed += 36;


    //Line part
    stroke(lineColour);
    //X will be the same as the square + its width for all the left lines
    //X will be the same as the square for the right lines
    //Y will be the same as the square but minus its width

    //Line on the left
    line(width/2, height, 80, squareY - 50);

    //Line on the right
    line(width/2, height, width - 50 - 30, squareY - 50);

    //Changing the colour
    lineColour += 36;

  }

  //resets the stroke colour
  stroke(0);



  //CIRCLES

  //Setting intial variables
  let circleCount = 5;
  //Colour 
  let circleGreen = 55;
  //X coord
  let circleX = 225;

  while(circleCount > 0){
    //Setting the circle colours
    fill(0, circleGreen, 0);
    //Drawing the circles
    circle(circleX, 150, 25);
    //Changing the amount of circles left to draw
    circleCount--;
    //Changine the coordanites
    circleX += 25;
    //Changing the colour
    circleGreen += 50;

  }

  


  

}
