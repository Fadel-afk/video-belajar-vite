import React from "react";

const HeroNewsletter = () => {
  return (
    <section
      className="newsletter-hero"
      style={{
        backgroundImage: "url('/HeroBackgroundBot.jpg')",
      }}
    >
      <div className="overlay"></div>

      <div className="newsletter-content">
        <span className="newsletter-label">NEWSLETTER</span>

        <h2>Mau Belajar Lebih Banyak?</h2>

        <p>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik harisenin.com
        </p>

        <div className="newsletter-form">
          <input type="email" placeholder="Masukkan Emailmu" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default HeroNewsletter;
