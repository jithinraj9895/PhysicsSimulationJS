import Vector from "../Utility/vector.js";

// Define the Body class
class Body {
    // Properties with default values
    dt = 0.1;
    // Constructor to initialize velocity and acceleration
    constructor(x,y,velocity, acceleration){
        this.position = new Vector(x,y); // Initial position
        this.velocity = velocity; // Velocity as a vector { x: vx, y: vy }
        this.acceleration = acceleration;
    }

    // Method to update position based on velocity and acceleration
    move() {
        //console.log("body position X:"+this.position.x+": acceleration in :"+this.acc.x+": velocity in :"+this.vel.x);
        this.velocity.x += this.acceleration.x * this.dt;
        this.velocity.y += this.acceleration.y * this.dt;

        // Update position with velocity
        this.position.x += this.velocity.x * this.dt;
        this.position.y += this.velocity.y * this.dt;
    }

}

export default Body;

