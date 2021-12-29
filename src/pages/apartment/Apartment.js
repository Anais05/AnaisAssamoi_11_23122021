import React, { Component } from 'react';
import adverts from "../../datas/adverts.json";
import Error from "../../pages/error/Error";
import Carrousel from "../../components/carrousel/Carrousel"

export default class Apartment extends Component {

  constructor(props) {
    super(props);
    this.state = { apartment: {} };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    const data = adverts.find((advert) => advert.id === id);
    this.setState({ apartment: data ? data : 'not found' });
  }

  render() {
    console.log(this.state.apartment)
    if (Object.keys(this.state.apartment).length === 0) return null;
    if (this.state.apartment === 'not found')
      return (
        <div>
          <Error />
        </div>
      )
      const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        equipments,
        tags,
      } = this.state.apartment;
    return (
      <main className="apartment">
        <Carrousel pictures={pictures} />
      </main>
    )
  }
}