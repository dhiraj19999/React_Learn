import { useState } from "react"





const Usecustomhook=(IntialValue=0)=>{  // custom hoook  if we have same ligic in two component then we can use custom hok

const[count,setCount]=useState(IntialValue)

  const Inc=()=>{

setCount(count+1)
  }

  const Dec=()=>{
 
    setCount(count-1)
    
  }

    return [count,Inc,Dec]
}
export default Usecustomhook