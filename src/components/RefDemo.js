import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
      
        this.inputRef=React.createRef()
      }

componentDidMount(){
          this.inputRef.current.focus()
          console.log(this.inputRef)
      }
  render() {
   
    
    return (
      <div>
        <form>
            <input type='text' ref={this.inputRef}></input>
        </form>
      </div>
    )
  }
}

export default RefDemo
