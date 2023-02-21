import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Animes from "./pages/animes/Animes";
import Artes from "./pages/artes/Artes";
import Sobre from "./pages/sobre/Sobre";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/404/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/site/" element={<Home />} />
          <Route path="/site/animes" element={<Animes />} />
          <Route path="/site/artes" element={<Artes />} />
          <Route path="/site/sobre" element={<Sobre />} />
          <Route path="/site/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
