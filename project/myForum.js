function preload(){
    myFont = loadFont("Antarlika.otf")
  }
let myQuestion = "If you were a season, what season would you be?"
 
let contents = "";
let all_the_answers = []

let saveAnswer_button; 
let textBox; 

function setup() {
  createCanvas(500, 400);
  saveAnswer_button = createButton("save your answer");
  saveAnswer_button.position(220,150)
  saveAnswer_button.mousePressed(saveText)
  
  
  textBox = createInput("type your answer here")
  textBox.size(200,40)
  textBox.position(50,100)
  textBox.input(storeText)
  textBox.attribute('maxlength','30') 
  
  background(230, 242, 255);
  fill(255);
  textSize(30);
  fill("navy");
  textFont(myFont)
  text(myQuestion,50,50) 
}

function draw() {  
    fill("black")
    let yposition=200
    for(let c=0;c<all_the_answers.length;c++){
        text(all_the_answers[c],100,yposition)
        yposition+=50
    }
   

}

function keyTyped() {
    contents = contents + key;
  }
  function showText(){
    text(contents, 50, 250, 400, 200);
    textBox.hide(); 
 }
 
function saveText(){
   all_the_answers.push(contents);
   contents = "" ;
   textBox.value("type your answer here")
   print(all_the_answers)   
}

function storeText(){
    contents = this.value(); 
  }