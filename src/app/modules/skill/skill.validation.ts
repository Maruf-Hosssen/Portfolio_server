import { z } from 'zod';

const skillValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    logo: z.string({ required_error: 'Logo is required' }),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  }),
});

export const skillValidations = {
  skillValidationSchema,
};
