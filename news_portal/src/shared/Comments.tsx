import React, { useEffect, useState } from "react";
import { Comment } from "../types";

export default function Comments({ newsId, initialComments }:{newsId:string, initialComments:Comment[] }){
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // simulate lazy fetch after mount
  useEffect(()=>{
    const t = setTimeout(()=> setComments(initialComments || []), 500);
    return ()=>clearTimeout(t);
  },[initialComments]);

  function addComment(e:React.FormEvent){
    e.preventDefault();
    if(!name.trim()||!text.trim())return;
    const c: Comment = { id: String(Math.random()).slice(2), name, text };
    setComments(prev=>[...prev,c]);
    setName(""); setText("");
  }

  return (
    <section style={{marginTop:16}}>
      <h3>Comentários ({comments.length})</h3>
      <ul>
        {comments.map(c=>(
          <li key={c.id}><strong>{c.name}</strong>: {c.text}</li>
        ))}
      </ul>

      <form onSubmit={addComment} style={{marginTop:12,display:"grid",gap:8}}>
        <input placeholder="Seu nome" value={name} onChange={e=>setName(e.target.value)} />
        <textarea placeholder="Comentário" value={text} onChange={e=>setText(e.target.value)} rows={3} />
        <button className="btn" type="submit">Enviar comentário</button>
      </form>
    </section>
  );
}
