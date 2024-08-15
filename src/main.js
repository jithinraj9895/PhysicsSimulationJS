// Import the Ball class from the src directory
import Ball from './Bodies/Ball.js';
import Engine from './Engine/Engine.js';
import world from './Utility/World.js';
import getRandomInt from './Utility/utility.js';
import Box from './Bodies/Box.js';
import mousePointer from './Utility/Mouse.js';
import Vector from './Utility/vector.js';

const canvas = document.getElementById("can");
const w1 = new world(canvas);
w1.isCollisionActive = true;
w1.enableBoundaries();
const engine = new Engine(w1);
// Create an instance of Ball
engine.startEngine();

var counter = 0;
function createBall(){
    if(check.checked){
        engine.isLine = true;
    }else{
        engine.isLine = false;
    }
    console.log("the_value "+ getRandomInt(200,400));
    const ball = new Ball(20, getRandomInt(200,500),getRandomInt(200,500)); 
    if(cor.value > 0)
        ball.restitution = cor.value;
    engine.bodies[counter] = ball;
    counter++;
}

function createBoxs(){
    const box = new Box(0,0,0,0);
    box.x = getRandomInt(100,200);
    box.y = getRandomInt(100,200);
    engine.bodies[counter] = box;
    counter++;
}


function changeCanvas(){
    var ch = document.getElementById('canvasheight').value;
    var cw = document.getElementById('canvaswidth').value;
    w1.canvas.height = ch;
    w1.canvas.width = cw;
}

function changeSelectedBall(){
    var r = document.getElementById('lastBallRadius').value;
    mousePointer.pointedBody.radius = r;
}

const button = document.getElementById('createball');
const boxButton = document.getElementById('createbox');
const check = document.getElementById('addLinesChkBox');
const cor = document.getElementById('cor');

const changeCanvasBtn = document.getElementById('changeCanvas');
const changeRadiusBtn = document.getElementById('radiusChange');


// Attach the event listener
button.addEventListener('click', createBall);
boxButton.addEventListener('click', createBoxs);
changeCanvasBtn.addEventListener('click', changeCanvas);
changeRadiusBtn.addEventListener('click', changeSelectedBall);


