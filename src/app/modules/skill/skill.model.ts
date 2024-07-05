import { model, Schema } from 'mongoose';
import { TSKill } from './skill.interface';

const skillSchema = new Schema<TSKill>({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
});

export const Skill = model<TSKill>('Skills', skillSchema);
