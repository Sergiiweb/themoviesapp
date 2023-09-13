const baseURL = process.env.REACT_APP_API;
const apiAccessToken = process.env.REACT_APP_API_TOKEN;

const movies = '/discover/movie';

const urls = {
    movies: {
        base: movies
    }
}

export {
    baseURL,
    apiAccessToken,
    urls
}