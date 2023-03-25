import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovie } from 'services/getMovie';
import { SearchForm } from '../components/SearchForm/SearchForm';


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
      const query = searchParams.get('value');
      console.log(query)

      if (!query) return;

      const getMovieSearch = async () => {
        try {
            const { data } = await searchMovie(query);
            setMovies(data.results);
        } catch (error) {
            setError(error.message);
        }
    };

    getMovieSearch();
    }, [searchParams]);

    const onSubmit = value => {
      setSearchParams({ value });
    };

    console.log(movies);

    return (
      <div>
         <p>Movies</p>
         {error && <p>Ooooops... {error}</p>}
        <SearchForm onSubmit={onSubmit}/>
          <ul>
            {movies.map(movie => <li key={movie.id}> <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link> </li>)}
          </ul>
      </div>
   
        
    );
  };

export default Movies;