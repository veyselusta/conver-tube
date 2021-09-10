const button = document.querySelector('.convert-button')
const URL = document.querySelector('.input')

const PORT = 'localhost:7000'

button.addEventListener('click', () => {
  send(URL.value)
})

const send = (URL) => {
  window.location.href = `http://${PORT}/download?url=${URL}`
}
