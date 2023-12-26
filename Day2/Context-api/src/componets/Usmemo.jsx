
import Child from "./Child";
import { useState } from "react";

const Usmemo=()=>{

const [counterOne,setcounterOne]=useState(0)




  const IncrementOne=()=>{
    /*
   
    when we call incrementone fun state get changed and Usecalback component get changed with that 
    its child component also get rerender but there is no such changs in child component so there is no need
    to rerender so it affect on app perfomance
    */
    setcounterOne(counterOne+1)
  }

  

  


    return(<>
    

  <Child/>
<button onClick={()=>IncrementOne()}>inc one : {counterOne}</button>
    </>)
}



export default Usmemo;