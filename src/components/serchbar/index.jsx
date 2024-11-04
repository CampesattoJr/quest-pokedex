import styled from "styled-components"
import { BsSearch } from "react-icons/bs";

export const SerchBar = ({ pokemonFilter }) => {   
    return (
        <DivStyled>
            <form onChange={(e) => pokemonFilter(e.target.value)}>
                <input type="text" placeholder="Search your pokémon here..." />
                <i>
                    <BsSearch />
                </i>
            </form>
        </DivStyled>
    )
}

const DivStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        height: 50px;
        width: 70%;
        min-width: 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    input{
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        outline: none;
        position: relative;
        border-radius: 25px;
        padding: 15px;
        font-size: 1rem;
    }

    input::placeholder{
        font-size: 1rem;
        font-weight: normal;
        color: #ccc;
    }

    i{
        position: absolute;
        right: 15px;
        font-size: 1.5rem;
        font-weight: lighter;
        transition: transform 0.6s ease-in-out;
    }

    input:focus~i{
        transform: rotatey(180deg);
    }
`