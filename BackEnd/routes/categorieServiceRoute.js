import express from 'express';
import { 
    getAllCategories,
    getCategorieById,
    createCategorie,
    updateCategorie,
    deleteCategorie 
} from '../controllers/categorieServiceController.js';

const router = express.Router();

// GET /api/categories
router.get('/', getAllCategories);

// GET /api/categories/:id
router.get('/:id', getCategorieById);

// POST /api/categories
router.post('/', createCategorie);

// PUT /api/categories/:id
router.put('/:id', updateCategorie);

// DELETE /api/categories/:id
router.delete('/:id', deleteCategorie);

export default router;