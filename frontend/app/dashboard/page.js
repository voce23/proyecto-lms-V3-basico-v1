"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function DashboardPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/courses/courses/");
        setCourses(res.data);
      } catch (err) {
        console.error("Error al cargar cursos", err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {courses.length === 0 ? (
        <p>No hay cursos disponibles.</p>
      ) : (
        <ul className="space-y-2">
          {courses.map((course) => (
            <li
              key={course.id}
              className="p-3 border rounded shadow-sm hover:bg-gray-100"
            >
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
