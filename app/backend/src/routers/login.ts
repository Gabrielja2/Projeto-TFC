import { Router } from 'express';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import loginMiddleware from '../middlewares/middlewareLogin';

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.post('/', loginMiddleware, userController.login);
router.get('/validate', userController.validate);

export default router;
