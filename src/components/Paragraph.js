import React, { Children } from 'react'
import Submitbtn from './Submitbtn';

export default function Paragraph({text,onCk}){
    return(
        <p style={{marginLeft :'35px', marginTop:'20px'}}>{text}<Submitbtn onClick={onCk}  className='signUpBtn'> SIGN UP </Submitbtn>

        </p>
    );
}