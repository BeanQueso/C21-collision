var movingRect, fixedRect;

var gameObject1, gameObject2;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "orange";

  gameObject1 = createSprite(100, 300, 50, 50);
  gameObject1.shapeColor = "green"
  gameObject1.velocityX = 4;

  gameObject2 = createSprite(700, 300, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject2.velocityX = -3;
}

function draw() {
  background(255,255,255);  
movingRect.x = mouseX;
movingRect.y = mouseY;

if(isTouching(gameObject1, movingRect)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}else{
  movingRect.shapeColor = "orange";
  gameObject1.shapeColor = "orange";
}
bounceOff(gameObject1, gameObject2);
  drawSprites();
}
