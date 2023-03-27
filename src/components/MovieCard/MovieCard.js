import { Link, useLocation } from "react-router-dom";
import { Item } from "./MovieCard.styled";

export const MovieCard = ({movie: {title, id, poster_path}}) => {
    const location = useLocation();

    return(
        <Item>
            <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" width='150px'/>
                <p> {title}</p>
            </Link>
        </Item>
    )
}