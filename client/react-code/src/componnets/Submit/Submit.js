import React,{useEffect} from 'react'
import axios from 'axios'



const Submit = ({min_age,
  options,
  rating,
  setAplications,
  setIsSkill,
  aplications}) => {
  
      const handleSubmit = async () => {
        if(min_age&&options&&rating){
          const { data } = await axios.post("http://localhost:5002/find",{min_age,options,rating});
          console.log(data);
         setAplications(data.map((el)=>({id:el.id,
                                        name:el.name,
                                        description:el.description,
                                        icon:el.icon})));
            setIsSkill(true)
        }
        else{
          alert("The three fields must be updated")
        }
      };
    
  return (
    <div>
    <button onClick={handleSubmit} >Get Recomended Apps!</button>
    </div>
  )
}

export default Submit