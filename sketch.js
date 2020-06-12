var car, wall;
var speed, weight;



function setup(){
createCanvas(1400,400);
speed = random(55,60);
weight = random(400,3000);
car = createSprite(50,200,50,50);
car.shapeColor = "black"
wall = createSprite(1300,200,60,height/2);
wall.shapeColor = "Black";


}

function draw(){
    background (225);
    drawSprites();
car.velocityX = speed;
if(wall.x - car.x < (car.width+wall.width)/2){
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509; 
if(car.bounceOff(wall)){
if(deformation > 180){
car.shapeColor = color(225,0,0);
}
if(deformation < 180 && deformation > 100){
car.shapeColor = color(230,230,0);
}
if(deformation < 100){
car.shapeColor = color (0,225,0);
}
}
}
if(car.isTouching(wall)){
    car.velocityX = 0;
}
}