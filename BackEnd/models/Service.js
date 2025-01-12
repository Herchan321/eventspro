import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, "Le nom du service est requis"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "La description du service est requise"],
        trim: true
    },
    categorieService: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategorieService',
        required: [true, "La catégorie du service est requise"]
    },
    ville: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ville',
        required: [true, "La ville est requise"]
    },
    prestataire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestataire',
        required: [true, "Le prestataire est requis"]
    },
    images: [{
        url: {
            type: String,
            required: [true, "L'URL de l'image est requise"]
        },
        public_id: {
            type: String,
            required: [true, "L'ID public de l'image est requis"]
        },
        description: {
            type: String
        }
    }],
    evaluation: {
        note: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        },
        commentaires: [{
            texte: String,
            auteur: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Client'
            },
            date: {
                type: Date,
                default: Date.now
            }
        }]
    }
}, {
    timestamps: true
});

const Service = mongoose.model('Service', serviceSchema);

export { Service };