

function setup() {
  createCanvas(800, 500);
  background(0);
}

function draw() {

  //Getting how much rgb one x pixel is
  xPixelRatio = 255 / width

  //Getting how much rgb one y pixel is
  yPixelRatio = 255 / height


  //RGB values are determined by the x and y of where the mouse is
  //They are then times by the ratio so the values don't get limited
  //B is always 255 to make the effect
  var r = mouseX * xPixelRatio
  var g = mouseY * yPixelRatio
  var b = 255
  fill(r, g, b)
  ellipse(mouseX, mouseY, 25, 25)
}
