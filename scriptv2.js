/*
Third version of my tic tac toe game
Cleaned up the DOM code after learning a bit more about it
Still need to find an XO graphic to use on hover then do a few touch ups and I'm pretty much done with this
*/


//pull from DOM
const gameStatus = document.getElementById("gameStatus");
const boardPieces = document.querySelectorAll('.boardSpace');


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

        switch (total){
            case 3:
                winner = "X";
                break;
            case 30:
                winner = "O";
                break;
        }
    }

    if (turn === 9 && winner === null){
        winner = "Draw";
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

    for (let i = 0; i < boardPieces.length; i++){
        boardPieces[i].innerHTML = `<p>${domConvert(i)}</p>`;
    }

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
for (let i = 0; i < boardPieces.length; i++) {
    boardPieces[i].addEventListener('click', e => {
        checkAll(i);
    });
}
