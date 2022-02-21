exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="post" >
            Nome: <input class="nome" name="txtNome" type="text"> 
            <button>Enviar Formulario</button>
        </form >`)
}
exports.trataPost = (req, res) => {
    res.send(`Formulario enviado com sucesso`)
}