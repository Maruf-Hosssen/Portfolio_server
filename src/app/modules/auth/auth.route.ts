import express from 'express';
import { authContoller } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  authContoller.loginUser,
);

export const AuthRoutes = router;
