import PropTypes from 'prop-types';
import {
  ProfileContainer,
  UserDesc,
  UserImg,
  UserName,
  UserStats,
  UserStatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <UserDesc>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </UserDesc>

      <UserStats>
        <UserStatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </UserStatsItem>
        <UserStatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </UserStatsItem>
      </UserStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
