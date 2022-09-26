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
