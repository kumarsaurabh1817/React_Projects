import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const [Score,SetScore] = useState(0);
    const [SelectedNumber,setSelectedNumber] = useState();
    const [CurrentDice,SetCurrentDice] = useState(1);
    const [Error,SetError] = useState("");
    const [ShowRules,SetShowRules] = useState(false);

    const generateRandomNumber = (min,max) => {
        let x =  Math.floor(Math.random() * (max - min) + min);
        console.log(x);
        return x;
    }
    const roledice = () => {        
        if(!SelectedNumber){
            SetError("You Have Not Selected Any Number");
            return;
        }
        // SetError("");
        const randomnumber = generateRandomNumber(1,7);
        SetCurrentDice((prev) => randomnumber);

        if(SelectedNumber === randomnumber){
            SetScore((prev) => prev + randomnumber);
        }
        else{
            SetScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    }


    const resetScore = () => {
        SetScore(0);
    }

  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore Score = {Score}></TotalScore>
            <NumberSelector SetError={SetError} Error={Error} SelectedNumber = {SelectedNumber} SetSelectedNumber={setSelectedNumber}></NumberSelector>
        </div>
        <RollDice CurrentDice={CurrentDice} roledice={roledice}></RollDice>
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button onClick={() => SetShowRules((prev) => !prev)}>{ShowRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {ShowRules && <Rules></Rules>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 40px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }
`;
