
/// Funciones Render

function mostrarProductos() {
  let productos = obtenerProductosLS()
  let contenidoCard = "";

  for (let producto of productos) {
    contenidoCard += `<div class="col-md-4 mt-5 mb-5 shadow"
        <div class="card ">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title text-center p-2 card-titulo">${producto.nombre}</h5>
          <p class="card-text text-center card-descripcion">${producto.descripcion}</p>
          <p class="card-text text-center card-precio">$${producto.precio}</p>
          <p class="card-text text-center"><a href="#" class="btn btn-success text-center" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</a></p>
        </div>
      </div>
      </div>`
  }

  document.getElementById("productos").innerHTML = contenidoCard;
}






// Ejecucion

guardarProductosLS(productos);
refreshBotonCarrito();
mostrarProductos();