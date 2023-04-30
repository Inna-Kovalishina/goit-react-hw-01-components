import PropTypes from 'prop-types';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
    const userStats = [{ label: 'Followers', quantity: stats.followers },
                       { label: 'Views', quantity: stats.views },
                       { label: 'Likes', quantity: stats.likes }]

    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt={userName}
                    className="avatar"
                />
                <p className="name">{userName}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                {userStats.map(({label, quantity}) => 
                    (<li key={label}>
                        <span className="label">{label}</span>
                        <span className="quantity">{quantity}</span>
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