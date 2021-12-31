import React from 'react';
import './Banner.css';
import PropTypes from "prop-types";

export default class Banner extends React.Component {
  render() {
    const { src, alt, title } = this.props;
    return (
      <div className="banner">
        <img src={src} alt={alt} />
        <h1>{title}</h1>
      </div>
    )
  }
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
}