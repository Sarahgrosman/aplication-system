
import {  useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../src/pages/Home'

function App() {
  
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
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home 
                                    min_age={min_age}
                                    options={options}
                                    rating={rating}                
                                    setOptions={setOptions} 
                                    setMin_age={setMin_age} 
                                    setRating={setRating}
                                    aplications={aplications}
                                    setAplications={setAplications}
                                    isSkill={isSkill}
                                    setIsSkill={setIsSkill}
                                    bool={bool}
                                    setBool={setBool}
                                    index={index}
                                    setIndex={setIndex}


/>} />
                                    
          <Route path ="/*"  element={<p>not found</p>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
