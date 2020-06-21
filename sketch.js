const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  box1=new Box(200,300,50,400);
  box2= new Box(250,300,50,240);
  box3= new Box(150,300,50,240);
  box4=new Box(100,300,50,200);
  box5= new Box(300,300,50,200);
  box6= new Box(43,300,63,440);
  box7= new Box (355,300,63,440);
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  
  triangle(200,30,169,100,231,100); 
  fill("blue"); 
  triangle(100,150,70,210,130,210); 
  fill("blue"); 
  triangle(300,150,269,210,331,210); 
  fill("red"); 
  triangle(40,10,10,80,70,80); 
  fill("red"); 
  triangle(360,10,330,80,390,80); 
  fill("yellow");


}