//fft global variable
let fft;

//background image
let b;

//function to load sound and image
function preload() {
  song = loadSound("song.mp3");
  b = loadImage("WhatsApp Image 2025-05-25 at 19.38.11_68d9ffb0.jpg");
}

function setup() {
  createCanvas(600, 550);
  angleMode(DEGREES);
  //plays the song
  song.play();
  //fft object
  fft = new p5.FFT();
}

function draw() {
  background(b);

  //centers it to the middle of the canvas
  translate(width / 2, height / 2);

  var waves = fft.waveform();

  strokeWeight(3);
  stroke("silver");

  //random rgb fill
  fill(random(255), random(255), random(255), random(120));

  //makes it a semi circle
  beginShape();
  for (var i = 0; i < 180; i++) {
    var index = floor(map(i, 0, 180, 0, waves.length - 1));
    var r = map(waves[index], -1, 1, 150, 350);
    var x = r * sin(i);
    var y = r * cos(i);
    vertex(x, y);
  }
  endShape();
}
