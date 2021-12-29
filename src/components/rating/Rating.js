import React from 'react';
import './Rating.css';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class Rating extends React.Component {
  render() {
    const ratingScale = [1, 2, 3, 4, 5];
    return (
      <div className="rating">
        {ratingScale.map((scale) => (
          <FontAwesomeIcon key={scale} className="star-icon" icon={faStar} 
            style={({color: scale <= this.props.rating ? '#ff6060' : '#e3e3e3'})} 
          />
        ))}
      </div>
    )
  }

}

Rating.propTypes = {
  rating: PropTypes.oneOf(['1', '2', '3', '4', '5']).isRequired,
};