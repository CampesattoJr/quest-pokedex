import logoPokemon from '../../assets/logo-pokemon.svg'
import { styled } from "styled-components";
import { NavBar } from '../navbar';

export const Header = () => {
    return (
        <HeaderStyled>
            <DivStyled>
                <img src={logoPokemon} alt="Logo pokémon" />
                <NavBar />
            </DivStyled>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    width: 100%;
    background-color: black;
`

const DivStyled = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    height: 65px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 10px;

    img{
        width: 130px;
        margin-left: 20px;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }

    img:hover{
        transform: scale(1.05);
    }
`