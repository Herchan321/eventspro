import express from 'express';
import {
    getPrestataires,
    getPrestataireById,
    createPrestataire,
    updatePrestataire,
    deletePrestataire
} from '../controllers/prestataireController.js';

const router = express.Router();

router.get('/prestataires', getPrestataires);
router.get('/prestataires/:id', getPrestataireById);
router.post('/prestataires', createPrestataire);
router.put('/prestataires/:id', updatePrestataire);
router.delete('/prestataires/:id', deletePrestataire);

export default router;