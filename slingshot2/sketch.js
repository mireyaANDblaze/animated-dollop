const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g1,g2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var shooter,arrow;
var spring;
var gameState = "idle";

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;
  g1 = new ground(300,500);
  g2 = new ground(300,200);
  b1 = new box(280,475,30,30);
  b2 = new box(320,475,30,30);
  b3 = new box(300,475,30,30);
  b4 = new box(290,460,30,30);
  b5 = new box(310,460,30,30);
  b6 = new box(280,175,30,30);
  b7 = new box(320,175,30,30);
  b8 = new box(300,175,30,30);
  b9 = new box(290,160,30,30);
  b10 = new box(310,460,30,30);
  spring = new Spring(arrow.body,{x:60,y:740});
  shooter = new Shooter(25,790);
}

function draw() {
  background("black");
  Engine.update(engine);

  if(gameState=="idle"){
    arrow = new Arrow(60,740);
  }
  
  g1.display();
  g2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b8.display();
  b9.display();
  b10.display();
  shooter.display();
  arrow.display();
}

function mouseDragged(){
      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
      gameState = "release"
}


function mouseReleased(){
  arrow.fly();
  gameState="idle";
}