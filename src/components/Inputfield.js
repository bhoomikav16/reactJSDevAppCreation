import React, { useState } from 'react'
import  '../styles/button.css'
export default function Inputfield({type, placeholder,onChange,value}){
  
     
   
    return(
        <input  className='inputFields'  placeholder={placeholder} value={value}  onChange={onChange} type={type} />

    );
}

