function preload() {

b = loadImage('pexels-steve-1585325.jpg');

}


function setup () {

createCanvas (600, 500);

}


function draw() {
  
background(b)

var lvls = map(mouseY, 0, height, 2, 20);

filter(POSTERIZE, lvls)
}