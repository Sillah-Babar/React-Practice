import React, { Component } from 'react'
import Child from './child'
class parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent'
      }
      this.greetParent=this.greetParent.bind()
    }
    greetParent(childn)
    {
        console.log("greet parent"+childn)
        //alert(`Hello ${this.state.parentName}`)
    }
    
  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}></Child>
      </div>
    )
  }
}

export default parent
