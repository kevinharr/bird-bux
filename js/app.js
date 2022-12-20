/*-------------------------------- Constants --------------------------------*/
import {movies} from "../data/data.js"
import {music} from "../data/data.js"
import {travel} from "../data/data.js"
import {art} from "../data/data.js"


console.log(art)
/*---------------------------- Variables (state) ----------------------------*/
let menu, board, turn, winner, tie, round

/*------------------------ Cached Element References ------------------------*/

const movieBtn = document.getElementById("movies")
const musicBtn = document.getElementById("music")
const travelBtn = document.getElementById("travel")
const artBtn = document.getElementById("art")
const messageEl = document.getElementById("message")
const resetBtnEl = document. getElementById("reset-button")
const quizCategories = [movies, music, travel, art]
const questions = []

/*-------------------------------- Functions --------------------------------*/


window.onload = init()

function init() {
    menu = [null, null, null, null]
    board = [null, null, null, null]
    turn = 1
    winner = false
    tie = false
    round = [null, null, null, null, null, null, null, null, null, null]
   

    attachingListeners()
    
    renderCategory()    
}

function renderCategory() {



}

function handleClickCategory(evt) {
    const sqIdx = evt.target.id.replace("sq", "")
    if (winner === true){
      return
    } else if (Number(sqIdx) === 0) {
        console.log("console log for movies", Number(sqIdx))
        movies()
    } else if (Number(sqIdx) === 1) {
        music()
    } else if (Number(sqIdx) === 2) {
        travel()
    } else if (Number(sqIdx) === 2) {
        art()
    }

function movies () {

}
//     placePiece(sqIdx)
//     checkForTie ()
//     checkForWinner ()
//     switchPlayerTurn ()
//     render()
//     }
//   }

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

function render() {
    updateBoard()
    updateMessage()
}

function attachingListeners() {
    for (let i = 0; i < 4; i++) {
        itemEls[i].addEventListener('click', handleClick)
    }
  

}

// function handleClick(evt) {
//     const sqIdx = evt.target.id.replace("sq", "")
//     if (board[Number(sqIdx)] !== null) {
//       return
//     } 
//     else if (winner === true){
//       return
//     } else {
//     placePiece(sqIdx)
//     checkForTie ()
//     checkForWinner ()
//     switchPlayerTurn ()
//     render()
//     }
//   }
//   function handleClick(evt) {
//     const sqIdx = evt.target.id.replace("sq", "")
//     if (board[Number(sqIdx)] !== null) {
//       return
//     } 
//     else if (winner === true){
//       return
//     } else {
//     placePiece(sqIdx)
//     checkForTie ()
//     checkForWinner ()
//     switchPlayerTurn ()
//     render()
//     }
//   }

// function updateBoard() {
//     board.forEach(function(element, index){
//         if (element === 1) {
//             itemEls[index].textContent = "C"
//         } else if (element === null) {
//             itemEls[index].textContent = ""
//         } 
//     }        
// )
// }

// function updateMessage() {
  
//     let PlayerSelected
//     let PlayerOne = "Player One"
//     let PlayerTwo = "Player Two"
   
//     if (turn === 1) {
//       PlayerSelected = PlayerOne
//     } else if (turn === -1) {
//       PlayerSelected = PlayerTwo
//     }
//     if (winner === false && tie === false) {
//       messageEl.textContent = `It is the turn of ${PlayerSelected}.`
//     } else if (winner === false && tie === true) {
//       messageEl.textContent = "It is a tie."
//     } else if (winner === true && tie === false) {
//       messageEl.textContent = `The winner is ${PlayerSelected}.`
//     }
//   }

//   function handleClick(evt) {
//     const sqIdx = evt.target.id.replace("sq", "")
//     if (board[Number(sqIdx)] !== null) {
//       return
//     } 
//     else if (winner === true){
//       return
//     } else {
//     placePiece(sqIdx)
//     checkForTie ()
//     checkForWinner ()
//     switchPlayerTurn ()
//     render()
//     }
//   }

//   function placePiece(index) {
//     board[index] = turn
//   }

//   function checkForTie() {
//     if (board.includes(null)) {
//       return
//     } else {
//       tie = true
//     }
//   }

//   function checkForWinner() {
//     for (let i = 0; i < winningCombos.length; i++) {
//       let sum = 0
//       for (let c = 0; c < 3; c++) {
//         sum += board[winningCombos[i][c]]
//         if (Math.abs(sum) === 3)  {
//           winner = true
//         }
//       }   
//     }
//   }

//   function switchPlayerTurn() {
//     if (winner === true) {
//       return
//     } else {
//     turn = turn * -1
//   }
//   }

//   resetBtnEl.addEventListener('click', init)