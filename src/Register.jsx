import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "Pria",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Nama wajib diisi";
    if (!form.email) newErrors.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Format email tidak valid";

    if (!form.phone) newErrors.phone = "No HP wajib diisi";

    if (!form.password) newErrors.password = "Password wajib diisi";
    else if (form.password.length < 6)
      newErrors.password = "Password minimal 6 karakter";

    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Password tidak cocok";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1500);

  };

  return (
    <>
      <Header />
      <div className="container-reg">
        <div className="card-reg">
          <h2 className="title-reg">Pendaftaran Akun</h2>
          <p className="subtitle-reg">Yuk, daftarkan akunmu sekarang juga!</p>

          <form onSubmit={handleSubmit}>
            <label className="label-reg">
              Nama Lengkap <span className="stars">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label className="label-reg">
              E-Mail <span className="stars">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label className="label-reg">
              Jenis Kelamin <span className="stars">*</span>
            </label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="Wanita">Wanita</option>
              <option value="Pria">Pria</option>
            </select>

            <label className="label-reg">
              No. Hp <span className="stars">*</span>
            </label>
            <div className="phone-wrapper">
              <div className="country-code">
                <img
                  src="https://flagcdn.com/w40/id.png"
                  alt="Flag Indonesia"
                  className="flag"
                />{" "}
                <span>+62</span>
              </div>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && <p className="error">{errors.phone}</p>}

            <label className="label-reg">
              Kata Sandi <span className="stars">*</span>
            </label>
            <div className="password-wrapper-reg">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
                role="button"
                tabIndex={0}
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                onKeyPress={(e) => { if (e.key === 'Enter') setShowPassword(!showPassword); }}
              >
                <img className="eye-off" src="/mdi_eye-off.png" alt="Toggle" />
              </span>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}

            <label className="label-reg">
              Konfirmasi Kata Sandi <span className="stars">*</span>
            </label>
            <div className="password-wrapper-reg">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="eye"
                onClick={() => setShowConfirm(!showConfirm)}
                role="button"
                tabIndex={0}
                aria-label={showConfirm ? "Sembunyikan konfirmasi password" : "Tampilkan konfirmasi password"}
                onKeyPress={(e) => { if (e.key === 'Enter') setShowConfirm(!showConfirm); }}
              >
                <img className="eye-off" src="/mdi_eye-off.png" alt="Toggle" />
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            <div className="forgot-reg">
              <a href="#">Lupa Password?</a>
            </div>

            <button type="submit" className="btn-primary-reg" disabled={loading}>
              {loading ? "Memproses..." : "Daftar"}
            </button>
          </form>

          <Link to="/">
            <button type="button" className="btn-secondary-reg">
              Masuk
            </button>
          </Link>

          <div className="divider-reg">
            <span></span>
            atau
            <span></span>
          </div>

          <button className="btn-google-reg">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Daftar dengan Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
