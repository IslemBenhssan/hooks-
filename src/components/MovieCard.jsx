import React from 'react'
import StartRating from './StartRating'

const MovieCard = ({movie,handleDelete}) => {
    
  return (
    <div className='movie-card'>
        <h3> {movie.name}</h3>
        <img src={movie.image} alt={movie.name}/>
        <p> {movie.rating}</p>
        <p>{movie.date}</p>
        <StartRating rating={movie.rating}/>
        <div>

            <button className="btn"onClick={()=>handleDelete(movie.id)} >Delete</button>
        </div>

    </div>
  )
}

export default MovieCard