import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "./Movie";
import {movieService} from "../../services";
import {movieActions} from "../../redux";
import css from "./Movies.module.css";
import {useSearchParams} from "react-router-dom";

const Movies = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
            dispatch(movieActions.getAll({page:+query.get('page')}));
    }, [query.get('page')]);

    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};