import { supabase } from '../config/supabase.js';
import { Prestataire } from '../models/Prestataire.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export const getPrestataires = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('prestataires')
            .select('*');
        if (error) throw error;
        res.status(200).json(data.map(p => new Prestataire(p)));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPrestataireById = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('prestataires')
            .select('*')
            .eq('id_prstataire', req.params.id)
            .single();
        if (error) throw error;
        if (!data) return res.status(404).json({ message: 'Prestataire non trouvé' });
        res.status(200).json(new Prestataire(data));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPrestataire = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newPrestataireId = uuidv4();
        const { data, error } = await supabase
            .from('prestataires')
            .insert([{id_pretataire:newPrestataireId ,...req.body, password: hashedPassword }])
            .select();
        if (error) throw error;
        res.status(201).json(new Prestataire(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatePrestataire = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        const { data, error } = await supabase
            .from('prestataires')
            .update(updateData)
            .eq('id_prestataire', req.params.id)
            .select();
        if (error) throw error;
        res.status(200).json(new Prestataire(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePrestataire = async (req, res) => {
    try {
        const { error } = await supabase
            .from('prestataires')
            .delete()
            .eq('id_prestataire', req.params.id);
        if (error) throw error;
        res.status(200).json({ message: 'Prestataire supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};