import { Router } from 'express';

import { userRoute } from '../app/modules/user/user.route';
import { AuthRoutes } from '../app/modules/auth/auth.route';
import { experienceRouter } from '../app/modules/experience/ex.routes';
import { projectRouter } from '../app/modules/project/project.routes';
import { skillRouter } from '../app/modules/skill/skill.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/',
    route: userRoute,
  },
  {
    path: '/',
    route: AuthRoutes,
  },
  {
    path: '/',
    route: experienceRouter,
  },
  {
    path: '/',
    route: projectRouter,
  },
  {
    path: '/',
    route: skillRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
