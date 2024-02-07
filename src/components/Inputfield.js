import React, { useState } from 'react'
import  '../styles/button.css'
export default function Inputfield( {type, placeholder}){
   
    const[inputNumber,setInputNumber]=useState();

    function fieldNumber(event){
        setInputNumber(event.target.value);

    }
    
   
   
    return(
        <input  className='inputFields'  placeholder={placeholder} value={inputNumber}  onChange={fieldNumber} type={type} />

    );
}

