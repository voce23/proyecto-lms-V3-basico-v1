"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "student", // 👈 siempre mandamos role
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await API.post("/accounts/users/", form);
      console.log("✅ Registro exitoso:", response.data);
      setMessage("Usuario creado correctamente ✅, ahora ve a Login");
    } catch (error) {
      console.error("❌ Error completo:", error);

      if (error.response) {
        console.error("👉 Error status:", error.response.status);
        console.error("👉 Error data:", error.response.data);

        // mostramos mensaje más claro si viene del backend
        const backendMsg =
          error.response.data?.username?.[0] ||
          error.response.data?.email?.[0] ||
          error.response.data?.password?.[0] ||
          error.response.data?.role?.[0] ||
          "Error al crear usuario ❌";

        setMessage(backendMsg);
      } else if (error.request) {
        setMessage("No hay conexión con el servidor 🚫");
      } else {
        setMessage("Error inesperado ⚠️");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Campo oculto que siempre manda role=student */}
        <input type="hidden" name="role" value={form.role} />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? "Creando..." : "Crear cuenta"}
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
