
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
  ????
  }

  var rock_options = {
    restitution: 0.85,

  }
   
   var ground_options ={
     ???
   };
  

  ground = Bodies.rectangle(200,390,400,20,???);
  World.add(world,ground);

  wall = Bodies.rectangle(300,200,200,20,???);
  World.add(world,wall);

  ball = Bodies.circle(100,10,20,???);
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,???);
  World.add(world,rock);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ???(ball.position.x,ball.position.y,20);
  ???(ground.position.x,ground.position.y,400,20);

  ???(rock.position.x,rock.position.y,20);
  ???(wall.position.x,wall.position.y,200,20);
 
}

