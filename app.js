const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

app.get('/Home', (request, response) =>{
    response.sendFile(`${__dirname}/views/index.html`)
})


app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`)
})

app.get('/photo-galery', (request, response) => {
    response.sendFile(`${__dirname}/views/photo-galery.html`)
})

app.get('/works', (request, response) => {
    response.sendFile(`${__dirname}/views/works.html`)
})

// start listening to request
app.listen(3030, () => {
    console.log('Listening to Server')
})