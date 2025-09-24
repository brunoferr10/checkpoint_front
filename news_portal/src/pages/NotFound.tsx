import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <div style={{textAlign:"center",padding:40}}>
      <h2>Página 404 - Não encontrada</h2>
      <p>Ops — a página que você tentou acessar não existe.</p>
      <p><Link to="/">Voltar para a página inicial</Link></p>
    </div>
  );
}
