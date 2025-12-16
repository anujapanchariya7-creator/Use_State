import React from 'react'
import { useRef } from 'react';

const Home = () => {
const inputRef = useRef(null);
const focusOnInput = () => {
    inputRef.current.focus();
}

  return (
    <div style={{marginTop: 100}}>
        <h1>Home</h1>
        <div> 
        <input type="text"  placeholder='Enter a name'/>
        <button onClick={focusOnInput}>Focus On button</button>

        </div>
      
    </div>
  )
}

export default Home
