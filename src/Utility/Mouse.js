import Box from "../Bodies/Box.js";

var mousePointer = {x:0,y:0,isDrag:false};
var cans = document.getElementsByTagName('canvas')
const canvas = cans[0];
let pointedBody;

canvas.addEventListener("mousedown", (event) => {
    mousePointer.isDrag = true;
});

canvas.addEventListener("mouseup", (event) => {
    mousePointer.isDrag = false;
    mousePointer.x = Infinity;
    mousePointer.y = Infinity;
});

canvas.addEventListener("mousemove", (event) => {
    if(mousePointer.isDrag){
        const rect = canvas.getBoundingClientRect();
        mousePointer.x = event.clientX - rect.left;
        mousePointer.y = event.clientY - rect.top;
    }
});

let select = new Box(0,0,0,0);
mousePointer.selectedBody = (ball,ctx)=>{
    let xb = ball.position.x - mousePointer.x;
    let yb = ball.position.y - mousePointer.y;
    let dist = Math.sqrt(xb*xb+yb*yb);
    if(dist<ball.radius){
        ball.position.x = mousePointer.x;
        ball.position.y = mousePointer.y;
        ball.color = "#003366";
        mousePointer.pointedBody = ball;
        select.width = ball.radius * 2;
        select.height = ball.radius * 2;
        select.x = ball.position.x - ball.radius;
        select.y = ball.position.y - ball.radius;
        select.draw(ctx);
    }else{
        ball.color = ball.default_color;
    }
}

mousePointer.pointedBody = pointedBody;

export default mousePointer;