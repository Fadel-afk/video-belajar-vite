import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <img
          className="navbar-logo"
          src="/VideoBelajarLogo.png"
          alt="Logo Video Belajar"
        />
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>


      <div className={`dropdown-menu ${open ? "show" : ""}`}>
        <ul>
          <li>Kategori</li>
          <li>Profil Saya</li>
          <li>Kelas Saya</li>
          <li>Pesanan Saya</li>
          <li className="logout">Keluar <img src="/KeluarVector.png" alt="" /></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
