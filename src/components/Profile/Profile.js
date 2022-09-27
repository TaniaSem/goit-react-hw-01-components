import {
  ProfileCard,
  UserName,
  UserAvatar,
  InfoText,
  StatList,
  InfoBox,
  StatItem,
  StatLabel,
  StatQuantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileCard>
      <InfoBox>
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <InfoText>@{tag}</InfoText>
        <InfoText>{location}</InfoText>
      </InfoBox>

      <StatList>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </StatItem>
      </StatList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
