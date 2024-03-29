/// Funciones Render

function mostrarProductosDelCarrito() {
    let productos = obtenerProductosCarrito()
    let contenido = `<p class="alert alert-danger text-center" role="alert">No tienes ningun producto en el carrito!</p>`

    if (productos.length > 0) {
        contenido = `<p class="text-end"><a href="#" class="btn btn-danger text-white" onclick="vaciarCarrito()" title="Vaciar carrito">Limpiar carrito<img src="img/cart-remove.svg" width="24"></p>`
        let total = 0;

        for (let producto of productos) {
            let precio = producto.precio * producto.cantidad;
            contenido += `<table class="table mt-5">
        <tr class="row">
        <td class="col-md-3"><img src="${producto.imagen}" alt="${producto.nombre}" width="78"></td>
        <td class="col-md-3 align-middle">${producto.nombre} <b>(${producto.cantidad})</b></td>       
        <td class="col-md-3 align-middle"><b>$${precio}</b></td>
        <td class="col-md-3 align-middle"><a href="#" class="btn btn-danger" onclick="eliminarDelCarrito(${producto.id})"><img src="img/cart-remove.svg" width="24" title="Eliminar del carrito"></a></td>
        </tr>`
            total += precio
        }

        contenido += `</table>`

        contenido += `<table class="table mt-5">
                        <tr class="row">                      
                            <td class="col-md-6 text-center"><b>Total a Pagar : $ ${total}</b></td>
                            <td class="col-md-6 text-center"><a href="#" class="btn btn-success" id="finalizarCompra" onclick="finalizarCompra()"> Finalizar Compra</a></td>
                        </tr>
                      </table>`



    }
    document.getElementById("productos_carrito").innerHTML = contenido;
}


function finalizarCompra() {

    Swal.fire(
        'Has finalizado la compra!',
        'Muchas gracias por tu compra!',
        'success'
    )

    vaciarCarritoSinAlert()

}


mostrarProductosDelCarrito();
refreshBotonCarrito();
