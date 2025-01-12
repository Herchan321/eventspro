import mongoose from 'mongoose';

const categorieServiceSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const CategorieService = mongoose.model('CategorieService', categorieServiceSchema);

export { CategorieService };