import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Qr from "./components/Qr";
import Menu from "./assests/menu.json";
import "./App.css";

function App() {
  const items = Object.keys(Menu);
  const [item, setItem] = useState(items[0]);
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      onClick={() => {
        showNav ? setShowNav(false) : "";
      }}
    >
      <div className="header">Chill, party & relax!</div>
      <Router>
        <Navbar setItem={setItem} showNav={showNav} setShowNav={setShowNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalog"
            element={<Catalog item={item} setItem={setItem} />}
          />
          <Route path="/qr" element={<Qr />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
