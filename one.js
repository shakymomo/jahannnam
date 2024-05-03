let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let lapTimes = [];
let lapList = document.querySelector('.lapList');

document.getElementById('startTimer').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    lapTimes = [];
    updateLapList();
});

document.getElementById('lapTimer').addEventListener('click', () => {
    lapTimes.push(timerRef.innerHTML);
    updateLapList();
});

function updateLapList() {
    lapList.innerHTML = '';
    lapTimes.forEach((lapTime, index) => {
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${index + 1}: ${lapTime}`;
        lapList.appendChild(lapItem);
    });
}

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
