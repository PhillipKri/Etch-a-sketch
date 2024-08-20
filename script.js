document.addEventListener("DOMContentLoaded",function(){    
    createBoard(25);
    console.log("hi");
});

function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numofDivs = size * size;

    for (let index = 0; index < numofDivs; index++) {
        let div = document.createElement("div");
        
        board.insertAdjacentElement("beforeend", div);
    }
}