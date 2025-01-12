import { Client } from '../models/Client.js';
import bcrypt from 'bcrypt';

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find().select('-password');
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id).select('-password');
        if (!client) return res.status(404).json({ message: 'Client non trouvé' });
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createClient = async (req, res) => {
    try {
        const { nom, email, password, adresse, ville } = req.body;
        
        // Vérifier si l'email existe déjà
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé' });
        }

        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        const client = await Client.create({
            nom,
            email,
            password: hashedPassword,
            adresse,
            ville
        });

        // Exclure le mot de passe de la réponse
        const clientResponse = client.toObject();
        delete clientResponse.password;

        res.status(201).json(clientResponse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateClient = async (req, res) => {
    try {
        const { password, ...updateData } = req.body;

        // Si un nouveau mot de passe est fourni, le hasher
        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        const client = await Client.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        ).select('-password');

        if (!client) return res.status(404).json({ message: 'Client non trouvé' });
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) return res.status(404).json({ message: 'Client non trouvé' });
        res.status(200).json({ message: 'Client supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};