import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
