import React from "react";

function Navbar({ title }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      <div className="flex items-center gap-3 text-gray-500">
        <span className="text-sm">Admin</span>
        <img
          src="https://www.svgrepo.com/show/382106/macos-user.svg"
          alt="avatar"
          className="w-8 h-8 rounded-full border border-gray-300"
        />
      </div>
    </header>
  );
}

export default Navbar;
