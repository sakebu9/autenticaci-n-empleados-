import React, { useState } from "react";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

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
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={user.username}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={user.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterPage;
