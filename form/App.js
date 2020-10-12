import React, { Component } from 'react'

export default class App extends Component {
  constructor () {
    super ()
    this.state = {
      firstName : "",
      lastName : "",
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput (event) {
    const { name, value } = event.target;
    this.setState ({
      [name] : value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <input 
            style={{display:"block"}}
            autoComplete='fasle'
            type="text" 
            name="firstName"
            placeholder="first name"
            onChange={this.handleInput}
            value={this.state.firstName}
          />
          <input 
            style={{display:"block"}}
            autoComplete="fasle"
            type="text" 
            name="lastName"
            placeholder="last name"
            onChange={this.handleInput}
            value={this.state.lastName}
          />
          <label>
          <input
            type="checkbox"
          />
          </label>
          <h2>{this.state.firstName} {this.state.lastName}</h2>
        </form>  
      </div>
    )
  }
}
