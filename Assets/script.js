var container = document.querySelector(".container");
var quizQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ___.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JAvaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    },
    ]

var startButton = document.getElementById('startButton');
var timerDisplay = document.getElementById('timerDisplay');
var timer = document.getElementById('timer');
var startScreen = document.getElementById("startScreen");
var questionContainer = document.getElementById("questionContainer");
var question = document.getElementById('question');
var questionIndex = 0;
var timeCount = 60;
var timeState ;
var answerButton = document.getElementById("answerButtons");
var score = 0;

//WHEN I click the start button
//THEN a timer starts and I am presented with a question
startButton.addEventListener('click', startGame);
function startGame () {
    timeState = setInterval(function() {
        timeCount --;
        timer.textContent = timeCount;
        if (timeCount <= 0) {
            clearInterval(timeState);
            //When time runs out the game is over and I am presented with my score
            alert("GAME OVER, YOUR SCORE IS: " + score);
        }
    }, 1000);
    questionContainer.removeAttribute("class", "hide");
    startScreen.setAttribute("class", "hide");
    setNextQuestion();
}

//WHEN I answer a question
//THEN I am presented with another question

function setNextQuestion () {
    var displayQuestion = quizQuestions [questionIndex];
    question.textContent = displayQuestion.title;
    answerButton.innerHTML = "";
    displayQuestion.choices.forEach(function(choice) {
        var newButton = document.createElement("button");
        newButton.setAttribute("value", choice);
        newButton.setAttribute("class", "buttonsGrid");
        newButton.textContent = choice;
        newButton.onclick = selectAnswer;
        answerButton.appendChild(newButton);
    })

}

//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

function selectAnswer () {
    if (this.value === quizQuestions[questionIndex].answer) {
        alert("CORRECT");
        //add up correct answers
        score++;
    }
    else {
        alert("WRONG");
        timeCount = timeCount-10;
        timer.textContent = timeCount;
    }
    questionIndex++;
    setNextQuestion();
}


