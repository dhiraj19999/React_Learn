


const Input=({Inputchange,handleClick,val})=>{


    return(
      <>
       <input value={val} onChange={Inputchange}/>

       <button onClick={handleClick}>add</button>
      </>
       
    )
}

export default Input