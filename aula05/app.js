const criaJson = require('./modules/write')
const ler = require('./modules/read')
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const pessoas = [
    { nome: 'joao' },
    { nome: 'fernanda' },
    { nome: 'maria' },
    { nome: 'junior' },
    { nome: 'pedro' }
];

/**Cria o arquivo JSON com os nomes */
const json = JSON.stringify(pessoas, '', 2)

criaJson(caminhoArquivo, json)
/*********************************** */

/**Lê o arquivo JSON com os nomes */
async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(element => console.log(element));
}
lerArquivo(caminhoArquivo)
/********************************** */