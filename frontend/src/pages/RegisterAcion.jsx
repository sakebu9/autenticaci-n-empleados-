import React, { useState } from "react";
import axios from "axios";

function RegisterAcion() {
  const [mensaje, setMensaje] = useState("");
  const [form, setForm] = useState({
    cedula: "",
    accion: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí iría tu POST para registrar la acción
      setMensaje("✅ Acción registrada correctamente");
    } catch (error) {
      setMensaje("❌ Error al registrar la acción");
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/logout", {}, {
        withCredentials: true,
      });
      if (res.status === 200) {
        localStorage.removeItem("token");
        setMensaje("👋 Sesión cerrada");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        setMensaje("❌ Error al cerrar sesión");
      }
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al cerrar sesión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-sm border border-gray-200">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Registrar Acción
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Cédula</label>
            <input
              type="text"
              name="cedula"
              placeholder="Ingrese su cédula"
              value={form.cedula}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Acción</label>
            <select
              name="accion"
              value={form.accion}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition bg-white"
            >
              <option value="">Seleccionar acción</option>
              <option value="Ingreso">Ingreso</option>
              <option value="Almuerzo">Almuerzo</option>
              <option value="Salida">Salida</option>
            </select>
          </div>

          <p className="text-center text-xs text-gray-500">
            {new Date().toLocaleString()}
          </p>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Registrar
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full bg-gray-200 text-gray-800 py-2 rounded-xl font-medium hover:bg-gray-300 transition"
          >
            Cerrar sesión
          </button>
        </form>

        {mensaje && (
          <p className="text-center text-sm text-gray-700 mt-4">{mensaje}</p>
        )}
      </div>
    </div>
  );
}

export default RegisterAcion;
