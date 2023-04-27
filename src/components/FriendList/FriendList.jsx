import PropTypes, { arrayOf } from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" key={id}>
            <span className={isOnline ? 'green' : 'red'}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={name}></p>
          </li>
        );
      })}
    </ul>
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
