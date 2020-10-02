var rabbit, r1_img, carrot, carrot_image;

var bg, bg_img;

var PLAY = 1
var END = 0;
var Gamestate = "PLAY";

function preload()
{
bg_img = loadImage ("bg.jpg");
r1_img = loadAnimation ("R_standing.jpg","R_running.png");
carrot_image = loadImage ("carrot.png");


}



function setup() {
  createCanvas(800,400);

  bg = createSprite(800,400,1600,400);
   bg.addImage(bg_img);
   bg.scale = 9.2;
   
   rabbit = createSprite(400, 200, 50, 50);
rabbit.addAnimation(r1_img);


   carrot = createSprite(100,100,10,10);
   carrot.addImage(carrot_image);
   carrot.scale = 0.1;

   
   
}



function draw() {
  background(255,255,255);  
  


  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  
  bg. velocityX = -3;

  if(keyDown("right_arrow"))
  {
    rabbit.x = rabbit.x +3;
  }

  
  
  
  
  drawSprites();
}