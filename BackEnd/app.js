import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './config/supabase.js';
import prestataireRoutes from './routes/prestataireRoute.js';
import villeRoutes from './routes/villeRoute.js';
import categorieServiceRoutes from './routes/categorieServiceRoute.js';
import clientRoutes from './routes/clientRoute.js';
import serviceRoute from './routes/serviceRoute.js';

dotenv.config();

const app = express();

// Middleware
// CORS Configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Test Supabase connection
const testConnection = async () => {
    try {
        const { data, error } = await supabase.from('clients').select('count');
        if (error) throw error;
        console.log('Supabase connected successfully');
    } catch (err) {
        console.error('Supabase connection error:', err.message);
        process.exit(1);
    }
};

await testConnection();

// Routes
app.use('/api/categories', categorieServiceRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/prestataire', prestataireRoutes);
app.use('/api/ville', villeRoutes);
app.use('/api/services', serviceRoute);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export { app, supabase };