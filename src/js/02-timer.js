import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputText = document.querySelector('#datetime-picker');
const btnStart = document.querySelector("button[data-start]");
const days =document.querySelector('span[data-days]');
const hours =document.querySelector('span[data-hours]');
const minutes =document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

btnStart.addEventListener('click', startTimer);
btnStart.disabled = true;
const currentDate = new Date();
let dateForUser;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: currentDate,
    minuteIncrement: 1,
    onClose(selectedDate) {
        dateForUser =selectedDate[0]
        if(currentDate > dateForUser){
            Notiflix.Notify.failure('please choose a date in the future');
            return
        }else{
           btnStart.disabled = false;
        }
    }
}

flatpickr(inputText , options )

function startTimer() {
    const id = setInterval(()=>{
        const current = new Date()
        const timerTime = convertMs(dateForUser - current)
        if (timerTime.seconds >= 0) {
            days.textContent = timerTime.days.toString().padStart(2,'0');
            hours.textContent = timerTime.hours.toString().padStart(2,'0');
            minutes.textContent = timerTime.minutes.toString().padStart(2,'0');
            seconds.textContent = timerTime.seconds.toString().padStart(2,'0');
        }else{
            clearInterval(id);
            Notiflix.Notify.success('Congratulation! Time is ower.')
        }
    }, 1000)

}
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };


}





