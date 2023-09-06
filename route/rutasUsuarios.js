const express = require('express');
const router = express.Router();
const conection  = require('../conexion/db');

router.get('/servicios', (req, res) => {
    //res.send(__dirname); 
    //res.send('Hola mundo con express chidongongo');
    // res.render("index", { titulo: "te pones bien cachonda " ,
    //     data:rows  
    // });

    conection.query('SELECT * FROM users',function(err,rows)     {
        if(err) {
            // render to views/users/index.ejs
            res.render('servicios',{titulo: "poniendo servicios en ejs "});   
        } else {
            // render to views/users/index.ejs
            res.render("servicios", { titulo: "poniendo servicios en ejs " ,
            data:rows  
        });
        }
    });
});




module.exports = router;