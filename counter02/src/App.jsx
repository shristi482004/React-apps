import { useState } from 'react'


function App() {
 let [counter,setCounter]=useState(5);
  function addValue()
  {
    if(counter<20)
    setCounter(counter+1);
  /*
  {setCounter(counter=> counter+1);
    setCounter(counter=> counter+1);
    setCounter(counter=> counter+1);
    setCounter(counter=> counter+1);
    }*/ 
    else
    setCounter(0);
    console.log(counter);
  }
  function reduceValue()
  {
    if(counter>0)
    setCounter(counter-1);
    else
    setCounter(0);
   
    console.log(counter);
  }

  return (

      <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button> 
   
      <button onClick={reduceValue}>Reduce Value</button>    </>
   
      
  )
}

export default App
