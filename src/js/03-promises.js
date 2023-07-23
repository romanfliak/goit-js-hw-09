import Notiflix from 'notiflix';
console.log(Notiflix)


function createPromise(position, delay) {
  return new Promise ((resolve, reject) =>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=> {
      if (shouldResolve) {
        resolve({position,delay})
      } else {
       reject({position, delay});
      }
    }, delay)
  
  })
 
  }

 

const form = document.querySelector('.form')
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]')

form.addEventListener('submit',handlerSubmit);
 

function handlerSubmit(event) {
  event.preventDefault();

  const firstDelay = parseInt(inputDelay.value);
  const step = parseInt(inputStep.value);
  const amount = parseInt(inputAmount.value);


  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + i * step;


  createPromise(position,delay)
  .then(({position,delay})=> {
    Notiflix.Notify.success(
      ` ✔️ fullfilled promise ${position} in ${delay}`
    );
  })
  .catch(({position,delay})=>{
    Notiflix.Notify.failure(
`      ✖️ Rejected promise ${position} in ${delay}ms `    )
  })
  }
  form.reset()
}
