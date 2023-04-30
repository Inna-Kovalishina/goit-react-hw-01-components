import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}