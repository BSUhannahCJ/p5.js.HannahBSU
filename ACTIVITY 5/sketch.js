function setup() {
  createCanvas(400, 400);
  background('black');
  stroke('white');
  //puts rectangles in center
  rectMode(CENTER);
  
  //variable for space in between
  let s = 80;
  
  let i = 0; 

  for (let x = 0; x < width + 50; x += s) {
    for (let y = 0; y < height + 50; y += s) {

      //rgb color
      fill(
        178 + 77 * sin(i / 5),
        178 + 77 * sin(i / 10),
        178 + 77 * sin(i / 15),
        178 + 77 * sin(i / 20),
      );

      //lines
      line(x, y, x + s, y);
      line(x, y, x, y + s);

      //squares
      square(x + s / 2, y + s / 1, 70);

      square(x + s / 2, y + s / 2, 60);
      
      square(x + s / 2, y + s / 2, 50);
      
      square(x + s / 2, y + s / 1, 40);

      i++;
    }
  }
}
