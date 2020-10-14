import React, { Component, useReducer } from 'react'

/*Challenge:
Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

function UserGreeting () {
  return <h2>Welcom back!</h2>
}

function GuestGreeting () {
  return <h2>Please sign in</h2>
}

function Greetings (props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

export default class App extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log("Hello world");
  }
  render () {
    return (
    <div>
      <Greetings 
        isLoggedIn={false}
      />
      <button onClick={this.handleClick}>
        log
      </button>
    </div>
    )
  }
}
