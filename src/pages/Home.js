import { useEffect, useState } from 'react';
import { trendingMovies } from "services/getMovie";
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
    const getTrendingMovies = async () => {
        try {
          const { data } = await trendingMovies();
          setMovies(data.results);
        } catch (error) {
          setError(error.message);
        }
      };
  
      getTrendingMovies();
    }, []);
    console.log(movies)

    return (
        <div>
          <MovieList movies = {movies} />

          {error && <p>Ooooops... {error}</p>}
        </div>
    );
  };

  export default Home;
  