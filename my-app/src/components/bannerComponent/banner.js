import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <section className="main-banner" id="main-banner">
        <div className="container">
          <div className="main-banner-content">
            <h1 className="main-banner-title">Sklep Geekzone</h1>
            <p className="main-banner-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              debitis dignissimos doloremque est pariatur repellat.
            </p>
            <a href="1" className="btn main-banner-btn">
              Szukaj gry
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
