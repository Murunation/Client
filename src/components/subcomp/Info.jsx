import React from "react";
import "../../styles/subcss/info.css";
import BasketWhite from "../icons/BasketWhite";

export default function Info(prop) {
  const { special } = prop;
  return (
    <div className="container">
      <div className="leftInfo">
        <div className="special-product">Special product</div>
        <img
          src="https://m.media-amazon.com/images/I/81d74GHCPEL._AC_SX679_.jpg"
          alt="Speaker"
        />
        
        <h3>{special[0].name}</h3>
        <h4>${special[0].price}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
        <button>Add to cart 
          <BasketWhite/>
        </button>
      </div>
      <div className="rightInfo">
        <div className="topInfo">
          <img
            src="https://m.media-amazon.com/images/I/81d74GHCPEL._AC_SX679_.jpg"
            alt="headphones"
          />
          <div className="topRight">
            <div className="date">22 oct 2021</div>
            <h3>{special[1].name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <a href="#">By spacing tech</a>
          </div>
        </div>
        <div className="bottomInfo">
          <img
            src="https://m.media-amazon.com/images/I/81d74GHCPEL._AC_SX679_.jpg"
            alt="headphones"
          />
          <div className="topRight">
            <div className="date">22 oct 2021</div>
            <h3>{special[1].name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <a href="#">By spacing tech</a>
          </div>
        </div>
      </div>
    </div>
  );
}
