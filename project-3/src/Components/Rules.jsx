import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #fbf1f1;
    border-radius: 10px;
    margin-bottom: 40px;
    padding: 20px;
    h2{
        font-size: 24px;
        font-weight: bold;
    }
    .text{
        margin-top: 24px;

    }
`;
