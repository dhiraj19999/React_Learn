
import Usecustomhook from './Customhook';
import React from 'react'

function Customhooktest() {
  
  const[count,Inc,Dec] =Usecustomhook(2)
  
    return (
   
   <>
   <div>Customhooktest</div>
   <h1>{count}</h1>
   <button onClick={Inc}>INC</button>
   <button onClick={Dec}>Dec</button>
   </>
    

  )
}

export default Customhooktest;