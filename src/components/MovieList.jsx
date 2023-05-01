import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (movies.length !== 0) {
      setMovieData(movies);
    }
  }, [movies, movieData]);

  return (
    <ul>
      {movieData.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
