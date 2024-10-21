import { conectaAPI } from "./conexion.js";

const lista = document.querySelector("[data-lista]");

export default function construyeCard(nombre,precio,imagen) {
  const product = document.createElement("li")
  product.className = "products__item";

  product.innerHTML =
  `
  <div class="products_list">
    <div class="products_img">
      <img src="${imagen}" alt="${nombre}">
    </div>
    <h1 class="products_nombre">${nombre}</h1>
    <p class="products_price">$ ${precio}.00</p>
  </div>
  `
  console.log(product)
  return product
}

async function listaProducts() {
  try {
    const listaAPI = await conectaAPI.listaProducts();
    listaAPI.forEach(element => lista
      .appendChild(construyeCard(element.nombre,element.precio,element.imagen)))
  } catch (error) {
    lista.innerHTML = `<h2>Error al cargar los productos</h2>`
  }
  
}

listaProducts()