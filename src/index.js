import "./index.css";
import React from "react";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Artes from "./pages/Artes";
import Animes from "./pages/Animes";
import ReactDOM from "react-dom/client";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/site" element={<Home />} />
        <Route path="/site/animes" element={<Animes />} />
        <Route path="/site/artes" element={<Artes />} />
        <Route path="/site/sobre" element={<Sobre />} />
        <Route path="/site/*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
