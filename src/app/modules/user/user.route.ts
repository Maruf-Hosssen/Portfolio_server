import express from 'express';

import { UserValidation } from './user.validation';
import { userControllers } from './user.controller';

const router = express.Router();
router.post('/register', userControllers.createUser);

export const userRoute = router;
