import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { experienceServices } from './ex.service';
import sendResponse from '../../utils/sendResponse';

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceServices.createExperience(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Experience added successfully',
    data: result,
  });
});
export const experienceContollers = {
  createExperience,
};
