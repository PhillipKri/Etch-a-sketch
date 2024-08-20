let color = '';
let click = false;

document.addEventListener("DOMContentLoaded",function(){    
    createBoard(16);

    document.querySelector("body").addEventListener("click", (e)=>{
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#bla");
            if(click){
                draw.textContent = 'Draw away!';
            }else {
                draw.textContent = 'No drawing for you sir!';
            }
        }
    })

    let select = document.querySelector("#prompt");
    select.addEventListener("click",() => {
        let size1 = size();
        createBoard(size1);
    })
});

function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numofDivs = size * size;

    for (let index = 0; index < numofDivs; index++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", drawColor)
        board.insertAdjacentElement("beforeend", div);
    }
}

function size(){
    let input = prompt("The size of the board?");
    let message = document.querySelector("#message");
    if(input == ''){
        message.textContent = 'Provide a number, thanks';
    }else if (input < 1 || input >= 100){
        message.textContent = "Provide a number between 1 and 100";
    }else{
        message.textContent = "Let the drawing begin!";
        return input;
    }
}

function drawColor(){
    if(click){
        if(color == 'random'){
            this.style.backgroundColor = 'red';
        }else {
        this.style.backgroundColor = 'black';
        }
    }
}

function setColor(choice){
     color = choice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => {div.style.backgroundColor = 'white'});
}