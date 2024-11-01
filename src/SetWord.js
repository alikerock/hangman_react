import React from 'react';

let SetWord = ({wordSetted})=>{

  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      wordSetted(e.target.word.value);
    }}>
      <input type="text" name="word"/>
      <button type="submit">입력</button>
    </form>
  )
}

export default SetWord;