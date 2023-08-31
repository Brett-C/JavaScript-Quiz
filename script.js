//Timer
let timeLeft = 60;
const time = document.getElementById('timer');
const timerId = setInterval(countdown, 1000);
let questionEl = document.getElementById('question');
let answerElA = document.getElementById('answerA');
let answerElB = document.getElementById('answerB');
let answerElC = document.getElementById('answerC');
let answerElD = document.getElementById('answerD');
let scoreEl = document.getElementById('score');
let totalScore = 0;

time.textContent = 'Timer: ' + timeLeft + ' seconds remaining';

function countdown() {
    if (timeLeft < 0) {
        clearInterval(timerId);
        //insert run highscore page
    } else {
        time.textContent = 'Timer: ' + timeLeft + ' seconds remaining';
        timeLeft--;
    }
}



//event listeners

document.getElementById("answerA").addEventListener("click", answerHandles);
document.getElementById("answerB").addEventListener("click", answerHandles);
document.getElementById("answerC").addEventListener("click", answerHandles);
document.getElementById("answerD").addEventListener("click", answerHandles);

scoreEl.textContent = 'Score: ' + totalScore;

function answerHandles() {
    let answer = this.getAttribute('data-answer');
    if (answer === questions[questionIndex].correctAnswer) {
        totalScore += 10 
        scoreEl.textContent = 'Score: ' + totalScore;
        console.log('gz')
    } else {
        timeLeft -= 15
    }
    nextQuestion();
    console.log(this);
    console.log(answer);
}





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
        question: "Questions 2: What is not one of the Pop up boxes in JavaScript?",
        answers: [
            "A) Alert",
            "B) While",
            "C) Confirm",
            "D) Prompt"],
        correctAnswer: 'B'
    }, {
        question: "Questions 3: What is not a notation for a variable?",
        answers: [
            "A) Flex",
            "B) Var",
            "C) Let",
            "D) Const"],
        correctAnswer: 'A'
    }, {
        question: "Questions 4: What is not a normal JavaScript error?",
        answers: [
            "A) Logic Errors",
            "B) Runtime Errors",
            "C) HTML Errors",
            "D) Load-time Errors"],
        correctAnswer: 'C'

    }, {
        question: "Questions 5: What doesn't effect an array?",
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
    renderQuestion(questionIndex);
}

function renderQuestion(index) {
    let currentQuestion = questions[index];
    questionEl.textContent = currentQuestion.question;
    answerElA.textContent = currentQuestion.answers[0];
    answerElB.textContent = currentQuestion.answers[1];
    answerElC.textContent = currentQuestion.answers[2];
    answerElD.textContent = currentQuestion.answers[3];
};




