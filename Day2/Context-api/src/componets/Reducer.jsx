import { useReducer } from "react"




const todoItemreducer=(currTodo,action)=>{

    let NewTodo=currTodo
    if(action.type=="NEW_ITEM"){
 NewTodo=[

    ...NewTodo,{name:action.payload.name,age:action.payload.age}
]

    }

    return NewTodo;

}


const Reducer=()=>{

  const[newTodo,dispatchTodo]=useReducer(todoItemreducer,[])
    
  
  
  
  const addTodo=(name,age)=>{

const newItemaction={
    type:"NEW_ITEM",
    payload:{
        name,age
    }
}

dispatchTodo(newItemaction)


console.log(newTodo);
  }
  
  
  
  return(

       
       <>

<button onClick={()=>addTodo("dhiraj",23)}>Reducer</button>



        </>
    )
}


export default Reducer