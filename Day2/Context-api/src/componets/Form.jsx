



import React from "react"
import { useState } from "react"
import { useRef } from "react"




const Ref=({passdata})=>{

   const [name,setName]=useState("")

   const [date,setDate]=useState("")

  





    function handleSubmit(e) {

        e.preventDefault()

      
        passdata(name,date)
      
     
    }



    return (

        <>

            <form onSubmit={handleSubmit}>


                <input onChange={(e)=>setName(e.target.value)}  type="text"/>

                <input onChange={(e)=>setDate(e.target.value)} type="date"/>

                <button type="submit">add</button>


            </form>

           
        </>
    )
}


export default Ref