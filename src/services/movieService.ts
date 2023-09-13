import {apiService, IRes} from "./apiService";
import {IMoviesList} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll():IRes<IMoviesList>{
        return apiService.get(urls.movies.base);
    }
}

export {
    movieService
}