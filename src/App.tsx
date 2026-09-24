import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Hoy from "./pages/Hoy";
import CrearEvento from "./pages/CrearEvento";
import DetalleEvento from "./pages/DetalleEvento";
import Progreso from "./pages/Progreso";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/hoy">Hoy</Link> |{" "}
        <Link to="/crear">Crear evento</Link> |{" "}
        <Link to="/progreso">Progreso</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Hoy />} />
        <Route path="/hoy" element={<Hoy />} />
        <Route path="/crear" element={<CrearEvento />} />
        <Route path="/evento/:id" element={<DetalleEvento />} />
        <Route path="/progreso" element={<Progreso />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;