import React, { Component } from 'react'

class form extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            comments:'',
            topic:'Vue'
        }
    }
    handleUsernameChange=(event)=>
    {
        this.setState({
            username:event.target.value
        })

    }
    handleCommentsChange=(event)=>
    {
        this.setState(
            {
                comments:event.target.value
            }
        )
    }
    SelectHandler=( event) =>
    {
        this.setState(
            {
                topic:event.target.value
            }
        )

    }
    handleSubmit=(event)=>
    {
         alert(`${this.state.username}` `${this.state.comments}`  `${this.state.topic}` )
        event.preventDefault()
    
    }
  render() {
    return (
     <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName </label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
        </div>
        <div>
            <label>Components</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Select</label>
            <select value={this.state.topic} onChange={this.SelectHandler}>
            <option  value='js'>js</option>
            <option value='angular'>angukar</option>
            <option value='vue'>vue</option>
            </select>
           
        </div>
        <div>
        <button >Submit</button>
        </div>
     </form>
    )
  }
}

export default form
