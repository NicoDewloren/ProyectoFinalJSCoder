const productos = [
    {
        nombre: "Pc Gamer Basica",
        descripcion: "La pc perfecta para comenzar a introducirte en el mundo de los juegos!",
        id: 1,
        precio: 100000,
        imagen: "img/pc1.jpg",
    },
    {
        nombre: "Pc Gamer Intermedia",
        descripcion: "Pc de gama media, con la cual podras empezar a jugar juegos de una buena calidad grafica!",
        id: 2,
        precio: 180000,
        imagen: "img/pc2.jpg",
    },
    {
        nombre: "Pc Gamer Pro",
        descripcion: "La PC de tus SUEÑOS! Juga y disfruta al maximo los mejores juegos!",
        id: 3,
        precio: 250000,
        imagen: "img/pc3.jpg",
    },
    {
        nombre: "Notebook Gamer Basica",
        descripcion: "La notebook perfecta para comenzar a introducirte en el mundo de los juegos!",
        id: 4,
        precio: 140000,
        imagen: "img/note1.jpg",
    },
    {
        nombre: "Notebook Gamer Intermedia",
        descripcion: "La notebook con la que podras jugar a la mayoria de los juegos!",
        id: 5,
        precio: 220000,
        imagen: "img/note2.jpg",
    },
    {
        nombre: "Notebook Gamer PRO",
        descripcion: "La notebook de tus SUEÑOS, Juga y disfruta al maximo los mejores juegos!",
        id: 6,
        precio: 300000,
        imagen: "img/note3.jpg",
    }
]

//// Funciones ////////////////

/// Funciones LocalStorage

function obtenerProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos))
}
function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos))
}
