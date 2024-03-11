import express from 'express';
import {
    getCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
} from '../controllers/CustomerController.js';
import { verifyCustomer, customerOnly } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/api/customers',verifyCustomer, customerOnly,getCustomers);
router.get('/api/customers/:id',verifyCustomer, customerOnly,  getCustomerById);
router.post('/api/customers', createCustomer);
router.patch('/api/customers/:id',verifyCustomer, customerOnly, updateCustomer);
router.delete('/api/customers/:id', verifyCustomer, customerOnly,deleteCustomer);

export default router;