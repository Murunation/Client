import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import ProductPage from "./components/subcomp/ProductPage";
function App() {
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

export default App;
