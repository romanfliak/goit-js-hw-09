import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputText = document.querySelector('#datetime-picker');
const btnStart = document.querySelector("button[data-start]");
const days =document.querySelector('span[data-days]');
const hours =document.querySelector('span[data-hours]');
const minutes =document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');


btnStart.classList.add('button-inactive');
btnStart.addEventListener('click', startTimer);

const currentDate = new Date();
let dateForUser

flatpickr(inputText,{
    enableTime: true,
    time_24hr: true,
    defaultDate: currentDate,
    minuteIncrement: 1,
    onClose( selectedDate){
        if(currentDate > dateForUser){
            Notiflix.Notify.failure('please choose a date in the future');
            return
        }else{
            btnStart.classList.remove('button-inactive')
        }
    }
})

function startTimer() {
    const id = setInterval(()=>{
        const current = new Date()
        const timerTime = conversMs( dateForUser - current);
        if (timerTime.seconds >= 0) {
            days.textContent = timerTime.days.toString().padStart(2,'0');
            hours.textContent = timerTime.hours.toString().padStart(2,'0');
            minutes.textContent = timerTime.minutes.toString().padStart(2,'0');
            seconds.textContent = timerTime.seconds.toString().padStart(2,'0');
        }else{
            clearInterval(id);
            Notiflix.Notify.success('Congratulation! Time is ower.')
        }
    })
}


















// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//     const selectedDate = (selectedDates[0]);

//     if (selectedDate <= new Date()) {
//         window.alert('please chose a date in the future');
//         btn.disabled = true;
//     }else{
//         btn.addEventListener('click',startTimer);
//         btn.disabled = false;
//     }
//     },
//   };

//   const flatpickrInstance = flatpickr('#datetime-picker',options);






