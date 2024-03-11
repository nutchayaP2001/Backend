import express from 'express';
import {Login, logOut, Me,LoginCus, MeCustomer} from '../controllers/Auth.js';
// import { Login, Register } from '../controllers/Auth.js';


const router = express.Router();

router.get('/api/me', Me);
router.post('/api/login', Login);
router.delete('/api/logout', logOut);
router.post('/api/logincus', LoginCus);
router.get('/api/mecustomer', MeCustomer);

// http://localhost:3000/register
// router.post('/register',Register)
// http://localhost:3000/login
// router.post('/login',Login)

export default router;