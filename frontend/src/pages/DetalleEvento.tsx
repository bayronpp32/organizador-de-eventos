import { useParams } from "react-router-dom";

function DetalleEvento() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del evento</h1>
      <p>Evento seleccionado: {id}</p>
    </div>
  );
}

export default DetalleEvento;