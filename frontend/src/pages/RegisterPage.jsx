import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerRequest(user);
      setMessage("Usuario registrado con éxito ✅");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      setMessage("Error al registrar ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-8 w-full max-w-sm border border-gray-200 transform transition-all duration-500 ease-out hover:scale-[1.01]">
        {/* Logo Apple-style */}
        <div className="text-center mb-6">
          
          <h2 className="text-3xl font-semibold text-gray-900">Crear cuenta</h2>
          <p className="text-gray-500 text-sm mt-1">
            Únete a nuestra plataforma de registros
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={user.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-100/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-100/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-100/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition"
          />

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Registrarse
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* 🔙 Botón para volver al login */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            ¿Ya tienes cuenta?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-black font-medium hover:underline"
            >
              Volver al inicio de sesión
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;
