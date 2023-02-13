import React, { useState } from "react";
import "../../styles/subcss/navbar.css";
import { data } from "../../util/data";
import Product from "../subcomp/Product";

export default function Navbar() {
  const [Data, setData] = useState(data);
  const [activeButton, setActiveButton] = useState("");
  function filterHandler(e) {
    if (e.target.innerText === "All") {
      setData(data);
    } else {
      let product = data.filter((name) =>
        name.category.includes(e.target.innerText)
      );
      setData(product);
      console.log(product);
    }
    setActiveButton(e.target.innerText);
    console.log(activeButton);
  }

  return (
    <div className="category">
      <div className="categoryContainer">
        <h1>Popular products</h1>
        <div className="cateButton">
          <button
            onClick={filterHandler}
            className={activeButton === "All" ? "active-btn " : "inactive-btn "}
          >
            All
          </button>
          <button
            onClick={filterHandler}
            className={
              activeButton === "appliances" ? "active-btn" : "inactive-btn"
            }
          >
            appliances
          </button>
          <button
            onClick={filterHandler}
            className={
              activeButton === "computers & tablets"
                ? "active-btn "
                : "inactive-btn "
            }
          >
            computers & tablets
          </button>
          <button
            onClick={filterHandler}
            className={
              activeButton === "Apple" ? "active-btn " : "inactive-btn "
            }
          >
            Apple
          </button>
          <button
            onClick={filterHandler}
            className={
              activeButton === "tablets" ? "active-btn " : "inactive-btn "
            }
          >
            tablets
          </button>
        </div>
      </div>
      <div className="products">
        {Data.map((pro) => (
          <Product detail={pro} />
        ))}
      </div>
    </div>
  );
}
