//importar dependência
const express = require('express');
const path = require('path')

//iniciando o express
const server = express()
server
//utilizando arquivos estáticos
.use(express.static('public'))
//criar rota
.get('/', (request, response) => {
    console.log(request.query)
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//ligar o server
server.listen(5500)