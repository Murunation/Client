import React from "react";
import "../styles/main.css";
import Footer from "./Footer";
import { Banner } from "./subcomp/Banner";
import Info from "./subcomp/Info";
import Navbar from "./subcomp/Navbar";
import { special } from "../util/data";
import LogoBanner from "./subcomp/LogoBanner";

export default function Main() {
  return (
    <div className="main">
      <Banner />
      <Navbar />
      <img src="Banner.png" alt="banner" className="banner-pic"/>
      <Info special = {special} />
      <LogoBanner/>
      <Footer/>
    </div>
  );
}
