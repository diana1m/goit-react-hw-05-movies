import { Link, useLocation } from "react-router-dom";
import { Item } from "./MovieCard.styled";

export const MovieCard = ({movie: {title, id, poster_path}}) => {
    const location = useLocation();

    const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923" ;

    return(
        <Item>
            <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={image} alt="poster" width='150px' height='225px'/>
                <p> {title}</p>
            </Link>
        </Item>
    )
}