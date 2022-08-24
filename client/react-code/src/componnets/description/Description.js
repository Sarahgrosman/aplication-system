import React from 'react'
import './Description.css'

const Description = ({aplications,index}) => {
  return (
    
       <div className='scrollingDiv'>{aplications[index.i]?.description}</div>
    
  )
}

export default Description