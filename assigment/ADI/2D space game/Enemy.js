export  default class Enemy{
    constructor(x,y, imageNumber) {
        this.x=x;
        this.y=y;
    this.width=45;
    this.height=35;

        this.image =new Image();
        this.image.src=`assents/Spaceship${imageNumber}.png`;
    }
    draw(ctx){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}