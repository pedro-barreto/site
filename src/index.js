import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Jogos from "./pages/jogos/Jogos";
import Acessorios from "./pages/acessorios/Acessorios";
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
          <Route exact path="Site/" element={<Home />} />
          <Route path="Site/jogos" element={<Jogos />} />
          <Route path="Site/acessorios" element={<Acessorios />} />
          <Route path="Site/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
