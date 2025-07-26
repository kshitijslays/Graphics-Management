import express from 'express';
import { registerUser, loginUser, getUser, updateUser, deleteUser } from '../controllers/authController.js';
import { protect } from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user/:id', protect, getUser);
router.put('/user/:id', protect, updateUser);
router.delete('/user/:id', protect, deleteUser);

export default router;
