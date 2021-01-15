const button = document.querySelector('.convert-button')
const URL = document.querySelector('.input')

button.addEventListener('click', ()=>{
  send(URL.value)
})

const send = (URL)=>{
  window.location.href = `http://localhost:7000/download?url=${URL}`
}