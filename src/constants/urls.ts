const baseURL = process.env.REACT_APP_API;
const apiAccessToken = process.env.REACT_APP_API_TOKEN;

const movies = '/discover/movie';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
const movie = '/movie';
const genres = '/genre/movie/list';

const urls = {
    movies: {
        base: movies,
        poster: posterBaseUrl,
        byGenre: (id: number): string => `${movies}?with_genres=${id}`,
    },
    genres,
    movie: {
        byId: (id: number): string => `${movie}/${id}`
    }
}

export {
    baseURL,
    apiAccessToken,
    urls
}