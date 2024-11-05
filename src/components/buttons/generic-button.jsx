import styled from "styled-components"

export const GenericButton = ({ text = "Button", onClick }) => <ButtonStyled onClick={onClick}>{text}</ButtonStyled>

const ButtonStyled = styled.button`
    background-color: #ff3434;
    color: #fff;
    padding: 15px 30px;
    margin: 30px 0 10px;
    border: #ff3434;
    border-radius: 10px;
    font-size: 1.07rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        transform: scale(1.05);
        border: 1px solid #ff3434;
        background-color: #fff;
        color: #ff3434;
    }
`