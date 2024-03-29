const canvas =document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width =1024
canvas.height=600
const gravity=0.5

// ___________________________________gravity-------------------------------------------
class Player extends Running{
    constructor(position,imagSrc) {
        super({imagSrc})
        this.position = position
        this.velocity ={
            x:0,
            y:1

        }
        this.height = 100;
    }


update(){
        this.draw()

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.position.y + this.height+this.velocity.y <canvas.height)
        this.velocity.y += gravity
        else this.velocity.y=0
}

}
const player = new Player({
    x:500,
    y:0,
    imagsrc:'./assents/character/idle.png'
})

const  keys={
    d:{
        pressed: false,
    },
    a:{
        pressed: false,
    },
}


function animated(){
    window.requestAnimationFrame(animated)
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.draw()
    player.update()

player.velocity.x = 0
    if(keys.d.pressed)player.velocity.x = 3
    else if (keys.a.pressed)player.velocity.x=-3
}

animated()

window.addEventListener('keydown',(event) => {
    switch (event.key){
        case'd':
            keys.d.pressed = true
            break
        player.velocity.x=2
            break
        case'a':
            keys.a.pressed = true
            player.velocity.x=-2
            break
        case'w':
            player.velocity.y=-15
            break
    }
})
window.addEventListener('keyup',(event) => {
    switch (event.key){
        case'd':
            keys.d.pressed = false
            break
            player.velocity.x=2
            break
        case'a':
            keys.a.pressed = false
            player.velocity.x=-2
            break
    }
})
