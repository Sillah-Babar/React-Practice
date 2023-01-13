import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vishaws'
      }
    }
    componentDidMount()
    {
        setInterval(()=>
        {
            this.setState(
                {
                    name:'Vishaws'
                }
            )
        },2000)
    }
    
  render() {
    return (
      <div>
        ParentComponent
        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    )
  }
}

export default ParentComponent
