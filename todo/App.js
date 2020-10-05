import React from 'react';
import { li } from "./style.js";
function App () {
  return (
    <article>
      <ul>
        <li style={li}>
          <input type="checkbox"/>
          <p>here is the task to do today</p>
          <button>&times;</button>
        </li>
        <li style={li}>
          <input type="checkbox"/>
          <p>here is the task to do today</p>
          <button>&times;</button>
        </li>
        <li style={li}>
          <input type="checkbox"/>
          <p>here is the task to do today</p>
          <button>&times;</button>
        </li>
      </ul>
    </article>
  )
}

const hello = () => console.log("hello");
hello()
export default App;