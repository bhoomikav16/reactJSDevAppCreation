import React, { useState } from 'react'
import Inputfield from './Inputfield';
import Submitbtn from './Submitbtn';
import  '../styles/button.css'
import Greet from './Greet';

export default function SignUp({type,onClick}){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cfmPassword,setCfmPassword]=useState("");



    function changeName(event){
        setName(event.target.value)
        console.log(event.target.value);
      }

  function changeEmailValue(event){
    setEmail(event.target.value)
    console.log(event.target.value);
  }
  function changePwdValue(event){
    setPassword(event.target.value)
    console.log(event.target.value);
  }
  function changeCfmPwdValue(event){
    setCfmPassword(event.target.value)
    console.log(event.target.value);
  }


//   const submitForm=(event)=>{
//     event.prevent
//   }


    return(
        <div className='signUpComp'>
        <h2>
            Sign Up
        </h2>
        <form   action='Sign-Up-form'>
            <label  for='name' >Name</label>
         <div>
        
        <Inputfield  value={name} onChange={changeName}  type='name'  placeholder='Name'  > </Inputfield>
        </div>
        <br/>
        <div>
        <label for='email'  >Email</label>
        <Inputfield type='email' placeholder='Email' value={email} onChange={changeEmailValue}    />
        </div>
        <br/>
        <div>
        <label for='password' >Password</label>
        <Inputfield   value={password} onChange={changePwdValue}   type='password' placeholder='Password'></Inputfield>
        </div>
        <br/>
        <div>
        <label for='confirmPwd' >Confirm Password</label>
        <Inputfield  value={cfmPassword} onChange={changeCfmPwdValue} type={type} placeholder='Confirm Password' ></Inputfield>
        </div>
        <br/>
        <div>
            <Submitbtn onClick={onClick} >Submit</Submitbtn>
        </div>
        <div>
        <Submitbtn onClick={onClick} className='forgotPwd'> Back to Sign In </Submitbtn>
        <Greet name="Clark"/>
        </div>
        </form>
        </div>
    );
}