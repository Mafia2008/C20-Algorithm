var movingSquare, fixedSquare;

function setup() {
  createCanvas(800,400);
  movingSquare = createSprite(400, 100, 80, 100);
  fixedSquare = createSprite(400, 300, 50, 50);

  movingSquare.velocityY = 3;
  fixedSquare.velocityY = -3;
}

function draw() {
  background(255,255,255);  
  //movingSquare.x = mouseX;
  //movingSquare.y = mouseY;

  /*if(movingSquare.x - fixedSquare.x < (movingSquare.width + fixedSquare.width)/2 
  && fixedSquare.x - movingSquare.x < (movingSquare.width + fixedSquare.width)/2
  && movingSquare.y - fixedSquare.y < (movingSquare.height + fixedSquare.height)/2 
  && fixedSquare.y - movingSquare.y < (movingSquare.height + fixedSquare.height)/2 ){
    fixedSquare.shapeColor = "red";
    movingSquare.shapeColor = "red";
  }else{
    fixedSquare.shapeColor = "green";
    movingSquare.shapeColor = "green";
  }*/

  if(movingSquare.x - fixedSquare.x < (movingSquare.width + fixedSquare.width)/2 
  && fixedSquare.x - movingSquare.x < (movingSquare.width + fixedSquare.width)/2){
   fixedSquare.velocityX = -(fixedSquare.velocityX);
   movingSquare.velocityX = -(movingSquare.velocityX);
  }

  if(movingSquare.y - fixedSquare.y < (movingSquare.height + fixedSquare.height)/2 
  && fixedSquare.y - movingSquare.y < (movingSquare.height + fixedSquare.height)/2){
    fixedSquare.velocityY = -(fixedSquare.velocityY);
    movingSquare.velocityY = -(movingSquare.velocityY);
  }
  drawSprites();
}