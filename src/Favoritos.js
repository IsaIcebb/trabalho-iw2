import React from "react";

export default function Favoritos() {
  const favoritos = [
    { nome: "Brigadeiro", img: "https://images.unsplash.com/photo-1599785209707-2dc4f2cfcc0e?auto=format&fit=crop&w=300&q=80" },
    { nome: "Pizza Caseira", img: "https://images.unsplash.com/photo-1601924582975-3d03f51fcd7e?auto=format&fit=crop&w=300&q=80" },
    { nome: "Panquecas Americanas", img: "https://images.unsplash.com/photo-1617196033770-5c84e6508b5c?auto=format&fit=crop&w=300&q=80" },
  ];

  return (
    <div style={{ backgroundColor: "#F3E8FF", minHeight: "100vh", padding: "2rem" }}>
      <h1>Receitas Favoritas</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {favoritos.map((f, index) => (
          <div key={index} style={{ background: "#EDE9FE", padding: "1rem", borderRadius: "8px", width: "200px", textAlign: "center" }}>
            <img src={f.img} alt={f.nome} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{f.nome}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}