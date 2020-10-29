import express from 'express';
import {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
	getUsers,
	deleteUser,
	updateUser,
	getUserById
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/').post(registerUser).get(protect, admin, getUsers);
router
	.route('/:id')
	.delete(protect, admin, deleteUser)
	.put(protect, admin, updateUser)
	.get(protect, admin, getUserById);

export default router;
