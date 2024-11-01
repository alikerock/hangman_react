import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import SetWord from './SetWord';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [secretWord, setSecretWord] = useState('');
  const [maxError, setMaxError] = useState(0);
  return (
    <div className="App">
      <h1>Hangman</h1>
      <p>Do you want to play game</p>

      <Routes>
        <Route path="/" element={<GameBoard secretWord={secretWord} maxError={maxError} />} />
        <Route path="/admin" element={<SetWord wordSetted={(val)=>{
        setSecretWord(val);
        setMaxError(val.length + 2);
      }}/>} />
      </Routes> 
      
    </div>
  );
}

export default App;
