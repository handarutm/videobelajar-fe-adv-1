import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import regisGoogle from "../../assets/images/RegisGoogle.svg";
import Input from "../atom/Input";

import { useAuth } from "../../context/AuthContext";

export default function RegisterForm() {
  const { register, users } = useAuth();
  const navigate = useNavigate();

  //State Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword || !phone) {
      alert("Semua field harus diisi!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    // Check if email already registered (case-insensitive)
    const emailNormalized = email.trim().toLowerCase();
    const exists = users?.some(
      (u) => u.email?.toLowerCase() === emailNormalized,
    );
    if (exists) {
      setEmailError(
        "Email ini sudah terdaftar. Silakan gunakan email lain atau login.",
      );
      return;
    }

    setEmailError("");

    register(name, email, password, phone);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
    alert("Akun berhasil didaftarkan!");
    navigate("/login");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-4xl font-extrabold text-center">Pendaftaran Akun</h2>
      <p className="text-sm text-gray-500 mt-1 text-center">
        Yuk, daftarkan akunmu sekarang juga!
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          id="fullname"
          name="fullname"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Nama Lengkap"
          required
        />

        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="E-mail"
          required
        />
        {emailError && (
          <p className="text-sm text-red-600 mt-1">{emailError}</p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            No. HP <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 border border-gray-200">
              <img
                src="https://flagcdn.com/w20/id.png"
                alt="Indonesia"
                className="h-4 w-4"
              />
              <span className="text-sm">+62</span>
            </div>
            <input
              id="phone"
              type="tel"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="8123456789"
              required
              className="flex-1 rounded-md border-gray-300 shadow-sm px-3 py-2 "
            />
          </div>
        </div>

        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Kata Sandi"
          required
          showToggle
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="Konfirmasi Kata Sandi"
          required
          showToggle
        />

        <div className="flex justify-end">
          <a href="#" className="text-sm ">
            Lupa Password?
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center bg-[#00d26a] text-white px-4 py-2 rounded-md hover:bg-[#00b85d]"
          >
            Daftar
          </button>
          <a
            href="/login"
            className="w-full inline-flex justify-center items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Masuk
          </a>
        </div>

        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-500">atau</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex justify-center">
          <a href="#" className="inline-flex items-center">
            <img src={regisGoogle} alt="Google SSO" className="h-10" />
          </a>
        </div>
      </form>
    </div>
  );
}
