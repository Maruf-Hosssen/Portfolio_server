import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { skillServices } from './skill.service';

const createskill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillServices.createskill(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill added successfully',
    data: result,
  });
});
export const skillContollers = {
  createskill,
};
