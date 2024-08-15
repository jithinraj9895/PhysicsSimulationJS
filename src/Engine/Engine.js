import Ball from "../Bodies/Ball.js";
import Box from "../Bodies/Box.js";
import mousePointer from "../Utility/Mouse.js";
class Engine{
    bodies = [];
    ctx;
    world;
    animationFrameId;
    isLine = false;

    constructor(world){
        this.ctx = world.ctx;
        this.world = world;
        // Bind the update method to ensure it has the correct context
        this.update = this.update.bind(this);
    }

    update(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        console.log(mousePointer.x);
        //to stop the engine before it cant handle the bodies, need to optimize the loop.
        if(this.bodies.length > 1000){
            this.stopEngine();
        }

        for(let i = 0;i<this.bodies.length;i++){
            this.bodies[i].draw(this.ctx);
            this.bodies[i].move();
            mousePointer.selectedBody(this.bodies[i],this.ctx);
            //check boundaries are activated in the world
            if(this.world.isBounderiesActive && this.bodies[i] instanceof Ball){
                this.bodies[i].setBoundaries(this.ctx.canvas);
            }

            if(this.world.isCollisionActive && this.bodies[i] instanceof Ball){
                for(let j = 0;j<this.bodies.length;j++){
                    if(this.bodies[i]!=this.bodies[j]){
                        this.bodies[i].checkCollision(this.bodies[j]);
                        if(this.isLine){
                            this.drawLine(this.bodies[i].position.x,this.bodies[i].position.y,this.bodies[j].position.x,this.bodies[j].position.y)
                        }
                    }
                }
            }
        }
        this.animationFrameId = requestAnimationFrame(this.update);
    }

    startEngine() {
        this.update();
    }
    
    stopEngine() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    drawLine(x1,y1,x2,y2){
        this.ctx.strokeStyle = 'red';  // Change the color of the line here
        this.ctx.lineWidth = 0.2; 
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

}



export default Engine;