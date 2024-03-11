import express from 'express';
import {
    getPayments,
    getPaymentById,
    createPayments,
    updatePayments,
    deletePayments,
    createPaymentStatus
} from '../controllers/PaymentController.js';

import { verifyUser, verifyCustomer } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/api/payments',verifyUser,getPayments);
router.get('/api/payments/:id', verifyUser, getPaymentById);
router.post('/api/payments',verifyCustomer, createPayments);
router.patch('/api/paymentstatus/:id', verifyUser, createPaymentStatus);
router.patch('/api/payments/:id',verifyUser, updatePayments);
router.delete('/api/payments/:id',deletePayments);



export default router;