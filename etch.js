drawSquares();

function drawSquares() {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        document.querySelector(".container").appendChild(square);
    }
}