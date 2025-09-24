import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

export default function App(){
  return (
    <div className="app">
      <header className="topbar">
        <Link to="/" className="brand">Portal de Notícias</Link>
        <nav><Link to="/">Home</Link></nav>
      </header>

      <main className="container">
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/article/:id" element={<Article/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        <div>Bruno Ferreira - RA 563489 | Gabriel Robertoni Padilha - RA 566293 | Leonardo Aragaki - RA 562944</div>
      </footer>
    </div>
  );
}
