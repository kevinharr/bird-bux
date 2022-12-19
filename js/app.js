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

    attachingListeners()
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
)
}

function updateMessage() {
  
    let PlayerSelected
    let PlayerOne = "Player One"
    let PlayerTwo = "Player Two"
   
    if (turn === 1) {
      PlayerSelected = PlayerOne
    } else if (turn === -1) {
      PlayerSelected = PlayerTwo
    }
    if (winner === false && tie === false) {
      messageEl.textContent = `It is the turn of ${PlayerSelected}.`
    } else if (winner === false && tie === true) {
      messageEl.textContent = "It is a tie."
    } else if (winner === true && tie === false) {
      messageEl.textContent = `The winner is ${PlayerSelected}.`
    }
  }

  function handleClick(evt) {
    const sqIdx = evt.target.id.replace("sq", "")
    if (board[Number(sqIdx)] !== null) {
      return
    } 
    else if (winner === true){
      return
    } else {
    placePiece(sqIdx)
    checkForTie ()
    checkForWinner ()
    switchPlayerTurn ()
    render()
    }
  }