// import React from 'react'
// import Jokes from './CardContact'
// import jokesData from './jokeData'

// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
// App should be in its own file
// App should render 5 <Joke /> components
// Each Joke should receive a "question" prop and a "punchLine" prop
// and render those however you'd like
// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
// E.g.: "It's hard to explain puns to kleptomaniacs because they always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?
// Spend time practicing the style of your Joke component


// function App () {
//   console.log(jokesData);
//   const jokesComponents = jokesData.map(joke => (
//     console.log(joke.question),
//     <Jokes 
//       key={joke.id}
//       question = {joke.question}
//       punchLine = {joke.punchLine}
//     />
//   ))
//   return (
//     <div>
//       {jokesComponents}
//     </div>
//   )
// }

// export default App;

/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.
Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/
import React from "react"
import productsData from "./vschoolProducts.js"
import Products from "./CardContact.js"
function App() {
  const productComponenets = productsData.map(pro => {
    return (
      <Products 
        key={pro.id}
        name={pro.name}
        price={pro.price}
        description={pro.description}
      />
    )
  })
  return (
    <div>
      {productComponenets}
    </div>
  )
}
export default App