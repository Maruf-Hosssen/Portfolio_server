import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  img: { type: String, required: true },
  link: { type: String, required: true },
  githubClient: { type: String, required: true },
  githubServer: { type: String, required: true },
  features: { type: String, required: true },
});

export const Project = model<TProject>('Projects', projectSchema);
