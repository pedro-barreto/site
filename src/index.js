import "./index.css";
import React from "react";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Artes from "./pages/Artes";
import Obras from "./pages/Obras/Obras";
import DetalhesObra from "./pages/Obras/DetalhesObra";
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
        <Route exact path="/" element={<Home />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/obras/:id" element={<DetalhesObra />} />
        <Route path="/artes" element={<Artes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
