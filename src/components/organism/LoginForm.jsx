import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import googleBtn from "../../assets/images/GoogleButton.svg";
import Input from "../atom/Input";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/");
    } else {
      alert("Email atau Password salah!");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-center">Masuk ke Akun</h2>
      <p className="text-sm text-gray-500 mt-1 text-center">
        Yuk, lanjutin belajarmu di videobelajar.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          id="email"
          name="email"
          type="email"
          label="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Kata Sandi"
          required
          showToggle
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-end">
          <a href="#" className="text-sm">
            Lupa Password?
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center bg-[#00d26a] text-white px-4 py-2 rounded-md hover:bg-[#00b85d]"
          >
            Masuk
          </button>
          <a
            href="/register"
            className="w-full inline-flex justify-center items-center border text-[#00d26a] border-[#00d26a] px-4 py-2 rounded-md"
          >
            Daftar
          </a>
        </div>

        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-500">atau</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex justify-center">
          <a href="#" className="inline-flex items-center">
            <img src={googleBtn} alt="Google SSO" className="h-10" />
          </a>
        </div>
      </form>
    </div>
  );
}
