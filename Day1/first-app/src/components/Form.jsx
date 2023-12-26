import React from "react"
import { useState } from "react"


const Form=()=>{

   





    const [value, setValue] = useState("")



    const valueSet = (e) => {

        setValue(e.target.value)
    }


    function handleSubmit(e) {

        e.preventDefault()


        return value


    }



    return (

        <>

            <form onSubmit={handleSubmit}>


                <input onChange={valueSet} />

                <button type="submit">add</button>


            </form>

            <h1>{value}</h1>
        </>
    )
}


export default Form