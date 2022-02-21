const express = require('express')
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

/************************************************** */
route.get('/', homeController.paginaInicial);
route.get('/contato', contatoController.paginaInicial)
/************************************************** */
route.post('/', homeController.trataPost)

/************************************************** */


module.exports = route;