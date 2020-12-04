       /* const Engine =  Matter.Engine;
        const World =  Matter.World;
        const Bodies = Matter.Bodies;
        // namespacing


        var myengine,myworld,ground;

                function setup(){
                createCanvas(400,400);
                    myengine=Engine.create();
                    myworld=myengine.myworld;
                    ground = Bodies.rectangle(200,300,50,50);
 
                    World.add(myworld,ground);
                    ground=Bodies.rectangle(200,300,50,50);
                    World.add(myworld,ground);

                  // console.log(myground);
                }

                function draw() {
                    background(0);
                    
                    rectMode(CENTER);
                    rect(200,200,50,50);

                }*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;
function setup() {

  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  
var options ={

    isStatic:true
}
var groundoptions = {

restitution:1.25



}
  ground = Bodies.rectangle(200,390,200,20,options);
  ball=Bodies.circle(200,200,20,groundoptions);
  World.add(world,ground);
 World.add(world,ball);
  

  console.log(ground);
console.log(ground.position.x);
console.log(ground.position.y);


//ball.Color="pink";
}

function draw() {
  background(0); 
  Engine.update(engine);
 
  rectMode(CENTER); 
  //rect(200,200,50,50);

  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

 
}