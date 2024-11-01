import './App.css';
import GameBoard from './GameBoard';

function App() {
  return (
    <div className="App">
     <h1>Hangman</h1>
     <p>Do you want to play game</p>
     <div>
      <GameBoard secretWord="React" maxError={8} />
     </div>
    </div>
  );
}

export default App;
