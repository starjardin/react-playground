// From scratch, initialize the React app
// Render an <App /> component
// Create the <App /> component from scratch
// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

/*
Time to have fun styling! But first things first: 
1. Change the input/p combo below to be a new component called <TodoItem />. <TodoItem /> (for now) will just have the same displayed data below (every todo item is the same) hardcoded inside of it. (We'll learn soon how to make the TodoItem more flexible)
2. Style up the page however you want! You're welcome to use regular CSS (in the CSS file) or inline styles, or both!
*/

import React from "react";
import ReactDOM from "react-dom";
import App from './todo/App.js';

ReactDOM.render(<App />, document.getElementById("root"));