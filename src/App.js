import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const[isLightMode,setIsLightMode]=useState(true);

const toggleBtn=()=>{
  setIsLightMode(!isLightMode);
}

  return (
    <div className={`App ${isLightMode? "light":"dark"} `}>
     
     <button  onClick={toggleBtn}>Change Background</button>
    </div>
  );
}

export default App;
