const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = process.env.PORT || 1337

app.engine('html', hbs.__express)
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('layout.html', { test: 'test' })
})

app.listen(PORT, _ => {
  console.log(`The server is running in ${PORT} port!`)
})
