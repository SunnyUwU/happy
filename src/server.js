//importar dependência
const express = require('express');
const path = require('path')

//iniciando o express
const server = express()
server
//utilizando arquivos estáticos
.use(express.static('public'))

//configurar template
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
//criar rota
.get('/', (request, response) => {
    console.log(request.query)
    return response.render('index')
})

//ligar o server
server.listen(5500)