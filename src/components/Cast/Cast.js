import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from 'services/getMovie';

const Cast = () => {
    const [cast, setCast] = useState(null);
    const [error, setError] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        const getCastInfo = async () => {
            try {
                const { data } = await movieCredits(movieId);
                setCast(data.cast);
            } catch (error) {
                setError(error.message);
            }
        };

        getCastInfo();
    }, [movieId]);
    
    if (!cast) return;

    return (
        <div>
            {error && <p>Ooooops... {error}</p>}
            <ul>
                {cast.map(actor=> <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} width="150px"/>
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                </li>)}
            </ul>
        </div>
            
        );
};

export default Cast;