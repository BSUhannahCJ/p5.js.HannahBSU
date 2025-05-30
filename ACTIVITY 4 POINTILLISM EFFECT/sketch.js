function preload() {
  p = loadImage("minecraft-map-1440-x-900-wallpaper-3kkuct0xg4t8ba3p.jpg");
}

function setup() {
  createCanvas(400, 400);

  background(p);
}

function draw() {
  //picks random pixel/point on grid on 400 x 400 canvas
  x = random(width);
  y = random(height);

  //gets the color from radom point on canvas
  var color = get(x, y);

  //and displays it as a rect
  noStroke();
  fill(color[0], color[1], color[2], 255);
  rectMode(CENTER)
  rect(x, y, 10, 10);
}
