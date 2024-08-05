
class Engine{
    bodies = [];
    ctx;
    world;
    animationFrameId;
    constructor(world){
        this.ctx = world.ctx;
        this.world = world;
        // Bind the update method to ensure it has the correct context
        this.update = this.update.bind(this);
    }

    update(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        //to stop the engine before it cant handle the bodies, need to optimize the loop.
        if(this.bodies.length > 1000){
            this.stopEngine();
        }

        for(let i = 0;i<this.bodies.length;i++){
            this.bodies[i].draw(this.ctx);
            this.bodies[i].move();

            //check boundaries are activated in the world
            if(this.world.isBounderiesActive){
                this.bodies[i].setBoundaries(this.ctx.canvas);
            }

            if(this.world.isCollisionActive){
                for(let j = 0;j<this.bodies.length;j++){
                    this.collisionAll(this.bodies[i],this.bodies[j]);
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

    distance(ball1,ball2){
        let dis_x = ball1.x - ball2.x;
        let dis_y = ball1.y - ball2.y;
        this.drawLine(ball1.x,ball1.y,ball2.x,ball2.y);
        let distance = Math.sqrt(dis_x*dis_x + dis_y*dis_y);
        return distance;
    }

    collisionAll(ball1,ball2){
        if(this.distance(ball1,ball2)<=(ball1.radius+ball2.radius)){
            ball1.vx *= -1;
            ball1.vy *= -1;
            ball2.vx *= -1;
            ball2.vy *= -1;
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