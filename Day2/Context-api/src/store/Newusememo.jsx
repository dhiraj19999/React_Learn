
// memorization concept

function add(a,b){

    return a+b;
}

add(23,12)
/*

if user call same fuction with same parameter each time when js first time called add fun then it
 caluclates value and stored in cache or memeory and suppose user then second time call the add fun with same
 parameter then js don't calculate the value again insted he directly returns the result it incrse
 the perfomance of app its called memorization


*/






import React, { useMemo, useState } from 'react'

function Newusememo() {
  
    const[add,setAdd]=useState(0)
    const[sub,setSub]=useState(100)
  
    
   /* function multiply(){
  console.log("multiply");
        return add*10;
    } */
    
  const multiplication=useMemo(function multiply(){
    console.log("multiply");
          return add*10;
      },[add]) // here we use useMemo so now multiply fun calls only when there is change in add.


/*
when we call setSub there is change in state so entire componet get rerender with that multiply fun
also get called agian and agian but there is no such relation bet multiply and setSub becuse mulitply
fun has relation with add so it totaly depend on add so to avoid calling  multiply fun irespective
of change in add or we can say to make multiple fun call only when there is only cahnge in add.
we use usememo to enhanse perfomance of the app to avoid unnessary fun call


*/

    return (
    
    
 <>
 {multiplication}
 <button onClick={()=>setAdd(add+1)}>ADD</button>
 <span>{add}</span>
 <button  onClick={()=>setSub(sub-1)}>SUB</button>
 <span>{sub}</span>

 
 </>
  )
}

export default Newusememo