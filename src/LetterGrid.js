import React, { useEffect, useState } from 'react';
import Letter from './Letter';

const LetterGrid = ({ secretWord, guessedLetters, answerLength, complete }) => {

  //let letters = secretWord.split('').map(letter=><span>{letter}</span>);

  //secretWord의 문자열 배열로 변환하고, 그 배열에 각각의 값으로 <span></span>
  const [answer, setAnswer] = useState(0);
  const [isComplete, setIsComplete] = useState(false);


  //answer값이 변경되면 answerLength와 비교해서 정답여부 파악
  useEffect(() => {
    if (answerLength > 0 && answer === answerLength && !isComplete) {
      let localCID = Number(window.localStorage.getItem('cid'));
      let wordArrStr = window.localStorage.getItem('scretWord');
      let wordArr = JSON.parse(wordArrStr);
      let wordArrlength = wordArr.length;
      if (localCID < wordArrlength - 1) {
        let nextCID = localCID + 1;
        let nextCIDstr = JSON.stringify(nextCID);
        window.localStorage.setItem('cid', nextCIDstr);
        alert('정답입니다!');
      } else {
        alert('모든 문제 풀이를 마쳤습니다.');
        window.localStorage.setItem('cid', 0);
      }
      complete();
      setIsComplete(true);
      setTimeout(() => {
        setIsComplete(false);
      }, 500)
    }
  }, [answer, answerLength, complete, isComplete]);

  //guessedLetters값이 변경되면 answer를 업데이트
  useEffect(() => {

    let newCount = [...secretWord].reduce((count, letter) => {
      return count + (guessedLetters.includes(letter.toLowerCase()) ? 1 : 0);
    }, 0);
    setAnswer(newCount);

    console.log('실행', newCount);

  }, [guessedLetters, secretWord])

  let letters = [...secretWord].map((letter, idx) => {
    //let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    let isShown = guessedLetters.includes(letter.toLowerCase());
    return (
      <Letter key={idx} value={letter} isShown={isShown}></Letter>
    )
  });

  return (
    <div className="letters">

      {letters}

    </div>
  );
}

export default LetterGrid;
