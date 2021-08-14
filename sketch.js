
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var wall , wall2 ,surface ;  
 
function preload(){
 //blanck becuase there are no pictures to loade 
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	

	// create bodies here 
	var ball_options= {
		 isStatic:false,
		  restitution:0.3,
		friction:0,
		density :1.2  
		 }

		 

		 ball=bodies.circle(250,230,20,ball_options);
     World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}



