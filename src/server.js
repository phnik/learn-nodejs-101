require('dotenv').config()
const exp = require('constants');
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

//config template engine
// __dirname
//app.set('views', path.join(__dirname, 'views'));
app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static('./src/public'));

// console.log(express.static(path.join(__dirname, 'public')))
console.log(__dirname)
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