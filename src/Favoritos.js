import React from "react";

export default function Favoritos() {
  const favoritos = [
    { nome: "Brigadeiro", img: "./img/img5.jpg" },
   
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