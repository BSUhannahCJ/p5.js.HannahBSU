function setup() {
  createCanvas(1000, 1000);
  background("black"); //background is set here so it doesn't constantlly draw
  textAlign(CENTER);
  textSize(200);
}

function draw() {
  
  //rgb for loop
  for (let i = 0; i < 400; i = i + 1) {
   fill(
    178 + 177 * sin(i / 20 + frameCount / 40),
    178 + 177 * sin(i + frameCount / 30),
    178 + 177 * sin(i / 30 + frameCount / 22)
  );
  }

  stroke("black");
  strokeWeight(3);
  //makes the text in the center of the canvas
  translate(width / 2, height / 2);
  //rotates text
  rotate(frameCount * 0.02);
  text("2006! ", 0, 0);
}
