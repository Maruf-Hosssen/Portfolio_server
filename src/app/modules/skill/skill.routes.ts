import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { skillValidations } from './skill.validation';
import { skillContollers } from './skill.controller';

const router = express.Router();

router.post(
  '/skill',
  validateRequest(skillValidations.skillValidationSchema),
  skillContollers.createskill,
);

export const skillRouter = router;
