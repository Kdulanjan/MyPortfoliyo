export default class Bullet{
    constructor(canvas,x,y,velocity,colour) {
        this.canvas =canvas;
        this.x =x;
        this.y=y;
        this.velocity=velocity;
        this.colour=colour;

        this.width =3;
        this.height=15;

    }
     draw(ctx){
        this.y -=this.velocity;
        ctx.fillStyle=this.colour;
        ctx.fillRect(this.x,this.y,this.width,this.height);
     }
    cellwith(sprite){
        if(
            this.x + this.width> sprite.x &&
                 this.x < sprite.x + sprite.width &&
                    this .y + this.height>sprite.y &&
                            this.y < sprite.y+sprite.height){
            return true;
        }
        else {
            return false;
        }
    }
}