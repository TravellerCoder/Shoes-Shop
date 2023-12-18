let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numeroCarrito = document.querySelector('#numero');

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = '';

    productosElegidos.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.modelo}">
        <div class="producto-detalle">
            <h3 class="producto-titulo">${producto.marca}</h3>
            <p class="producto-modelo">${producto.modelo}</p>
            <p class="producto-precio">${'$' + producto.precio}</p>
            <button class="producto-agregar" id='${producto.id}'>Comprar</button>
        </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar()
    
}



botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove('active'));

        e.currentTarget.classList.add('active');

        if (e.currentTarget.id != 'todos') {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = 'Todos los productos';
            cargarProductos(productos);
        }
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll('.producto-agregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })  
}
let productosEnCarrito;

let productosEnCarritoLocalStorage = localStorage.getItem('productos-en-carrito')


if(productosEnCarritoLocalStorage){
    productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
    actualizarNumeroCarrito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton =e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else{ 
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);  
    } 
    actualizarNumeroCarrito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    console.log(productosEnCarrito);
}
function actualizarNumeroCarrito() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    
    numeroCarrito.innerText = nuevoNumero;
}