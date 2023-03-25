import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { movieById } from 'services/getMovie';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const { data } = await movieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getMovieInfo();
  }, [movieId]);
  
  if (!movie) return;
  
  console.log(movie);
 
  return (
    
    <main>

      {error && <p>Ooooops... {error}</p>}
      <div> 
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" width='300px'/>
        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>{movie.genres.map(genre => genre.name + " ")}</p>
      </div>
      
      {/* <MovieCard movie={movie} /> */}

      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </main>
  );
};

export default MovieDetails;