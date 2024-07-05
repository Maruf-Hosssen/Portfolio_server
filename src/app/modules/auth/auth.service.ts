import config from '../../config';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

//login user
const loginUser = async (payload: TLoginUser) => {
  const userwithdetails = await User.findOne({ username: payload?.username });

  const user = await User.isUserExistsByName(payload.username);
  if (!user) {
    throw new Error('This user is not found !');
  }

  //check if the password is matching
  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new Error('Password does not match');

  //check the access and refresh tokens
  const jwtPayload = {
    username: user?.username,
    password: user?.password,
    role: user?.role,
  };
  //create access token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  return {
    accessToken,
    userwithdetails,
  };
};

export const authServices = {
  loginUser,
};