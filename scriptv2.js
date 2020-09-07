/*
Second version of my tic tac toe game >:)
More modular and now using arrays to check for a winner
Will update again when I learn more about the DOM
Also need to find an XO graphic to use on hover
*/

//pull from DOM
const topLeft = document.getElementById("space00");
const topMid = document.getElementById("space01");
const topRight = document.getElementById("space02");

const midLeft = document.getElementById("space10");
const midMid = document.getElementById("space11");
const midRight = document.getElementById("space12");

const bottomLeft = document.getElementById("space20");
const bottomMid = document.getElementById("space21");
const bottomRight = document.getElementById("space22");

const gameStatus = document.getElementById("gameStatus");

//Player logic
let turn = 0;
let xo = 1;
let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winner = null;
let blocked = false;

function checkTurn() {
    if (turn % 2 === 0) {
        xo = 1;
    } else {
        xo = 10;
    }
}

function checkClick(boardIndex) {
    if (gameBoard[boardIndex] === 0) {
        gameBoard[boardIndex] = xo;
        turn++;
    } else {
        blocked = true;
    }
}


//Win logic
let winConditions = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];

function checkForWin() {
    for (let i = 0; i < winConditions.length; i++) {
        let total = 0;
        let boardValue = 0;

        for (let j = 0; j < winConditions[i].length; j++) {
            boardValue = gameBoard[winConditions[i][j]];
            total += boardValue;
        }

        if (total === 3) {
            winner = "X";
        } else if (total === 30) {
            winner = "O";
        }

        if (turn === 9){
            winner = "Draw";
        }
    }
}

//UI
function domConvert(boardIndex) {
    switch (gameBoard[boardIndex]) {
        case 0:
            return "";
        case 1:
            return "X";
        case 10:
            return "O";
    }
}

function updateBoard(){

    if (xo === 1){
        gameStatus.innerText = "It's Player O's Turn!";
    }else if (xo === 10) {
        gameStatus.innerText = "It's Player X's Turn!";
    }

    topLeft.innerHTML = `<p>${domConvert(0)}</p>`;
    topMid.innerHTML = `<p>${domConvert(1)}</p>`;
    topRight.innerHTML = `<p>${domConvert(2)}</p>`;
    midLeft.innerHTML = `<p>${domConvert(3)}</p>`;
    midMid.innerHTML = `<p>${domConvert(4)}</p>`;
    midRight.innerHTML = `<p>${domConvert(5)}</p>`;
    bottomLeft.innerHTML = `<p>${domConvert(6)}</p>`;
    bottomMid.innerHTML = `<p>${domConvert(7)}</p>`;
    bottomRight.innerHTML = `<p>${domConvert(8)}</p>`;

    if (winner === "X"){
        gameStatus.innerText = "Player X is the winner! click board to refresh";
    }else if (winner === "O"){
        gameStatus.innerText = "Player O is the winner! click board to refresh";
    }else if (winner === "Draw"){
        gameStatus.innerText = "Draw! click board to refresh";
    }

    if (blocked === true){
        gameStatus.innerText = "Pick another space";
        blocked = false;
    }
}

//Game loop
function checkAll(boardIndex) {
    if (winner === null) {
        checkTurn();
        checkClick(boardIndex);
        checkForWin();
        updateBoard();
    }else{
        location.reload();
    }

}

//Event Listeners
topLeft.addEventListener("click", e => {
    e.preventDefault();
    checkAll(0);
})

topMid.addEventListener("click", e => {
    e.preventDefault();
    checkAll(1);
})

topRight.addEventListener("click", e => {
    e.preventDefault();
    checkAll(2);
})



midLeft.addEventListener("click", e => {
    e.preventDefault();
    checkAll(3);
})

midMid.addEventListener("click", e => {
    e.preventDefault();
    checkAll(4);
})

midRight.addEventListener("click", e => {
    e.preventDefault();
    checkAll(5);
})



bottomLeft.addEventListener("click", e => {
    e.preventDefault();
    checkAll(6);
})

bottomMid.addEventListener("click", e => {
    e.preventDefault();
    checkAll(7);
})

bottomRight.addEventListener("click", e => {
    e.preventDefault();
    checkAll(8);
})