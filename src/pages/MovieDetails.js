import { useEffect, useState, Suspense  } from 'react';
import { Link, Outlet, useParams,  useLocation} from 'react-router-dom';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

import { movieById } from 'services/getMovie';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();
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

  const goBackLink = location.state?.from ?? '/';
 
  return (
    
    <main>
      <GoBackBtn path={goBackLink}>Go Back</GoBackBtn>
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

      <div>
        <Link to = "cast">Cast </Link>
        <Link to = "reviews"> Reviews</Link>
      </div>
      
      {/* <MovieCard movie={movie} /> */}

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;