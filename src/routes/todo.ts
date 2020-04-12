import {Router} from 'express';

import {todoHandler} from '@/handlers';

const router = Router();

router.get('/', todoHandler.getAll);

export default router;
