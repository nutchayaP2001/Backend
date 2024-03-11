import express from 'express';
import {
    getProductDamage,
    getProductDamageById,
    createProductDamage,
    updateStatusProductDamage,
    deleteProductDamage,
    // getAdmin
} from '../controllers/ProductDamageController.js';
import { verifyCustomer, verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/api/productdamages',verifyUser, getProductDamage);
// router.get('/productadmin',verifyUser, getAdmin);
router.get('/api/productdamages/:id', getProductDamageById);
router.post('/api/productdamages', verifyCustomer,createProductDamage);
router.patch('/api/productdamages/:id', verifyUser, updateStatusProductDamage);
router.delete('/api/productdamages/:id', deleteProductDamage);

export default router;