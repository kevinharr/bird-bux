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
const answerOneEl = document.getElementById("answerOne")
const answerTwoEl = document.getElementById("answerTwo")
const answerThreeEl = document.getElementById("answerThree")
const answerFourEl = document.getElementById("answerFour")
const resetBtnEl = document. getElementById("reset-button")
const quizCategories = [movies, music, travel, art]
const questionContainer = document.getElementById("question-container")

/*-------------------------------- Event Listeners --------------------------------*/

movieBtn.addEventListener('click', buttonClick)
musicBtn.addEventListener('click', buttonClick)
travelBtn.addEventListener('click', buttonClick)
artBtn.addEventListener('click', buttonClick)

// {/* <div id="answerOne"></div>
//             <div id="answerTwo"></div>
//             <div id="answerThree"></div>
//             <div id="answerFour"></div> */}




/*-------------------------------- Functions --------------------------------*/

window.onload = init()

function init() {
    menu = [null, null, null, null]
    board = [null, null, null, null]
    turn = 1
    winner = false
    tie = false
    round = [null, null, null, null, null, null, null, null, null, null]
    questionNumber = 1
}


    


// function render() {
//     questionContainer.innerHTML = ''
//     quotes.forEach((quote, idx) => {
//       appendQuote(quote, idx)
//     })
//     // quotes.forEach(function(quote, idx) {
//     //   appendQuote(quote, idx)
//     // })
//   }





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
    console.log("capturing what happens with a button click:", category)
    console.log(typeof category)
    if (category === "movies") {
        movieQuestions()
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

function movieQuestions(questionNumber) {
    questionNumber = 1
    questionContainer.innerHTML = ''
    let questionCard = document.createElement('div')
    questionCard.innerHTML =
    `<div>
      <p>${movies[questionNumber].question}</p>
      <div id="answer-container">
       <div id="answerOne">${movies[questionNumber].answerOne[0]}</dir>
       <div id="answerOne">${movies[questionNumber].answerTwo[0]}</dir>
       <div id="answerOne">${movies[questionNumber].answerThree[0]}</dir>
       <div id="answerOne">${movies[questionNumber].answerFour[0]}</dir>
    </div>
    `

    questionContainer.appendChild(questionCard)
}


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