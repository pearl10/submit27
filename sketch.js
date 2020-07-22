
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint=Matter.Constraint;
var roof;
var rope,rope2,rope3,rope4,rope5;
var ball1,ball2,ball3,ball4,ball5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ball1=new Ball(260,400);
  ball2=new Ball(320,400);
  ball3=new Ball(380,400);
  ball4=new Ball(440,400);
  ball5=new Ball(500,400);
  roof=new Roof (400,200,400,20);
  rope=new Rope(ball1.body,roof.body,-120,0)
  rope2=new Rope(ball2.body,roof.body,-60,0)
  rope3=new Rope(ball3.body,roof.body,0,0)
  rope4=new Rope(ball4.body,roof.body,60,0)
  rope5=new Rope(ball5.body,roof.body,120,0)
  
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  drawSprites();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 rope.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 roof.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:-10});
	
	
	}
	
	
	
	
	
	
	
	}
	
	
	
	

