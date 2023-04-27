import PropTypes, { arrayOf } from 'prop-types';
import {
  Section,
  StatTitle,
  StatList,
  StatListItem
} from './Statistics.styled';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(item => {
          return (
            <StatListItem
              key={item.id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </StatListItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
