canvasHeight = 600
canvasWidth = 600

let flocon;

function preload() {
  flocon = loadImage('flocon.svg');
}

function setup() {
  createCanvas(canvasHeight, canvasWidth);
  //createLoop({duration:10, gif:true})
}

let rotationPos = 0
let rotationNeg = 0
let a = 0
let floconSize = 50
let floconMaxSize = 65
let vitesseRotation = 0.04
let vitesseZoom = 1.8

function draw() {
  background(255)

  let numRows = 8
  let numbCols = 8
  let cellSizeWidth = canvasHeight/numbCols
  let cellSizeHeight = canvasWidth/numRows
  


  for (let row=0; row < numRows; row+=1){
    for (let col=0; col < numbCols ; col+=1){
      console.log(cos(a))
      push()
      if(col*row%2 == 0){
        floconSize = sin(a + row + col) * floconMaxSize
      } else{
        floconSize = cos(a + row + col) * floconMaxSize
      }
      translate(col*cellSizeWidth + cellSizeWidth/2, row*cellSizeHeight + cellSizeHeight/2)
      if(col*row%2 == 0){
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
  
}