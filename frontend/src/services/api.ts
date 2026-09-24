const API_URL = "http://127.0.0.1:8000/api";

export async function comprobarAPI() {
  const response = await fetch(`${API_URL}/health/`);

  if (!response.ok) {
    throw new Error("No se pudo conectar con la API");
  }

  return response.json();
}

export async function obtenerEventos() {
  const response = await fetch(`${API_URL}/eventos/`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los eventos");
  }

  return response.json();
}