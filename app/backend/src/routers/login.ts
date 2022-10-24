import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/userController';
import loginMiddleware from '../middlewares/middlewareLogin';

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.post('/', loginMiddleware, userController.login);

export default router;
