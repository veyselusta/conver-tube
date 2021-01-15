const button = document.querySelector('.convert-button')
const URL = document.querySelector('.input')

button.addEventListener('click', ()=>{
  send(URL.value)
})

const send = ()=>{
  fetch('localhost:3000')
}