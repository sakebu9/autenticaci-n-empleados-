import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      console.log(res.data);

      // ✅ Redirigir a la página de registro de acción
      navigate("/register-acion");
    } catch (err) {
      setError(err.response?.data?.error || "Error al iniciar sesión ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="bg-white/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-3xl p-10 w-full max-w-md border border-gray-200 text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Iniciar sesión</h1>
          <p className="text-gray-500 text-sm mt-1">Bienvenido de nuevo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Entrar
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}

        <p className="mt-8 text-gray-600 text-sm">
          ¿No tienes cuenta?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-black font-medium hover:underline"
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
