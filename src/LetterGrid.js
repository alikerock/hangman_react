import React from 'react';
import Letter from './Letter';

const LetterGrid = ({secretWord, guessedLetters})=>{

  //let letters = secretWord.split('').map(letter=><span>{letter}</span>);

  //secretWord의 문자열 배열로 변환하고, 그 배열에 각각의 값으로 <span></span>
  let letters = [...secretWord].map((letter, idx)=>{
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    return(
      <Letter key={idx} value={letter} isShown={isShown}></Letter>
    )
});
  
  return (
    <div className="App">

      {letters}
     
    </div>
  );
}

export default LetterGrid;