import React from "react";
import { useParams } from "react-router";
import { data } from "../../util/data";
import "../../styles/subcss/productpage.css";
import Footer from "../Footer";
import Arrow from "../icons/Arrow";

export default function ProductPage() {
  const info = useParams();
  console.log(info);
  let singlecard = data.filter((product) => {
    return product.id.includes(info.id);
  });
  console.log(singlecard);
  return (
    <div className="per-product">
      <div className="product-main">
        <div className="paths">
          <p>Home</p>
          <Arrow />
          <p>All category</p>
          <Arrow />
        </div>
        <div className="product-detail">
          <div className="per-image">
            <img src="#" alt="product pic" />
            <div>
              <img src="" alt="small pic" />
              <img src="" alt="small pic" />
            </div>
          </div>
          <div>
            <h3>Play Game</h3>
            <h3>$11,70</h3>
            <div>
              <p>Availability:</p>
              <p>In stock</p>
            </div>
            <p>Hurry up! only 34 product left in stock</p>
            <div>
              <p>Quantity</p>
              <div>
                <button>-</button>
                {/* {x} */}
                <button>+</button>
              </div>
            </div>
            <div>
                <button>Add to cart</button>
                <button>Buy it now</button>
              </div>
              <p>Sku: 01133-9-9</p>
              <p>Category: 20% off, 49% off Alex remote</p>
              <div>Share: </div>
          </div>
        </div>
        <img src="" alt="" />
        <h2>{singlecard[0].name}</h2>
      </div>
      <div>
        <h3>Related product</h3>
      </div>

      <Footer />
    </div>
  );
}
