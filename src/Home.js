import React from "react";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#D8B4FE", minHeight: "100vh", padding: "2rem" }}>
      <h1>Bem-vindo ao Receitas da Isa!</h1>
      <p>Aqui você encontra receitas deliciosas, fáceis e atualizadas semanalmente.</p>
      <div style={{ marginTop: "2rem" }}>
        <h2>Novidades da semana:</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ background: "#EDE9FE", padding: "1rem", borderRadius: "8px", width: "200px" }}>
            <img src="./img/img1.avif" alt="Asinha de frango" style={{ width: "100%", borderRadius: "8px" }} />
            <h3>Asinha de frango no moho e laranja</h3>
            <p>Novidade deliciosa para aperfeiçoar  seu dia!</p>
          </div>
          <div style={{ background: "#EDE9FE", padding: "1rem", borderRadius: "8px", width: "200px" }}>
            <img src="./img/img2.jpg" alt="Panqueca de Banana" style={{ width: "100%", borderRadius: "8px" }} />
            <h3>Panqueca de Banana</h3>
            <p>Leve e deliciosa para o café da manhã!</p>
          </div>
          <div style={{ background: "#EDE9FE", padding: "1rem", borderRadius: "8px", width: "200px" }}>
            <img src="./img/img3.jpg" alt="Bolo de cenoura" style={{ width: "100%", borderRadius: "8px" }} />
            <h3>Bolo de cenoura</h3>
            <p>massa macia e deliciosa para o café da tade em família!</p>
          </div>
          <div style={{ background: "#EDE9FE", padding: "1rem", borderRadius: "8px", width: "200px" }}>
            <img src="./img/img4.jpg" alt="Salgadinho frito" style={{ width: "100%", borderRadius: "8px" }} />
            <h3>Salgadinho frito</h3>
            <p>Ótima opção para fazer em festinhas!</p>
          </div>
        </div>
      </div>
    </div>
  );
}