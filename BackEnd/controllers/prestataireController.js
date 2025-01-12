import { Prestataire } from '../models/Prestataire.js';
import bcrypt from 'bcrypt';

export const getPrestataires = async (req, res) => {
    try {
        const prestataires = await Prestataire.find().populate('user');
        res.status(200).json(prestataires);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPrestataireById = async (req, res) => {
    try {
        const prestataire = await Prestataire.findById(req.params.id).populate('user');
        if (!prestataire) return res.status(404).json({ message: 'Prestataire non trouvé' });
        res.status(200).json(prestataire);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPrestataire = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const prestataire = await Prestataire.create({
            ...req.body,
            password: hashedPassword
        });
        res.status(201).json(prestataire);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatePrestataire = async (req, res) => {
    try {
        const prestataire = await Prestataire.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!prestataire) return res.status(404).json({ message: 'Prestataire non trouvé' });
        res.status(200).json(prestataire);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePrestataire = async (req, res) => {
    try {
        const prestataire = await Prestataire.findByIdAndDelete(req.params.id);
        if (!prestataire) return res.status(404).json({ message: 'Prestataire non trouvé' });
        res.status(200).json({ message: 'Prestataire supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};