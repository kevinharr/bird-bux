/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie, round

/*------------------------ Cached Element References ------------------------*/

const itemEls = document.querySelectorAll(".sqr")
const messageEl = document.getElementById("message")
const resetBtnEl = document. getElementById("reset-button")

/*-------------------------------- Functions --------------------------------*/

window.onload = init()

function init() {
    board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
    round = [null, null, null, null, null, null, null, null, null, null]

    renderCategory()

    
}

function renderCategory() {

}



function render() {
    updateBoard()
    updateMessage()
}

function attachingListeners() {
    for (i = 0; i < 24; i++) {
        itemEls[i].addEventListener('click', handleClick)
    }
}

function updateBoard() {
    board.forEach(function(element, index){
        if (element === 1) {
            itemEls[index].textContent = "C"
        } else if (element === null) {
            itemEls[index].textContent = ""
        } 
    }        
)}
