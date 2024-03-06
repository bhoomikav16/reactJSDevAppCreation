import React, { Component } from 'react'

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:"GoodBye"

        })
        
    }
    
  
    render() {
    return (
      <div>
        <div>
            {this.state.message}
        </div>
        {/* <button  onClick={this.clickHandler.bind(this)}> Click </button> */}
        {/* Arrow function */}
        {/* <button  onClick={()=>this.clickHandler()}> Click </button> */}
       
       {/* Approach 3 = Binding in the constructor */}
       
        <button  onClick={this.clickHandler}> Click </button>
       


      </div>
    )
  }
}

export default EventBinding
