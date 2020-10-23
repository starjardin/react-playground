import React, { useState, useEffect } from 'react'
import  Movies from './Movies'
import  Filter from './Filter'
// import  movies from './MoviesObj.json'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=56bfa17d46d0462b44d3671294f21a94&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

export default function MoviesList () {
  const [filter, setFilter] = useState('')
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL)
      const movies = await res.json()
      setMovies(movies.results)
      console.log(movies);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect ( () => {
    getMovies()
  }, [])
  
   return (
     <>
      <div>
        <Filter filter={filter} setFilter={setFilter} />
        <ul>
          {movies.filter(movie => {
            return movie.title.toLowerCase().includes(filter.toLowerCase())
          }).map(movie => {
            return (
              <div key={movie.id}>
                <Movies  
                  movie={movie}
                />
                <hr />
              </div>
            )
          })}
        </ul>
      </div>
    </>
   )
 }