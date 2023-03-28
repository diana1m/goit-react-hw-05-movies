import { useEffect, useState  } from 'react';
import { useParams,  useLocation} from 'react-router-dom';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

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
      
      <MovieInfo movie = {movie}/> 
    </main>
  );
};

export default MovieDetails;