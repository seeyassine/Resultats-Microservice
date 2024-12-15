const express = require('express');
const healthcheck = require('express-healthcheck');

const bodyParser = require('body-parser');
const resultatsRoutes = require('./routes/resul');

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(express.json()); // Middleware pour analyser le JSON

// Use the healthcheck middleware to add a default health check route
app.use('/health', healthcheck());

// If you want more advanced checks, you can configure your health check middleware
app.use('/health', healthcheck({ healthy: () => 'OK' }));


// Routes
app.use('/api/resultats', resultatsRoutes);

// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
