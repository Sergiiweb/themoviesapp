import {apiService, IRes} from "./apiService";
import {IMovieDetails, IMoviesList} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll(page: number): IRes<IMoviesList> {
        return apiService.get(urls.movies.base, {params: {page}});
    },
    getById(id: number): IRes<IMovieDetails> {
        return apiService.get(urls.movie.byId(id))
    },
    getByGenre(page: number, with_genres: number): IRes<IMoviesList> {
        return apiService.get(urls.movies.base, {params: {page, with_genres}})
    },
    searchByKeyword(page: number, query: string): IRes<IMoviesList> {
        return apiService.get(urls.movies.search, {params: {query,page}})
    }
}

export {
    movieService
}