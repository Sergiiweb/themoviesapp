import css from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={css.UserInfo}>
            <div className={css.Image}></div>
            <div className={css.Name}>Welcome, John!</div>
        </div>
    );
};

export {UserInfo};