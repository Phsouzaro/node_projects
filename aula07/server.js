const express = require('express')

const app = express();
//CRUD -> CREATE, READ, UPDATE, DELETE
//          POST,  GET,    PUT, DELETE

// http://meusite.com/<- GET -> Entregue a pagina /
// http://meusite.com/sobre <- GET -> Entregue a pagina /sobre
// http://meusite.com/contato <- GET -> Entregue a pagina /contato

app.get('/', (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="post" >
            Nome: <input class="nome" name="txtNome" type="text"> 
            <button>Enviar Formulario</button>
        </form >`
    )
});
app.post('/', (req, res) => {
    res.send('Recebemos seu Formulario, Obrigado!')
})
app.get('/contato', (req, res) => {
    res.send('<h1>Obrigado por entrar em Contato com a gente</h1>')
})

app.listen(3000, () => {
    console.log('Acessar http://127.0.0.1:3000')
    console.log('Servidor executando na porta 3000')
})

