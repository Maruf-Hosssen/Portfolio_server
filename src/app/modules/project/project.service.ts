import { TProject } from './project.interface';
import { Project } from './project.model';

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};
const getProject = async () => {
  const result = await Project.find();
  return result;
};

export const projectServices = {
  createProject,
  getProject,
};
