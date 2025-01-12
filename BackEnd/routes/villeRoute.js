import express from 'express';
import {
    getVilles,
    getVilleById,
    createVille,
    updateVille,
    deleteVille
} from '../controllers/villeController.js';

const router = express.Router();

router.get('/villes', getVilles);
router.get('/villes/:id', getVilleById);
router.post('/villes', createVille);
router.put('/villes/:id', updateVille);
router.delete('/villes/:id', deleteVille);

export default router;