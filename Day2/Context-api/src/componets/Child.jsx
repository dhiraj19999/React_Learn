

import { memo } from "react";

const Child=()=>{

  console.log("Child component renders");
    return(

        <>
        <h2>Child</h2></>
    )
}

export default memo(Child)  // we use memo to avoid unwantend rerenders of child components