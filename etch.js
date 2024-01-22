const btn = document.querySelector("#promptButton");

let numberOfSquares = btn.addEventListener("click", () => {
    drawSquares(prompt("Enter number of squares:"));
    const squareList = getNumberOfSquares();
    squareList.forEach(changeColor);
    squareList.forEach(resetColor);
});

function drawSquares(numberOfSquares) {
    if (numberOfSquares > 100) {
        numberOfSquares = 100;
    }

    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        document.querySelector(".container").appendChild(square);
    }
}

function changeColor(square) {
    square.addEventListener("mouseover", () => {
        //square.classList.add("hovered");
        square.setAttribute("style", "background-color: teal");
    });
}

function resetColor(square) {
    square.addEventListener("mouseout", () => {
        //square.classList.remove("hovered");
        square.setAttribute("style", "background-color: white");
    });
}

function getNumberOfSquares() {
    return document.querySelectorAll(".square");
}