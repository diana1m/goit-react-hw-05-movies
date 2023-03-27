import { MovieCard } from 'components/MovieCard/MovieCard';
import { List } from './MovieList.styled';

export const MovieList = ({movies}) => {
    return(
        <List>
            {movies.map(movie =>  <MovieCard key={movie.id} movie={movie}> </MovieCard>)}
        </List>
    )
}

