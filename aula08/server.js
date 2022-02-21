const express = require('express')
const app = express();

// /profiles/12345?campanha=googleads&nome_campanha=seila
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post" >
        Nome: <input class="nome" name="txtNome" type="text"> 
        <button>Enviar Formulario</button>
    </form >`)
})
app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params)
    res.send(`Seu usuario: ${req.params.idUsuarios} e query: ${req.query.usuario} ${req.query.senha}`)
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`oque voce me enviou foi ${req.body.txtNome}`)
})
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000, http://127.0.0.1:3000')
})