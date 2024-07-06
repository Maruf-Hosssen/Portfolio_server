import { z } from 'zod';

const projectValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
    description: z.string({ required_error: 'description is required' }),
    technologies: z.array(
      z.string({ required_error: 'technologies are required' }),
    ),
    img: z.string({ required_error: 'Image is required' }),
    link: z.string({ required_error: 'live link is required' }),
    githubClient: z.string(),
    githubServer: z.string(),
    features: z.string({ required_error: 'features are required' }),
  }),
});

export const projectsvalidationSchemas = {
  projectValidationSchema,
};
