import React, { Component } from 'react'

export default class App_exercise extends Component {
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */
	constructor() {
		super();
		this.state = {
      firstName : "",
      lastName : "",
      age : "",
      gender : "",
      location : "",
      vegeterian : false,
      spicy : true,
      freeporc : false,
    };
    this.handleChange = this.handleChange.bind(this);
	}

  handleChange (e) {
    const { name, type, value, checked } = e.target;
      type === "checkbox" 
      ? this.setState({[name] : checked}) 
      : this.setState( {[name] : value})
  }

	render() {
		return (
			<main>
				<form>
					<input 
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            autoComplete="off"
          />
					<br />
					<input 
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            autoComplete="off"
          />
					<br />
					<input 
            placeholder="Age"
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            autoComplete="off"
          />
					<br />
          <label>
            <input
              type="radio"
              value="male"
              checked={this.state.gender === "male"}
              name="gender"
              onChange={this.handleChange}
            />Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={this.state.gender === "female"}
              name="gender"
              onChange={this.handleChange}
            />Female
          </label>
					<br />
					<select 
            value={this.state.value}
            name="location"
            onChange={this.handleChange}
          >
            <option value="tana">Tana</option>
            <option value="afgan">Afgan</option>
            <option value="brazil">Brazil</option>
            <option value="hong kong">Hong Kong</option>
            <option value="china">China</option>
            <option value="france">France</option>
            <option value="europe">Europe</option>
            <option value="india">India</option>
          </select>
					<br />
					<label>
            <input 
              type="checkbox" 
              name="vegetarian" 
              value={this.state.vegeterian}/>Vegetarian
          </label><br/>
					<label>
            <input 
              type="checkbox" 
              name="spicy" 
              value={this.state.spicy}/>Spicy
          </label><br/>
					<label>
            <input 
              type="checkbox" 
              name="porkFree" 
              value={this.state.porkFree}/>PorkFree
          </label>
					<br />
					<button>Submit</button>
				</form>
				<hr />
				<h2>Entered information:</h2>
				<p>Your name: {this.state.firstName} {this.state.lastName}</p>
				<p>Your age: {this.state.age}</p>
				<p>Your gender: {this.state.gender}</p>
				<p>Your destination: {this.state.location}</p>
				<p>
					Your dietary restrictions: 
            {this.state.vegeterian && "vegeterian"}
            {this.state.spicy && "spicy"}
            {this.state.freeporc && "freeporc"}
					{/* Dietary restrictions here, comma separated */}
				</p>
			</main>
		);
	}
}
