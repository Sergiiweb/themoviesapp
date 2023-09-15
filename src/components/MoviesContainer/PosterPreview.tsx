import {FC, useEffect} from "react";

import {urls} from "../../constants";

interface IProps {
    poster_path: string;
    title:string;
}

const PosterPreview:FC<IProps> = ({poster_path,title}) => {

    return (
        <div>
            <img src={`${urls.movies.poster}/${poster_path}`} alt={title}/>
        </div>
    );
};

export {PosterPreview};