import PropTypes from 'prop-types';
import { LoadMoreButton } from "./Button.styled";
import Loader from 'components/Loader';

const Button = ({onClick, isLoading}) => {
  return isLoading ? <Loader/> : <LoadMoreButton type="button" onClick={() => onClick()}>Load More</LoadMoreButton>
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Button;