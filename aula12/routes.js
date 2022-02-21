const express = require('express')//importa express
const route = express.Router();//importa o gerenciador de rotas do express
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

/************************************************** */
route.get('/', homeController.paginaInicial);
route.get('/contato', contatoController.paginaInicial)
/************************************************** */
route.post('/', homeController.trataPost)

/************************************************** */


module.exports = route;