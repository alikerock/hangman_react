import React from 'react';
import LetterGrid from './LetterGrid';

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
  return (
    <div className="App">

     <LetterGrid secretWord={secretWord} guessedLetters={['a','e']}/>
     
    </div>
  );
}

export default GameBoard;