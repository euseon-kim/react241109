import React from 'react'

const Step03 = () => {
    const handleClick = () => {
        alert('click');
    }
  return (
    <>
    {/* 
        onClick = {실행할 함수} 
        onClick = {function(){실행할 코드}} 
        onClick = {() => {실행할 코드}} 
    */}
      <button onClick={()=>{alert('click')}}>클릭</button>  
      <button onClick={handleClick}>클릭</button>  
    </>
  )
}

export default Step03