const express = require('express');
const healthcheck = require('express-healthcheck');

const bodyParser = require('body-parser');
const resultatsRoutes = require('./routes/resul');

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(express.json()); // Middleware pour analyser le JSON

// Health Check Route
app.use('/health', healthcheck({
    healthy: () => {
        // Example advanced check
        const databaseIsConnected = true; // Replace with real checks
        return databaseIsConnected ? { status: 'Healthy' } : { status: 'Unhealthy' };
    }
}));

// Error handling
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An unexpected error occurred' });
});

// Routes
app.use('/api/resultats', resultatsRoutes);

// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
