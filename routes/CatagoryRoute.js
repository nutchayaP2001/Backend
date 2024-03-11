import express from 'express';
import { getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory } 
    from '../controllers/CategoryController.js';
    import { verifyUser} from '../middleware/AuthUser.js';
const router = express.Router();


router.get('/api/category', verifyUser, getCategory)
router.get('/api/category/:id', verifyUser,getCategoryById)
router.post('/api/category',verifyUser, createCategory)
router.patch('/api/category/:id',verifyUser, updateCategory)
router.delete('/api/category/:id', verifyUser, deleteCategory)

export default router;