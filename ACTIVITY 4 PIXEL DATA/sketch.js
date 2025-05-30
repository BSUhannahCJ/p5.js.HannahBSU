//background, x cords, y cords
let b, x, y;

//loads in image
function preload() {
  b = loadImage("images (3).jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //image as background
  background(b);

  //gets current position of the mouse
  x = mouseX;
  y = mouseY;

  //gets the color of the pixel on the coordinates of x and y
  var color = get(x, y);

  //the mouse
  fill(color);
  stroke("black");
  square(x, y, 20);
}
