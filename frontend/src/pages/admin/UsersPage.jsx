// src/pages/UsersPage.jsx
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function UsersPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title="Gestión de Usuarios" />
        <main className="p-8 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Usuarios</h2>
            <p className="text-gray-600">
              Aquí podrás crear, editar y eliminar usuarios, asignar roles y restablecer contraseñas.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UsersPage;
