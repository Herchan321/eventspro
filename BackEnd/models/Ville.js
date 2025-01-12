import mongoose from 'mongoose';

const villeSchema = new mongoose.Schema({
    id_ville: {
        type: String,
        required: [true, "L'ID de la ville est requis"],
        unique: true,
        match: [/^[A-Z]{3}\d{3}$/, "Format d'ID ville invalide (ex: PAR001)"]
    },
    nom: {
        type: String,
        required: [true, "Le nom de la ville est requis"],
        trim: true
    },
    codePostal: {
        type: String,
        required: [true, "Le code postal est requis"],
        match: [/^\d{5}$/, "Format de code postal invalide"]
    }
}, {
    timestamps: true
});

const Ville = mongoose.model('Ville', villeSchema);

export { Ville };