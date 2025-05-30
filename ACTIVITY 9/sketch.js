// data values (percentages)
let data = [76.7, 23.3];
//angle of rotation
let a = 0; 


function setup() {
  createCanvas(500, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  
  background("black");
  
  //makes the origin of canvas in the middle
  translate(width / 2, height / 2);

  //incrementation of rotation frame count
  a += 1; 

  for (let i = 0; i < data.length; i++) {
    
    push();
    //space
    translate(0, i * 100);
    //rotates the angle
    rotate(a); 
    noFill();
    strokeWeight(2.5);
    stroke(random(30, 255), random(20, 255), random(10, 255));
    square(0, 0, data[i]);

    pop();
  }
  
  //heading
  push();
  fill('white');
  textAlign(CENTER);
  textSize(17);
  text('SHOULD SMART PHONES BE BANNED IN SCHOOL?', 0,-100);
  pop();
  
  //answers
  push();
  fill('white');
  textAlign(CENTER);
  textSize(15);
  text('yes = 23.3%', -90,110);
  text('no = 76.7%', 110,20);
  pop();
}
