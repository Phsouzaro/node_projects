const express = require('express') //importa o express para subir o servidor
const app = express(); // executa o express para ser utilizado
const routes = require('./routes') //criacao das rotas
const path = require('path'); // importa o path do node
const { use } = require('./routes'); //utiliza as rotas
/******************************************** */
app.use(express.urlencoded({ extended: true })) //usado para conseguir acessar os atributos da url
app.use(express.static(path.resolve(__dirname, 'public')))//usado para setar a pasta estatica do projeto
app.set('views', path.resolve(__dirname, 'src', 'views'))//usado para setar a pasta views dos arquivos renders
app.set('view engine', 'ejs')//usado para importar a engine de renderizacao como ejs
/************************************** */
app.use(routes)//usado para definir as routes
/************************************** */

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000, http://127.0.0.1:3000')
})//inicia o servidor na porta 3000
/******************************************** */