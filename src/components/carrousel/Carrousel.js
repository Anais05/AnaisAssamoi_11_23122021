import React from 'react';
import './Carrousel.css';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default class Carrousel extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { currentImg: 0 };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    const index =
    this.state.currentImg === 0
      ? this.props.pictures.length - 1
      : this.state.currentImg - 1

    this.setState({ currentImg: index });
  }

  next() {
    const index =
    this.state.currentImg === this.props.pictures.length - 1
      ? 0
      : this.state.currentImg + 1

    this.setState({ currentImg: index })

  }

  render() {
    return (
      <div className="carrousel">
        <img
          className="carrousel-img"
          src={this.props.pictures[this.state.currentImg]}
          alt=""
        />
        {this.props.pictures.length > 1 ? (
          <div className="carrousel-nav">
            <FontAwesomeIcon onClick={this.previous} className="prev" icon={faChevronLeft} />
            <FontAwesomeIcon onClick={this.next} className="prev" icon={faChevronRight} />
          </div>
        ) : null}
        <p className="carrousel-count">
          {this.state.currentImg + 1}/{this.props.pictures.length}
        </p>
      </div>
    )
  }

}

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};