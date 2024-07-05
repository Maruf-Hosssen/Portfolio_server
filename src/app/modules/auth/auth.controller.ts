import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await authServices.loginUser(req.body);

  const { accessToken, userwithdetails } = result;
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User login successful',
    data: {
      user: {
        _id: userwithdetails?._id,
        username: userwithdetails?.username,
        email: userwithdetails?.email,
        role: userwithdetails?.role,
      },
      token: accessToken,
    },
  });
});

export const authContoller = {
  loginUser,
};
