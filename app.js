const startBtn = document.querySelector("#start"),
      screens = document.querySelectorAll(".screen"),
      timeList = document.querySelector("#time-list"),
      timeEl = document.querySelector("#time"),
      board = document.querySelector("#board");

let time = 0;

startBtn.addEventListener("click", (event) => {
    event.preventDefault();

    screens[0].classList.add("up");
})

timeList.addEventListener("click", (event) => { // check the btn
    if(event.target.classList.contains("time-btn")){
        time = parseInt(event.target.getAttribute("data-time"))
        startGame();
    }
})

function startGame() {   // start game
    setInterval(decreaseTime, 1000);
    screens[1].classList.add("up");
    createRandomCircle();
    setTime(time);
}

function decreaseTime () { 
    if (time === 0) {
        finishGame()
    }
    let current = --time;
    if (current < 10 ){  // for correct note
        current = `0${current}`
    }
    setTime(current);
}

function setTime (value) { // for optimisation 
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
   // time = `00:00`;
}

function createRandomCircle() { // create game points
    const circle = document.createElement("div");
    const size = getRandomNumber(10, 60);
    const x = 150;
    const y = 200;
    
    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    board.append(circle);
}

function getRandomNumber(min, max) { // get Random
    return Math.round(Math.random()*(max-min)+min)
}