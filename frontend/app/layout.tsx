import "./globals.css";

export const metadata = {
  title: "Plataforma de Cursos",
  description: "MVP Cursos Online con Django + Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Plataforma de Cursos</h1>
          </header>

          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-200 p-4 space-y-4">
              <nav className="flex flex-col space-y-2">
                <a href="/login" className="text-blue-600">Login</a>
                <a href="/register" className="text-green-600">Registro</a>
                <a href="/dashboard" className="text-gray-700">Dashboard</a>
                <a href="/courses" className="text-gray-700">Cursos</a>
              </nav>
            </aside>

            {/* Contenido */}
            <main className="flex-1 p-6">{children}</main>
          </div>

          {/* Footer */}
          <footer className="bg-gray-300 p-4 text-center">
            <p>© 2025 Plataforma de Cursos</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
