import getRandomInt from "../Utility/utility.js";
import Vector from "../Utility/vector.js";
import Body from "./Body.js"

class Ball extends Body {
    color = "#1E90FF";
    default_color = "#1E90FF";
    restitution = 1;
    constructor(radius = 10,x = 12,y=400, velocity = new Vector(getRandomInt(-20,20),getRandomInt(-20,20)),
     acceleration = new Vector(getRandomInt(-2,2),getRandomInt(-2,2))) {
        super(x,y,velocity, acceleration);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    setBoundaries(canvas){
        if (this.position.x + this.radius > canvas.width) {
            this.position.x = canvas.width - this.radius;
            this.velocity.x *= -1;
        }
  
        if (this.position.y + this.radius > canvas.height) {
            this.position.y = canvas.height - this.radius;
            this.velocity.y *= -1;
        }
  
        if (this.position.x - this.radius < 0) {
            this.position.x = this.radius;
            this.velocity.x *= -1;
        }
  
        if (this.position.y - this.radius < 0) {
            this.position.y = this.radius;
            this.velocity.y *= -1;
        }
    }

    checkCollision(other) {
        const dist = this.position.subtract(other.position).magnitude();
        if (dist < this.radius + other.radius) {
            // Simple elastic collision response
            const normal = this.position.subtract(other.position).normalize();
            const relativeVelocity = this.velocity.subtract(other.velocity);
            const velocityAlongNormal = relativeVelocity.dot(normal);

            if (velocityAlongNormal > 0) return;

            const impulse = (2 * velocityAlongNormal) / (this.radius + other.radius);
            this.velocity = this.velocity.subtract(normal.multiply(impulse * other.radius)).multiply(this.restitution);
            other.velocity = other.velocity.add(normal.multiply(impulse * this.radius)).multiply(this.restitution);
        }
    }
}

export default Ball;

