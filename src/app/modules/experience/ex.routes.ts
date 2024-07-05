import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { experienceValidations } from './ex.validation';
import { experienceContollers } from './ex.controller';

const router = express.Router();

router.post(
  '/experience',
  validateRequest(experienceValidations.experienceValidationSchema),
  experienceContollers.createExperience,
);

export const experienceRouter = router;