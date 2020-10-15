import React, { Component } from 'react'

/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */
/**
     * We'll be using an API that provides a bunch of meme images.
     * 
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */


/**
     * Create 2 input fields, one for the topText and one for the bottomText
     * Remember that these will be "controlled forms", so make sure to add
     * all the attributes you'll need for that to work
     */

/**
 * Create a method that, when the "Gen" button is clicked, chooses one of the
 * memes from our `allMemeImgs` array at random and makes it so that is the
 * meme image that shows up in the bottom portion of our meme generator site (`.url`)
 */

export default class MemeGenerator extends Component {
  constructor () {
    super ()
    this.state = {
      topText : "",
      bottomText : "",
      randomImage : "http://i.imgflip.com/1bij.jpg",
      allMemesImages : [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const { memes } = response.data
      this.setState ({allMemesImages : memes})
    })
  }

  handleChange (e) {
    const { name, value } = e.target;
    this.setState ({[name] : value})
  }

  handleClick (e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * this.state.allMemesImages.length);
    this.setState((prevState) => {
      return {randomImage : prevState.allMemesImages[randomIndex].url}
    })
  }

  render() {
    return (
      <div>
        <form>
          <label> Top text
            <input 
              type="text"
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
              placeholder="Top Text"
            />
          </label>

          <label> Bottom text
            <input 
              type="text"
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
              placeholder="Bottom Text"
            />
          </label>
          <button 
            onClick={this.handleClick}
          > GEN</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="img" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="top">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}
