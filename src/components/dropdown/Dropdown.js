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
    const isClose = this.state.isClose;
    const { title, content } = this.props;
    return (
      <div className="dropdown">
        <div className={`dropdown-title dropdown-title${isClose ? "-close" : "-open"}`} onClick={this.openDropdown}>
          <h2>{title}</h2>
          <FontAwesomeIcon className="dropdown-icon" icon={isClose ? faChevronDown : faChevronUp} />
        </div>
        {Array.isArray(content) ? (
          <div className={`dropdown-content${isClose ? "-close" : "-open"}`}>
            {content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        ) : (
          <p className={`dropdown-content${isClose ? "-close" : "-open" }`}>
            {content}
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
