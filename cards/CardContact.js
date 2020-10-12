import React from "react";

// function Jokes (props) {
//   const style = {
//     fontSize : 34,
//   }
//   return (
//     <div>
//       {/* <h4>{props.joke.question ? `Question: ${props.joke.question}` : null}</h4> */}
//       <h4 style={{
//         display : !props.question && "none",
//         ...style,
//       }}>Question : {props.question}</h4>
//       <p>Punch line : {props.punchLine}</p>
//       <hr />
//     </div>
//   )
// }

// export default Jokes;

//destucturing object
function Products ({name, price, description}) {
  return (
      <div>
        <p>
          {name} costs ${price} <b>{description}</b>
        </p>
        <hr/>
      </div>
  )
}

export default Products;