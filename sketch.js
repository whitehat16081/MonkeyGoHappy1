
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score
var invisibleGround;
var GameOverBro;
var PLAY=1;
var END=0;
var GameState=PLAY;

var score=0;
var gameOver;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 GameOverBro = loadImage("gameOver.png");
}



function setup() {
  monkey = createSprite(100,150,20,20);
monkey.addAnimation("running", monkey_running);
 // monkey.collide(invisibleGround);
   monkey.scale=0.15;
  invisibleGround = createSprite(300,270,600,10);
  gameOver=createSprite(300,150,100,100);
  gameOver.addImage("Over",GameOverBro);
  gameOver.visible=false;
 
  FoodGroup=new Group();
  obstaclesGroup=new Group();
  score = 0;

}


function draw() {
 createCanvas(600,300);
  background(250);
  console.log(frameCount);
 if(GameState===PLAY){
   if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY=-12;
      }
    score = score + Math.round(getFrameRate()/60);
     
  }
  
    else if (monkey.isTouching(obstaclesGroup)){
        gameState = END;
    }
  else if(GameState===END){
    
    
    obstaclesGroup.destroyEach();
    FoodGroup.destroyEach();
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    invisibleGround.destroy();
    gameOver.visible=true;
    
  }
    
    
    
    
    
  
  
  monkey.velocityY=monkey.velocityY+1;
  spawnObstacles();
  spawnFood();
drawSprites();
  //console.log(getFrameRate());
   monkey.collide(invisibleGround);
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
  
}
function spawnObstacles() {
  if(frameCount % 100 === 0) {
     obstacle = createSprite(600,250,10,40);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
   
    obstacle.addImage("stone", obstacleImage);
    
              
   
    obstacle.lifetime = 300;
   
    obstaclesGroup.add(obstacle);
    
  }
}





