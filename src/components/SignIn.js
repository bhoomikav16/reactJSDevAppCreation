
import React from 'react';
import '../App.css'
import Submitbtn from './Submitbtn';
import Inputfield from './Inputfield';
import Paragraph from './Paragraph';




export default function SignIn({onClick}) {
  return (
    <div className="App" >
      <div style={{ alignItems : 'center', justifyItems : 'center', alignSelf : 'center'}}> 
      <h2 className='headerSignIn'>Sign In</h2>
      <Inputfield placeholder='Email' type ='text'/>
      <br/>
       <Inputfield placeholder='Password' type ='password'/>
       <br/>
       <Submitbtn className='button'>SIGN IN</Submitbtn>
       <Submitbtn onClick={onClick} className='forgotPwd' > Forgot Password? </Submitbtn>
       <Paragraph text="If you don't have an account?" />
       </div>

    </div>
    
  );
}


