
import { useState } from 'react';
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import Inputfield from './components/Inputfield';
import Loginimage from './components/Loginimage';
import Paragraph from './components/Paragraph';
import Submitbtn from './components/Submitbtn';




function App() {
  const[forgotPassword, setForgotPassword]=useState(false);
  function handleClick(){
    console.log('check',forgotPassword)
    setForgotPassword(true)
  }
  return (
    <div className="App" >
      
      <Loginimage/>
      { forgotPassword ? <ForgotPassword/> :

      <div style={{ alignItems : 'center', justifyItems : 'center', alignSelf : 'center'}}> 
      <h2 className='headerSignIn'>Sign In</h2>
      <Inputfield placeholder='Email' type ='text'/>
      <br/>
       <Inputfield placeholder='Password' type ='password'/>
       <br/>
       <Inputfield placeholder='Phone Number' type ='number'/>
       <br/>
       <Submitbtn className='button'>SIGN IN</Submitbtn>
       <Submitbtn className='forgotPwd' onClick={handleClick}> Forgot Password? </Submitbtn>
       <Paragraph text="If you don't have an account?" />
       
       </div>
}
      
    </div>
  );
}

export default App;
