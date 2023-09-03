let timeLeft = 60;
const time = document.getElementById('timer');
let timerId;
let questionEl = document.getElementById('question');
let answerElA = document.getElementById('answerA');
let answerElB = document.getElementById('answerB');
let answerElC = document.getElementById('answerC');
let answerElD = document.getElementById('answerD');
let scoreEl = document.getElementById('score');
let totalScore = 0;
let startEl = document.getElementById('start');
let highscoreEl = document.getElementById('highscore');
let quizEl = document.getElementById('quiz');
let hsScoreEl = document.getElementById('hsScore');
let hsInitials = document.getElementById('hsInitials');
let fHighscore = document.getElementById('formerHighscore');
let formEl = document.getElementById("form");
let btnResetEl = document.getElementById("btnReset");
let initials = localStorage.getItem('initials');
let lsScore = localStorage.getItem('highscore');
//////////////////////////////////////////////////////////////////////////

time.textContent = 'Timer: ' + timeLeft + ' seconds remaining';
scoreEl.textContent = 'Score: ' + totalScore;
localStorage.getItem('highscore')

function countdown() {
    if (timeLeft < 0) {
        clearInterval(timerId);
        toHighscore();
    } else {
        time.textContent = 'Timer: ' + timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

document.getElementById('btnStart').addEventListener("click", startQuiz);

function startQuiz() {
    timerId = setInterval(countdown, 1000);
    startEl.classList.remove("d-block");
    startEl.classList.add("d-none");
    quizEl.classList.remove("d-none");
    quizEl.classList.add("d-block");
    highscoreEl.classList.remove("d-block");
    highscoreEl.classList.add("d-none");
    countdown();
    localStorage.getItem('highscore');
    localStorage.getItem('initials');
};




function toHighscore() {
    quizEl.classList.add("d-none");
    highscoreEl.classList.remove("d-none");
    highscoreEl.classList.add("d-block");
    clearInterval(timerId);
    hsScoreEl.textContent = 'Highscore: ' + totalScore;
};
formEl.addEventListener('submit', saveStorage);

function saveStorage(event) {
    event.preventDefault();

    localStorage.setItem('highscore', totalScore);
    localStorage.setItem('initials', hsInitials.value);
    console.log(hsInitials.value);
    fHighscore.textContent = 'Former Scorer:  ' + hsInitials.value + ' Score: ' + totalScore;
};
//event listeners

document.getElementById("answerA").addEventListener("click", answerHandles);
document.getElementById("answerB").addEventListener("click", answerHandles);
document.getElementById("answerC").addEventListener("click", answerHandles);
document.getElementById("answerD").addEventListener("click", answerHandles);

btnResetEl.addEventListener("click", resetQuiz);

function resetQuiz() {
    timeLeft = 60;
    totalScore = 0;
    renderScore();
    highscoreEl.classList.remove("d-block");
    highscoreEl.classList.add("d-none");
    startEl.classList.remove("d-none");
    startEl.classList.remove("d-block");
    highscoreEl.classList.remove("d-block");
    highscoreEl.classList.add("d-none");
    questionIndex = 0;
    renderQuestion(questionIndex);
};

function renderScore() {
    scoreEl.textContent = 'Score: ' + totalScore;
};
function answerHandles() {
    let answer = this.getAttribute('data-answer');
    if (answer === questions[questionIndex].correctAnswer) {
        totalScore += 15
        renderScore();
    } else {
        timeLeft -= 15
    }
    nextQuestion();
}





const questions = [
    {
        question: "Question 1: What is not a data type?",
        answers: [
            "A) String",
            "B) Boolean",
            "C) Number",
            "D) Character"],
        correctAnswer: 'D'
    }, {
        question: "Question 2: What is not one of the Pop up boxes in JavaScript?",
        answers: [
            "A) Alert",
            "B) While",
            "C) Confirm",
            "D) Prompt"],
        correctAnswer: 'B'
    }, {
        question: "Question 3: What is not a notation for a variable?",
        answers: [
            "A) Flex",
            "B) Var",
            "C) Let",
            "D) Const"],
        correctAnswer: 'A'
    }, {
        question: "Question 4: What is not a normal JavaScript error?",
        answers: [
            "A) Logic Errors",
            "B) Runtime Errors",
            "C) HTML Errors",
            "D) Load-time Errors"],
        correctAnswer: 'C'

    }, {
        question: "Question 5: What doesn't effect an array?",
        answers: [
            "A) Push",
            "B) Pop",
            "C) Splice",
            "D) Pull"],
        correctAnswer: 'D'
    }
]

let questionIndex = 0;
renderQuestion(questionIndex);

function nextQuestion() {
    questionIndex++;
    if (questionIndex == 5) {
        toHighscore();
        return;
    }
    renderQuestion(questionIndex);

};

function renderQuestion(index) {
    let currentQuestion = questions[index];
    questionEl.textContent = currentQuestion.question;
    answerElA.textContent = currentQuestion.answers[0];
    answerElB.textContent = currentQuestion.answers[1];
    answerElC.textContent = currentQuestion.answers[2];
    answerElD.textContent = currentQuestion.answers[3];

};




