import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Vishwas'
         
      }
      console.log("Life cycle B constructor")
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log(" Life cycle B derived method")
        return null
    }
    shouldComponentDidUpdate()
    {
        console.log("Life cycle B Should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("Life cycle B getSnapShotbeforeupdate")
        return null
    }
    componentDidUpdate()
    {
        console.log("Life cycle B Component did update")
    }
    componentDidMount()
    {
        console.log(" Life cycle B Component did mount")
    }
    changeState=()=>
    {
        this.setState(
            {
                name:'Code Evolution'
            }
        )
    }
  render() {
    console.log(" Life cycle B render method")
    return (
      <div>
        <h1>render method</h1>
        <button onClick={this.changeState}>click me</button>
      </div>
    )
  }
}

export default LifeCycleB
