import { useState } from 'react'
import Reducer from './componets/Reducer'
import Ref from './componets/Form'
import './App.css'
import Todo from './componets/Todo'
import { TodoItemsContext } from './store/todo-item'
import Usememo from './componets/Usmemo'
import Uscallbak from './Uscallbak'
function App() {
  const [data, setData] = useState([])


 const handelData=(val1,val2)=>{

  if(val1 && val2){
    setData((currValue)=>[ // updating state from previous state

    ...currValue,
    
      {name:val1,date:val2}
    
   
  
  ])

  }

console.log("hello")
 }


  return (
   
<TodoItemsContext.Provider  value={data}>
   <>
      


     <Ref passdata={handelData} />  

     

      <Todo items={data}/>

      <Reducer/>

      <Usememo/>


      <Uscallbak/>
    </> 
    </TodoItemsContext.Provider>
  )
}

export default App
