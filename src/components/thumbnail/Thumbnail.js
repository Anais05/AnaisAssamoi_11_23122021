import React from 'react';
import { Link } from "react-router-dom";
import './Thumbnail.css';
import PropTypes from "prop-types";

export default class Thumbnail extends React.Component {
  render() {
    const { id, title, cover } = this.props;
    return (
      <article className="thumb">
        <Link to={`/apartment/${id}`} className="thumb-link">
          <img src={cover} alt={title} />
          <h2 className="thumb-title">{title}</h2>
        </Link>
      </article>
    )
  }
}

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};