import React, { Component } from 'react';
import AboutBanner from "../../assets/about-banner.png";
import Banner from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
import aboutData from "../../datas/about.json";
import './About.css';

export default class About extends Component {
  render() {
    return (
      <main className="about">
        <Banner
          src={AboutBanner}
          alt="paysage de montagne"
        />
        <section className="about-dropdown">
          {aboutData.map((data) => (
            <Dropdown key={data.title} title={data.title} content={data.content} />
          ))}
        </section>
      </main>
    )
  }
}