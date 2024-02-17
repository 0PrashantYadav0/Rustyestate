import express from 'express';
import { user, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifiedUser.js';

const router = express.Router();

router.get('/user', user);
router.post('/update/:id',verifyToken, updateUser);

export default router;