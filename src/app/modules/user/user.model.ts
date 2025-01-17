import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser, UserModel>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'ADMIN' },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  /* eslint-disable @typescript-eslint/no-this-alias */
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(12));
  next();
});

//statics
userSchema.statics.isUserExistsByName = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

//password matching
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<IUser, UserModel>('User', userSchema);
