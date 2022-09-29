
import React from 'react'

const Aplication = ({aplications,setBool,setIndex,bool}) => {
   
    
  return (
    <div id="bottun">
        {aplications?.map((el,i)=>
            
            <button  onClick={()=>{setIndex({i})
                                !bool?setBool(true):setBool(false)}}>{el.name} </button>
                              
         )}
        
    </div>
  )
}
export default Aplication