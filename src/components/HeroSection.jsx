import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: "url('/HeroBackgroundTop.jpg')" }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h2>
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
        </h2>

        <p>
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpatisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
        </p>

        <button className="primary-btn">
          Temukan Video Course untuk Dipelajari!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
