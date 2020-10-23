import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
//56bfa17d46d0462b44d3671294f21a94
//56bfa17d46d0462b44d3671294f21a94
// https://api.themoviedb.org/3/discover/movie?api_key=56bfa17d46d0462b44d3671294f21a94&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

export default function Movie ({ movie }) {

  const [ like, setLike ] = useState(0)
  const [ unlike, setUnlike ] = useState(0)

  function increment () {
    setLike(prev => prev + 1)
  }

  function decrement () {
    setUnlike(prev => prev + 1)
  }

  return (
    <li>
      <span>{movie.title}</span>
      <div>
        <button onClick={increment}>Like👍</button>
        <span>{like}</span>
        <button onClick={decrement}>unlike👎</button>
        <span>{unlike}</span>
      </div>
    </li>
  )
}

Movie.propTypes = {
  movie : propTypes.shape({
    title  : propTypes.string.isRequired
  }).isRequired
}