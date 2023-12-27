import { useReducer } from "react"

/*

useReducer is hook for state managment preferable for complex state management logic.
const[state,dispatch]=useReducer(reducer,intialstate)

reducer(currentstate,action)
reducer is fun which accepts two parameter
dispatch calls reducer function
reducer accpets action from dispatch and returns new state

*/



let intialState=0;

  const reducer=(state,{type,payload})=>{
      
    switch (type) {
        case "inc":
            return state+1
            case "dec":
                return state-1
                
                case "add payload":
                return state+payload;
    
        default:
            return state;
    }

  }

const Reducer=()=>{

 const[count,dispatch]= useReducer(reducer,intialState)
    

  
  
  
  
  
  
  return(

       
       <>
<h1>Reducer</h1>
<h2>{count}</h2>
<button onClick={()=>dispatch({type:"inc"})}>INCRMENT</button>
<button onClick={()=>dispatch({type:"dec"})}>DECERMENT</button>
<button onClick={()=>dispatch({type:"add payload",payload:5})}>Payload</button>


        </>
    )
}


export default Reducer