import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {castActions} from "../../redux";
import {CastActor} from "./CastActor";
import css from "./CastList.module.css";

const CastList = () => {
    const {cast} = useAppSelector(state => state.cast);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(castActions.getAll({id: +id}));
    }, []);

    return (
        <div className={css.wrapCastList}>
            <h3 className="title">Actors:</h3>
            <div className={css.CastList}>
                {cast &&
                    cast.map(actor => <CastActor actor={actor} key={actor.id}/>)
                }
            </div>
        </div>
    );
};

export {CastList};