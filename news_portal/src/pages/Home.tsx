import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataService from "../services_news";
import { NewsItem } from "../types";

function truncate(s: string, n = 50){
  return s.length > n ? s.slice(0,n).trimEnd() + "..." : s;
}

export default function Home(){
  const [news, setNews] = useState<NewsItem[]>([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<NewsItem[]>([]);
  const [error, setError] = useState(false);

  useEffect(()=>{
    dataService.getAll()
      .then(setNews)
      .catch(()=> setError(true));
  },[]);

  useEffect(()=>{
    const q = query.trim().toLowerCase();
    const result = news.filter(n=>{
      if(!q) return true;
      const inTitle = n.title.toLowerCase().includes(q);
      const inContent = n.content.toLowerCase().includes(q);
      const inCat = n.categories.join(" ").toLowerCase().includes(q);
      return inTitle || inContent || inCat;
    });
    setFiltered(result);
  },[news, query]);

  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <h2>Últimas notícias</h2>
        <div className="searchBar">
          <input aria-label="Pesquisar" placeholder="Pesquisar por título, conteúdo ou categoria" value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
      </div>

      {error && <div className="empty">Nenhum artigo encontrado (erro ao carregar os dados)</div>}

      {!error && filtered.length === 0 && <div className="empty">Nenhum artigo encontrado</div>}

      <div className="grid" aria-live="polite">
        {filtered.map(n=>(
          <article className="card" key={n.id}>
            <img src={n.image} alt={n.title} />
            <div style={{flex:1}}>
              <h3>{n.title}</h3>
              <div className="meta">{n.date} • {n.categories.join(", ")}</div>
              <p>{truncate(n.content,50)}</p>
            </div>
            <div style={{marginTop:8}}>
              <Link to={`/article/${n.id}`} className="btn">Ler mais</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
