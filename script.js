/*
My first attempt at making a game ;_;
Very rough code, yandere dev tier
Will remake this once I learn more about the DOM and I think I can use arrays to check for a win instead of if else statements
*/

//Create a class for each board space
class boardSpace {
    constructor(space, value) {
        this.space = space;
        this.value = value;
    }
}

//Instantiate
const topLeft = new boardSpace(document.getElementById("space00"), "");
const topMid = new boardSpace(document.getElementById("space01"), "");
const topRight = new boardSpace(document.getElementById("space02"), "");
const midLeft = new boardSpace(document.getElementById("space10"), "");
const midMid = new boardSpace(document.getElementById("space11"), "");
const midRight = new boardSpace(document.getElementById("space12"), "");
const bottomLeft = new boardSpace(document.getElementById("space20"), "");
const bottomMid = new boardSpace(document.getElementById("space21"), "");
const bottomRight = new boardSpace(document.getElementById("space22"), "");

//Game vars
let turn = 0;
let xo = "X";

//Check for win
function checkForWin(){
    if(topLeft.value === "X" && topMid.value === "X" && topRight.value === "X"){
        alert("Player X is the winner!");
        location.reload();
    }
    else if(topLeft.value === "O" && topMid.value === "O" && topRight.value === "O"){
        alert("Player O is the winner!");
        location.reload();
    }
    else if(midLeft.value === "X" && midMid.value === "X" && midRight.value === "X"){
        alert("Player X is the winner!");
        location.reload();
    }
    else if(midLeft.value === "O" && midMid.value === "O" && midRight.value === "O"){
        alert("Player O is the winner!");
        location.reload();
    }
    else if(bottomLeft.value === "X" && bottomMid.value === "X" && bottomRight.value === "X"){
        alert("Player X is the winner!");
        location.reload();
    }
    else if(bottomLeft.value === "O" && bottomMid.value === "O" && bottomRight.value === "O"){
        alert("Player O is the winner!");
        location.reload();
    }
    else if(topLeft.value === "X" && midLeft.value === "X" && bottomLeft.value === "X"){
        alert("Player X is the winner!");
        location.reload();
    }
    else if(topLeft.value === "O" && midLeft.value === "O" && bottomLeft.value === "O"){
        alert("Player O is the winner!");
        location.reload();
    }
    else if(topMid.value === "X" && midMid.value === "X" && bottomMid.value === "X"){
        alert("Player X is the winner!");
        location.reload();
    }
    else if(topMid.value === "O" && midMid.value === "O" && bottomMid.value === "O"){
        alert("Player O is the winner!");
        location.reload();
    }
    else if(topRight.value === "X" && midRight.value === "X" && bottomRight.value === "X"){
        alert("Player X is the winner!");
        location.reload();
    }
    else if(topRight.value === "O" && midRight.value === "O" && bottomRight.value === "O"){
        alert("Player O is the winner!");
        location.reload();
    }
    else if(topLeft.value === "X" && midMid.value === "X" && bottomRight.value === "X"){
        alert("Player X is the winner!");
        location.reload();
    }
    else if(topLeft.value === "O" && midMid.value === "O" && bottomRight.value === "O"){
        alert("Player O is the winner!");
        location.reload();
    }
    else if(topRight.value === "X" && midMid.value === "X" && bottomLeft.value === "X"){
        alert("Player X is the winner!");
        location.reload();
    }
    else if(topRight.value === "O" && midMid.value === "O" && bottomLeft.value === "O"){
        alert("Player O is the winner!");
        location.reload();
    }
    else if(turn === 9){
        alert("Draw!");
        location.reload();
    }

}

//Event listeners
topLeft.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (topLeft.value === "") {
        topLeft.space.innerHTML = `<p>${xo}</p>`;
        topLeft.value = xo;
        console.log(topLeft.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});

topMid.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (topMid.value === "") {
        topMid.space.innerHTML = `<p>${xo}</p>`;
        topMid.value = xo;
        console.log(topMid.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});

topRight.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (topRight.value === "") {
        topRight.space.innerHTML = `<p>${xo}</p>`;
        topRight.value = xo;
        console.log(topRight.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});

midLeft.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (midLeft.value === "") {
        midLeft.space.innerHTML = `<p>${xo}</p>`;
        midLeft.value = xo;
        console.log(midLeft.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});

midMid.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (midMid.value === "") {
        midMid.space.innerHTML = `<p>${xo}</p>`;
        midMid.value = xo;
        console.log(midMid.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});

midRight.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (midRight.value === "") {
        midRight.space.innerHTML = `<p>${xo}</p>`;
        midRight.value = xo;
        console.log(midRight.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});

bottomLeft.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (bottomLeft.value === "") {
        bottomLeft.space.innerHTML = `<p>${xo}</p>`;
        bottomLeft.value = xo;
        console.log(bottomLeft.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});

bottomMid.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (bottomMid.value === "") {
        bottomMid.space.innerHTML = `<p>${xo}</p>`;
        bottomMid.value = xo;
        console.log(bottomMid.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});

bottomRight.space.addEventListener("click", e => {
    e.preventDefault();
    if (turn % 2 === 0) {
        xo = "X";
    } else {
        xo = "O";
    }

    if (bottomRight.value === "") {
        bottomRight.space.innerHTML = `<p>${xo}</p>`;
        bottomRight.value = xo;
        console.log(bottomRight.value);

        turn++;
        checkForWin();
    } else {
        alert("Pick another space");
    }
});