import React from "react";
import "../../styles/subcss/product.css";
import { useNavigate } from "react-router-dom";

export default function Product(prop) {
  const { detail } = prop;
  const navigate = useNavigate();

  return (
    <div className="cards" onClick={() => navigate(`/product/${detail.id}`)}>
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
