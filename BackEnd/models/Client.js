import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true
});

const Client = mongoose.model('Client', clientSchema);

export { Client };