import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { projectsvalidationSchemas } from './project.validation';
import { projectContollers } from './project.controller';

const router = express.Router();

router.post(
  '/project',
  validateRequest(projectsvalidationSchemas.projectValidationSchema),
  projectContollers.createProject,
);

router.get(
  '/project',

  projectContollers.getProject,
);

export const projectRouter = router;
