import "./style.css";
import React, { Component } from "react"
import { TodoItem } from "./TodoItem"
import todosData from "./todosData"

/*
Let's practice props and mapping components on our todo list app!
I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 
Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

/********************************************************/


/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.
Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state
Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

class App extends Component {
  constructor () {
    super ();
    this.state = {
      text : todosData,
    }
  }
  render () {
  const todosItem = this.state.text.map(item => <TodoItem key={item.id} product = {item}/>);
    return (
        <div className="todo-list">
            { todosItem }
        </div>
    )
  }
}

// function App () {
//   return (
//     <div className="todo-list">
//       { todosData.map(todo => <todo key={todo.id} todo={todo}/>) }
//     </div>
//   )
// }

/******************************************/ 

// function handleClick() {
//     console.log("I was clicked")
// }
// // https://reactjs.org/docs/events.html#supported-events
// function App() {
//     return (
//         <div>
//             <img 
//               onMouseOver={() => {console.log("Hello world");}}
//               src="https://www.fillmurray.com/200/100"
//             />
//             <br />
//             <br />
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }

export default App