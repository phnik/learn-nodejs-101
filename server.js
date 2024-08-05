const express = require('express')
const path = require('path')

// import express from 'express'
const app = express()
const port = 8080

//config template engine
// __dirname
//app.set('views', path.join(__dirname, 'views'));
app.set('views', './src/views/')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})