import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "./Movie";
import {movieService} from "../../services";
import {movieActions} from "../../redux";
import css from "./Movies.module.css";

const Movies = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        movieService.getAll().then(({data})=> {
            dispatch(movieActions.setAll(data));
        })
    }, []);

    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};