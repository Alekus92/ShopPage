import React, { Component } from "react";

//components
import Header from "./components/headerComponent/header";
import Banner from "./components/bannerComponent/banner";
import Footer from "./components/footerComponent/footer";
import HomePage from "./components/pages/homePage";

//includes
import "./Assets/css/default.min .css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
