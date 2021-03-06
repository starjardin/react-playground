// import React from "react";
// import ReactDOM from "react-dom";
// import MyInfo from "./MyInfo.js";
//Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.
// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page


//   ReactDOM.render(
//     <ul>
//       <li>I am the first li</li>
//       <li>I am the second li</li>
//       <li>I am the third li</li>
//     </ul>, document.getElementById('root'));

// function App () {
// return  (
//   <ul>
//     <li>I am the first li</li>
//     <li>I am the second li</li>
//     <li>I am the third li</li>
//   </ul>
//  )
// }

// ReactDOM.render(<App/>, document.getElementById("root"));

//************************************************/

//Functional components;
/*
UpperCase cameleCase : MyApp
*/


// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).


// ReactDOM.render(<MyInfo/>, document.getElementById('root'));
// import Footer from "./components/Footer.js";
// import Header from "./components/Header.js";
// import MainContent from "./components/MainContent.js";

// function App () {
//   return (
//     <article>
//       < Header/>
//       <MainContent/>
//       <Footer/>
//     </article>
//   )
// }

//this is the entry point of our app


// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

// import MainContent from "./components/sub-component/MainContent.js";
// import NavBar from "./components/sub-component/NavBar.js";
// import Footer from "./components/sub-component/Footer.js";

// function MyApp () {
//   return (
//     <article>
//       <NavBar />
//       <MainContent />
//       <Footer />
//     </article>
//   )
// };

// ReactDOM.render(<MyApp />, document.getElementById("root"));
/*
Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug
*/
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// #1
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Header username="Honey"/>
//         <Greeting />
//       </div>
//     )
//   }
// }

// #2
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }

// class Header extends React.Component {
//   render (props) {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     )
//   }
// }
// #3
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }

// class Greeting extends React.Component {
//   render () {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//       <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));