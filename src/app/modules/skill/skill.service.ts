import { TSKill } from './skill.interface';
import { Skill } from './skill.model';

const createskill = async (payload: TSKill) => {
  const result = await Skill.create(payload);
  return result;
};
const getskill = async () => {
  const result = await Skill.find();
  return result;
};

export const skillServices = {
  createskill,
  getskill,
};
