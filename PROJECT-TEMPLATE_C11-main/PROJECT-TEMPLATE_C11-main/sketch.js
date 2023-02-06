var ship,ship_running,seaImg,sea
function preload(){
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(500,500,40,10);
  ship.addAnimation("running",ship_running);
  ship.scale = 0,6
  sea = createSprite(500,550,40.10)
  sea.addImage(seaImg)
  sea.scale = 0,6;
}

function draw() {
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  if(keyDown("right")){
    velocityX = +10;
   }
   if(keyDown("left")){
    velocityX = -10;
   }
  
   background("blue");
    drawSprites();

 
}
