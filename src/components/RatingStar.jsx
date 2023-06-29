import { AiFillStar } from 'react-icons/ai';
import './ratingStar.css';

const RatingStar = ({ rating }) => {
  return (
    <div className="rating__container">
      <AiFillStar className="star__icon" />
      <p>{rating}</p>
    </div>
  );
};

export default RatingStar;