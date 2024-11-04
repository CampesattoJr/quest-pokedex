import { styled } from "styled-components";

export const NavBar = () => {
    return (
        <div>
            <NavStyled>
                <NavList>
                    {/* Navbar decorativo, não tem função de clique */}
                    <NavItem className="pokedex">Pokédex</NavItem>
                    <NavItem className="about">About</NavItem>
                </NavList>
            </NavStyled>
        </div>
    )
}

const NavStyled = styled.nav`   
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    font-size: 1.1rem;
    width: 100%;

    a {
        cursor: default;
    }
`;

const NavItem = styled.li`
    position: relative;
    margin: 0 15px;
    padding: 10px;
    color: white;
    width: 100px;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    border-radius: 5px 5px 0 0;
    z-index: 0;

    &.pokedex {
        border-bottom: 2px solid #f44336;
    }

    &.about {
        border-bottom: 2px solid #795548;
    }

    &.pokedex::before {
        content: '';
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f44336;
        z-index: -1;
        transition: bottom 0.4s ease-in-out;
    }

    &.about::before {
        content: '';
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #795548;
        z-index: -1;
        transition: bottom 0.4s ease-in-out;
    }

    &:hover {
        color: #fff;

        &::before {
            bottom: 0;
    }
  }
`