const productos = [
    {
        id: 'botin01',
        marca: 'Puma ',
        modelo: 'Borusia',
        imagen: './images/botines/Borussia.webp',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '50000',
    },
    {
        id: 'botin02',
        marca: 'Puma ',
        modelo: 'Future Play',
        imagen: './images/botines/FuturePlay.webp',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '70000',
    },
    {
        id: 'botin03',
        marca: 'Puma ',
        modelo: 'Future Z',
        imagen: './images/botines/FutureZ4.3.webp',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '55000',
    },
    {
        id: 'botin04',
        marca: 'Puma ',
        modelo: 'UltraMatch',
        imagen: './images/botines/UltraMatch.webp',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '80000',
    },
    {
        id: 'botin05',
        marca: 'Adidas ',
        modelo: 'Copa',
        imagen: './images/botines/Copa 19.3.webp',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '85000',
    },
    {
        id: 'botin06',
        marca: ' Adidas',
        modelo: ' Predator Acc',
        imagen: './images/botines/Predator Accuracy.jpg',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '100000',
    },
    {
        id: 'botin07',
        marca: 'Adidas ',
        modelo: 'Predato Mutator',
        imagen: './images/botines/Predator Mutator.jpeg',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '95000',
    },
    {
        id: 'botin08',
        marca: 'Adidas ',
        modelo: 'X SpeedPortal',
        imagen: './images/botines/X SpeedPortal.jpeg',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '115000',
    },
    {
        id: 'botin09',
        marca: 'Nike ',
        modelo: 'Legend 8',
        imagen: './images/botines/Legend8.webp',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '99000',
    },
    {
        id: 'botin10',
        marca: 'Nike',
        modelo: ' Mercurial Super',
        imagen: './images/botines/Mercurial Superfly.jpeg',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '105000',
    },
    {
        id: 'botin11',
        marca: 'Nike ',
        modelo: 'Phantom Vision',
        imagen: './images/botines/Phantom Vision Pro.jpeg',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '100000',
    },
    {
        id: 'botin12',
        marca: 'Nike ',
        modelo: 'Zoom Vapor',
        imagen: './images/botines/Zoom Vapor.jpg',
        categoria: {
            id: 'botines',
            nombre: 'Botines'
        },
        precio: '120000',
    },
    {
        id: 'zapatilla01',
        marca: 'Nike ',
        modelo: 'Air Max 90',
        imagen: './images/zapatillas/Air Max 90 Futura.webp',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '150000',
    },
    {
        id: 'zapatilla02',
        marca: 'Nike ',
        modelo: 'Air Max 97',
        imagen: './images/zapatillas/Air Max 97 OG.webp',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '150000',
    },
    {
        id: 'zapatilla03',
        marca: 'Nike ',
        modelo: 'Renew Run',
        imagen: './images/zapatillas/Renew Run 3.jpg',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '120000',
    },
    {
        id: 'zapatilla04',
        marca: 'Nike ',
        modelo: 'Air Force 1',
        imagen: './images/zapatillas/Air Force 1 LE.jpg',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '150000',
    },
    {
        id: 'zapatiila05',
        marca: 'Adidas ',
        modelo: 'Force Bounce',
        imagen: './images/zapatillas/ForceBounce 2.0.webp',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '135000',
    },
    {
        id: 'zapatilla06',
        marca: 'Adidas ',
        modelo: 'Forum Mid',
        imagen: './images/zapatillas/Forum Mid.jpg',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '148000',
    },
    {
        id: 'zapatilla07',
        marca: 'Adidas',
        modelo: ' HVC',
        imagen: './images/zapatillas/HVC.jpg',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '125000',
    },
    {
        id: 'zapatilla08',
        marca: 'Adidas ',
        modelo: 'Response Super',
        imagen: './images/zapatillas/Response-Runner.webp',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '115000',
    },
    {
        id: 'zapatiila09',
        marca: 'Puma  ',
        modelo: 'R22',
        imagen: './images/zapatillas/R22.jpeg',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '145000',
    },
    {
        id: 'zapatilla10',
        marca: 'Puma ',
        modelo: 'Retaliate',
        imagen: './images/zapatillas/Retaliate 2.jpeg',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '125000',
    },
    {
        id: 'zapatilla11',
        marca: 'Puma ',
        modelo: 'Suede Classic',
        imagen: './images/zapatillas/Suede Classic.webp',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '100000',
    },
    {
        id: 'zapatilla12',
        marca: 'Puma ',
        modelo: 'Cali Dream',
        imagen: './images/zapatillas/Cali Dream lt.jpeg',
        categoria: {
            id: 'zapatillas',
            nombre: 'Zapatillas'
        },
        precio: '125000',
    }
];

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

cargarProductos(productos);

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