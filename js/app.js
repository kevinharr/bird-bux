/*-------------------------------- Constants --------------------------------*/

import {movies} from "../data/data.js"
import {music} from "../data/data.js"
import {travel} from "../data/data.js"
import {art} from "../data/data.js"

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie, round, questionNumber, categoryHolder, playerOneScore, playerTwoScore, questions, correctAnswer

/*------------------------ Cached Element References ------------------------*/

const messageEl = document.getElementById("message")
const movieBtn = document.getElementById("movies")
const musicBtn = document.getElementById("music")
const travelBtn = document.getElementById("travel")
const artBtn = document.getElementById("art")


const resetBtnEl = document.getElementById("reset-button")
const nextBtnEl = document.getElementById("next-button")

const questionContainer = document.getElementById("question-container")

let answerSquares = document.querySelectorAll(".sqr")
    
    
/*-------------------------------- Event Listeners --------------------------------*/

movieBtn.addEventListener('click', buttonClick)
musicBtn.addEventListener('click', buttonClick)
travelBtn.addEventListener('click', buttonClick)
artBtn.addEventListener('click', buttonClick)

/*-------------------------------- Functions --------------------------------*/

window.onload = init()

function init() {
    board = [null, null, null, null]
    turn = 1
    winner = false
    tie = false
    questions = [null, null, null, null, null, null]
    questionNumber = 0
    categoryHolder = []
    playerOneScore = 0
    playerTwoScore = 0
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
    if (category === "movies") {
        categoryHolder.push(category)
        movieQuestions(questionNumber)
    }
    if (category === "music") {
        categoryHolder.push(category)
        musicQuestions(questionNumber)
    }
    if (category === "travel") {
        categoryHolder.push(category)
        travelQuestions(questionNumber)
    }
    if (category === "art") {
        categoryHolder.push(category)
        artQuestions(questionNumber)
    }
    answerSquares = document.querySelectorAll(".sqr")
    answerSquares.forEach(function(elem) {
        elem.addEventListener('click', handleClick)
    })
}

/* QUESTION GENERATOR BY CATEGORY*/

function movieQuestions(num) {
    questionContainer.innerHTML = ''
    let questionCard = document.createElement('div')
    questionCard.innerHTML =
    `
      <p>${movies[num].question}</p>
      <div id="answer-container">
         <div class="sqr" id="ans0">${movies[num].answerOne}</div>
         <div class="sqr" id="ans1">${movies[num].answerTwo}</div>
         <div class="sqr" id="ans2">${movies[num].answerThree}</div>
         <div class="sqr" id="ans3">${movies[num].answerFour}</div>
      </div>
    `

    questionContainer.appendChild(questionCard)
}

function musicQuestions(num) {
    questionContainer.innerHTML = ''
    let questionCard = document.createElement('div')
    questionCard.innerHTML =
    `<div>
      <p>${music[num].question}</p>
      <div id="answer-container">
         <div class="sqr" id="ans0">${music[num].answerOne}</div>
         <div class="sqr" id="ans1">${music[num].answerTwo}</div>
         <div class="sqr" id="ans2">${music[num].answerThree}</div>
         <div class="sqr" id="ans3">${music[num].answerFour}</div>
      </div>
    </div>
    `

    questionContainer.appendChild(questionCard)
}

function travelQuestions(num) {
    questionContainer.innerHTML = ''
    let questionCard = document.createElement('div')
    questionCard.innerHTML =
    `<div>
      <p>${travel[num].question}</p>
      <div id="answer-container">
         <div class="sqr" id="ans0">${travel[num].answerOne}</div>
         <div class="sqr" id="ans1">${travel[num].answerTwo}</div>
         <div class="sqr" id="ans2">${travel[num].answerThree}</div>
         <div class="sqr" id="ans3">${travel[num].answerFour}</div>
      </div>
    </div>
    `

    questionContainer.appendChild(questionCard)
}

function artQuestions(num) {
    questionContainer.innerHTML = ''
    let questionCard = document.createElement('div')
    questionCard.innerHTML =
    `<div>
      <p>${art[num].question}</p>
      <div id="answer-container">
         <div class="sqr" id="ans0">${art[num].answerOne}</div>
         <div class="sqr" id="ans1">${art[num].answerTwo}</div>
         <div class="sqr" id="ans2">${art[num].answerThree}</div>
         <div class="sqr" id="ans3">${art[num].answerFour}</div>
      </div>
    </div>
    `

    questionContainer.appendChild(questionCard)
}


/*_______________________________________________*/


function handleClick(evt) {
    let ansIdx = Number((evt.target.id.replace("ans", "")))
    updateBoard(ansIdx)
    } 
  

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
    switch(categoryHolder[0]) {     
        case "movies":
            if (index === movies[questionNumber].correctAnswer) {
                answerSquares[index].className = "correct" 
                correctAnswer = true
            }
            if (index !== movies[questionNumber].correctAnswer) {
                answerSquares[index].className = "incorrect"}
            break;
        case "music":
            if (index === music[questionNumber].correctAnswer) {
                answerSquares[index].className = "correct" 
                correctAnswer = true
                }
            if (index !== music[questionNumber].correctAnswer) {
                answerSquares[index].className = "incorrect"} 
            break;
        case "travel":
            if (index === travel[questionNumber].correctAnswer) {
                answerSquares[index].className = "correct" 
                }
                correctAnswer = true
            if (index !== travel[questionNumber].correctAnswer) {
                answerSquares[index].className = "incorrect"}
            break;
        case "art":
            if (index === art[questionNumber].correctAnswer) {
                answerSquares[index].className = "correct" 
                }
                correctAnswer = true
            if (index !== art[questionNumber].correctAnswer) {
                answerSquares[index].className = "incorrect"}       
    }
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

function addBirdBux() {
    if (turn === 1 && correctAnswer === true) {
        playerOneScore = playerOneScore + 100
    } else if (turn === -1 && correctAnswer === true) {
        playerTwoScore = playerTwoScore + 100
    }
}

function placePiece(index) {
    board[index] = turn
}

function countingQuestions () {
    questionNumber = questionNumber + 1
    return questionNumber
}

function checkForTie() {
    if (playerOneScore === playerTwoScore && questionNumber === 6) {
        tie = true
    }
}

function checkForWinner() {
    if (playerOneScore > playerTwoScore && questionNumber === 6) {
        return "Player One is the winner"
    } else if (playerOneScore < playerTwoScore && questionNumber === 6) {
        return "Player Two is the winner"
    }

}

function switchPlayerTurn() {
    if (winner === true) {
      return
    } else {
    turn = turn * -1
  }
  }

function nextClick(evt) {
    const category = evt.target.id
}

nextBtnEl.addEventListener('click', nextClick)

resetBtnEl.addEventListener('click', init)
