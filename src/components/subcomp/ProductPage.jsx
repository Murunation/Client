import React from "react";
import { useParams } from "react-router";
import { data } from "../../util/data";
import "../../styles/subcss/productpage.css";
import Arrow from "../icons/Arrow";
import Stock from "../icons/Stock";
import Gmail from "../icons/Gmail";
import Whatsapp from "../icons/Whatsapp";
import Facebook from "../icons/Facebook";
import Footer from "../Footer";

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
          <p>{singlecard[0].category}</p>
          <Arrow />
        </div>
        <div className="product-detail">
          <div className="per-image">
            <img
              src={singlecard[0].image}
              alt="product pic"
              className="main-product-image"
            />
            <div className="small-pic">
              <img src={singlecard[0].image} alt="small pic" />
              <img src={singlecard[0].image} alt="small pic" />
            </div>
          </div>
          <div className="product-info">
            <div className="product-info-title">
              <h2>{singlecard[0].name}</h2>
              <h3>${singlecard[0].price}</h3>
            </div>
            
            <div className="product-stock-status">
              <p className="able">Availability:</p>
              <p className="stock-text"><Stock/> In stock</p>
            </div>
            <p className="stock">Hurry up! only {singlecard[0].stock} product left in stock</p>
            <div className="quantity">
              <p>Quantity :</p>
              <div className="add-button">
                <button>-</button>
                {/* {x} */}
                <span>0</span>
                <button>+</button>
              </div>
            </div>
            <div className="add-cart-button">
              <button>Add to cart</button>
              <button>Buy it now</button>
            </div>
            <p className="sku"> <b>Sku:</b> 01133-9-9</p>
            <p className="product-category-info"> <b>Category:</b>  {singlecard[0].sale}% off, {singlecard[0].name}</p>
            <div className="product-social-icons">
              <b>Share: </b>
              <div className="social-icons">
                <Gmail />
              <Facebook />
              <Whatsapp />
              </div>
              
            </div>
          </div>
        </div>
        <img src="" alt="" />
      </div>
      <Footer/>
    </div>
  );
}
