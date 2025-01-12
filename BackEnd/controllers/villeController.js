import { Ville } from '../models/Ville.js';

export const getVilles = async (req, res) => {
    try {
        const villes = await Ville.find();
        res.status(200).json(villes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getVilleById = async (req, res) => {
    try {
        const ville = await Ville.findById(req.params.id);
        if (!ville) return res.status(404).json({ message: 'Ville non trouvée' });
        res.status(200).json(ville);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createVille = async (req, res) => {
    try {
        const ville = await Ville.create(req.body);
        res.status(201).json(ville);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateVille = async (req, res) => {
    try {
        const ville = await Ville.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!ville) return res.status(404).json({ message: 'Ville non trouvée' });
        res.status(200).json(ville);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteVille = async (req, res) => {
    try {
        const ville = await Ville.findByIdAndDelete(req.params.id);
        if (!ville) return res.status(404).json({ message: 'Ville non trouvée' });
        res.status(200).json({ message: 'Ville supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};