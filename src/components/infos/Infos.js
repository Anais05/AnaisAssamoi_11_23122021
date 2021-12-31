import React from 'react';
import './Infos.css';
import Rating from '../rating/Rating';
import PropTypes from "prop-types";

export default class Infos extends React.Component {
  render() {
    const { title, location, host, tags, rating } = this.props;
    const hostFirstname = host.name.split(' ')[0];
    const hostLastname = host.name.split(' ')[1];
    return (
      <section className="info">
        <div className="apartment-info">
          <h1 className="title">{title}</h1>
          <p className="apartment-location">{location}</p>
          <div className="tags">
            {tags.map((tag) => (
              <p key={tag} className="tag">{tag}</p>
            ))}
          </div>
        </div>
        <div className="apartment-aside">
          <div className="host-info">
            <div className="host-name">
              <p>{hostFirstname} </p>
              <p>{hostLastname}</p>
            </div>
            <img className="host-img" src={host.picture} alt="" />
          </div>
          <Rating rating={rating} />
        </div>
      </section>
    )
  }

}

Infos.propTypes = {
  title: PropTypes.string.isRequired,
  host: PropTypes.exact({
    name: PropTypes.string,
    picture: PropTypes.string
  }).isRequired,
  rating: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};