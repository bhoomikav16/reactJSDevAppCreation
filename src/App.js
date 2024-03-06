import React, { useState } from 'react'
import './App.css';

import Loginimage from './components/Loginimage';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import Profile from './components/Profile';




function App() {
  const[value , setValue]=useState(false);

  function valuePass(){
    setValue(true)
  }
  function changeValue(){
    setValue(false)
  }
  const[profile,setProfile]=useState(false);
  function callProfile(){
    setProfile(true);
  }

   
  

  return (
    <div clas sName="App" >

      {profile ? (<Profile onClick={callProfile}/>):(
      <div>
      <Loginimage/>
      
     { value ? (<ForgotPassword onClick={changeValue}/>):(<SignIn  onClick={valuePass}/>
      )}
      </div>
      )}
       

       
       
    </div>
  
  );
}

export default App;