const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint



var engine,world,ground,box1,box2,box3,ball,rope


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  
  ground = new Ground(400,390,800,20)
  box1 = new Box(200,200,75,75)
  box2 = new Box(200,150,50,50)
  box3 = new Box(200,100,25,25)
  ball = new Ball(600,100,100,100)
  rope = new Rope(ball.body,{x:600,y:200})
}

function draw() {
  Engine.update(engine)
  background(0);  
 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  rope.display();
}