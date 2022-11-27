import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import bulletController from "./bulletController.js";

const canvas =document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.height=650;
canvas.width=650;

const background =new Image();
background.src= "assents/space.png";

const playerBulletController = new bulletController(canvas,10,"red",true);
const enemyBulletController = new bulletController(canvas,7,"pink",false);
const enemyController=new EnemyController(canvas,enemyBulletController,playerBulletController);
const player = new Player(canvas, 3,playerBulletController);

function game(){
    ctx.drawImage(background,0,0, canvas.width, canvas.height);
    enemyController.draw(ctx);
    player.draw(ctx)
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);


}
setInterval(game,1000/60);