const express = require('express')
const indexRouter = require('./routes/index')
const downloadRouter = require('./routes/download')
const bodyParser = require('body-parser')
const path = require('path');
const PORT = process.env.PORT || 7000
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())


app.use('/',indexRouter )
app.use('/download', downloadRouter)

app.listen(PORT, ()=>{
  console.log('server şahlandı')
})

module.exports = PORT