import React from "react";

export default ({ playerOne }) => {
    return (
        <img src={playerOne[0].imagemDetalhe} alt={playerOne.nome} />
    )
}