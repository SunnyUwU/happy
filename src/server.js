//importar dependência
const express = require('express');
const path = require('path')
const pages = require('./pages.js')


//iniciando o express
const server = express()
server
//utilizando arquivos estáticos
.use(express.static('public'))

//configurar template
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//rotas da aplicação
.get('/', pages.index)
.get('/orphanages', pages.orphanages)
.get('/orphanage', pages.orphanage)
.get('/create-orphanage', pages.createOrphanage)

//ligar o server
server.listen(5500)