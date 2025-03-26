let myFont; 
let myMessage = "Waste"

function preload(){
  myFont = loadFont("Louis George Cafe.ttf")
}

function setup() {
createCanvas(800, 800);


}

function draw() {
  background(148, 195, 224);

  textFont(myFont)
  text(myMessage, 325, 300);
  textSize(30)
  
  star(100, 100, 30, 70, 5);
 // fill ("yellow")
  star(225, 100, 30, 70, 5);
  star(350, 100, 30, 70, 5);
  star(475, 100, 30, 70, 5);
  star(600, 100, 30, 70, 5);
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
