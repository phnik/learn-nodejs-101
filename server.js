const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

//config template engine
// __dirname
//app.set('views', path.join(__dirname, 'views'));

app.set('views', './src/views/')
app.set('view engine', 'ejs')

//uat, .prod

app.get('/', (req, res) => {
    res.send('Hello World with nodemon!')
})

app.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})