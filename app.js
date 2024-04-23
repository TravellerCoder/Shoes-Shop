const express = require ('express');
const path = require ('path');
import cors from 'cors';


// SDK de Mercado Pago
import { MercadoPagoConfig } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });




const app = express();
const publicPaht= path.resolve(__dirname, './public') ;
app.use(express.static(publicPaht));
app.use(cors());
//const port = process.env.PORT || 3000;
const port = 3000;
app.listen(port, (error) => {
    if(error) {
        return console.log(error)
    }
    console.log('server UUUUP')
});



app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './src/index.html'))
});

app.get('/carrito', function(req,res){
    res.sendFile(path.resolve(__dirname, './src/carrito.html'))
});

app.get('/orden-de-pago', function(req,res){ 
    res.sendFile(path.resolve(__dirname, './src/orden.html'))
});   