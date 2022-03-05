import styled from "styled-components";

export const Logo = styled.img`
    display: block;
`
export const Container = styled.div`
    .content{
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        
    }
    .container-logo{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 550px;
        margin: 0 auto;
        img{
            width: 70%;
        }
        
    }
    
    h1{
        color: yellow;
        text-align: right;
        font-size: 3.6em;
    }
    .render-fighter{
        display: flex;
        justify-content: center;
        width: 600px;
        margin: 0 auto;
    }

`
export const Lutadores = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .lutadores-escolhidos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        h2{
            color: yellow;
        }
        img{
            margin-top: 30px;
            width: 180px;
        }
        button{
            background-color: transparent;
            color: yellow;
            font-family: 'mortal-kombat_2', sans-serif;
            border: none;
            border-bottom: 2px solid yellow;
            font-size: 2em;
            cursor: pointer;

        }
        
    }
    .player-2{
        transform: scaleX(-1);
    }
`
export const Personagem = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    width: 100%;
    li{
        border: 5px solid #202020;
        cursor: pointer;
        img{
            width: 120px;
            &.selecionado{
                filter: grayscale(100%);
            } 
        }
        &:hover{
            animation: .2s brilhaBorda infinite;
        }
          
    }
    @keyframes brilhaBorda {
        0%{
            padding: 0;
            border: 5px solid green;
        }
    }
`