//Timer
let timeLeft = 60;
const time = document.getElementById('timer');
const timerId = setInterval(countdown, 1000);
let questionEl = document.getElementById('question');
let answerElA = document.getElementById('answerA');
let answerElB = document.getElementById('answerB');
let answerElC = document.getElementById('answerC');
let answerElD = document.getElementById('answerD');

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        //insert run highscore page
    } else {
        time.innerHTML = 'Timer: ' + timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

//event listeners

document.getElementById("submitButton").addEventListener("click", function () {
    alert('hi');
});



// question one: Question

// A
// B
// C
// D

// if {
//     // answer A is chosen, add 5 points to score
// } else {
//     // add 0 points to score && timeLeft - 5
// };


const questions = [
    {
        question: "Questions 1: What is not a data type?",
        answers: [
            "A) String",
            "B) Boolean",
            "C) Number",
            "D) Character"],
        correctAnswer: 'D'
    }, {
        question: "Questions 2: What is not a data type?",
        answers: [
            "A) String",
            "B) Boolean",
            "C) Number",
            "D) Character"],
        correctAnswer: 'D'
    }, {
        question: "Questions 3: What is not a data type?",
        answers: [
            "A) String",
            "B) Boolean",
            "C) Number",
            "D) Character"],
        correctAnswer: 'D'
    }, {
        question: "Questions 4: What is not a data type?",
        answers: [
            "A) String",
            "B) Boolean",
            "C) Number",
            "D) Character"],
        correctAnswer: 'D'

    }, {
        question: "Questions 5: What is not a data type?",
        answers: [
            "A) String",
            "B) Boolean",
            "C) Number",
            "D) Character"],
        correctAnswer: 'D'
    }
]

let questionIndex = 0;
renderQuestion(questionIndex);

function nextQuestion() {
    questionIndex++;
    renderQuestion(questionIndex);
}

function renderQuestion (index) {
    let currentQuestion = questions[index];
    questionEl.textContent = currentQuestion.question;
    answerElA.textContent = currentQuestion.answers[0];
    answerElB.textContent = currentQuestion.answers[1];
    answerElC.textContent = currentQuestion.answers[2];
    answerElD.textContent = currentQuestion.answers[3];
};
