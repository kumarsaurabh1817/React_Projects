import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({CurrentDice,roledice}) => {


  return (
    <DiceContainer>
      <div className='dice' onClick={roledice}>
        <img src={`../../public/images/dice_${CurrentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-top: 48px;

    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }
`;
