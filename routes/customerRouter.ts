import Router from 'koa-router';
import CustomerController from '../controllers/CustomerController';
const router = new Router();
import authMiddleware from '../middleware/authMiddleware';

router.post('/getCustomers', CustomerController.getCustomer);
router.post('/addCustomers', authMiddleware, CustomerController.addCustomers);

export default router;
