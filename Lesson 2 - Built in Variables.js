

function setup() {
 createCanvas(500, 500);
 background(200);
}

function draw() {
  //Getting random rgb numbers
  fill(random(255), random(255), random(255));

  //Making random circles in different places but respecting the screen size
  ellipse(random(width), random(height), 25, 25);
}

function keyPressed(){
  //Getting random colour again
  fill(random(255), random(255), random(255));

  //Rectangle with random width and random height (limit is the screen width and height) starting in the top left 
  rect(0, 0, random(width), random(height));
}

function mousePressed(){
  //Only need to clear so just use background();
  background(200);
}
