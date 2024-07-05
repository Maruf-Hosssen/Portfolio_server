import { TExperience } from './ex.interface';
import { Experience } from './ex.model';

const createExperience = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

export const experienceServices = {
  createExperience,
};