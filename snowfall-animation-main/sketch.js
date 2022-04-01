const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bgimg,iceGroup;
var ice = [];

function preload(){
  bgimg=loadImage("snow3.jpg");
  //ice=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world= engine.world;
  iceGroup = new Group();
  if(frameCount % 150 === 0){

    for(var i=0; i<100; i++){
        ice.push(new Ice(random(0,1000), random(0,1000)));
    }
}
}
function draw() {
  background(bgimg);  
  Engine.update(engine);

  for(var i = 0; i<100; i++){
    ice[i].display();
    ice[i].updateY()
    
}
  drawSprites();
  //spawnice();
}
function spawnice()
{

}
