import { supabase } from '../config/supabase.js';
import { Service } from '../models/Service.js';
import { v4 as uuidv4 } from 'uuid';

export const getServices = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('services')
            .select(`
                *,
                categorieService:categorie_services(id_categorie),
                ville:villes(id_ville),
                prestataire:prestataires(id_prestataire)
            `);
        if (error) throw error;
        res.status(200).json(data.map(service => new Service(service)));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getServiceById = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('services')
            .select(`
                *,
                categorieService:categorie_services(id_categorie),
                ville:villes(id_ville),
                prestataire:prestataires(id_prestataire)
            `)
            .eq('id_service', req.params.id)
            .single();
        if (error) throw error;
        if (!data) return res.status(404).json({ message: 'Service non trouvé' });
        res.status(200).json(new Service(data));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createService = async (req, res) => {
    try {
        const newServiceId = uuidv4();
        const { id_categorie, id_ville, id_prestataire, ...rest } = req.body;

        const { data, error } = await supabase
            .from('services')
            .insert([{ id_service: newServiceId, id_categorie, id_ville, id_prestataire, ...rest }])
            .select();
        if (error) throw error;
        res.status(201).json(new Service(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateService = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('services')
            .update(req.body)
            .eq('id_service', req.params.id)
            .select();
        if (error) throw error;
        res.status(200).json(new Service(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteService = async (req, res) => {
    try {
        const { error } = await supabase
            .from('services')
            .delete()
            .eq('id_service', req.params.id);
        if (error) throw error;
        res.status(200).json({ message: 'Service supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addImageToService = async (req, res) => {
    try {
        const { id_service } = req.params;
        const { imageUrl } = req.body;

        const { data: service, error: fetchError } = await supabase
            .from('services')
            .select('*')
            .eq('id_service', id_service)
            .single();
        
        if (fetchError) throw fetchError;
        
        const images = [...(service.images || []), imageUrl];
        
        const { data, error } = await supabase
            .from('services')
            .update({ images })
            .eq('id_service', id_service)
            .select();
            
        if (error) throw error;
        res.status(200).json(new Service(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};