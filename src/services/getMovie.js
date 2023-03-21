import axios from 'axios';

const API_KEY = "f74d35c77cf5d32effd7c6bb9dddc2ef";
const BASE_URL = 'https://api.themoviedb.org/3';

export async function trendingMovies(page = 1) {
    const resp = {
        url: `${BASE_URL}/trending/movie/day`,
        params: {
            api_key: API_KEY,
            page: page,
        }
    }
    const response = await axios(resp);
    return response;
}

export async function searchMovie (name, page = 1){
    const config = {
        url: `${BASE_URL}/search/movie`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: page,
            query: name
        }
    }
    const response = await axios(config);
    return response.data;
};

export async function movieById (movie_id){
    const config = {
        url: `${BASE_URL}/movie/${movie_id}`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }
    const response = await axios(config);
    return response.data;
};

export async function movieCredits (movie_id){
    const config = {
        url: `${BASE_URL}/movie/${movie_id}/credits`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }
    const response = await axios(config);
    return response.data;
};

export async function movieReviews (movie_id) {
    const config = {
        url: `${BASE_URL}/movie/${movie_id}/reviews`,
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
        }
    }
    const response = await axios(config);
    return response.data; 
};