import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Calculator from './Components/CalculatorFormJpa72/CalculatorFormJpa72'


function App() {
  
const [equation, setEquation] = useState({});

function updateEquation(e){
  setEquation({
    ...equation,
    [e.target.id] : [e.target.value]
  })
}
  return (
    <div className="App">
     <h1>This is calculator</h1>
     <Calculator />
    </div>
  );
}

export default App;
