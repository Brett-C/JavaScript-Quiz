//Timer
var timeLeft = 35;
var time = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        //insert run highscore page
    } else {
        time.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }

}

//event listeners
document.getElementById("backButton").addEventListener("click", function() {
     alert("hi");
     });
document.getElementById("submitButton").addEventListener("click", function() {
    alert('hi');
});