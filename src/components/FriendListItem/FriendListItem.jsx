import PropTypes from 'prop-types';
import {
  FriendItem,
  OnlineStatus,
  FriendImg,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <FriendItem>
      <OnlineStatus isOnline={isOnline} />
      <FriendImg src={avatar} alt="User avatar" width="75" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
