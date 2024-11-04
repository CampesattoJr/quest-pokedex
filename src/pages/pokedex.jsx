import { styled } from "styled-components"
import logoPokedex from "../assets/logo-pokedex.svg"
import { Header } from "../components/header"
import { SectionPokemon } from "../components/section-pokemon"


export const Pokedex = () => {   
    return (
        <>
            <Header />
            <ContainerStyled>
                <DivStyled>
                    <ImgStyled src={logoPokedex} alt="Logo escrito Pokédex" />
                </DivStyled>
                <SectionPokemon />
            </ContainerStyled>
        </>

    )
}

const ContainerStyled = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

const DivStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgStyled = styled.img`
    width: 300px;
    margin: 50px 0;
`