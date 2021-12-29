import React from 'react';
import './Banner.css';
import PropTypes from "prop-types";

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <img src={this.props.src} alt={this.props.alt} />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
}