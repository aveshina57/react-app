import React, { Component } from "react";
import Home from "../parts/home/home";
import Rrd from "../parts/views/router";
import Footer from "../parts/footer/footer";
import "../pages/style.scss";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage">
        <Home></Home>
        <Rrd></Rrd>
        <Footer></Footer>
      </div>
    );
  }
}
