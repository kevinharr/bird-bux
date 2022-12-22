/*-------------------------------- Constants --------------------------------*/

import {movies} from "../data/data.js"
import {music} from "../data/data.js"
import {travel} from "../data/data.js"
import {art} from "../data/data.js"

/*---------------------------- Variables (state) ----------------------------*/

let turn, winner, tie, questionNumber, categoryHolder, playerOneScore, playerTwoScore, questions, winnerOfGame, answerCorrect
let answerSquares = document.querySelectorAll(".sqr")

/*------------------------ Cached Element References ------------------------*/

const messageEl = document.getElementById("message")
const movieBtn = document.getElementById("movies")
const musicBtn = document.getElementById("music")
const travelBtn = document.getElementById("travel")
const artBtn = document.getElementById("art")
const resetBtnEl = document.getElementById("reset-button")
const nextBtnEl = document.getElementById("next-button")
const questionContainer = document.getElementById("question-container")
const correctSound = new Audio('../sounds/correct-answer.wav')
const incorrectSound = new Audio('../sounds/incorrect-answer2.mp3')

/*-------------------------------- Event Listeners --------------------------------*/

movieBtn.addEventListener('click', buttonClick)
musicBtn.addEventListener('click', buttonClick)
travelBtn.addEventListener('click', buttonClick)
artBtn.addEventListener('click', buttonClick)
nextBtnEl.addEventListener('click', nextQuestionClick)


categoryHolder = []

/*-------------------------------- Functions --------------------------------*/

window.onload = init()

function init() {
    questionContainer.innerHTML = ''
    movieBtn.disabled = false;
    musicBtn.disabled = false;
    travelBtn.disabled = false;
    artBtn.disabled = false;
    turn = 1
    winner = false
    winnerOfGame = ""
    tie = false
    categoryHolder = []
    questions = [null, null, null, null, null, null]
    questionNumber = 0
    playerOneScore = 0
    playerTwoScore = 0
    render()  
}


function render() {
    updateMessage()
}

/*--SELECTING A CATEGORY FROM FOUR THEMES: MOVIES, MUSIC, TRAVEL, ART--------*/

function buttonClick(evt) {
    const category = evt.target.id
    if (category === "movies") {
        categoryHolder.unshift("movies")
        movieBtn.disabled = true;
        musicBtn.disabled = true;
        travelBtn.disabled = true;
        artBtn.disabled = true;
        movieQuestions(questionNumber)
    }
    if (category === "music") {
        categoryHolder.unshift("music")
        movieBtn.disabled = true;
        musicBtn.disabled = true;
        travelBtn.disabled = true;
        artBtn.disabled = true;
        musicQuestions(questionNumber)
    }
    if (category === "travel") {
        categoryHolder.unshift("travel")
        movieBtn.disabled = true;
        musicBtn.disabled = true;
        travelBtn.disabled = true;
        artBtn.disabled = true;
        travelQuestions(questionNumber)
    }
    if (category === "art") {
        categoryHolder.unshift("art")
        movieBtn.disabled = true;
        musicBtn.disabled = true;
        travelBtn.disabled = true;
        artBtn.disabled = true;
        artQuestions(questionNumber)
    }
    answerSquares = document.querySelectorAll(".sqr")
    answerSquares.forEach(function(elem) {
        elem.addEventListener('click', handleClick)
    })
}

/*--------QUESTION GENERATOR BY CATEGORY----------------------------*/

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
    
    answerSquares = document.querySelectorAll(".sqr")
    answerSquares.forEach(function(elem) {
        elem.addEventListener('click', handleClick)
    })
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

    answerSquares = document.querySelectorAll(".sqr")
    answerSquares.forEach(function(elem) {
        elem.addEventListener('click', handleClick)
    })
  
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

    answerSquares = document.querySelectorAll(".sqr")
    answerSquares.forEach(function(elem) {
        elem.addEventListener('click', handleClick)
    })
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

    answerSquares = document.querySelectorAll(".sqr")
    answerSquares.forEach(function(elem) {
        elem.addEventListener('click', handleClick)
    })
}



/*-------USERS SELECTS THE ANSWER TO THE QUESTION------------------*/




function handleClick(evt) {
    if (winner === true) {
        return
    } else {
  
    let ansIdx = Number((evt.target.id.replace("ans", "")))
   
    updateBoard(ansIdx, categoryHolder)
    answerSquares.forEach(function(elem) {
        elem.removeEventListener('click', handleClick)
    })
    questionIncrementor ()
    updateMessage()
    checkForTie ()
    checkForWinner ()
    switchPlayerTurn ()
    render()
    }
    } 

    function playCorrectSound () {
        correctSound.volume = .20
        correctSound.play()
    }

    function playIncorrectSound () {
        incorrectSound.volume = .20
        incorrectSound.play()
    }
/*--------UPDATE THE GAME BOARD------------------------------------*/

function updateBoard(index, categoryHolder) {
    switch(categoryHolder[0]) {   
        case "movies":
            if (index === movies[questionNumber].correctAnswer) {
                answerSquares[index].className = "correct" 

                playCorrectSound ()
               
                answerCorrect = true
                addBirdBux(answerCorrect)
            }
            if (index !== movies[questionNumber].correctAnswer) {
                answerSquares[index].className = "incorrect"}  

                playIncorrectSound ()
                
                answerCorrect = false
                addBirdBux(answerCorrect) 
            break;
        case "music":
            if (index === music[questionNumber].correctAnswer) {
                answerSquares[index].className = "correct" 

                playCorrectSound ()
                
                answerCorrect = true
                addBirdBux(answerCorrect)
                }
            if (index !== music[questionNumber].correctAnswer) {
                answerSquares[index].className = "incorrect"} 

                playIncorrectSound ()
                
                answerCorrect = false
                addBirdBux(answerCorrect) 
            break;
        case "travel":
            if (index === travel[questionNumber].correctAnswer) {
                answerSquares[index].className = "correct" 
                }

                playCorrectSound ()
               
                answerCorrect = true
                addBirdBux(answerCorrect)
            if (index !== travel[questionNumber].correctAnswer) {
                answerSquares[index].className = "incorrect"}

                playIncorrectSound ()
               
                answerCorrect = false
                addBirdBux(answerCorrect) 
            break;
        case "art":
            console.log("category holder formovies:, categoryHolder[0]")
            if (index === art[questionNumber].correctAnswer) {
                answerSquares[index].className = "correct" 
                }

                playCorrectSound ()
               
                answerCorrect = true
                addBirdBux(answerCorrect)
            if (index !== art[questionNumber].correctAnswer) {
                answerSquares[index].className = "incorrect"} 
                
                playIncorrectSound ()
                
                answerCorrect = false
                addBirdBux(answerCorrect)  
    }
} 

/*------UPDATE MESSAGE BOARD-------------------------------------*/

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
      messageEl.textContent = `The winner is ${winnerOfGame}.`
    }
  }

function addBirdBux(answerCorrect) {
    if (turn === 1 && answerCorrect === true) {
        playerOneScore = playerOneScore + 100
    } else if (turn === -1 && answerCorrect === true) {
        playerTwoScore = playerTwoScore + 100
    }
}

function questionIncrementor () {
    questionNumber = questionNumber + 1
    return questionNumber
    
}

function checkForTie() {
    if (playerOneScore === playerTwoScore && questionNumber === 6) {
        tie = true
        questionContainer.innerHTML = ''
    }
}

function checkForWinner() {
    if (playerOneScore > playerTwoScore && questionNumber === 6) {
        winner = true
        winnerOfGame = "Player One"
        questionContainer.innerHTML = ''
    } else if (playerOneScore < playerTwoScore && questionNumber === 6) {
        winner = true
        winnerOfGame = "Player Two"
        questionContainer.innerHTML = ''
    }
}

function switchPlayerTurn() {
    if (winner === true) {
      return
    } else {
    turn = turn * -1
  }
  }

function nextQuestionClick(evt) {
    console.log(categoryHolder[0])
    console.log(categoryHolder)
    if (categoryHolder[0] === "movies") {
        movieQuestions(questionNumber)
    } else if (categoryHolder[0] === "music") {
        musicQuestions(questionNumber)
    } else if (categoryHolder[0] === "travel") {
        travelQuestions(questionNumber)
    } else if (categoryHolder[0] === "art") { 
        artQuestions(questionNumber)   
    } 
    
}

resetBtnEl.addEventListener('click', init)




