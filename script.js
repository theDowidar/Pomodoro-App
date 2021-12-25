let minutes = 25;
let seconds = "00";

let click = new Audio("click.mp3");
let bell = new Audio("bell.mp3");

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start() {
    click.play();

    minutes = 25;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    let minutes_interval = setInterval(minutesTimer, 60000);
    let secondss_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes --;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer() {
        seconds --;
        document.getElementById("seconds").innerHTML = seconds;

        if (seconds === 58) {
            if (minutes === 25) {
                clearInterval(minutes_interval);
                clearInterval(secondss_interval);

                document.getElementById("done").innerText = "Session completed! Take a break!"

                document.getElementById("done").classList.add("show_msg")

                bell.play()
            }
            seconds = 60
        }
    }
}