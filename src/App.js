import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';

function App() {
  const [secretWord, setSecretWord] = useState('');
  return (
    <div className="App">
     <h1>Hangman</h1>
     <p>Do you want to play game</p>
     <div>
      <GameBoard secretWord={secretWord} maxError={8} />
     </div>
    </div>
  );
}

export default App;
