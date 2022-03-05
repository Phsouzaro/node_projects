import { React, useEffect, useState } from 'react';
import { Container } from './AppStyle';
import ConteudoPrincipal from './components/ConteudoPrincipal';
import PlayerTwo from './components/PlayerTwo';
import { game } from './data/content'

function App() {
  const [listaPersonagem, setListaPersonagem] = useState(game.map(valor => valor))
  const [playerOne, setPlayerOne] = useState([])
  const [playerTwo, setPlayerTwo] = useState([])
  const [counter, setCounter] = useState(0)

  const selecionaPersonagem = (e) => {
    setCounter(e.target.id) //utiliza um contador como base da atualizacao, o contador recebe o id do personagem
    const idPersonagem = e.target.id;
    const imagem = document.getElementById(idPersonagem)
    if (!imagem.classList.contains('selecionado')) {
      imagem.classList.add('selecionado');
    } else {
      imagem.classList.remove('selecionado')
    }
    adicionaPlayerTwo(idPersonagem)
  }
  //Atualizar personagem sempre que for selecionado!
  useEffect(() => {
    document.title = `Mortal_Kombat`
  }, [selecionaPersonagem, playerOne, playerTwo])
  //Remover o primeiro personagem
  const removerPersonagemOne = (e) => {
    playerOne.pop();
    setCounter(e.target.id)
  }
  useEffect(() => {
    document.title = 'Mortal_Kombat'
  }, [removerPersonagemOne])
  //Remover o segundo personagem
  const removerPersonagemTwo = (e) => {
    playerTwo.pop()
    setCounter(e.target.id)
  }
  useEffect(() => {
    document.title = 'Mortal_Kombat'
  }, [removerPersonagemTwo])

  //Adiciona o playerOne caso nao tenha nenhum personagem selecionado
  const adicionaPlayerOne = (id) => {
    if (playerOne.length === 0) playerOne.push(listaPersonagem[id - 1])
  }
  //Adiciona o playerTwo caso nao tenha nenhum personagem selecionado e caso o playerOne ja tenha sido selecionado
  const adicionaPlayerTwo = (id) => {
    if (playerTwo.length === 0 && playerOne.length > 0) playerTwo.push(listaPersonagem[id - 1])
    adicionaPlayerOne(id)
  }



  return (
    <Container>
      <ConteudoPrincipal
        listaPersonagem={listaPersonagem}
        selecionaPersonagem={selecionaPersonagem}
        playerOne={playerOne}
        playerTwo={playerTwo}
        removerPersonagemOne={removerPersonagemOne}
        removerPersonagemTwo={removerPersonagemTwo}
      />
    </Container>
  );
}

export default App;
