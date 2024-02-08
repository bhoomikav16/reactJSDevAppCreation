import React, { useState } from 'react'
import Inputfield from './Inputfield';
import  '../styles/button.css'
import Submitbtn from './Submitbtn';

export default function ForgotPassword({placeholder,type,className,onClick}){

    const[inputValue,setInputValue]=useState();

    function fieldValue(event){
        setInputValue(event.target.value);

    }
    const[backBtnValue,setBackBtnValue]=useState(false);
    function btnValue(){
        setBackBtnValue(true)
   }


    return(
        <div style={{ alignItems : 'center', justifyItems : 'center', alignSelf : 'center'}}>

            <h2 className='FgtPwdHeader' >Forgot password</h2>

            <p> Enter your email address associated with your account </p>
        
        <Inputfield className='emailPwd' placeholder={placeholder} value={inputValue}  onChange={fieldValue} type={type}> </Inputfield>
        <br/>
        <Submitbtn onClick={onClick} className='forgotPwd'> Back to Sign In </Submitbtn>
        
        </div>

    );

}