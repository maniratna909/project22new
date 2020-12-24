var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var backg, backgIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("123.gif")
	packageIMG=loadImage("package.png")
	backgIMG=loadImage("trees.gif")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(width/2, height-35, width,10);
//groundSprite.shapeColor="red";
groundSprite.visible= false;


	
engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 220 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background(backgIMG);
  
 backg= createSprite(700,900, 800,700);
 backg.addImage(backgIMG);
 
 packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed()
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }
}



