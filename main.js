let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("display");
let timer = null;

// the function
function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let second=(seconds<10)?"0"+seconds:seconds;    
    let hour=(hours<10)?"0"+hours:hours;    
    let minute=(minutes<10)?"0"+minutes:minutes;    
    displayTime.innerHTML=hour+":"+minute+":"+second;
}
function watchstart() {
    if (timer !== null) {
    }
    timer = setInterval(stopwatch, 1000);
}
function watchstop() {
    clearInterval(timer);
    
}
function watchreset() {
    clearInterval(timer);
    displayTime.innerHTML="00:00:00";
    [seconds, minutes, hours] = [0, 0, 0];
}