/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie, round

/*------------------------ Cached Element References ------------------------*/

const itemEls = docuemnt.querySelectorAll(".sqr")
const messageEl = document.getElementById("message")
const resetBtnEl = document. getElementById("reset-button")

/*-------------------------------- Functions --------------------------------*/

window.onload = init()

function init() {
    board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
}

