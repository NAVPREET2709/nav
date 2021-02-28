
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1300,400);
  wall=createSprite(1180, 200, 60, 200);
  car=createSprite(50,200,50,50);
  
speed=random(5,100);
weight=random(400,1500);


}

function draw() {
  background(0);  
  car.velocityX=speed;

if (wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;


var damage =0.5*weight*speed*speed/22500

if(damage>10){

  wall.shapeColor = color (255,0,0)
}
if(damage<10){
  
  wall.shapeColor=color(0,255,0)
}



}
  drawSprites();
}