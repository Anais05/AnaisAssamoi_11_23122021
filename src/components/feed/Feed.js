import React, { Component } from 'react';
import './Feed.css';
import PropTypes from "prop-types";
import Thumbnail from '../thumbnail/Thumbnail';

export default class Feed extends Component {
  
  constructor(props) {
    super(props);
    this.state = { adverts: [] };
  }

  componentDidMount() {
    this.setState({ adverts: this.props.adverts });
  }

  render() {
    return (
      <section className="feed">
        {this.state.adverts.map((advert) => (
            <Thumbnail
              key={advert.id}
              id={advert.id}
              title={advert.title}
              cover={advert.cover}
            />
          ))}
      </section>
    )
  }
}

Feed.propTypes = {
  adverts: PropTypes.array.isRequired,
}
