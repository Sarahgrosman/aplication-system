

import Select from 'react-select';
import React from 'react';


    const Form = ({min_age,setOptions,setMin_age,setRating}) => {
   
       
        const categories =[
            {value:"House And Home",label:"House And Home"},
            {value:"Maps And Navigation",label:"Maps And Navigation"},
            {value:"Health And Fitness",label:"Health And Fitness"},
            {value:"Travel And Local",label:"Travel And Local"},
            {value:"Music And Audio",label:"Music And Audio"},
            {value:"Communication",label:"Communication"},
            {value:"Tools",label:"Tools"},
            {value:"Entertainment",label:"Entertainment"},
            {value:"News And Magazines",label:"News And Magazines"},
            {value:"Shopping",label:"Shopping"},
            {value:"Events",label:"Events"},
            {value:"Dating",label:"Dating"},
            {value:"Lifestyle",label:"Lifestyle"},
            {value:"Books And Reference",label:"Books And Reference"},
            {value:"Weather",label:"Weather"},
            {value:"Business",label:"Business"},
            {value:"Finance",label:"Finance"},
            {value:"Social",label:"Social"},
            {value:"Photography",label:"Photography"},
            {value:"Food And Drink",label:"Food And Drink"},
            {value:"Video Players",label:"Video Players"},
            {value: "Productivity",label:"Productivity"},
            {value:"Parenting",label:"Parenting"},
            {value:"Education",label:"Education"},
            {value:"Auto And Vehicles",label:"Auto And Vehicles"},
            {value:"Medical",label:"Medical"},
            {value:"Sports",label:"Sports"},
          ];
          
          function getAge(dateString) 
          {
              var today = new Date();
              var birthDate = new Date(dateString);
              
              var age = today.getFullYear() - birthDate.getFullYear();
              var m = today.getMonth() - birthDate.getMonth();
              if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
              {
                  age--;
              }
              setMin_age(age);
              return age;
          }
            

  return (
    <div>
      <form>
     
         <h3>Date of Birth</h3>
      <input type="date" value={min_age} onChange={(e)=>{
        getAge(e.target.value);
        
                                                    
  }}></input>
      
      <div>
        <p>categories</p>
  <Select
    isMulti
    options={categories}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={(e)=>{
     setOptions( e.map((el)=>{
        return el.value
      }))
   
    }}

  /> 
      </div>
           <p>Minimum of rating</p>
      <select onChange={(e)=>{
        setRating(e.target.value)
      }}>
        <option></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      
      </form>
    </div>
  )
}

export default Form