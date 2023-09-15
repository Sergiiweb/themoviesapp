import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

import css from "./MoviesListCard.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {PosterPreview} from "./PosterPreview";
import {StarsRating} from "../StarsRating";
import {Chip} from "@mui/material";

const MoviesListCard = () => {
    const {id} = useParams();
    const {movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(movieActions.getById({id: +id}))
    }, [id]);

    return (
        <>
        {movie &&
            <div className={css.MoviesListCard}>
                <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
                <div>{movie.title}</div>
                <div>{movie.overview}</div>
                <div>
                    <div>Rating:</div>
                    <div><StarsRating vote_average={movie.vote_average}/></div>
                </div>
                <div>Genres: {movie.genres.map(genre=><Chip key={genre.id} color="primary" label={genre.name} onClick={()=>navigate(`/genres/${genre.id}`)}/>)}</div>
                <div>Release date: {movie.release_date}</div>
                <div>Budget: {movie.budget}</div>
                <div>Duration: {movie.runtime} min</div>
                <div><Link to={movie.homepage}>Homepage</Link></div>
            </div>
        }
        </>
)
    ;
};

export {MoviesListCard};