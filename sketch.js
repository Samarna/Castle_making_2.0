const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,100,50);
  box2 = new Box(150,200,50,50);
  box3 = new Box(100,200,50,100);
  box4 = new Box(200,200,50,100);
  ground = new Ground(200,390,400,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}
