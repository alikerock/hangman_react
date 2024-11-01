import { useCallback, useEffect, useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import SetWord from './SetWord';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [maxError, setMaxError] = useState(0);
  const [answerLength, setAnswerLength] = useState(0);
  const [secretWord, setSecretWord] = useState();
  const [cid, setCid] = useState(0);
  /*
  let words = ['react', 'vue', 'angular'];
  let wordString = JSON.stringify(words);
  window.localStorage.setItem('scretWord', wordString);
  */
  let setGame = useCallback(() => {
    let localCID = window.localStorage.getItem('cid');
    if (localCID && localCID > cid) {
      setCid(localCID);
    }
    let wordArrStr = window.localStorage.getItem('scretWord');
    if (wordArrStr && wordArrStr.length > 0) {
      let wordArr = JSON.parse(wordArrStr);
      setSecretWord(wordArr[cid]);
      setAnswerLength(wordArr[cid].length);
      setMaxError(wordArr[cid].length + 2)
    } else {
      setAnswerLength(0);
      setMaxError(1)
    }
  }, [cid]);

  useEffect(() => {
    console.log('setGame 실행');
    setGame();
  }, [setGame]);



  return (
    <div className="App">
      <h1>Hangman</h1>
      <p>Do you want to play game</p>

      <Routes>
        <Route path="/" element={<GameBoard secretWord={secretWord} maxError={maxError} answerLength={answerLength} setGame={setGame}
        />} />
        <Route path="/admin" element={<SetWord />} />
      </Routes>

    </div>
  );
}

export default App;
