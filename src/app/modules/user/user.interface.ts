import { Model } from 'mongoose';

export type IUser = {
  username: string;
  email: string;
  password: string;
  role: 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
};

export interface UserModel extends Model<IUser> {
  //instance methods for checking if the user exist
  isUserExistsByName(username: string): Promise<IUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
