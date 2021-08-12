function preload(){
bg=loadImage("images/iss.png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  image(bg,width/2,height/2,500,700);

  imageMode(CENTER);
  drawSprites();
}