import { supabase } from '../config/supabase.js';
import { Ville } from '../models/Ville.js';
import { v4 as uuidv4 } from 'uuid';

export const getVilles = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('villes')
            .select('*');
        if (error) throw error;
        res.status(200).json(data.map(ville => new Ville(ville)));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getVilleById = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('villes')
            .select('*')
            .eq('id_ville', req.params.id)
            .single();
        if (error) throw error;
        if (!data) return res.status(404).json({ message: 'Ville non trouvée' });
        res.status(200).json(new Ville(data));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createVille = async (req, res) => {
    try {
        const newVilleId = uuidv4();
        const { data, error } = await supabase
            .from('villes')
            .insert([{ id :newVilleId,...req.body}])
            .select();
        if (error) throw error;
        res.status(201).json(new Ville(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateVille = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('villes')
            .update(req.body)
            .eq('id_ville', req.params.id)
            .select();
        if (error) throw error;
        res.status(200).json(new Ville(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteVille = async (req, res) => {
    try {
        const { error } = await supabase
            .from('villes')
            .delete()
            .eq('id_ville', req.params.id);
        if (error) throw error;
        res.status(200).json({ message: 'Ville supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};