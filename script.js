console.log("Hello world");
import React from 'react';
import ReactDOM from "react-dom";

function App () {
  return <h1>You are now a react developper</h1>;
}
//called JSX syntax

function Allll () {
  return <p>lorem kldgjklasd here is a new paagraph for you for this term. Happy coding🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕 Put it on fire🔥🔥🔥 and then eat it finaly 🍴🍴🍴🍴</p>
}

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('div'));
ReactDOM.render(<Allll/>, document.getElementById("root2"));
ReactDOM.render(<Allll/>, document.getElementById("div2"));