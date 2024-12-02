const express = require('express');
const bodyParser = require('body-parser');
const resultatsRoutes = require('./routes/resul');

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(express.json()); // Middleware pour analyser le JSON

// Routes
app.use('/api/resultats', resultatsRoutes);

// Lancement du serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
