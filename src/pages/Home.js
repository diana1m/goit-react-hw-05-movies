import { useEffect, useState } from 'react';
import { trendingMovies } from "services/getMovie";


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

    return (
        <>
        <ul>
            {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
        </ul>
        {error && <p>Ooooops... something went wrong 😥 {error}</p>}
        </>
    );
  };

  export default Home;
  