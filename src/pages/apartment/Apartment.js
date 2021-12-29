import React from 'react';
import adverts from "../../datas/adverts.json";
import './Apartment.css';
import Error from "../../pages/error/Error";
import Carrousel from "../../components/carrousel/Carrousel";
import Infos from "../../components/infos/Infos";
import Dropdown from "../../components/dropdown/Dropdown";

export default class Apartment extends React.Component {

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
        <Infos 
          title={title}
          host={host}
          rating={rating}
          location={location}
          tags={tags}
        />
        <section className="apartment-dropdown">
          <Dropdown title='Description' content={description} />
          <Dropdown title='Équipements' content={equipments} />
        </section>
      </main>
    )
  }
}