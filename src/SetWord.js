import React from 'react';

let SetWord = () => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      let wordArr = e.target.word.value.split(',');
      let wordArrSTR = JSON.stringify(wordArr);
      window.localStorage.setItem('scretWord', wordArrSTR);
    }}>
      <p>문항을 콤마로 나열하여 입력하세요</p>
      <input type="text" name="word" placeholder='react, vue, type' />
      <button type="submit">입력</button>
    </form>
  )
}

export default SetWord;
