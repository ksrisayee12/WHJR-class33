const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var sling1, sling2;
var restart;
var sound;
var bgm;
var reattach;
var pigLaugh;
var hour;
var Visiblity = 255;
var minute;
var score = 0;
var gameState = "onSling"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    sling1 = loadImage("sprites/sling1.png");
    sling2 = loadImage("sprites/sling2.png");
    restart = loadImage("sprites/reset.png");
    sound = loadSound("sprites/angry-birds-sound-sms.mp3");
    bgm = loadSound("sprites/Angry Birds Theme.mp3");
    reattach = loadSound("sprites/angry_birds.mp3");
    pigLaugh = loadSound("sprites/angry_birds_pig.mp3")
  //  getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:60});
    pigLaugh.play();
    bgm.loop()
   
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(35);
    fill("white");
    text("Score "+ score, width-300, 50);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    image(sling1, 200, 30);
    
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();  
    image(sling2, 170, 20);
    image(restart, 1100, 10, 100, 100);
    pig1.score();
    pig2.score();
    
}

//function mousePressed(){
//    mousePressedOver(restart)
//        slingshot.attach(bird.body);
//        gameState = "onSling"
//    
//}
//
function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    sound.play();
    gameState = "launched"
}

function keyPressed(){
	if (keyCode === 32){
        slingshot.attach(bird.body);
        reattach.play();
        gameState = "onSling"
    }
}

//async function getTime(){
//    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//    var responseJSON = await response.json();
//
//    var  dateTime = responseJSON.datetime;
//   // console.log(dateTime);
//   
//    hour = dateTime.slice(11,13);
//  //  console.log(hour);
//
//    minute = dateTime.slice(14,16);
//  // console.log(minute);
//
//    if (hour>=6 && hour<17){
//        bg = "sprites/bg.png"
//    }
//    else if (hour == 18 && minute <= 02){
//        Visiblity -= 5;
//        tint(255, Visiblity)
//        image(backgroundImg, 1200, 400);   
//      //  console.log(Visiblity);
//        getTime();    
//    }
//    else{
//        bg = "sprites/bg2.png"
//    }
//
//  
//    backgroundImg = loadImage(bg);
//
//   
//  
//}