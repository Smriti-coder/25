
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObj;	
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	//background("blue");


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

    //Cannot switch properties to make paper ball be any smaller
	paperObj = new paper(120, 50, 70);
	
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(230);
 

  groundObject.display();
  dustbinObj.display(); 

  paperObj.display();
  
  
  

}

function keyPressed() {
  if(keyCode === UP_ARROW) {
       
	//Code used for ejecting the paper ball into the trash can  
	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:240,y:-1000});


 }


}

