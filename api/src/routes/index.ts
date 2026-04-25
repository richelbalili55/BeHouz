import { Router } from 'express';
import authRoutes from '../modules/auth/auth.route';
import testroutes from '../modules/test/testroute';

const router = Router();

router.use('/auth', authRoutes);

router.use('/test', testroutes);

export default router;