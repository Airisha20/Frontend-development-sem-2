import React, {useState} from 'react'

const UseStateOne = () => {
    const [count , setCount] = useState(0);
    console.log(count); //0

    function increment(){
        // count = count + 1;
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function reset(){
        setCount(0);
    }

  return (
    <>
    <div>UseStateOne</div>
    <h1>Count : {count}</h1>
    <button onClick={increment}>Click</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default UseStateOne