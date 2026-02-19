import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "./Header";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();  
    navigate("/home");
  };

  return (
    <>
      <Header />
      <div className="container-login">
        <div className="card-login">
          <h2 className="title-login">Masuk ke Akun</h2>
          <p className="subtitle-login">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>

          <form onSubmit={handleSubmit}>
            <label className="label-login">
              E-Mail <span className="stars">*</span>
            </label>
            <input type="email" required />

            <label className="label-login">
              Kata Sandi <span className="stars">*</span>
            </label>

            <div className="password-wrapper-login">
              <input
                type={showPassword ? "text" : "password"}
                required
              />
              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  className="eye-off"
                  src="/mdi_eye-off.png"
                  alt="👁"
                />
              </span>
            </div>

            <div className="forgot-login">
              <a href="#">Lupa Password?</a>
            </div>

            <button type="submit" className="btn-primary-login">
              Masuk
            </button>

            <Link to="/register">
              <button type="button" className="btn-secondary-login">
                Daftar
              </button>
            </Link>

            <div className="divider-login">
              <span></span>
              atau
              <span></span>
            </div>

            <button type="button" className="btn-google-login">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
              />
              Masuk dengan Google
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
