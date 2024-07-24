let ground;
let lander;
var lander_img;
var bg_img;
var astroidImg;
var astroidGroup;
var astroid;


var vx = 0;
var g = 0.01;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  astroidImg = loadImage("astroid1.png.png")

}

function setup() {
  createCanvas(1500,690);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  astroidGroup = createGroup()

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0, width, height);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  if (keyDown("left")){
    lander.x = lander.x - 10;
    }

    if (keyDown("right")){
      lander.x = lander.x + 10;
      }

      if (keyDown("up")) {
        lander.y = lander.y - 6;
      }

      if (keyDown("down")) {
        lander.y = lander.y + 6;
      }

  //fall down
  //vy +=g;
 // lander.y+=g;
  spawnObstacle();
  drawSprites();
}

function spawnObstacle(){
  if (frameCount % 125 === 0) {
    astroid = createSprite(Math.round(random(100, 1300)) ,20,20,20);
    astroid.velocityY = 4;
    astroid.addImage(astroidImg);
    astroidGroup.add(astroid)
    astroid.lifetime = 180;
    astroid.scale = 0.3;

    
}
}

