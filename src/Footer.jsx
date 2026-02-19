import React, { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-top">

          <div className="footer-left">
            <img src="/VideoBelajarLogo.png" alt="Logo Video Belajar" />

            <p className="footer-desc">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>

            <p className="footer-address">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>

            <p className="footer-phone">
              +62-877-7123-1234
            </p>
          </div>

          <div className="footer-menu">

            {/* Kategori */}
            <div className="footer-menu-column">
              <div
                className="footer-menu-item"
                onClick={() => toggleMenu("Kategori")}
              >
                <span>Kategori</span>
                <FiChevronRight
                  className={openMenu === "Kategori" ? "rotate" : ""}
                />
              </div>

              <div className={`submenu ${openMenu === "Kategori" ? "open" : ""}`}>
                <p>Digital & Teknologi</p>
                <p>Pemasaran</p>
                <p>Manajemen Bisnis</p>
                <p>Pengembangan Diri</p>
                <p>Desain</p>
              </div>
            </div>

            {/* Perusahaan */}
            <div className="footer-menu-column">
              <div
                className="footer-menu-item"
                onClick={() => toggleMenu("Perusahaan")}
              >
                <span>Perusahaan</span>
                <FiChevronRight
                  className={openMenu === "Perusahaan" ? "rotate" : ""}
                />
              </div>

              <div className={`submenu ${openMenu === "Perusahaan" ? "open" : ""}`}>
                <p>Tentang Kami</p>
                <p>FAQ</p>
                <p>Kebijakan Privasi</p>
                <p>Ketentuan Layanan</p>
                <p>Bantuan</p>
              </div>
            </div>

            {/* Komunitas */}
            <div className="footer-menu-column">
              <div
                className="footer-menu-item"
                onClick={() => toggleMenu("Komunitas")}
              >
                <span>Komunitas</span>
                <FiChevronRight
                  className={openMenu === "Komunitas" ? "rotate" : ""}
                />
              </div>

              <div className={`submenu ${openMenu === "Komunitas" ? "open" : ""}`}>
                <p>Tips Sukses</p>
                <p>Blog</p>
              </div>
            </div>

          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p className="footer-copy">
            ©2023 Gerobak Sayur All Rights Reserved.
          </p>

          <div className="footer-social">
            <div className="social-icon"><FaLinkedinIn /></div>
            <div className="social-icon"><FaFacebookF /></div>
            <div className="social-icon"><FaInstagram /></div>
            <div className="social-icon"><FaTwitter /></div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
