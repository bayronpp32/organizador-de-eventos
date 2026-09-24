import { useEffect, useState } from "react";
import { obtenerEventos } from "../services/api";

type Evento = {
  id: number;
  nombre: string;
  tipo: string;
  cliente_contacto: string;
  fecha_hora: string;
  lugar: string;
  plazo_limite: string;
};

function Hoy() {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    obtenerEventos()
      .then(setEventos)
      .catch(() => setEventos([]));
  }, []);

  return (
    <div>
      <h1>Hoy</h1>
      <p>Eventos registrados</p>

      {eventos.map((evento) => (
        <article key={evento.id}>
          <h2>{evento.nombre}</h2>
          <p>Tipo: {evento.tipo}</p>
          <p>Lugar: {evento.lugar}</p>
          <p>Fecha: {evento.fecha_hora}</p>
        </article>
      ))}
    </div>
  );
}

export default Hoy;