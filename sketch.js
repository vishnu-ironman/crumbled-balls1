
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gry;
var trash;

var base1,base2,base3;
var grt

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;
	
    gry = new Ground(400,390,1800,10)
	trash = new Paper(100,300,20);
	base1 = new dustBin(1070,380,200,20);
	base2 = new  dustBin(970,350,20,50);
  base3 = new dustBin(1180,350,20,50);
  
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  
 
 
   gry.display()
   trash.display();
   base1.display();
   base2.display();
   base3.display();
   
   drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-85})
	}
}



