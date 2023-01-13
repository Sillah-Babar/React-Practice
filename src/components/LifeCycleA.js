import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Vishwas'
         
      }
      console.log("Life cycle A constructor")
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("derived method")
        return null
    }
    shouldComponentDidUpdate()
    {
        console.log("Should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("getSnapShotbeforeupdate")
        return null
    }
    componentDidUpdate()
    {
        console.log("Component did update")
    }
    
    componentDidMount()
    {
        console.log("Component did mount")
    }
    
  render() {
    console.log("render method")
    return (
      <div>
        <LifeCycleB></LifeCycleB>
        <h1>render method</h1>
      </div>
    )
  }
}

export default LifeCycleA
