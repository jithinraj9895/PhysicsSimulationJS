import Body from "./Body.js"

class Box extends Body {
    width = 55;
    height = 55;
    borderWidth = 0.2;
    constructor(vx = 0, vy = 0, ax = 1, ay = 1,color = 'rgba(0, 0, 255, 0)',borderClr = 'black') {
        super(vx, vy, ax, ay);
        this.color = color;
        this.borderClr = borderClr;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = this.borderClr;
        ctx.lineWidth = this.borderWidth;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}

export default Box;