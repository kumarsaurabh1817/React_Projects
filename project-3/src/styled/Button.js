import styled from "styled-components";

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.4s ease-in;
    
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: all 0.3s ease-in;
    }
`;
export const OutlineButton = styled(Button)`
    color: black;
    background-color: white;
    border: 1px solid black;    
    &:hover{
        background-color: black;
        border: 1px solid white;
        color: white;
    }
`;