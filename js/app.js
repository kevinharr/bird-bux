/*-------------------------------- Constants --------------------------------*/
import {movies} from "../data/data.js"
import {music} from "../data/data.js"
import {travel} from "../data/data.js"
import {art} from "../data/data.js"

//console.log(art)

/*---------------------------- Variables (state) ----------------------------*/
let menu, board, turn, winner, tie, round, questionNumber

/*------------------------ Cached Element References ------------------------*/

const messageEl = document.getElementById("message")
const movieBtn = document.getElementById("movies")
const musicBtn = document.getElementById("music")
const travelBtn = document.getElementById("travel")
const artBtn = document.getElementById("art")
const questionEl = document.getElementById("question")
const answerSquares = document.querySelectorAll(".sqr")
const resetBtnEl = document. getElementById("reset-button")
const questionContainer = document.getElementById("question-container")

/*-------------------------------- Event Listeners --------------------------------*/

movieBtn.addEventListener('click', buttonClick)
musicBtn.addEventListener('click', buttonClick)
travelBtn.addEventListener('click', buttonClick)
artBtn.addEventListener('click', buttonClick)
answerOneEl.addEventListener('click', buttonClick)
answerTwoEl.addEventListener('click', buttonClick)
answerThreeEl.addEventListener('click', buttonClick)
answerFourEl.addEventListener('click', buttonClick)

/*-------------------------------- Functions --------------------------------*/

window.onload = init()

function init() {
    board = [null, null, null, null]
    turn = 1
    winner = false
    tie = false
    round = [null, null, null, null, null, null, null, null, null, null]
    questionNumber = 0
}


  




//     placePiece(sqIdx)
//     checkForTie ()
//     checkForWinner ()
//     switchPlayerTurn ()
//     render()
//     }
//   }

//   function updateBoard() {
//     board.forEach(function(element, index){
//         if (element === 1) {
//             itemEls[index].textContent = "C"
//         } else if (element === null) {
//             itemEls[index].textContent = ""
//         } 
//     }        
// )
// }

// function render() {
//     updateBoard()
//     updateMessage()
// }



function buttonClick(evt) {
    const category = evt.target.id
    //console.log("capturing what happens with a button click:", category)
    //console.log(typeof category)
    if (category === "movies") {
        movieQuestions(questionNumber)
    }
    if (category === "music") {
        music()
    }
    if (category === "travel") {
        travel()
    }
    if (category === "art") {
        art()
    }
}



function movieQuestions(num) {
    questionContainer.innerHTML = ''
    let questionCard = document.createElement('div')
    questionCard.innerHTML =
    `<div>
      <p>${movies[num].question}</p>
      <div id="answer-container">
       <div class="sqr" id="ans0">${movies[num].answerOne[0]}</dir>
       <div class="sqr" id="ans1">${movies[num].answerTwo[0]}</dir>
       <div class="sqr" id="ans2">${movies[num].answerThree[0]}</dir>
       <div class="sqr" id="ans3">${movies[num].answerFour[0]}</dir>
    </div>
    `

    questionContainer.appendChild(questionCard)
}


// function handleClick(evt) {
//     const ansIdx = evt.target.id.replace("ans", "")
//     return Number(ansIdx)
//     } 
//     if (winner === true){
//       return
//     } else {
//     placePiece(ansIdx)
//     updateBoard(ansIdx)
//     checkForTie ()
//     checkForWinner ()
//     switchPlayerTurn ()
//     render()
//     }
// }

function updateBoard(index) {
    if (index === movies[num].correctAnswer ||
        index === music[num].correctAnswer ||
        index === travel[num].correctAnswer ||
        index === art[num].correctAnswer) {
        answerSquares[index].textContent = "C"
    } else {
        answerSquares[index].textContent = "C"
    }

}



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






/*______________Excess Code____________________*/



// function populateQuestions(buttonClick) {
//     let questionSet = buttonClick
//     console.log("return function", questionSet)
//     i = Math.floor(Math.random() * 5)
//     console.log("the meaning of i",i)
//     questionEl.textContent = "test"
//     console.log(questionEl.textContent)
//     answerOneEl.textContent = questionSet[i].answerOne
//     answerTwoEl.textContent = questionSet[i].answerTwo
//     answerThreeEl.textContent = questionSet[i].answerThree
//     answerFourEl.textContent = questionSet[i].answerFour
// }
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