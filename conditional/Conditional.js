import React from "react";

function Conditional (props) {
  return (
    <div>
      <h2> 
        You are currently logged {props.user.isLoggedIn 
          ? "in" : "out"
        }
      </h2>
      <button onClick={props.handleState}>
        log {props.user.isLoggedIn ? "out" : "in"}
      </button>
    </div>
  )
}

export default Conditional;