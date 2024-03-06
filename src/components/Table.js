import React from 'react'
import '../styles/table.css'


export default function Table(){
    return(
        <div className='tableData'>
            <table>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Confirm Password
                    </th>
                </tr>
            </table>

        </div>
    );
}