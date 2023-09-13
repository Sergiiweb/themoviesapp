import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: null,
    total_results: null
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.total_results = action.payload.total_results;
        }
    }
});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions
}

export {
    movieActions,
    movieReducer
}