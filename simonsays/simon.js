//this array will store the values of the game played
//by the user and by the computer
let gameSeq=[];
let userSeq=[];

//write same class name as our button to generate random button or color
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");




//  STEP ONE
// START THE GAME


document.addEventListener("keypress", function(){
    // if started is false thenn start the game
    //update the started to true to stop the game from restarting
   if(started == false){
    console.log("started");
    started = true;

    //game has started hence level up now
    levelUp();
   }
});


//STEP TWO 
//FLASH THE BUTTONS

//btn is the argument or the button on which the flash will occour
function gameFlash(btn){

    //new classlist will be created which will change the background of the button
    btn.classList.add("flash");
    

    //to remove the flash from the button after some seconds 
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


//will display green when user will click on the button
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


// STEP 3 
//UPDATE THE LEVEL AND FLASH RANDOMLY

function levelUp(){
    userSeq = [];

    level++;
    h2.innerText =  `Level ${level}`;
     

    //random index of which colors tho flash
    let randIdx =  Math.floor(Math.random() * 3);

    //choose the random from the arrat btns hence btns[randomIdx]
    let randColor = btns[randIdx];

    //random color se button ka class choose krenge and store it in randbtn
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);

    //Flash random button on passing randbtn as a parameter in the function flash
    gameFlash(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
}


// STEP 4
//USER BTN PRESS


function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
}

// Add event listner 
let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
    btn.addEventListener("click" , btnPress)
}


function checkAns(){
    // console.log(`curr lvl = ${level}`);
    let idx = level-1;

    if (userSeq[idx] ==  gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
           setTimeout( levelUp,1000);
        }
        console.log("same val")
    } else {
        h2.innerHTML = `Game over!Your score was <b>${level}</b> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}



function reset(){
    let started = false;
    let gameSeq=[];
    let userSeq=[];
    let level = 0;
    console.log("game end")
}