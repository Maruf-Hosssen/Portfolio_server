import { TExperience } from './ex.interface';
import { model, Schema } from 'mongoose';

const experienceSchema = new Schema<TExperience>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  technologies: { type: [String], required: true },
  location: { type: String, required: true },
});

export const Experience = model<TExperience>('Experience', experienceSchema);
