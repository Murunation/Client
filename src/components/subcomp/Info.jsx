import React from "react";
import "../../styles/subcss/info.css";

export default function Info() {
  return (
    <div className="container">
      <div className="leftInfo">
        <img
          src="https://m.media-amazon.com/images/I/81d74GHCPEL._AC_SX679_.jpg"
          alt="Speaker"
        />
        <h3>JBL bar 2.1 deep bass</h3>
        <h4>$11,70</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque. Lorem ipsum dolor sit amet consectetur. Nec sit enim
          tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at
          lorem sed scelerisque.
        </p>
        <button>Add to cart</button>
      </div>
      <div className="rightInfo">
        <div className="topInfo">
          <img
            src="https://m.media-amazon.com/images/I/81d74GHCPEL._AC_SX679_.jpg"
            alt="headphones"
          />
          <div>
            <div className="date">22 oct 2021</div>
            <h3>Who avoids a pain that produces?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
            <a href="#">By spacing tech</a>
          </div>
        </div>
        <div className="topInfo">
          <img
            src="https://m.media-amazon.com/images/I/81d74GHCPEL._AC_SX679_.jpg"
            alt="headphones"
          />
          <div>
            <div className="date">22 oct 2021</div>
            <h3>Who avoids a pain that produces?</h3>
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
