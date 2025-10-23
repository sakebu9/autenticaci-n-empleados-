//Gestion de usuarios: crud asignar roles de usuarios, cambiar contrasenas consultar estado general 
//Gestion de Asistencias: visualizar registro por nombre o cedula, filtrar por fechas, generar informes promedio de llegadas, promedio de salidas 
//usuarios mas tardio
// exportar resultados 
//mostrar registros en tablas dinamicas

//informes filtros por rango de fechas y usuarios
//estadisticas de promedio, asistencia y retardos 
//visualizacion en tabla con busqueda y ordenamiento
// src/pages/AdminDashboard.jsx
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title="Inicio del Panel" />
        <main className="p-8 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumen General</h2>
            <p className="text-gray-600">
              Bienvenido al panel administrativo. Aquí podrás gestionar usuarios, revisar asistencias
              y generar reportes de productividad.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;

