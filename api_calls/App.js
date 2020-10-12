import React, { Component } from 'react'

export default class App extends Component {
  constructor () {
    super ()
    this.state = {
      laoding : false,
      character : {}
    }
  }

  async componentDidMount () {
    this.setState({ laoding : true })
    const response = await fetch("https://swapi.dev/api/planets/3/")
      const data = await response.json()
        this.setState ({ 
          character : data,
          laoding : false,
        })
  } 

  render() {
    return (
      <div>
        {this.state.laoding && "laoding...."}
        {this.state.character.name}
      </div>
    )
  }
}
