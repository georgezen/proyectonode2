
const express = require('express');
const app = express();
const puerto = 3000;

//configuracion del motor de plantillas para renderizar vistas html en este caso ejs
app.set("view engine", "ejs");
//configuracion de la carpeta donde se encuentran las vistas para el motor de plantillas ejs
app.set("views", __dirname + "/views");

//esta linea se le conoce como middleware para configurar la carpeta publica mas la direccion de donde esta ubicada la carpeta en este caso para los assets o recursos de css,js e imagenes del proyecto
app.use(express.static(__dirname+'/public'));

/**esta linea va a importar todas las rutas por medio de la libreria route */
app.use('/', require('./route/rutas'));


//middleware para la pagina 404
app.use((req,res,next) => {
    res.status(404).render('404',{
        titulo: "error 404",
        descripcion: "pagina no encontrada"
    });
});


/**lineas para la escucha del puerto */
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});