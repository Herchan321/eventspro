require('dotenv').config();
const mongoose = require('mongoose');

console.log('DB_URI:', process.env.DB_URI); // Vérifiez si DB_URI est chargé correctement

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connecté');
        mongoose.disconnect(); // Déconnecter après le test
    })
    .catch(err => {
        console.error('Erreur de connexion MongoDB:', err);
    });