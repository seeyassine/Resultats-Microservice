const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // Remplacez par votre hôte
    user: 'root',      // Nom d'utilisateur MySQL
    password: '',      // Mot de passe MySQL
    database: 'gestion_labo_mr', // Remplacez par le nom de votre base
});

module.exports = pool.promise();
