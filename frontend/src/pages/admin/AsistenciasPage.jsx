import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function AsistenciasPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title="Gestión de Asistencias" />
        <main className="p-8 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Asistencias</h2>
            <p className="text-gray-600">
              Visualiza registros por usuario o cédula, filtra por fecha, genera reportes y exporta resultados.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AsistenciasPage;
