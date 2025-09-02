let userSeq = [];
let gameSeq = [];

let randColors = ["yellow", "green", "red", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
btn.classList.add("flash");
setTimeout(function() {
    btn.classList.remove("flash");
}, 250);
}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
    }

function levelUp() {
    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = randColors[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `Game over! your score was ${level - 1}\n please enter any key to restart`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function() {
            body.style.backgroundColor = "white";
        }, 100);
        gameReset();
    }
}

function btnPress() {
    console.log("button was pressed");
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns) {
    btn.addEventListener("click", btnPress);
}

function gameReset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}
