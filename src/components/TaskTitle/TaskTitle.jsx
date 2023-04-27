import PropTypes from 'prop-types';

export const TastTitle = ({ text }) => {
  return <h2>{text}</h2>;
};

TastTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
