import express from 'express';
import {
    getOrders,
    getOrderCus,
    getOrderById,
    createOrder,
    createOrderStatus,
    updateOrder,
    deleteOrder
} from '../controllers/OrderController.js';

import { verifyUser, verifyCustomer } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/api/orders', getOrders);
router.get('/api/ordercus', verifyCustomer, getOrderCus);
router.get('/api/orders/:id', verifyUser, getOrderById);
router.post('/api/orders', verifyCustomer, createOrder);
router.patch('/api/orderstatus/:id', verifyUser, createOrderStatus);
router.patch('/api/orders/:id', verifyUser, updateOrder);
router.delete('/api/orders/:id', verifyUser, deleteOrder);

export default router;