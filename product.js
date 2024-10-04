let hours = 0;
let minutes = 1;
let seconds = 1;

var timer = setInterval(watch, 1000); 

function watch() {
    seconds -= 1;

    if (seconds < 0) {
        minutes -= 1;
        seconds = 59;
    }

    if (minutes < 0) {
        hours -= 1;
        minutes = 59;
    }

    if (hours < 0) {
        clearInterval(timer);
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    const watchElement = document.getElementsByClassName("watch");
    watchElement[0].textContent = `${hours}:${formattedMinutes}:${formattedSeconds}`;

    if(seconds == 0 & minutes == 0 & hours == 0){
        watchElement[0].textContent = 'Sale is done ;d'
    }
}
