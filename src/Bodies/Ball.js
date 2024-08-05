import Body from "./Body.js"

class Ball extends Body {

    constructor(radius = 10, vx = 0, vy = 0, ax = 1, ay = 1) {
        super(vx, vy, ax, ay);
        
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    draw(ctx){
        console.log("in_draw");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#1E90FF";
        ctx.fill();
        ctx.closePath();
    }

    setBoundaries(canvas){
        if (this.x + this.radius > canvas.width) {
            this.x = canvas.width - this.radius;
            this.vx *= -1;
        }
  
        if (this.y + this.radius > canvas.height) {
            this.y = canvas.height - this.radius;
            this.vy *= -1;
        }
  
        if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.vx *= -1;
        }
  
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.vy *= -1;
        }
    }
}

export default Ball;

