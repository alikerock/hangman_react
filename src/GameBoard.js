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
const GameBoard = ({secretWord, maxError})=>{
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  let clickHandler = (value)=>{
    let val = value.toLowerCase();
    /*
    let gl = [...guessedLetters];
    gl.push(val);    
    setGuessedLetters(gl);
    */
    setGuessedLetters(prev=>[...prev,val]);

    // 틀리면 errorCount를 1씩 증가시킨다.    
    if(secretWord.indexOf(val) === -1){
      setErrorCount(errorCount+1);
    }

  }

  return (
    <>
    { errorCount<maxError &&
      <div className={secretWord ? '':'hidden'}>
      틀린횟수 : {errorCount} / {maxError}
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}/>
      <ButtonGrid onclick={clickHandler}/>     
      </div>
    }
    </>
  );
}

export default GameBoard;