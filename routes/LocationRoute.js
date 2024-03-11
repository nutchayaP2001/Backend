import express from 'express';
import { createLocation, listDistrict, listProvince, listSubdistrict,getDistrict } from '../controllers/LocationController.js';
// import { verifyUser, adminOnly } from '../middleware/AuthUser.js';
const router = express.Router();

router.post('/api/location', createLocation)
router.get('/api/province', listProvince)
router.get('/api/district/:id', listDistrict)
router.get('/api/subdistrict/:id', listSubdistrict)

router.get('/api/districtBy', getDistrict)



export default router;