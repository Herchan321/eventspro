import { supabase } from '../config/supabase.js';
import { CategorieService } from '../models/CategorieService.js';
import { v4 as uuidv4 } from 'uuid';

export const getAllCategories = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('categorie_services')
            .select('*');
        if (error) throw error;
        res.status(200).json(data.map(cat => new CategorieService(cat)));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCategorieById = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('categorie_services')
            .select('*')
            .eq('id_categorie', req.params.id)
            .single();
        if (error) throw error;
        if (!data) return res.status(404).json({ message: 'Categorie not found' });
        res.status(200).json(new CategorieService(data));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCategorie = async (req, res) => {
    try {
        const newcategorieId = uuidv4();
        const { data, error } = await supabase
            .from('categorie_services')
            .insert([{id_categorie:newcategorieId,...req.body}])
            .select();
        if (error) throw error;
        res.status(201).json(new CategorieService(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateCategorie = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('categorie_services')
            .update(req.body)
            .eq('id_categorie', req.params.id)
            .select();
        if (error) throw error;
        if (!data[0]) return res.status(404).json({ message: 'Categorie not found' });
        res.status(200).json(new CategorieService(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCategorie = async (req, res) => {
    try {
        const { error } = await supabase
            .from('categorie_services')
            .delete()
            .eq('id_categorie', req.params.id);
        if (error) throw error;
        res.status(200).json({ message: 'Categorie deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};