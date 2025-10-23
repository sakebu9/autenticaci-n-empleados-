import React from "react";
import { Home, Users, Clock, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900">Panel Admin</h2>
        </div>
        <nav className="flex flex-col mt-6 space-y-2 px-4">
          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Home size={20} /> <span className="text-gray-700">Inicio</span>
          </button>
          <button
            onClick={() => navigate("/admin/users")}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Users size={20} /> <span className="text-gray-700">Usuarios</span>
          </button>
          <button
            onClick={() => navigate("/admin/asistencias")}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <Clock size={20} /> <span className="text-gray-700">Asistencias</span>
          </button>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 p-3 w-full text-left rounded-xl text-gray-600 hover:bg-gray-100 transition"
        >
          <LogOut size={20} /> Cerrar sesión
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
