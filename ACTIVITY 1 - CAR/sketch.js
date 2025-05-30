function setup() {
  createCanvas(625, 400);
  color1 = color(232, 137, 191);
  color2 = color(255, 170, 79);

  for (let y = 0; y < height; y++) {
    stroke(lerpColor(color1, color2, map(y, 0, height, 0, 1)));
    line(0, y, width, y);
  }

  //sunset
  noStroke();
  fill(255, 194, 28);
  ellipse(300,300,400,400)
  
  //road
  noStroke();
  fill(23, 21, 21);
  rect(0,280,700,800);
  
  //shadow 
  noStroke();
  fill(18, 17, 17);
  rect(180,280,360,40,8);
  
  //bottom part of car
  noStroke();
  fill(36, 44, 84);
  rect(165, 197,355, 77, 5);
  
  //top part of car
  fill(36, 44, 84);  
  beginShape();
  vertex(190, 197);  
  vertex(450, 197);  
  vertex(420, 130);  
  vertex(220, 130);  
  endShape();   
  
  
  //windows
  fill(172, 186, 189);  
  beginShape();
  vertex(230, 190);   
  vertex(430, 190);  
  vertex(410, 140);  
  vertex(245, 140);  
  endShape();
  
  //part between windows
  fill(36, 44, 84); 
  rect(310,140,20,80)
  
  //car design
  noStroke();
  fill('white');
  ellipse(330,205,260,3)
  
  //car doors  
  noFill();
  stroke(18, 26, 56);
  rect(330,190,100,60);
  
  
  //car wheels
  stroke(0);
  fill(15, 15, 14);
  ellipse(220, 280, 70, 70); 
  ellipse(465, 280, 70, 70); 
  
  //car door handles
  stroke(153);
  fill(181);
  ellipse();
  ellipse(346,200,26,7);
  
  //lights
  noStroke();
  fill("white");
  ellipse();
  ellipse(519,230,10,30);
  fill(179, 37, 27);
  ellipse(170,215,10,30);
  
  //bumper??
  noStroke();
  fill(135);
  rect(160,265,25,9,3);
  
  noStroke();
  fill(135);
  rect(500,265,25,9,3);

  //wheel details
  stroke(0);
  fill(181);
  ellipse(220, 280, 50, 50);
  ellipse(465, 280, 50, 50);
  
  stroke(135);
  ellipse(220, 280, 30, 30);
  ellipse(465, 280, 30, 30);
  
  //side mirror
  stroke(18, 26, 56);
  fill(36, 44, 84);
  rect(420,175,15,25,4);
    
}