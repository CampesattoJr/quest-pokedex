import styled from "styled-components"
import { useState, useEffect, useContext } from "react"
import { TypeContext } from "../../contexts/types-context"
import axios from 'axios'
import { useQuery } from "react-query"
import { SerchBar } from "../serchbar"
import './style.css'
import { GenericButton } from "../buttons/generic-button"

export const SectionPokemon = () => {
    const { types } = useContext(TypeContext)
    const [pokemons, setPokemons] = useState([])
    const [originalPokemons, setOriginalPokemons] = useState([])
    const [page, setPage] = useState(9)
    const fetchPokemons = async () => {
        try {
            const response = await axios.get(
                "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
            )
            const { results } = response.data;

            const pokemonDetails = await Promise.all(
                results.map(async (pokemon) => {
                    const pokemonDetail = await axios.get(pokemon.url)
                    return pokemonDetail.data
                })
            );

            setOriginalPokemons(pokemonDetails)
            setPokemons(pokemonDetails.slice(0, page))
        } catch (error) {
            console.error("Erro ao buscar os Pokémons:", error)
        }
    };

    useEffect(() => {
        fetchPokemons()
    }, [])

    useEffect(() => {
        setPokemons(originalPokemons.slice(0, page))
    }, [page, originalPokemons])

    const pokemonFilter = (name) => {
        if (name === "") {
            setPokemons(originalPokemons.slice(0, page));
        } else {
            const filteredPokemons = originalPokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(name.toLowerCase())
            )
            setPokemons(filteredPokemons)
        }
    };

    const loadMorePokemons = () => {
        setPage((prevPage) => prevPage + 9)
    }

    const { data, isLoading, isError, error } = useQuery('pokemon', fetchPokemons, {
        refetchOnWindowFocus: false
    })

    if (isLoading) return <p>Loading...</p>

    if (isError) return <p>ocorreu um erro desconhecido: {error}</p>

    return (
        <>
            <SerchBar pokemonFilter={pokemonFilter} />
            <MainStyled>
                <section>
                    <ul>
                        {pokemons.map((pokemon, index) => (
                            <LiStyled key={index} backgroundcolor={
                                types.find((t) => t.name === pokemon.types[0].type.name).cardColor
                            }>
                                <div className="img">
                                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                                </div>
                                <div className="info">
                                    <span>#{pokemon.id}</span>
                                    <h2>{pokemon.name}</h2>
                                    <ul className="div-types">
                                        {
                                            pokemon.types.map((typeInfo, index) => <li key={index} className={typeInfo.type.name}>
                                                <span>{typeInfo.type.name}</span>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </LiStyled>
                        ))}
                    </ul>
                    <GenericButton text="Load more" onClick={loadMorePokemons} />
                </section>
            </MainStyled>
        </>
    )
}

const MainStyled = styled.main`
    width: 100%;
    padding: 50px 50px 0;

    section{
        background-color: #e7dfdf;
        text-align: center;
        padding: 40px 20px 20px;
    }

    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        justify-items: center;
    }

    @media (max-width: 965px) {
        ul{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        padding: 20px 0 50px;
        
        ul{
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

const LiStyled = styled.li`
     background-color: ${({ backgroundcolor }) => backgroundcolor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 80%;
    max-width: 300px;
    height: 300px;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.4s ease-in-out;
    
    &:hover{
        transform: scale(1.06);
    }

    div.img{
        width: 150px;
        background-color: #fff;
        border-radius: 50%;
        overflow: hidden;

        img{
            width: 100%;
        }
    }

    div.info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        h2{
            text-transform: capitalize;
        }

        ul.div-types{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 5px;

            li{
                padding: 5px;
                margin: 0 5px;
                min-width: 92px;
                border-radius: 4px;
                display: flex;
                flex-direction: column;

                span{
                    width: 100%;
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #fff;
                    text-transform: capitalize;
                }
            }
        }

        @media (max-width: 600px) {
            ul.div-types{
                li{
                    display: flex;
                    flex-direction: column;
                }
            }
        }   
    }
`