import style from  './Items.module.css'

const Items=({val,handleButton})=>{

    return(

      
     

<li className={style.li} key={val} >{val}  

<button  onClick={handleButton}>Click</button> 
</li>
       
    )
}

export default Items;