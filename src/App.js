import React, { useState } from 'react'
import './App.css';

import Loginimage from './components/Loginimage';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';




function App() {
  const[value , setValue]=useState(false);

  function valuePass(){
    setValue(true)
  }
  function changeValue(){
    setValue(false)
  }
  
   
  

  return (
    <div className="App" >
      
      <Loginimage/>
      
      {value? <ForgotPassword onClick={changeValue}/>:<SignIn  onClick={valuePass}/>}
      
    </div>
  );
}

export default App;