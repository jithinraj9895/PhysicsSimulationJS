import Vector from "../Utility/vector.js";

// Define the Body class
class Body {
    // Properties with default values
    dt = 0.1;
    x = 0;
    y = 0;
    // Constructor to initialize velocity and acceleration
    constructor(vx, vy, ax,ay){
        this.vx = vx;
        this.vy = vy;
        this.ax = ax;
        this.ay = ay;
    }

    // Method to update position based on velocity and acceleration
    move() {
        this.vx += this.ax * this.dt;
        this.vy += this.ay * this.dt;
        this.x += this.vx * this.dt;
        this.y += this.vy * this.dt; // Note: Changed to this.vy

    }
}

export default Body;

