import React, { Children, useState } from 'react'
import  '../styles/button.css'

export default function Submitbtn({children, className, handleClick}){
    
    const[forgotPassword, setForgotPassword]=useState(false);
    console.log('chekc2')

    function setValue(){
        setForgotPassword(true)
    }
    
    return(
              <button  onClick={handleClick} id='lgnbutton' className={className} >{children}</button>
    );
}