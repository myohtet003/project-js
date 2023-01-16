const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startTag = document.getElementsByClassName("startButton")[0];
const pauseTag = document.getElementsByClassName("pauseButton")[0];
const continueTag = document.getElementsByClassName("continueButton")[0];
const restartTag = document.getElementsByClassName("restartButton")[0];
const milliTag = document.getElementsByClassName("milliSecond")[0];

let milliseconds = 0, seconds = 0,minutes = 0, hours = 0;

const startTime = () => {
    
    milliseconds += 1;
    if(milliseconds === 1000) {
      milliseconds = 0;
      seconds += 1;

      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
        }
        if (minutes === 60) {
          minutes = 0;
          hours += 1;
        }
    }

    const millisecondText =   milliseconds < 10 ? "00" + milliseconds.toString() : milliseconds < 100 ? "0" + milliseconds.toString() : milliseconds ;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
  
    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText ;
    milliTag.textContent = millisecondText ;
  };
  
  let intervalId;
  startTag.addEventListener("click", () => {
    intervalId = setInterval(startTime,1);
  });
  
  pauseTag.addEventListener("click", () => {
    clearInterval(intervalId);
  });
  
  continueTag.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1);
  });
  
  restartTag.addEventListener("click", () => {
    clearInterval(intervalId);
    (milliseconds = 0), (seconds = 0), (minutes = 0), (hours = 0);
    intervalId = setInterval(startTime, 1);
  });
  