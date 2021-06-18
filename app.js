const board = document.querySelector("#board");
const SQUARE_NUMBER = 500;
const COLORS = [
    "rgb(127, 167, 34)",
    "rgb(192, 209, 152)",
    "rgb(76, 189, 123)",
    "rgb(99, 214, 208)",
    "rgb(114, 191, 226)",
    "rgb(142, 143, 212)",
    "rgb(142, 98, 192)",
    "rgb(229, 158, 231)",
    "rgb(233, 124, 178)"]

for(let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square")

    square.addEventListener("mouseover", () =>  {
        setColor(square)
    })
    square.addEventListener("mouseleave", () =>  {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = gerRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #000`

}

function gerRandomColor() {
    const index = Math.floor(Math.random() * COLORS.length)
    return COLORS[index]
}