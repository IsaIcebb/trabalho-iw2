import React from 'react';

export default function Receitas() {
  return (
    <section className="page receitas">
      <h1>Minhas Receitas</h1>
      <p>Aqui estão algumas receitas que eu preparei e tirei fotos!</p>

      <div className="recipe">
        <h3>Bolo de Chocolate Fácil</h3>
        <p>Ingredientes: 200g chocolate, 3 ovos, 1 xícara de açúcar...</p>
      </div>

      <div className="ad">
        <strong>Anúncio:</strong> Em breve: Receita de Biscoitos Roxos 🍪
      </div>

      <div className="images-row">
        <img src="/images/receita1.jpeg" alt="receita 1" />
        <img src="/images/receita2.jpeg" alt="receita 2" />
      </div>
    </section>
  );
}