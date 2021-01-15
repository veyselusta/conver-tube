const button = document.querySelector('.convert-button')
const URL = document.querySelector('.input')

const PORT = 'covertube.herokuapp.com' || 'localhost:7000'

button.addEventListener('click', ()=>{
  send(URL.value)
})

const send = (URL)=>{
  window.location.href = `https://${PORT}/download?url=${URL}`
}

http://localhost:3000/