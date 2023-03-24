import { useEffect, useState } from 'react';
import { trendingMovies } from "services/getMovie";
import { Link } from "react-router-dom";


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
        <div>
          <ul>
            {movies.map(movie => <li key={movie.id}> <Link to={`${movie.id}`}>{movie.title}</Link> </li>)}
          </ul>
            
          {error && <p>Ooooops... something went wrong 😥 {error}</p>}
        </div>
    );
  };

  export default Home;
  