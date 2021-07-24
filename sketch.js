var path,jaxon,pathImg,jaxonImg,powerImg;
var pathImg


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
 jaxonImg = loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200);
  jaxon = createSprite(200,300,50,50);
  jaxon.addAnimation("running", jaxonImg);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  jaxon.scale = 0.1;
}

function draw() {
  background(0);
if(path.y > 400){
  path.y = height/2;
 
}



drawSprites();
jaxon.x = mouseX; 
}


