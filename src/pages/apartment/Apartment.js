import React, { Component } from 'react';
import adverts from "../../datas/adverts.json";
import Error from "../../pages/error/Error";

export default class Apartment extends Component {

  constructor(props) {
    super(props);
    this.state = { apartment: {} };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    const data = adverts.find(
      (advert) => advert.id === id
    );

    this.setState({ apartment: data ? data : 'not found' });
  }

  render() {
    console.log(this.state.apartment)
    if (this.state.apartment === 'not found')
      return (
        <div>
          <Error />
        </div>
      )
    return (
      <main className="apartment">
      </main>
    )
  }
}