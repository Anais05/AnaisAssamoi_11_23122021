import React from 'react';
import adverts from "../../datas/adverts.json";
import './Apartment.css';
import Carrousel from "../../components/carrousel/Carrousel";
import Infos from "../../components/infos/Infos";
import Dropdown from "../../components/dropdown/Dropdown";
import { Navigate } from "react-router-dom";


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
    const apartment = this.state.apartment;
    const {
      title,
      pictures,
      description,
      host,
      rating,
      location,
      equipments,
      tags,
    } = apartment;

    if (Object.keys(apartment).length === 0) return null;
    if (this.state.apartment === 'not found') {
      return (
        <Navigate to="/AnaisAssamoi_11_23122021/apartmentNotFound" />
      )
    }
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