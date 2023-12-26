
import { useCallback } from "react";
import Callbakchild from "./Callbakchild";
import { useState } from "react";

const Uscallbak=()=>{

const [counterOne,setcounterOne]=useState(0)

const [count,setCount]=useState(0)


  const IncrementOne=()=>{
    
    setcounterOne(counterOne+1)
  }

  

  const Learning=useCallback (()=>{

/*

here we use usemmeo in callbackhild but still our callbackchild rerenders everytime becuse when our page get
rerender that time functions also get recreated newly  so here Learning function get recreated thats why
callbackchild see that there is new Learning creation each time  so there is changes in callbackchild
component thats why it rerenders so to avoid this problem we use useCallback with depedncy

*/

  },[]) // if we pass count inside arr it and chnge the count then callbackchild rerenders


  


    return(<>
    

  <Callbakchild  Learning={Learning} />
<button onClick={()=>IncrementOne()}>usecallback counter : {counterOne}</button>

<button onClick={()=>setCount(count+1)}>count inc</button>
    </>)
}



export default Uscallbak;