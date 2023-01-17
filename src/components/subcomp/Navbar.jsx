import React, { useState } from "react";
import "../../styles/subcss/navbar.css";
import { data } from "../../util/data";
import { useNavigate } from "react";
import Product from "../subcomp/Product";

export default function Navbar() {
  const [Dat, setData] = useState(data);
  function filterHandler(e) {
    if (e.target.innerText === "All") {
      setData(data);
    } else {
      let product = data.filter((name) =>
        name.category.includes(e.target.innerText)
      );
      setData(product);
    }
  }
  console.log("running");
  return (
    <div className="category">
      <div className="categoryContainer">
        <h1>Popular products</h1>
        <div className="cateButton">
          <button onClick={filterHandler}>All</button>
          <button onClick={filterHandler}>appliances</button>
          <button onClick={filterHandler}>computers & tablets</button>
          <button onClick={filterHandler}>laptop</button>
          <button onClick={filterHandler}>Apple</button>
          <button onClick={filterHandler}>tablets</button>
        </div>
      </div>
      <div className="products">
        {Dat.map((pro) => (
          <Product detail={pro} />
        ))}
      </div>
    </div>
  );
}