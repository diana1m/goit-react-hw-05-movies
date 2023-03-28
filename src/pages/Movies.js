import { useEffect, useState } from 'react';
import { useSearchParams} from 'react-router-dom';
import { searchMovie } from 'services/getMovie';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      const query = searchParams.get('value');

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


    return (
      <div>
         {error && <p>Ooooops... {error}</p>}
         
        <SearchForm onSubmit={onSubmit}/>
        
        <MovieList movies = {movies} />
      </div>
   
        
    );
  };

export default Movies;