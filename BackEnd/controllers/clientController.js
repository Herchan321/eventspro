import { supabase } from '../config/supabase.js';
import { Client } from '../models/Client.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';


export const getClients = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('clients')
            .select('id_client, nom, email, created_at, updated_at');
        if (error) throw error;
        res.status(200).json(data.map(client => new Client(client)));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getClientById = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('clients')
            .select('id_client, nom, email, created_at, updated_at')
            .eq('id', req.params.id)
            .single();
        if (error) throw error;
        if (!data) return res.status(404).json({ message: 'Client non trouvé' });
        res.status(200).json(new Client(data));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createClient = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newClientId = uuidv4();
        const { data, error } = await supabase
            .from('clients')
            .insert([{id_client: newClientId,...req.body, password: hashedPassword }])
            .select();
        if (error) throw error;
        res.status(201).json(new Client(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateClient = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        const { data, error } = await supabase
            .from('clients')
            .update(updateData)
            .eq('id_client', req.params.id)
            .select();
        if (error) throw error;
        res.status(200).json(new Client(data[0]));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const { error } = await supabase
            .from('clients')
            .delete()
            .eq('id_client', req.params.id);
        if (error) throw error;
        res.status(200).json({ message: 'Client supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};