import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'services/getMovie';
import { List, Item } from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        const getReviewsInfo = async () => {
            try {
                const { data } = await movieReviews(movieId);
                setReviews(data.results);
            } catch (error) {
                setError(error.message);
            }
        };

        getReviewsInfo();
    }, [movieId]);
    
    if (!reviews) return;

    return (
        <div>
            {error && <p>Ooooops... {error}</p>}

            {!reviews.length && <p>"We don't have any reviews for this movie"</p>}

            <List>
                {reviews.map(review=>
                <Item key={review.id}>
                    <p>Author: {review.author}</p>
                    <p>{review.content}</p>
                </Item>)}
            </List>
        </div>
    ) 
  };

export default Reviews;