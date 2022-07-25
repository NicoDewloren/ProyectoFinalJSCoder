function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos))
}

// Funciones del Carrito


function refreshBotonCarrito() {
    let productos = obtenerProductosCarrito();
    let contenidoHTML = `<button type="button" class="btn btn-success position-relative">
    <img src="img/cart.svg" width="28">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
    <span class="visually-hidden">unread messages</span>
    </span></button>`;
    let totalProductos = 0;

    if (productos.length > 0) {
        for (let producto of productos) {
            totalProductos += producto.cantidad;
        }
        contenidoHTML = `<button type="button" class="btn btn-success position-relative">
        <img src="img/cart.svg" width="28">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalProductos}
        <span class="visually-hidden">unread messages</span>
        </span>
      </button>`
    }

    let carrito = document.getElementById("carrito")
    carrito.innerHTML = contenidoHTML;
}


function buscarProducto(id) {
    let productos = obtenerProductosLS()
    return productos.find(x => x.id == id);
}



function vaciarCarrito() {

    localStorage.removeItem("carrito");
    refreshBotonCarrito()
    mostrarProductosDelCarrito();
    alertaLimpiarCarrito();
}



function agregarAlCarrito(id) {
    let producto = buscarProducto(id);
    let productos_carrito = obtenerProductosCarrito();
    let posProducto = productos_carrito.findIndex(x => x.id == id);

    if (posProducto > -1) {
        productos_carrito[posProducto].cantidad += 1;
    } else {
        let producto = buscarProducto(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }

    guardarProductosCarrito(productos_carrito);
    refreshBotonCarrito();
    productoAgregado();
}



function eliminarDelCarrito(id) {
    let productos_carrito = obtenerProductosCarrito();
    let posProducto = productos_carrito.findIndex(x => x.id == id);
    productos_carrito[posProducto].cantidad -= 1;

    if (productos_carrito[posProducto].cantidad == 0) {
        productos_carrito.splice(posProducto, 1);
    }


    guardarProductosCarrito(productos_carrito);
    refreshBotonCarrito();
    mostrarProductosDelCarrito();
    alertaEliminarCarrito()
}


function productoAgregado() {

    Swal.fire(
        'Producto agregado!',
        'Has agregado el producto al carrito!',
        'success'
    )
}

function alertaLimpiarCarrito() {

    Swal.fire(
        'Vaciaste el carrito!',
        'Vuelve a elegir tus productos!',
        'success'
    )
}

function alertaEliminarCarrito() {

    Swal.fire(
        'Eliminaste el producto!',
        'Has eliminado al producto del carrito',
        'success'
    )
}