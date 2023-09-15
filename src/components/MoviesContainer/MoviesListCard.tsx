import {useParams} from "react-router-dom";
import {useEffect} from "react";

import css from "./MoviesListCard.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {PosterPreview} from "./PosterPreview";

const MoviesListCard = () => {
    const {id} = useParams();
    const {movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({id: +id}))
    }, [id]);

    return (
        <>
        {movie &&
            <div className={css.MoviesListCard}>
                <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
                <div>{movie.id}, {movie.title}</div>
            </div>
        }
        </>
)
    ;
};

export {MoviesListCard};