import express from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getBy,
    getProductsSale,
    // searchFilters
} from '../controllers/ProductController.js';
// import { verifyCustomer } from '../middleware/AuthUser.js';
import { verifyUser } from '../middleware/AuthUser.js';

// Middleware
// import {auth} from '../middleware/AuthUser.js'

// import { upload } from '../middleware/UploadFile.js';

const router = express.Router();

router.get('/api/products',verifyUser, getProducts);
router.get('/api/productsale', getProductsSale);
router.post('/api/products',verifyUser,  createProduct);
router.delete('/api/products/:id', verifyUser, deleteProduct);

// Update
router.get('/api/product/:id', verifyUser, getProductById);
router.patch('/api/products/:id',verifyUser, updateProduct);

router.post('/api/productby', getBy);


// Search
// router.post('/search/filters',searchFilters)



export default router;