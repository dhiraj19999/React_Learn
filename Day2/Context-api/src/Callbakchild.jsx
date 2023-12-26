





import { memo } from "react";

import { useState } from "react";

const Callbakchild=({Learning})=>{

const [counterOne,setcounterOne]=useState(0)

console.log("callbackchild rerender");




  


    return(<>
    


    </>)
}



export default memo(Callbakchild); //here we use usememo still it rerenders the child component