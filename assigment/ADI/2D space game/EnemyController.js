import Enemy from "./Enemy.js";
import MovingDirection from "./MovingDirection.js";

export default class EnemyController {


    enemymap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1],
        [2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    ];

    enemyRows = [];

    currentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity =1;
    defaultYVelocity =1;
MoveDownTimerDefault=10;
moveDownTimer =this.MoveDownTimerDefault


    constructor(canvas) {
        this.canvas = canvas;
        this.createEnemies();
    }

    draw(ctx) {
        this.decrementMoveDownTimer();
        this.updateVelocityAndDirection();
        this.drawEnemies(ctx);
        this.resetMoveDownTimer();
    }


    resetMoveDownTimer(){
    if(this.moveDownTimer <= 0){
        this.moveDownTimer = this.MoveDownTimerDefault;
    }
    }

    decrementMoveDownTimer(){
    if(this.currentDirection === MovingDirection.downLeft || this.currentDirection == MovingDirection.downRight)

    {
        this.moveDownTimer-- ;
    } }

    updateVelocityAndDirection(){
        for (const enemyRow of this.enemyRows){
            if (this.currentDirection ==MovingDirection.right){
                this.xVelocity=this.defaultXVelocity;
                    this.yVelocity=0;
                    const rightMostEnemy=enemyRow[enemyRow.length-1];
                    if(rightMostEnemy.x+rightMostEnemy.width >=this.canvas.width){
                        this.currentDirection=MovingDirection.downLeft
                        break;
                    }

            }
            else if(this.currentDirection ===MovingDirection.downLeft){
             this.xVelocity=0;
             this.yVelocity=this.defaultYVelocity;
             if(this.moveDown(MovingDirection.left)){
                 break;
             }
            }else if(this.currentDirection === MovingDirection.left){
                this.xVelocity= -this.defaultYVelocity;
                this.yVelocity=0;
                const leftMostEnemy = enemyRow[0];
                if(leftMostEnemy.x <= 0){
                    this.currentDirection = MovingDirection.downRight;
                    break;
                }
            } else if (this.currentDirection === MovingDirection.downRight) {
                if (this.moveDown(MovingDirection.right)) {
                    break;
                }
            }
        }
    }
    moveDown(newDirection){
    this.xVelocity=0;
    this.yVelocity=this.defaultYVelocity;
    if(this.moveDownTimer<= 0){
        this.currentDirection=newDirection;
        return true;
    }
    return false;
    }
    drawEnemies(ctx) {
        this.enemyRows.flat().forEach((enemy) => {
            enemy.move(this.xVelocity,this.yVelocity)
            enemy.draw(ctx);
            }
        )
    }

    createEnemies() {
        this.enemymap.forEach((row, rowIndex) => {
            this.enemyRows[rowIndex] = [];
            row.forEach((enemyNubmer, enemyIndex) => {
                if (enemyNubmer > 0) {
                    this.enemyRows[rowIndex].push(
                        new Enemy(enemyIndex * 50, rowIndex * 35, enemyNubmer)
                    );
                }
            });
        });
    }
}
