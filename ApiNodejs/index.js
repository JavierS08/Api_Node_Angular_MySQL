require('./config/conexion');

const express = require('express');

const port = (process.env.port || 3000);

//express
const app= express();

//admitir 
app.use(express.json())

//config
app.set('port',port);

//rutas

app.use('/api',require('./rutas'));



// iniciar express
app.listen(app.get('port'),(err)=>{
    if(err){
        console.log('error al iniciar el servidor: '+err)
    }
    else{
        console.log('servidor iniciado en el puerto: '+port)
    }
})