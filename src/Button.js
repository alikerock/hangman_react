import React, { useState } from 'react';

const Button = ({value})=>{
  const [isClicked,setIsClicked] = useState(false);
  let className = '';

  if(isClicked){
    className = 'hidden';
  }
  let clickHandler = ()=>{
    setIsClicked(true)
  }

  return(
    <button className={className} onClick={clickHandler}>{value}</button>
  )
}

export default Button;