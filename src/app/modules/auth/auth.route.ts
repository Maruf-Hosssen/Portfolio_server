import express from 'express';
import { authContoller } from './auth.controller';

const router = express.Router();
router.post(
  '/login',
  //   validateRequest(AuthValidation.loginValidationSchema),
  authContoller.loginUser,
);

export const AuthRoutes = router;
