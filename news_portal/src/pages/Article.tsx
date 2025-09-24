import React, { Suspense, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import dataService from "../services_news";
import { NewsItem } from "../types";

const Comments = React.lazy(() => import("../shared/Comments"));

export default function Article(){
  const { id } = useParams();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(!id) return;
    dataService.getById(id).then(res=>{
      setItem(res);
      setLoading(false);
    });
  },[id]);

  if(loading) return <div>Carregando notícia...</div>;
  if(!item) return <div>Notícia não encontrada. <Link to="/">Voltar</Link></div>;

  return (
    <div className="article">
      <Link to="/" className="backlink">← Voltar para home</Link>
      <h2>{item.title}</h2>
      <div className="meta">{item.date} • {item.categories.join(", ")}</div>
      <img src={item.image} alt={item.title} />
      <p>{item.content}</p>

      <Suspense fallback={<div>Carregando comentários...</div>}>
        <Comments newsId={item.id} initialComments={item.comments} />
      </Suspense>
    </div>
  );
}
