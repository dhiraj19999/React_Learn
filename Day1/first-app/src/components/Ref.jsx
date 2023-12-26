


import React from "react"
import { useState } from "react"
import { useRef } from "react"




const Ref=()=>{

   const [text,setText]=useState("")


  const value=useRef()


    




    function handleSubmit(e) {

        e.preventDefault()

      
        setText(value.current.value);


    }



    return (

        <>

            <form onSubmit={handleSubmit}>


                <input ref={value} />

                <button type="submit">add</button>


            </form>

            <h1>{text}</h1>
        </>
    )
}


export default Ref