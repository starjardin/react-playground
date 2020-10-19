import React, { useState } from 'react'
import MovieCard from "./MovieCard"
//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit
// Here is the key window : 56bfa17d46d0462b44d3671294f21a94
// Here is the key window : 56bfa17d46d0462b44d3671294f21a94
export default function SearchMovie () {

  //states
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovie = async(e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=56bfa17d46d0462b44d3671294f21a94&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data);
      setMovies(data.results)
    }
    catch {
      console.log(err);
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">Search Movie</label>
        <input 
          onChange={(e) => setQuery(e.target.value)}
          type="text" 
          name="query" 
          placeholder="i.e. The godfather" 
          className="input"
          value={query} />
        <button type="submit" className="button">Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path)
               .map(movie => {
          return(<MovieCard key={movie.id} {...movie}/>)
        })}
      </div>
    </>
  )
}