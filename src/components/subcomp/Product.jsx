import React from "react";
import "../../styles/subcss/product.css";
import { useNavigate } from "react-router-dom";
import Basket from "../icons/Basket";

export default function Product(prop) {
  const { detail } = prop;
  const navigate = useNavigate();

  return (
    <div className="cards" onClick={() => navigate(`/product/${detail.id}`)}>
      <div className="card">
        <img src={detail.image} alt="pic" />
        {/* <div className="sales">Sale {detail.sale}% off</div> */}
        <h3>{detail.name}</h3>
        <div className="card-details">
          <div>
            <h4>${detail.price}</h4>
            <p>
              <span>Stock: </span>
              {detail.stock}
            </p>
          </div>
          <div>
            <button>
              <Basket />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
