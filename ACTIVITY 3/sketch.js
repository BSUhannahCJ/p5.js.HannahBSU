function setup() {
  createCanvas(625, 400);
  color1 = color(41, 40, 74);
  color2 = color(32, 46, 71);

  //background sky
  for (let y = 0; y < height; y++) {
    stroke(lerpColor(color1, color2, map(y, 0, height, 0, 1)));
    line(0, y, width, y);
  }  
  
  //ufo light underneath
  push();
  translate(170,98);
  fill(101, 102, 65);
  noStroke();
  triangle(290, 300, 10, 300, 140, 50);
  pop();
  
  noStroke();
  fill(83, 84, 53);
  ellipse(320,398,271,30);
  
  //ufo bottom
  stroke(0);
  fill(60, 107, 62);
  ellipse(310,200,360,80);
  
  //ufo lights
  stroke(0);
  fill(207, 173, 81);
  ellipse(310,210,26,30);
  
  push();
  translate(250, 207); 
  stroke(0);
  fill(207, 173, 81);
  rotate(PI / 5);
  ellipse(0,0,26,30);
  pop();
  
  push();
  translate(200, 199); 
  stroke(0);
  fill(207, 173, 81);
  rotate(PI / 3);
  ellipse(0,0,26,30);
  pop();
  
  push();
  translate(370,208); 
  stroke(0);
  fill(207, 173, 81);
  rotate(-PI / 8);
  ellipse(0,0,26,30);
  pop();
  
  push();
  translate(425,202); 
  stroke(0);
  fill(207, 173, 81);
  rotate(-PI / 4);
  ellipse(0,0,26,30);
  pop();
  
  //ufo top
  translate(width / 2 - 100, 100);
  fill(119, 181, 209);
  strokeWeight(1.5);
  beginShape();
  vertex(0, 50);
  bezierVertex(25, 0, 175, 0, 200, 50); 
  vertex(200, 75); 
  bezierVertex(100, 90, 100, 90, 0, 75); 
  vertex(0, 50);
  endShape();
  
 //ufo window light
  fill(180, 219, 237);
  noStroke();
  push();
  translate(50,30);
  rotate(-PI/9);
  ellipse(0,0,40,6);
  pop();
  
  
  
}



