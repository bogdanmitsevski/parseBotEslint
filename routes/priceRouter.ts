import Router from 'koa-router';
import authMiddleware from '../middleware/authMiddleware';
import PriceController from '../controllers/PriceController';

const router = new Router();

router.post('/addPrice', authMiddleware, PriceController.addPrice);

export default router;
