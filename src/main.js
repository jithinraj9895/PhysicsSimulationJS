// Import the Ball class from the src directory
import Ball from './Bodies/Ball.js';
import Engine from './Engine/Engine.js';
import world from './Utility/World.js';
import getRandomInt from './Utility/utility.js';

const canvas = document.getElementById("can");
const w1 = new world(canvas);
w1.isCollisionActive = true;
w1.enableBoundaries();
const engine = new Engine(w1);
// Create an instance of Ball
engine.startEngine();

var counter = 0;
function createBall(){
    console.log("the_value "+ getRandomInt(200,400));
    const ball = new Ball(10, getRandomInt(-20,20), getRandomInt(-20,20), 0, 0.8); 
    ball.x = getRandomInt(200,400),ball.y = getRandomInt(200,400);
    engine.bodies[counter] = ball;
    counter++;
}

const button = document.getElementById('createball');
// Attach the event listener
button.addEventListener('click', createBall);