import {FC} from "react";

import {IGenre} from "../../interfaces";
import css from "./GenreBadge.module.css";

interface IProps {
    genre: IGenre;
}

const GenreBadge:FC<IProps> = ({genre}) => {
    return (
        <div className={css.Badge}>
            {genre.name}
        </div>
    );
};

export {GenreBadge};