import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from 'services/getMovie';
import { List, Item, Name } from './Cast.styled';

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
            <List>
                {cast.map(actor=> 
                <Item key={actor.id}>
                    <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "https://ace.edu/wp-content/uploads/2022/02/user-thumbnail-icon.png"} alt={actor.name} width="150px" height="225px"/>
                    <Name>{actor.name}</Name>
                    <p>Character: {actor.character}</p>
                </Item>)}
            </List>
        </div>
            
        );
};

export default Cast;