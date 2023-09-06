const mysql = require('mysql');
require('../node_modules/dotenv').config();
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: process.env.DBNAME
});

conection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Conectado');
	}
});

module.exports = conection;