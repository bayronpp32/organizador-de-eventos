import { useState } from "react";

const API_URL = "http://127.0.0.1:8000/api";

function CrearEvento() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("boda");
  const [cliente, setCliente] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  const [plazo, setPlazo] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function guardarEvento(event: React.FormEvent) {
    event.preventDefault();

    const response = await fetch(`${API_URL}/eventos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        tipo,
        cliente_contacto: cliente,
        fecha_hora: `${fecha}:00Z`,
        lugar,
        plazo_limite: plazo,
      }),
    });

    if (response.ok) {
      setMensaje("Evento creado correctamente.");
      setNombre("");
      setCliente("");
      setFecha("");
      setLugar("");
      setPlazo("");
    } else {
      setMensaje("No se pudo crear el evento.");
    }
  }

  return (
    <main>
      <h1>Crear evento</h1>

      <form onSubmit={guardarEvento}>
        <input
          type="text"
          placeholder="Nombre del evento"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="boda">Boda</option>
          <option value="social">Social</option>
          <option value="corporativo">Corporativo</option>
          <option value="cumpleanos">Cumpleaños</option>
          <option value="otro">Otro</option>
        </select>

        <input
          type="text"
          placeholder="Cliente / contacto"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />

        <input
          type="datetime-local"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Lugar"
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
          required
        />

        <input
          type="date"
          value={plazo}
          onChange={(e) => setPlazo(e.target.value)}
          required
        />

        <button type="submit">Guardar evento</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </main>
  );
}

export default CrearEvento;