const express = require('express');
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import prestataireRoutes from './routes/prestataireRoute.js';
import villeRoutes from './routes/villeRoute.js';
import categorieServiceRoutes from './routes/categorieServiceRoute.js';
import clientRoutes from './routes/clientRoute.js';
import serviceRoute from './routes/serviceRoute.js';

dotenv.config();

const app = express();


// Routes
app.use('/api/categories', categorieServiceRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/prestataire', prestataireRoutes);
app.use('/api/ville', villeRoutes);
app.use('/api/services', serviceRoute);

// Database connection
mongoose.connect(process.env.DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;