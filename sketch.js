var player, player_running,player_jump;
var ground,enemy
function preload(){
player_running = loadAnimation("Run_000.png","Run_001.png","Run_002.png","Run_003.png","Run_004.png","Run_005.png","Run_006.png","Run_007.png","Run_008.png","Run_009.png")
 backgroundImage = loadImage("background.jpg") 
 player_jump = loadAnimation("Jump_000.png","Jump_001.png","Jump_002.png","Jump_003.png","Jump_004.png")
idle_player=loadAnimation("Jump_000.png")
bulletImage=loadImage("Bullet-2.png")
alienImage=loadAnimation("skeleton-walking_0.png","skeleton-walking_1.png","skeleton-walking_2.png","skeleton-walking_3.png","skeleton-walking_4.png","skeleton-walking_5.png","skeleton-walking_6.png","skeleton-walking_7.png","skeleton-walking_8.png","skeleton-walking_9.png","skeleton-walking_10.png","skeleton-walking_11.png","skeleton-walking_12.png","skeleton-walking_13.png","skeleton-walking_14.png","skeleton-walking_15.png","skeleton-walking_16.png","skeleton-walking_17.png","skeleton-walking_18.png","skeleton-walking_19.png","skeleton-walking_20.png")
coinSImage=loadImage("Coin_0.png")
}




function setup() {
 createCanvas(1000, 800); 
 
 background1= createSprite(500,350,width,height);
 background1.addImage(backgroundImage)
 background1.scale=0.22
 
 player = createSprite(100,645,20,50);
 player.addAnimation("Stay",idle_player);
 player.addAnimation("Running",player_running);
 player.addAnimation("jumping",player_jump);
 player.scale = 0.25; 

  ground=createSprite(500,710,width,10)
 ground.visible=false;

 alienSGroup=new Group()
 coinSGroup=new Group()
}


function draw() {
background("black")
  //enemy()
 if(keyDown("RIGHT_ARROW")){
  
  player.changeAnimation("Running")
 }
 if(keyDown("RIGHT_ARROW"))
 background1.x-=3
 if(keyWentUp("RIGHT_ARROW")){
  player.changeAnimation("Stay")
 }
 if(background1.x<250){
     background1.x=400
 }
 if(keyDown("UP_ARROW")){
     player.velocityY=-12;
     player.changeAnimation("jumping")
 }
 if(keyWentUp("UP_ARROW")){
    player.changeAnimation("Stay")
 }
player.velocityY+=0.5
 player.collide(ground)
  if(keyDown("space")){
    shootBullet()
  }
  alien()
  coin()
drawSprites();
}
function shootBullet(){
    
      bullet=createSprite(player.x,player.y,50,50)
      bullet.addImage(bulletImage)
      bullet.velocityX=3
      bullet.scale=0.1
     // bullet.setLifetime=300
      
  }
  function alien(){
    if(World.frameCount%100===0){
      alienS=createSprite(600,645,20,50)
      alienS.addAnimation("running",alienImage)
      alienS.scale=0.2
      alienS.velocityX=-3
      alienSGroup.add(alienS)
    }
  }
  function coin(){
    if(World.frameCount%100===0){
      coinS=createSprite(600,345,50,50)
      coinS.addImage(coinSImage)
      coinS.scale=0.2
      coinS.velocityX=-3
      coinSGroup.add(coinS)
    }
  }