//variable for drum parts
var drum, snare, hihat, bass, crash, splash, tom1, tom2, tom3;

let size = 1;

//all the images and sounds loaded here
function preload() {
  
  drum = loadImage("1748512056547.png");
  
  bg = loadImage("Screenshot 2025-05-29 225039.png");
  
  snare = loadSound("snare drum.wav");
  hihat = loadSound("hi hat.ogg");
  bass = loadSound("bass.wav");
  crash = loadSound("crash.wav");
  splash = loadSound('splash.wav')
  tom1 = loadSound("tom 1.wav");
  tom2 = loadSound("tom 2.wav");
  tom3 = loadSound("tom 3.wav");
}

//canvas setup
function setup() {
  createCanvas(690, 500);
}



function draw() {
  
  background(bg);
  
  //drum set image
  image(drum, 100, 0, 500 * size, 500 * size);

  //volume for drum parts 
  snare.setVolume(1);
  hihat.setVolume(1);
  bass.setVolume(1);
  crash.setVolume(1);
  splash.setVolume(1);
  tom1.setVolume(1);
  tom2.setVolume(1);
  tom3.setVolume(1);

  //animation
  size = lerp(size, 1, 0.1);

  //text
  fill("white");
  textSize(10);
  textAlign(CENTER);
  text("CLICK SCREEN BEFORE PRESSING KEYS", 360, 490);
  textSize(15);
  text("snare = s or 1", 59, 250);
  text("hi-hat = h or 2", 59, 265);
  text("bass = b or 3", 56, 280);
  text("crash = c or 4", 57, 295);
  text("tom 1 = t or 5", 57, 310);
  text("tom 2 = o or 6", 58, 325);
  text("tom 3 = m or 7", 60, 340);
  text("splash = k or 8", 59, 358);
  
}

//key functions
function keyPressed() {
  
  size = 1.05;

  if (key == "s") {
    snare.play();
  }

  if (key == "1") {
    snare.play();
  }

  if (key == "h") {
    hihat.play();
  }

  if (key == "2") {
    hihat.play();
  }

  if (key == "b") {
    bass.play();
  }

  if (key == "3") {
    bass.play();
  }

  if (key == "c") {
    crash.play();
  }

  if (key == "4") {
    crash.play();
  }
  

  if (key == "t") {
    tom1.play();
  }

  if (key == "5") {
    tom1.play();
  }

  if (key == "o") {
    tom2.play();
  }

  if (key == "6") {
    tom2.play();
  }

  if (key == "m") {
    tom3.play();
  }

  if (key == "7") {
    tom3.play();
  }
  
   if (key == "k") {
    splash.play();
  }

  if (key == "8") {
    splash.play();
  }
}
