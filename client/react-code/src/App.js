import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../src/pages/Home'

function App() {
  
  

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
                                    
          <Route path ="/*"  element={<p>not found</p>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
