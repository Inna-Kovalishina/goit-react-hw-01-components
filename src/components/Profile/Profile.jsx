import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
    const userStats = [{ label: 'Followers', quantity: stats.followers },
                       { label: 'Views', quantity: stats.views },
                       { label: 'Likes', quantity: stats.likes }]

    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={userName}
                    className={css.avatar}
                />
                <p className={css.name}>{userName}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                {userStats.map(({label, quantity}) => 
                    (<li key={label} className={css.item}>
                        <span className={css.label}>{label}</span>
                        <span className={css.quantity}>{quantity}</span>
                    </li>)
                )}
            </ul>
        </div>
    );
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}