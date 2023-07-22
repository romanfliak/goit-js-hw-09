const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]')
const bodyColor = document.querySelector('body')
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


  btnStart.addEventListener('click', playStart);
  btnStop.addEventListener('click',playStop);

let timId = null; 
btnStop.disabled = false;


function  playStart(){
    btnStart.disabled = true;
    btnStop.disabled = false;
    timId = setInterval(()=>{bodyColor.style.backgroundColor = getRandomHexColor()} ,1000)
}

function playStop() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(timId)
}