

export default class world{
    ctx;
    isBounderiesActive = false;
    isCollisionActive = false;
    
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    enableBoundaries(){
        console.log("Activating border bounderies !!!!");
        this.isBounderiesActive = true;
    }

    disableBoundaries(){
        console.log("deActivating border bounderies !!!!");
        this.isBounderiesActive = false;
    }

}




