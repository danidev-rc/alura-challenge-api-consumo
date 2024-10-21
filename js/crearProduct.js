import { conectaAPI } from "./conexion.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProduct(event) {
  event.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  try {
    await conectaAPI.crearProduct(nombre, precio, imagen);
    window.location.href = "./index.html";

  } catch (error) {
    alert(error);
  }
}

formulario.addEventListener("submit", event => crearProduct(event));
