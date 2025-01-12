import { Service } from '../models/Service.js';
import cloudinary from '../config/cloudinary.js';

export const getServices = async (req, res) => {
    try {
        const services = await Service.find()
            .populate('categorieService')
            .populate('ville')
            .populate('prestataire');
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
            .populate('categorieService')
            .populate('ville')
            .populate('prestataire')
            .populate('evaluation.commentaires.auteur');
        if (!service) return res.status(404).json({ message: 'Service non trouvé' });
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createService = async (req, res) => {
    try {
        const { images, ...serviceData } = req.body;
        const uploadedImages = [];

        // Upload images to Cloudinary
        if (images && images.length > 0) {
            for (const image of images) {
                const result = await cloudinary.uploader.upload(image, {
                    folder: 'services'
                });
                uploadedImages.push({
                    url: result.secure_url,
                    public_id: result.public_id
                });
            }
        }

        const service = await Service.create({
            ...serviceData,
            images: uploadedImages
        });

        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateService = async (req, res) => {
    try {
        const { images, ...updateData } = req.body;
        const service = await Service.findById(req.params.id);

        if (!service) return res.status(404).json({ message: 'Service non trouvé' });

        // Handle image updates
        if (images && images.length > 0) {
            // Delete old images from Cloudinary
            for (const image of service.images) {
                await cloudinary.uploader.destroy(image.public_id);
            }

            // Upload new images
            const uploadedImages = [];
            for (const image of images) {
                const result = await cloudinary.uploader.upload(image, {
                    folder: 'services'
                });
                uploadedImages.push({
                    url: result.secure_url,
                    public_id: result.public_id
                });
            }
            updateData.images = uploadedImages;
        }

        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.status(200).json(updatedService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ message: 'Service non trouvé' });

        // Delete images from Cloudinary
        for (const image of service.images) {
            await cloudinary.uploader.destroy(image.public_id);
        }

        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Service supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};