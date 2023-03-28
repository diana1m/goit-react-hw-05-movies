import { Wrapper, LinkStyled, BoxMovie, LinkWrapper } from './MovieInfo.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const MovieInfo = ({movie: {poster_path, title, vote_average, overview, genres}}) => {

    const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923" ;
   
    return (
        <Wrapper>
            <BoxMovie> 
                <img src={image} alt="poster" width='300px'/>
                <div>
                    <h1>{title}</h1>
                    <p>User score: {Math.round(vote_average * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <p>{genres.map(genre => genre.name).join(", ")}</p>
                </div>
            </BoxMovie>
            <LinkWrapper>
                <LinkStyled to = "cast">Cast </LinkStyled>
                <LinkStyled to = "reviews"> Reviews</LinkStyled>
            </LinkWrapper>

            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>

        </Wrapper>
        
    )
}