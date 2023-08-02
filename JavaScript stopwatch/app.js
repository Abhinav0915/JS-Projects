const appendSeconds = document.querySelector("#seconds");
const appendTens = document.querySelector("#tens");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");

let sec = 0;
let tens = 0;
let Interval;

function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        sec++;
        appendSeconds.innerHTML = "0" + sec;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (sec > 9) {
        appendSeconds.innerHTML = sec;
    }

}

startButton.addEventListener('click', function (){
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10);

})

pauseButton.addEventListener('click',function () {
    clearInterval(Interval);
})

resetButton.addEventListener('click', function () {
    clearInterval(Interval);
    sec = 0;
    tens = 0;
    appendSeconds.innerHTML = "0" + sec;
    appendTens.innerHTML = "0" + tens;
})
