import React, { Children } from 'react'
import Submitbtn from './Submitbtn';

export default function Paragraph({text}){
    return(
        <p style={{marginLeft :'35px', marginTop:'20px'}} >{text}<Submitbtn className='signUpBtn'> SIGN UP </Submitbtn>

        </p>
    );
}