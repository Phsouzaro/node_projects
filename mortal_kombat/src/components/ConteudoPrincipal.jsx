import React from "react";
import { Container, Logo, Personagem, Lutadores } from './styles'
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";




export default ({ listaPersonagem, selecionaPersonagem, playerOne, playerTwo, removerPersonagemOne, removerPersonagemTwo }) => {
    return (
        <Container>

            <div className="content">
                <div className="container-logo">
                    <Logo src='https://vignette.wikia.nocookie.net/logopedia/images/8/89/Mk2_logo.png' />
                </div>
                <h1>Choose your fighter</h1>
            </div>
            <Lutadores>
                {playerOne.length > 0 &&
                    <div className="lutadores-escolhidos">
                        <h2>{playerOne[0].nome}</h2>
                        <PlayerOne playerOne={playerOne} />
                        <button onClick={removerPersonagemOne} id={playerOne[0].id}>Remover</button>
                    </div>
                }
                <div className="render-fighter">
                    <Personagem>
                        {listaPersonagem.map((valor, indice) => (
                            <li key={indice} onClick={selecionaPersonagem}><img src={valor.imagemListagem} id={valor.id} alt={valor.nome} /></li>
                        ))}
                    </Personagem>
                </div>
                {playerTwo.length > 0 &&
                    <div className="lutadores-escolhidos">
                        <h2>{playerTwo[0].nome}</h2>
                        <PlayerTwo playerTwo={playerTwo} />
                        <button onClick={removerPersonagemTwo} id={playerTwo[0].id}>Remover</button>
                    </div>
                }
            </Lutadores>
        </Container>
    )
}