import {FC} from "react";

import {IMovie} from "../../interfaces";
import css from "./Movie.module.css";

interface IProps {
    movie: IMovie;
}

const Movie:FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;

    return (
        <div className={css.Movie}>
            <div>id: {id}</div>
            <div>Title: {title}</div>
            <div><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/></div>
        </div>
    );
};

export {Movie};