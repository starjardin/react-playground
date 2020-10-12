import React, { Component } from "react"
import TodoItem from "./todo/TodoItem"
import todosData from "./todo/todosData"
import "./todo/style.css"
// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.
// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       name : "Hello",
//       age : "904123490"
//     }
//   }

//   render () {
//     return (
//       <div>
//           <h1>{this.state.name}</h1>
//           <h3>{this.state.age} years old</h3>
//       </div>
//     )    
//   }
// }

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

// class App extends Component {
//   constructor () {
//     super ();
//     this.state = {
//       isLoggedIn : true,
//     }
//   }

//   render () {
//     return (
//       <div>
//         <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
//         {/* <h1>You are currently logged <span style= {{this.state.isLoggedIn ? "display: none"}}></span></h1> */}
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.doubleNumber = this.doubleNumber.bind(this);
//     }

//     handleClick () {
//       this.setState((prevState) => {
//         return {
//           // count : precState.count + 1, 
//            count : prevState.count + 1, 
//         }
//       })
//     }

//     doubleNumber () {
//       this.setState((prevState) => {
//         return {
//           count : prevState.count * 2,
//         }
//       })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button
//                   onClick = {this.handleClick}
//                 >Change!</button>

//                 <button
//                   onClick = {this.doubleNumber}
//                 >Double the number!</button>
//             </div>
//         )
//     }
// }


/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        this.setState((prevState) => {
          const upDatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
              //object are passed by reference not by value.
              return {
                ...todo,
                completed : !todo.completed,
              }
            }
            return todo;
          })
          return {
            todos : upDatedTodos,
          }
        })
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
    }

    render() {
        const todoItems = this.state.todos.map (
          item => <TodoItem handleChange = { this.handleChange }
          key={item.id} item={item}
        />)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App