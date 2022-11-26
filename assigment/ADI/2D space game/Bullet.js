export default class Bullet{
    constructor(canvas,x,y,velocity,colour) {
        this.canvas =canvas;
        this.x =x;
        this.y=y;
        this.velocity=velocity;
        this.colour=colour;

        this.width =5;
        this.height=20;

    }
     draw(ctx){
        this.y -=this.velocity;
        ctx.fillStyle=this.colour;
        ctx.fillRect(this.x,this.y,this.width,this.height);
     }
}