const {arrey,datos2,cowsay} = require('./arrey.js');
const http = require('http');


const server = http.createServer((req, res) => {
    res.end('Hola mundo 1');//res.end() es para enviar una respuesta al cliente o sea al navegador
});

const puerto = 3000;
server.listen(puerto, () => {
    console.log(`Servidor1 corriendo en el puerto ${puerto}`);//console.log() es para imprimir en consola del servidor o la terminal
});

/**funciones de ejemplo para entender bases node js */
// arrey.forEach((item, index) => {
//     console.log(`El item ${item} esta en ${index}`);
// });

// console.log(datos2());

// console.log(
//     cowsay.say({
//       text: "hola pinche putita",
//       e: "Oo",
//       T: "U",
//     })
//   );