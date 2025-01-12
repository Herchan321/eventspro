import mongoose from 'mongoose';

const prestataireSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'Le nom est requis'],
        trim: true
    },
    prenom: {
        type: String,
        required: [true, 'Le prénom est requis'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'L\'email est requis'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Veuillez entrer un email valide']
    },
    password: {
        type: String,
        required: [true, 'Le mot de passe est requis'],
        minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères']
    },
    companyName: {
        type: String,
        required: [true, 'Le nom de l\'entreprise est requis'],
        trim: true
    },
    businessType: {
        type: String,
        required: [true, 'Le type d\'activité est requis'],
        trim: true
    },
    apInfo: {
        type: String,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Prestataire = mongoose.model('Prestataire', prestataireSchema);

export { Prestataire };