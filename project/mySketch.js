/*
 * @name Star
 * @arialabel Grey background with three white shapes rotating with black outlines. From left to right, a 3-pointed star, a 40-pointed shape, and a 5-pointed star
 * @description The star() function created for this example is capable of
 * drawing a wide range of different forms. Try placing different numbers
 * into the star() function calls within draw() to explore.
 */
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(102);

  push();
  translate(width * 0.8, height * 0.5);
  star(50, -300, 30, 70, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  star(25, 0, 30, 70, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  star(50, -100, 30, 70, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  star(0, 100, 30, 70, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  star(50, -200, 30, 70, 5);
  pop();
 
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
