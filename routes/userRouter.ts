import UserController from '../controllers/UserController';
import Router from 'koa-router';

const router = new Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);

export default router;
