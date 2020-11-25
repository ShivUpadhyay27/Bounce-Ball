const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//var ground, ball;
var object,ball ;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   var object_options ={
    isStatic: true
    }

    object = Bodies.rectangle(200,390,200,20, object_options);
    World.add(world,object);
    var ball_options ={
    restitution:0.6 
    
    }
    ball = Bodies.circle(200,200,50,ball_options) ;
    World.add(world,ball) ;
}

function draw(){
    background("pink");
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x, object.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 50,50);
}