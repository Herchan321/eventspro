import express from 'express';
import {
    getPrestataires,
    getPrestataireById,
    createPrestataire,
    updatePrestataire,
    deletePrestataire
} from '../controllers/prestataireController.js';

const router = express.Router();

router.get('/', getPrestataires);
router.get('/:id', getPrestataireById);
router.post('/', createPrestataire);
router.put('/:id', updatePrestataire);
router.delete('/:id', deletePrestataire);

export default router;