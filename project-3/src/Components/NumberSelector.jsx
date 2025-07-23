import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({SetError,Error,SelectedNumber,SetSelectedNumber}) => {

    const arrNumbers = [1,2,3,4,5,6];
    
    const NumberselectorHandler = (value) => {
        SetSelectedNumber(value)
        SetError("");
    }

  return (
    <NumberSelectorContainer>
    <p className='error'>{Error}</p>
        <div className="flex">
            {
                arrNumbers.map((value,index) => {
                    return <Box key={index}
                    isSelected = {value === SelectedNumber}
                    onClick={() => NumberselectorHandler(value)}>{value}</Box>
                })
            }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color: red;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    cursor: pointer;
    font-weight: 700;
    color: ${(props) => props.isSelected ? "white" : "black"};
    background-color: ${(props) => props.isSelected ? "black" : "white"};
`;
