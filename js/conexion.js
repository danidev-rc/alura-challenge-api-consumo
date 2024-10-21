async function listaProducts() {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const conexionConvertida = await conexion.json()

  return conexionConvertida
}

async function crearProduct(nombre, precio, imagen) {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen
    })
  })
  if (!conexion.ok) {
    throw new Error("Error al crear el producto")
  }
  const conexionConvertida = await conexion.json()

  return conexionConvertida
}

export const conectaAPI = {
  listaProducts,
  crearProduct,
}