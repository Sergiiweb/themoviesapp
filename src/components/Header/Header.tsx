import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {UserInfo} from "../UserInfo";
import {SwitchTheme} from "../SwitchTheme";
import {useAppSelector} from "../../hooks";

const Header = () => {
    const {currentTheme} = useAppSelector(state => state.theme);

    return (
        <div className={css.Header}>
            <NavLink to={''}>
                {currentTheme === "light" ?
                    <div className={css.logo}></div>
                    :
                    <div className={css.logoLight}></div>
                }
            </NavLink>
            <div className={css.HeaderLinks}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <div className={css.switchInfo}>
                <div>
                    <SwitchTheme/>
                </div>
                <div>
                    <UserInfo/>
                </div>
            </div>
        </div>
    );
};

export {Header};