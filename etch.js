const btn = document.querySelector("#promptButton");
let numberOfSquares;

btn.addEventListener("click", () => {
    numberOfSquares = prompt("Enter number of squares:");
    clearScreen();
    createSquares(numberOfSquares);
    changeColor();
    resetColor();
});

function createSquares(numberOfSquares) {
    if (numberOfSquares > 100) {
        numberOfSquares = 100;
    }

    for (let i = 0; i <= numberOfSquares; i++) {
        for (let j = 0; j <= numberOfSquares; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.height = (800 / numberOfSquares) + "px";
            square.style.width = (800 / numberOfSquares) + "px";
            document.querySelector(".container").appendChild(square);
        }
    }
}

function clearScreen() {
    const screen = document.querySelector(".container");

    while (screen.firstChild) {
        screen.removeChild(screen.lastChild);
    }
}

function changeColor() {
    let squares = document.querySelectorAll("div .square");
    squares.forEach(function(elem) {
        let colorR = Math.floor(Math.random() * (255 + 1));
        let colorG = Math.floor(Math.random() * (255 + 1));
        let colorB = Math.floor(Math.random() * (255 + 1));
        elem.addEventListener("mouseover", function() {
            elem.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
        });
    });
}

function resetColor() {
    let squares = document.querySelectorAll("div .square");
    squares.forEach(function(elem) {
        elem.addEventListener("mouseout", function() {
            elem.style.backgroundColor = "";
        });
    });
}