// Funciones 

function validarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;

    if (nombre == "") {
        document.getElementById("error_nombre").className = "letra_validacion text-danger"
        document.getElementById("error_nombre").innerText = "Por favor, ingresa tu nombre.";
        return false;

    } else {
        document.getElementById("error_nombre").innerText = "";
    }

    if (apellido == "") {
        document.getElementById("error_apellido").className = "letra_validacion text-danger"
        document.getElementById("error_apellido").innerText = "Por favor, ingresa tu apellido.";
        return false;

    } else {
        document.getElementById("error_apellido").innerText = "";
    }

    if (telefono == "") {
        document.getElementById("error_telefono").className = "letra_validacion text-danger"
        document.getElementById("error_telefono").innerText = "Por favor, ingresa tu telefono.";
        return false;

    } else {
        document.getElementById("error_telefono").innerText = "";
    }

    if (email == "") {
        document.getElementById("error_email").className = "letra_validacion text-danger"
        document.getElementById("error_email").innerText = "Por favor, ingresa tu email.";
        return false;

    } else {
        document.getElementById("error_email").innerText = "";
    }


    dibujarContacto();
    limpiarFormulario();
}



function dibujarContacto() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;


    let respuesta = document.getElementById("respuesta")

    let contenido = `<div class="mt-3">
    <h3 class="text-center letra">Gracias por registrarte ${nombre} !</h3>
    <p class="text-center mt-5"><img src=img/registro.png width="250"></p>
                     <p class="letra">Ya estas en nuestra base de datos, vas a recibir en tu casilla de correo <b>${email}</b> las mejores ofertas y promociones sobre nuestros productos!</p>
                     </div>`

    respuesta.innerHTML = contenido
}


function limpiarFormulario() {

    let formulario = document.getElementById("formulario")

    formulario.reset();
}


// Evento

document.getElementById("botonEnviar").addEventListener("click", validarFormulario);


