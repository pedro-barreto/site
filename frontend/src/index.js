import "./index.css";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Artes from "./pages/Artes";
import Obras from "./pages/Obras";
import ReactDOM from "react-dom/client";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cadastrar from "./pages/Cadastrar";
import DetalhesObra from "./pages/DetalhesObra";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RenderAOS />
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/obras/:id" element={<DetalhesObra />} />
        <Route path="/artes" element={<Artes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastrar-obra" element={<Cadastrar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

function RenderAOS() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
}
