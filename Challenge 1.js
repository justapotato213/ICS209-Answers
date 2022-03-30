
function setup() {
  createCanvas(800, 500);
  background(255);
}

function draw() {
  //Need to make arcs around corresponding colours of ellipses


  //Yellow arc
  noFill();
  //Setting up colour and weight
  stroke(220, 242, 53);
  strokeWeight(10);
  
  //Angle is in radians
  arc(width/2, height/2, 200, 200, 3.14159, 6);
  
  //Corresponding ellipse
  noStroke();
  fill(220, 242, 53);
  ellipse(width/2, height/2, 5, 5);


  //Blue arc
  noFill();
  //Setting up colour and weight
  stroke(53, 154, 242);
  strokeWeight(5);
  //Arc is 15 off from the original
  arc(width/2, height/2 - 15, 200, 200, 3.3, 6.28);

  //Blue ellipse
  noStroke();
  fill(53, 154, 242);
  ellipse(width/2, height/2 - 15, 5, 5);

  
  //Red arc
  noFill();
  //Setting up colour and weight
  stroke(242, 53, 53);
  strokeWeight(10);
  //Arc is ~40 off from the original
  arc(width/2, height/2 - 40, 230, 230, 3.1, 6.5);

  //Red ellipse
  noStroke();
  fill(242, 53, 53);
  ellipse(width/2, height/2 - 40, 5, 5);


  //Green arc
  noFill();
  //Setting up colour and weight
  stroke(53, 242, 119);
  strokeWeight(10);
  //Green is ~45 off from the original
  arc(width/2, height/2 - 45, 240, 240, 2.6, 6.6);

  //Green ellipse
  noStroke();
  fill(53, 242, 119);
  ellipse(width/2, height/2 - 45, 5, 5);


  //Purple arc (Should be rendered last because its on top of everything)
  noFill();
  //Setting up colour and weight
  stroke(167, 53, 242);
  strokeWeight(3);
  //Arc is ~25 off from the original and spaced out more
  arc(width/2, height/2 - 25, 250, 250, 3.1, 6.5);

  //Purple ellipse
  noStroke();
  fill(167, 53, 242);
  ellipse(width/2, height/2 - 25, 5, 5);

}
