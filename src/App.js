import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import ProductPage from "./components/subcomp/ProductPage";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [product, setProduct] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((products) => setProduct(products.data));
  }, []);
  console.log(product);
  //Fetch type
  // fetch("http://localhost:4000/products")
  //   .then((res) => res.json())
  //   .then((products) => console.log(products));
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
}
// Route deer test={product} ywuulsan gazarluu orood prop oor awaad door nn const {test} = prop teegeeed div neegeed test.image etc barij awna.

export default App;
