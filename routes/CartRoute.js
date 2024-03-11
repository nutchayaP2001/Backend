import express from 'express';
import { verifyUser } from '../middleware/AuthUser.js';
import { deleteCart, getCartById, getCartPage, getCartProductById, postCartPage, updateCart } from '../controllers/CartController.js';


const router = express.Router();

router.get('/api/cart', getCartPage);
router.get('/api/cart/:id', getCartById);
router.get('/api/cartproduct/:id', getCartProductById);
router.post('/api/cart',verifyUser, postCartPage);
router.patch('/api/cart/:id', updateCart);
router.delete('/api/cart/:id', deleteCart)


export default router;