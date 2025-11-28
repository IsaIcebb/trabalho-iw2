import React from "react";

export default function Receitas() {
  const receitas = [
    { nome: "Bolo de Cenoura", img: "./img/img3.jpg" },
    { nome: "Panqueca de Banana", img: "./img/img2.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#E9D5FF", minHeight: "100vh", padding: "2rem" }}>
      <h1>Receitas</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {receitas.map((r, index) => (
          <div key={index} style={{ background: "#F3E8FF", padding: "1rem", borderRadius: "8px", width: "200px", textAlign: "center" }}>
            <img src={r.img} alt={r.nome} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{r.nome}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}