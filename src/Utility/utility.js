export default function getRandomInt(x,y){
    let seed = Math.floor(Math.random() * 2**32);
    const lcg = new LCG(seed);
    return lcg.randomInt(x,y);
}


//drawing a line between two objects
export function drawLine(b1,b2){
    ctx.strokeStyle = 'red';  // Change the color of the line here
    ctx.lineWidth = 0.2; 
    ctx.beginPath();
    ctx.moveTo(b1.x, b2.y);
    ctx.lineTo(b2.x, b2.y);
    ctx.stroke();
}

export function collision(b1,b2){
    
}


class LCG {
    constructor(seed = 1, a = 1664525, c = 1013904223, m = 2**32) {
        this.seed = seed;
        this.a = a;
        this.c = c;
        this.m = m;
        this.state = seed;
    }

    // Generates the next random number
    next() {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    }

    // Generates a random float in the range [0, 1)
    random() {
        return this.next() / this.m;
    }

    // Generates a random integer between min (inclusive) and max (exclusive)
    randomInt(min, max) {
        return Math.floor(this.random() * (max - min) + min);
    }
}


