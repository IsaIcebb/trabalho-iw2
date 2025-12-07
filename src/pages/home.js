import React from 'react';

export default function Home() {
  return (
    <section className="page home">
      <h1>Bem-vind@ à minha cozinha!</h1>
      <p>Olá! Eu sou a Isa e amo fazer receitas gostosas. Aqui tem fotos, anúncios de novas receitas !</p>

      <div className="card">
        <h2>Anúncio: Nova receita chegando!</h2>
        <p>Fique ligado — vou postar uma receita de bolo temático de Harry Potter na próxima semana 🎂</p>
      </div>

      <div className="images-row">
        <img src="/images/bolo1.jpeg" alt="bolo caseiro" />
        <img src="/images/bolo2.jpeg" alt="bolo de chocolate" />
      </div>
    </section>
  );
}
