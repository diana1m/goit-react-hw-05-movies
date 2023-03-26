import { useEffect, useState } from 'react';
import { trendingMovies } from "services/getMovie";
import { Link, useLocation } from "react-router-dom";


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();

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
        <div>
          <ul>
            {movies.map(movie => <li key={movie.id}> <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link> </li>)}
          </ul>
            
          {error && <p>Ooooops... {error}</p>}
        </div>
    );
  };

  export default Home;
  