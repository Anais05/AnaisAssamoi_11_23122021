import React from 'react';
import './Infos.css';
import Rating from '../rating/Rating';
import PropTypes from "prop-types";

export default class Infos extends React.Component {
  render() {
    const hostFirstname = this.props.host.name.split(' ')[0];
    const hostLastname = this.props.host.name.split(' ')[1];
    return (
      <section className="info">
        <div className="apartment-info">
          <h1 className="title">{this.props.title}</h1>
          <p className="apartment-location">{this.props.location}</p>
          <div className="tags">
            {this.props.tags.map((tag) => (
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
            <img className="host-img" src={this.props.host.picture} alt="" />
          </div>
          <Rating rating={this.props.rating} />
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