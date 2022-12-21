/*-------------------------------- Constants --------------------------------*/
import {movies} from "../data/data.js"
import {music} from "../data/data.js"
import {travel} from "../data/data.js"
import {art} from "../data/data.js"


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie, round, questionNumber, categoryHolder

/*------------------------ Cached Element References ------------------------*/

const messageEl = document.getElementById("message")
const movieBtn = document.getElementById("movies")
const musicBtn = document.getElementById("music")
const travelBtn = document.getElementById("travel")
const artBtn = document.getElementById("art")


const resetBtnEl = document. getElementById("reset-button")
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
    round = [null, null, null, null, null, null, null, null, null, null]
    questionNumber = 0
    categoryHolder = []
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
        categoryHolder.push(1)
        movieQuestions(questionNumber)
    }
    if (category === "music") {
        categoryHolder.push(2)
        musicQuestions(questionNumber)
    }
    if (category === "travel") {
        categoryHolder.push(3)
        travelQuestions(questionNumber)
    }
    if (category === "art") {
        categoryHolder.push(4)
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
    console.log(index)

    if (index === movies[questionNumber].correctAnswer) {
            answerSquares[index].className = "correct" 
            console.log(answerSquares[index])
    }     
    if (index !== movies[questionNumber].correctAnswer) {
        answerSquares[index].className = "incorrect"
        console.log(answerSquares[index])
    }   
} 


    //categoryHolder.pop()
    //}
//     (index === music[num].correctAnswer) ||
//     (index === travel[num].correctAnswer) ||
//     (index === art[num].correctAnswer) {
//         
//     } else {
//    
//     }





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