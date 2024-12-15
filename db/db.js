const mysql = require('mysql2');

// Use environment variables for the MySQL connection configuration
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost', // Default to 'localhost' if not provided
    user: process.env.MYSQL_USER || 'root',      // Default to 'root'
    password: process.env.MYSQL_PASSWORD || 'nano@password',  // Default to an empty password
    database: process.env.MYSQL_DATABASE || 'my_db', // Default database name
    port: process.env.MYSQL_PORT || 3306,        // Default port
    waitForConnections: true,                    // Enable connection pool
    //connectionLimit: 10                          // Adjust as necessary for your workload
});

module.exports = pool.promise();
