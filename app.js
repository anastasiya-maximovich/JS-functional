const startBtn = document.querySelector("#start"),
      screens = document.querySelectorAll(".screen"),
      timeList = document.querySelector("#time-list"),
      timeEl = document.querySelector("#time"),
      board = document.querySelector("#board");

let time = 0;
let score = 0;

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

board.addEventListener("click", (event) => {
    if(event.target.classList.contains("circle")) {
        score++;
        event.target.remove();
        createRandomCircle();
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
    timeEl.parentNode.classList.add("hide"); // clean h3
    board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() { // create game points
    const circle = document.createElement("div");
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width-size);
    const y = getRandomNumber(0, height-size);

    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
}

function getRandomNumber(min, max) { // get Random
    return Math.round(Math.random()*(max-min)+min)
}