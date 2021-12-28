import React, { Component } from 'react';
import './Dropdown.css';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default class Dropdown extends Component {
  
  constructor(props) {
    super(props)
    this.state = { isClose: true };
    this.openDropdown = this.openDropdown.bind(this);
    // this.getdropdownContent = this.getdropdownContent.bind(this);
  }

  openDropdown() {
    this.setState({ isClose: !this.state.isClose })
  }

  // getdropdownContent() {
  //   if (Array.isArray(this.props.content)) {
  //     return (
  //       <div className={`dropdown-content${ this.state.isClose ? "-close" : "-open"}`}>
  //           {this.props.content.map((item, index) => (
  //               <p key={index}>{item}</p>
  //           ))}
  //       </div>
  //     )
  //   }

  //   return (
  //     <p className={`dropdown-content${ this.state.isClose ? "-close" : "-open" }`}>
  //       {this.props.content}
  //     </p>
  //   )
  // }

  render() {
    return (
      <div className="dropdown">
        <div className={`dropdown-title dropdown-title${ this.state.isClose ? "-close" : "-open"}`} onClick={this.openDropdown}>
          <h2>{this.props.title}</h2>
          <FontAwesomeIcon className="dropdown-icon" icon={this.state.isClose ? faChevronDown : faChevronUp} />
        </div>
        {typeof this.props.content === "string" ? (
          <p className={`dropdown-content${ this.state.isClose ? "-close" : "-open" }`}>
            {this.props.content}
          </p>
        ) : (
          <div className={`dropdown-content${ this.state.isClose ? "-close" : "-open"}`}>
            {this.props.content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
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
