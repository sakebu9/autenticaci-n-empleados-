import React, { useState, useEffect } from "react";
import axios from "axios";

function RegisterAcion() {
  const [cedula, setCedula] = useState("");
  const [accion, setAccion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [fechaHora, setFechaHora] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [registrado, setRegistrado] = useState(false);

  // ⏰ Actualizar hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => setFechaHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 🧾 Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cedula.trim()) {
      setMensaje("⚠️ Ingresa una cédula válida");
      return;
    }

    if (!accion) {
      setMensaje("⚠️ Selecciona una acción");
      return;
    }

    setMensaje("⏳ Registrando...");
    setLoading(true);

    try {
      // Simular solicitud al servidor (puedes cambiar a tu API real)
      // const res = await axios.post("http://localhost:3001/api/registro", { cedula, accion });
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simular verificación
      const cedulasRegistradas = ["12345", "67890"]; // ejemplo simulado
      if (!cedulasRegistradas.includes(cedula)) {
        setMensaje("🆕 Cédula no encontrada, agregada exitosamente ✅");
      } else {
        setMensaje("✅ Registro exitoso");
      }

      setRegistrado(true);
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Registrar Acción
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Cédula */}
          <div>
            <label className="block text-gray-700 font-medium">Cédula</label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ingrese su cédula"
              disabled={loading}
            />
          </div>

          {/* Acción */}
          <div>
            <label className="block text-gray-700 font-medium">Acción</label>
            <select
              value={accion}
              onChange={(e) => setAccion(e.target.value)}
              required
              className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            >
              <option value="">Seleccionar acción</option>
              <option value="ingreso">Ingreso</option>
              <option value="ingreso_almuerzo">Ingreso almuerzo</option>
              <option value="regreso_almuerzo">Regreso almuerzo</option>
              <option value="salida">Salida</option>
            </select>
          </div>

          {/* Fecha y hora actual */}
          <div className="text-center text-gray-600 text-sm font-medium">
            {fechaHora.toLocaleString()}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Registrando..." : "Registrar"}
          </button>
        </form>

        {/* Mensaje de estado */}
        {mensaje && (
          <div
            className={`mt-4 text-center font-medium ${
              mensaje.includes("✅") || mensaje.includes("🆕")
                ? "text-green-600"
                : mensaje.includes("❌")
                ? "text-red-600"
                : "text-gray-700"
            }`}
          >
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterAcion;
