var ball;
var ball1;
function setup() {
  createCanvas(800,800);
  ball = createSprite(200,200,20,20);
  ball1 = createSprite(200,300,20,20);
}

function draw() 
{
  background("pink");
  if(keyDown(UP_ARROW)){
    ball.y = ball.y - 5
  }
  if(keyDown(DOWN_ARROW)){
    ball.y = ball.y + 5
  }
  if(keyDown(RIGHT_ARROW)){
    ball.x = ball.x + 5
  }
  if(keyDown(LEFT_ARROW)){
    ball.x = ball.x - 5
  }
  if(keyDown("space")){
    ball1.shapeColor = "red"
  }
  if(keyDown("a")){
    ball.shapeColor = "green"
  }
drawSprites();
}




