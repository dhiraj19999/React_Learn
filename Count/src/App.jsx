import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Count,Countcontext } from './context/Countcontext'
import { useCount } from './context/Countcontext'
function App() {
  
  console.log(useCount()) // it gives us object of value

  const {count,Inc,Dec}=useCount()
  return (
    
    
     <Countcontext> <>
      
      <button onClick={Inc}>Inc</button>
        <h3>Count:{count}</h3>
      <button onClick={Dec}>Dec</button>
   
    </>  </Countcontext>
  )
}

export default App
