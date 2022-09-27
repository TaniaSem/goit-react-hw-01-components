import PropTypes from 'prop-types';
import {
  StatBox,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatBox>
      {title && <Title>Upload stats</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id} type={label}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </ListItem>
        ))}
      </List>
    </StatBox>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
