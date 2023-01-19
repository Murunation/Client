import React from "react";
import "../styles/main.css";
import Footer from "./Footer";
import { Banner } from "./subcomp/Banner";
import Info from "./subcomp/Info";
import Navbar from "./subcomp/Navbar";

export default function Main() {
  return (
    <div className="main">
      <Banner />
      <Navbar />
      <img src="Banner.png" alt="banner" />
      <Info />
      <Footer />
    </div>
  );
}
