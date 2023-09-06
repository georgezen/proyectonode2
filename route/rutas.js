const express = require('express');
const router = express.Router();
const conection  = require('../conexion/db');

router.get('/', (req, res) => {
    //res.send(__dirname); 
    //res.send('Hola mundo con express chidongongo');
    // res.render("index", { titulo: "te pones bien cachonda " ,
    //     data:rows  
    // });

    conection.query('SELECT * FROM users',function(err,rows)     {
        if(err) {
            // render to views/users/index.ejs
            res.render('index',{titulo: "te pones bien cachonda "});   
        } else {
            // render to views/users/index.ejs
            res.render("index", { titulo: "te pones bien cachonda " ,
            data:rows  
        });
        }
    });
});

router.get('/tranquilito', (req, res) => {
    //res.send(`holis desde la tranquilidad con ${name}`);
    res.render("tranquilito", { titulo: "no mas corajes no mms" });/**de esta forma se renderizan vistas de ejs o algun otro motor */
});

// router.get('/servicios', (req, res) => {
    
//     res.render("servicios", { titulo: "poniendo servicios en ejs" });/**de esta forma se renderizan vistas de ejs o algun otro motor */
// });


module.exports = router;