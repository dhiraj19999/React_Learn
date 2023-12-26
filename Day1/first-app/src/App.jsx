import React from 'react'
import { useState } from 'react'
import Item from './components/Item'
import Ref from './components/Ref'
//import { useState } from 'react'
import Children from './components/Children'
import Form from './components/Form'
import Input from './Input'
import './App.css'

function App() {



let initalItem=[
  {
    name:"dhiraj",
    age:24
  },
  {
    name:"suraj",
    age:25
  }
]



const [item,setItem]=useState("")
const [nameitem,setNameitem]=useState(initalItem)
const [cloth,SetCloth]=useState(["shirt","pant","cap","tshirt"])


let food=["dal","bhaji","poli","roti"]

let condition=food.length===0


const Inputset=(event)=>{

  setItem(event.target.value)
}

const handleAdd=()=>{

  if(item!==""){
    SetCloth([...cloth,item])

    setItem("")
  }
}


const handleStudent=(name,age)=>{

setNameitem((currValue)=>[ // updating state from previous state

  ...currValue,
  {name:name,age:age}

])

}


function handleDelete(item){

 const filteritem= nameitem.filter((ite)=>{
  return   (ite.name!=item.name  )       
 })

setNameitem(filteritem)
}





//  condtion && <h2>I am still hungry.</h2>   ==> useful for truthy value == logical operators

  return (
    <>

    <h1> Food menu  </h1>

    <Input Inputchange={Inputset} val={item}  handleClick={handleAdd}/>
      
      {  condition?<h2>I am still hungry</h2>:  // conditioal rendring
      
      
      
      
      <ul>
        {
          food.map((el,ind)=>{

            return <li key={ind} >{el}</li>
          })
        }
      </ul>
         }
      
    
      
      <Item clothItems={cloth} />





{/*passing children  for passing elements into components*/ }


<Children>
<Item clothItems={cloth} />
  <h1>hello i am children</h1>
</Children>


<Children>

<button>second chil</button>
</Children>


<button onClick={()=>{console.log('hello');}}>vks</button>




  <button onClick={()=>handleStudent("vaibhav",25)}>change intial item</button>


<>{nameitem.map((item,ind)=>{
 return<> <h5 key={ind}>{item.name}=={item.age}</h5>
 <button onClick={()=>handleDelete(item)}>delete</button> </>
})}</>


  <Form/>

  <Ref/>
    </>
  )
}

export default App
