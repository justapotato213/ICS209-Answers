// x values of all circles 
let xList = [];
// y values of all circles
let yList = [];


let foundCircle = false;
let index = 0;

let hitboxTopLeftX, hitboxTopLeftY;
let hitboxBottomRightX, hitboxBottomRightY;

function setup() {
  createCanvas(500, 500);

}

function draw() {

  background(255);

  // use a for loop to draw all the circles in the lists

  for (let i = 0; i <= xList.length; i++){
    // the same x and y index should correspond to the same circle
    fill(0);
    stroke(0, 255, 0);
    circle(xList[i], yList[i], 20)
  }

}

function keyPressed() {
  background(255);

  // adding the x and y value of the circle to the array
  xList.push(random(width));
  yList.push(random(height));
  
}

function mousePressed(){
  // x and y value will be the same in the corresponding list

  // reseting some variables
  foundCircle = false
  index = 0 

  // going through every circle in the list and findin if we clicked on it
  
  while (!foundCircle && index <= xList.length){

    // the same index in the x and y list will match the same circle

    // setting up a "hitbox"
    
    // top left x will be the x value minus the radius
    hitboxTopLeftX = xList[index] - 10;
    // top left y will be the y value minus the radius
    hitboxTopLeftY = yList[index] - 10;

    // bottom right x will be the x value plus the radius
    hitboxBottomRightX = xList[index] + 10;
    // bottom right y will be the y value plus the radius
    hitboxBottomRightY = yList[index] + 10;

    // actually checking if the mouse is inside the hitbox
    if (mouseX >= hitboxTopLeftX && mouseX <= hitboxBottomRightX && mouseY >= hitboxTopLeftY && mouseY <= hitboxBottomRightY){
      // delete the circle from the array

      xList.splice(index, 1);
      yList.splice(index, 1);
    }

    index += 1;
  }
  

}
