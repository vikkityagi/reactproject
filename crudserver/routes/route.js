import express from 'express';
import { addUser, addUser2 } from '../controller/user-controller.js';
import { getUsers, addBook, getUserById, editUser, deleteUser } from '../controller/book-controller.js';
const router = express.Router();

router.post('/adduser',addUser);
router.get('/showu',addUser2);
router.post('/addbook',addBook);
router.get('/show', getUsers);
router.get('/show/:id', getUserById);
router.put('/show/:id', editUser);
router.delete('/show/:id', deleteUser);

export default router;