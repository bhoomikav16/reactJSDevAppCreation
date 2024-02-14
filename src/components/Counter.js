import React, { Component } from 'react'
import Submitbtn from './Submitbtn';


 export default class Counter extends Component{
    constructor (){
        super()
            this.state={
                count: 0
            }
        }

        increment(){
            this.setState({
                count: this.state.count  + 1  
                 },()=>{ console.log("Callback value", this.state.count);
                 })
            // this.state.count=this.state.count+1
            console.log(this.state.count);
        }
    



    render(){
        return(
            <div>
                <p> Count -{this.state.count} </p>
                <button onClick={()=>this.increment()}>
                Increment
                </button>
                
            </div>

        );
    }
}

