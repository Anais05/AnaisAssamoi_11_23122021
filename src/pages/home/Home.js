import React from 'react';
import HomeBanner from "../../assets/home-banner.png";
import Banner from "../../components/banner/Banner";
import Feed from "../../components/feed/Feed";
import adverts from "../../datas/adverts.json";

export default class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <Banner
          src={HomeBanner}
          alt="paysage terre et mer"
          title="Chez vous, partout et ailleurs"
        />
        <Feed adverts={adverts} />
      </main>
    )
  }
}
