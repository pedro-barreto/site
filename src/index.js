import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Jogos from "./pages/jogos/Jogos";
import Acessorios from "./pages/acessorios/Acessorios";
import Sobre from "./pages/sobre/Sobre";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jogos" element={<Jogos />}></Route>
          <Route path="/acessorios" element={<Acessorios />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
reportWebVitals();
