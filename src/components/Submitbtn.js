import React, { Children, useState } from 'react'
import  '../styles/button.css'
import ForgotPassword from './ForgotPassword';

export default function Submitbtn({children, className,onClick}){
    

    
    return(
              <button  onClick={onClick} id='lgnbutton' className={className} >{children}</button>
    );
}