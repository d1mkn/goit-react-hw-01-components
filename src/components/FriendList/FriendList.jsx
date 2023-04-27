import PropTypes, { arrayOf } from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, isOnline, name, id }) => (
        <FriendListItem
          avatar={avatar}
          isOnline={isOnline}
          name={name}
          key={id}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
