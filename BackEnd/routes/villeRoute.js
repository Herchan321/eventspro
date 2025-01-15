import express from 'express';
import {
    getVilles,
    getVilleById,
    createVille,
    updateVille,
    deleteVille
} from '../controllers/villeController.js';

const router = express.Router();

router.get('/', getVilles);
router.get('/:id', getVilleById);
router.post('/', createVille);
router.put('/:id', updateVille);
router.delete('/:id', deleteVille);

export default router;