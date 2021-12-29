import React from 'react';
import './Dropdown.css';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default class Dropdown extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { isClose: true };
    this.openDropdown = this.openDropdown.bind(this);
  }

  openDropdown() {
    this.setState({ isClose: !this.state.isClose });
  }

  render() {
    return (
      <div className="dropdown">
        <div className={`dropdown-title dropdown-title${ this.state.isClose ? "-close" : "-open"}`} onClick={this.openDropdown}>
          <h2>{this.props.title}</h2>
          <FontAwesomeIcon className="dropdown-icon" icon={this.state.isClose ? faChevronDown : faChevronUp} />
        </div>
        {Array.isArray(this.props.content) ? (
          <div className={`dropdown-content${ this.state.isClose ? "-close" : "-open"}`}>
            {this.props.content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        ) : (
          <p className={`dropdown-content${ this.state.isClose ? "-close" : "-open" }`}>
            {this.props.content}
          </p>
        )}
      </div>  
    )
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
}
