

function setup() {
 createCanvas(500, 500);
 //Draws the sky as the background
 background(121, 186, 242);
}

function draw() {
  //Drawing the sun before the rest so it gets cut in half
  noStroke();
  //Sets yellow colour
  fill(242, 226, 5);
  //Sun
  ellipse(100, 250, 75, 75);


  //Sun rays
  //Coordinates for the sunrays were made from trial and error so they are not the same length or spaced evenly

  //yellow colour and stroke weight for the rays
  stroke(242, 226, 5);
  strokeWeight(1);

  //First 2 opposite lines
  line(100, 245, 45, 245);
  line(100, 245, 155, 245);

  //Second Pair
  line(100, 245, 50, 230);
  line(100, 245, 150, 230);

  //Third pair
  line(100, 245, 57, 215);
  line(100, 245, 143, 215);

  //Fourth pair
  line(100, 245, 70, 205);
  line(100, 245, 130, 205);

  //Fith pair
  line(100, 245, 86, 198)
  line(100, 245, 114, 198);

  //straight up sun ray
  line(100, 245, 100, 197)


  //Draws line dividing the sky and ground
  stroke(0, 0, 0);
  line(0, 250, 500, 250);


  //Draws ground
  noStroke();
  //Green colour
  fill(29, 242, 82);
  //Grass itself
  quad(0, 250, 500, 250, 500, 500, 0, 500);


  //Draws the house
  strokeWeight(1);
  //Salmon colour
  fill(242, 102, 139);
  //House rectangle
  quad(300, 200, 450, 200, 450, 300, 300, 300);


  //Draws roof

  //Black
  fill(0);
  //Triangle iteself
  triangle(275, 200, 375, 150, 475, 200);


  //Draws Door
  stroke(0);
  // Sets colour to white
  fill(255);
  //Draws it
  rect(350, 215, 50, 75);

  //Draws the doorknob
  //Black colour
  fill(0);
  //Actual shape
  ellipse(360, 250, 5, 5);
  
}
