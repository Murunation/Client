import React from "react";
import "../../styles/subcss/product.css";

export default function Product(prop) {
  const { detail } = prop;
  return (
    <div className="cards">
      <div className="card">
        <img src={detail.image} alt="pic" />
        <h3>{detail.name}</h3>
        <h4>${detail.price}</h4>
        <p>
          <span>Stock: </span>
          {detail.stock}
        </p>
      </div>
    </div>
  );
}
