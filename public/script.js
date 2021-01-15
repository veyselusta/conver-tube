const button = document.querySelector('.convert-button')
const URL = document.querySelector('.input')

button.addEventListener('click', ()=>{
  send(URL.value)
})

const send = (URL)=>{
  window.location.href = `https://covertube.herokuapp.com/download?url=${URL}`
}

