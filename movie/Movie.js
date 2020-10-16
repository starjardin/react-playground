import React, { useEffect, useState } from 'react'
import randomId from 'random-id'
import './style.scss'

export default function Movie () {
  
  const [moviesData, setMoviesData] = useState([])

  async function fetchMovies () {
    const response = await fetch("https://ghibliapi.herokuapp.com/films")
    const responseJson = await response.json()
    setMoviesData( responseJson )
  }
  

  useEffect (() => {
    fetchMovies()
  }, [])

  const sortedScore = moviesData.sort((a, b) => {
    return b.rt_score - a.rt_score
  })

  const movies = sortedScore.map(movie => {
     return (
       <div key={randomId()} className="container">
        <h2 >{movie.title}<span>{movie.release_date}</span></h2>
        <p>{movie.description}</p>
        <div className="wrapper">
          <span className="producer">{movie.producer}</span>
          <span>{movie.director}</span>
        </div>
        <span className="score">{movie.rt_score}</span>
       </div>
     ) 
  })

  return movies
}