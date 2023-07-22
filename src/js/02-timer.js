import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputText = document.querySelector('.datetime-picker');
const btn = document.querySelector("button[data-start]");
const day =document.querySelector('span[data-days]');
const hours =document.querySelector('span[data-hours]');
const minutes =document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');


btn.classList.add('button-inactive');
btn.addEventListener('click', timer);


const currentData = new Data()

