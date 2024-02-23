
import React, { useState } from 'react';
import '../App.css'
import Submitbtn from './Submitbtn';
import Inputfield from './Inputfield';
import Paragraph from './Paragraph';
import SignUp from './SignUp';
import Greet from './Greet';
import Counter from '../components/Counter'
// import EventBinding from '../components/EventBinding ';
import Data from '../components/Data'
import Fragments from './Fragments';




export default function SignIn({onClick,value}) {

  const[param,setParam]=useState(false);
  function callingComponents(){
    setParam(true)
  }
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  function changeEmailValue(event){
    setEmail(event.target.value)
    console.log(event.target.value);
  }
  function changePasswordValue(event){
    setPassword(event.target.value)
    console.log(event.target.value);
  }
  function changeParam(){
    setParam(false)
  }

  return (
  
    param ? <SignUp placeholder='Name'   />:

    <div className="App" >
      <div style={{ alignItems : 'center', justifyItems : 'center', alignSelf : 'center'}}> 
      <h2 className='headerSignIn'>Sign In</h2>
      <Inputfield  value={value} placeholder='Email' type ='text' onChange={changeEmailValue}/>
      <br/>
       <Inputfield value={password} placeholder='Password' type ='password' onChange={changePasswordValue} />
       <br/>
       <Submitbtn className='button'>SIGN IN</Submitbtn>
       <Submitbtn onClick={onClick} className='forgotPwd' > Forgot Password? </Submitbtn>
       <Paragraph onCk={callingComponents} text="If you don't have an account?" />
       </div>
       <div>
        <Fragments id="inp" type="text" placeholder="Email"/>
       <Greet name="Clark" heroName="Batman" />
        <Counter/>
        {/* <EventBinding/> */}
        {/* <Data/> */}
       </div>
    

    </div>
  
  
    
  );
}


