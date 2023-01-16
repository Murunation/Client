import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Main />
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
