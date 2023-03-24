import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { movieById } from 'services/getMovie';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
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
  
  console.log(movie);

  return (
    
    <main>

      {error && <p>Ooooops... something went wrong 😥 {error}</p>}
      <div>Movie page </div>
      <h1>{movie.title}</h1>
      <img src={movie.poster_path} alt="poster"/>

      {/* <MovieCard movie={movie} /> */}

      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </main>
  );
};

export default MovieDetails;