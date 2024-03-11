import express from 'express';
import {
    getPromotion,
    getPromotionById,
    createPromotion,
    updatePromotion,
    deletePromotion
} from '../controllers/PromotionController.js';
import { verifyUser } from '../middleware/AuthUser.js';


const router = express.Router();

router.get('/api/promotions', verifyUser,getPromotion);
router.get('/api/promotions/:id', getPromotionById);
router.post('/api/promotions',verifyUser, createPromotion);
router.patch('/api/promotions/:id', updatePromotion);
router.delete('/api/promotions/:id', deletePromotion)


export default router;