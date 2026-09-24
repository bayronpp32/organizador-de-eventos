import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Hoy from "./pages/Hoy";
import CrearEvento from "./pages/CrearEvento";
import DetalleEvento from "./pages/DetalleEvento";
import Progreso from "./pages/Progreso";

import "./App.css";

function Navegacion() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">📅</div>
        <div>
          <strong>Organizador</strong>
          <span>de Eventos</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <Link
          to="/hoy"
          className={location.pathname === "/hoy" || location.pathname === "/" ? "active" : ""}
        >
          <span>⌂</span>
          Hoy
        </Link>

        <Link
          to="/crear"
          className={location.pathname === "/crear" ? "active" : ""}
        >
          <span>＋</span>
          Crear evento
        </Link>

        <Link
          to="/progreso"
          className={location.pathname === "/progreso" ? "active" : ""}
        >
          <span>▥</span>
          Progreso
        </Link>

        <Link
          to="/login"
          className={location.pathname === "/login" ? "active" : ""}
        >
          <span>♙</span>
          Login
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="footer-icon">✦</div>
        <strong>Organiza momentos</strong>
        <p>Todo lo que necesitas para gestionar tus eventos.</p>
      </div>
    </aside>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navegacion />

        <main className="content">
          <Routes>
            <Route path="/" element={<Hoy />} />
            <Route path="/hoy" element={<Hoy />} />
            <Route path="/crear" element={<CrearEvento />} />
            <Route path="/evento/:id" element={<DetalleEvento />} />
            <Route path="/progreso" element={<Progreso />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;