const express = require('express');
const app = express();
const resultRoutes = require('./routes/result.routes');
const healthCheck = require('./utils/healthCheck');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/results', resultRoutes);
app.get('/health', healthCheck);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
