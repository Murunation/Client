import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import ProductPage from "./components/subcomp/ProductPage";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
export const MainContext = createContext();
function App() {
  const [product, setProduct] = useState("");
  const [closeModal, setCloseModal] = useState();
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")));
  const [data, setdata] = useState();
  const [userData, setUserData] = useState();

  const [filter, setFilter] = useState("all");

  if (!localStorage.getItem("login")) {
    localStorage.setItem("login", false);
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((products) => setProduct(products.data));
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUserData(res.data));
  }, []);
  console.log(product);
  //Fetch type
  // fetch("http://localhost:4000/products")
  //   .then((res) => res.json())
  //   .then((products) => console.log(products));

  // function loginHandler(userName, password) {
  //   console.log("Login handler running");
  //   console.log("UserName: ", userName);
  //   console.log("Password: ", password);
  //   UsersData.forEach((user) => {
  //     if (userName === user.name && password === user.password) {
  //       setIsLoggedIn(true);
  //     } else {
  //       console.error("Wrong Password or UserName");
  //       alert("Wrond password");
  //     }
  //   });
  // }

  return (
    <div className="App">
      <MainContext.Provider value={{data, userData, setCloseModal, setLogin, login, setFilter, filter }}>
        <Header />
        {closeModal ? <Login /> : null}
        <div className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />

            <Route path="product/:id" element={<ProductPage />} />
            <Route path="product/login" element={<Login />} />
          </Routes>
        </div>
      </MainContext.Provider>
    </div>
  );
}
// Route deer test={product} ywuulsan gazarluu orood prop oor awaad door nn const {test} = prop teegeeed div neegeed test.image etc barij awna.

export default App;
