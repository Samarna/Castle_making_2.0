const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var door;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground,leftedge,rightedge;
var tri1;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    

    box1 = new Box(100,200,90,150);
    box2 = new Box(295,450,390,70);
    box3 = new Box(50,200,50,500);
    box4 = new Box(550,200,50,500);
    box5 = new Box(95,200,50,400);
    box6 = new Box(475,200,50,400);
    box7 = new Box(200,100,80,350);
    box8 = new Box(400,200,90,150);
    box9 = new Box(300,100,80,350);
    box10 = new Box(250,100,50,250);
    door = new Door(295,400,50,100);
    ground = new Ground(300,600,600,20);
    leftedge = new Ground(-10,300,20,600);
    rightedge = new Ground(600,300,20,600);

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    leftedge.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ground.display();
    door.display();
    fill("pink");
    triangle(180,180,420,180,300,50);
    triangle(-10,95,55,95,27,50);
    triangle(530,95,600,95,565,50);
    triangle(48,195,105,195,77,150);
    triangle(490,195,540,195,515,150);
}
