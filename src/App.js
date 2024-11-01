import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import SetWord from './SetWord';

function App() {
  const [secretWord, setSecretWord] = useState('');
  const [maxError, setMaxError] = useState(0);
  return (
    <div className="App">
     <h1>Hangman</h1>
     <p>Do you want to play game</p>
     <div>
      <GameBoard secretWord={secretWord} maxError={maxError} />
      {!secretWord &&  <SetWord wordSetted={(val)=>{
        setSecretWord(val);
        setMaxError(val.length + 2);
      }}/>}
     
     </div>
    </div>
  );
}

export default App;
