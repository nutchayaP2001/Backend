import express from 'express';
import { SaveNumberSale, getSale } from '../controllers/SaleController.js';
import { verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/api/salesnumber', verifyUser, getSale);
router.post('/api/salesnumber', verifyUser, SaveNumberSale);

export default router;
