

import Items from "./Items"
const Item=({clothItems})=>{

return(

     
    <>
     <ul>
        {
          clothItems.map((el,ind)=>{

            return <Items key={ind} val={el}  handleButton={()=>{console.log("kkk");}}/>
          })
        }
      </ul>
        
    
    </>
)

}



export default Item