import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendsListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
