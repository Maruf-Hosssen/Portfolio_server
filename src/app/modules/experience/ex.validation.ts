import { z } from 'zod';

const experienceValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    company: z.string({ required_error: 'Company name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    technologies: z
      .array(z.string())
      .nonempty({ message: 'Technologies are required' }),
    location: z.string({ required_error: 'Location is required' }),
  }),
});

export const experienceValidations = {
  experienceValidationSchema,
};
