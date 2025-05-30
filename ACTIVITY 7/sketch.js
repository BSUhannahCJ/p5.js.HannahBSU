function setup() {
  createCanvas(windowWidth, windowHeight);
  //background only drawn once
  background('black');
  stroke('white');
}

function touchMoved() {
  //random rgb fill color
  fill(random(255), random(100,255), random(200,255));
  //current and previous mouse position, making a mouse trial
  rect(mouseX, mouseY, pmouseX, pmouseY);
}
