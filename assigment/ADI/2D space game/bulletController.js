import Bullet from "./Bullet.js";
export  default class bulletController{
    bullets=[];
    nextbulletTime=0;
constructor(canvas,maxBulletTime,colour,soundEnabled) {



    this.canvas=canvas;
    this.maxBulletTime=maxBulletTime;
    this.colour=colour;
    this.soundEnabled=soundEnabled;

    this.shootSound =new Audio("sounds/shoot.wav");
    this.shootSound.volume=0.1;

}
draw(ctx){
    this.bullets =this.bullets.filter(bullet=>bullet.y + bullet.width>0 && bullet.y <=this.canvas.height)
console.log(this.bullets.length);

    this.bullets.forEach((bullet) => bullet.draw(ctx));
    if(this.nextbulletTime>0){
        this.nextbulletTime--;
    }
}
        shoot(x,y,velocity,nextbulletTime =0){
                if(
                    this.nextbulletTime <= 0 && this.bullets.length < this.maxBulletTime){
                            const  bullet =new Bullet(this.canvas,x,y,velocity,this.colour);
                            this.bullets.push(bullet);
                            if(this.soundEnabled){
                                this.shootSound.currentTime=0;
                                this.shootSound.play();
                            }
                            this.nextbulletTime=nextbulletTime;
}
}
}