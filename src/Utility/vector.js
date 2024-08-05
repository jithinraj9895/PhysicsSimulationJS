export default class vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    add(velocity){
        return new Vector(this.x+velocity.x, this.y+velocity.y);
    }

    subtr(velocity){
        return new Vector(this.x-velocity.x, this.y-velocity.y);
    }

    //to find magnitude
    mag(){
        return Math.sqrt(this.x**2 + this.y**2)
    }

    //to increase magnitude of the vector
    mult(n){
        return new Vector(this.x*n, this.y*n);
    }

    drawVec(start_x, start_y, n, color){
        ctx.beginPath();
        ctx.moveTo(start_x, start_y);
        ctx.lineTo(start_x + this.x * n, start_y + this.y * n);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
    }


}