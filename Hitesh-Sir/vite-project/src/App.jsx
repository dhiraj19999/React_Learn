import { useState,useCallback,useEffect,useRef } from 'react'


import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const [numberallowed, setNumberallowed] = useState(false)

  const [charallowed, setCharallowed] = useState(false)

  
  const [password, setPassword] = useState(false)

  const passwordRef=useRef(null)

useEffect(()=>{

  passwordGenrator()
},[length,numberallowed,charallowed,setPassword])

  const passwordGenrator=useCallback(()=>{

  let pass=""

  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberallowed) str+="0123456789"
  if(charallowed) str+="!@#$%^&*_+/[]{}~`"
  for (let i = 1; i<=length;i++) {
   
    let char= Math.floor(Math.random()*str.length+1)
    
    pass+= str.charAt(char)
  }
    setPassword(pass)
  

  },[length,numberallowed,charallowed])



const copyClickbord=()=>{
passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0, 3)
  window.navigator.clipboard.writeText(password)
}


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800'>
      
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      
      <input ref={passwordRef} value={password} className='outline-none w-full py-1 px-3' readOnly placeholder='password'/>
<button onClick={copyClickbord} className='bg-blue-700 text-white'>copy</button>
      </div>
      <input value={length} type='range' min={6} max={100}  className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>

      <h2 className='text-white'>length:{length}</h2>

      <input id='numberinput' type='checkbox' onChange={()=>{ setNumberallowed((prev)=>!prev)}}/>
      <label className='text-white'>Numbers</label>
      <input id='numberinput' type='checkbox' onChange={()=>{ setCharallowed((prev)=>!prev)}}/>
      <label className='text-white'>Charcter</label>

       

      </div>
     
    </>
  )
}

export default App
