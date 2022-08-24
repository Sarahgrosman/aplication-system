import React from 'react'
import Aplication from '../componnets/aplications/Aplication'
import Form from '../componnets/Form/Form'
import Submit from '../componnets/Submit/Submit'
import Description from '../componnets/description/Description'

const Home = ({min_age,
  options,
  rating,
  setMin_age,
  setOptions,
  setRating, 
  aplications,
  setAplications,
  isSkill,
  setIsSkill,
  bool,
  setBool,
  index,
  setIndex
  }) =>{
   
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
          <Aplication aplications={aplications} setBool={setBool} bool={bool} setIndex={setIndex} index={index}/>
       </div>:null}
        {bool?
        <div>
          <Description aplications={aplications} index={index} />
        </div> : null }
       

    </div>
  )
}

export default Home