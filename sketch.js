canvasWidth = 1200
canvasHeight = 630

let flocon;
let myFont

function preload() {
  flocon = loadImage('flocon.svg');
  myFont = loadFont('DarkerGrotesque-Black.ttf')
}


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textFont(myFont)
  textSize(240)
  textAlign(CENTER)
  //createLoop({duration:10, gif:true})
}

let rotationPos = 0
let rotationNeg = 0
let a = 0
let floconSize = 50
let floconMaxSize = 90
let vitesseRotation = 0.01
let vitesseZoom = 1.5

function draw() {
  background(37,60,120)
  fill(236, 103, 15)
  text('JOYEUSES', canvasWidth/2, canvasHeight/2-30);
  text('FÊTES!', canvasWidth/2, canvasHeight/2+170);

  let numRows = 6
  let numbCols = 12
  let cellSizeWidth = canvasWidth/numbCols
  let cellSizeHeight = canvasHeight/numRows
  


  for (let row=0; row < numRows; row+=1){
    for (let col=0; col < numbCols ; col+=1){
      console.log(cos(a))
      push()
      floconSize = sin(a + row + col) * floconMaxSize
      translate(col*cellSizeWidth + cellSizeWidth/2, row*cellSizeHeight + cellSizeHeight/2)
      if(col%2 == 0){
        rotate(rotationPos)
      } else{
        rotate(rotationNeg)
      }
      image(flocon, -floconSize/2, -floconSize/2, floconSize, floconSize)
      pop()
    }
    a += PI/(360*vitesseZoom)
  }
  rotationPos +=vitesseRotation
  rotationNeg -=vitesseRotation

  fill(236, 103, 15, 150)
  text('JOYEUSES', canvasWidth/2, canvasHeight/2-30);
  text('FÊTES!', canvasWidth/2, canvasHeight/2+170);

}