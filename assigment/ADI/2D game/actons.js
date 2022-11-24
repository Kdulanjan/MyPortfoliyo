var Robo= document.getElementById("Robo");



// -----------------------------Breath Animation----------------------------

CharecterImageNumber = 0 ;
AnimationNumber = 0 ;

function MoveAnimation(){
    CharecterImageNumber = CharecterImageNumber +1 ;
    if(CharecterImageNumber == 11){
        CharecterImageNumber = 1;
    }
    Robo.src = "assents/character/Idle%20(" + CharecterImageNumber + ").png";
}

function idleAnimationStart(){
    AnimationNumber = setInterval(MoveAnimation,150);
}




// ------------------------------------------Run Animation--------------------------------------------------
RunAnimationNumber=0;
CharecterRunImageNumber=0;
function RunAnimation(){
    CharecterRunImageNumber = CharecterRunImageNumber +1 ;
    if(CharecterRunImageNumber == 9){
        CharecterRunImageNumber = 1;
    }
    Robo.src = "assents/character/Run%20(" + CharecterRunImageNumber + ").png";
}

function idleRunAnimationStart(){
    RunAnimationNumber = setInterval(RunAnimation,150);
}



// ------------------------------------------dead Animation--------------------------------------------------

DeadAnimationNumber=0;
CharecterDeadImageNumber=0;
function RunAnimation(){
    CharecterDeadImageNumber = CharecterDeadImageNumber +1 ;
    if(CharecterDeadImageNumber == 12){
        CharecterDeadImageNumber = 1;
    }
    Robo.src = "assents/character/Dead%20(" + CharecterDeadImageNumber + ").png";
}

function idleDeadAnimationStart(){
    DeadAnimationNumber = setInterval(RunAnimation,100);
}




// ---------------------------------------
window.addEventListener('keydown',(event) =>{
switch (event.key){
    case 'd':
        console.log('')
        idleRunAnimationStart.velocityX=1

        break
}
})