import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {UserInfo} from "../UserInfo";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}>
                <div className={css.logo}></div>
            </NavLink>
            <div className={css.Header}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <div>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};