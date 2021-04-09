const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1;
var ball;
var slingShot;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  stand1 = new Ground();
  box1 = new Block(900, 100, 70, 70);
  box2 = new Block(900, 100, 70, 70);
  box3 = new Block(900, 100, 70, 70);
  box4 = new Block(900, 100, 70, 70);
  box5 = new Block(900, 100, 70, 70);
  box6 = new Block(900, 100, 70, 70);
  box7 = new Block(800, 100, 70, 70);
  box12 = new Block(800, 100, 70, 70);

  box8 = new Block(800, 100, 70, 70);

  box9 = new Block(800, 100, 70, 70);

  box10 = new Block(800, 100, 70, 70);

  box11 = new Block(800, 100, 70, 70);

  box13 = new Block(800, 100, 70, 70);
  box14 = new Block(700, 100, 70, 70);
  box15 = new Block(700, 100, 70, 70);
  box16 = new Block(700, 100, 70, 70);

  box17 = new Block(700, 100, 70, 70);

  box18= new Block(700, 100, 70, 70);

  box19 = new Block(700, 100, 70, 70);

  box20 = new Block(700, 100, 70, 70);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);
  
  //slingShot = new Slingshot(this.ball, {x: 100, y:200});

}

function draw() {
  background(random(1, 255), random(1, 255), random(1, 255));  
  drawSprites();
  Engine.run(engine);
  
  stand1.display();
    
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
    
  box11.display();
    
  box12.display();
    
  box13.display();
    
  box14.display();
    
  box15.display();
    
  box16.display();
    
  box17.display();
    
  box18.display();
    
  box19.display();
  
  box20.display();

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 40, 40);

  
  //slingShot.display();
}