let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito)

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-accion");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
const botonVaciar = document.querySelector('#carrito-accion-vaciar');
const botonComprar = document.querySelector('#carrito-accion-comprar');
const contenedorTotal = document.querySelector('#total')

function cargarProductosCarrito() {

    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add('disabled');
        contenedorCarritoProductos.classList.remove('disabled');
        contenedorCarritoAcciones.classList.remove('disabled');
        contenedorCarritoComprado.classList.add('disabled');

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('carrito-producto')
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Marca</small>
                <h3>${producto.marca}</h3>
            </div>
            <div class="carrito-producto-titulo">
                <small>Modelo</small>
                <h3>${producto.modelo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
            contenedorCarritoProductos.append(div);
        });

        actualizarBotonesEliminar();
        actualizarTotal();

    } else {

        contenedorCarritoVacio.classList.remove('disabled');
        contenedorCarritoProductos.classList.add('disabled');
        contenedorCarritoAcciones.classList.add('disabled');
        contenedorCarritoComprado.classList.add('disabled');

    }

}

cargarProductosCarrito()

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "Producto Eliminado",
        duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #4b33a8, #2b06af)",
            borderRadius: "1.5rem",
            fontSize: ".75rem",
            textTransform: "uppercase"
        },
        offset: {
            x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "1.5rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },

        onClick: function () { } // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
};

botonVaciar.addEventListener('click', vaciarCarrito)
function vaciarCarrito() {
    Swal.fire({
        title: "Vaciar Carrito?",
        showDenyButton: true,
        
        confirmButtonText: "Vaciar",
        denyButtonText: `Cancelar`
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        } else if (result.isDenied) {
        
        }
    });

};

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`
};

botonComprar.addEventListener('click', comprarCarrito)
function comprarCarrito() {
    Swal.fire({
        title: "Comprar productos en carrito?",
        showDenyButton: true,
        
        confirmButtonText: "Comprar",
        denyButtonText: `Cancelar`
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();

            contenedorCarritoVacio.classList.add('disabled');
            contenedorCarritoProductos.classList.add('disabled');
            contenedorCarritoAcciones.classList.add('disabled');
            contenedorCarritoComprado.classList.remove('disabled');
        } else if (result.isDenied) {
        
        }
    });
    

   
};

/*<template id="my-template">
    <swal-title>
        Vaciar carrito?
    </swal-title>
    <swal-icon type="warning" color="red"></swal-icon>
    <swal-button type="confirm">
        Vaciar
    </swal-button>
    <swal-button type="cancel">
        Cancel
    </swal-button>
    <swal-param name="allowEscapeKey" value="false" />
    <swal-param
        name="customClass"
        value='{ "popup": "my-popup" }' />
    <swal-function-param
        name="didOpen"
        value="popup => console.log(popup)" />
</template>*/