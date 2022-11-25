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


    constructor(canvas) {
        this.canvas = canvas;
        this.createnemies;
    }

    draw(ctx) {}
    createnemies() {
        this.enemyMap.forEach((row, rowIndex) => {
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