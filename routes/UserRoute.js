import express from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    userCart,
    getUserCart
} from '../controllers/UserController.js';
// import { createLocation, listDistrict, listProvince, listSubdistrict } from '../controllers/LocationController.js';
import { verifyUser, adminOnly } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/api/users', verifyUser, adminOnly, getUsers);
router.get('/api/users/:id', verifyUser, adminOnly ,getUserById);
router.post('/api/users', verifyUser, adminOnly,createUser);
router.patch('/api/users/:id', verifyUser, adminOnly, updateUser);
router.delete('/api/users/:id', verifyUser, adminOnly, deleteUser);

router.post('/api/users/carts',verifyUser,userCart)
router.get('/api/users/carts',verifyUser,getUserCart)

// router.post('/location', createLocation)
// router.get('/province', listProvince)
// router.get('/district/:id', listDistrict)
// router.get('/subdistrict/:id', listSubdistrict)

export default router;