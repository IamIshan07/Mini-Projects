let gameSeq = [];
let userSeq = [];
let highestScore = 0;
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress", () => {
    if (started == false) {
        started = true;
        console.log("game is started")

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`


    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`)

    gameSeq.push(randomColor);
    console.log(gameSeq);
    // random btn choose
    gameFlash(randomButton);
}




function checkAns(idx) {
    // console.log("current level : ", level)
    // let idx = level - 1;

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        let score = level - 1;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "#1e1e2f";
        }, 150);

        if (score > highestScore) {
            highestScore = score;
            h2.innerHTML = `Game Over! Your Score is <b>${score}</b><br>
                        Congratulations! New High Score: ${highestScore}<br>
                        Press any key to start!!`;
        } else {
            h2.innerHTML = `Game Over! Your Score is <b>${score}</b><br>
                        High Score: ${highestScore}<br>
                        Press any key to start!!`;
        }

        reset();
    }
}



function btnPress() {
    // console.log(this);
    // console.log("Button Pressed");
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(`User sequence : ${userSeq}`);
    // console.log(userSeq);

    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");

for (const btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

let reset = () => {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}