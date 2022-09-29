import React,{useState} from 'react'
import Aplication from '../componnets/aplications/Aplication'
import Form from '../componnets/Form/Form'
import Submit from '../componnets/Submit/Submit'
import Description from '../componnets/description/Description'

const Home = () =>{

  const [options, setOptions] = useState(null);
  const [min_age,setMin_age] = useState(null)
  const [rating,setRating] = useState(null)
  const [aplications,setAplications]=useState([]);
  const [isSkill,setIsSkill] = useState(false)
  const [bool,setBool]=useState(false)
  const [index,setIndex] = useState(null)
  console.log(isSkill);
  console.log(aplications);
  console.log(options);
  console.log(min_age);
  console.log(rating);
  console.log(index);
   
  return (
    <div>
      
      <div>
      <Form min_age={min_age} 
      setMin_age={setMin_age} 
      setOptions={setOptions} setRating={setRating} />
      </div>
      <div>
      <Submit min_age={min_age}
       options={options} 
       rating={rating}
       setAplications={setAplications}
       setIsSkill={setIsSkill}
       aplications={aplications}
       />
       </div>
       
        {isSkill?
        <div >       
          <Aplication aplications={aplications} setBool={setBool} bool={bool} setIndex={setIndex} />
       </div>:null}
        {bool?
        <div>
          <Description aplications={aplications} index={index} />
        </div> : null }
       

    </div>
  )
}

export default Home