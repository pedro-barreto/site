import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Footer } from "./components/";
import { Home, Animes, Artes, Sobre, NotFound } from "./pages/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
);
