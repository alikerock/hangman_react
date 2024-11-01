import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';
/*
function GameBoard(props) {
  return (
    <div className="App">
     <h1>{props.secretWord}</h1>
     
    </div>
  );
}
*/

/*
function GameBoard({secretWord}) {
  return (
    <div className="App">
     <h1>{secretWord}</h1>
     
    </div>
  );
}
*/
const GameBoard = ({secretWord})=>{
  const [guessedLetters, setGuessedLetters] = useState([]);

  let clickHandler = (value)=>{
    let val = value.toLowerCase();
    /*
    let gl = [...guessedLetters];
    gl.push(val);    
    setGuessedLetters(gl);
    */
    setGuessedLetters(prev=>[...prev,val]);

  }

  return (
    <div className="App">

     <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}/>
     <ButtonGrid onclick={clickHandler}/>
    </div>
  );
}

export default GameBoard;